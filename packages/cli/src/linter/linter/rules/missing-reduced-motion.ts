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
 * Reduced-motion fallback is mandatory when motion is declared. Users with
 * vestibular sensitivities depend on `prefers-reduced-motion`; without an
 * authored fallback, animations slip through unchanged.
 */
export function missingReducedMotion(state: DesignSystemState): RuleFinding[] {
  const hasMotion = state.motion.duration.size > 0 || state.motion.easing.size > 0;
  if (!hasMotion) return [];
  if (state.motion.reducedMotion) return [];
  return [{
    path: 'motion.reducedMotion',
    message: 'Motion declared without a reducedMotion: fallback. Authors must specify the duration and easing applied under prefers-reduced-motion.',
  }];
}

export const missingReducedMotionRule: RuleDescriptor = {
  name: 'missing-reduced-motion',
  severity: 'warning',
  description: 'Missing reduced motion — warns when motion tokens are declared without a reducedMotion fallback.',
  run: missingReducedMotion,
};
