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
import { unknownIconStyle } from './unknown-icon-style.js';
import type { DesignSystemState, ResolvedIcons } from '../../model/spec.js';

function makeState(icons?: ResolvedIcons): DesignSystemState {
  return {
    colors: new Map(),
    typography: new Map(),
    rounded: new Map(),
    spacing: new Map(),
    components: new Map(),
    symbolTable: new Map(),
    icons,
  };
}

describe('unknownIconStyle rule', () => {
  it('returns no findings when icons block is absent', () => {
    expect(unknownIconStyle(makeState(undefined))).toEqual([]);
  });

  it('returns no findings when style is in the canonical enum', () => {
    const icons: ResolvedIcons = { type: 'icons', style: 'outlined', size: new Map() };
    expect(unknownIconStyle(makeState(icons))).toEqual([]);
  });

  it('returns a warning when style is unknown', () => {
    const icons: ResolvedIcons = { type: 'icons', style: 'hexagonal', size: new Map() };
    const findings = unknownIconStyle(makeState(icons));
    expect(findings).toHaveLength(1);
    expect(findings[0]?.path).toBe('icons.style');
    expect(findings[0]?.message).toMatch(/'hexagonal'/);
  });
});
