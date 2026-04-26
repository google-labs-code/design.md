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
import { VALID_COMPONENT_STATES } from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const KNOWN_STATES = new Set<string>(VALID_COMPONENT_STATES);

/**
 * `unknown-state` — warns when a state name is not in COMPONENT_STATES.
 * The vocabulary is opinionated but not closed; novel states like
 * `loading-error` are accepted with a warning so authors can see the
 * canonical names at a glance.
 */
export function unknownState(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    for (const stateName of comp.states.keys()) {
      if (!KNOWN_STATES.has(stateName)) {
        findings.push({
          path: `components.${compName}.states.${stateName}`,
          message:
            `'${stateName}' is not a recognized component state. Known states: ${VALID_COMPONENT_STATES.join(', ')}.`,
        });
      }
    }
  }
  return findings;
}

export const unknownStateRule: RuleDescriptor = {
  name: 'unknown-state',
  severity: 'warning',
  description: 'Warns when a state name is not in the recognized state vocabulary.',
  run: unknownState,
};
