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

import type { ParsedDesignSystem } from '../parser/spec.js';
import { SCHEMA_KEYS } from '../parser/spec.js';
import type {
  ModelSpec,
  ModelResult,
  ResolvedColor,
  ResolvedDimension,
  ResolvedTypography,
  ResolvedValue,
  ComponentDef,
  Finding,
  ThemeModeState,
  TailwindV4ModeCategory,
} from './spec.js';

import {
  isValidColor,
  isParseableDimension,
  isTokenReference,
  parseDimensionParts,
  resetTailwindV4ModeRegistry,
  registerTailwindV4ModeRegistry,
} from './spec.js';
import { parseCssColor } from './color-parser.js';

import {
  MAX_REFERENCE_DEPTH,
  MAX_TOKEN_NESTING_DEPTH,
} from '../spec-config.js';

const SCHEMA_KEY_SET: ReadonlySet<string> = new Set(SCHEMA_KEYS);

type PrimitiveCategory = 'colors' | 'rounded' | 'spacing';

interface RawModeEntry {
  value: unknown;
  path: string;
  reportFindings: boolean;
}

interface RawModeBucket {
  colors: Map<string, RawModeEntry>;
  rounded: Map<string, RawModeEntry>;
  spacing: Map<string, RawModeEntry>;
}

