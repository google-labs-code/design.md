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
import { DtcgEmitterHandler } from './handler.js';
import type { DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedTypography } from '../model/spec.js';

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

describe('DtcgEmitterHandler', () => {
  const handler = new DtcgEmitterHandler();

  test('empty state produces valid DTCG file with $schema', () => {
    const result = handler.execute(emptyState());
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data['$schema']).toBe('https://www.designtokens.org/schemas/2025.10/format.json');
    // No groups created for empty maps
    expect(result.data['color']).toBeUndefined();
    expect(result.data['spacing']).toBeUndefined();
    expect(result.data['typography']).toBeUndefined();
  });

  test('name and description → top-level $description', () => {
    const result = handler.execute(emptyState({ name: 'Acme', description: 'Acme Design System' }));
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data['$description']).toBe('Acme Design System');
  });

  test('name without description → $description uses name', () => {
    const result = handler.execute(emptyState({ name: 'Acme' }));
    expect(result.success).toBe(true);
    if (!result.success) return;
    expect(result.data['$description']).toBe('Acme');
  });

  test('colors → DTCG color tokens with sRGB components in 0–1 range', () => {
    const state = emptyState({
      colors: new Map([
        ['primary', makeColor('#1A1C1E', 0x1A, 0x1C, 0x1E)],
        ['white', makeColor('#FFFFFF', 255, 255, 255)],
        ['black', makeColor('#000000', 0, 0, 0)],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const colorGroup = result.data['color'] as Record<string, unknown>;
    expect(colorGroup['$type']).toBe('color');

    const primary = colorGroup['primary'] as Record<string, unknown>;
    const primaryValue = primary['$value'] as Record<string, unknown>;
    expect(primaryValue['colorSpace']).toBe('srgb');
    expect(primaryValue['hex']).toBe('#1a1c1e');

    const components = primaryValue['components'] as number[];
    expect(components[0]).toBeCloseTo(0x1A / 255, 2);
    expect(components[1]).toBeCloseTo(0x1C / 255, 2);
    expect(components[2]).toBeCloseTo(0x1E / 255, 2);

    // Black = [0, 0, 0]
    const black = colorGroup['black'] as Record<string, unknown>;
    const blackComponents = (black['$value'] as Record<string, unknown>)['components'] as number[];
    expect(blackComponents).toEqual([0, 0, 0]);

    // White = [1, 1, 1]
    const white = colorGroup['white'] as Record<string, unknown>;
    const whiteComponents = (white['$value'] as Record<string, unknown>)['components'] as number[];
    expect(whiteComponents).toEqual([1, 1, 1]);
  });

  test('spacing → DTCG dimension tokens with { value, unit }', () => {
    const state = emptyState({
      spacing: new Map([
        ['sm', makeDim(8, 'px')],
        ['md', makeDim(1, 'rem')],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const spacingGroup = result.data['spacing'] as Record<string, unknown>;
    expect(spacingGroup['$type']).toBe('dimension');

    const sm = spacingGroup['sm'] as Record<string, unknown>;
    expect(sm['$value']).toEqual({ value: 8, unit: 'px' });

    const md = spacingGroup['md'] as Record<string, unknown>;
    expect(md['$value']).toEqual({ value: 1, unit: 'rem' });
  });

  test('rounded → DTCG dimension tokens under "rounded" group', () => {
    const state = emptyState({
      rounded: new Map([
        ['sm', makeDim(4, 'px')],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const roundedGroup = result.data['rounded'] as Record<string, unknown>;
    expect(roundedGroup['$type']).toBe('dimension');
    const sm = roundedGroup['sm'] as Record<string, unknown>;
    expect(sm['$value']).toEqual({ value: 4, unit: 'px' });
  });

  test('typography → DTCG typography composite tokens', () => {
    const heading: ResolvedTypography = {
      type: 'typography',
      fontFamily: 'Inter',
      fontSize: makeDim(24, 'px'),
      fontWeight: 700,
      lineHeight: makeDim(1.2, 'em'),
      letterSpacing: makeDim(0.5, 'px'),
    };

    const state = emptyState({
      typography: new Map([['heading', heading]]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const typoGroup = result.data['typography'] as Record<string, unknown>;
    const headingToken = typoGroup['heading'] as Record<string, unknown>;
    expect(headingToken['$type']).toBe('typography');

    const value = headingToken['$value'] as Record<string, unknown>;
    expect(value['fontFamily']).toBe('Inter');
    expect(value['fontSize']).toEqual({ value: 24, unit: 'px' });
    expect(value['fontWeight']).toBe(700);
    expect(value['lineHeight']).toBe(1.2);
    expect(value['letterSpacing']).toEqual({ value: 0.5, unit: 'px' });
  });

  test('typography with missing fields omits them from $value', () => {
    const minimal: ResolvedTypography = {
      type: 'typography',
      fontFamily: 'Roboto',
    };

    const state = emptyState({
      typography: new Map([['body', minimal]]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const value = ((result.data['typography'] as Record<string, unknown>)['body'] as Record<string, unknown>)['$value'] as Record<string, unknown>;
    expect(value['fontFamily']).toBe('Roboto');
    expect(value['fontSize']).toBeUndefined();
    expect(value['fontWeight']).toBeUndefined();
    expect(value['lineHeight']).toBeUndefined();
    expect(value['letterSpacing']).toBeUndefined();
  });
});
