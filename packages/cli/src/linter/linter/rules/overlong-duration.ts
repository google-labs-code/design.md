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

import type { DesignSystemState, ResolvedDuration } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/** Page-level transitions can legitimately exceed this; everything else feels broken. */
const MAX_INTERACTION_MS = 400;

function toMs(dur: ResolvedDuration): number {
  return dur.unit === 's' ? dur.value * 1000 : dur.value;
}

/**
 * Overlong duration — flags motion durations that exceed 400ms. Per the
 * spec prose ("Anything over 400ms feels broken"), interaction-scope motion
 * should stay under that ceiling. Page-scope transitions are out of scope
 * for this token group; if those land later, this rule should learn to
 * skip a `pageScope: true` flag on the duration.
 */
export function overlongDuration(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [name, dur] of state.motion.duration) {
    const ms = toMs(dur);
    if (ms > MAX_INTERACTION_MS) {
      findings.push({
        path: `motion.duration.${name}`,
        message: `Duration '${name}' is ${ms}ms — anything over ${MAX_INTERACTION_MS}ms reads as broken. Reserve long durations for page-scope transitions.`,
      });
    }
  }
  return findings;
}

export const overlongDurationRule: RuleDescriptor = {
  name: 'overlong-duration',
  severity: 'warning',
  description: 'Overlong duration — flags motion durations longer than 400ms.',
  run: overlongDuration,
};
