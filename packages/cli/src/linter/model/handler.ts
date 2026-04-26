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

import type { ParsedDesignSystem, RawColorValue, RawRampDef, RawPairDef, RawMotionDef, RawIconographyDef, RawRegistryEntry, RawComponentValue, RawThemeDef, RawVoice, RawCopy, RawBreakpointsDef, RawGridDef, RawLayoutRulesDef, RawTemplateDef, RawPageDef } from '../parser/spec.js';
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
  Voice,
  Copy,
  BannedRegex,
  ThemeView,
  ThemeContrastTarget,
  BreakpointsState,
  GridState,
  LayoutRulesState,
  TemplateDef,
  PageDef,
} from './spec.js';
import { DEFAULT_CONTRAST_TARGET } from './spec.js';

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
import { ICON_LIBRARIES, KIND_DEFAULTS, BASE_THEME_NAME, VOICE_AXES, VOICE_PERSON, CASING_VALUES, CASING_SURFACES, BREAKPOINT_PHILOSOPHIES } from '../spec-config.js';

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

      // Layout: breakpoints, grid, layoutRules, templates, pages.
      const breakpoints = input.breakpoints
        ? parseBreakpoints(input.breakpoints, symbolTable, findings)
        : undefined;
      const grid = input.grid
        ? parseGrid(input.grid, symbolTable, findings)
        : undefined;
      const layoutRules = input.layoutRules
        ? parseLayoutRules(input.layoutRules, symbolTable, findings)
        : undefined;
      const templates = input.templates
        ? parseTemplates(input.templates, symbolTable, findings)
        : undefined;
      const pages = input.pages
        ? parsePages(input.pages, findings)
        : undefined;

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
          const propertyRefs = new Map<string, string>();
          const stateRefs = new Map<string, Map<string, string>>();
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
                  const stateRefMap = new Map<string, string>();
                  for (const [sPropName, sRawValue] of Object.entries(stateProps as Record<string, unknown>)) {
                    collectRefs(sRawValue);
                    const wholeRef = wholeValueTokenRef(sRawValue);
                    if (wholeRef !== null) stateRefMap.set(sPropName, wholeRef);
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
                  if (stateRefMap.size > 0) stateRefs.set(stateName, stateRefMap);
                }
              }
              continue;
            }

            collectRefs(rawValue);
            const wholeRef = wholeValueTokenRef(rawValue);
            if (wholeRef !== null) propertyRefs.set(propName, wholeRef);

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

          const def: ComponentDef = {
            properties,
            states,
            resolvedStates,
            unresolvedRefs,
            referencedTokens,
            propertyRefs,
            stateRefs,
          };
          if (interactive !== undefined) def.interactive = interactive;
          components.set(compName, def);
        }
      }

      const colorIndex = buildColorIndex(colors);

      // ── Phase 4: Theme views ───────────────────────────────────────
      // Build the implicit `light` base view from the resolved top-level
      // state, then deep-merge each declared theme's overrides on top of
      // its `inheritsFrom` parent (default: `light`). Theme views carry
      // their own re-resolved colors / pairs / ramps so the same token
      // name can hold different values across themes.
      const themes = buildThemeViews({
        baseColors: colors,
        baseTypography: typography,
        baseRounded: rounded,
        baseSpacing: spacing,
        baseElevation: elevation,
        baseColorRamps: colorRamps,
        baseColorPairs: colorPairs,
        rawThemes: input.themes,
        findings,
      });

      // ── Phase 5: Voice + copy ──────────────────────────────────────
      const voice = input.voice ? parseVoice(input.voice, findings) : undefined;
      const copy = input.copy ? parseCopy(input.copy, findings) : undefined;

      // Populate the symbol table with voice.* and copy.* keys so that
      // `{voice.warmth}` and friends resolve through the broken-ref rule.
      if (voice) {
        for (const [axis, value] of voice.axes) symbolTable.set(`voice.${axis}`, String(value));
        if (voice.person) symbolTable.set('voice.person', voice.person);
        if (voice.tense) symbolTable.set('voice.tense', voice.tense);
        if (voice.contractions) symbolTable.set('voice.contractions', voice.contractions);
        if (voice.oxfordComma !== undefined) symbolTable.set('voice.oxfordComma', String(voice.oxfordComma));
      }
      if (copy) {
        if (copy.buttonLabelMaxWords !== undefined) {
          symbolTable.set('copy.buttonLabelMaxWords', String(copy.buttonLabelMaxWords));
        }
        if (copy.errorPattern) symbolTable.set('copy.errorPattern', copy.errorPattern);
        if (copy.emptyStateTone) symbolTable.set('copy.emptyStateTone', copy.emptyStateTone);
        for (const [surface, value] of copy.casing) symbolTable.set(`copy.casing.${surface}`, value);
      }

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
          themes,
          activeTheme: BASE_THEME_NAME,
          symbolTable,
          sections: input.sections,
          documentSections: input.documentSections,
          colorIndex,
          voice,
          copy,
          breakpoints,
          grid,
          layoutRules,
          templates,
          pages,
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
          themes: new Map(),
          activeTheme: BASE_THEME_NAME,
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
  /**
   * Optional prefix prepended to all error `path:` values. Defaults to
   * `'colors'`. Theme-scoped expansions pass `'themes.<name>.colors'` so
   * findings are clearly attributable to the theme.
   */
  pathPrefix?: string;
}

