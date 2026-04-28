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
 * Reduce a Material Design 3 color token name to its family root.
 *
 * Strips MD3 prefixes (`on-`, `inverse-`) and suffixes (`-container*`,
 * `-fixed*`, `-dim`, `-bright`, `-tint`, `-variant`). Tokens that don't match
 * any MD3 pattern collapse to their own name, which means custom tokens like
 * `brand-blue` keep getting flagged when truly unused.
 */
function colorFamily(name: string): string {
  let n = name;
  // Prefixes. `inverse-on-surface` needs both passes of `on-` removal.
  n = n.replace(/^on-/, '');
  n = n.replace(/^inverse-/, '');
  n = n.replace(/^on-/, '');
  // Suffixes. Order matters: `-container-low` must collapse before `-low`
  // becomes a candidate suffix.
  n = n.replace(/-container.*$/, '');
  n = n.replace(/-fixed.*$/, '');
  n = n.replace(/-(dim|bright|tint|variant)$/, '');
  return n;
}

/**
 * Material Design 3 baseline color families. Tokens belonging to these
 * families are part of the MD3 standard contract and are never flagged as
 * orphaned, even if a given component set doesn't reference them. Custom
 * tokens (e.g. `brand-blue`, `accent-magenta`) still get flagged when unused.
 */
const MD3_STANDARD_FAMILIES = new Set([
  'primary',
  'secondary',
  'tertiary',
  'error',
  'surface',
  'background',
  'outline',
]);

/**
 * Orphaned tokens — tokens defined but never referenced by any component or
 * any sibling token in the same MD3 family.
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

  // A component referencing one MD3 token implies its semantic siblings are
  // part of the same in-use group (e.g. `primary` brings `on-primary`,
  // `primary-container`, `inverse-primary`, etc.). Compute the set of
  // referenced families so siblings don't get flagged as orphaned.
  const referencedFamilies = new Set<string>();
  for (const path of referencedPaths) {
    if (path.startsWith('colors.')) {
      referencedFamilies.add(colorFamily(path.slice('colors.'.length)));
    }
  }

  const findings: RuleFinding[] = [];
  for (const [name] of state.colors) {
    const path = `colors.${name}`;
    if (referencedPaths.has(path)) continue;
    const family = colorFamily(name);
    if (referencedFamilies.has(family)) continue;
    if (MD3_STANDARD_FAMILIES.has(family)) continue;
    findings.push({
      path,
      message: `'${name}' is defined but never referenced by any component.`,
    });
  }
  return findings;
}

export const orphanedTokensRule: RuleDescriptor = {
  name: 'orphaned-tokens',
  severity: 'warning',
  description: 'Orphaned tokens — tokens defined but never referenced by any component.',
  run: orphanedTokens,
};
