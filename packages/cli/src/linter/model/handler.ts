// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { ParsedDesignSystem, RawColorValue, RawRampDef, RawPairDef, RawMotionDef, RawIconographyDef, RawRegistryEntry, RawComponentValue } from '../parser/spec.js';
import type {
  ModelSpec,
  ModelResult,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
  ResolvedShadow,
  ResolvedDuration,
  ResolvedEasing,
  ResolvedValue,
  ComponentDef,
  Finding,
  RampDef,
  PairDef,
  ColorIndexEntry,
  MotionState,
  IconographyState,
  RegistryEntry,
} from './spec.js';

import {
  isValidColor,
  isParseableDimension,
  isTokenReference,
  parseDimensionParts,
  parseDurationParts,
  isValidEasing,
  parseCubicBezier,
} from './spec.js';
import { COMPONENT_SUB_TOKEN_VALIDATORS } from '../component-validators.js';
import { generateRampSteps, DEFAULT_RAMP_STEPS } from './color-ramp.js';
import { ICON_LIBRARIES, KIND_DEFAULTS } from '../spec-config.js';

const MAX_REFERENCE_DEPTH = 10;

/**
 * Builds a resolved DesignSystemState from parsed YAML tokens.
 * Handles color parsing, dimension parsing, typography construction,
 * and chained token reference resolution with cycle detection.
 * Never throws — all errors returned as ModelResult failures.
 */
