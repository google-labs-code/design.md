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
import { computeReferencedPaths } from './reference-utils.js';

/**
 * Shadow orphaned tokens — a shadow token defined but never referenced by
 * any component property. Unlike `orphaned-tokens` (colors), shadows have no
 * MD3-style sibling-family convention, so this is a direct reference check.
 */
export function shadowOrphaned(state: DesignSystemState): RuleFinding[] {
  if (state.shadows.size === 0 || state.components.size === 0) return [];

  const referencedPaths = computeReferencedPaths(state);

  const findings: RuleFinding[] = [];
  for (const [name] of state.shadows) {
    const path = `shadows.${name}`;
    if (referencedPaths.has(path)) continue;
    findings.push({
      path,
      message: `'${name}' is defined but never referenced by any component.`,
    });
  }
  return findings;
}

export const shadowOrphanedRule: RuleDescriptor = {
  name: 'shadow-orphaned',
  severity: 'warning',
  description: 'Shadow orphaned tokens — shadow tokens defined but never referenced by any component.',
  run: shadowOrphaned,
};
