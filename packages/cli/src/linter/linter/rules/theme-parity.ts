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
import { BASE_THEME_NAME } from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Theme parity — for every declared theme, every semantic color in the base
 * must be explicitly overridden (or explicitly re-stated with the same value).
 * Catches the "added a new color, forgot to override it for dark mode"
 * failure mode. Ramp steps and pair members are exempt — they expand from
 * a single declaration, so the parity check applies to the anchor / pair
 * name, not each derived entry.
 */
export function themeParity(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const base = state.themes.get(BASE_THEME_NAME);
  if (!base) return findings;

  // Build the set of base "anchor" color names — exclude ramp steps and
  // pair-derived members (they're parity-checked through their group).
  const baseAnchorNames: string[] = [];
  for (const [name, color] of base.colors) {
    // Skip ramp steps (dotted form); the anchor lives at the bare name.
    if (color.rampMember && color.rampMember.ramp !== name) continue;
    // Skip dotted pair members (`pair.container`, `pair.onContainer`).
    if (color.pairRole && name.includes('.')) continue;
    // Skip the `on-<pair>` flat alias for standalone pairs — checking the
    // bare pair name covers both members.
    if (color.pairRole && color.pairRole.role === 'on-container' && name.startsWith('on-')) continue;
    baseAnchorNames.push(name);
  }

  for (const [themeName, theme] of state.themes) {
    if (themeName === BASE_THEME_NAME) continue;

    for (const name of baseAnchorNames) {
      if (theme.explicitColorOverrides.has(name)) continue;
      // For ramp anchors, an override of any of the ramp's derived pair
      // entries (e.g., `primary-container`) is sufficient — the author
      // clearly thought about this group.
      if (theme.explicitColorOverrides.has(`${name}-container`)) continue;

      findings.push({
        path: `themes.${themeName}.colors.${name}`,
        message:
          `Theme '${themeName}' inherits color '${name}' unchanged from the base. ` +
          `Either override it for this theme or re-declare it with the same value to acknowledge the inheritance.`,
      });
    }
  }

  return findings;
}

export const themeParityRule: RuleDescriptor = {
  name: 'theme-parity',
  severity: 'warning',
  description:
    'Theme parity — every base color must be explicitly overridden in each declared theme.',
  run: themeParity,
};
