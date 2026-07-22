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
import { getSectionName, VALID_OMITTED_SECTIONS } from './omitted-utils.js';

/**
 * Unknown omission — warns when an unrecognized section name appears in the `omitted` key.
 */
export function unknownOmission(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  if (!state.omitted) return findings;

  for (const entry of state.omitted) {
    const section = getSectionName(entry);
    if (!VALID_OMITTED_SECTIONS.has(section)) {
      findings.push({
        path: `omitted.${section}`,
        message: `Unknown section name '${section}' in omitted key. Valid sections are: ${[...VALID_OMITTED_SECTIONS].join(', ')}.`,
        severity: 'warning',
      });
    }
  }
  return findings;
}

export const unknownOmissionRule: RuleDescriptor = {
  name: 'unknown-omission',
  severity: 'warning',
  description: 'Unknown omission — warns when an unrecognized section name appears in the omitted key.',
  run: unknownOmission,
};
