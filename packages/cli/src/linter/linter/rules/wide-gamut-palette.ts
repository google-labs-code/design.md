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
import { parseCssColor } from '../../model/color-parser.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const WIDE_GAMUT_PATTERN = /\b(oklch|oklab|lch|lab|color-mix|color\s*\(\s*(?:display-p3|srgb|rec2020))/i;

/**
 * Wide-gamut palette — notes when the palette uses only sRGB-limited syntax
 * and validates wide-gamut color strings when present.
 */
export function wideGamutPaletteCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const sources = state.colorSources;
  if (!sources || sources.size === 0) return findings;

  let hasWideGamut = false;
  for (const [name, raw] of sources) {
    if (WIDE_GAMUT_PATTERN.test(raw)) {
      hasWideGamut = true;
      if (parseCssColor(raw) === null) {
        findings.push({
          path: `colors.${name}`,
          message: `'${raw}' uses wide-gamut syntax but is not a valid CSS color. Check spacing, units, and color space name.`,
        });
      }
    }
  }

  if (!hasWideGamut && sources.size >= 2) {
    findings.push({
      path: 'colors',
      message: 'Palette uses only sRGB-limited color syntax (hex, rgb, hsl). Consider wide-gamut tokens such as oklch() or color(display-p3 ...) for P3-capable displays.',
    });
  }

  return findings;
}

export const wideGamutPaletteCheckRule: RuleDescriptor = {
  name: 'wide-gamut-palette',
  severity: 'info',
  description: 'Wide-gamut palette — notes sRGB-only palettes and validates wide-gamut color syntax.',
  run: wideGamutPaletteCheck,
};
