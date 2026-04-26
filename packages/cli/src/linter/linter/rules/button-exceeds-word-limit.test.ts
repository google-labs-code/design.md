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
import { buttonExceedsWordLimit } from './button-exceeds-word-limit.js';
import { buildState } from './test-helpers.js';

describe('buttonExceedsWordLimit', () => {
  it('returns no findings when copy.buttonLabelMaxWords is unset', () => {
    const state = buildState({
      components: { 'button-primary': { label: 'Sign up for our newsletter today' } },
    });
    expect(buttonExceedsWordLimit(state)).toEqual([]);
  });

  it('flags a label exceeding the limit (open-world fallback)', () => {
    const state = buildState({
      copy: { buttonLabelMaxWords: 3 },
      components: { 'button-primary': { label: 'Sign up for our newsletter' } },
    });
    const findings = buttonExceedsWordLimit(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toContain('Sign up for our newsletter');
  });

  it('does not flag a label within the limit', () => {
    const state = buildState({
      copy: { buttonLabelMaxWords: 3 },
      components: { 'button-primary': { label: 'Sign up' } },
    });
    expect(buttonExceedsWordLimit(state)).toEqual([]);
  });

  it('uses registry kind to identify buttons in closed-world mode', () => {
    const state = buildState({
      copy: { buttonLabelMaxWords: 2 },
      componentRegistry: [
        { name: 'cta-primary', kind: 'button' },
        { name: 'card-elevated', kind: 'container' },
      ],
      components: {
        'cta-primary': { label: 'Get started today', backgroundColor: '#000000' },
        'card-elevated': { label: 'A card with a long title', backgroundColor: '#ffffff' },
      },
    });
    const findings = buttonExceedsWordLimit(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toContain('cta-primary');
  });
});
