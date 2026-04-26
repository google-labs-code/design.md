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
import { themeParity } from './theme-parity.js';
import { buildState } from './test-helpers.js';

describe('themeParity', () => {
  it('returns no findings when no themes are declared', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', surface: '#FFFFFF' },
    });
    expect(themeParity(state)).toEqual([]);
  });

  it('warns when a theme inherits a base color silently', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', surface: '#FFFFFF', tertiary: '#B8422E' },
      themes: {
        dark: { colors: { primary: '#A3C9FF', surface: '#1A1C1E' } },
      },
    });

    const findings = themeParity(state);
    // `tertiary` is the only un-overridden base color.
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('themes.dark.colors.tertiary');
  });

  it('does not warn when every base color is explicitly overridden', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', surface: '#FFFFFF' },
      themes: {
        dark: { colors: { primary: '#A3C9FF', surface: '#1A1C1E' } },
      },
    });
    expect(themeParity(state)).toEqual([]);
  });

  it('skips ramp step entries (parity is checked at the anchor)', () => {
    const state = buildState({
      colors: {
        primary: { type: 'ramp', anchor: '#1A1C1E', humanName: 'Charcoal' },
      },
      themes: {
        dark: {
          colors: {
            primary: { type: 'ramp', anchor: '#A3C9FF', humanName: 'Sky' },
          },
        },
      },
    });
    expect(themeParity(state)).toEqual([]);
  });

  it('treats overriding a ramp-derived pair as covering the ramp anchor', () => {
    const state = buildState({
      colors: {
        primary: {
          type: 'ramp',
          anchor: '#1A1C1E',
          humanName: 'Charcoal',
          pairs: { container: { bg: 100, fg: 800 } },
        },
      },
      themes: {
        // The author overrode `primary-container` (the derived pair) but not
        // the bare `primary` anchor — that's intentional and should not warn.
        dark: {
          colors: {
            'primary-container': {
              type: 'pair',
              container: '#0F2A52',
              onContainer: '#A3C9FF',
            },
          },
        },
      },
    });
    expect(themeParity(state)).toEqual([]);
  });

  it('warns once per un-overridden base color across multiple themes', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', secondary: '#6C7278' },
      themes: {
        dark: { colors: { primary: '#A3C9FF' } },        // missing secondary
        'high-contrast': { colors: { secondary: '#000000' } }, // missing primary
      },
    });

    const findings = themeParity(state);
    expect(findings.length).toBe(2);
    expect(findings.some(f => f.path === 'themes.dark.colors.secondary')).toBe(true);
    expect(findings.some(f => f.path === 'themes.high-contrast.colors.primary')).toBe(true);
  });
});