export class ModelHandler implements ModelSpec {
  execute(input: ParsedDesignSystem): ModelResult {
    try {
      const findings: Finding[] = [];
      const symbolTable = new Map<string, ResolvedValue>();
      const colors = new Map<string, ResolvedColor>();
      const typography = new Map<string, ResolvedTypography>();
      const rounded = new Map<string, ResolvedDimension>();
      const spacing = new Map<string, ResolvedDimension>();
      const elevation = new Map<string, ResolvedShadow>();
      const colorRamps = new Map<string, RampDef>();
      const colorPairs = new Map<string, PairDef>();
      const motion: MotionState = {
        duration: new Map<string, ResolvedDuration>(),
        easing: new Map<string, ResolvedEasing>(),
      };
      let iconography: IconographyState | undefined;

      // ── Phase 1: Resolve primitive tokens ──────────────────────────
      // Colors
      if (input.colors) {
        for (const [name, raw] of Object.entries(input.colors)) {
          if (typeof raw === 'string') {
            if (isTokenReference(raw)) {
              // Store raw reference for later resolution
              symbolTable.set(`colors.${name}`, raw);
            } else if (isValidColor(raw)) {
              const resolved = parseColor(raw);
              colors.set(name, resolved);
              symbolTable.set(`colors.${name}`, resolved);
            } else {
              findings.push({
                severity: 'error',
                path: `colors.${name}`,
                message: `'${raw}' is not a valid color. Expected a hex color code (e.g., #ffffff).`,
              });
              // Store as-is for fallback
              symbolTable.set(`colors.${name}`, raw);
            }
          } else if (raw && typeof raw === 'object') {
            expandObjectColor(name, raw, { colors, colorRamps, colorPairs, symbolTable, findings });
          }
        }
      }

      // Typography
      if (input.typography) {
        for (const [name, props] of Object.entries(input.typography)) {
          const resolved = parseTypography(props, `typography.${name}`, findings);
          typography.set(name, resolved);
          symbolTable.set(`typography.${name}`, resolved);
        }
      }

      // Rounded
      if (input.rounded) {
        for (const [name, raw] of Object.entries(input.rounded)) {
          if (typeof raw === 'string') {
            if (isParseableDimension(raw)) {
              const resolved = parseDimension(raw);
              if (resolved.unit !== 'px' && resolved.unit !== 'rem' && resolved.unit !== 'em') {
                findings.push({
                  severity: 'error',
                  path: `rounded.${name}`,
                  message: `'${raw}' has an invalid unit '${resolved.unit}'. Only px, rem, and em are allowed.`,
                });
              }
              rounded.set(name, resolved);
              symbolTable.set(`rounded.${name}`, resolved);
            } else if (!isTokenReference(raw)) {
              findings.push({
                severity: 'error',
                path: `rounded.${name}`,
                message: `'${raw}' is not a valid dimension.`,
              });
              symbolTable.set(`rounded.${name}`, raw);
            } else {
              symbolTable.set(`rounded.${name}`, raw);
            }
          }
        }
      }

      // Spacing
      if (input.spacing) {
        for (const [name, raw] of Object.entries(input.spacing)) {
          if (isParseableDimension(raw)) {
            const resolved = parseDimension(raw);
            spacing.set(name, resolved);
            symbolTable.set(`spacing.${name}`, resolved);
          } else {
            symbolTable.set(`spacing.${name}`, raw);
          }
        }
      }

      // Elevation — semantic shadow tokens (resting / raised / overlay / modal).
      // Values are CSS shadow strings; validation is generous to match the
      // wide CSS shadow grammar.
      if (input.elevation) {
        for (const [name, raw] of Object.entries(input.elevation)) {
          if (typeof raw !== 'string') continue;
          if (isTokenReference(raw)) {
            symbolTable.set(`elevation.${name}`, raw);
          } else {
            const shadow: ResolvedShadow = { type: 'shadow', raw };
            elevation.set(name, shadow);
            symbolTable.set(`elevation.${name}`, shadow);
          }
        }
      }

      // Motion — duration tokens (ms / s) and CSS easings, plus the
      // optional reduced-motion fallback. Each duration / easing is
      // independently addressable from the symbol table at
      // `motion.duration.<name>` / `motion.easing.<name>`.
      if (input.motion) {
        parseMotion(input.motion, motion, symbolTable, findings);
      }

      // Iconography — single library, an icon-size scale, optional
      // stroke weight, default size, and color-binding rule.
      if (input.iconography) {
        iconography = parseIconography(input.iconography, symbolTable, findings);
      }

      // ── Phase 2: Resolve chained color references ──────────────────
      // Iterate color entries that are still raw references and resolve them
      if (input.colors) {
        for (const [name, raw] of Object.entries(input.colors)) {
          if (typeof raw === 'string' && isTokenReference(raw)) {
            const resolved = resolveReference(symbolTable, raw.slice(1, -1), new Set());
            if (resolved !== null && typeof resolved === 'object' && 'type' in resolved && resolved.type === 'color') {
              colors.set(name, resolved as ResolvedColor);
              symbolTable.set(`colors.${name}`, resolved);
            }
          }
        }
      }

      // Resolve chained rounded references
      if (input.rounded) {
        for (const [name, raw] of Object.entries(input.rounded)) {
          if (typeof raw === 'string' && isTokenReference(raw)) {
            const resolved = resolveReference(symbolTable, raw.slice(1, -1), new Set());
            if (
              resolved !== null &&
              typeof resolved === 'object' &&
              'type' in resolved &&
              resolved.type === 'dimension'
            ) {
              rounded.set(name, resolved as ResolvedDimension);
              symbolTable.set(`rounded.${name}`, resolved);
            }
          }
        }
      }

      // Resolve chained spacing references
      if (input.spacing) {
        for (const [name, raw] of Object.entries(input.spacing)) {
          if (typeof raw === 'string' && isTokenReference(raw)) {
            const resolved = resolveReference(symbolTable, raw.slice(1, -1), new Set());
            if (
              resolved !== null &&
              typeof resolved === 'object' &&
              'type' in resolved &&
              resolved.type === 'dimension'
            ) {
              spacing.set(name, resolved as ResolvedDimension);
              symbolTable.set(`spacing.${name}`, resolved);
            }
          }
        }
      }

      // Resolve chained elevation references
      if (input.elevation) {
        for (const [name, raw] of Object.entries(input.elevation)) {
          if (typeof raw === 'string' && isTokenReference(raw)) {
            const resolved = resolveReference(symbolTable, raw.slice(1, -1), new Set());
            if (
              resolved !== null &&
              typeof resolved === 'object' &&
              'type' in resolved &&
              resolved.type === 'shadow'
            ) {
              elevation.set(name, resolved as ResolvedShadow);
              symbolTable.set(`elevation.${name}`, resolved);
            }
          }
        }
      }

      // ── Phase 3a: Resolve registry ─────────────────────────────────
      const componentRegistry = input.componentRegistry
        ? buildRegistry(input.componentRegistry)
        : undefined;

      // ── Phase 3b: Build components ─────────────────────────────────
      const components = new Map<string, ComponentDef>();
      // Pre-merge composed properties: for each definition, walk its registry
      // entry's `composes` chain and merge those definitions' raw properties
      // before resolving overrides. Cycles are short-circuited; the
      // `composes-cycle` rule reports them.
      const mergedRaw = mergeComposedDefinitions(input.components ?? {}, componentRegistry);
      if (mergedRaw) {
        for (const [compName, props] of Object.entries(mergedRaw)) {
          const properties = new Map<string, ResolvedValue>();
          const states = new Map<string, Map<string, ResolvedValue>>();
          const resolvedStates = new Map<string, Map<string, ResolvedValue>>();
          const unresolvedRefs: string[] = [];
          const referencedTokens: string[] = [];
          let interactive: boolean | undefined;

          const collectRefs = (value: unknown) => {
            if (typeof value !== 'string') return;
            for (const m of value.matchAll(/\{([a-zA-Z0-9._-]+)\}/g)) {
              referencedTokens.push(m[1]!);
            }
          };

          for (const [propName, rawValue] of Object.entries(props)) {
            // `interactive: true` is a meta-flag, not a property.
            if (propName === 'interactive') {
              if (typeof rawValue === 'boolean') {
                interactive = rawValue;
              }
              continue;
            }
            // `states:` is a nested map of state-name → property overrides.
            if (propName === 'states') {
              if (rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue)) {
                for (const [stateName, stateProps] of Object.entries(rawValue as Record<string, unknown>)) {
                  if (!stateProps || typeof stateProps !== 'object' || Array.isArray(stateProps)) continue;
                  const overrides = new Map<string, ResolvedValue>();
                  for (const [sPropName, sRawValue] of Object.entries(stateProps as Record<string, unknown>)) {
                    collectRefs(sRawValue);
                    const validator = COMPONENT_SUB_TOKEN_VALIDATORS.get(sPropName);
                    if (validator && typeof sRawValue === 'string') {
                      const result = validator(sRawValue);
                      if (!result.ok) {
                        findings.push({
                          severity: 'error',
                          path: `components.${compName}.states.${stateName}.${sPropName}`,
                          message: result.error ?? `Invalid value for '${sPropName}'.`,
                        });
                      }
                    }
                    const resolved = resolveComponentValue(sRawValue, symbolTable, unresolvedRefs);
                    overrides.set(sPropName, resolved);
                  }
                  states.set(stateName, overrides);
                }
              }
              continue;
            }

            collectRefs(rawValue);

            // Validate the raw author input against the typed schema.
            // Token references and resolution failures are not validated
            // here — those are handled by the broken-ref rule.
            const validator = COMPONENT_SUB_TOKEN_VALIDATORS.get(propName);
            if (validator && typeof rawValue === 'string') {
              const result = validator(rawValue);
              if (!result.ok) {
                findings.push({
                  severity: 'error',
                  path: `components.${compName}.${propName}`,
                  message: result.error ?? `Invalid value for '${propName}'.`,
                });
              }
            }

            // `elevation: raised` (bare semantic name) → look up in the
            // elevation map even though the author didn't write a {ref}.
            if (propName === 'elevation' && typeof rawValue === 'string'
                && !isTokenReference(rawValue) && !isValidColor(rawValue)
                && !isParseableDimension(rawValue)) {
              const resolved = symbolTable.get(`elevation.${rawValue.trim()}`);
              if (resolved !== undefined) {
                properties.set(propName, resolved);
                continue;
              }
            }

            properties.set(propName, resolveComponentValue(rawValue, symbolTable, unresolvedRefs));
          }

          // Build resolvedStates: base ⊕ state overrides
          for (const [stateName, overrides] of states) {
            const merged = new Map<string, ResolvedValue>(properties);
            for (const [propName, value] of overrides) {
              merged.set(propName, value);
            }
            resolvedStates.set(stateName, merged);
          }

          const def: ComponentDef = { properties, states, resolvedStates, unresolvedRefs, referencedTokens };
          if (interactive !== undefined) def.interactive = interactive;
          components.set(compName, def);
        }
      }

      const colorIndex = buildColorIndex(colors);

      return {
        designSystem: {
          name: input.name,
          description: input.description,
          colors,
          typography,
          rounded,
          spacing,
          elevation,
          motion,
          iconography,
          components,
          componentRegistry,
          colorRamps,
          colorPairs,
          symbolTable,
          sections: input.sections,
          documentSections: input.documentSections,
          colorIndex,
        },
        findings,
      };
    } catch (error) {
      return {
        designSystem: {
          colors: new Map(),
          typography: new Map(),
          rounded: new Map(),
          spacing: new Map(),
          elevation: new Map(),
          motion: { duration: new Map(), easing: new Map() },
          components: new Map(),
          colorRamps: new Map(),
          colorPairs: new Map(),
          symbolTable: new Map(),
          colorIndex: new Map(),
        },
        findings: [
          {
            severity: 'error',
            message: `Unexpected error during model building: ${error instanceof Error ? error.message : String(error)
              }`,
          },
        ],
      };
    }
  }
}

