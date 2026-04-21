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
import { tokenSummary } from './token-summary.js';
import { buildState } from './test-helpers.js';

describe('tokenSummary', () => {
  it('emits info diagnostic with token counts', () => {
    const state = buildState({
      colors: { primary: '#ff0000', secondary: '#00ff00' },
      typography: { 'headline-lg': { fontFamily: 'Roboto', fontSize: '42px', fontWeight: 500 } },
      rounded: { regular: '4px' },
      spacing: { 'gutter-s': '8px' },
    });
    const findings = tokenSummary(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/2 colors/);
    expect(findings[0]!.message).toMatch(/1 typography/);
  });

  it('returns empty for completely empty state', () => {
    const state = buildState({});
    expect(tokenSummary(state)).toEqual([]);
  });
});
