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

import { SCHEMA_KEYS } from '../../parser/spec.js';
import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';
import { levenshtein } from './levenshtein.js';

/** Max edit distance to consider a typo (not a custom key). */
const MAX_TYPO_DISTANCE = 2;

/**
 * Unknown key — warns when a top-level YAML key looks like a typo of a known
 * schema key. The DESIGN.md schema is intentionally extensible (custom keys
 * are allowed), so only close matches to known keys are reported; unrelated
 * extension keys stay silent.
 */
export function unknownKey(state: DesignSystemState): RuleFinding[] {
  const knownSet = new Set<string>(SCHEMA_KEYS);
  return (state.unknownKeys ?? []).flatMap(key => {
    if (knownSet.has(key)) return [];

    let bestMatch: string | undefined;
    let bestDist = Infinity;
    for (const known of SCHEMA_KEYS) {
      const dist = levenshtein(key.toLowerCase(), known.toLowerCase());
      if (dist < bestDist) {
        bestDist = dist;
        bestMatch = known;
      }
    }

    if (bestDist <= MAX_TYPO_DISTANCE && bestMatch) {
      return [{
        path: key,
        message: `Unknown key "${key}" — did you mean "${bestMatch}"?`,
      }];
    }

    return [];
  });
}

export const unknownKeyRule: RuleDescriptor = {
  name: 'unknown-key',
  severity: 'warning',
  description: 'Unknown key — warns when a top-level YAML key looks like a typo of a known schema key.',
  run: unknownKey,
};
