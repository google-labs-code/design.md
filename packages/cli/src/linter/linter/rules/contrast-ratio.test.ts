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

  it('does not judge a translucent backgroundColor against the opaque text color', () => {
    // #195: a 10% tint of the text color was compared as if it were opaque
    // and reported 1.00:1. What shows through depends on the surface beneath.
    const state = buildState({
      colors: { warn: '#f2b33d', 'warn-tint': '#f2b33d1a' },
      components: {
        alert: { backgroundColor: '{colors.warn-tint}', textColor: '{colors.warn}' },
      },
    });
    const findings = contrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.severity).toBe('info');
    expect(findings[0]!.path).toBe('components.alert');
    expect(findings[0]!.message).toMatch(/translucent/);
    expect(findings[0]!.message).not.toMatch(/below WCAG AA/);
  });

  it('still checks a backgroundColor whose alpha is fully opaque', () => {
    const state = buildState({
      colors: { yellow: '#ffff00ff', white: '#ffffff' },
      components: {
        'button-bad': { backgroundColor: '{colors.yellow}', textColor: '{colors.white}' },
      },
    });
    const findings = contrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.severity).toBeUndefined();
    expect(findings[0]!.message).toMatch(/below WCAG AA/);
  });
});
