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
import { ModelHandler } from '../model/handler.js';
import type { ComponentDef, DesignSystemState, ResolvedColor, ResolvedDimension, ResolvedTypography, ResolvedValue } from '../model/spec.js';
import type { ParsedDesignSystem } from '../parser/spec.js';

function emptyState(overrides?: Partial<DesignSystemState>): DesignSystemState {
  return {
    colors: new Map(),
    typography: new Map(),
    rounded: new Map(),
    spacing: new Map(),
    elevation: new Map(),
    motion: { duration: new Map(), easing: new Map() },
    components: new Map(),
    colorRamps: new Map(),
    colorPairs: new Map(),
    symbolTable: new Map(),
    colorIndex: new Map(),
    ...overrides,
  };
}

function makeColor(hex: string, r: number, g: number, b: number): ResolvedColor {
  return { type: 'color', hex, r, g, b, luminance: 0 };
}

function makeDim(value: number, unit: string): ResolvedDimension {
  return { type: 'dimension', value, unit };
}

function makeShadow(raw: string) {
  return { type: 'shadow' as const, raw };
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

  test('elevation → DTCG shadow group with raw shadow strings', () => {
    const state = emptyState({
      elevation: new Map([
        ['raised', makeShadow('0 4px 8px rgba(0,0,0,0.08)')],
        ['modal', makeShadow('0 24px 48px rgba(0,0,0,0.16)')],
      ]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const elevationGroup = result.data['elevation'] as Record<string, unknown>;
    expect(elevationGroup['$type']).toBe('shadow');

    const raised = elevationGroup['raised'] as Record<string, unknown>;
    expect(raised['$value']).toBe('0 4px 8px rgba(0,0,0,0.08)');
  });

  test('components → DTCG group with $extensions[design.md].states', () => {
    const primary = makeColor('#1a1c1e', 0x1A, 0x1C, 0x1E);
    const accent = makeColor('#ffffff', 255, 255, 255);

    const baseProps = new Map<string, ResolvedValue>([
      ['backgroundColor', primary],
      ['padding', makeDim(12, 'px')],
    ]);
    const hoverOverrides = new Map<string, ResolvedValue>([
      ['backgroundColor', accent],
    ]);
    const focusOverrides = new Map<string, ResolvedValue>([
      ['outline', '2px solid #ffffff'],
    ]);

    const states = new Map<string, Map<string, ResolvedValue>>([
      ['hover', hoverOverrides],
      ['focus-visible', focusOverrides],
    ]);
    const resolvedStates = new Map<string, Map<string, ResolvedValue>>();
    for (const [name, overrides] of states) {
      const merged = new Map<string, ResolvedValue>(baseProps);
      for (const [k, v] of overrides) merged.set(k, v);
      resolvedStates.set(name, merged);
    }

    const btn: ComponentDef = {
      properties: baseProps,
      interactive: true,
      states,
      resolvedStates,
      unresolvedRefs: [],
      referencedTokens: [],
    };

    const state = emptyState({
      components: new Map<string, ComponentDef>([['btn', btn]]),
    });

    const result = handler.execute(state);
    expect(result.success).toBe(true);
    if (!result.success) return;

    const componentGroup = result.data['component'] as Record<string, unknown>;
    expect(componentGroup).toBeDefined();
    const btnTok = componentGroup['btn'] as Record<string, unknown>;
    const bgToken = btnTok['backgroundColor'] as Record<string, unknown>;
    expect(bgToken['$type']).toBe('color');

    const ext = btnTok['$extensions'] as Record<string, unknown>;
    expect(ext).toBeDefined();
    const designMd = ext['design.md'] as Record<string, unknown>;
    expect(designMd['interactive']).toBe(true);
    const stateMap = designMd['states'] as Record<string, Record<string, unknown>>;
    expect(stateMap['hover']?.['backgroundColor']).toBe('#ffffff');
    expect(stateMap['focus-visible']?.['outline']).toBe('2px solid #ffffff');
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

  describe('ramps and pairs', () => {
    const model = new ModelHandler();
    function build(overrides: Partial<ParsedDesignSystem>): DesignSystemState {
      return model.execute({ sourceMap: new Map(), ...overrides }).designSystem;
    }

    test('ramps emit as nested DTCG groups with vendor extension and anchor alias', () => {
      const state = build({
        colors: {
          primary: { type: 'ramp', anchor: '#3b82f6', humanName: 'Sky' },
        },
      });
      const result = handler.execute(state);
      expect(result.success).toBe(true);
      if (!result.success) return;

      const colorGroup = result.data['color'] as Record<string, unknown>;
      const primary = colorGroup['primary'] as Record<string, unknown>;
      expect(primary['$type']).toBe('color');
      const extensions = primary['$extensions'] as Record<string, Record<string, unknown>>;
      expect(extensions['design.md']?.['type']).toBe('ramp');
      expect(extensions['design.md']?.['humanName']).toBe('Sky');
      expect(primary['500']).toBeDefined();
      expect(primary['50']).toBeDefined();

      const anchor = primary['anchor'] as Record<string, unknown>;
      expect(anchor['$value']).toBe('{color.primary.500}');
    });

    test('standalone pairs emit container + onContainer with role extensions', () => {
      const state = build({
        colors: {
          'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
        },
      });
      const result = handler.execute(state);
      expect(result.success).toBe(true);
      if (!result.success) return;

      const colorGroup = result.data['color'] as Record<string, unknown>;
      const pairGroup = colorGroup['surface-info'] as Record<string, unknown>;
      const ext = pairGroup['$extensions'] as Record<string, Record<string, unknown>>;
      expect(ext['design.md']?.['type']).toBe('pair');

      const container = pairGroup['container'] as Record<string, unknown>;
      const containerExt = container['$extensions'] as Record<string, Record<string, unknown>>;
      expect(containerExt['design.md']?.['role']).toBe('container');

      const onContainer = pairGroup['onContainer'] as Record<string, unknown>;
      const onContainerExt = onContainer['$extensions'] as Record<string, Record<string, unknown>>;
      expect(onContainerExt['design.md']?.['role']).toBe('on-container');
    });
  });

  describe('motion emission', () => {
    const handler = new DtcgEmitterHandler();
    const buildFromYaml = (parsed: ParsedDesignSystem) =>
      new ModelHandler().execute(parsed).designSystem;

    test('emits durations as DTCG `duration` tokens and easings as `cubicBezier`', () => {
      const state = buildFromYaml({
        sourceMap: new Map(),
        motion: {
          duration: { fast: '150ms', slow: '0.4s' },
          easing: {
            standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
            linear: 'linear',
          },
          reducedMotion: { duration: 'fast', easing: 'standard' },
        },
      });
      const result = handler.execute(state);
      if (!result.success) throw new Error('expected success');
      const motion = result.data['motion'] as Record<string, unknown>;
      expect(motion).toBeDefined();
      const durGroup = motion['duration'] as Record<string, unknown>;
      expect(durGroup['$type']).toBe('duration');
      const fast = durGroup['fast'] as Record<string, unknown>;
      expect(fast['$value']).toEqual({ value: 150, unit: 'ms' });
      const slow = durGroup['slow'] as Record<string, unknown>;
      expect(slow['$value']).toEqual({ value: 0.4, unit: 's' });

      const easeGroup = motion['easing'] as Record<string, unknown>;
      expect(easeGroup['$type']).toBe('cubicBezier');
      const std = easeGroup['standard'] as Record<string, unknown>;
      expect(std['$value']).toEqual([0.4, 0, 0.2, 1]);
      const linear = easeGroup['linear'] as Record<string, unknown>;
      expect(linear['$value']).toBe('linear');

      const ext = motion['$extensions'] as Record<string, Record<string, unknown>>;
      const reduced = ext['design.md']?.['reducedMotion'] as Record<string, string>;
      expect(reduced['duration']).toBe('{motion.duration.fast}');
      expect(reduced['easing']).toBe('{motion.easing.standard}');
    });
  });

  describe('iconography emission', () => {
    const handler = new DtcgEmitterHandler();
    const buildFromYaml = (parsed: ParsedDesignSystem) =>
      new ModelHandler().execute(parsed).designSystem;

    test('emits sizes as a dimension group + iconography under design.md extension', () => {
      const state = buildFromYaml({
        sourceMap: new Map(),
        iconography: {
          library: { name: 'lucide', version: '0.451.0', style: 'outlined' },
          strokeWeight: '1.5px',
          sizes: { sm: '16px', md: '20px' },
          defaultSize: 'md',
          colorBinding: 'currentColor',
        },
      });
      const result = handler.execute(state);
      if (!result.success) throw new Error('expected success');
      const ico = result.data['iconography'] as Record<string, unknown>;
      const sizes = ico['sizes'] as Record<string, unknown>;
      expect(sizes['$type']).toBe('dimension');
      expect((sizes['md'] as Record<string, unknown>)['$value']).toEqual({ value: 20, unit: 'px' });
      const ext = ico['$extensions'] as Record<string, Record<string, unknown>>;
      const meta = ext['design.md']?.['iconography'] as Record<string, unknown>;
      expect((meta['library'] as Record<string, unknown>)['name']).toBe('lucide');
      expect(meta['defaultSize']).toBe('md');
      expect(meta['colorBinding']).toBe('currentColor');
    });
  });
});
