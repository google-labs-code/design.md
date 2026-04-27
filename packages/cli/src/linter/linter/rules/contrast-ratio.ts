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

import type { ComponentDef, DesignSystemState, ResolvedColor, ResolvedValue, ThemeView } from '../../model/spec.js';
import { contrastRatio } from '../../model/handler.js';
import { BASE_THEME_NAME } from '../../spec-config.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const WCAG_AA_MINIMUM = 4.5;

/**
 * WCAG contrast ratio — for every component's backgroundColor/textColor
 * pair, verify the ratio meets the active theme's contrast target. When
 * additional themes are declared, the same check runs per theme so a
 * dark or high-contrast theme that breaks contrast surfaces explicitly.
 *
 * Per-theme target defaults to WCAG AA (4.5:1) but is configurable via
 * `themes.<name>.contrastTarget.body`.
 */
export function contrastCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [themeName, theme] of state.themes) {
    for (const [compName, comp] of state.components) {
      // Base properties.
      checkPair(themeName, theme, compName, null, comp, comp.properties, findings);
      // Per-state overrides — re-resolve through the theme view so a
      // hover state that references `{colors.primary}` picks up the
      // theme-scoped value.
      for (const [stateName, props] of comp.resolvedStates) {
        checkPair(themeName, theme, compName, stateName, comp, props, findings);
      }
    }
  }
  return findings;
}

function checkPair(
  themeName: string,
  theme: ThemeView,
  compName: string,
  stateName: string | null,
  comp: ComponentDef,
  props: Map<string, ResolvedValue>,
  findings: RuleFinding[],
): void {
  const bgColor = pickColor(theme, comp, props, 'backgroundColor', stateName);
  const textColor = pickColor(theme, comp, props, 'textColor', stateName);
  if (!bgColor || !textColor) return;

  const target = theme.contrastTarget.body;
  const ratio = contrastRatio(bgColor, textColor);
  if (ratio >= target) return;

  const path = stateName
    ? `components.${compName}.states.${stateName}`
    : `components.${compName}`;
  const where = stateName ? ` (${stateName} state)` : '';
  const inTheme = themeName === BASE_THEME_NAME ? '' : ` in theme '${themeName}'`;
  const targetSuffix = target === WCAG_AA_MINIMUM
    ? `WCAG AA minimum of ${WCAG_AA_MINIMUM}:1`
    : `theme '${themeName}' target of ${target}:1`;
  findings.push({
    path,
    message:
      `textColor (${textColor.hex}) on backgroundColor (${bgColor.hex})${where}${inTheme} ` +
      `has contrast ratio ${ratio.toFixed(2)}:1, below ${targetSuffix}.`,
  });
}

/**
 * Resolve a component property to a `ResolvedColor` through a theme view.
 * Falls back to the base-resolved property when the theme doesn't carry a
 * matching token reference (e.g., the component uses a literal hex).
 */
function pickColor(
  theme: ThemeView,
  comp: ComponentDef,
  props: Map<string, ResolvedValue>,
  propName: 'backgroundColor' | 'textColor',
  stateName: string | null,
): ResolvedColor | null {
  // Per-theme refs: re-resolve through the theme's color map.
  const ref = stateName
    ? comp.stateRefs.get(stateName)?.get(propName) ?? comp.propertyRefs.get(propName)
    : comp.propertyRefs.get(propName);
  if (ref && ref.startsWith('colors.')) {
    const themeColor = theme.colors.get(ref.slice('colors.'.length));
    if (themeColor) return themeColor;
  }
  // Fall back to the base-resolved value.
  return resolveToColor(props.get(propName));
}

function resolveToColor(value: ResolvedValue | undefined): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

export const contrastCheckRule: RuleDescriptor = {
  name: 'contrast-ratio',
  severity: 'warning',
  description:
    'WCAG contrast ratio — warns when component backgroundColor/textColor pairs fall below each theme\'s contrast target.',
  run: contrastCheck,
};
