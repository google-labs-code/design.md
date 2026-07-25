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
import { minFontSizeCheck } from './min-font-size.js';
import { buildState } from './test-helpers.js';

describe('minFontSizeCheck', () => {
  it('warns when fontSize is below 14px', () => {
    const state = buildState({
      typography: {
        caption: {
          fontFamily: 'Inter',
          fontSize: '12px',
        },
      },
    });
    const findings = minFontSizeCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/14px/);
  });

  it('warns when body fontSize is below 16px', () => {
    const state = buildState({
      typography: {
        'body-sm': {
          fontFamily: 'Inter',
          fontSize: '14px',
        },
      },
    });
    const findings = minFontSizeCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/16px/);
  });

  it('passes for 16px body text', () => {
    const state = buildState({
      typography: {
        'body-lg': {
          fontFamily: 'Inter',
          fontSize: '16px',
          lineHeight: '1.5',
        },
      },
    });
    expect(minFontSizeCheck(state).length).toBe(0);
  });
});