type ModeTokenNames = Record<PrimitiveCategory, Set<string>>;

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
      const themes = normalizeThemes(input.themes);
      const defaultTheme = normalizeDefaultTheme(input.defaultTheme, themes, findings);
      const modeRaw = createRawModeBuckets(themes);
      const modeTokenNames = createModeTokenNames();
      resetTailwindV4ModeRegistry();

      // ── Phase 1: Resolve primitive tokens ──────────────────────────
      // Colors
      if (input.colors) {
        forEachTokenValue(input.colors, themes, (name, raw) => {
          if (isModeValueObject(raw, themes)) {
            processColorModeValue(name, raw, themes, defaultTheme, colors, symbolTable, modeRaw, modeTokenNames, findings);
          } else {
            processColorScalar(name, raw, `colors.${name}`, colors, symbolTable, findings);
            recordScalarModeValue(modeRaw, 'colors', name, raw, `colors.${name}`);
          }
        }, '', 0, findings, 'colors');
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
        forEachTokenValue(input.rounded, themes, (name, raw) => {
          if (isModeValueObject(raw, themes)) {
            processDimensionModeValue('rounded', name, raw, themes, defaultTheme, rounded, symbolTable, modeRaw, modeTokenNames, findings);
          } else {
            processRoundedScalar(name, raw, `rounded.${name}`, rounded, symbolTable, findings);
            recordScalarModeValue(modeRaw, 'rounded', name, raw, `rounded.${name}`);
          }
        }, '', 0, findings, 'rounded');
      }

      // Spacing
      if (input.spacing) {
        forEachTokenValue(input.spacing, themes, (name, raw) => {
          if (isModeValueObject(raw, themes)) {
            processDimensionModeValue('spacing', name, raw, themes, defaultTheme, spacing, symbolTable, modeRaw, modeTokenNames, findings);
          } else {
            processSpacingScalar(name, raw, `spacing.${name}`, spacing, symbolTable);
            recordScalarModeValue(modeRaw, 'spacing', name, raw, `spacing.${name}`);
          }
        }, '', 0, findings, 'spacing');
      }

      // ── Phase 2: Resolve chained color references ──────────────────
      // Iterate color entries that are still raw references and resolve them
      if (input.colors) {
        forEachTokenValue(input.colors, themes, (name, raw) => {
          const reference = getDefaultReference(raw, themes, defaultTheme);
          if (reference) {
            const resolved = resolveReference(symbolTable, reference.slice(1, -1), new Set());
            if (resolved !== null && typeof resolved === 'object' && 'type' in resolved && resolved.type === 'color') {
              colors.set(name, resolved as ResolvedColor);
              symbolTable.set(`colors.${name}`, resolved);
            }
          }
        });
      }

      // Resolve chained rounded references
      if (input.rounded) {
        forEachTokenValue(input.rounded, themes, (name, raw) => {
          const reference = getDefaultReference(raw, themes, defaultTheme);
          if (reference) {
            const resolved = resolveReference(symbolTable, reference.slice(1, -1), new Set());
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
        });
      }

      // Resolve chained spacing references
      if (input.spacing) {
        forEachTokenValue(input.spacing, themes, (name, raw) => {
          const reference = getDefaultReference(raw, themes, defaultTheme);
          if (reference) {
            const resolved = resolveReference(symbolTable, reference.slice(1, -1), new Set());
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
        });
      }

      const modes = resolveModeStates(themes, modeRaw, findings);
      registerModeRegistry(modes, defaultTheme, modeTokenNames);

      // ── Phase 3: Build components ──────────────────────────────────
      const components = new Map<string, ComponentDef>();
      if (input.components) {
        for (const [compName, props] of Object.entries(input.components)) {
          const properties = new Map<string, ResolvedValue>();
          const unresolvedRefs: string[] = [];

          for (const [propName, rawValue] of Object.entries(props)) {
            // Non-string scalars (numbers, booleans) are valid YAML values
            // that can appear in component properties (e.g. fontWeight: 600,
            // visible: true, opacity: 0.9). Store them as-is rather than
            // passing them to string-only helpers like isTokenReference or
            // isValidColor, which would either silently coerce or crash.
            if (typeof rawValue === 'number' || typeof rawValue === 'boolean') {
              properties.set(propName, rawValue);
            } else if (isTokenReference(rawValue)) {
              const refPath = rawValue.slice(1, -1);
              const resolved = resolveReference(symbolTable, refPath, new Set());
              if (resolved !== null) {
                properties.set(propName, resolved);
              } else {
                unresolvedRefs.push(rawValue);
                properties.set(propName, rawValue);
              }
            } else if (isValidColor(rawValue)) {
              properties.set(propName, parseColor(rawValue));
            } else if (isParseableDimension(rawValue)) {
              properties.set(propName, parseDimension(rawValue));
            } else {
              properties.set(propName, rawValue);
            }
          }

          components.set(compName, { properties, unresolvedRefs });
        }
      }

      const unknownKeys = [...input.sourceMap.keys()].filter(
        key => !SCHEMA_KEY_SET.has(key)
      );

      const unknownKeyValues: Record<string, unknown> = {};
      if (input.rawValues) {
        for (const key of unknownKeys) {
          if (Object.prototype.hasOwnProperty.call(input.rawValues, key)) {
            unknownKeyValues[key] = input.rawValues[key];
          }
        }
      }

      return {
        designSystem: {
          name: input.name,
          description: input.description,
          themes: themes.length > 0 ? themes : undefined,
          defaultTheme,
          colors,
          typography,
          rounded,
          spacing,
          components,
          modes: modes.size > 0 ? modes : undefined,
          symbolTable,
          sections: input.sections,
          unknownKeys,
          unknownKeyValues,
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
          components: new Map(),
          symbolTable: new Map(),
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

// ── Pure utility functions ─────────────────────────────────────────

function normalizeThemes(themes: string[] | undefined): string[] {
  const normalized: string[] = [];
  for (const theme of themes ?? []) {
    const trimmed = theme.trim();
    if (trimmed && !normalized.includes(trimmed)) {
      normalized.push(trimmed);
    }
  }
  return normalized;
}

function normalizeDefaultTheme(defaultTheme: string | undefined, themes: string[], findings: Finding[]): string | undefined {
  if (themes.length === 0) return defaultTheme;

  const normalizedDefault = defaultTheme?.trim() || themes[0];
  if (defaultTheme && !themes.includes(defaultTheme)) {
    findings.push({
      severity: 'error',
      path: 'default-theme',
      message: `default-theme '${defaultTheme}' is not listed in themes.`,
    });
  }

  return normalizedDefault && themes.includes(normalizedDefault) ? normalizedDefault : themes[0];
}

function createRawModeBuckets(themes: string[]): Map<string, RawModeBucket> {
  const buckets = new Map<string, RawModeBucket>();
  for (const theme of themes) {
    buckets.set(theme, {
      colors: new Map(),
      rounded: new Map(),
      spacing: new Map(),
    });
  }
  return buckets;
}

function createModeTokenNames(): ModeTokenNames {
  return {
    colors: new Set(),
    rounded: new Set(),
    spacing: new Set(),
  };
}

function processColorScalar(
  name: string,
  raw: unknown,
  path: string,
  colors: Map<string, ResolvedColor>,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
  reportFindings = true,
): void {
  if (typeof raw === 'string' && isTokenReference(raw)) {
    symbolTable.set(`colors.${name}`, raw);
  } else if (isValidColor(raw as string)) {
    const resolved = parseColor(raw as string);
    colors.set(name, resolved);
    symbolTable.set(`colors.${name}`, resolved);
  } else {
    if (reportFindings) {
      findings.push({
        severity: 'error',
        path,
        message: `'${raw}' is not a valid color. Expected a CSS color value (e.g., #ffffff, rgb(0 0 0), oklch(0.5 0.2 240)).`,
      });
    }
    symbolTable.set(`colors.${name}`, raw as ResolvedValue);
  }
}

function processRoundedScalar(
  name: string,
  raw: unknown,
  path: string,
  rounded: Map<string, ResolvedDimension>,
  symbolTable: Map<string, ResolvedValue>,
  findings: Finding[],
  reportFindings = true,
): void {
  if (typeof raw !== 'string') {
    return;
  }

  if (isParseableDimension(raw)) {
    const resolved = parseDimension(raw);
    if (resolved.unit !== 'px' && resolved.unit !== 'rem' && resolved.unit !== 'em') {
      findings.push({
        severity: 'error',
        path,
        message: `'${raw}' has an invalid unit '${resolved.unit}'. Only px, rem, and em are allowed.`,
      });
    }
    rounded.set(name, resolved);
    symbolTable.set(`rounded.${name}`, resolved);
  } else if (!isTokenReference(raw)) {
    if (reportFindings) {
      findings.push({
        severity: 'error',
        path,
        message: `'${raw}' is not a valid dimension.`,
      });
    }
    symbolTable.set(`rounded.${name}`, raw);
  } else {
    symbolTable.set(`rounded.${name}`, raw);
  }
}

function processSpacingScalar(
  name: string,
  raw: unknown,
  path: string,
  spacing: Map<string, ResolvedDimension>,
  symbolTable: Map<string, ResolvedValue>,
  findings?: Finding[],
  reportFindings = false,
): void {
  if (isParseableDimension(raw as string)) {
    const resolved = parseDimension(raw as string);
    spacing.set(name, resolved);
    symbolTable.set(`spacing.${name}`, resolved);
  } else {
    if (reportFindings && findings) {
      findings.push({
        severity: 'error',
        path,
        message: `'${raw}' is not a valid dimension.`,
      });
    }
    symbolTable.set(`spacing.${name}`, raw as ResolvedValue);
  }
}

function processColorModeValue(
  name: string,
  raw: Record<string, unknown>,
  themes: string[],
  defaultTheme: string | undefined,
  colors: Map<string, ResolvedColor>,
  symbolTable: Map<string, ResolvedValue>,
  modeRaw: Map<string, RawModeBucket>,
  modeTokenNames: ModeTokenNames,
  findings: Finding[],
): void {
  validateModeObject('colors', name, raw, themes, defaultTheme, findings);
  modeTokenNames.colors.add(name);

  const defaultRaw = defaultTheme && Object.prototype.hasOwnProperty.call(raw, defaultTheme)
    ? raw[defaultTheme]
    : undefined;
  if (defaultTheme && defaultRaw !== undefined && isScalarModeValue(defaultRaw)) {
    processColorScalar(name, defaultRaw, `colors.${name}.${defaultTheme}`, colors, symbolTable, findings);
  }

  recordModeObjectValues(modeRaw, 'colors', name, raw, themes, defaultTheme);
}

function processDimensionModeValue(
  category: 'rounded' | 'spacing',
  name: string,
  raw: Record<string, unknown>,
  themes: string[],
  defaultTheme: string | undefined,
  target: Map<string, ResolvedDimension>,
  symbolTable: Map<string, ResolvedValue>,
  modeRaw: Map<string, RawModeBucket>,
  modeTokenNames: ModeTokenNames,
  findings: Finding[],
): void {
  validateModeObject(category, name, raw, themes, defaultTheme, findings);
  modeTokenNames[category].add(name);

  const defaultRaw = defaultTheme && Object.prototype.hasOwnProperty.call(raw, defaultTheme)
    ? raw[defaultTheme]
    : undefined;
  if (defaultTheme && defaultRaw !== undefined && isScalarModeValue(defaultRaw)) {
    if (category === 'rounded') {
      processRoundedScalar(name, defaultRaw, `${category}.${name}.${defaultTheme}`, target, symbolTable, findings);
    } else {
      processSpacingScalar(name, defaultRaw, `${category}.${name}.${defaultTheme}`, target, symbolTable, findings, true);
    }
  }

  recordModeObjectValues(modeRaw, category, name, raw, themes, defaultTheme);
}

function validateModeObject(
  category: PrimitiveCategory,
  name: string,
  raw: Record<string, unknown>,
  themes: string[],
  defaultTheme: string | undefined,
  findings: Finding[],
): void {
  const themeSet = new Set(themes);
  for (const [mode, value] of Object.entries(raw)) {
    const path = `${category}.${name}.${mode}`;
    if (!themeSet.has(mode)) {
      findings.push({
        severity: 'error',
        path,
        message: `Unknown theme mode '${mode}'. Expected one of: ${themes.join(', ')}.`,
      });
    } else if (!isScalarModeValue(value)) {
      findings.push({
        severity: 'error',
        path,
        message: `Theme mode '${mode}' must be a scalar value.`,
      });
    }
  }

  if (defaultTheme && !Object.prototype.hasOwnProperty.call(raw, defaultTheme)) {
    findings.push({
      severity: 'error',
      path: `${category}.${name}`,
      message: `Theme mode object is missing the default-theme key '${defaultTheme}'.`,
    });
  }
}

function recordScalarModeValue(
  modeRaw: Map<string, RawModeBucket>,
  category: PrimitiveCategory,
  name: string,
  value: unknown,
  path: string,
): void {
  for (const bucket of modeRaw.values()) {
    bucket[category].set(name, { value, path, reportFindings: false });
  }
}

function recordModeObjectValues(
  modeRaw: Map<string, RawModeBucket>,
  category: PrimitiveCategory,
  name: string,
  raw: Record<string, unknown>,
  themes: string[],
  defaultTheme: string | undefined,
): void {
  const defaultRaw = defaultTheme && Object.prototype.hasOwnProperty.call(raw, defaultTheme) && isScalarModeValue(raw[defaultTheme])
    ? raw[defaultTheme]
    : undefined;

  for (const theme of themes) {
    const bucket = modeRaw.get(theme);
    if (!bucket) continue;

    const hasThemeValue = Object.prototype.hasOwnProperty.call(raw, theme);
    const themeValue = hasThemeValue ? raw[theme] : defaultRaw;
    if (themeValue === undefined || !isScalarModeValue(themeValue)) continue;

    bucket[category].set(name, {
      value: themeValue,
      path: `${category}.${name}.${hasThemeValue ? theme : defaultTheme}`,
      reportFindings: hasThemeValue && theme !== defaultTheme,
    });
  }
}

function getDefaultReference(raw: unknown, themes: string[], defaultTheme: string | undefined): string | undefined {
  if (typeof raw === 'string' && isTokenReference(raw)) return raw;
  if (!isModeValueObject(raw, themes) || !defaultTheme) return undefined;
  const value = raw[defaultTheme];
  return typeof value === 'string' && isTokenReference(value) ? value : undefined;
}

function resolveModeStates(
  themes: string[],
  modeRaw: Map<string, RawModeBucket>,
  findings: Finding[],
): Map<string, ThemeModeState> {
  const modes = new Map<string, ThemeModeState>();

  for (const theme of themes) {
    const bucket = modeRaw.get(theme);
    if (!bucket) continue;

    const modeState: ThemeModeState = {
      colors: new Map(),
      rounded: new Map(),
      spacing: new Map(),
      symbolTable: new Map(),
    };

    for (const [name, entry] of bucket.colors) {
      processColorScalar(name, entry.value, entry.path, modeState.colors, modeState.symbolTable, findings, entry.reportFindings);
    }
    for (const [name, entry] of bucket.rounded) {
      processRoundedScalar(name, entry.value, entry.path, modeState.rounded, modeState.symbolTable, findings, entry.reportFindings);
    }
    for (const [name, entry] of bucket.spacing) {
      processSpacingScalar(name, entry.value, entry.path, modeState.spacing, modeState.symbolTable, findings, entry.reportFindings);
    }

    modes.set(theme, modeState);
  }

  for (const modeState of modes.values()) {
    resolveModeReferences(modeState);
  }

  return modes;
}

function resolveModeReferences(modeState: ThemeModeState): void {
  for (const [path, raw] of modeState.symbolTable) {
    if (typeof raw !== 'string' || !isTokenReference(raw)) continue;

    const resolved = resolveReference(modeState.symbolTable, raw.slice(1, -1), new Set());
    if (resolved === null || typeof resolved !== 'object' || !('type' in resolved)) continue;

    if (path.startsWith('colors.') && resolved.type === 'color') {
      const name = path.slice('colors.'.length);
      modeState.colors.set(name, resolved as ResolvedColor);
      modeState.symbolTable.set(path, resolved);
    } else if (path.startsWith('rounded.') && resolved.type === 'dimension') {
      const name = path.slice('rounded.'.length);
      modeState.rounded.set(name, resolved as ResolvedDimension);
      modeState.symbolTable.set(path, resolved);
    } else if (path.startsWith('spacing.') && resolved.type === 'dimension') {
      const name = path.slice('spacing.'.length);
      modeState.spacing.set(name, resolved as ResolvedDimension);
      modeState.symbolTable.set(path, resolved);
    }
  }
}

function registerModeRegistry(
  modes: Map<string, ThemeModeState>,
  defaultTheme: string | undefined,
  modeTokenNames: ModeTokenNames,
): void {
  if (!defaultTheme || modes.size === 0) return;
  const defaultMode = modes.get(defaultTheme);
  if (!defaultMode) return;

  const tokens: Partial<Record<TailwindV4ModeCategory, Record<string, { defaultValue: string; modes: Record<string, string> }>>> = {};

  registerCategoryModeTokens(tokens, 'colors', modeTokenNames.colors, modes, defaultTheme, defaultMode, valueToCss);
  registerCategoryModeTokens(tokens, 'borderRadius', modeTokenNames.rounded, modes, defaultTheme, defaultMode, valueToCss);
  registerCategoryModeTokens(tokens, 'spacing', modeTokenNames.spacing, modes, defaultTheme, defaultMode, valueToCss);

  if (Object.keys(tokens).length > 0) {
    registerTailwindV4ModeRegistry({ defaultTheme, tokens });
  }
}

function registerCategoryModeTokens(
  tokens: Partial<Record<TailwindV4ModeCategory, Record<string, { defaultValue: string; modes: Record<string, string> }>>>,
  outputCategory: TailwindV4ModeCategory,
  names: Set<string>,
  modes: Map<string, ThemeModeState>,
  defaultTheme: string,
  defaultMode: ThemeModeState,
  serialize: (category: TailwindV4ModeCategory, state: ThemeModeState, name: string) => string | undefined,
): void {
  for (const name of names) {
    const defaultValue = serialize(outputCategory, defaultMode, name);
    if (!defaultValue) continue;

    const modeValues: Record<string, string> = {};
    for (const [mode, modeState] of modes) {
      if (mode === defaultTheme) continue;
      const modeValue = serialize(outputCategory, modeState, name);
      if (modeValue && modeValue !== defaultValue) {
        modeValues[mode] = modeValue;
      }
    }

    if (Object.keys(modeValues).length > 0) {
      tokens[outputCategory] ??= {};
      tokens[outputCategory]![name] = { defaultValue, modes: modeValues };
    }
  }
}

function valueToCss(category: TailwindV4ModeCategory, state: ThemeModeState, name: string): string | undefined {
  if (category === 'colors') {
    return state.colors.get(name)?.hex;
  }

  const value = category === 'borderRadius'
    ? state.rounded.get(name)
    : state.spacing.get(name);
  return value ? `${value.value}${value.unit}` : undefined;
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isScalarModeValue(value: unknown): boolean {
  return value === null || typeof value !== 'object';
}

function isModeValueObject(value: unknown, themes: string[]): value is Record<string, unknown> {
  if (themes.length === 0 || !isPlainRecord(value)) return false;
  return Object.keys(value).some(key => themes.includes(key));
}

/**
 * Parse a CSS color string into a ResolvedColor with RGB + WCAG luminance.
 */
export function parseColor(raw: string): ResolvedColor {
  const parsed = parseCssColor(raw);
  if (!parsed) {
    throw new Error(`Invalid color: ${raw}`);
  }
  return {
    type: 'color',
    ...parsed,
  };
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

/**
 * Recursively iterate over a token object and call a function for each scalar
 * token or mode object. Leaf node paths are dot-separated (e.g.
 * "background.light"). When themes are declared, an object with a declared
 * theme key is treated as one mode-aware token rather than nested tokens.
 */
function forEachTokenValue(
  obj: Record<string, any>,
  themes: string[],
  fn: (path: string, value: any) => void,
  prefix = '',
  depth = 0,
  findings?: Finding[],
  rootPath?: string
) {
  if (depth > MAX_TOKEN_NESTING_DEPTH) {
    if (findings && rootPath) {
      // Check if we've already reported this rootPath to avoid spamming
      if (!findings.some((f) => f.path === rootPath && f.message.includes('nesting depth'))) {
        findings.push({
          severity: 'error',
          path: rootPath,
          message: `Token nesting depth exceeds maximum allowed depth of ${MAX_TOKEN_NESTING_DEPTH}.`,
        });
      }
    }
    return;
  }
  for (const [key, value] of Object.entries(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (isModeValueObject(value, themes)) {
      fn(fullPath, value);
    } else if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      forEachTokenValue(value, themes, fn, fullPath, depth + 1, findings, rootPath);
    } else {
      fn(fullPath, value);
    }
  }
}
