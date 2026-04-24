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
import { ICON_STYLES } from '../../spec-config.js';

/**
 * Warn when `icons.style` uses a value outside the canonical enum.
 * Non-normative — unknown values are preserved; this is advisory only.
 */
export function unknownIconStyle(state: DesignSystemState): RuleFinding[] {
  const style = state.icons?.style;
  if (!style) return [];
  if (ICON_STYLES.includes(style)) return [];
  return [{
    path: 'icons.style',
    message: `'${style}' is not a canonical icon style. Expected one of: ${ICON_STYLES.join(', ')}.`,
  }];
}

export const unknownIconStyleRule: RuleDescriptor = {
  name: 'unknown-icon-style',
  severity: 'warning',
  description: 'Warn when `icons.style` uses a value outside the canonical enum.',
  run: unknownIconStyle,
};
