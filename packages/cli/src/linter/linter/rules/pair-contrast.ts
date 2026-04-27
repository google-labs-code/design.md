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
import { contrastRatio } from '../../model/handler.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Pair contrast — every declared color pair must satisfy its minContrast floor.
 * Fires once per pair whose container/on-container ratio falls below the floor.
 */
export function pairContrast(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [, pair] of state.colorPairs) {
    const ratio = contrastRatio(pair.container, pair.onContainer);
    if (ratio < pair.minContrast) {
      findings.push({
        path: `colors.${pair.name}`,
        message: `Pair '${pair.name}' has contrast ratio ${ratio.toFixed(2)}:1 between container (${pair.container.hex}) and on-container (${pair.onContainer.hex}), below the declared floor of ${pair.minContrast}:1.`,
      });
    }
  }
  return findings;
}

export const pairContrastRule: RuleDescriptor = {
  name: 'pair-contrast',
  severity: 'error',
  description: 'Every declared color pair must satisfy its minContrast floor (default 4.5:1, WCAG AA body).',
  run: pairContrast,
};
