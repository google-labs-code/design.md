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
 * Pair parity — when a theme overrides one half of a color pair but leaves
 * the other half inherited, the pair's contrast contract is silently broken.
 * Catches `dark.surface-info.container` being overridden while
 * `dark.surface-info.onContainer` keeps the light value.
 */
export function pairParity(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const base = state.themes.get(BASE_THEME_NAME);
  if (!base) return findings;

  for (const [themeName, theme] of state.themes) {
    if (themeName === BASE_THEME_NAME) continue;

    for (const [pairName, basePair] of base.colorPairs) {
      const themePair = theme.colorPairs.get(pairName);
      if (!themePair) continue;
      const containerChanged = themePair.container.hex !== basePair.container.hex;
      const onContainerChanged = themePair.onContainer.hex !== basePair.onContainer.hex;
      if (containerChanged === onContainerChanged) continue;

      const which = containerChanged ? 'container' : 'on-container';
      const other = containerChanged ? 'on-container' : 'container';
      findings.push({
        path: `themes.${themeName}.colors.${pairName}`,
        message:
          `Pair '${pairName}' in theme '${themeName}' overrides the ${which} ` +
          `but inherits the ${other} from the base. Override both halves of a pair together — ` +
          `the contrast contract relies on it.`,
      });
    }
  }

  return findings;
}

export const pairParityRule: RuleDescriptor = {
  name: 'pair-parity',
  severity: 'warning',
  description:
    'Pair parity — overriding half of a color pair across themes silently breaks the contrast contract.',
  run: pairParity,
};
