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
import { COMPONENT_MODIFIERS } from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Naming convention — registry entries should follow `noun-modifier`. The
 * rule fires when an entry's modifier (the segment after the first hyphen)
 * is not in the closed modifier vocabulary.
 *
 * Examples:
 *   `button-primary`   ✓
 *   `card-elevated`    ✓
 *   `button-fancy`     ⚠  ('fancy' is not a permitted modifier)
 *   `fancy-button`     ⚠  (modifier-noun, not noun-modifier — heuristic catch)
 *
 * Bare nouns (`card`, `input`) pass.
 */
const MODIFIERS = new Set(COMPONENT_MODIFIERS);

export function namingConvention(state: DesignSystemState): RuleFinding[] {
  const registry = state.componentRegistry;
  if (!registry) return [];

  const findings: RuleFinding[] = [];
  for (const [name] of registry) {
    const segments = name.split('-');
    if (segments.length < 2) continue; // bare noun is fine

    // Heuristic: if the FIRST segment is a known modifier, this is likely
    // modifier-noun ordering. e.g., `primary-button`.
    if (MODIFIERS.has(segments[0]!) && !MODIFIERS.has(segments[segments.length - 1]!)) {
      findings.push({
        path: `components.registry.${name}`,
        message: `'${name}' looks like 'modifier-noun'. Use 'noun-modifier' (e.g., '${segments.slice(1).join('-')}-${segments[0]}').`,
      });
      continue;
    }

    // Otherwise the trailing segment must be a permitted modifier.
    const tail = segments[segments.length - 1]!;
    if (!MODIFIERS.has(tail)) {
      findings.push({
        path: `components.registry.${name}`,
        message: `'${tail}' is not in the permitted modifier vocabulary. Permitted: ${[...MODIFIERS].join(', ')}.`,
      });
    }
  }
  return findings;
}

export const namingConventionRule: RuleDescriptor = {
  name: 'naming-convention',
  severity: 'warning',
  description: 'Registry names follow `noun-modifier` with a closed modifier vocabulary.',
  run: namingConvention,
};
