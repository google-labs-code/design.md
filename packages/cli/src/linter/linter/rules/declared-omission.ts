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
import { getSectionName } from './omitted-utils.js';

/**
 * Declared omission — acknowledges sections that are intentionally absent.
 */
export function declaredOmission(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  if (!state.omitted) return findings;

  for (const entry of state.omitted) {
    const section = getSectionName(entry);
    const reason = typeof entry === 'object' && entry.reason ? ` Reason: ${entry.reason}` : '';
    findings.push({
      path: `omitted.${section}`,
      message: `'${section}' intentionally omitted — no ${section} tokens will be validated.${reason}`,
      severity: 'info',
    });
  }
  return findings;
}

export const declaredOmissionRule: RuleDescriptor = {
  name: 'declared-omission',
  severity: 'info',
  description: 'Declared omission — acknowledges sections that are intentionally absent.',
  run: declaredOmission,
};
