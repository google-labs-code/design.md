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
import { minLineHeightCheck } from './min-line-height.js';
import { buildState } from './test-helpers.js';

describe('minLineHeightCheck', () => {
  it('warns when label token has unitless lineHeight below 1.5', () => {
    const state = buildState({
      typography: {
        'label-caps': {
          fontFamily: 'Inter',
          fontSize: '12px',
          lineHeight: '1',
        },
      },
    });
    const findings = minLineHeightCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.path).toBe('typography.label-caps.lineHeight');
  });

  it('ignores display headings with tight lineHeight', () => {
    const state = buildState({
      typography: {
        'display-xl': {
          fontFamily: 'Inter',
          fontSize: '48px',
          lineHeight: '1.1',
        },
      },
    });
    expect(minLineHeightCheck(state).length).toBe(0);
  });
});
