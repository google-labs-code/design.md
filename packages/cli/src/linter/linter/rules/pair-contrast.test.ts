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
import { ModelHandler } from '../../model/handler.js';
import { pairContrast } from './pair-contrast.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';

const model = new ModelHandler();

function build(colors: NonNullable<ParsedDesignSystem['colors']>) {
  return model.execute({ sourceMap: new Map(), colors }).designSystem;
}

describe('pair-contrast rule', () => {
  it('passes when pair contrast meets the default 4.5:1 floor', () => {
    const state = build({
      'surface-info': { type: 'pair', container: '#E0F2FE', onContainer: '#0C4A6E' },
    });
    expect(pairContrast(state)).toEqual([]);
  });

  it('emits a finding when pair contrast falls below the declared floor', () => {
    const state = build({
      muddy: { type: 'pair', container: '#777777', onContainer: '#888888' },
    });
    const findings = pairContrast(state);
    expect(findings.length).toBe(1);
    expect(findings[0]?.path).toBe('colors.muddy');
    expect(findings[0]?.message).toContain('below the declared floor');
  });

  it('respects an explicit minContrast (AAA)', () => {
    // 4.6:1 passes AA but fails AAA (7:1).
    const state = build({
      borderline: { type: 'pair', container: '#FFFFFF', onContainer: '#767676', minContrast: 7 },
    });
    expect(pairContrast(state).length).toBe(1);
  });

  it('returns no findings when no pairs are declared', () => {
    const state = build({ neutral: '#F7F5F2' });
    expect(pairContrast(state)).toEqual([]);
  });
});
