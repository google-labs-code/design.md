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

const MIN_FONT_SIZE_PX = 14;
const MIN_BODY_FONT_SIZE_PX = 16;

function isBodyRole(name: string): boolean {
  return /^body/i.test(name);
}

function fontSizeInPx(value: number, unit: string): number | null {
  if (unit === 'px') return value;
  if (unit === 'rem') return value * 16;
  return null;
}

export function minFontSizeCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [name, typo] of state.typography) {
    const fs = typo.fontSize;
    if (!fs) continue;
    const px = fontSizeInPx(fs.value, fs.unit);
    if (px === null) continue;

    const minPx = isBodyRole(name) ? MIN_BODY_FONT_SIZE_PX : MIN_FONT_SIZE_PX;
    if (px < minPx) {
      findings.push({
        path: `typography.${name}.fontSize`,
        message: `fontSize ${fs.value}${fs.unit} (~${px}px) is below the ${minPx}px minimum for ${isBodyRole(name) ? 'body' : 'general'} text — small sizes are especially inaccessible in CJK scripts.`,
      });
    }
  }
  return findings;
}

export const minFontSizeRule: RuleDescriptor = {
  name: 'min-font-size',
  severity: 'warning',
  description: 'Warns when typography fontSize is below 14px (16px for body roles).',
  run: minFontSizeCheck,
};
