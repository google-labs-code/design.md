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

import { describe, test, expect } from 'bun:test';
import { CssVarsEmitterHandler } from './handler.js';
import { serializeCssVars } from './serialize.js';
import type { DesignSystemState, ResolvedColor, ResolvedDimension } from '../model/spec.js';

function emptyState(overrides?: Partial<DesignSystemState>): DesignSystemState {
  return {
    colors: new Map(),
    typography: new Map(),
    rounded: new Map(),
    spacing: new Map(),
    components: new Map(),
    symbolTable: new Map(),
    ...overrides,
  };
}

function makeColor(hex: string, r: number, g: number, b: number): ResolvedColor {
  return { type: 'color', hex, r, g, b, luminance: 0 };
}

function makeDim(value: number, unit: string): ResolvedDimension {
  return { type: 'dimension', value, unit };
}

describe('CssVarsEmitterHandler', () => {
  const handler = new CssVarsEmitterHandler();

  test('empty state produces valid empty :root block', () => {
    const result = handler.execute(emptyState());
    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(result.data.declarations).toEqual([]);
    expect(serializeCssVars(result.data.declarations)).toBe(':root {\n}\n');
  });

  test('colors emit --color-* declarations with lowercase hex values', () => {
    const state = emptyState({
      colors: new Map([
        ['primary', makeColor('#1A1C1E', 0x1A, 0x1C, 0x1E)],
        ['white', makeColor('#FFFFFF', 255, 255, 255)],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(serializeCssVars(result.data.declarations)).toBe(
      ':root {\n'
      + '  --color-primary: #1a1c1e;\n'
      + '  --color-white: #ffffff;\n'
      + '}\n',
    );
  });

  test('spacing and rounded dimensions preserve numeric values and units', () => {
    const state = emptyState({
      spacing: new Map([
        ['sm', makeDim(8, 'px')],
        ['md', makeDim(1, 'rem')],
      ]),
      rounded: new Map([
        ['card', makeDim(12, 'px')],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(serializeCssVars(result.data.declarations)).toBe(
      ':root {\n'
      + '  --spacing-sm: 8px;\n'
      + '  --spacing-md: 1rem;\n'
      + '  --rounded-card: 12px;\n'
      + '}\n',
    );
  });

  test('nested token names collapse dots to hyphens for valid CSS property names', () => {
    const state = emptyState({
      colors: new Map([
        ['background.light', makeColor('#FFFFFF', 255, 255, 255)],
      ]),
      spacing: new Map([
        ['gap.lg', makeDim(24, 'px')],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(serializeCssVars(result.data.declarations)).toBe(
      ':root {\n'
      + '  --color-background-light: #ffffff;\n'
      + '  --spacing-gap-lg: 24px;\n'
      + '}\n',
    );
  });

  test('prefix option adds a custom prefix to emitted property names', () => {
    const state = emptyState({
      colors: new Map([
        ['primary', makeColor('#1A1C1E', 0x1A, 0x1C, 0x1E)],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    expect(serializeCssVars(result.data.declarations, { prefix: 'ds' })).toBe(
      ':root {\n'
      + '  --ds-color-primary: #1a1c1e;\n'
      + '}\n',
    );
  });
});
