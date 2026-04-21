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
import { missingPrimary } from './missing-primary.js';
import { buildState } from './test-helpers.js';

describe('missingPrimary', () => {
  it('emits warning when colors exist but no primary', () => {
    const state = buildState({ colors: { accent: '#ff0000' } });
    const findings = missingPrimary(state);
    expect(findings.length).toBe(1);
    expect(findings[0]!.message).toMatch(/primary/);
  });

  it('returns empty when primary IS defined', () => {
    const state = buildState({ colors: { primary: '#ff0000' } });
    expect(missingPrimary(state)).toEqual([]);
  });

  it('returns empty when no colors defined', () => {
    const state = buildState({});
    expect(missingPrimary(state)).toEqual([]);
  });
});
