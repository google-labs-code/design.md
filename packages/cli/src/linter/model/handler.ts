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
} from './spec.js';

import { isValidColor, isParseableDimension, isTokenReference, parseDimensionParts, VALID_TYPOGRAPHY_PROPS } from './spec.js';
import { parseCssColor } from './color-parser.js';

import {
  MAX_REFERENCE_DEPTH,
  MAX_TOKEN_NESTING_DEPTH,
} from '../spec-config.js';

const SCHEMA_KEY_SET: ReadonlySet<string> = new Set(SCHEMA_KEYS);
const TYPOGRAPHY_PROP_SET: ReadonlySet<string> = new Set(VALID_TYPOGRAPHY_PROPS);

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

      // ── Phase 1: Resolve primitive tokens ──────────────────────────
      // Colors
      if (input.colors) {
        const isCollision = buildCollisionGuard('colors', findings);
        forEachLeaf(input.colors, (name, raw) => {
          if (isCollision(name)) return;

          if (typeof raw === 'string' && isTokenReference(raw)) {
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
              message: `'${raw}' is not a valid color. Expected a CSS color value (e.g., #ffffff, rgb(0 0 0), oklch(0.5 0.2 240)).`,
            });
            // Store as-is for fallback
            symbolTable.set(`colors.${name}`, raw);
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
        const isCollision = buildCollisionGuard('rounded', findings);
        forEachLeaf(input.rounded, (name, raw) => {
          if (isCollision(name)) return;

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
        }, '', 0, findings, 'rounded');
      }

      // Spacing
      if (input.spacing) {
        const isCollision = buildCollisionGuard('spacing', findings);
        forEachLeaf(input.spacing, (name, raw) => {
          if (isCollision(name)) return;

          if (isParseableDimension(raw)) {
            const resolved = parseDimension(raw);
            spacing.set(name, resolved);
            symbolTable.set(`spacing.${name}`, resolved);
          } else {
            symbolTable.set(`spacing.${name}`, raw);
          }
        }, '', 0, findings, 'spacing');
      }

      // ── Phase 2: Resolve chained token references ──────────────────
      // Iterate the symbol table directly (not re-walking raw input) so that
      // Phase 1 collision decisions are never overwritten.
      for (const [key, value] of symbolTable) {
        if (typeof value !== 'string' || !isTokenReference(value)) continue;
        const resolved = resolveReference(symbolTable, value.slice(1, -1), new Set());
        if (resolved === null || typeof resolved !== 'object' || !('type' in resolved)) continue;

        if (key.startsWith('colors.') && resolved.type === 'color') {
          const name = key.slice('colors.'.length);
          colors.set(name, resolved as ResolvedColor);
          symbolTable.set(key, resolved);
        } else if (key.startsWith('rounded.') && resolved.type === 'dimension') {
          const name = key.slice('rounded.'.length);
          rounded.set(name, resolved as ResolvedDimension);
          symbolTable.set(key, resolved);
        } else if (key.startsWith('spacing.') && resolved.type === 'dimension') {
          const name = key.slice('spacing.'.length);
          spacing.set(name, resolved as ResolvedDimension);
          symbolTable.set(key, resolved);
        }
      }

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
          colors,
          typography,
          rounded,
          spacing,
          components,
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

/**
 * Returns a predicate that detects token name collisions within a single
 * token category (colors, rounded, spacing). Call once per category; the
 * returned function tracks state via closure.
 *
 * Returns true (and pushes a finding) when the candidate name collides with
 * an already-registered key, so callers can skip it with a simple `if
 * (isCollision(name)) return;`.
 */
function buildCollisionGuard(
  category: string,
  findings: Finding[],
): (name: string) => boolean {
  const seenKeys = new Set<string>();
  const seenNormalized = new Map<string, string>();
  return (name: string): boolean => {
    const normalized = name.replace(/\./g, '-');
    if (seenKeys.has(name)) {
      findings.push({
        severity: 'error',
        path: `${category}.${name}`,
        message: `Duplicate token path '${category}.${name}' detected.`,
      });
      return true;
    }
    if (seenNormalized.has(normalized)) {
      findings.push({
        severity: 'error',
        path: `${category}.${name}`,
        message: `Grouped ${category} token flattens to '${normalized}', which is already defined.`,
      });
      return true;
    }
    seenKeys.add(name);
    seenNormalized.set(normalized, name);
    return false;
  };
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
function parseDimension(raw: any): ResolvedDimension {
  // Defensive type guard – prevents "raw.match is not a function" crash
  // and provides a clear error message for unexpected input types.
  if (typeof raw !== 'string') {
    throw new Error(
      `parseDimension expected a string, got ${typeof raw}. ` +
      `This usually indicates a malformed token in your design file.`,
    );
  }
  const value = raw.trim();
  if (value === '') {
    throw new Error(
      'parseDimension received an empty string. Please provide a valid dimension (e.g., "16px", "1.5rem").',
    );
  }
  const parts = parseDimensionParts(value);
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

  // Surface typography sub-properties that aren't part of the schema: they are
  // silently dropped (never resolved or emitted), so warn rather than ignore —
  // mirroring how unknown component sub-tokens are reported.
  for (const key of Object.keys(props)) {
    if (!TYPOGRAPHY_PROP_SET.has(key)) {
      findings.push({
        severity: 'warning',
        path: `${path}.${key}`,
        message: `'${key}' is not a recognized typography property. Valid properties: ${VALID_TYPOGRAPHY_PROPS.join(', ')}.`,
      });
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
 * Recursively iterate over an object and call a function for each leaf node.
 * Leaf node paths are dot-separated (e.g. "background.light").
 */
function forEachLeaf(
  obj: Record<string, any>,
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
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      forEachLeaf(value, fn, fullPath, depth + 1, findings, rootPath);
    } else {
      fn(fullPath, value);
    }
  }
}