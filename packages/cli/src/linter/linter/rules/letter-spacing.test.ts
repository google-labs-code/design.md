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
import { letterSpacingCheck } from './letter-spacing.js';
import { buildState } from './test-helpers.js';

describe('letterSpacingCheck', () => {
  it('warns on aggressive negative letterSpacing', () => {
    const state = buildState({
      typography: {
        'display-xl': {
          fontFamily: 'Inter',
          fontSize: '48px',
          letterSpacing: '-0.06em',
        },
      },
    });
    const findings = letterSpacingCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/-0\.06em/);
  });

  it('passes for mild negative letterSpacing', () => {
    const state = buildState({
      typography: {
        h1: {
          fontFamily: 'Inter',
          fontSize: '32px',
          letterSpacing: '-0.02em',
        },
      },
    });
    expect(letterSpacingCheck(state).length).toBe(0);
  });
});
