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

import { describe, it, expect } from 'bun:test';
import { colorBlindContrastCheck, colorBlindContrastRule } from './color-blind-contrast.js';
import { DEFAULT_RULE_DESCRIPTORS } from './index.js';
import { buildState } from './test-helpers.js';

describe('colorBlindContrastCheck', () => {
  it('emits warnings for low simulated contrast pairs', () => {
    const state = buildState({
      components: {
        'button-danger': { backgroundColor: '#FFFFFF', textColor: '#E44001' },
      },
    });

    const findings = colorBlindContrastCheck(state);

    expect(findings.some(finding => finding.message.includes('under protanopia simulation'))).toBe(true);
    expect(findings.some(finding => finding.message.includes('under deuteranopia simulation'))).toBe(true);
    expect(findings.every(finding => finding.path === 'components.button-danger')).toBe(true);
  });

  it('returns empty for CVD-safe contrast pairs', () => {
    const state = buildState({
      components: {
        'button-good': { backgroundColor: '#FFFFFF', textColor: '#000000' },
      },
    });

    const findings = colorBlindContrastCheck(state);

    expect(findings.length).toBe(0);
  });

  it('is not present in default rule descriptors', () => {
    expect(DEFAULT_RULE_DESCRIPTORS.some(rule => rule.name === colorBlindContrastRule.name)).toBe(false);
  });
});
