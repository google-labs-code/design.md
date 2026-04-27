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
import { contrastCheck } from './contrast-ratio.js';
import { buildState } from './test-helpers.js';

describe('contrastCheck', () => {
  it('emits warning for low contrast pair', () => {
    const state = buildState({
      colors: { yellow: '#ffff00', white: '#ffffff' },
      components: {
        'button-bad': { backgroundColor: '{colors.yellow}', textColor: '{colors.white}' },
      },
    });
    const findings = contrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/contrast/);
  });

  it('returns empty for high contrast pair', () => {
    const state = buildState({
      colors: { black: '#000000', white: '#ffffff' },
      components: {
        'button-good': { backgroundColor: '{colors.black}', textColor: '{colors.white}' },
      },
    });
    const contrastWarnings = contrastCheck(state).filter(d => d.message.includes('contrast'));
    expect(contrastWarnings.length).toBe(0);
  });

  it('handles oklch colors without warning when contrast is high', () => {
    const state = buildState({
      colors: { black: 'oklch(0 0 0)', white: 'oklch(1 0 0)' },
      components: {
        'button-good': { backgroundColor: '{colors.black}', textColor: '{colors.white}' },
      },
    });
    const contrastWarnings = contrastCheck(state).filter(d => d.message.includes('contrast'));
    expect(contrastWarnings.length).toBe(0);
  });

  it('warns on low-contrast oklch pair', () => {
    const state = buildState({
      colors: { paleA: 'oklch(0.95 0 0)', paleB: 'oklch(0.92 0 0)' },
      components: {
        'button-bad': { backgroundColor: '{colors.paleA}', textColor: '{colors.paleB}' },
      },
    });
    const findings = contrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/contrast/);
  });

  it('warns when a theme override breaks contrast for an inherited component', () => {
    const state = buildState({
      // Light: black-on-white passes.
      colors: { primary: '#000000', 'on-primary': '#ffffff' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.on-primary}',
        },
      },
      themes: {
        // Dark theme overrides primary to a low-contrast pairing.
        dark: { colors: { primary: '#dddddd', 'on-primary': '#cccccc' } },
      },
    });

    const findings = contrastCheck(state);
    // Light theme is clean; dark theme fires.
    const lightFindings = findings.filter(f => !f.message.includes("theme 'dark'"));
    const darkFindings = findings.filter(f => f.message.includes("theme 'dark'"));
    expect(lightFindings.length).toBe(0);
    expect(darkFindings.length).toBe(1);
    expect(darkFindings[0]!.path).toBe('components.button-primary');
  });

  it('respects per-theme contrastTarget — high-contrast theme requires AAA-style ratios', () => {
    // 4.5:1 passes WCAG AA but fails AAA (7:1).
    const state = buildState({
      colors: { primary: '#767676', 'on-primary': '#ffffff' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.on-primary}',
        },
      },
      themes: {
        'high-contrast': {
          colors: { primary: '#767676', 'on-primary': '#ffffff' },
          contrastTarget: { body: 7, large: 4.5, ui: 4.5 },
        },
      },
    });

    const findings = contrastCheck(state);
    // Light theme passes AA. High-contrast fails AAA target.
    expect(findings.some(f => f.message.includes("theme 'high-contrast'"))).toBe(true);
    expect(findings.some(f => !f.message.includes("theme '") && f.path === 'components.button-primary')).toBe(false);
  });
});
