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
import { tokenLikeIgnored } from './token-like-ignored.js';
import { buildState } from './test-helpers.js';
import type { SourceLocation } from '../../parser/spec.js';

const loc: SourceLocation = { line: 1, column: 0, block: 'frontmatter' };

describe('tokenLikeIgnored', () => {
  it('warns when an unknown key has hex color leaf values', () => {
    const state = buildState({
      sourceMap: new Map([['base_colors', loc]]),
      rawValues: { base_colors: { ink: '#0B0F14', mist: '#F5F7FA' } },
    });
    const findings = tokenLikeIgnored(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('base_colors');
    expect(findings[0]!.message).toContain('"base_colors"');
    expect(findings[0]!.message).toContain('silently ignored by export');
  });

  it('warns when an unknown key has a fontFamily property', () => {
    const state = buildState({
      sourceMap: new Map([['brand_type', loc]]),
      rawValues: {
        brand_type: { heading: { fontFamily: 'Inter', fontSize: '32px' } },
      },
    });
    const findings = tokenLikeIgnored(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('brand_type');
  });

  it('warns when an unknown key has CSS dimension leaf values', () => {
    const state = buildState({
      sourceMap: new Map([['semantic_spacing', loc]]),
      rawValues: { semantic_spacing: { sm: '4px', md: '8px', lg: '16px' } },
    });
    const findings = tokenLikeIgnored(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('semantic_spacing');
  });

  it('stays silent when an unknown key has a flat string value (not a map)', () => {
    const state = buildState({
      sourceMap: new Map([['theme', loc]]),
      rawValues: { theme: 'dark' },
    });
    expect(tokenLikeIgnored(state)).toEqual([]);
  });

  it('stays silent when an unknown key has a number value', () => {
    const state = buildState({
      sourceMap: new Map([['version_major', loc]]),
      rawValues: { version_major: 2 },
    });
    expect(tokenLikeIgnored(state)).toEqual([]);
  });

  it('stays silent when an unknown key has a non-token-like object (no hex, no dimension, no typo prop)', () => {
    const state = buildState({
      sourceMap: new Map([['meta', loc]]),
      rawValues: { meta: { author: 'Jane', created: '2026-01-01' } },
    });
    expect(tokenLikeIgnored(state)).toEqual([]);
  });

  it('stays silent for all recognized schema keys', () => {
    const state = buildState({
      sourceMap: new Map([
        ['version', loc],
        ['name', loc],
        ['colors', loc],
        ['typography', loc],
        ['spacing', loc],
        ['rounded', loc],
        ['components', loc],
      ]),
    });
    expect(tokenLikeIgnored(state)).toEqual([]);
  });

  it('emits one finding per token-like unknown key', () => {
    const state = buildState({
      sourceMap: new Map([
        ['base_colors', loc],
        ['semantic_colors', loc],
        ['meta', loc],
      ]),
      rawValues: {
        base_colors: { primary: '#1A73E8' },
        semantic_colors: { success: '#34A853' },
        meta: { owner: 'design-team' },
      },
    });
    const findings = tokenLikeIgnored(state);
    expect(findings.length).toBe(2);
    expect(findings.map(f => f.path).sort()).toEqual(['base_colors', 'semantic_colors']);
  });

  it('warns on nested token maps', () => {
    const state = buildState({
      sourceMap: new Map([['palette', loc]]),
      rawValues: {
        palette: {
          light: { brand: '#4A90E2', surface: '#FFFFFF' },
          dark: { brand: '#82B1FF', surface: '#121212' },
        },
      },
    });
    const findings = tokenLikeIgnored(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('palette');
  });

  it('returns empty when there are no unknown keys', () => {
    const state = buildState({});
    expect(tokenLikeIgnored(state)).toEqual([]);
  });
});
