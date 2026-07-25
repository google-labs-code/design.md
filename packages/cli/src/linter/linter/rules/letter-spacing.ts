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

/** Warn when letterSpacing is aggressively negative (readability / dyslexia). */
const MIN_LETTER_SPACING_EM = -0.05;

export function letterSpacingCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [name, typo] of state.typography) {
    const ls = typo.letterSpacing;
    if (!ls || ls.unit !== 'em') continue;
    if (ls.value < MIN_LETTER_SPACING_EM) {
      findings.push({
        path: `typography.${name}.letterSpacing`,
        message: `letterSpacing ${ls.value}em is below ${MIN_LETTER_SPACING_EM}em — aggressive negative tracking can impair readability.`,
      });
    }
  }
  return findings;
}

export const letterSpacingRule: RuleDescriptor = {
  name: 'letter-spacing',
  severity: 'warning',
  description: 'Warns when typography letterSpacing is more aggressive than -0.05em.',
  run: letterSpacingCheck,
};
