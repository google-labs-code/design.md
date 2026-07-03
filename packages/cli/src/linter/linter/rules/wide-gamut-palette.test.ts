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
import { wideGamutPaletteCheck } from './wide-gamut-palette.js';
import { buildState } from './test-helpers.js';

describe('wideGamutPaletteCheck', () => {
  it('notes sRGB-only palettes', () => {
    const state = buildState({
      colors: { primary: '#336699', secondary: '#ffcc00' },
    });
    const findings = wideGamutPaletteCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/wide-gamut/);
  });

  it('accepts oklch palette without sRGB-only note', () => {
    const state = buildState({
      colors: { primary: 'oklch(0.55 0.15 250)', secondary: '#ffcc00' },
    });
    const findings = wideGamutPaletteCheck(state).filter(f => f.message.includes('sRGB-limited'));
    expect(findings.length).toBe(0);
  });

  it('parses color(display-p3 ...) tokens', () => {
    const state = buildState({
      colors: { accent: 'color(display-p3 1 0.2 0.4)' },
    });
    const findings = wideGamutPaletteCheck(state).filter(f => f.path === 'colors.accent');
    expect(findings.length).toBe(0);
  });
});
