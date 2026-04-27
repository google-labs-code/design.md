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
 * Pick one separation strategy per surface — never combine border + shadow
 * (or elevation) + a contrasting backgroundColor. The combination almost
 * always reads as visual noise.
 */
export function tripleSeparation(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const hasBorder =
      comp.properties.has('border') ||
      comp.properties.has('borderWidth') ||
      comp.properties.has('borderColor');
    const hasShadow =
      comp.properties.has('shadow') || comp.properties.has('elevation');
    const hasBackground = comp.properties.has('backgroundColor');

    if (hasBorder && hasShadow && hasBackground) {
      findings.push({
        path: `components.${compName}`,
        message: `'${compName}' uses border + shadow/elevation + backgroundColor for separation. Pick one strategy per surface.`,
      });
    }
  }
  return findings;
}

export const tripleSeparationRule: RuleDescriptor = {
  name: 'triple-separation',
  severity: 'warning',
  description: 'Triple separation — flags components combining border + shadow + backgroundColor.',
  run: tripleSeparation,
};