function colorPath(ctx: ExpansionContext): string {
  return ctx.pathPrefix ?? 'colors';
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
      path: `${colorPath(ctx)}.${name}`,
      message: `Unknown color shape '${(raw as { type?: string }).type ?? 'object'}'. Expected 'ramp' or 'pair'.`,
    });
  }
}

function expandRamp(name: string, raw: RawRampDef, ctx: ExpansionContext): void {
  if (typeof raw.anchor !== 'string' || !isValidColor(raw.anchor)) {
    ctx.findings.push({
      severity: 'error',
      path: `${colorPath(ctx)}.${name}.anchor`,
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
          path: `${colorPath(ctx)}.${name}.pairs.${pairKey}`,
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
      path: `${colorPath(ctx)}.${name}.container`,
      message: `'${raw.container}' is not a valid hex color.`,
    });
    return;
  }
  if (typeof raw.onContainer !== 'string' || !isValidColor(raw.onContainer)) {
    ctx.findings.push({
      severity: 'error',
      path: `${colorPath(ctx)}.${name}.onContainer`,
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
 * If the raw value is a single whole-value token reference (`{colors.primary}`),
 * return its bare path (`colors.primary`). Otherwise return `null` (the value
 * is a literal, an embedded-ref shorthand, or a non-string).
 */
function wholeValueTokenRef(rawValue: unknown): string | null {
  if (typeof rawValue !== 'string') return null;
  if (!isTokenReference(rawValue)) return null;
  return rawValue.slice(1, -1);
}

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

// ── Voice / Copy parsing ────────────────────────────────────────────

/**
 * Parse the `voice:` block. Axis values must be integers 1–5; out-of-range or
 * non-integer values produce an error finding and the axis is dropped. Unknown
 * top-level keys produce a warning so authors discover the closed set.
 */
export function parseVoice(raw: RawVoice, findings: Finding[]): Voice {
  const axes = new Map<string, number>();
  const voice: Voice = { axes };
  const validAxes = new Set(VOICE_AXES);
  const validPersons = new Set(VOICE_PERSON);

  for (const [key, value] of Object.entries(raw)) {
    if (validAxes.has(key)) {
      if (typeof value !== 'number' || !Number.isInteger(value) || value < 1 || value > 5) {
        findings.push({
          severity: 'error',
          path: `voice.${key}`,
          message: `Voice axis '${key}' must be an integer between 1 and 5 (got ${JSON.stringify(value)}).`,
        });
        continue;
      }
      axes.set(key, value);
      continue;
    }

    if (key === 'person') {
      if (typeof value !== 'string' || !validPersons.has(value)) {
        findings.push({
          severity: 'error',
          path: 'voice.person',
          message: `voice.person must be one of: ${VOICE_PERSON.join(', ')} (got ${JSON.stringify(value)}).`,
        });
        continue;
      }
      voice.person = value;
      continue;
    }
    if (key === 'tense') {
      if (typeof value === 'string') voice.tense = value;
      continue;
    }
    if (key === 'oxfordComma') {
      if (typeof value === 'boolean') voice.oxfordComma = value;
      continue;
    }
    if (key === 'contractions') {
      if (typeof value === 'string') voice.contractions = value;
      continue;
    }

    findings.push({
      severity: 'warning',
      path: `voice.${key}`,
      message: `Unknown voice key '${key}'. Recognized: ${[...VOICE_AXES, 'person', 'tense', 'oxfordComma', 'contractions'].join(', ')}.`,
    });
  }

  return voice;
}

/**
 * Parse the `copy:` block. Validates the casing enum, compiles bannedRegex
 * once, and surfaces unknown surfaces / values via warning findings.
 */
export function parseCopy(raw: RawCopy, findings: Finding[]): Copy {
  const casing = new Map<string, string>();
  const bannedTerms: string[] = [];
  const bannedRegex: BannedRegex[] = [];
  const approvedTerms = new Map<string, string>();
  const reservedNames: string[] = [];
  const validCasings = new Set(CASING_VALUES);
  const validSurfaces = new Set(CASING_SURFACES);

  if (raw.casing && typeof raw.casing === 'object') {
    for (const [surface, value] of Object.entries(raw.casing)) {
      if (!validSurfaces.has(surface)) {
        findings.push({
          severity: 'warning',
          path: `copy.casing.${surface}`,
          message: `Unknown casing surface '${surface}'. Recognized: ${CASING_SURFACES.join(', ')}.`,
        });
        continue;
      }
      if (typeof value !== 'string' || !validCasings.has(value)) {
        findings.push({
          severity: 'error',
          path: `copy.casing.${surface}`,
          message: `copy.casing.${surface} must be one of: ${CASING_VALUES.join(', ')} (got ${JSON.stringify(value)}).`,
        });
        continue;
      }
      casing.set(surface, value);
    }
  }

  if (Array.isArray(raw.bannedTerms)) {
    for (const term of raw.bannedTerms) {
      if (typeof term === 'string' && term.length > 0) bannedTerms.push(term);
    }
  }

  if (Array.isArray(raw.bannedRegex)) {
    for (const src of raw.bannedRegex) {
      if (typeof src !== 'string') continue;
      try {
        // Strip an inline `(?i)` PCRE-style flag and translate to JS `i`.
        let flags = 'g';
        let body = src;
        const inlineI = body.match(/^\(\?i\)/);
        if (inlineI) {
          flags += 'i';
          body = body.slice(inlineI[0].length);
        }
        bannedRegex.push({ source: src, pattern: new RegExp(body, flags) });
      } catch (e) {
        findings.push({
          severity: 'error',
          path: 'copy.bannedRegex',
          message: `Invalid regex '${src}': ${e instanceof Error ? e.message : String(e)}.`,
        });
      }
    }
  }

  if (raw.approvedTerms && typeof raw.approvedTerms === 'object') {
    for (const [from, to] of Object.entries(raw.approvedTerms)) {
      if (typeof to === 'string' && to.length > 0) approvedTerms.set(from, to);
    }
  }

  if (Array.isArray(raw.reservedNames)) {
    for (const name of raw.reservedNames) {
      if (typeof name === 'string' && name.length > 0) reservedNames.push(name);
    }
  }

  const copy: Copy = {
    casing,
    bannedTerms,
    bannedRegex,
    approvedTerms,
    reservedNames,
  };

  if (typeof raw.buttonLabelMaxWords === 'number' && Number.isInteger(raw.buttonLabelMaxWords) && raw.buttonLabelMaxWords > 0) {
    copy.buttonLabelMaxWords = raw.buttonLabelMaxWords;
  } else if (raw.buttonLabelMaxWords !== undefined) {
    findings.push({
      severity: 'error',
      path: 'copy.buttonLabelMaxWords',
      message: `copy.buttonLabelMaxWords must be a positive integer (got ${JSON.stringify(raw.buttonLabelMaxWords)}).`,
    });
  }
  if (typeof raw.errorPattern === 'string') copy.errorPattern = raw.errorPattern;
  if (typeof raw.emptyStateTone === 'string') copy.emptyStateTone = raw.emptyStateTone;
  if (raw.titleCase && typeof raw.titleCase === 'object') {
    if (Array.isArray(raw.titleCase.exceptions)) {
      copy.titleCaseExceptions = raw.titleCase.exceptions.filter(
        (s): s is string => typeof s === 'string',
      );
    }
    if (Array.isArray(raw.titleCase.knownProperNouns)) {
      copy.knownProperNouns = raw.titleCase.knownProperNouns.filter(
        (s): s is string => typeof s === 'string',
      );
    }
  }

  return copy;
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

// ── Theme views ────────────────────────────────────────────────────

interface ThemeBuildInputs {
  baseColors: Map<string, ResolvedColor>;
  baseTypography: Map<string, ResolvedTypography>;
  baseRounded: Map<string, ResolvedDimension>;
  baseSpacing: Map<string, ResolvedDimension>;
  baseElevation: Map<string, ResolvedShadow>;
  baseColorRamps: Map<string, RampDef>;
  baseColorPairs: Map<string, PairDef>;
  rawThemes: Record<string, RawThemeDef> | undefined;
  findings: Finding[];
}

/**
 * Build the per-theme resolved views. The implicit `light` base is always
 * present. Other themes inherit from `light` (or the named `inheritsFrom`
 * theme), then deep-merge their overrides on top.
 *
 * Cycles or unknown `inheritsFrom` parents fall back to the `light` base
 * with a warning.
 */
function buildThemeViews(input: ThemeBuildInputs): Map<string, ThemeView> {
  const out = new Map<string, ThemeView>();

  const lightView: ThemeView = {
    name: BASE_THEME_NAME,
    colors: new Map(input.baseColors),
    typography: new Map(input.baseTypography),
    rounded: new Map(input.baseRounded),
    spacing: new Map(input.baseSpacing),
    elevation: new Map(input.baseElevation),
    colorRamps: new Map(input.baseColorRamps),
    colorPairs: new Map(input.baseColorPairs),
    // The base view "overrides" every color by definition — it owns them.
    explicitColorOverrides: new Set(input.baseColors.keys()),
    contrastTarget: { ...DEFAULT_CONTRAST_TARGET },
  };
  out.set(BASE_THEME_NAME, lightView);

  if (!input.rawThemes) return out;

  // Resolve themes in declaration order so a theme can extend another that
  // appears earlier. Cycles short-circuit to the `light` base.
  const visiting = new Set<string>();
  const resolve = (name: string, raw: RawThemeDef): ThemeView => {
    if (out.has(name)) return out.get(name)!;
    if (visiting.has(name)) {
      input.findings.push({
        severity: 'warning',
        path: `themes.${name}.inheritsFrom`,
        message: `Theme '${name}' has a cyclic inheritsFrom chain. Falling back to the '${BASE_THEME_NAME}' base.`,
      });
      return lightView;
    }
    visiting.add(name);

    let parent: ThemeView = lightView;
    if (raw.inheritsFrom && raw.inheritsFrom !== BASE_THEME_NAME) {
      const parentRaw = input.rawThemes?.[raw.inheritsFrom];
      if (!parentRaw) {
        input.findings.push({
          severity: 'warning',
          path: `themes.${name}.inheritsFrom`,
          message: `Theme '${name}' inherits from '${raw.inheritsFrom}', which is not declared. Falling back to the '${BASE_THEME_NAME}' base.`,
        });
      } else {
        parent = resolve(raw.inheritsFrom, parentRaw);
      }
    }

    const view = mergeThemeOnto(name, raw, parent, input.findings);
    out.set(name, view);
    visiting.delete(name);
    return view;
  };

  for (const [name, raw] of Object.entries(input.rawThemes)) {
    if (name === BASE_THEME_NAME) {
      // A `themes.light` block layers on top of the root token tree. Treat
      // it as overrides on the implicit base — useful when an author wants
      // a separate Light section while keeping a darker base.
      const merged = mergeThemeOnto(name, raw, lightView, input.findings);
      // Replace the lightView entry; subsequent themes still inherit
      // from this merged version.
      out.set(BASE_THEME_NAME, merged);
      continue;
    }
    resolve(name, raw);
  }

  return out;
}

/**
 * Deep-merge a single theme's overrides onto a parent view. Returns a new
 * `ThemeView`; does not mutate the parent.
 */
function mergeThemeOnto(
  name: string,
  raw: RawThemeDef,
  parent: ThemeView,
  findings: Finding[],
): ThemeView {
  // Start from a clone of the parent.
  const colors = new Map(parent.colors);
  const typography = new Map(parent.typography);
  const rounded = new Map(parent.rounded);
  const spacing = new Map(parent.spacing);
  const elevation = new Map(parent.elevation);
  const colorRamps = new Map(parent.colorRamps);
  const colorPairs = new Map(parent.colorPairs);

  // Theme-local symbol table: starts as a flat snapshot of the parent's
  // tokens. References inside this theme resolve here, not against the
  // global root symbol table — so `{colors.primary}` in a dark override
  // resolves to dark-primary, not light-primary.
  const symbolTable = new Map<string, ResolvedValue>();
  for (const [k, v] of colors) symbolTable.set(`colors.${k}`, v);
  for (const [k, v] of typography) symbolTable.set(`typography.${k}`, v);
  for (const [k, v] of rounded) symbolTable.set(`rounded.${k}`, v);
  for (const [k, v] of spacing) symbolTable.set(`spacing.${k}`, v);
  for (const [k, v] of elevation) symbolTable.set(`elevation.${k}`, v);

  const explicitColorOverrides = new Set<string>();

  // Apply color overrides.
  if (raw.colors) {
    for (const [colorName, val] of Object.entries(raw.colors)) {
      explicitColorOverrides.add(colorName);
      // Re-declaring a ramp or pair under the same name in a theme should
      // cleanly replace the parent's expansion, not leave dotted/derived
      // members behind from the parent.
      if (val && typeof val === 'object') {
        clearGroupedColors(colorName, colors, symbolTable, colorRamps, colorPairs);
      }

      if (typeof val === 'string') {
        if (isTokenReference(val)) {
          const resolved = resolveReferenceForTheme(symbolTable, val.slice(1, -1));
          if (resolved !== null && typeof resolved === 'object' && 'type' in resolved && resolved.type === 'color') {
            colors.set(colorName, resolved as ResolvedColor);
            symbolTable.set(`colors.${colorName}`, resolved);
            updatePairFromFlatOverride(colorName, resolved as ResolvedColor, colorPairs);
          } else {
            findings.push({
              severity: 'error',
              path: `themes.${name}.colors.${colorName}`,
              message: `'${val}' does not resolve to a color in theme '${name}'.`,
            });
          }
        } else if (isValidColor(val)) {
          const resolved = parseColor(val);
          colors.set(colorName, resolved);
          symbolTable.set(`colors.${colorName}`, resolved);
          updatePairFromFlatOverride(colorName, resolved, colorPairs);
        } else {
          findings.push({
            severity: 'error',
            path: `themes.${name}.colors.${colorName}`,
            message: `'${val}' is not a valid color. Expected a hex color code (e.g., #ffffff).`,
          });
        }
      } else if (val && typeof val === 'object') {
        expandObjectColor(colorName, val, {
          colors,
          colorRamps,
          colorPairs,
          symbolTable,
          findings,
          pathPrefix: `themes.${name}.colors`,
        });
      }
    }
  }

  // Typography overrides — merge property maps on top of the parent's
  // typography scale entry. A theme may override only `fontSize` without
  // restating `fontFamily`.
  if (raw.typography) {
    for (const [tName, props] of Object.entries(raw.typography)) {
      const base = typography.get(tName);
      const merged = parseTypographyProps(
        props,
        `themes.${name}.typography.${tName}`,
        findings,
        base,
      );
      typography.set(tName, merged);
      symbolTable.set(`typography.${tName}`, merged);
    }
  }

  if (raw.rounded) {
    for (const [rName, value] of Object.entries(raw.rounded)) {
      if (typeof value !== 'string') continue;
      if (!isParseableDimension(value)) {
        findings.push({
          severity: 'error',
          path: `themes.${name}.rounded.${rName}`,
          message: `'${value}' is not a valid dimension.`,
        });
        continue;
      }
      const dim = parseDimensionAsDim(value);
      rounded.set(rName, dim);
      symbolTable.set(`rounded.${rName}`, dim);
    }
  }

  if (raw.spacing) {
    for (const [sName, value] of Object.entries(raw.spacing)) {
      if (typeof value !== 'string') continue;
      if (!isParseableDimension(value)) {
        findings.push({
          severity: 'error',
          path: `themes.${name}.spacing.${sName}`,
          message: `'${value}' is not a valid dimension.`,
        });
        continue;
      }
      const dim = parseDimensionAsDim(value);
      spacing.set(sName, dim);
      symbolTable.set(`spacing.${sName}`, dim);
    }
  }

  if (raw.elevation) {
    for (const [eName, value] of Object.entries(raw.elevation)) {
      if (typeof value !== 'string') continue;
      const shadow: ResolvedShadow = { type: 'shadow', raw: value };
      elevation.set(eName, shadow);
      symbolTable.set(`elevation.${eName}`, shadow);
    }
  }

  const contrastTarget: ThemeContrastTarget = {
    body: raw.contrastTarget?.body ?? parent.contrastTarget.body,
    large: raw.contrastTarget?.large ?? parent.contrastTarget.large,
    ui: raw.contrastTarget?.ui ?? parent.contrastTarget.ui,
  };

  const view: ThemeView = {
    name,
    colors,
    typography,
    rounded,
    spacing,
    elevation,
    colorRamps,
    colorPairs,
    explicitColorOverrides,
    contrastTarget,
  };
  if (raw.inheritsFrom !== undefined) view.inheritsFrom = raw.inheritsFrom;
  if (raw.description !== undefined) view.description = raw.description;
  return view;
}

/**
 * When a theme re-declares a ramp or pair under an existing name, drop the
 * parent's grouped entries (steps, dotted members, on-* aliases) so the new
 * expansion fully replaces the prior one. Bare flat overrides do not trigger
 * this — they only override the single anchor entry.
 */
function clearGroupedColors(
  name: string,
  colors: Map<string, ResolvedColor>,
  symbolTable: Map<string, ResolvedValue>,
  colorRamps: Map<string, RampDef>,
  colorPairs: Map<string, PairDef>,
): void {
  const dottedPrefix = `${name}.`;
  const hyphenPrefix = `${name}-`;
  const onHyphenPrefix = `on-${name}-`;
  const onFlat = `on-${name}`;
  for (const key of [...colors.keys()]) {
    if (key.startsWith(dottedPrefix) || key.startsWith(hyphenPrefix) || key.startsWith(onHyphenPrefix) || key === onFlat) {
      colors.delete(key);
      symbolTable.delete(`colors.${key}`);
    }
  }
  colorRamps.delete(name);
  colorPairs.delete(name);
  // Standalone-pair ramps register additional entries; sweep any pair
  // whose name is rooted at this name.
  for (const pairName of [...colorPairs.keys()]) {
    if (pairName === name || pairName.startsWith(`${name}-`)) {
      colorPairs.delete(pairName);
    }
  }
}

function resolveReferenceForTheme(
  symbolTable: Map<string, ResolvedValue>,
  path: string,
): ResolvedValue | null {
  return resolveReference(symbolTable, path, new Set());
}

/**
 * When a theme's flat color override touches a pair-member alias, mirror
 * the new value into the pair definition so `pair-parity` and exporters
 * see the half-update. The bare pair name and the `on-<pair>` alias map
 * to `container` / `onContainer`. We keep parity by cloning the prior
 * pair definition before mutating.
 */
function updatePairFromFlatOverride(
  name: string,
  newColor: ResolvedColor,
  colorPairs: Map<string, PairDef>,
): void {
  // Bare alias: matches a pair name directly → update container.
  const direct = colorPairs.get(name);
  if (direct) {
    colorPairs.set(name, { ...direct, container: newColor });
    return;
  }
  // `on-<pair>` alias → update the underlying pair's onContainer.
  if (name.startsWith('on-')) {
    const pairName = name.slice(3);
    const pair = colorPairs.get(pairName);
    if (pair) {
      colorPairs.set(pairName, { ...pair, onContainer: newColor });
    }
  }
}

function parseDimensionAsDim(raw: string): ResolvedDimension {
  const parts = parseDimensionParts(raw)!;
  return { type: 'dimension', value: parts.value, unit: parts.unit };
}

/**
 * Parse typography properties for a theme override. Differs from the
 * top-level `parseTypography` only in that it merges on top of an
 * optional `base` ResolvedTypography so unspecified properties inherit
 * from the parent theme.
 */
function parseTypographyProps(
  props: Record<string, string | number>,
  path: string,
  findings: Finding[],
  base: ResolvedTypography | undefined,
): ResolvedTypography {
  const result: ResolvedTypography = base ? { ...base } : { type: 'typography' };

  if (typeof props['fontFamily'] === 'string') result.fontFamily = props['fontFamily'];
  if (typeof props['fontFeature'] === 'string') result.fontFeature = props['fontFeature'];
  if (typeof props['fontVariation'] === 'string') result.fontVariation = props['fontVariation'];

  if (props['fontWeight'] !== undefined) {
    const fw = props['fontWeight'];
    const fwValue = typeof fw === 'number' ? fw : Number(fw);
    if (Number.isNaN(fwValue)) {
      findings.push({
        severity: 'error',
        path: `${path}.fontWeight`,
        message: `'${fw}' is not a valid font weight.`,
      });
    } else {
      result.fontWeight = fwValue;
    }
  }

  for (const prop of ['fontSize', 'lineHeight', 'letterSpacing'] as const) {
    const raw = props[prop];
    if (typeof raw !== 'string') continue;
    if (isParseableDimension(raw)) {
      result[prop] = parseDimensionAsDim(raw);
    } else if (prop === 'lineHeight' && /^\d*\.?\d+$/.test(raw)) {
      result[prop] = { type: 'dimension', value: parseFloat(raw), unit: '' };
    } else if (!isTokenReference(raw)) {
      findings.push({
        severity: 'error',
        path: `${path}.${prop}`,
        message: `'${raw}' is not a valid dimension.`,
      });
    }
  }

  return result;
}

// ── Layout parsing (breakpoints, grid, layoutRules, templates, pages) ───

/**
 * Resolve a Dimension that may be a literal (`1280px`) or a token reference
 * (`{spacing.md}`). Returns `undefined` when the input is malformed; emits an
 * error finding in that case so authors see the failure.
 */
function resolveDimensionish(
  raw: string | undefined,
  path: string,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): ResolvedDimension | undefined {
  if (raw === undefined) return undefined;
  if (typeof raw !== 'string') return undefined;
  if (isTokenReference(raw)) {
    const refPath = raw.slice(1, -1);
    const resolved = resolveReference(symbolTable, refPath, new Set());
    if (resolved && typeof resolved === 'object' && 'type' in resolved && resolved.type === 'dimension') {
      return resolved as ResolvedDimension;
    }
    findings.push({
      severity: 'error',
      path,
      message: `'${raw}' does not resolve to a dimension token.`,
    });
    return undefined;
  }
  if (!isParseableDimension(raw)) {
    findings.push({
      severity: 'error',
      path,
      message: `'${raw}' is not a valid dimension.`,
    });
    return undefined;
  }
  return parseDimensionAsDim(raw);
}

/**
 * Parse the `breakpoints:` block. Validates the philosophy enum and parses
 * each value as a Dimension. The order of `values` is preserved (Map
 * iteration follows insertion order).
 */
function parseBreakpoints(
  raw: RawBreakpointsDef,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): BreakpointsState {
  const values = new Map<string, ResolvedDimension>();
  const philosophy = raw.philosophy ?? 'mobile-first';
  if (!(BREAKPOINT_PHILOSOPHIES as readonly string[]).includes(philosophy)) {
    findings.push({
      severity: 'error',
      path: 'breakpoints.philosophy',
      message: `breakpoints.philosophy must be one of: ${BREAKPOINT_PHILOSOPHIES.join(', ')} (got '${philosophy}').`,
    });
  }
  if (raw.values) {
    for (const [key, value] of Object.entries(raw.values)) {
      const dim = resolveDimensionish(value, `breakpoints.values.${key}`, symbolTable, findings);
      if (dim) {
        values.set(key, dim);
        symbolTable.set(`breakpoints.${key}`, dim);
      }
    }
  }
  return { philosophy, values };
}

function parseGrid(
  raw: RawGridDef,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): GridState {
  const margin = new Map<string, ResolvedDimension>();
  let columns = 12;
  if (typeof raw.columns === 'number' && Number.isInteger(raw.columns) && raw.columns > 0) {
    columns = raw.columns;
  } else if (raw.columns !== undefined) {
    findings.push({
      severity: 'error',
      path: 'grid.columns',
      message: `grid.columns must be a positive integer (got ${JSON.stringify(raw.columns)}).`,
    });
  }
  const gutter = resolveDimensionish(raw.gutter, 'grid.gutter', symbolTable, findings);
  const maxWidth = resolveDimensionish(raw.maxWidth, 'grid.maxWidth', symbolTable, findings);
  if (raw.margin) {
    for (const [key, value] of Object.entries(raw.margin)) {
      const dim = resolveDimensionish(value, `grid.margin.${key}`, symbolTable, findings);
      if (dim) margin.set(key, dim);
    }
  }
  const bleedExceptions = Array.isArray(raw.bleedExceptions)
    ? raw.bleedExceptions.filter((s): s is string => typeof s === 'string')
    : [];
  const state: GridState = { columns, margin, bleedExceptions };
  if (gutter) {
    state.gutter = gutter;
    symbolTable.set('grid.gutter', gutter);
  }
  if (maxWidth) {
    state.maxWidth = maxWidth;
    symbolTable.set('grid.maxWidth', maxWidth);
  }
  symbolTable.set('grid.columns', String(columns));
  return state;
}

function parseLayoutRules(
  raw: RawLayoutRulesDef,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): LayoutRulesState {
  const out: LayoutRulesState = {};
  const cmw = resolveDimensionish(raw.contentMaxWidth, 'layoutRules.contentMaxWidth', symbolTable, findings);
  if (cmw) {
    out.contentMaxWidth = cmw;
    symbolTable.set('layoutRules.contentMaxWidth', cmw);
  }
  const ss = resolveDimensionish(raw.stackSpacing, 'layoutRules.stackSpacing', symbolTable, findings);
  if (ss) {
    out.stackSpacing = ss;
    symbolTable.set('layoutRules.stackSpacing', ss);
  }
  const ffw = resolveDimensionish(raw.formFieldWidth, 'layoutRules.formFieldWidth', symbolTable, findings);
  if (ffw) {
    out.formFieldWidth = ffw;
    symbolTable.set('layoutRules.formFieldWidth', ffw);
  }
  return out;
}

/**
 * Parse the `templates:` registry. Each template's `requiredRegions` must be
 * a subset of `regions`; violations are flagged with an error finding.
 * Author-defined extras (`maxWidth`, `sidebarWidth`, `container`, ...) are
 * preserved in `extras` so exporters can pass them through.
 */
function parseTemplates(
  raw: Record<string, RawTemplateDef>,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
): Map<string, TemplateDef> {
  const out = new Map<string, TemplateDef>();
  for (const [name, tpl] of Object.entries(raw)) {
    if (!tpl || typeof tpl !== 'object' || Array.isArray(tpl)) continue;
    const regions = Array.isArray(tpl.regions)
      ? tpl.regions.filter((s): s is string => typeof s === 'string')
      : [];
    const requiredRegions = Array.isArray(tpl.requiredRegions)
      ? tpl.requiredRegions.filter((s): s is string => typeof s === 'string')
      : [];
    const regionSet = new Set(regions);
    for (const r of requiredRegions) {
      if (!regionSet.has(r)) {
        findings.push({
          severity: 'error',
          path: `templates.${name}.requiredRegions`,
          message: `Required region '${r}' is not declared in templates.${name}.regions.`,
        });
      }
    }
    const def: TemplateDef = {
      name,
      regions,
      requiredRegions,
      extras: new Map<string, unknown>(),
    };
    const maxWidth = resolveDimensionish(
      typeof tpl.maxWidth === 'string' ? tpl.maxWidth : undefined,
      `templates.${name}.maxWidth`,
      symbolTable,
      findings,
    );
    if (maxWidth) def.maxWidth = maxWidth;
    const sidebarWidth = resolveDimensionish(
      typeof tpl.sidebarWidth === 'string' ? tpl.sidebarWidth : undefined,
      `templates.${name}.sidebarWidth`,
      symbolTable,
      findings,
    );
    if (sidebarWidth) def.sidebarWidth = sidebarWidth;
    if (typeof tpl.container === 'string') def.container = tpl.container;
    for (const [k, v] of Object.entries(tpl)) {
      if (k === 'regions' || k === 'requiredRegions' || k === 'maxWidth' || k === 'sidebarWidth' || k === 'container') continue;
      def.extras.set(k, v);
    }
    out.set(name, def);
    symbolTable.set(`templates.${name}.regions`, regions.join(','));
  }
  return out;
}

function parsePages(
  raw: Record<string, RawPageDef>,
  findings: Finding[],
): Map<string, PageDef> {
  const out = new Map<string, PageDef>();
  for (const [pattern, entry] of Object.entries(raw)) {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) continue;
    const tpl = (entry as RawPageDef).template;
    if (typeof tpl !== 'string' || tpl.length === 0) {
      findings.push({
        severity: 'error',
        path: `pages.${pattern}.template`,
        message: `pages.${pattern}.template is required and must be a string.`,
      });
      continue;
    }
    const page: PageDef = { pattern, template: tpl };
    const regionsRaw = (entry as Record<string, unknown>)['regions'];
    if (Array.isArray(regionsRaw)) {
      page.regions = regionsRaw.filter((s): s is string => typeof s === 'string');
    }
    out.set(pattern, page);
  }
  return out;
}