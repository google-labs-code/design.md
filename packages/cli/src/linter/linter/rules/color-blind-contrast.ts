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
import { contrastRatio, parseColor } from '../../model/handler.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const CVD_CONTRAST_MINIMUM = 3;

type SimulationMatrix = readonly [
  readonly [number, number, number],
  readonly [number, number, number],
  readonly [number, number, number],
];

const COLOR_BLIND_SIMULATIONS: Array<{ name: string; matrix: SimulationMatrix }> = [
  {
    name: 'protanopia',
    matrix: [
      [0.567, 0.433, 0],
      [0.558, 0.442, 0],
      [0, 0.242, 0.758],
    ],
  },
  {
    name: 'deuteranopia',
    matrix: [
      [0.625, 0.375, 0],
      [0.7, 0.3, 0],
      [0, 0.3, 0.7],
    ],
  },
  {
    name: 'tritanopia',
    matrix: [
      [0.95, 0.05, 0],
      [0, 0.433, 0.567],
      [0, 0.475, 0.525],
    ],
  },
];

/**
 * Color-blind contrast — warns when simulated component backgroundColor/textColor
 * pairs fall below the 3:1 floor.
 */
export function colorBlindContrastCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const bgValue = comp.properties.get('backgroundColor');
    const textValue = comp.properties.get('textColor');
    if (!bgValue || !textValue) continue;

    const bgColor = resolveToColor(bgValue);
    const textColor = resolveToColor(textValue);
    if (!bgColor || !textColor) continue;

    for (const { name, matrix } of COLOR_BLIND_SIMULATIONS) {
      const simBg = simulate(bgColor, matrix);
      const simText = simulate(textColor, matrix);
      const ratio = contrastRatio(simBg, simText);
      if (ratio < CVD_CONTRAST_MINIMUM) {
        findings.push({
          path: `components.${compName}`,
          message: `component '${compName}' contrast ${ratio.toFixed(2)}:1 under ${name} simulation (bg ${simBg.hex} on fg ${simText.hex}) is below the 3:1 floor`,
        });
      }
    }
  }
  return findings;
}

function simulate(color: ResolvedColor, matrix: SimulationMatrix): ResolvedColor {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const simR = matrix[0][0] * r + matrix[0][1] * g + matrix[0][2] * b;
  const simG = matrix[1][0] * r + matrix[1][1] * g + matrix[1][2] * b;
  const simB = matrix[2][0] * r + matrix[2][1] * g + matrix[2][2] * b;

  return parseColor(toHex(simR, simG, simB));
}

function toHex(r: number, g: number, b: number): string {
  return `#${toHexChannel(r)}${toHexChannel(g)}${toHexChannel(b)}`;
}

function toHexChannel(value: number): string {
  return Math.round(clamp(value) * 255)
    .toString(16)
    .padStart(2, '0');
}

function clamp(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

export const colorBlindContrastRule: RuleDescriptor = {
  name: 'color-blind-contrast',
  severity: 'warning',
  description: 'Color-blind contrast — warns when simulated component backgroundColor/textColor pairs fall below the 3:1 floor.',
  run: colorBlindContrastCheck,
};
