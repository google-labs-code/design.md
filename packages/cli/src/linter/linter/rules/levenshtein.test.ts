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
import { levenshtein } from './levenshtein.js';

describe('levenshtein', () => {
  it('returns 0 for identical strings', () => {
    expect(levenshtein('colors', 'colors')).toBe(0);
  });

  it('returns 0 when both strings are empty', () => {
    expect(levenshtein('', '')).toBe(0);
  });

  it('returns the length of the other string when one is empty', () => {
    expect(levenshtein('', 'colors')).toBe(6);
    expect(levenshtein('colors', '')).toBe(6);
  });

  it('counts a single substitution as distance 1', () => {
    expect(levenshtein('cat', 'bat')).toBe(1);
  });

  it('counts a single insertion as distance 1', () => {
    expect(levenshtein('cat', 'cats')).toBe(1);
  });

  it('counts a single deletion as distance 1', () => {
    expect(levenshtein('cats', 'cat')).toBe(1);
  });

  it('is symmetric: levenshtein(a, b) === levenshtein(b, a)', () => {
    expect(levenshtein('typografy', 'typography')).toBe(levenshtein('typography', 'typografy'));
    expect(levenshtein('kitten', 'sitting')).toBe(levenshtein('sitting', 'kitten'));
  });

  it('matches the classic kitten/sitting example (distance 3)', () => {
    expect(levenshtein('kitten', 'sitting')).toBe(3);
  });

  it('computes distance for the schema-key typo cases used by unknown-key', () => {
    expect(levenshtein('colours', 'colors')).toBe(1);
    expect(levenshtein('typografy', 'typography')).toBe(2);
    expect(levenshtein('nam', 'name')).toBe(1);
    expect(levenshtein('rounding', 'rounded')).toBe(3);
    expect(levenshtein('icons', 'colors')).toBe(4);
  });
});
