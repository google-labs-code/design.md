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
import { colorBlindContrastCheck } from './color-blind-contrast.js';
import { buildState } from './test-helpers.js';

describe('colorBlindContrastCheck', () => {
  it('warns when brand orange fails under protanopia simulation', () => {
    const state = buildState({
      colors: { accent: '#E44001', white: '#ffffff' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.accent}',
          textColor: '{colors.white}',
        },
      },
    });
    const findings = colorBlindContrastCheck(state);
    expect(findings.some(f => f.message.includes('protanopia'))).toBe(true);
    expect(findings.some(f => f.message.includes('deuteranopia'))).toBe(true);
  });

  it('returns empty for high-contrast black on white', () => {
    const state = buildState({
      colors: { black: '#000000', white: '#ffffff' },
      components: {
        'button-good': {
          backgroundColor: '{colors.black}',
          textColor: '{colors.white}',
        },
      },
    });
    expect(colorBlindContrastCheck(state).length).toBe(0);
  });

  it('skips components missing background or text color', () => {
    const state = buildState({
      colors: { accent: '#E44001' },
      components: {
        'chip': { backgroundColor: '{colors.accent}' },
      },
    });
    expect(colorBlindContrastCheck(state).length).toBe(0);
  });
});
