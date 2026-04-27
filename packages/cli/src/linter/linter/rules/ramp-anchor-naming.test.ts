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
import { rampAnchorNaming } from './ramp-anchor-naming.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';

const model = new ModelHandler();

function build(colors: NonNullable<ParsedDesignSystem['colors']>) {
  return model.execute({ sourceMap: new Map(), colors }).designSystem;
}

describe('ramp-anchor-naming rule', () => {
  it('warns when a ramp lacks humanName', () => {
    const state = build({
      primary: { type: 'ramp', anchor: '#1A1C1E' },
    });
    const findings = rampAnchorNaming(state);
    expect(findings.length).toBe(1);
    expect(findings[0]?.path).toBe('colors.primary');
    expect(findings[0]?.message).toContain('humanName');
  });

  it('passes when humanName is declared', () => {
    const state = build({
      primary: { type: 'ramp', anchor: '#1A1C1E', humanName: 'Boston Clay' },
    });
    expect(rampAnchorNaming(state)).toEqual([]);
  });

  it('does not run on flat colors', () => {
    const state = build({ neutral: '#F7F5F2' });
    expect(rampAnchorNaming(state)).toEqual([]);
  });
});
