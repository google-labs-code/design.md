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
import { declaredOmission } from './declared-omission.js';
import { buildState } from './test-helpers.js';

describe('declaredOmission', () => {
  it('emits info for each omitted section (bare string form)', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      omitted: ['spacing', 'rounded'],
    });
    const findings = declaredOmission(state);
    expect(findings.length).toBe(2);
    expect(findings[0]!.path).toBe('omitted.spacing');
    expect(findings[0]!.severity).toBe('info');
    expect(findings[1]!.path).toBe('omitted.rounded');
  });

  it('emits info with reason when object form is used', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      omitted: [
        { section: 'spacing', reason: 'No spacing scale defined in source material' },
      ],
    });
    const findings = declaredOmission(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('omitted.spacing');
    expect(findings[0]!.message).toContain('No spacing scale defined');
  });

  it('returns empty when no omitted key', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
    });
    expect(declaredOmission(state)).toEqual([]);
  });

  it('returns empty for empty state', () => {
    const state = buildState({});
    expect(declaredOmission(state)).toEqual([]);
  });
});