// ── Component registry & composition ───────────────────────────────

/**
 * Build the resolved registry map from raw entries. Defaults `interactive`
 * from the kind when not explicitly set; missing kinds leave `interactive`
 * `false`. Duplicate names take the last definition (linter rules can flag
 * this as a separate concern).
 */
function buildRegistry(rawEntries: RawRegistryEntry[]): Map<string, RegistryEntry> {
  const out = new Map<string, RegistryEntry>();
  for (const raw of rawEntries) {
    const interactive = raw.interactive
      ?? (raw.kind ? KIND_DEFAULTS[raw.kind]?.interactive ?? false : false);
    const entry: RegistryEntry = {
      name: raw.name,
      interactive,
      requiredProperties: raw.requiredProperties ?? [],
    };
    if (raw.kind !== undefined) entry.kind = raw.kind;
    if (raw.composes !== undefined) entry.composes = raw.composes;
    out.set(raw.name, entry);
  }
  return out;
}

/**
 * Pre-merge `composes` chains into a flat raw definitions map, in declaration
 * order: composed properties are written first, then the definition's own
 * properties override. Cycles are detected via a visited set and short-
 * circuited (the chain stops at the cycle point); the linter's
 * `composes-cycle` rule reports the cycle separately.
 */
function mergeComposedDefinitions(
  rawDefs: Record<string, Record<string, RawComponentValue>>,
  registry: Map<string, RegistryEntry> | undefined,
): Record<string, Record<string, RawComponentValue>> {
  if (!registry) return rawDefs;
  const out: Record<string, Record<string, RawComponentValue>> = {};
  for (const [name, props] of Object.entries(rawDefs)) {
    out[name] = resolveComposedProps(name, rawDefs, registry, new Set());
    // Ensure props are preserved even if registry has no entry
    if (!registry.has(name)) {
      out[name] = props;
    }
  }
  return out;
}

