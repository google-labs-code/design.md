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

export function hermesComponentStates(state: DesignSystemState): RuleFinding[] {
  if (state.profile !== 'hermes') return [];

  const findings: RuleFinding[] = [];
  for (const [componentName, component] of state.components) {
    const states = component.extensionProperties.get('states');
    if (states === undefined) continue;

    if (!states || typeof states !== 'object' || Array.isArray(states)) {
      findings.push({
        path: `components.${componentName}.states`,
        message: 'Hermes component states must be an object keyed by state name.',
      });
      continue;
    }

    for (const [stateName, rawState] of Object.entries(states as Record<string, unknown>)) {
      if (!rawState || typeof rawState !== 'object' || Array.isArray(rawState)) {
        findings.push({
          path: `components.${componentName}.states.${stateName}`,
          message: 'Each Hermes component state must be an object of token overrides.',
        });
      }
    }
  }

  return findings;
}

export const hermesComponentStatesRule: RuleDescriptor = {
  name: 'hermes-component-states',
  severity: 'warning',
  description: 'Hermes profile validates nested component state maps.',
  run: hermesComponentStates,
};
