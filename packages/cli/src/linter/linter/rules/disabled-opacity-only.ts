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

const CONTRAST_PROPS = ['backgroundColor', 'textColor', 'border'];

/**
 * `disabled-opacity-only` — flags a `disabled` state that changes opacity
 * but does not also reduce contrast (backgroundColor/textColor/border) AND
 * set `cursor: not-allowed`. Opacity alone fails for users who can't see the
 * cursor change and offers a poor signal to assistive tech.
 */
export function disabledOpacityOnly(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const disabled = comp.states.get('disabled');
    if (!disabled) continue;
    if (!disabled.has('opacity')) continue;

    const cursorValue = disabled.get('cursor');
    const hasCursor = isNotAllowedCursor(cursorValue);
    const hasContrastChange = CONTRAST_PROPS.some(p => disabled.has(p));

    if (hasCursor && hasContrastChange) continue;

    const missing: string[] = [];
    if (!hasContrastChange) missing.push('reduced contrast (backgroundColor/textColor/border)');
    if (!hasCursor) missing.push("`cursor: not-allowed`");

    findings.push({
      path: `components.${compName}.states.disabled`,
      message:
        `'disabled' uses opacity-only signaling. Add ${missing.join(' and ')} — ` +
        `opacity alone fails for users who can't see a cursor change.`,
    });
  }
  return findings;
}

function isNotAllowedCursor(value: ResolvedValue | undefined): boolean {
  if (value === undefined) return false;
  if (typeof value !== 'string') return false;
  return value.trim().toLowerCase() === 'not-allowed';
}

export const disabledOpacityOnlyRule: RuleDescriptor = {
  name: 'disabled-opacity-only',
  severity: 'warning',
  description: 'disabled state changes opacity without reducing contrast or setting cursor.',
  run: disabledOpacityOnly,
};
