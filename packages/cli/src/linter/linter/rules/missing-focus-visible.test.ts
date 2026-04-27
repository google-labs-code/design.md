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
import { missingFocusVisible } from './missing-focus-visible.js';
import { buildState } from './test-helpers.js';

describe('missing-focus-visible', () => {
  it('errors when an interactive component omits focus-visible', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', secondary: '#FFFFFF' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { hover: { backgroundColor: '{colors.secondary}' } },
        },
      },
    });
    const findings = missingFocusVisible(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.btn.states.focus-visible');
    expect(findings[0]!.message).toContain('focus-visible');
  });

  it('passes when an interactive component declares focus-visible', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', secondary: '#FFFFFF' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: {
            'focus-visible': { outline: '2px solid {colors.secondary}' },
          },
        },
      },
    });
    expect(missingFocusVisible(state)).toEqual([]);
  });

  it('ignores non-interactive components', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'card': { backgroundColor: '{colors.primary}' },
      },
    });
    expect(missingFocusVisible(state)).toEqual([]);
  });
});
