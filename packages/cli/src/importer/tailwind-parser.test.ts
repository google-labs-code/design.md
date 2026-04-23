// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { parseTailwindConfig } from './tailwind-parser.js';

const EX = join(import.meta.dir, '..', '..', '..', '..', 'examples', 'paws-and-paths', 'tailwind.config.js');

describe('parseTailwindConfig on paws-and-paths', () => {
  it('extracts a known color as ResolvedColor', async () => {
    const partial = await parseTailwindConfig(EX);
    const primary = partial.colors?.get('primary');
    expect(primary).toBeDefined();
    expect(primary?.hex).toBe('#855300');
    expect(partial.colors?.size ?? 0).toBeGreaterThan(40);
  });

  it('extracts borderRadius into rounded (with unit)', async () => {
    const partial = await parseTailwindConfig(EX);
    const sm = partial.rounded?.get('sm');
    expect(sm).toEqual({ type: 'dimension', value: 0.25, unit: 'rem' });
    const full = partial.rounded?.get('full');
    expect(full).toEqual({ type: 'dimension', value: 9999, unit: 'px' });
  });

  it('extracts spacing as dimensions', async () => {
    const partial = await parseTailwindConfig(EX);
    const gutter = partial.spacing?.get('gutter');
    expect(gutter).toEqual({ type: 'dimension', value: 16, unit: 'px' });
  });

  it('extracts tuple fontSize → typography entries', async () => {
    const partial = await parseTailwindConfig(EX);
    const display = partial.typography?.get('display');
    expect(display?.fontSize).toEqual({ type: 'dimension', value: 44, unit: 'px' });
    expect(display?.lineHeight).toEqual({ type: 'dimension', value: 52, unit: 'px' });
    expect(display?.fontWeight).toBe(800);
  });

  it('joins fontFamily arrays into the first family string', async () => {
    const partial = await parseTailwindConfig(EX);
    const display = partial.typography?.get('display');
    expect(display?.fontFamily).toBe('Plus Jakarta Sans');
  });

  it('falls back gracefully on a syntactically broken config', async () => {
    const tmp = join(import.meta.dir, 'fixtures', 'broken-tailwind.config.js');
    await Bun.write(tmp, 'module.exports = { syntax error');
    const partial = await parseTailwindConfig(tmp);
    expect(partial.warnings?.length ?? 0).toBeGreaterThan(0);
  });
});
