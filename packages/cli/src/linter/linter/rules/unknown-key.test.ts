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
import { unknownKey } from './unknown-key.js';
import { buildState } from './test-helpers.js';
import type { SourceLocation } from '../../parser/spec.js';

const loc: SourceLocation = { line: 1, column: 0, block: 'frontmatter' };

describe('unknownKey', () => {
  it('warns and suggests "colors" for "colours" (distance 1)', () => {
    const state = buildState({
      sourceMap: new Map([
        ['name', loc],
        ['colours', loc],
      ]),
    });
    const findings = unknownKey(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('colours');
    expect(findings[0]!.message).toBe('Unknown key "colours" — did you mean "colors"?');
  });

  it('warns and suggests "typography" for "typografy" (distance 2)', () => {
    const state = buildState({
      sourceMap: new Map([['typografy', loc]]),
    });
    const findings = unknownKey(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toBe('Unknown key "typografy" — did you mean "typography"?');
  });

  it('warns and suggests "name" for "nam" (distance 1)', () => {
    const state = buildState({
      sourceMap: new Map([['nam', loc]]),
    });
    const findings = unknownKey(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toBe('Unknown key "nam" — did you mean "name"?');
  });

  it('matches case-insensitively (e.g. "Colors" is treated as known)', () => {
    const state = buildState({
      sourceMap: new Map([['Colors', loc]]),
    });
    const findings = unknownKey(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toBe('Unknown key "Colors" — did you mean "colors"?');
  });

  it('stays silent for far-from-any-key extension keys', () => {
    const state = buildState({
      sourceMap: new Map([
        ['icons', loc],
        ['motion', loc],
        ['brand', loc],
      ]),
    });
    expect(unknownKey(state)).toEqual([]);
  });

  it('stays silent for "rounding" (distance 3 from "rounded")', () => {
    const state = buildState({
      sourceMap: new Map([['rounding', loc]]),
    });
    expect(unknownKey(state)).toEqual([]);
  });

  it('returns empty when all top-level keys are known', () => {
    const state = buildState({
      sourceMap: new Map([
        ['version', loc],
        ['name', loc],
        ['description', loc],
        ['colors', loc],
        ['typography', loc],
        ['rounded', loc],
        ['spacing', loc],
        ['components', loc],
      ]),
    });
    expect(unknownKey(state)).toEqual([]);
  });

  it('returns empty when there are no top-level keys', () => {
    const state = buildState({});
    expect(unknownKey(state)).toEqual([]);
  });

  it('emits one finding per misspelled key and ignores unrelated extension keys', () => {
    const state = buildState({
      sourceMap: new Map([
        ['colors', loc],
        ['colours', loc],
        ['typografy', loc],
        ['icons', loc],
      ]),
    });
    const findings = unknownKey(state);
    expect(findings.map(f => f.path).sort()).toEqual(['colours', 'typografy']);
  });

  it('stays silent (and cheap) for very long keys via the length short-circuit', () => {
    const state = buildState({
      sourceMap: new Map([['a'.repeat(50000), loc]]),
    });
    const findings = unknownKey(state);
    expect(findings.length).toBe(0);
  });
});
