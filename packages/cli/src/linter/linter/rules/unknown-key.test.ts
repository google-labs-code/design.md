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
  it('emits a warning for a misspelled top-level key', () => {
    const state = buildState({
      sourceMap: new Map([
        ['name', loc],
        ['colours', loc],
      ]),
    });
    const findings = unknownKey(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('colours');
    expect(findings[0]!.message).toBe('Unexpected unknown top-level key "colours"');
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

  it('emits one finding per unknown key', () => {
    const state = buildState({
      sourceMap: new Map([
        ['colors', loc],
        ['colours', loc],
        ['typografy', loc],
      ]),
    });
    const findings = unknownKey(state);
    expect(findings.map(f => f.path).sort()).toEqual(['colours', 'typografy']);
  });
});
