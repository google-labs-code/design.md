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
import { typeDefinitions } from './renderers.js';
import { SPEC_CONFIG } from '../spec-config.js';

describe('typeDefinitions', () => {
  it('includes **Color** with its description', () => {
    const result = typeDefinitions(SPEC_CONFIG);
    expect(result).toContain('**Color**');
    expect(result).toContain('A color value is any valid CSS color string');
  });

  it('renders Color formats as bullet list', () => {
    const result = typeDefinitions(SPEC_CONFIG);
    expect(result).toContain('- Hex:');
    expect(result).toContain('- Wide-gamut:');
    expect(result).toContain('- Mixing:');
  });

  it('includes **Dimension** with its description', () => {
    const result = typeDefinitions(SPEC_CONFIG);
    expect(result).toContain('**Dimension**');
    expect(result).toContain('A dimension value is a string with a unit suffix');
  });

  it('appends STANDARD_UNITS inline to Dimension', () => {
    const result = typeDefinitions(SPEC_CONFIG);
    expect(result).toContain('Valid units are:');
    for (const unit of SPEC_CONFIG.STANDARD_UNITS) {
      expect(result).toContain(unit);
    }
  });

  it('does not render units as a bullet list for Dimension', () => {
    const result = typeDefinitions(SPEC_CONFIG);
    const dimensionStart = result.indexOf('**Dimension**');
    const afterDimension = result.slice(dimensionStart);
    expect(afterDimension).not.toMatch(/\n- px/);
    expect(afterDimension).not.toMatch(/\n- em/);
  });

  it('renders Color note paragraph', () => {
    const result = typeDefinitions(SPEC_CONFIG);
    expect(result).toContain('internally converted to sRGB');
    expect(result).toContain('recommended default');
  });

  it('filters to a single type when typeName is provided', () => {
    const colorOnly = typeDefinitions(SPEC_CONFIG, 'Color');
    expect(colorOnly).toContain('**Color**');
    expect(colorOnly).not.toContain('**Dimension**');

    const dimensionOnly = typeDefinitions(SPEC_CONFIG, 'Dimension');
    expect(dimensionOnly).toContain('**Dimension**');
    expect(dimensionOnly).not.toContain('**Color**');
  });

  it('returns empty string for unknown typeName', () => {
    const result = typeDefinitions(SPEC_CONFIG, 'NonExistent');
    expect(result).toBe('');
  });
});
