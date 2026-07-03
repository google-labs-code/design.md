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
import { interactiveStateTokensCheck } from './interactive-state-tokens.js';
import { buildState } from './test-helpers.js';

describe('interactiveStateTokensCheck', () => {
  it('warns when button lacks hover and disabled variants', () => {
    const state = buildState({
      colors: { primary: '#003366', onPrimary: '#ffffff' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.onPrimary}',
        },
      },
    });
    const findings = interactiveStateTokensCheck(state);
    expect(findings.some(f => f.message.includes('-hover'))).toBe(true);
    expect(findings.some(f => f.message.includes('-disabled'))).toBe(true);
  });

  it('warns when disabled mirrors base colors', () => {
    const state = buildState({
      colors: { primary: '#003366', onPrimary: '#ffffff' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.onPrimary}',
        },
        'button-primary-disabled': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.onPrimary}',
        },
        'button-primary-hover': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.onPrimary}',
        },
      },
    });
    const findings = interactiveStateTokensCheck(state);
    expect(findings.some(f => f.message.includes('same colors'))).toBe(true);
  });
});
