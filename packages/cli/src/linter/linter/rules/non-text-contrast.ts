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

import type { DesignSystemState, ResolvedColor, ResolvedValue } from '../../model/spec.js';
import { contrastRatio } from '../../model/handler.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const WCAG_NON_TEXT_MINIMUM = 3;

/**
 * WCAG 1.4.11 non-text contrast — warns when component borderColor/backgroundColor
 * pairs fall below the 3:1 minimum for UI boundaries.
 */
export function nonTextContrastCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const borderValue = comp.properties.get('borderColor');
    const bgValue = comp.properties.get('backgroundColor');
    if (!borderValue || !bgValue) continue;

    const borderColor = resolveToColor(borderValue);
    const bgColor = resolveToColor(bgValue);
    if (!borderColor || !bgColor) continue;

    const ratio = contrastRatio(borderColor, bgColor);
    if (ratio < WCAG_NON_TEXT_MINIMUM) {
      findings.push({
        path: `components.${compName}`,
        message: `borderColor (${borderColor.hex}) on backgroundColor (${bgColor.hex}) has contrast ratio ${ratio.toFixed(2)}:1, below WCAG 1.4.11 non-text minimum of ${WCAG_NON_TEXT_MINIMUM}:1.`,
      });
    }
  }
  return findings;
}

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

export const nonTextContrastCheckRule: RuleDescriptor = {
  name: 'non-text-contrast',
  severity: 'warning',
  description: 'WCAG 1.4.11 non-text contrast — warns when borderColor/backgroundColor pairs fall below 3:1.',
  run: nonTextContrastCheck,
};
