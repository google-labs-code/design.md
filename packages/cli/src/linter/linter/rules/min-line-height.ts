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

/** WCAG 1.4.12 text spacing — body/label roles should allow 1.5× line height. */
const MIN_LINE_HEIGHT = 1.5;

function isBodyOrLabelRole(name: string): boolean {
  return /^(body|label)/i.test(name);
}

export function minLineHeightCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [name, typo] of state.typography) {
    if (!isBodyOrLabelRole(name)) continue;
    const lh = typo.lineHeight;
    if (!lh || lh.unit !== '') continue;
    if (lh.value < MIN_LINE_HEIGHT) {
      findings.push({
        path: `typography.${name}.lineHeight`,
        message: `lineHeight ${lh.value} is below ${MIN_LINE_HEIGHT} for a body/label role — may fail WCAG 1.4.12 text spacing overrides.`,
      });
    }
  }
  return findings;
}

export const minLineHeightRule: RuleDescriptor = {
  name: 'min-line-height',
  severity: 'warning',
  description: 'Warns when body/label typography uses unitless lineHeight below 1.5 (WCAG 1.4.12).',
  run: minLineHeightCheck,
};
