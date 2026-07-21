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

const WCAG_FOCUS_MINIMUM = 3;

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

function parsePx(value: ResolvedValue): number | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'dimension') {
    const dim = value as { value: number; unit: string };
    if (dim.unit === 'px') return dim.value;
  }
  return null;
}

/**
 * WCAG 2.4.11 focus appearance — warns when focusRingColor on backgroundColor
 * falls below 3:1, or when focusRingWidth is below 2px.
 */
export function focusRingContrastCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];

  for (const [compName, comp] of state.components) {
    const ringValue = comp.properties.get('focusRingColor');
    const bgValue = comp.properties.get('backgroundColor');
    const widthValue = comp.properties.get('focusRingWidth');

    if (ringValue && bgValue) {
      const ringColor = resolveToColor(ringValue);
      const bgColor = resolveToColor(bgValue);
      if (ringColor && bgColor) {
        const ratio = contrastRatio(ringColor, bgColor);
        if (ratio < WCAG_FOCUS_MINIMUM) {
          findings.push({
            path: `components.${compName}`,
            message:
              `focusRingColor (${ringColor.hex}) on backgroundColor (${bgColor.hex}) has contrast ratio ` +
              `${ratio.toFixed(2)}:1, below WCAG 2.4.11 minimum of ${WCAG_FOCUS_MINIMUM}:1.`,
          });
        }
      }
    }

    if (widthValue) {
      const px = parsePx(widthValue);
      if (px !== null && px < 2) {
        findings.push({
          path: `components.${compName}.focusRingWidth`,
          message: `focusRingWidth (${px}px) is below the 2px minimum recommended for WCAG 2.4.11 focus appearance.`,
        });
      }
    }
  }

  return findings;
}

export const focusRingContrastRule: RuleDescriptor = {
  name: 'focus-ring-contrast',
  severity: 'warning',
  description:
    'Focus ring contrast — warns when focusRingColor/backgroundColor pairs fall below WCAG 2.4.11 (3:1) or focusRingWidth is below 2px.',
  run: focusRingContrastCheck,
};