function resolveComposedProps(
  name: string,
  rawDefs: Record<string, Record<string, RawComponentValue>>,
  registry: Map<string, RegistryEntry>,
  visited: Set<string>,
): Record<string, RawComponentValue> {
  if (visited.has(name)) return {};
  visited.add(name);
  const entry = registry.get(name);
  const ownProps = rawDefs[name] ?? {};
  if (!entry?.composes) return { ...ownProps };
  const composed = resolveComposedProps(entry.composes, rawDefs, registry, visited);
  return { ...composed, ...ownProps };
}

// ── Object-shaped color expansion (ramps and pairs) ────────────────

interface ExpansionContext {
  colors: Map<string, ResolvedColor>;
  colorRamps: Map<string, RampDef>;
  colorPairs: Map<string, PairDef>;
  symbolTable: Map<string, ResolvedValue>;
  findings: Finding[];
}

/**
 * Expand an object-shaped color value (ramp or pair) into the flat colors map
 * and the symbol table. Emits findings for malformed input or pair contrast
 * floor violations. Unknown object shapes produce a recoverable error finding.
 */
function expandObjectColor(name: string, raw: RawRampDef | RawPairDef, ctx: ExpansionContext): void {
  if (raw.type === 'ramp') {
    expandRamp(name, raw, ctx);
  } else if (raw.type === 'pair') {
    expandPair(name, raw, ctx);
  } else {
    ctx.findings.push({
      severity: 'error',
      path: `colors.${name}`,
      message: `Unknown color shape '${(raw as { type?: string }).type ?? 'object'}'. Expected 'ramp' or 'pair'.`,
    });
  }
}

