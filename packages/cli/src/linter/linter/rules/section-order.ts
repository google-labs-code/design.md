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
import {
  CANONICAL_ORDER,
  SECTION_ALIASES,
  resolveAlias,
} from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

// Re-export for consumers
export { CANONICAL_ORDER, SECTION_ALIASES, resolveAlias };

const ORDER_MAP = new Map(CANONICAL_ORDER.map((s, i) => [s, i]));

export function sectionOrder(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const sections = state.sections ?? [];

  if (sections.length === 0) return findings;

  // Resolve aliases, then filter to known sections for order checking
  const knownSections = sections
    .map(resolveAlias)
    .filter(s => ORDER_MAP.has(s));

  for (let i = 0; i < knownSections.length - 1; i++) {
    const current = knownSections[i];
    const next = knownSections[i + 1];
    
    if (!current || !next) continue;
    
    const currentIdx = ORDER_MAP.get(current);
    const nextIdx = ORDER_MAP.get(next);
    
    if (currentIdx === undefined || nextIdx === undefined) continue;
    
    if (currentIdx > nextIdx) {
      findings.push({
        message: `Section '${current}' appears before '${next}', which is out of order. Expected order: ${CANONICAL_ORDER.join(', ')}`
      });
      break;
    }
  }

  return findings;
}

export const sectionOrderRule: RuleDescriptor = {
  name: 'section-order',
  severity: 'warning',
  description: 'Section order — warns when sections are out of canonical order.',
  run: sectionOrder,
};
