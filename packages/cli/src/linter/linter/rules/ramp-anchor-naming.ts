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
 * Ramp anchor naming — every ramp should declare a `humanName` (e.g., "Boston Clay")
 * so prose can anchor hex literals to a named color and downstream rules
 * (prose-token-mismatch, #4) can validate "Boston Clay (#1A1C1E)" sentences.
 */
export function rampAnchorNaming(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [, ramp] of state.colorRamps) {
    if (!ramp.humanName) {
      findings.push({
        path: `colors.${ramp.name}`,
        message: `Ramp '${ramp.name}' is missing a 'humanName'. Add one (e.g., humanName: "Boston Clay") so prose can reference it by name.`,
      });
    }
  }
  return findings;
}

export const rampAnchorNamingRule: RuleDescriptor = {
  name: 'ramp-anchor-naming',
  severity: 'warning',
  description: 'Every ramp should declare a humanName for prose anchoring.',
  run: rampAnchorNaming,
};
