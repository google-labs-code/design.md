// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { safeJsonParse } from './safe-json.js';

describe('safeJsonParse', () => {
  it('parses normal JSON objects', () => {
    const parsed = safeJsonParse<{ a: number; b: string }>('{"a":1,"b":"x"}');
    expect(parsed?.a).toBe(1);
    expect(parsed?.b).toBe('x');
  });

  it('returns null on malformed JSON', () => {
    expect(safeJsonParse('not json')).toBeNull();
  });

  it('drops a top-level __proto__ key', () => {
    const parsed = safeJsonParse<Record<string, unknown>>(
      '{"__proto__":{"polluted":true},"real":"ok"}',
    );
    expect(parsed).toBeDefined();
    expect(Object.keys(parsed ?? {})).toEqual(['real']);
    // Host Object.prototype is not polluted.
    expect(({} as Record<string, unknown>)['polluted']).toBeUndefined();
  });

  it('drops nested __proto__ / constructor / prototype keys', () => {
    const src = '{"deps":{"__proto__":{"x":1},"constructor":{"y":2},"prototype":{"z":3},"ok":"yes"}}';
    const parsed = safeJsonParse<{ deps: Record<string, unknown> }>(src);
    expect(parsed?.deps).toBeDefined();
    expect(Object.keys(parsed?.deps ?? {})).toEqual(['ok']);
  });

  it('leaves deeply nested legitimate structures intact', () => {
    const src = '{"a":{"b":{"c":[1,2,{"d":"e"}]}}}';
    const parsed = safeJsonParse<{ a: { b: { c: [number, number, { d: string }] } } }>(src);
    expect(parsed?.a.b.c[2].d).toBe('e');
  });

  it('is safe when attacker spreads the parsed object', () => {
    const parsed = safeJsonParse<Record<string, unknown>>(
      '{"__proto__":{"pollutedByAttacker":true}}',
    );
    const merged = { ...(parsed ?? {}), legit: 1 };
    const probe: Record<string, unknown> = {};
    expect(merged['pollutedByAttacker']).toBeUndefined();
    expect(probe['pollutedByAttacker']).toBeUndefined();
  });
});
