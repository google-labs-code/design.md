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
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { lint } from '../../lint.js';
import { TailwindV4EmitterHandler } from './handler.js';
import { serializeToCss } from './serialize.js';

describe('Tailwind v4 export against real fixtures', () => {
  it('produces a valid @theme block from examples/paws-and-paths/DESIGN.md', () => {
    const fixturePath = join(import.meta.dir, '../../../../../../examples/paws-and-paths/DESIGN.md');
    const content = readFileSync(fixturePath, 'utf8');
    const report = lint(content);

    const handler = new TailwindV4EmitterHandler();
    const result = handler.execute(report.designSystem);
    if (!result.success) throw new Error(`Handler failed: ${result.error.message}`);

    const css = serializeToCss(result.data.theme);

    // Wraps in @theme block
    expect(css.startsWith('@theme {\n')).toBe(true);
    expect(css.endsWith('}\n')).toBe(true);

    // Contains expected v4 CSS variable prefixes (paws-and-paths has many colors + typography + spacing)
    expect(css).toContain('--color-');
    expect(css).toContain('--spacing-');
    expect(css).toContain('--radius-');

    // Non-empty body
    const bodyLines = css.split('\n').filter(l => l.trim().startsWith('--'));
    expect(bodyLines.length).toBeGreaterThan(10);
  });
});
