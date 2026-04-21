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
 * Token count summary — emits an info diagnostic summarizing how many
 * tokens are defined in each section.
 */
export function tokenSummary(state: DesignSystemState): RuleFinding[] {
  const parts: string[] = [];
  if (state.colors.size > 0) parts.push(`${state.colors.size} color${state.colors.size !== 1 ? 's' : ''}`);
  if (state.typography.size > 0) parts.push(`${state.typography.size} typography scale${state.typography.size !== 1 ? 's' : ''}`);
  if (state.rounded.size > 0) parts.push(`${state.rounded.size} rounding level${state.rounded.size !== 1 ? 's' : ''}`);
  if (state.spacing.size > 0) parts.push(`${state.spacing.size} spacing token${state.spacing.size !== 1 ? 's' : ''}`);
  if (state.components.size > 0) parts.push(`${state.components.size} component${state.components.size !== 1 ? 's' : ''}`);

  if (parts.length > 0) {
    return [{
      message: `Design system defines ${parts.join(', ')}.`,
    }];
  }
  return [];
}

export const tokenSummaryRule: RuleDescriptor = {
  name: 'token-summary',
  severity: 'info',
  description: 'Token count summary — emits an info diagnostic summarizing how many tokens are defined.',
  run: tokenSummary,
};
