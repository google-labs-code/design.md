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
import { unchangedState } from './unchanged-state.js';
import { buildState } from './test-helpers.js';

describe('unchanged-state', () => {
  it('flags a state with no overrides', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { hover: {} },
        },
      },
    });
    const findings = unchangedState(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.btn.states.hover');
  });

  it('passes when state has at least one override', () => {
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
    expect(unchangedState(state)).toEqual([]);
  });

  it('passes when no states are declared', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': { backgroundColor: '{colors.primary}' },
      },
    });
    expect(unchangedState(state)).toEqual([]);
  });
});
