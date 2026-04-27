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
import { generateRampSteps, srgbToOklch, oklchToSrgb, DEFAULT_RAMP_STEPS } from './color-ramp.js';

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.startsWith('#') ? hex.slice(1) : hex;
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

describe('OKLCH conversion', () => {
  it('round-trips a mid-value sRGB color within ~0.5% per channel', () => {
    const rgb = hexToRgb('#3b82f6');
    const oklch = srgbToOklch(rgb);
    const back = oklchToSrgb(oklch);
    expect(Math.abs(back.r - rgb.r)).toBeLessThan(0.005);
    expect(Math.abs(back.g - rgb.g)).toBeLessThan(0.005);
    expect(Math.abs(back.b - rgb.b)).toBeLessThan(0.005);
  });

  it('places pure white at L≈1 and pure black at L≈0', () => {
    expect(srgbToOklch({ r: 1, g: 1, b: 1 }).L).toBeCloseTo(1, 1);
    expect(srgbToOklch({ r: 0, g: 0, b: 0 }).L).toBeCloseTo(0, 1);
  });
});

describe('generateRampSteps', () => {
  it('produces all default steps with the anchor preserved verbatim at 500', () => {
    const steps = generateRampSteps('#1A1C1E');
    expect(steps.size).toBe(DEFAULT_RAMP_STEPS.length);
    expect(steps.get(500)).toBe('#1a1c1e');
  });

  it('lighter steps have higher OKLab lightness; darker steps have lower', () => {
    const steps = generateRampSteps('#3b82f6'); // mid-lightness blue
    const lightnessOf = (hex: string) => srgbToOklch(hexToRgb(hex)).L;

    const ladder = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => lightnessOf(steps.get(s)!));
    for (let i = 1; i < ladder.length; i++) {
      // Each next step should be at least as dark as the previous (within float noise).
      expect(ladder[i]).toBeLessThanOrEqual(ladder[i - 1]! + 1e-6);
    }
  });

  it('respects a custom step list', () => {
    const steps = generateRampSteps('#ff0000', [100, 500, 900]);
    expect(steps.size).toBe(3);
    expect(steps.has(100)).toBe(true);
    expect(steps.has(500)).toBe(true);
    expect(steps.has(900)).toBe(true);
  });

  it('throws on malformed anchor hex', () => {
    expect(() => generateRampSteps('not-a-hex')).toThrow();
  });
});
