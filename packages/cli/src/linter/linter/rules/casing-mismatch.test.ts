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
import { casingMismatch, matchesCasing } from './casing-mismatch.js';
import { buildState } from './test-helpers.js';

describe('matchesCasing', () => {
  const empty = new Set<string>();
  const minor = new Set(['a', 'an', 'and', 'the', 'of']);

  it('sentence-case accepts capitalized first word and lowercase rest', () => {
    expect(matchesCasing('Save and continue', 'sentence-case', empty, minor)).toBe(true);
  });
  it('sentence-case rejects all-caps mid-sentence words', () => {
    expect(matchesCasing('Save And Continue', 'sentence-case', empty, minor)).toBe(false);
  });
  it('sentence-case allows declared proper nouns', () => {
    expect(matchesCasing('Open Slack', 'sentence-case', new Set(['slack']), minor)).toBe(true);
  });
  it('title-case accepts standard title case with minor lowercase', () => {
    expect(matchesCasing('The Lord of the Rings', 'title-case', empty, minor)).toBe(true);
  });
  it('title-case rejects fully lowercase phrase', () => {
    expect(matchesCasing('the lord of the rings', 'title-case', empty, minor)).toBe(false);
  });
  it('UPPERCASE accepts all caps', () => {
    expect(matchesCasing('SAVE NOW', 'UPPERCASE', empty, minor)).toBe(true);
  });
  it('UPPERCASE rejects mixed', () => {
    expect(matchesCasing('Save Now', 'UPPERCASE', empty, minor)).toBe(false);
  });
  it('lowercase accepts all lower', () => {
    expect(matchesCasing('save now', 'lowercase', empty, minor)).toBe(true);
  });
});

describe('casingMismatch rule', () => {
  it('flags a button label that violates sentence-case', () => {
    const state = buildState({
      copy: { casing: { button: 'sentence-case' } },
      componentRegistry: [{ name: 'button-primary', kind: 'button' }],
      components: { 'button-primary': { label: 'Save And Continue' } },
    });
    const findings = casingMismatch(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toContain('button-primary.label');
  });

  it('does not flag a compliant sentence-case label', () => {
    const state = buildState({
      copy: { casing: { button: 'sentence-case' } },
      componentRegistry: [{ name: 'button-primary', kind: 'button' }],
      components: { 'button-primary': { label: 'Save and continue' } },
    });
    expect(casingMismatch(state)).toEqual([]);
  });

  it('respects copy.knownProperNouns to avoid false positives', () => {
    const state = buildState({
      copy: {
        casing: { button: 'sentence-case' },
        titleCase: { knownProperNouns: ['Slack'] },
      },
      componentRegistry: [{ name: 'button-primary', kind: 'button' }],
      components: { 'button-primary': { label: 'Open Slack' } },
    });
    expect(casingMismatch(state)).toEqual([]);
  });
});
