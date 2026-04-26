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
import { missingReducedMotion, missingReducedMotionRule } from './missing-reduced-motion.js';
import { buildState } from './test-helpers.js';

describe('missingReducedMotion', () => {
  it('flags motion declared without a reducedMotion fallback', () => {
    const state = buildState({
      motion: { duration: { fast: '150ms' }, easing: { standard: 'ease-in' } },
    });
    expect(missingReducedMotion(state).length).toBe(1);
  });

  it('passes when reducedMotion is declared', () => {
    const state = buildState({
      motion: {
        duration: { fast: '150ms', instant: '0ms' },
        easing: { standard: 'ease-in' },
        reducedMotion: { duration: 'instant', easing: 'standard' },
      },
    });
    expect(missingReducedMotion(state)).toEqual([]);
  });

  it('passes when no motion is declared at all', () => {
    const state = buildState({});
    expect(missingReducedMotion(state)).toEqual([]);
  });

  it('has a valid descriptor', () => {
    expect(missingReducedMotionRule.name).toBe('missing-reduced-motion');
    expect(missingReducedMotionRule.severity).toBe('warning');
  });
});
