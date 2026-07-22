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
import { getSectionName, getOmittedSections } from './omitted-utils.js';

/** Maps omitted section names to their corresponding state map. */
const SECTION_MAP: Record<string, (state: DesignSystemState) => Map<string, unknown>> = {
  colors: s => s.colors as Map<string, unknown>,
  typography: s => s.typography as Map<string, unknown>,
  spacing: s => s.spacing as Map<string, unknown>,
  rounded: s => s.rounded as Map<string, unknown>,
  components: s => s.components as Map<string, unknown>,
};

/**
 * Redundant omission — warns when a section is listed in `omitted` but tokens are present.
 */
export function redundantOmission(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  if (!state.omitted) return findings;

  const omittedSections = getOmittedSections(state);
  for (const section of omittedSections) {
    const getMap = SECTION_MAP[section];
    if (getMap) {
      const map = getMap(state);
      if (map.size > 0) {
        findings.push({
          path: `omitted.${section}`,
          message: `'${section}' listed in omitted but ${section} tokens are defined — omitted declaration has no effect.`,
          severity: 'warning',
        });
      }
    }
  }
  return findings;
}

export const redundantOmissionRule: RuleDescriptor = {
  name: 'redundant-omission',
  severity: 'warning',
  description: 'Redundant omission — warns when a section is listed in omitted but tokens are present.',
  run: redundantOmission,
};
