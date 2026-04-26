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
import { ModelHandler } from './handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';

const handler = new ModelHandler();

function makeParsed(overrides: Partial<ParsedDesignSystem> = {}): ParsedDesignSystem {
  return { sourceMap: new Map(), ...overrides };
}

describe('ModelHandler — themes', () => {
  it('always emits an implicit `light` base view that mirrors the root tokens', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E', surface: '#FFFFFF' },
    }));

    expect(result.designSystem.activeTheme).toBe('light');
    const light = result.designSystem.themes.get('light')!;
    expect(light).toBeDefined();
    expect(light.colors.get('primary')?.hex).toBe('#1a1c1e');
    expect(light.colors.get('surface')?.hex).toBe('#ffffff');
    // Default contrast target is WCAG AA.
    expect(light.contrastTarget).toEqual({ body: 4.5, large: 3, ui: 3 });
  });

  it('builds a dark theme whose color overrides replace the base values', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E', surface: '#FFFFFF' },
      themes: {
        dark: {
          colors: { primary: '#A3C9FF', surface: '#1A1C1E' },
        },
      },
    }));

    const dark = result.designSystem.themes.get('dark')!;
    expect(dark).toBeDefined();
    expect(dark.colors.get('primary')?.hex).toBe('#a3c9ff');
    expect(dark.colors.get('surface')?.hex).toBe('#1a1c1e');
    // Top-level state still reflects the active (light) theme.
    expect(result.designSystem.colors.get('primary')?.hex).toBe('#1a1c1e');
  });

  it('inherits non-overridden colors from the parent', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E', secondary: '#6C7278', neutral: '#F7F5F2' },
      themes: {
        dark: { colors: { primary: '#A3C9FF' } },
      },
    }));

    const dark = result.designSystem.themes.get('dark')!;
    expect(dark.colors.get('primary')?.hex).toBe('#a3c9ff');
    // Inherited from base.
    expect(dark.colors.get('secondary')?.hex).toBe('#6c7278');
    expect(dark.colors.get('neutral')?.hex).toBe('#f7f5f2');
  });

  it('supports per-theme contrast targets', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      themes: {
        'high-contrast': {
          colors: { primary: '#000000' },
          contrastTarget: { body: 7, large: 4.5, ui: 4.5 },
        },
      },
    }));

    const hc = result.designSystem.themes.get('high-contrast')!;
    expect(hc.contrastTarget).toEqual({ body: 7, large: 4.5, ui: 4.5 });
  });

  it('falls back to parent contrastTarget for unspecified fields', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      themes: {
        dark: { colors: { primary: '#A3C9FF' }, contrastTarget: { body: 7 } },
      },
    }));

    const dark = result.designSystem.themes.get('dark')!;
    expect(dark.contrastTarget.body).toBe(7);
    expect(dark.contrastTarget.large).toBe(3);
    expect(dark.contrastTarget.ui).toBe(3);
  });

  it('resolves inheritsFrom chains (compact-dark inherits from dark)', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      spacing: { sm: '8px', md: '16px' },
      themes: {
        dark: { colors: { primary: '#A3C9FF' } },
        'compact-dark': {
          inheritsFrom: 'dark',
          spacing: { sm: '4px', md: '12px' },
        },
      },
    }));

    const compactDark = result.designSystem.themes.get('compact-dark')!;
    // Inherits primary from dark.
    expect(compactDark.colors.get('primary')?.hex).toBe('#a3c9ff');
    // Overrides spacing.
    expect(compactDark.spacing.get('sm')?.value).toBe(4);
    expect(compactDark.spacing.get('md')?.value).toBe(12);
  });

  it('warns and falls back to light when inheritsFrom names an undeclared theme', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      themes: {
        weird: { inheritsFrom: 'nonexistent', colors: { primary: '#FF00FF' } },
      },
    }));

    expect(result.findings.some(f =>
      f.severity === 'warning' && f.path === 'themes.weird.inheritsFrom'
    )).toBe(true);
    const weird = result.designSystem.themes.get('weird')!;
    expect(weird.colors.get('primary')?.hex).toBe('#ff00ff');
  });

  it('breaks cyclic inheritsFrom chains gracefully', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      themes: {
        a: { inheritsFrom: 'b', colors: { primary: '#FF0000' } },
        b: { inheritsFrom: 'a', colors: { primary: '#00FF00' } },
      },
    }));

    expect(result.findings.some(f => f.message.includes('cyclic'))).toBe(true);
    expect(result.designSystem.themes.has('a')).toBe(true);
    expect(result.designSystem.themes.has('b')).toBe(true);
  });

  it('expands ramps declared per theme and replaces the parent ramp cleanly', () => {
    const result = handler.execute(makeParsed({
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
    }));

    const light = result.designSystem.themes.get('light')!;
    const dark = result.designSystem.themes.get('dark')!;
    // Both views have a primary ramp at step 500 (= the anchor) but with
    // different hex values.
    expect(light.colors.get('primary')?.hex).toBe('#1a1c1e');
    expect(dark.colors.get('primary')?.hex).toBe('#a3c9ff');
    expect(light.colors.get('primary.500')?.hex).toBe('#1a1c1e');
    expect(dark.colors.get('primary.500')?.hex).toBe('#a3c9ff');
    // The dark ramp definition replaces the light one in the dark view.
    expect(dark.colorRamps.get('primary')?.anchor.hex).toBe('#a3c9ff');
  });

  it('expands inline-pair derivations declared per theme', () => {
    const result = handler.execute(makeParsed({
      colors: { surface: '#FFFFFF' },
      themes: {
        dark: {
          colors: {
            'surface-info': {
              type: 'pair',
              container: '#1B3A5F',
              onContainer: '#A3C9FF',
            },
          },
        },
      },
    }));

    const dark = result.designSystem.themes.get('dark')!;
    expect(dark.colors.get('surface-info')?.hex).toBe('#1b3a5f');
    expect(dark.colors.get('on-surface-info')?.hex).toBe('#a3c9ff');
    expect(dark.colorPairs.get('surface-info')).toBeDefined();
  });

  it('overrides typography properties as a property merge, not a replacement', () => {
    const result = handler.execute(makeParsed({
      typography: {
        'body-md': { fontFamily: 'Inter', fontSize: '16px', fontWeight: 400 },
      },
      themes: {
        comfortable: {
          typography: { 'body-md': { fontSize: '17px' } },
        },
      },
    }));

    const comfortable = result.designSystem.themes.get('comfortable')!;
    const bodyMd = comfortable.typography.get('body-md')!;
    expect(bodyMd.fontSize?.value).toBe(17);
    // Inherited from base.
    expect(bodyMd.fontFamily).toBe('Inter');
    expect(bodyMd.fontWeight).toBe(400);
  });

  it('emits an error finding for invalid hex values in a theme override', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      themes: {
        dark: { colors: { primary: 'not-a-color' } },
      },
    }));

    const errors = result.findings.filter(f =>
      f.severity === 'error' && f.path === 'themes.dark.colors.primary'
    );
    expect(errors.length).toBe(1);
  });

  it('lets a `themes.light` block layer overrides on the implicit base', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: '#1A1C1E' },
      themes: {
        light: { colors: { primary: '#647D66' } },
      },
    }));

    const light = result.designSystem.themes.get('light')!;
    expect(light.colors.get('primary')?.hex).toBe('#647d66');
  });
});
