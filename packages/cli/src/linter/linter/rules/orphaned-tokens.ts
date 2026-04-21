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
 * Orphaned tokens — tokens defined but never referenced by any component.
 */
export function orphanedTokens(state: DesignSystemState): RuleFinding[] {
  if (state.components.size === 0) return [];

  const referencedPaths = new Set<string>();
  for (const [, comp] of state.components) {
    for (const [, value] of comp.properties) {
      if (typeof value === 'object' && value !== null && 'type' in value) {
        for (const [key, symValue] of state.symbolTable) {
          if (symValue === value) {
            referencedPaths.add(key);
          }
        }
      }
    }
  }

  const findings: RuleFinding[] = [];
  for (const [name] of state.colors) {
    const path = `colors.${name}`;
    if (!referencedPaths.has(path)) {
      findings.push({
        path,
        message: `'${name}' is defined but never referenced by any component.`,
      });
    }
  }
  return findings;
}

export const orphanedTokensRule: RuleDescriptor = {
  name: 'orphaned-tokens',
  severity: 'warning',
  description: 'Orphaned tokens — tokens defined but never referenced by any component.',
  run: orphanedTokens,
};
