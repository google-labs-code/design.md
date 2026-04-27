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

import type { DesignSystemState, ResolvedValue } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * `outline-none-without-replacement` — flags a focus-visible state that
 * suppresses the native outline without supplying a replacement focus signal
 * (boxShadow, border, or non-zero outline-offset ring).
 */
export function outlineNoneWithoutReplacement(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const focus = comp.states.get('focus-visible');
    if (!focus) continue;

    const outline = focus.get('outline');
    if (!isNoneOutline(outline)) continue;

    const hasReplacement =
      focus.has('boxShadow') ||
      focus.has('border') ||
      focus.has('outline-offset');
    if (hasReplacement) continue;

    findings.push({
      path: `components.${compName}.states.focus-visible.outline`,
      message:
        `focus-visible declares 'outline: none' (or 0) without a replacement signal ` +
        `(boxShadow, border, or outline-offset). Keyboard users will lose all focus indication.`,
    });
  }
  return findings;
}

function isNoneOutline(value: ResolvedValue | undefined): boolean {
  if (value === undefined) return false;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'none' || normalized === '0') return true;
    // Match "0px solid …", "0 …" — the leading width is the only cue we need.
    if (/^0(?:\.0+)?(?:px|rem|em)?\b/.test(normalized)) return true;
    return false;
  }
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'dimension') {
    return value.value === 0;
  }
  return false;
}

export const outlineNoneWithoutReplacementRule: RuleDescriptor = {
  name: 'outline-none-without-replacement',
  severity: 'error',
  description: 'focus-visible state declares outline: none without a replacement signal.',
  run: outlineNoneWithoutReplacement,
};
