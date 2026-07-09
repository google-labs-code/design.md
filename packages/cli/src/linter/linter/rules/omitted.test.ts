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
import { omittedRules } from './omitted.js';
import { buildState } from './test-helpers.js';

describe('omittedRules', () => {
  it('returns declared-omission info finding when a section is intentionally absent', () => {
    const state = buildState({
      omitted: [{ section: 'spacing' }],
      colors: { primary: '#ff0000' },
    });

    const findings = omittedRules(state);
    expect(findings.length).toBe(1);
    expect(findings[0]).toEqual({
      severity: 'info',
      rule: 'declared-omission',
      path: 'omitted.spacing',
      message: 'spacing intentionally omitted — no spacing tokens will be validated',
    });
  });

  it('returns redundant-omission warning when an omitted section actually has tokens defined', () => {
    const state = buildState({
      omitted: [{ section: 'spacing' }],
      colors: { primary: '#ff0000' },
      spacing: { unit: '8px' },
    });

    const findings = omittedRules(state);
    expect(findings.length).toBe(1);
    expect(findings[0]).toEqual({
      severity: 'warning',
      rule: 'redundant-omission',
      path: 'omitted',
      message: 'spacing listed in omitted but spacing tokens are defined — omitted declaration has no effect',
    });
  });

  it('returns unknown-omission warning when an unknown section name is listed', () => {
    const state = buildState({
      omitted: [{ section: 'iconography', reason: 'No icons needed' }],
      colors: { primary: '#ff0000' },
    });

    const findings = omittedRules(state);
    expect(findings.length).toBe(1);
    expect(findings[0]).toEqual({
      severity: 'warning',
      rule: 'unknown-omission',
      path: 'omitted',
      message: "unknown section name 'iconography' in omitted key",
    });
  });

  it('handles mixed valid, redundant, and unknown entries', () => {
    const state = buildState({
      omitted: [
        { section: 'spacing' },
        { section: 'colors' },
        { section: 'iconography' },
      ],
      colors: { primary: '#ff0000' },
    });

    const findings = omittedRules(state);
    expect(findings.length).toBe(3);
    
    // spacing (declared-omission info)
    expect(findings.find(f => f.message.includes('spacing'))).toEqual({
      severity: 'info',
      rule: 'declared-omission',
      path: 'omitted.spacing',
      message: 'spacing intentionally omitted — no spacing tokens will be validated',
    });

    // colors (redundant-omission warning)
    expect(findings.find(f => f.message.includes('colors'))).toEqual({
      severity: 'warning',
      rule: 'redundant-omission',
      path: 'omitted',
      message: 'colors listed in omitted but colors tokens are defined — omitted declaration has no effect',
    });

    // iconography (unknown-omission warning)
    expect(findings.find(f => f.message.includes('iconography'))).toEqual({
      severity: 'warning',
      rule: 'unknown-omission',
      path: 'omitted',
      message: "unknown section name 'iconography' in omitted key",
    });
  });
});
