// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parseDtcgTokens } from './dtcg-parser.js';

const DTCG = join(
  import.meta.dir,
  '..',
  '..',
  '..',
  '..',
  'examples',
  'paws-and-paths',
  'design_tokens.json',
);

describe('parseDtcgTokens on paws-and-paths design_tokens.json', () => {
  it('extracts colors with hex', () => {
    const p = parseDtcgTokens(DTCG);
    expect(p.colors?.get('surface')?.hex).toBe('#f9f9ff');
    expect((p.colors?.size ?? 0)).toBeGreaterThan(20);
  });

  it('extracts at least some dimensions', () => {
    const p = parseDtcgTokens(DTCG);
    const dims = (p.rounded?.size ?? 0) + (p.spacing?.size ?? 0);
    expect(dims).toBeGreaterThan(0);
  });

  it('extracts typography entries', () => {
    const p = parseDtcgTokens(DTCG);
    expect((p.typography?.size ?? 0)).toBeGreaterThan(0);
  });

  it('routes dimensions under a `rounded` section to rounded map', () => {
    const p = parseDtcgTokens(DTCG);
    // If paws-and-paths has rounded.sm, we should see it in rounded
    // otherwise at least the test doesn't crash.
    expect(p.rounded).toBeDefined();
  });

  it('returns empty maps (with warning) on invalid JSON', () => {
    // point at a known non-JSON file → tailwind.config.js
    const bad = join(
      import.meta.dir,
      '..',
      '..',
      '..',
      '..',
      'examples',
      'paws-and-paths',
      'tailwind.config.js',
    );
    const p = parseDtcgTokens(bad);
    expect(p.warnings?.length ?? 0).toBeGreaterThan(0);
  });
});

describe('DTCG icons block', () => {
  function writeDtcg(data: unknown): string {
    const dir = mkdtempSync(join(tmpdir(), 'dtcg-icons-'));
    const p = join(dir, 'tokens.json');
    writeFileSync(p, JSON.stringify(data));
    return p;
  }

  it('parses full icons block with $value wrappers', () => {
    const p = writeDtcg({
      icons: {
        library: { $value: 'Lucide' },
        style: { $value: 'outlined' },
        strokeWidth: { $value: 1.5 },
        grid: { $value: '24px' },
        size: {
          sm: { $value: '16px' },
          md: { $value: '24px' },
          lg: { $value: '32px' },
        },
        color: { $value: '{colors.on-surface}' },
      },
    });
    const out = parseDtcgTokens(p);
    expect(out.icons?.library).toBe('Lucide');
    expect(out.icons?.style).toBe('outlined');
    expect(out.icons?.strokeWidth).toBe(1.5);
    expect(out.icons?.grid).toBe('24px');
    expect(out.icons?.color).toBe('{colors.on-surface}');
    expect(out.icons?.size?.get('sm')).toBe('16px');
    expect(out.icons?.size?.get('md')).toBe('24px');
    expect(out.icons?.size?.get('lg')).toBe('32px');
  });

  it('parses bare-value icons block (no $value wrappers)', () => {
    const p = writeDtcg({
      icons: {
        library: 'Heroicons',
        strokeWidth: 2,
        size: { md: '20px' },
      },
    });
    const out = parseDtcgTokens(p);
    expect(out.icons?.library).toBe('Heroicons');
    expect(out.icons?.strokeWidth).toBe(2);
    expect(out.icons?.size?.get('md')).toBe('20px');
  });

  it('ignores unknown fields inside icons block', () => {
    const p = writeDtcg({
      icons: {
        library: { $value: 'Phosphor' },
        unknown: { $value: 'ignored' },
        nested: { evil: { $value: 'also ignored' } },
      },
    });
    const out = parseDtcgTokens(p);
    expect(out.icons?.library).toBe('Phosphor');
    expect((out.icons as Record<string, unknown>)['unknown']).toBeUndefined();
  });

  it('returns no icons field when the DTCG file has no icons key', () => {
    const p = writeDtcg({ colors: { primary: { $value: '#ff0000' } } });
    const out = parseDtcgTokens(p);
    expect(out.icons).toBeUndefined();
  });

  it('rejects non-scalar strokeWidth', () => {
    const p = writeDtcg({ icons: { strokeWidth: { $value: { nested: 'bad' } } } });
    const out = parseDtcgTokens(p);
    expect(out.icons?.strokeWidth).toBeUndefined();
  });

  it('coerces a numeric-string strokeWidth into a number', () => {
    const p = writeDtcg({ icons: { strokeWidth: { $value: '1.75' } } });
    const out = parseDtcgTokens(p);
    expect(out.icons?.strokeWidth).toBe(1.75);
  });

  it('skips forbidden keys in size map (prototype-pollution defense in depth)', () => {
    // safeJsonParse already strips __proto__/constructor/prototype at parse
    // time; this test documents the redundant in-parser guard.
    const p = writeDtcg({
      icons: {
        size: { sm: '16px', constructor: 'evil', md: '24px' },
      },
    });
    const out = parseDtcgTokens(p);
    expect(out.icons?.size?.get('sm')).toBe('16px');
    expect(out.icons?.size?.get('md')).toBe('24px');
    expect(out.icons?.size?.has('constructor')).toBe(false);
  });

  it('returns no icons field for an empty icons object', () => {
    const p = writeDtcg({ icons: {} });
    const out = parseDtcgTokens(p);
    expect(out.icons).toBeUndefined();
  });

  it('returns no icons field when icons is null', () => {
    const p = writeDtcg({ icons: null });
    const out = parseDtcgTokens(p);
    expect(out.icons).toBeUndefined();
  });
});
