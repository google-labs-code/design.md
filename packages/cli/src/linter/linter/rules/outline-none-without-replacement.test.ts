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
import { outlineNoneWithoutReplacement } from './outline-none-without-replacement.js';
import { buildState } from './test-helpers.js';

describe('outline-none-without-replacement', () => {
  it('errors when focus-visible sets outline:none with no replacement', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { 'focus-visible': { outline: 'none' } },
        },
      },
    });
    const findings = outlineNoneWithoutReplacement(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('components.btn.states.focus-visible.outline');
  });

  it('passes when boxShadow replaces the outline', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: {
            'focus-visible': {
              outline: 'none',
              boxShadow: '0 0 0 2px #fff',
            },
          },
        },
      },
    });
    expect(outlineNoneWithoutReplacement(state)).toEqual([]);
  });

  it('passes when outline is non-zero', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { 'focus-visible': { outline: '2px solid #fff' } },
        },
      },
    });
    expect(outlineNoneWithoutReplacement(state)).toEqual([]);
  });

  it('treats outline: 0 as outline:none', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E' },
      components: {
        'btn': {
          backgroundColor: '{colors.primary}',
          interactive: true,
          states: { 'focus-visible': { outline: '0' } },
        },
      },
    });
    expect(outlineNoneWithoutReplacement(state).length).toBe(1);
  });
});
