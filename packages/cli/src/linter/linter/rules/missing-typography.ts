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

/**
 * Missing typography — warns when colors are defined but no typography tokens exist.
 * Without typography tokens, agents will fall back to their own font choices,
 * reducing the author's control over the design system's typographic identity.
 */
export function missingTypography(state: DesignSystemState): RuleFinding[] {
  if (state.typography.size === 0 && state.colors.size > 0) {
    return [{
      path: 'typography',
      message: "No typography tokens defined. Agents will use default font choices, reducing your control over the design system's typographic identity.",
    }];
  }
  return [];
}

export const missingTypographyRule: RuleDescriptor = {
  name: 'missing-typography',
  severity: 'warning',
  description: "Missing typography — warns when colors are defined but no typography tokens exist.",
  run: missingTypography,
};
