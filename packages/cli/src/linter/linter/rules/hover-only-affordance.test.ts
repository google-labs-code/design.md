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
import { hoverOnlyAffordance } from './hover-only-affordance.js';
import { buildState } from './test-helpers.js';

describe('hover-only-affordance', () => {
  it('warns when an interactive component matches a non-interactive sibling at rest', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', accent: '#FF0000' },
      components: {
        'card-static': {
          backgroundColor: '{colors.primary}',
        },
        'card-button': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { hover: { backgroundColor: '{colors.accent}' } },
        },
      },
    });
    const findings = hoverOnlyAffordance(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.card-button');
  });

  it('passes when rest state differs from sibling', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', accent: '#FF0000', surface: '#FFFFFF' },
      components: {
        'card-static': {
          backgroundColor: '{colors.surface}',
        },
        'card-button': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { hover: { backgroundColor: '{colors.accent}' } },
        },
      },
    });
    expect(hoverOnlyAffordance(state)).toEqual([]);
  });

  it('passes when there are no non-interactive siblings', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', accent: '#FF0000' },
      components: {
        'card-button': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { hover: { backgroundColor: '{colors.accent}' } },
        },
      },
    });
    expect(hoverOnlyAffordance(state)).toEqual([]);
  });
});
