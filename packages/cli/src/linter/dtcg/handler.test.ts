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
import { lint } from '../lint.js';
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

  test('typography without letterSpacing emits a 0px default', () => {
    const body: ResolvedTypography = {
      type: 'typography',
      fontFamily: 'Manrope, Arial, sans-serif',
      fontSize: makeDim(16, 'px'),
      fontWeight: 400,
      lineHeight: makeDim(1.6, ''),
    };

    const state = emptyState({
      typography: new Map([['body-md', body]]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const value = ((result.data['typography'] as Record<string, unknown>)['body-md'] as Record<string, unknown>)['$value'] as Record<string, unknown>;
    expect(value['letterSpacing']).toEqual({ value: 0, unit: 'px' });
  });

  test('typography with missing fields omits them from $value except default letterSpacing', () => {
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
    expect(value['letterSpacing']).toEqual({ value: 0, unit: 'px' });
  });

  test('exported typography includes all DTCG required properties', () => {
    const body: ResolvedTypography = {
      type: 'typography',
      fontFamily: 'Manrope',
      fontSize: makeDim(16, 'px'),
      fontWeight: 400,
      lineHeight: makeDim(1.6, ''),
    };

    const state = emptyState({
      typography: new Map([['body-md', body]]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const value = ((result.data['typography'] as Record<string, unknown>)['body-md'] as Record<string, unknown>)['$value'] as Record<string, unknown>;
    expect(Object.keys(value).sort()).toEqual(
      ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight'].sort(),
    );
    expect(value['fontFamily']).toBe('Manrope');
    expect(value['fontSize']).toEqual({ value: 16, unit: 'px' });
    expect(value['fontWeight']).toBe(400);
    expect(value['letterSpacing']).toEqual({ value: 0, unit: 'px' });
    expect(value['lineHeight']).toBe(1.6);
  });

  test('YAML numeric lineHeight round-trips through lint into required DTCG typography props', () => {
    const report = lint(`---
typography:
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
---
# Spec
`);
    const result = handler.execute(report.designSystem);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const value = ((result.data['typography'] as Record<string, unknown>)['body-md'] as Record<string, unknown>)['$value'] as Record<string, unknown>;
    expect(Object.keys(value).sort()).toEqual(
      ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight'].sort(),
    );
    expect(value['lineHeight']).toBe(1.6);
    expect(value['letterSpacing']).toEqual({ value: 0, unit: 'px' });
  });
  describe('lineHeight conversion to a unitless multiplier', () => {
    function typoValue(
      lineHeight: ResolvedDimension,
      fontSize?: ResolvedDimension,
    ): { value: Record<string, unknown>; warnings: unknown[] | undefined } {
      const typo: ResolvedTypography = {
        type: 'typography',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight,
        ...(fontSize ? { fontSize } : {}),
      };
      const result = handler.execute(emptyState({ typography: new Map([['body', typo]]) }));
      if (!result.success) throw new Error('expected success');
      const value = ((result.data['typography'] as Record<string, unknown>)['body'] as Record<string, unknown>)['$value'] as Record<string, unknown>;
      return { value, warnings: result.warnings };
    }

    test('px lineHeight with px fontSize: 22px @ 16px → 1.375', () => {
      const { value, warnings } = typoValue(makeDim(22, 'px'), makeDim(16, 'px'));
      expect(value['lineHeight']).toBe(1.375);
      expect(warnings).toBeUndefined();
    });

    test('rem lineHeight with rem fontSize: 1.5rem @ 1rem → 1.5', () => {
      const { value } = typoValue(makeDim(1.5, 'rem'), makeDim(1, 'rem'));
      expect(value['lineHeight']).toBe(1.5);
    });

    test('px lineHeight with rem fontSize assumes a 16px root: 24px @ 1rem → 1.5', () => {
      const { value } = typoValue(makeDim(24, 'px'), makeDim(1, 'rem'));
      expect(value['lineHeight']).toBe(1.5);
    });

    test('rem lineHeight with px fontSize assumes a 16px root: 1.5rem @ 12px → 2', () => {
      const { value } = typoValue(makeDim(1.5, 'rem'), makeDim(12, 'px'));
      expect(value['lineHeight']).toBe(2);
    });

    test('rounds to 3 decimal places: 20px @ 14px → 1.429', () => {
      const { value } = typoValue(makeDim(20, 'px'), makeDim(14, 'px'));
      expect(value['lineHeight']).toBe(1.429);
    });

    test('em lineHeight passes through as a multiplier, regardless of fontSize unit', () => {
      expect(typoValue(makeDim(1.4, 'em'), makeDim(16, 'px')).value['lineHeight']).toBe(1.4);
      expect(typoValue(makeDim(1.4, 'em')).value['lineHeight']).toBe(1.4);
    });

    test('unitless lineHeight passes through even without a fontSize', () => {
      const { value, warnings } = typoValue(makeDim(1.6, ''));
      expect(value['lineHeight']).toBe(1.6);
      expect(warnings).toBeUndefined();
    });

    test('px lineHeight without a fontSize is omitted with a warning', () => {
      const { value, warnings } = typoValue(makeDim(22, 'px'));
      expect(value['lineHeight']).toBeUndefined();
      expect(warnings).toEqual([
        expect.objectContaining({ code: 'LINE_HEIGHT_NOT_CONVERTIBLE', path: 'typography.body.lineHeight' }),
      ]);
    });

    test('px lineHeight with an em fontSize is omitted with a warning', () => {
      const { value, warnings } = typoValue(makeDim(22, 'px'), makeDim(1.2, 'em'));
      expect(value['lineHeight']).toBeUndefined();
      expect(warnings).toHaveLength(1);
      expect((warnings as Array<{ message: string }>)[0]!.message).toContain("'22px'");
    });

    test('lint → export: YAML `lineHeight: 22px` with `fontSize: 16px` exports 1.375', () => {
      const report = lint(`---
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
---
# Spec
`);
      const result = handler.execute(report.designSystem);
      if (!result.success) throw new Error('expected success');
      const value = ((result.data['typography'] as Record<string, unknown>)['body-md'] as Record<string, unknown>)['$value'] as Record<string, unknown>;
      expect(value['lineHeight']).toBe(1.375);
    });
  });

  test('each typography token gets its own default letterSpacing object', () => {
    const typo = (): ResolvedTypography => ({
      type: 'typography',
      fontFamily: 'Inter',
      fontSize: makeDim(16, 'px'),
      fontWeight: 400,
      lineHeight: makeDim(1.5, ''),
    });
    const result = handler.execute(emptyState({
      typography: new Map([['a', typo()], ['b', typo()]]),
    }));
    if (!result.success) throw new Error('expected success');
    const group = result.data['typography'] as Record<string, { $value: Record<string, unknown> }>;
    const a = group['a']!.$value['letterSpacing'] as { value: number; unit: string };
    const b = group['b']!.$value['letterSpacing'] as { value: number; unit: string };
    expect(a).toEqual({ value: 0, unit: 'px' });
    expect(b).toEqual({ value: 0, unit: 'px' });
    expect(a).not.toBe(b);
    a.value = 99;
    expect(b.value).toBe(0);
    // A later export is unaffected by mutating an earlier result.
    const again = handler.execute(emptyState({ typography: new Map([['c', typo()]]) }));
    if (!again.success) throw new Error('expected success');
    const c = (again.data['typography'] as Record<string, { $value: Record<string, unknown> }>)['c']!.$value['letterSpacing'];
    expect(c).toEqual({ value: 0, unit: 'px' });
  });
});
