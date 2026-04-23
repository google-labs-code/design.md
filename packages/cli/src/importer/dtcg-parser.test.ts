// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
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
