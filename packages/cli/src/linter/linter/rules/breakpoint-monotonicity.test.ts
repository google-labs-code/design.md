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
import { breakpointMonotonicity, breakpointMonotonicityRule } from './breakpoint-monotonicity.js';
import { buildState } from './test-helpers.js';

describe('breakpointMonotonicity', () => {
  it('passes when values are strictly ascending', () => {
    const state = buildState({
      breakpoints: {
        philosophy: 'mobile-first',
        values: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
      },
    });
    expect(breakpointMonotonicity(state)).toEqual([]);
  });

  it('flags a breakpoint that is not greater than the previous one', () => {
    const state = buildState({
      breakpoints: {
        philosophy: 'mobile-first',
        values: { sm: '640px', md: '600px', lg: '1024px' },
      },
    });
    const findings = breakpointMonotonicity(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain("'md'");
  });

  it('flags equal-valued adjacent breakpoints', () => {
    const state = buildState({
      breakpoints: {
        philosophy: 'mobile-first',
        values: { sm: '640px', md: '640px' },
      },
    });
    expect(breakpointMonotonicity(state).length).toBe(1);
  });

  it('mixes px and rem units consistently', () => {
    const state = buildState({
      breakpoints: {
        philosophy: 'mobile-first',
        values: { sm: '40rem', md: '48rem', lg: '64rem' }, // 640, 768, 1024 px-equivalent
      },
    });
    expect(breakpointMonotonicity(state)).toEqual([]);
  });

  it('no-ops when fewer than two breakpoints are declared', () => {
    const state = buildState({
      breakpoints: { values: { sm: '640px' } },
    });
    expect(breakpointMonotonicity(state)).toEqual([]);
  });

  it('no-ops when breakpoints are absent', () => {
    const state = buildState({});
    expect(breakpointMonotonicity(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(breakpointMonotonicityRule.name).toBe('breakpoint-monotonicity');
    expect(breakpointMonotonicityRule.severity).toBe('error');
  });
});
