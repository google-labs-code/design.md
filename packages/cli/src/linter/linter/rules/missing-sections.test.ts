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
import { missingSections } from './missing-sections.js';
import { buildState } from './test-helpers.js';

describe('missingSections', () => {
  it('emits info when spacing is missing but colors exist', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      rounded: { regular: '4px' },
      // no spacing
    });
    const findings = missingSections(state);
    const spacingNote = findings.find(d => d.path === 'spacing');
    expect(spacingNote).toBeDefined();
    expect(spacingNote!.message).toMatch(/spacing/);
  });

  it('returns empty when all sections present', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      rounded: { regular: '4px' },
      spacing: { unit: '8px' },
    });
    expect(missingSections(state)).toEqual([]);
  });

  it('returns empty when no colors exist (nothing to compare against)', () => {
    const state = buildState({});
    expect(missingSections(state)).toEqual([]);
  });
});
