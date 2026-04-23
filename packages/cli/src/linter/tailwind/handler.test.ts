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
import type { DesignSystemState } from '../model/spec.js';
import { TailwindEmitterHandler } from './handler.js';

describe('TailwindV4EmitterHandler', () => {
  it('should export design tokens to Tailwind v4 CSS variables', () => {
    const mockState: DesignSystemState = {
      name: 'Test Design System',
      description: 'A test',
      findings: [],
      symbolTable: new Map(),
      sections: [],
      colors: new Map([
        ['primary', { type: 'color', hex: '#1A1C1E', r: 26, g: 28, b: 30, a: 1, luminance: 0.005 }],
        ['secondary', { type: 'color', hex: '#6C7278', r: 108, g: 114, b: 120, a: 1, luminance: 0.17 }],
      ]),
      typography: new Map([
        ['h1', {
          type: 'typography',
          fontFamily: 'Public Sans',
          fontSize: { type: 'dimension', value: 3, unit: 'rem' },
        }],
      ]),
      spacing: new Map([
        ['sm', { type: 'dimension', value: 8, unit: 'px' }],
      ]),
      rounded: new Map([
        ['md', { type: 'dimension', value: 8, unit: 'px' }],
      ]),
      components: new Map(),
    };

    const handler = new TailwindEmitterHandler();
    const result = handler.execute(mockState);

    expect(result.success).toBe(true);
    if (result.success) {
      const expectedCss = [
        '@theme {',
        '  --color-primary: #1A1C1E;',
        '  --color-secondary: #6C7278;',
        "  --typography-h1-font-family: Public Sans;",
        "  --typography-h1-font-size: 3rem;",
        '  --spacing-sm: 8px;',
        '  --border-radius-md: 8px;',
        '}',
      ].join('\n');
      expect(result.data).toEqual(expectedCss);
    }
  });
});
