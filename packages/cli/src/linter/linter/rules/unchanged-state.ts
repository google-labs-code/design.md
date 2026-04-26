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
 * `unchanged-state` — flags a declared state that does not override any
 * property from the base. A state with zero overrides is, with extremely
 * high probability, an authoring mistake.
 */
export function unchangedState(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    for (const [stateName, overrides] of comp.states) {
      if (overrides.size === 0) {
        findings.push({
          path: `components.${compName}.states.${stateName}`,
          message: `State '${stateName}' declares no property overrides — likely an authoring mistake.`,
        });
      }
    }
  }
  return findings;
}

export const unchangedStateRule: RuleDescriptor = {
  name: 'unchanged-state',
  severity: 'warning',
  description: 'Flags a declared state that does not override any property from the base.',
  run: unchangedState,
};
