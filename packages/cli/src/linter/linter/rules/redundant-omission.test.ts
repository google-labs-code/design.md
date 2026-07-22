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
import { redundantOmission } from './redundant-omission.js';
import { buildState } from './test-helpers.js';

describe('redundantOmission', () => {
  it('emits warning when spacing is omitted but spacing tokens exist', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      spacing: { unit: '8px' },
      rounded: { regular: '4px' },
      omitted: ['spacing'],
    });
    const findings = redundantOmission(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('omitted.spacing');
    expect(findings[0]!.severity).toBe('warning');
    expect(findings[0]!.message).toContain('has no effect');
  });

  it('emits warning when typography is omitted but typography tokens exist', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      typography: {
        'body-md': { fontFamily: 'Inter', fontSize: '16px' },
      },
      omitted: ['typography'],
    });
    const findings = redundantOmission(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('omitted.typography');
  });

  it('returns empty when omitted sections genuinely have no tokens', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      omitted: ['spacing', 'rounded'],
    });
    expect(redundantOmission(state)).toEqual([]);
  });

  it('returns empty when no omitted key', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      spacing: { unit: '8px' },
    });
    expect(redundantOmission(state)).toEqual([]);
  });

  it('returns empty for empty state', () => {
    const state = buildState({});
    expect(redundantOmission(state)).toEqual([]);
  });
});
