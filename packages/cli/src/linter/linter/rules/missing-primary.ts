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
 * Missing primary color — warns when colors are defined but no 'primary' exists.
 */
export function missingPrimary(state: DesignSystemState): RuleFinding[] {
  if (state.colors.size > 0 && !state.colors.has('primary')) {
    return [{
      path: 'colors',
      message: "No 'primary' color defined. The agent will auto-generate key colors, reducing your control over the palette.",
    }];
  }
  return [];
}

export const missingPrimaryRule: RuleDescriptor = {
  name: 'missing-primary',
  severity: 'warning',
  description: "Missing primary color — warns when colors are defined but no 'primary' exists.",
  run: missingPrimary,
};
