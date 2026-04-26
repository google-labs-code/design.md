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
import { disabledOpacityOnly } from './disabled-opacity-only.js';
import { buildState } from './test-helpers.js';

describe('disabled-opacity-only', () => {
  it('warns when disabled changes only opacity', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { disabled: { opacity: 0.5 } },
        },
      },
    });
    const findings = disabledOpacityOnly(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.btn.states.disabled');
  });

  it('warns when only cursor is set without contrast change', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { disabled: { opacity: 0.5, cursor: 'not-allowed' } },
        },
      },
    });
    const findings = disabledOpacityOnly(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('reduced contrast');
  });

  it('passes when both cursor and contrast change accompany opacity', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', muted: '#888888' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: {
            disabled: {
              opacity: 0.5,
              cursor: 'not-allowed',
              backgroundColor: '{colors.muted}',
            },
          },
        },
      },
    });
    expect(disabledOpacityOnly(state)).toEqual([]);
  });

  it('passes when disabled does not use opacity at all', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', muted: '#888888' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: {
            disabled: {
              cursor: 'not-allowed',
              backgroundColor: '{colors.muted}',
            },
          },
        },
      },
    });
    expect(disabledOpacityOnly(state)).toEqual([]);
  });
});
