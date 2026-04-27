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
import { parseColorString, isParseableColor } from './color.js';

describe('parseColorString — hex', () => {
  it('parses #RRGGBB', () => {
    const c = parseColorString('#647D66')!;
    expect(c.format).toBe('hex');
    expect(c.hex).toBe('#647d66');
    expect(c.r).toBe(0x64);
    expect(c.g).toBe(0x7D);
    expect(c.b).toBe(0x66);
    expect(c.a).toBeUndefined();
  });

  it('expands #RGB shorthand', () => {
    const c = parseColorString('#abc')!;
    expect(c.hex).toBe('#aabbcc');
  });

  it('extracts alpha from #RRGGBBAA', () => {
    const c = parseColorString('#FFFFFFA6')!;
    expect(c.hex).toBe('#ffffffa6');
    expect(c.a).toBeCloseTo(0xa6 / 255, 5);
  });
});

describe('parseColorString — rgb()/rgba()', () => {
  it('parses modern syntax with slash alpha', () => {
    const c = parseColorString('rgb(100 200 50 / 0.5)')!;
    expect(c.format).toBe('rgb');
    expect(c.r).toBe(100);
    expect(c.g).toBe(200);
    expect(c.b).toBe(50);
    expect(c.a).toBeCloseTo(0.5, 5);
  });

  it('parses legacy comma syntax', () => {
    const c = parseColorString('rgba(255, 0, 0, 1)')!;
    expect(c.r).toBe(255);
    expect(c.g).toBe(0);
    expect(c.b).toBe(0);
    expect(c.a).toBe(1);
  });

  it('parses percentage channels', () => {
    const c = parseColorString('rgb(100% 0% 50%)')!;
    expect(c.r).toBe(255);
    expect(c.g).toBe(0);
    expect(c.b).toBe(128);
  });
});

describe('parseColorString — hsl()/hsla()', () => {
  it('parses modern syntax', () => {
    const c = parseColorString('hsl(0 100% 50%)')!;
    expect(c.format).toBe('hsl');
    expect(c.r).toBe(255);
    expect(c.g).toBe(0);
    expect(c.b).toBe(0);
  });

  it('parses comma syntax with alpha', () => {
    const c = parseColorString('hsla(120, 100%, 50%, 0.5)')!;
    expect(c.r).toBe(0);
    expect(c.g).toBe(255);
    expect(c.b).toBe(0);
    expect(c.a).toBeCloseTo(0.5, 5);
  });
});

describe('parseColorString — oklch()', () => {
  it('parses Impeccable-style oklch with percentage L', () => {
    const c = parseColorString('oklch(70% 0.15 200)')!;
    expect(c.format).toBe('oklch');
    expect(c.raw).toBe('oklch(70% 0.15 200)');
    // Just sanity-check sRGB roundtrip stays in [0,255]
    expect(c.r).toBeGreaterThanOrEqual(0);
    expect(c.r).toBeLessThanOrEqual(255);
  });

  it('round-trips white as oklch(1 0 0)', () => {
    const c = parseColorString('oklch(1 0 0)')!;
    expect(c.r).toBe(255);
    expect(c.g).toBe(255);
    expect(c.b).toBe(255);
  });

  it('round-trips black as oklch(0 0 0)', () => {
    const c = parseColorString('oklch(0 0 0)')!;
    expect(c.r).toBe(0);
    expect(c.g).toBe(0);
    expect(c.b).toBe(0);
  });

  it('accepts deg suffix on hue', () => {
    const c = parseColorString('oklch(50% 0.1 180deg / 0.8)')!;
    expect(c.a).toBeCloseTo(0.8, 5);
  });
});

describe('parseColorString — oklab()', () => {
  it('white at L=1', () => {
    const c = parseColorString('oklab(1 0 0)')!;
    expect(c.format).toBe('oklab');
    expect(c.r).toBe(255);
    expect(c.g).toBe(255);
    expect(c.b).toBe(255);
  });
});

describe('parseColorString — lab()', () => {
  it('white at L=100', () => {
    const c = parseColorString('lab(100 0 0)')!;
    expect(c.format).toBe('lab');
    // Allow ±2 rounding from D50→D65 chromatic adaptation
    expect(c.r).toBeGreaterThanOrEqual(253);
    expect(c.g).toBeGreaterThanOrEqual(253);
    expect(c.b).toBeGreaterThanOrEqual(253);
  });

  it('black at L=0', () => {
    const c = parseColorString('lab(0 0 0)')!;
    expect(c.r).toBe(0);
    expect(c.g).toBe(0);
    expect(c.b).toBe(0);
  });
});

describe('parseColorString — color(display-p3 …)', () => {
  it('white in p3 maps to sRGB white', () => {
    const c = parseColorString('color(display-p3 1 1 1)')!;
    expect(c.format).toBe('p3');
    expect(c.r).toBe(255);
    expect(c.g).toBe(255);
    expect(c.b).toBe(255);
  });

  it('saturated red in p3 clamps into sRGB gamut', () => {
    const c = parseColorString('color(display-p3 1 0 0)')!;
    expect(c.r).toBe(255);
    expect(c.g).toBe(0);
    expect(c.b).toBe(0);
  });

  it('rejects unsupported color spaces', () => {
    expect(parseColorString('color(rec2020 1 0 0)')).toBeNull();
  });
});

describe('parseColorString — invalid input', () => {
  it.each(['', 'not-a-color', '#xyz', 'oklch()', 'rgb(1 2)', 'lab(50)'])(
    'rejects %s',
    (raw: string) => {
      expect(parseColorString(raw)).toBeNull();
    }
  );
});

describe('isParseableColor', () => {
  const accepted = [
    '#fff',
    '#FFFFFFa6',
    'rgb(0 0 0)',
    'rgba(0,0,0,1)',
    'hsl(0 100% 50%)',
    'oklch(70% 0.15 200)',
    'oklab(0.5 0 0)',
    'lab(50 0 0)',
    'color(display-p3 0.5 0.5 0.5)',
  ];
  it.each(accepted)('accepts %s', (raw: string) => {
    expect(isParseableColor(raw)).toBe(true);
  });
});

describe('luminance is consistent across formats', () => {
  it('white via hex, oklch, oklab, p3 all yield ~1.0', () => {
    const formats = [
      '#ffffff',
      'oklch(1 0 0)',
      'oklab(1 0 0)',
      'color(display-p3 1 1 1)',
    ];
    for (const raw of formats) {
      const c = parseColorString(raw)!;
      expect(c.luminance).toBeCloseTo(1, 1);
    }
  });

  it('black via hex, oklch, oklab all yield ~0', () => {
    const formats = [
      '#000000',
      'oklch(0 0 0)',
      'oklab(0 0 0)',
      'color(display-p3 0 0 0)',
    ];
    for (const raw of formats) {
      const c = parseColorString(raw)!;
      expect(c.luminance).toBeCloseTo(0, 2);
    }
  });
});
