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

export function hermesAccessibilityContract(state: DesignSystemState): RuleFinding[] {
  if (state.profile !== 'hermes') return [];

  const findings: RuleFinding[] = [];
  const accessibility = state.accessibility;
  if (!accessibility || typeof accessibility !== 'object' || Array.isArray(accessibility)) {
    return [{
      path: 'accessibility',
      message: 'Hermes profile requires an accessibility block.',
    }];
  }

  const contrast = accessibility['contrast'];
  if (!contrast || typeof contrast !== 'object' || Array.isArray(contrast)) {
    findings.push({
      path: 'accessibility.contrast',
      message: 'Hermes profile requires accessibility.contrast to be an object.',
    });
  }

  const focus = accessibility['focus'];
  if (!focus || typeof focus !== 'object' || Array.isArray(focus)) {
    findings.push({
      path: 'accessibility.focus',
      message: 'Hermes profile requires accessibility.focus to be an object.',
    });
  } else {
    const focusObj = focus as Record<string, unknown>;
    if (typeof focusObj['minRingWidth'] !== 'string') {
      findings.push({
        path: 'accessibility.focus.minRingWidth',
        message: 'accessibility.focus.minRingWidth must be a dimension string.',
      });
    }
  }

  const motion = accessibility['motion'];
  if (!motion || typeof motion !== 'object' || Array.isArray(motion)) {
    findings.push({
      path: 'accessibility.motion',
      message: 'Hermes profile requires accessibility.motion to be an object.',
    });
  } else {
    const motionObj = motion as Record<string, unknown>;
    if (motionObj['respectReducedMotion'] !== undefined && typeof motionObj['respectReducedMotion'] !== 'boolean') {
      findings.push({
        path: 'accessibility.motion.respectReducedMotion',
        message: 'accessibility.motion.respectReducedMotion must be boolean when provided.',
      });
    }
  }

  return findings;
}

export const hermesAccessibilityContractRule: RuleDescriptor = {
  name: 'hermes-accessibility-contract',
  severity: 'warning',
  description: 'Hermes profile requires accessibility guidance for contrast, focus, and motion.',
  run: hermesAccessibilityContract,
};
