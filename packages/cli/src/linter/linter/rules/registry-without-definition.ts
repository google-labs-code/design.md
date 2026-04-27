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
 * Registry-without-definition — flags registry entries that have no matching
 * `components.definitions.<name>` block. Either the entry is aspirational
 * (reserve a name for later) or it's a typo. Warns rather than errors so
 * authors can stage in registry-first work.
 */
export function registryWithoutDefinition(state: DesignSystemState): RuleFinding[] {
  const registry = state.componentRegistry;
  if (!registry) return [];

  const findings: RuleFinding[] = [];
  for (const [name] of registry) {
    if (!state.components.has(name)) {
      findings.push({
        path: `components.registry.${name}`,
        message: `'${name}' is in the registry but has no definition. Add a 'components.definitions.${name}' block or remove the registry entry.`,
      });
    }
  }
  return findings;
}

export const registryWithoutDefinitionRule: RuleDescriptor = {
  name: 'registry-without-definition',
  severity: 'warning',
  description: 'Registry entries lacking a matching definition block.',
  run: registryWithoutDefinition,
};
