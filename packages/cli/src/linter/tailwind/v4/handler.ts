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

import type { TailwindV4EmitterSpec, TailwindV4EmitterResult, TailwindV4ThemeData } from './spec.js';
import type { DesignSystemState, ResolvedDimension } from '../../model/spec.js';

const VALID_TOKEN_SEGMENT = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;

/**
 * Pure function mapping DesignSystemState → Tailwind v4 theme data.
 * Dot-separated group paths (e.g. `light.surface`) are collapsed to hyphens
 * after validating each segment against CSS-identifier rules. Font-family
 * values are wrapped in double quotes, with embedded `"` and `\` escaped.
 */
export class TailwindV4EmitterHandler implements TailwindV4EmitterSpec {
  execute(state: DesignSystemState): TailwindV4EmitterResult {
    const theme: TailwindV4ThemeData = {};

    const categories: ReadonlyArray<readonly [string, Iterable<string>]> = [
      ['colors', state.colors.keys()],
      ['typography', state.typography.keys()],
      ['rounded', state.rounded.keys()],
      ['spacing', state.spacing.keys()],
    ];

    for (const [category, names] of categories) {
      const seenCssKeys = new Map<string, string>();
      for (const name of names) {
        if (!isValidTokenPath(name)) {
          return {
            success: false,
            error: {
              code: 'INVALID_TOKEN_NAME',
              message: `Token name "${name}" is not a valid CSS identifier for Tailwind v4 export (each dot-separated segment must match /^[a-zA-Z0-9][a-zA-Z0-9-]*$/).`,
            },
          };
        }
        const cssKey = toCssKey(name);
        const existing = seenCssKeys.get(cssKey);
        if (existing !== undefined) {
          return {
            success: false,
            error: {
              code: 'TOKEN_NAME_COLLISION',
              message: `Tokens "${category}.${existing}" and "${category}.${name}" both flatten to CSS key "${cssKey}".`,
            },
          };
        }
        seenCssKeys.set(cssKey, name);
      }
    }

    // Colors
    if (state.colors.size > 0) {
      const colors: Record<string, string> = {};
      for (const [name, color] of state.colors) {
        colors[toCssKey(name)] = color.hex;
      }
      theme.colors = colors;
    }

    // Typography — split into 5 sibling categories
    const fontFamily: Record<string, string> = {};
    const fontSize: Record<string, string> = {};
    const lineHeight: Record<string, string> = {};
    const letterSpacing: Record<string, string> = {};
    const fontWeight: Record<string, string> = {};
    for (const [name, typo] of state.typography) {
      const cssKey = toCssKey(name);
      if (typo.fontFamily) fontFamily[cssKey] = cssStringLiteral(typo.fontFamily);
      if (typo.fontSize) fontSize[cssKey] = dimToString(typo.fontSize);
      if (typo.lineHeight) lineHeight[cssKey] = dimToString(typo.lineHeight);
      if (typo.letterSpacing) letterSpacing[cssKey] = dimToString(typo.letterSpacing);
      if (typo.fontWeight !== undefined) fontWeight[cssKey] = String(typo.fontWeight);
    }
    if (Object.keys(fontFamily).length > 0) theme.fontFamily = fontFamily;
    if (Object.keys(fontSize).length > 0) theme.fontSize = fontSize;
    if (Object.keys(lineHeight).length > 0) theme.lineHeight = lineHeight;
    if (Object.keys(letterSpacing).length > 0) theme.letterSpacing = letterSpacing;
    if (Object.keys(fontWeight).length > 0) theme.fontWeight = fontWeight;

    // borderRadius + spacing
    if (state.rounded.size > 0) {
      theme.borderRadius = mapDimensions(state.rounded);
    }
    if (state.spacing.size > 0) {
      theme.spacing = mapDimensions(state.spacing);
    }

    return { success: true, data: { theme } };
  }
}

function isValidTokenPath(name: string): boolean {
  const segments = name.split('.');
  return segments.length > 0 && segments.every((segment) => VALID_TOKEN_SEGMENT.test(segment));
}

function toCssKey(name: string): string {
  return name.replaceAll('.', '-');
}

function mapDimensions(dims: Map<string, ResolvedDimension>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [name, dim] of dims) {
    out[toCssKey(name)] = dimToString(dim);
  }
  return out;
}

function dimToString(dim: ResolvedDimension): string {
  return `${dim.value}${dim.unit}`;
}

/**
 * Wrap a string value in double quotes, escaping embedded `\` and `"`.
 * Produces a CSS-safe string literal suitable for font-family values.
 * Line terminators (newline, carriage return, form feed) are illegal raw inside
 * a CSS string and could break the value out of the quoted token, so they are
 * emitted as CSS hex escapes (e.g. `\a `).
 */
function cssStringLiteral(value: string): string {
  return `"${value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/[\n\r\f]/g, (c) => `\\${c.charCodeAt(0).toString(16)} `)}"`;
}
