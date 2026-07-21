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

/** Brettel-Viénot-Mollon deficiency matrices on normalized sRGB [0, 1]. */
const CVD_MATRICES = {
  protanopia: [
    [0.567, 0.433, 0.0],
    [0.558, 0.442, 0.0],
    [0.0, 0.242, 0.758],
  ],
  deuteranopia: [
    [0.625, 0.375, 0.0],
    [0.7, 0.3, 0.0],
    [0.0, 0.3, 0.7],
  ],
  tritanopia: [
    [0.95, 0.05, 0.0],
    [0.0, 0.433, 0.567],
    [0.0, 0.475, 0.525],
  ],
} as const;

type CvdType = keyof typeof CVD_MATRICES;

const CVD_FLOOR = 3;

function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

function relativeLuminance(r: number, g: number, b: number): number {
  const linear = [r, g, b].map(c => {
    const s = c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    return s;
  });
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!;
}

function toHexByte(n: number): string {
  return Math.round(clamp01(n) * 255).toString(16).padStart(2, '0');
}

function simulateCvd(color: ResolvedColor, type: CvdType): ResolvedColor {
  const rgb = [color.r / 255, color.g / 255, color.b / 255];
  const m = CVD_MATRICES[type];
  const r = clamp01(m[0]![0]! * rgb[0]! + m[0]![1]! * rgb[1]! + m[0]![2]! * rgb[2]!);
  const g = clamp01(m[1]![0]! * rgb[0]! + m[1]![1]! * rgb[1]! + m[1]![2]! * rgb[2]!);
  const b = clamp01(m[2]![0]! * rgb[0]! + m[2]![1]! * rgb[1]! + m[2]![2]! * rgb[2]!);
  const rr = Math.round(r * 255);
  const gg = Math.round(g * 255);
  const bb = Math.round(b * 255);
  return {
    type: 'color',
    hex: `#${toHexByte(r)}${toHexByte(g)}${toHexByte(b)}`,
    r: rr,
    g: gg,
    b: bb,
    luminance: relativeLuminance(r, g, b),
  };
}

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

/**
 * Opt-in CVD simulation — re-checks component contrast under protanopia,
 * deuteranopia, and tritanopia. Not included in DEFAULT_RULES; compose via
 * runLinter(state, [...DEFAULT_RULE_DESCRIPTORS, colorBlindContrastRule]).
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

    for (const cvdType of Object.keys(CVD_MATRICES) as CvdType[]) {
      const simBg = simulateCvd(bgColor, cvdType);
      const simText = simulateCvd(textColor, cvdType);
      const ratio = contrastRatio(simBg, simText);
      if (ratio < CVD_FLOOR) {
        findings.push({
          path: `components.${compName}`,
          message:
            `component '${compName}' contrast ${ratio.toFixed(2)}:1 under ${cvdType} simulation ` +
            `(bg ${simBg.hex} on fg ${simText.hex}) is below ${CVD_FLOOR}:1 floor — ` +
            `relying on color-only cues fails this audience.`,
        });
      }
    }
  }
  return findings;
}

export const colorBlindContrastRule: RuleDescriptor = {
  name: 'color-blind-contrast',
  severity: 'warning',
  description:
    'Opt-in CVD simulation (Brettel-Viénot-Mollon) — warns when component pairs fall below 3:1 under protanopia, deuteranopia, or tritanopia.',
  run: colorBlindContrastCheck,
};
