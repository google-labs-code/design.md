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
import { INTERACTIVE_REQUIRED_STATES } from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * `missing-focus-visible` — every `interactive: true` component MUST declare
 * each state listed in INTERACTIVE_REQUIRED_STATES (today: `focus-visible`).
 *
 * Focus-visible is non-negotiable: keyboard users have no other way to know
 * which element will receive their next keystroke.
 */
export function missingFocusVisible(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    if (!comp.interactive) continue;
    for (const required of INTERACTIVE_REQUIRED_STATES) {
      if (!comp.states.has(required)) {
        findings.push({
          path: `components.${compName}.states.${required}`,
          message: `Interactive component '${compName}' is missing required state '${required}'.`,
        });
      }
    }
  }
  return findings;
}

export const missingFocusVisibleRule: RuleDescriptor = {
  name: 'missing-focus-visible',
  severity: 'error',
  description: 'Every interactive component must declare a focus-visible state.',
  run: missingFocusVisible,
};
