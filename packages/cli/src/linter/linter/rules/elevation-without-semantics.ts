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
 * Components that set a literal `shadow` value (instead of referencing an
 * `{elevation.*}` token) bypass the semantic resting / raised / overlay /
 * modal vocabulary. Nudge authors toward semantic elevation.
 */
export function elevationWithoutSemantics(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  if (state.elevation.size === 0) return findings;

  for (const [compName, comp] of state.components) {
    const shadow = comp.properties.get('shadow');
    if (!shadow) continue;
    // A resolved {elevation.*} reference is a ResolvedShadow object. A
    // string here means the author wrote a literal CSS shadow (and the
    // model didn't resolve it against any token).
    if (typeof shadow === 'string') {
      findings.push({
        path: `components.${compName}.shadow`,
        message: `'${compName}' uses a literal shadow value. Reference an {elevation.*} token (e.g., resting / raised / overlay / modal) for semantic elevation.`,
      });
    }
  }
  return findings;
}

export const elevationWithoutSemanticsRule: RuleDescriptor = {
  name: 'elevation-without-semantics',
  severity: 'info',
  description: 'Elevation without semantics — flags literal shadow values when elevation tokens are available.',
  run: elevationWithoutSemantics,
};
