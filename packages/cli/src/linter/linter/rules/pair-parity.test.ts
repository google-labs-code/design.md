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
import { pairParity } from './pair-parity.js';
import { buildState } from './test-helpers.js';

describe('pairParity', () => {
  it('returns no findings when no themes declare pair overrides', () => {
    const state = buildState({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
    });
    expect(pairParity(state)).toEqual([]);
  });

  it('does not warn when both halves of the pair are overridden in the theme', () => {
    const state = buildState({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
      themes: {
        dark: {
          colors: {
            'surface-info': { type: 'pair', container: '#1B3A5F', onContainer: '#A3C9FF' },
          },
        },
      },
    });
    expect(pairParity(state)).toEqual([]);
  });

  it('warns when only the container is overridden', () => {
    // Override only the bare flat alias — the on-* alias inherits.
    const state = buildState({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
      themes: {
        dark: {
          colors: {
            'surface-info': '#1B3A5F',
          },
        },
      },
    });
    const findings = pairParity(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('themes.dark.colors.surface-info');
    expect(findings[0]!.message).toContain('container');
  });

  it('warns when only the on-container is overridden', () => {
    const state = buildState({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
      themes: {
        dark: {
          colors: { 'on-surface-info': '#FFFFFF' },
        },
      },
    });
    const findings = pairParity(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('on-container');
  });

  it('does not warn when the theme leaves the pair entirely inherited', () => {
    const state = buildState({
      colors: {
        primary: '#1A1C1E',
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
      themes: {
        dark: { colors: { primary: '#A3C9FF' } },
      },
    });
    expect(pairParity(state)).toEqual([]);
  });
});
