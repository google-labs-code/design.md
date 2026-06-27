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

/** Background color roles that should have a matching on-* foreground token. */
const PAIRABLE_ROLES = new Set([
  'primary',
  'secondary',
  'tertiary',
  'neutral',
  'surface',
  'error',
]);

/**
 * Missing on-* color — info when a background color role exists without its
 * paired foreground token (e.g., primary without on-primary).
 */
export function missingOnColorCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];

  for (const role of PAIRABLE_ROLES) {
    if (!state.colors.has(role)) continue;
    const onToken = `on-${role}`;
    if (state.colors.has(onToken)) continue;

    findings.push({
      path: `colors.${role}`,
      severity: 'info',
      message:
        `Color '${role}' is defined without a paired '${onToken}' foreground token — ` +
        'agents may guess text colors at implementation time.',
    });
  }

  return findings;
}

export const missingOnColorRule: RuleDescriptor = {
  name: 'missing-on-color',
  severity: 'info',
  description:
    'Missing on-* color — surfaces when a background color role lacks a paired on-* foreground token.',
  run: missingOnColorCheck,
};