function expandRamp(name: string, raw: RawRampDef, ctx: ExpansionContext): void {
  if (typeof raw.anchor !== 'string' || !isValidColor(raw.anchor)) {
    ctx.findings.push({
      severity: 'error',
      path: `colors.${name}.anchor`,
      message: `'${raw.anchor}' is not a valid hex anchor. Expected a hex color code (e.g., #ffffff).`,
    });
    return;
  }
  const steps = raw.steps && raw.steps.length > 0 ? raw.steps : [...DEFAULT_RAMP_STEPS];
  const stepHexes = generateRampSteps(raw.anchor, steps);

  const stepColors = new Map<number, ResolvedColor>();
  for (const [step, hex] of stepHexes) {
    const resolved = parseColor(hex);
    resolved.rampMember = { ramp: name, step };
    stepColors.set(step, resolved);
    ctx.colors.set(`${name}.${step}`, resolved);
    ctx.symbolTable.set(`colors.${name}.${step}`, resolved);
  }

  // Anchor lives at the bare ramp name. Use the user's literal hex (avoids round-trip drift).
  const anchorColor = parseColor(raw.anchor);
  anchorColor.rampMember = { ramp: name, step: 500 };
  if (raw.humanName) anchorColor.humanName = raw.humanName;
  ctx.colors.set(name, anchorColor);
  ctx.symbolTable.set(`colors.${name}`, anchorColor);

  const ramp: RampDef = {
    name,
    anchor: anchorColor,
    steps: stepColors,
    pairs: new Map(),
  };
  if (raw.humanName) ramp.humanName = raw.humanName;
  if (raw.description) ramp.description = raw.description;
  ctx.colorRamps.set(name, ramp);

  // Inline pair derivations: synthesize pair entries + flat M3-style aliases.
  if (raw.pairs) {
    for (const [pairKey, { bg, fg }] of Object.entries(raw.pairs)) {
      const bgColor = stepColors.get(bg);
      const fgColor = stepColors.get(fg);
      if (!bgColor || !fgColor) {
        ctx.findings.push({
          severity: 'error',
          path: `colors.${name}.pairs.${pairKey}`,
          message: `Pair '${pairKey}' references step ${!bgColor ? bg : fg}, but the ramp does not declare that step.`,
        });
        continue;
      }
      ramp.pairs.set(pairKey, { bg, fg });

      const pairName = `${name}-${pairKey}`;
      const onPairName = `on-${name}-${pairKey}`;
      // Pair entries are flat aliases for the underlying ramp steps; strip
      // rampMember so the Tailwind/DTCG exporters and orphaned-tokens treat
      // them as standalone pair members rather than ramp steps.
      const { rampMember: _bgStep, ...bgRest } = bgColor;
      const { rampMember: _fgStep, ...fgRest } = fgColor;
      const containerEntry: ResolvedColor = { ...bgRest, pairRole: { pair: pairName, role: 'container' } };
      const onContainerEntry: ResolvedColor = { ...fgRest, pairRole: { pair: pairName, role: 'on-container' } };

      ctx.colors.set(pairName, containerEntry);
      ctx.colors.set(onPairName, onContainerEntry);
      ctx.symbolTable.set(`colors.${pairName}`, containerEntry);
      ctx.symbolTable.set(`colors.${onPairName}`, onContainerEntry);

      const pair: PairDef = {
        name: pairName,
        container: containerEntry,
        onContainer: onContainerEntry,
        minContrast: WCAG_AA_BODY,
        derivedFromRamp: name,
      };
      ctx.colorPairs.set(pairName, pair);
    }
  }
}

function expandPair(name: string, raw: RawPairDef, ctx: ExpansionContext): void {
  if (typeof raw.container !== 'string' || !isValidColor(raw.container)) {
    ctx.findings.push({
      severity: 'error',
      path: `colors.${name}.container`,
      message: `'${raw.container}' is not a valid hex color.`,
    });
    return;
  }
  if (typeof raw.onContainer !== 'string' || !isValidColor(raw.onContainer)) {
    ctx.findings.push({
      severity: 'error',
      path: `colors.${name}.onContainer`,
      message: `'${raw.onContainer}' is not a valid hex color.`,
    });
    return;
  }

  const minContrast = typeof raw.minContrast === 'number' ? raw.minContrast : WCAG_AA_BODY;
  const containerColor = parseColor(raw.container);
  const onContainerColor = parseColor(raw.onContainer);
  containerColor.pairRole = { pair: name, role: 'container' };
  onContainerColor.pairRole = { pair: name, role: 'on-container' };

  // Dotted form: explicit access to either member.
  ctx.colors.set(`${name}.container`, containerColor);
  ctx.colors.set(`${name}.onContainer`, onContainerColor);
  ctx.symbolTable.set(`colors.${name}.container`, containerColor);
  ctx.symbolTable.set(`colors.${name}.onContainer`, onContainerColor);

  // Flat aliases: the bare pair name resolves to the container, `on-<name>` to the
  // on-container. Mirrors the M3-style naming used by ramp-derived pairs.
  ctx.colors.set(name, containerColor);
  ctx.colors.set(`on-${name}`, onContainerColor);
  ctx.symbolTable.set(`colors.${name}`, containerColor);
  ctx.symbolTable.set(`colors.on-${name}`, onContainerColor);

  const pair: PairDef = {
    name,
    container: containerColor,
    onContainer: onContainerColor,
    minContrast,
  };
  ctx.colorPairs.set(name, pair);
}

const WCAG_AA_BODY = 4.5;

/**
 * Build the reverse hex → tokens index used by the `prose-token-mismatch` rule.
 * Keys are normalized hex literals (lowercased, expanded to 6/8 digits).
 * Each entry records every token whose value resolved to that hex; ramp
 * anchors propagate their `humanName` so prose anchors can match by display
 * name (e.g., "Boston Clay") in addition to the systematic key.
 */
function buildColorIndex(colors: Map<string, ResolvedColor>): Map<string, ColorIndexEntry[]> {
  const index = new Map<string, ColorIndexEntry[]>();
  for (const [tokenKey, color] of colors) {
    const hex = color.hex.toLowerCase();
    const entry: ColorIndexEntry = {
      path: `colors.${tokenKey}`,
      tokenKey,
    };
    if (color.humanName) entry.humanName = color.humanName;
    const list = index.get(hex);
    if (list) {
      list.push(entry);
    } else {
      index.set(hex, [entry]);
    }
  }
  return index;
}

