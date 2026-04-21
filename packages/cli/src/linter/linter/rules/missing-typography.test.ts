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
import { missingTypography } from './missing-typography.js';
import { buildState } from './test-helpers.js';

describe('missingTypography', () => {
  it('emits warning when colors exist but no typography defined', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      // no typography
    });
    const findings = missingTypography(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('typography');
    expect(findings[0]!.message).toMatch(/typography/i);
  });

  it('returns empty when typography IS defined', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      typography: {
        'body-md': {
          fontFamily: 'Inter',
          fontSize: '16px',
        },
      },
    });
    expect(missingTypography(state)).toEqual([]);
  });

  it('returns empty when no colors defined (nothing to compare against)', () => {
    const state = buildState({});
    expect(missingTypography(state)).toEqual([]);
  });
});
