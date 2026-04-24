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
import { iconsExample, iconStyleEnumList } from './renderers.js';
import { SPEC_CONFIG } from '../spec-config.js';

describe('iconsExample renderer', () => {
  it('renders the icons YAML block with library, style, strokeWidth, grid, size map, color', () => {
    const output = iconsExample(SPEC_CONFIG);
    expect(output).toContain('```yaml');
    expect(output).toContain('icons:');
    expect(output).toContain('library: "Lucide"');
    expect(output).toContain('style: "outlined"');
    expect(output).toContain('strokeWidth: 1.5');
    expect(output).toContain('grid: "24px"');
    expect(output).toContain('size:');
    expect(output).toContain('md: "24px"');
    expect(output).toContain('color: "{colors.on-surface}"');
  });
});

describe('iconStyleEnumList renderer', () => {
  it('renders the canonical icon styles as comma-separated backticked tokens', () => {
    const output = iconStyleEnumList(SPEC_CONFIG);
    expect(output).toBe('`outlined`, `filled`, `rounded`, `sharp`, `duotone`');
  });
});
