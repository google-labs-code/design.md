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
import { serializeToCss } from './serialize.js';
import type { TailwindV4ThemeData } from './spec.js';

describe('serializeToCss', () => {
  it('emits an empty @theme block for empty data', () => {
    const out = serializeToCss({});
    expect(out).toBe('@theme {\n}\n');
  });

  it('emits a single color declaration', () => {
    const data: TailwindV4ThemeData = { colors: { primary: '#647d66' } };
    expect(serializeToCss(data)).toBe('@theme {\n  --color-primary: #647d66;\n}\n');
  });

  it('uses the correct CSS-variable prefix per category', () => {
    const data: TailwindV4ThemeData = {
      colors: { primary: '#000000' },
      fontFamily: { 'headline-lg': '"Roboto"' },
      fontSize: { 'headline-lg': '42px' },
      lineHeight: { 'headline-lg': '50px' },
      letterSpacing: { 'headline-lg': '1.2px' },
      fontWeight: { 'headline-lg': '500' },
      borderRadius: { regular: '4px' },
      spacing: { 'gutter-s': '8px' },
    };
    const out = serializeToCss(data);
    expect(out).toContain('--color-primary: #000000;');
    expect(out).toContain('--font-headline-lg: "Roboto";');
    expect(out).toContain('--text-headline-lg: 42px;');
    expect(out).toContain('--leading-headline-lg: 50px;');
    expect(out).toContain('--tracking-headline-lg: 1.2px;');
    expect(out).toContain('--font-weight-headline-lg: 500;');
    expect(out).toContain('--radius-regular: 4px;');
    expect(out).toContain('--spacing-gutter-s: 8px;');
  });

  it('emits categories in fixed order: colors → fontFamily → fontSize → lineHeight → letterSpacing → fontWeight → borderRadius → spacing', () => {
    const data: TailwindV4ThemeData = {
      spacing: { s: '8px' },
      colors: { primary: '#000000' },
      borderRadius: { r: '4px' },
      fontFamily: { f: '"X"' },
    };
    const out = serializeToCss(data);
    const colorIdx = out.indexOf('--color-primary');
    const fontFamilyIdx = out.indexOf('--font-f');
    const radiusIdx = out.indexOf('--radius-r');
    const spacingIdx = out.indexOf('--spacing-s');
    expect(colorIdx).toBeLessThan(fontFamilyIdx);
    expect(fontFamilyIdx).toBeLessThan(radiusIdx);
    expect(radiusIdx).toBeLessThan(spacingIdx);
  });

  it('skips empty categories (no blank lines)', () => {
    const data: TailwindV4ThemeData = {
      colors: { primary: '#000000' },
      fontFamily: {},
      spacing: { s: '8px' },
    };
    const out = serializeToCss(data);
    // no blank body lines
    expect(out).not.toMatch(/\n\s*\n/);
    expect(out).toBe('@theme {\n  --color-primary: #000000;\n  --spacing-s: 8px;\n}\n');
  });

  it('preserves insertion order of keys within a category', () => {
    const colors: Record<string, string> = {};
    colors['zulu'] = '#000000';
    colors['alpha'] = '#ffffff';
    const out = serializeToCss({ colors });
    expect(out.indexOf('--color-zulu')).toBeLessThan(out.indexOf('--color-alpha'));
  });

  it('emits font-family values verbatim (already quoted)', () => {
    const data: TailwindV4ThemeData = {
      fontFamily: { body: '"Google Sans Display"' },
    };
    const out = serializeToCss(data);
    expect(out).toContain('--font-body: "Google Sans Display";');
  });
});
