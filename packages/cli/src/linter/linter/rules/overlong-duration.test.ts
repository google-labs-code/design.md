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
import { overlongDuration, overlongDurationRule } from './overlong-duration.js';
import { buildState } from './test-helpers.js';

describe('overlongDuration', () => {
  it('flags durations over 400ms', () => {
    const state = buildState({
      motion: { duration: { sluggish: '600ms' } },
    });
    const findings = overlongDuration(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('600ms');
  });

  it('flags durations expressed in seconds when over 0.4s', () => {
    const state = buildState({
      motion: { duration: { dramatic: '1s' } },
    });
    expect(overlongDuration(state).length).toBe(1);
  });

  it('passes durations at or under 400ms', () => {
    const state = buildState({
      motion: { duration: { fast: '150ms', medium: '250ms', slow: '400ms' } },
    });
    expect(overlongDuration(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(overlongDurationRule.name).toBe('overlong-duration');
    expect(overlongDurationRule.severity).toBe('warning');
  });
});
