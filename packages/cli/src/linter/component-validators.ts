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

/**
 * Per-property value validators for typed component sub-tokens.
 *
 * Hand-rolled (no zod dependency at this layer) to keep the surface tight.
 * Each validator takes the *raw* author-provided value (as parsed from YAML)
 * and returns an `ok` flag with an optional error message.
 *
 * Token references (`{path.to.token}`) are passed through unvalidated — the
 * model resolves them and validates the resolved value separately.
 */

import {
  isValidColor,
  isParseableDimension,
  isTokenReference,
  parseDimensionParts,
} from './model/spec.js';

export interface ValidatorResult {
  ok: boolean;
  /** Human-readable error message when `ok` is false. */
  error?: string;
}

export type ValueValidator = (raw: string) => ValidatorResult;

const ok: ValidatorResult = { ok: true };
const fail = (error: string): ValidatorResult => ({ ok: false, error });

const isRef = (raw: string) => isTokenReference(raw);

/** Color values: hex literal or token reference. */
export const validateColor: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  if (isValidColor(raw)) return ok;
  return fail(`'${raw}' is not a valid color (expected a hex code or a {colors.*} reference).`);
};

/** Dimension values: any parseable CSS length, or a token reference. */
export const validateDimension: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  if (isParseableDimension(raw)) return ok;
  return fail(`'${raw}' is not a valid dimension.`);
};

/**
 * `padding` accepts a single Dimension or a CSS shorthand of 2-4 Dimensions
 * (`12px`, `12px 16px`, `12px 16px 12px`, `12px 16px 12px 16px`).
 * Token references are accepted as-is.
 */
export const validatePaddingShorthand: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  const parts = raw.trim().split(/\s+/);
  if (parts.length < 1 || parts.length > 4) {
    return fail(`'${raw}' is not a valid padding (expected 1–4 dimension values).`);
  }
  for (const p of parts) {
    if (!isParseableDimension(p)) {
      return fail(`'${raw}' contains an invalid dimension '${p}'.`);
    }
  }
  return ok;
};

/** Opacity must be a unitless number in [0, 1]. */
export const validateOpacity: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  const trimmed = raw.trim();
  if (!/^-?\d*\.?\d+$/.test(trimmed)) {
    return fail(`'${raw}' is not a valid opacity (expected a unitless number between 0 and 1).`);
  }
  const n = parseFloat(trimmed);
  if (Number.isNaN(n) || n < 0 || n > 1) {
    return fail(`opacity ${n} is out of range (must be between 0 and 1).`);
  }
  return ok;
};

/** `iconSize` accepts a Dimension, the literal `"auto"`, or a token reference. */
export const validateIconSize: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  if (raw.trim() === 'auto') return ok;
  if (isParseableDimension(raw)) return ok;
  return fail(`'${raw}' is not a valid iconSize (expected a dimension, "auto", or a token reference).`);
};

const BORDER_STYLES = new Set(['none', 'solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset']);

/**
 * Border shorthand: `<width> <style> <color>` (any order is *not* supported —
 * the conventional CSS order is enforced for clarity), e.g.:
 *   `1px solid #000`
 *   `2px dashed {colors.outline}`
 * A bare token reference is also accepted.
 */
export const validateBorder: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  if (raw.trim() === 'none') return ok;
  const parts = raw.trim().split(/\s+/);
  if (parts.length !== 3) {
    return fail(`'${raw}' is not a valid border shorthand (expected '<width> <style> <color>').`);
  }
  const [width, style, color] = parts as [string, string, string];
  if (!isParseableDimension(width) && !isRef(width)) {
    return fail(`border width '${width}' is not a valid dimension.`);
  }
  if (!BORDER_STYLES.has(style)) {
    return fail(`border style '${style}' is not recognized (expected one of: ${[...BORDER_STYLES].join(', ')}).`);
  }
  if (!isValidColor(color) && !isRef(color)) {
    return fail(`border color '${color}' is not a valid color.`);
  }
  return ok;
};

/**
 * Shadow value: a CSS shadow shorthand `<x> <y> <blur> [<spread>] <color>`,
 * or a reference to an `{elevation.*}` token, or `none`.
 *
 * We deliberately keep parsing loose — full CSS shadow grammar (rgba, hsl,
 * `inset` keyword, comma-separated stacks) is broad. The validator catches
 * obvious mistakes (e.g., `red`) while permitting common author input.
 */
export const validateShadow: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  const trimmed = raw.trim();
  if (trimmed === 'none') return ok;
  // Strip leading `inset ` keyword.
  const body = trimmed.replace(/^inset\s+/i, '');
  // The shadow must contain at least 3 whitespace-separated tokens
  // (x, y, color at minimum) OR it must contain a paren-color like rgba(...).
  const hasColor = /#[0-9a-fA-F]{3,8}\b/.test(body) || /\b(rgba?|hsla?)\s*\(/i.test(body);
  if (!hasColor) {
    return fail(`'${raw}' is not a valid shadow (expected a CSS shadow shorthand or a {elevation.*} reference).`);
  }
  return ok;
};

/** `elevation` only accepts a reference to `{elevation.*}` or a bare semantic name. */
export const validateElevation: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  // Bare semantic names like `resting`, `raised`, `overlay`, `modal` are
  // accepted — the model will try to resolve them against the elevation map.
  if (/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(raw.trim())) return ok;
  return fail(`'${raw}' is not a valid elevation (expected an {elevation.*} reference or a semantic name).`);
};

/**
 * Transition shorthand: `<property> <duration> <easing>`, e.g.
 *   `opacity 200ms ease-out`
 * Until motion tokens land (#5), literal values are accepted; the surrounding
 * lint rule warns on layout-thrash properties.
 */
export const validateTransition: ValueValidator = (raw) => {
  if (isRef(raw)) return ok;
  const parts = raw.trim().split(/\s+/);
  if (parts.length < 2 || parts.length > 3) {
    return fail(`'${raw}' is not a valid transition (expected '<property> <duration> [easing]').`);
  }
  const duration = parts[1]!;
  const dimParts = parseDimensionParts(duration);
  if (!dimParts || (dimParts.unit !== 'ms' && dimParts.unit !== 's')) {
    return fail(`transition duration '${duration}' must be a value in ms or s.`);
  }
  return ok;
};

/**
 * Validators keyed by component sub-token name. Sub-tokens not present here
 * are treated as opaque strings — the existing "accept with warning" path in
 * the linter still applies for genuinely unknown property names.
 */
export const COMPONENT_SUB_TOKEN_VALIDATORS: ReadonlyMap<string, ValueValidator> = new Map([
  ['backgroundColor', validateColor],
  ['textColor', validateColor],
  // typography is resolved against a token reference; a literal here is
  // ambiguous so we only sanity-check that it's a reference.
  ['typography', (raw: string) => (isRef(raw) ? ok : fail(`'${raw}' must be a {typography.*} reference.`))],
  ['rounded', validateDimension],
  ['padding', validatePaddingShorthand],
  ['size', validateDimension],
  ['height', validateDimension],
  ['width', validateDimension],
  ['border', validateBorder],
  ['borderColor', validateColor],
  ['borderWidth', validateDimension],
  ['shadow', validateShadow],
  ['elevation', validateElevation],
  ['gap', validateDimension],
  ['iconSize', validateIconSize],
  ['opacity', validateOpacity],
  ['transition', validateTransition],
]);

/** Property names that have a typed validator (i.e., are not opaque). */
export const TYPED_COMPONENT_SUB_TOKENS: readonly string[] =
  Array.from(COMPONENT_SUB_TOKEN_VALIDATORS.keys());
