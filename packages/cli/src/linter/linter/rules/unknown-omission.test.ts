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
import { unknownOmission } from './unknown-omission.js';
import { buildState } from './test-helpers.js';

describe('unknownOmission', () => {
  it('emits warning for unknown section in omitted (bare string)', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      omitted: ['iconography'],
    });
    const findings = unknownOmission(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('omitted.iconography');
    expect(findings[0]!.severity).toBe('warning');
    expect(findings[0]!.message).toContain("Unknown section name 'iconography'");
  });

  it('emits warning for unknown section in omitted (object form)', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      omitted: [{ section: 'bogus', reason: 'test' }],
    });
    const findings = unknownOmission(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('omitted.bogus');
  });

  it('returns empty when all omitted sections are valid', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      omitted: ['spacing', 'rounded', 'typography', 'colors', 'components'],
    });
    expect(unknownOmission(state)).toEqual([]);
  });

  it('returns empty when no omitted key', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
    });
    expect(unknownOmission(state)).toEqual([]);
  });

  it('returns empty for empty state', () => {
    const state = buildState({});
    expect(unknownOmission(state)).toEqual([]);
  });
});
