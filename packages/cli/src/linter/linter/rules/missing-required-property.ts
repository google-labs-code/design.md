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
 * Missing required property — when a registry entry declares
 * `requiredProperties: [...]`, the matching definition must set each of them.
 *
 * The check runs against the post-`composes`-merge property set: if a parent
 * (composed) component supplies the required property, the child does not
 * need to repeat it.
 *
 * No-op when the registry is absent.
 */
export function missingRequiredProperty(state: DesignSystemState): RuleFinding[] {
  const registry = state.componentRegistry;
  if (!registry) return [];

  const findings: RuleFinding[] = [];
  for (const [name, entry] of registry) {
    if (entry.requiredProperties.length === 0) continue;
    const def = state.components.get(name);
    if (!def) continue; // surfaced by registry-without-definition
    for (const required of entry.requiredProperties) {
      if (!def.properties.has(required)) {
        findings.push({
          path: `components.${name}.${required}`,
          message: `'${name}' requires '${required}' but the definition does not set it.`,
        });
      }
    }
  }
  return findings;
}

export const missingRequiredPropertyRule: RuleDescriptor = {
  name: 'missing-required-property',
  severity: 'error',
  description: 'Required properties on a registry entry — the matching definition must set each one.',
  run: missingRequiredProperty,
};
