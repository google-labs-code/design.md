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

import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * CSS hex color pattern: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA.
 */
const HEX_COLOR_RE = /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

/**
 * CSS dimension pattern: an optional sign, digits, and a CSS unit suffix.
 */
const CSS_DIMENSION_RE = /^-?\d*\.?\d+[a-zA-Z%]+$/;

/**
 * Typography-flavored property names that strongly suggest this map holds
 * design tokens rather than arbitrary metadata.
 */
const TYPOGRAPHY_PROPS = new Set(['fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'letterSpacing']);

/**
 * Determine whether a plain object looks like a design-token map.
 *
 * A map is "token-like" when at least one leaf value is a hex color string or
 * a CSS dimension string, OR at least one key is a well-known typography
 * property name. Flat scalars (strings, numbers) and non-object values are
 * never token-like on their own — the value must be an object.
 */
function isTokenLikeMap(value: unknown): boolean {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const obj = value as Record<string, unknown>;
  return hasTokenLikeContent(obj);
}

function hasTokenLikeContent(obj: Record<string, unknown>): boolean {
  for (const [key, val] of Object.entries(obj)) {
    // Typography property key is itself a signal.
    if (TYPOGRAPHY_PROPS.has(key)) return true;

    if (typeof val === 'string') {
      if (HEX_COLOR_RE.test(val) || CSS_DIMENSION_RE.test(val)) return true;
    } else if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      // Recurse one level for nested token maps (e.g. base_colors: { light: { ink: "#0B0F14" } })
      if (hasTokenLikeContent(val as Record<string, unknown>)) return true;
    }
  }
  return false;
}

/**
 * Token-like ignored keys — warns when a top-level YAML key is not part of
 * the recognized export schema and its value looks like a design-token map.
 * These values will be silently dropped by `design.md export`.
 */
export function tokenLikeIgnored(state: DesignSystemState): RuleFinding[] {
  const unknownKeys = state.unknownKeys ?? [];
  const unknownKeyValues = state.unknownKeyValues ?? {};
  const findings: RuleFinding[] = [];

  for (const key of unknownKeys) {
    const value = unknownKeyValues[key];
    if (isTokenLikeMap(value)) {
      findings.push({
        path: key,
        message:
          `"${key}" looks like a design-token map but is not a recognized schema key ` +
          `(colors, typography, spacing, rounded, components). ` +
          `It will be silently ignored by export commands. ` +
          `Rename it to a supported key or move its values under a recognized section.`,
      });
    }
  }

  return findings;
}

export const tokenLikeIgnoredRule: RuleDescriptor = {
  name: 'token-like-ignored',
  severity: 'warning',
  description:
    'Warns when a top-level YAML key looks like a design-token map but is not ' +
    'part of the recognized export schema and will be silently ignored.',
  run: tokenLikeIgnored,
};
