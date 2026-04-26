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
import { unknownState } from './unknown-state.js';
import { buildState } from './test-helpers.js';

describe('unknown-state', () => {
  it('warns when a state name is not in the recognized vocabulary', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', accent: '#FFFFFF' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { 'loading-error': { backgroundColor: '{colors.accent}' } },
        },
      },
    });
    const findings = unknownState(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.btn.states.loading-error');
  });

  it('passes for canonical states', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', accent: '#FFFFFF' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { hover: { backgroundColor: '{colors.accent}' } },
        },
      },
    });
    expect(unknownState(state)).toEqual([]);
  });
});
