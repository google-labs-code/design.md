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
import { errorPatternViolation } from './error-pattern-violation.js';
import { buildState } from './test-helpers.js';

describe('errorPatternViolation', () => {
  it('flags an error label that lacks the second slot', () => {
    const state = buildState({
      copy: { errorPattern: '{what-happened}. {how-to-fix}.' },
      components: { 'error-banner': { label: 'Something went wrong.' } },
    });
    const findings = errorPatternViolation(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toContain('error-banner.label');
  });

  it('does not flag a compliant message', () => {
    const state = buildState({
      copy: { errorPattern: '{what-happened}. {how-to-fix}.' },
      components: {
        'error-banner': { label: 'We could not save your changes. Refresh and try again.' },
      },
    });
    expect(errorPatternViolation(state)).toEqual([]);
  });

  it('uses registry kind: error-message when present', () => {
    const state = buildState({
      copy: { errorPattern: '{what-happened}. {how-to-fix}.' },
      componentRegistry: [{ name: 'banner-failure', kind: 'error-message' }],
      components: { 'banner-failure': { label: 'Oops.' } },
    });
    const findings = errorPatternViolation(state);
    expect(findings.length).toBe(1);
  });
});
