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
import { unverifiedContrastCheck } from './unverified-contrast.js';
import { buildState } from './test-helpers.js';

describe('unverifiedContrastCheck', () => {
  it('emits info when colors exist without component contrast pairs', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', neutral: '#F7F5F2' },
    });
    const findings = unverifiedContrastCheck(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.severity).toBe('info');
    expect(findings[0]!.message).toMatch(/contrast cannot be verified/);
  });

  it('returns empty when a component declares bg/text pair', () => {
    const state = buildState({
      colors: { primary: '#1A1C1E', onPrimary: '#FFFFFF' },
      components: {
        'button-primary': {
          backgroundColor: '{colors.primary}',
          textColor: '{colors.onPrimary}',
        },
      },
    });
    expect(unverifiedContrastCheck(state).length).toBe(0);
  });

  it('returns empty when no colors are defined', () => {
    const state = buildState({});
    expect(unverifiedContrastCheck(state).length).toBe(0);
  });
});