// ── Pure utility functions ─────────────────────────────────────────

/**
 * Resolve a single component property value (string/number/boolean) into
 * a ResolvedValue, mutating `unresolvedRefs` for any reference that fails.
 * Numbers and booleans are returned coerced to string so the existing
 * downstream consumers (which handle `string` as the catch-all) keep working,
 * but only when the source value is a primitive non-reference scalar.
 */
function resolveComponentValue(
  rawValue: unknown,
  symbolTable: Map<string, ResolvedValue>,
  unresolvedRefs: string[],
): ResolvedValue {
  if (typeof rawValue === 'number' || typeof rawValue === 'boolean') {
    return String(rawValue);
  }
  if (typeof rawValue !== 'string') {
    return String(rawValue);
  }
  if (isTokenReference(rawValue)) {
    const refPath = rawValue.slice(1, -1);
    const resolved = resolveReference(symbolTable, refPath, new Set());
    if (resolved !== null) return resolved;
    unresolvedRefs.push(rawValue);
    return rawValue;
  }
  if (isValidColor(rawValue)) return parseColor(rawValue);
  if (isParseableDimension(rawValue)) return parseDimension(rawValue);
  // Shorthand strings (transitions, borders, shadows) may embed `{path}`
  // references. Resolve them inline so the property surfaces the substituted
  // value to exporters and rules.
  if (rawValue.includes('{')) {
    const { value, unresolved } = resolveEmbeddedRefs(rawValue, symbolTable);
    for (const ref of unresolved) unresolvedRefs.push(ref);
    return value;
  }
  return rawValue;
}

/**
 * Parse a hex color string into a ResolvedColor with RGB + WCAG luminance.
 */
