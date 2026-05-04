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

const VALID_TOKEN_NAME = /^[a-zA-Z][a-zA-Z0-9-]*$/;

/**
 * Pure function mapping DesignSystemState → Tailwind v4 theme data.
 * Token names are validated against CSS-identifier rules. Font-family values
 * are wrapped in double quotes, with embedded `"` and `\` escaped.
 */
export class TailwindV4EmitterHandler implements TailwindV4EmitterSpec {
  execute(state: DesignSystemState): TailwindV4EmitterResult {
    const theme: TailwindV4ThemeData = {};

    // Validate every token name before emitting anything.
    const allNames: string[] = [
      ...state.colors.keys(),
      ...state.typography.keys(),
      ...state.rounded.keys(),
      ...state.spacing.keys(),
    ];
    for (const name of allNames) {
      if (!VALID_TOKEN_NAME.test(name)) {
        return {
          success: false,
          error: {
            code: 'INVALID_TOKEN_NAME',
            message: `Token name "${name}" is not a valid CSS identifier for Tailwind v4 export (must match /^[a-zA-Z][a-zA-Z0-9-]*$/).`,
          },
        };
      }
    }

    // Colors
    if (state.colors.size > 0) {
      const colors: Record<string, string> = {};
      for (const [name, color] of state.colors) {
        colors[name] = color.hex;
      }
      theme.colors = colors;
    }

    // Typography — split into 4 sibling categories
    const fontFamily: Record<string, string> = {};
    const fontSize: Record<string, string> = {};
    const lineHeight: Record<string, string> = {};
    const letterSpacing: Record<string, string> = {};
    const fontWeight: Record<string, string> = {};
    for (const [name, typo] of state.typography) {
      if (typo.fontFamily) fontFamily[name] = cssStringLiteral(typo.fontFamily);
      if (typo.fontSize) fontSize[name] = dimToString(typo.fontSize);
      if (typo.lineHeight) lineHeight[name] = dimToString(typo.lineHeight);
      if (typo.letterSpacing) letterSpacing[name] = dimToString(typo.letterSpacing);
      if (typo.fontWeight !== undefined) fontWeight[name] = String(typo.fontWeight);
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

function mapDimensions(dims: Map<string, ResolvedDimension>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [name, dim] of dims) {
    out[name] = dimToString(dim);
  }
  return out;
}

function dimToString(dim: ResolvedDimension): string {
  return `${dim.value}${dim.unit}`;
}

/**
 * Wrap a string value in double quotes, escaping embedded `\` and `"`.
 * Produces a CSS-safe string literal suitable for font-family values.
 */
function cssStringLiteral(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}
