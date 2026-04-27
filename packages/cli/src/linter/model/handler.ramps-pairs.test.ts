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
import { ModelHandler } from './handler.js';
import type { ParsedDesignSystem } from '../parser/spec.js';
import type { ResolvedColor, ResolvedValue } from './spec.js';

const handler = new ModelHandler();

function makeParsed(overrides: Partial<ParsedDesignSystem> = {}): ParsedDesignSystem {
  return { sourceMap: new Map(), ...overrides };
}

function asColor(v: ResolvedValue | undefined): ResolvedColor | null {
  if (typeof v === 'object' && v !== null && 'type' in v && v.type === 'color') return v as ResolvedColor;
  return null;
}

describe('ModelHandler — ramp expansion', () => {
  it('expands a ramp into anchor + every step in colors and symbolTable', () => {
    const result = handler.execute(makeParsed({
      colors: {
        primary: { type: 'ramp', anchor: '#1A1C1E', humanName: 'Boston Clay' },
      },
    }));
    expect(result.findings.filter(f => f.severity === 'error')).toEqual([]);
    const ds = result.designSystem;

    const anchor = ds.colors.get('primary');
    expect(anchor?.hex).toBe('#1a1c1e');
    expect(anchor?.humanName).toBe('Boston Clay');

    // Every default step is in the flat colors map and in the symbol table.
    for (const step of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) {
      const flat = ds.colors.get(`primary.${step}`);
      expect(flat).toBeDefined();
      expect(flat?.rampMember).toEqual({ ramp: 'primary', step });
      expect(asColor(ds.symbolTable.get(`colors.primary.${step}`))?.hex).toBe(flat?.hex);
    }
  });

  it('records ramp metadata in state.colorRamps', () => {
    const result = handler.execute(makeParsed({
      colors: {
        primary: { type: 'ramp', anchor: '#1A1C1E', humanName: 'Boston Clay', description: 'Driver for interaction.' },
      },
    }));
    const ramp = result.designSystem.colorRamps.get('primary');
    expect(ramp).toBeDefined();
    expect(ramp?.humanName).toBe('Boston Clay');
    expect(ramp?.description).toBe('Driver for interaction.');
    expect(ramp?.steps.size).toBe(10);
  });

  it('synthesizes flat aliases for inline-ramp pair derivations', () => {
    const result = handler.execute(makeParsed({
      colors: {
        primary: {
          type: 'ramp',
          anchor: '#3b82f6',
          pairs: { container: { bg: 100, fg: 800 } },
        },
      },
    }));
    expect(result.findings.filter(f => f.severity === 'error')).toEqual([]);

    const ds = result.designSystem;
    const container = ds.colors.get('primary-container');
    const onContainer = ds.colors.get('on-primary-container');
    expect(container?.pairRole).toEqual({ pair: 'primary-container', role: 'container' });
    expect(onContainer?.pairRole).toEqual({ pair: 'primary-container', role: 'on-container' });
    // The flat alias references the same hex as the underlying step.
    expect(container?.hex).toBe(ds.colors.get('primary.100')!.hex);
    expect(onContainer?.hex).toBe(ds.colors.get('primary.800')!.hex);
  });

  it('flags inline-ramp pairs that reference a step the ramp does not declare', () => {
    const result = handler.execute(makeParsed({
      colors: {
        primary: {
          type: 'ramp',
          anchor: '#3b82f6',
          steps: [100, 500, 900],
          pairs: { container: { bg: 200, fg: 800 } },
        },
      },
    }));
    expect(result.findings.some(f => f.severity === 'error' && f.message.includes('does not declare'))).toBe(true);
  });

  it('flags a ramp with a malformed anchor', () => {
    const result = handler.execute(makeParsed({
      colors: { primary: { type: 'ramp', anchor: 'not-a-hex' } },
    }));
    expect(result.findings.some(f => f.severity === 'error' && f.path === 'colors.primary.anchor')).toBe(true);
  });
});

describe('ModelHandler — pair expansion', () => {
  it('expands a standalone pair into dotted members and hyphenated aliases', () => {
    const result = handler.execute(makeParsed({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
      },
    }));
    expect(result.findings.filter(f => f.severity === 'error')).toEqual([]);
    const ds = result.designSystem;

    expect(ds.colors.get('surface-info.container')?.hex).toBe('#e0f2fe');
    expect(ds.colors.get('surface-info.onContainer')?.hex).toBe('#0c4a6e');
    expect(ds.colors.get('surface-info')?.hex).toBe('#e0f2fe'); // alias = container
    expect(ds.colors.get('on-surface-info')?.hex).toBe('#0c4a6e'); // alias = on-container

    // Symbol table has every form so any reference style resolves.
    expect(asColor(ds.symbolTable.get('colors.surface-info.container'))?.hex).toBe('#e0f2fe');
    expect(asColor(ds.symbolTable.get('colors.surface-info.onContainer'))?.hex).toBe('#0c4a6e');
    expect(asColor(ds.symbolTable.get('colors.surface-info'))?.hex).toBe('#e0f2fe');
    expect(asColor(ds.symbolTable.get('colors.on-surface-info'))?.hex).toBe('#0c4a6e');
  });

  it('records pair metadata in state.colorPairs', () => {
    const result = handler.execute(makeParsed({
      colors: {
        'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E', minContrast: 7 },
      },
    }));
    const pair = result.designSystem.colorPairs.get('surface-info');
    expect(pair).toBeDefined();
    expect(pair?.minContrast).toBe(7);
    expect(pair?.container.hex).toBe('#e0f2fe');
    expect(pair?.onContainer.hex).toBe('#0c4a6e');
  });

  it('does not error at parse time when pair contrast is poor (rule reports it instead)', () => {
    // Two near-identical greys will fail any reasonable contrast floor.
    const result = handler.execute(makeParsed({
      colors: {
        muddy: { type: 'pair', container: '#777777', onContainer: '#888888' },
      },
    }));
    // Model accepts the declaration; the lint rule is responsible for emitting findings.
    expect(result.findings.filter(f => f.severity === 'error')).toEqual([]);
  });

  it('flags a pair with a malformed member hex', () => {
    const result = handler.execute(makeParsed({
      colors: {
        bad: { type: 'pair', container: 'not-a-hex', onContainer: '#000' },
      },
    }));
    expect(result.findings.some(f => f.severity === 'error' && f.path === 'colors.bad.container')).toBe(true);
  });
});

describe('ModelHandler — back-compat with flat colors', () => {
  it('flat hex colors continue to resolve to the colors map', () => {
    const result = handler.execute(makeParsed({
      colors: { neutral: '#F7F5F2' },
    }));
    expect(result.designSystem.colors.get('neutral')?.hex).toBe('#f7f5f2');
    expect(result.designSystem.colorRamps.size).toBe(0);
    expect(result.designSystem.colorPairs.size).toBe(0);
  });
});