export function parseColor(raw: string): ResolvedColor {
  let hex = raw;

  // Normalize #RGB to #RRGGBB
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }
  // Normalize #RGBA to #RRGGBBAA
  if (hex.length === 5) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}${hex[4]}${hex[4]}`;
  }

  hex = hex.toLowerCase();

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  let a: number | undefined;
  if (hex.length === 9) {
    a = parseInt(hex.slice(7, 9), 16) / 255;
  }

  const luminance = computeLuminance(r, g, b);

  return { type: 'color', hex, r, g, b, a, luminance };
}

/**
 * Compute WCAG 2.1 relative luminance.
 * Uses sRGB linearization.
 */
function computeLuminance(r: number, g: number, b: number): number {
  const linearize = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

/**
 * Parse a dimension string like "42px" or "1.5rem".
 */
function parseDimension(raw: string): ResolvedDimension {
  const parts = parseDimensionParts(raw);
  if (!parts) {
    throw new Error(`Invalid dimension: ${raw}`);
  }
  return {
    type: 'dimension',
    value: parts.value,
    unit: parts.unit,
  };
}

/**
 * Parse a typography properties object into a ResolvedTypography.
 */
function parseTypography(props: Record<string, string | number>, path: string, findings: Finding[]): ResolvedTypography {
  const result: ResolvedTypography = { type: 'typography' };

  if (typeof props['fontFamily'] === 'string') {
    const ff = props['fontFamily'];
    if (isValidColor(ff)) {
      findings.push({
        severity: 'error',
        path: `${path}.fontFamily`,
        message: `'${ff}' appears to be a color, not a valid font family.`,
      });
    }
    result.fontFamily = ff;
  }
  if (props['fontWeight'] !== undefined) {
    const fw = props['fontWeight'];
    let fwValue: number | undefined;

    if (typeof fw === 'number') {
      fwValue = fw;
    } else if (typeof fw === 'string') {
      const parsed = Number(fw);
      if (!isNaN(parsed)) {
        fwValue = parsed;
      }
    }

    if (fwValue === undefined) {
      findings.push({
        severity: 'error',
        path: `${path}.fontWeight`,
        message: `'${fw}' is not a valid font weight. Expected a number.`,
      });
    } else {
      result.fontWeight = fwValue;
    }
  }
  if (typeof props['fontFeature'] === 'string') result.fontFeature = props['fontFeature'];
  if (typeof props['fontVariation'] === 'string') result.fontVariation = props['fontVariation'];

  const dimensionProps = ['fontSize', 'lineHeight', 'letterSpacing'] as const;
  for (const prop of dimensionProps) {
    const raw = props[prop];
    if (typeof raw === 'string') {
      if (isParseableDimension(raw)) {
        const parsed = parseDimension(raw);
        if (parsed.unit !== 'px' && parsed.unit !== 'rem' && parsed.unit !== 'em') {
          findings.push({
            severity: 'error',
            path: `${path}.${prop}`,
            message: `'${raw}' has an invalid unit '${parsed.unit}'. Only px, rem, and em are allowed.`,
          });
        }
        result[prop] = parsed;
      } else if (prop === 'lineHeight' && /^\d*\.?\d+$/.test(raw)) {
        result[prop] = {
          type: 'dimension',
          value: parseFloat(raw),
          unit: '',
        };
      } else if (!isTokenReference(raw)) {
        findings.push({
          severity: 'error',
          path: `${path}.${prop}`,
          message: `'${raw}' is not a valid dimension.`,
        });
      }
    }
  }

  return result;
}

/**
 * Resolve a token reference with chained resolution and cycle detection.
 * Returns null if the reference cannot be resolved (not found or circular).
 */
function resolveReference(
  symbolTable: Map<string, ResolvedValue>,
  path: string,
  visited: Set<string>,
  depth: number = 0,
): ResolvedValue | null {
  if (depth > MAX_REFERENCE_DEPTH) return null;
  if (visited.has(path)) return null; // Circular reference
  visited.add(path);

  const value = symbolTable.get(path);
  if (value === undefined) return null;

  // If the value is itself a reference string, follow the chain
  if (typeof value === 'string' && isTokenReference(value)) {
    const innerPath = value.slice(1, -1);
    return resolveReference(symbolTable, innerPath, visited, depth + 1);
  }

  return value;
}

/**
 * WCAG 2.1 contrast ratio between two resolved colors.
 */
export function contrastRatio(a: ResolvedColor, b: ResolvedColor): number {
  const L1 = Math.max(a.luminance, b.luminance);
  const L2 = Math.min(a.luminance, b.luminance);
  return (L1 + 0.05) / (L2 + 0.05);
}

// ── Motion parsing ────────────────────────────────────────────────

/**
 * Populate the motion sub-state from raw input. Validates each duration
 * (must be in ms or s) and each easing (CSS keyword, `cubic-bezier(...)`,
 * or `steps(...)`). Emits `error`-level findings for malformed values.
 *
 * `reducedMotion` is recorded by name; consumers resolve it against the
 * `duration` / `easing` maps so the canonical token surface stays visible.
 */
function parseMotion(
  raw: RawMotionDef,
  motion: MotionState,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): void {
  if (raw.duration) {
    for (const [name, value] of Object.entries(raw.duration)) {
      if (typeof value !== 'string') continue;
      const parts = parseDurationParts(value);
      if (!parts) {
        findings.push({
          severity: 'error',
          path: `motion.duration.${name}`,
          message: `'${value}' is not a valid duration. Expected a value in ms or s (e.g., 150ms, 0.4s).`,
        });
        continue;
      }
      const dur: ResolvedDuration = { type: 'duration', value: parts.value, unit: parts.unit };
      motion.duration.set(name, dur);
      symbolTable.set(`motion.duration.${name}`, dur);
    }
  }

  if (raw.easing) {
    for (const [name, value] of Object.entries(raw.easing)) {
      if (typeof value !== 'string') continue;
      if (!isValidEasing(value)) {
        findings.push({
          severity: 'error',
          path: `motion.easing.${name}`,
          message: `'${value}' is not a valid easing. Expected a CSS keyword (linear, ease-in, ...), 'cubic-bezier(x1, y1, x2, y2)', or 'steps(...)'.`,
        });
        continue;
      }
      const easing: ResolvedEasing = { type: 'easing', raw: value.trim() };
      const points = parseCubicBezier(value);
      if (points) easing.controlPoints = points;
      motion.easing.set(name, easing);
      symbolTable.set(`motion.easing.${name}`, easing);
    }
  }

  if (raw.reducedMotion) {
    const rm = raw.reducedMotion;
    const duration = typeof rm.duration === 'string' ? rm.duration.trim() : 'instant';
    const easing = typeof rm.easing === 'string' ? rm.easing.trim() : 'standard';
    motion.reducedMotion = { duration, easing };
    if (raw.duration && !(duration in raw.duration)) {
      findings.push({
        severity: 'warning',
        path: 'motion.reducedMotion.duration',
        message: `Reduced-motion duration '${duration}' is not declared in motion.duration.`,
      });
    }
    if (raw.easing && !(easing in raw.easing)) {
      findings.push({
        severity: 'warning',
        path: 'motion.reducedMotion.easing',
        message: `Reduced-motion easing '${easing}' is not declared in motion.easing.`,
      });
    }
  }
}

// ── Iconography parsing ───────────────────────────────────────────

/**
 * Build the resolved iconography state from raw input. Validates the
 * library name against the closed enum (`lucide`, `material-symbols`,
 * `heroicons`, `phosphor`, `custom-svg`) and parses each size into a
 * `ResolvedDimension`. Returns `undefined` only when the library is
 * missing or unrecognized — in either case an error finding is emitted.
 */
function parseIconography(
  raw: RawIconographyDef,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): IconographyState | undefined {
  if (!raw.library || typeof raw.library.name !== 'string') {
    findings.push({
      severity: 'error',
      path: 'iconography.library',
      message: `iconography.library.name is required (one of: ${ICON_LIBRARIES.join(', ')}).`,
    });
    return undefined;
  }
  const libName = raw.library.name.trim();
  if (!(ICON_LIBRARIES as readonly string[]).includes(libName)) {
    findings.push({
      severity: 'warning',
      path: 'iconography.library.name',
      message: `'${libName}' is not a known icon library. Recognized: ${ICON_LIBRARIES.join(', ')}. Use 'custom-svg' for in-house sets.`,
    });
  }
  const style = (raw.library.style ?? 'outlined').trim();
  if (style !== 'outlined' && style !== 'filled') {
    findings.push({
      severity: 'error',
      path: 'iconography.library.style',
      message: `iconography.library.style must be 'outlined' or 'filled' (got '${style}').`,
    });
  }

  const sizes = new Map<string, ResolvedDimension>();
  if (raw.sizes) {
    for (const [name, value] of Object.entries(raw.sizes)) {
      if (typeof value !== 'string') continue;
      if (!isParseableDimension(value)) {
        findings.push({
          severity: 'error',
          path: `iconography.sizes.${name}`,
          message: `'${value}' is not a valid icon size. Expected a dimension (e.g., 16px).`,
        });
        continue;
      }
      const parts = parseDimensionParts(value)!;
      const dim: ResolvedDimension = { type: 'dimension', value: parts.value, unit: parts.unit };
      sizes.set(name, dim);
      symbolTable.set(`iconography.sizes.${name}`, dim);
    }
  }

  let strokeWeight: ResolvedDimension | undefined;
  if (typeof raw.strokeWeight === 'string') {
    if (isParseableDimension(raw.strokeWeight)) {
      const parts = parseDimensionParts(raw.strokeWeight)!;
      strokeWeight = { type: 'dimension', value: parts.value, unit: parts.unit };
      symbolTable.set('iconography.strokeWeight', strokeWeight);
    } else {
      findings.push({
        severity: 'error',
        path: 'iconography.strokeWeight',
        message: `'${raw.strokeWeight}' is not a valid stroke weight. Expected a dimension (e.g., 1.5px).`,
      });
    }
  }

  const defaultSize = (raw.defaultSize ?? 'md').trim();
  if (sizes.size > 0 && !sizes.has(defaultSize)) {
    findings.push({
      severity: 'warning',
      path: 'iconography.defaultSize',
      message: `defaultSize '${defaultSize}' is not declared in iconography.sizes.`,
    });
  }

  const colorBinding = (raw.colorBinding ?? 'currentColor').trim();

  const state: IconographyState = {
    library: {
      name: libName,
      style: (style === 'filled' ? 'filled' : 'outlined'),
    },
    sizes,
    defaultSize,
    colorBinding,
  };
  if (raw.library.version) state.library.version = raw.library.version;
  if (strokeWeight) state.strokeWeight = strokeWeight;
  return state;
}

// ── Embedded reference resolution (component transition shorthands) ──

const EMBEDDED_REF_RE = /\{[a-zA-Z0-9._-]+\}/g;

/**
 * Replace embedded `{path}` references in a string with the resolved
 * value's serialized form. Only motion duration / easing tokens are
 * stringified inline today — other types fall through unchanged so the
 * `broken-ref` rule can flag the unresolved reference visibly.
 */
export function resolveEmbeddedRefs(
  raw: string,
  symbolTable: Map<string, ResolvedValue>,
): { value: string; unresolved: string[] } {
  const unresolved: string[] = [];
  const replaced = raw.replace(EMBEDDED_REF_RE, (match) => {
    const path = match.slice(1, -1);
    const resolved = symbolTable.get(path);
    if (resolved === undefined) {
      unresolved.push(match);
      return match;
    }
    if (typeof resolved === 'object' && resolved !== null && 'type' in resolved) {
      if (resolved.type === 'duration') {
        return `${resolved.value}${resolved.unit}`;
      }
      if (resolved.type === 'easing') {
        return resolved.raw;
      }
      if (resolved.type === 'dimension') {
        return `${resolved.value}${resolved.unit}`;
      }
    }
    if (typeof resolved === 'string') {
      return resolved;
    }
    return match;
  });
  return { value: replaced, unresolved };
}