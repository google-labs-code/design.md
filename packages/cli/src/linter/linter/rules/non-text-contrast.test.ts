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
import { nonTextContrastCheck } from './non-text-contrast.js';
import { buildState } from './test-helpers.js';

describe('nonTextContrastCheck', () => {
  it('emits warning for low border/background contrast', () => {
    const state = buildState({
      colors: { bg: '#ffffff', border: '#f0f0f0' },
      components: {
        'input-default': {
          backgroundColor: '{colors.bg}',
          borderColor: '{colors.border}',
        },
      },
    });
    const findings = nonTextContrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/1\.4\.11/);
  });

  it('returns empty for sufficient border contrast', () => {
    const state = buildState({
      colors: { bg: '#ffffff', border: '#767676' },
      components: {
        'input-default': {
          backgroundColor: '{colors.bg}',
          borderColor: '{colors.border}',
        },
      },
    });
    expect(nonTextContrastCheck(state).length).toBe(0);
  });
});
