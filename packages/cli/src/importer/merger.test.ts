// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { mergeStates } from './merger.js';
import type { ResolvedColor, ResolvedDimension } from '../linter/model/spec.js';
import type { IconsData } from './spec.js';

const color = (hex: string): ResolvedColor => ({
  type: 'color',
  hex,
  r: 0,
  g: 0,
  b: 0,
  luminance: 0,
});

const dim = (value: number, unit = 'px'): ResolvedDimension => ({
  type: 'dimension',
  value,
  unit,
});

describe('mergeStates', () => {
  it('later sources override earlier ones', () => {
    const merged = mergeStates([
      { colors: new Map([['p', color('#000000')]]) },
      { colors: new Map([['p', color('#ffffff')]]) },
    ]);
    expect(merged.colors.get('p')?.hex).toBe('#ffffff');
  });

  it('missing sections become empty maps', () => {
    const merged = mergeStates([{ colors: new Map([['p', color('#000')]]) }]);
    expect(merged.typography).toBeDefined();
    expect(merged.spacing).toBeDefined();
    expect(merged.rounded).toBeDefined();
    expect(merged.components).toBeDefined();
    expect(merged.typography.size).toBe(0);
    expect(merged.spacing.size).toBe(0);
  });

  it('builds a flat symbolTable', () => {
    const merged = mergeStates([
      { colors: new Map([['p', color('#111')]]) },
      { spacing: new Map([['md', dim(16)]]) },
    ]);
    expect(merged.symbolTable.get('colors.p')).toBeDefined();
    expect(merged.symbolTable.get('spacing.md')).toBeDefined();
  });

  it('uses provided name/description if present', () => {
    const merged = mergeStates([{ name: 'X', description: 'Y' }]);
    expect(merged.name).toBe('X');
    expect(merged.description).toBe('Y');
  });

  it('empty input returns a valid empty state', () => {
    const merged = mergeStates([]);
    expect(merged.colors.size).toBe(0);
    expect(merged.symbolTable.size).toBe(0);
  });
});

describe('icons merging', () => {
  it('keeps library from first partial when second is missing it', () => {
    const a = { icons: { library: 'Lucide' } as IconsData };
    const b = { icons: { strokeWidth: 1.5 } as IconsData };
    const merged = mergeStates([a, b]);
    expect(merged.icons?.library).toBe('Lucide');
    expect(merged.icons?.strokeWidth).toBe(1.5);
  });

  it('last wins on conflicting fields', () => {
    const a = { icons: { library: 'Lucide' } as IconsData };
    const b = { icons: { library: 'Heroicons' } as IconsData };
    const merged = mergeStates([a, b]);
    expect(merged.icons?.library).toBe('Heroicons');
  });

  it('merges size maps, with later entries overriding', () => {
    const a = { icons: { size: new Map([['sm', '16px'], ['md', '24px']]) } as IconsData };
    const b = { icons: { size: new Map([['md', '20px'], ['lg', '32px']]) } as IconsData };
    const merged = mergeStates([a, b]);
    expect(merged.icons?.size?.get('sm')).toBe('16px');
    expect(merged.icons?.size?.get('md')).toBe('20px');
    expect(merged.icons?.size?.get('lg')).toBe('32px');
  });

  it('returns undefined icons when no partial has any icon data', () => {
    const merged = mergeStates([{ colors: new Map() }]);
    expect(merged.icons).toBeUndefined();
  });

  it('caps icons.size at 256 entries (DoS guard)', () => {
    const huge = new Map<string, string>();
    for (let i = 0; i < 1000; i++) huge.set(`k${i}`, '1px');
    const merged = mergeStates([{ icons: { size: huge } }]);
    expect(merged.icons?.size?.size).toBe(256);
  });
});
