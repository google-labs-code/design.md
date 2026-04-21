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
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { compileMdx } from './compiler.js';
import { SPEC_CONFIG } from '../spec-config.js';
import * as renderers from './renderers.js';

describe('compileMdx', () => {
  it('passes plain markdown through unchanged', async () => {
    const input = '# Hello\n\nThis is a paragraph.\n';
    const result = await compileMdx(input, {});
    expect(result).toBe('# Hello\n\nThis is a paragraph.\n');
  });

  it('evaluates inline expressions', async () => {
    const input = 'The answer is {1 + 1}.\n';
    const result = await compileMdx(input, {});
    expect(result).toContain('The answer is 2.');
  });

  it('evaluates expressions with scope variables', async () => {
    const input = 'Valid units: {UNITS.join(", ")}.\n';
    const result = await compileMdx(input, { UNITS: ['px', 'rem'] });
    expect(result).toContain('Valid units: px, rem.');
  });

  it('evaluates block expressions that produce multi-line content', async () => {
    const input = '# Items\n\n{ITEMS.map((item, i) => `${i + 1}. ${item}`).join("\\n")}\n';
    const result = await compileMdx(input, { ITEMS: ['Alpha', 'Beta'] });
    expect(result).toContain('1. Alpha');
    expect(result).toContain('2. Beta');
  });

  it('strips import statements from output', async () => {
    const input = 'import { X } from "./foo"\n\n# Title\n';
    const result = await compileMdx(input, {});
    expect(result).not.toContain('import');
    expect(result).toContain('# Title');
  });

  it('preserves expressions inside fenced code blocks', async () => {
    const input = '```yaml\ncolors:\n  primary: "{colors.primary}"\n```\n';
    const result = await compileMdx(input, {});
    expect(result).toContain('{colors.primary}');
  });

  it('compiles the full spec.mdx with spec-config scope', async () => {
    const mdxPath = resolve(import.meta.dir, 'spec.mdx');
    const source = await readFile(mdxPath, 'utf-8');

    const cfg = SPEC_CONFIG;
    const scope = {
      ...cfg,
      frontmatterExample: () => renderers.frontmatterExample(cfg),
      colorsExample: () => renderers.colorsExample(cfg),
      typographyExample: () => renderers.typographyExample(cfg),
      componentsExample: () => renderers.componentsExample(cfg),
      typographyPropertyList: () => renderers.typographyPropertyList(cfg),
      sectionOrderList: () => renderers.sectionOrderList(cfg),
      componentSubTokenList: () => renderers.componentSubTokenList(cfg),
      recommendedTokens: () => renderers.recommendedTokens(cfg),
    };

    const result = await compileMdx(source, scope);

    // Verify key config-driven content appears
    expect(result).toContain('px, em, rem');
    expect(result).toContain('**Overview**');
    expect(result).toContain('**Components**');
    expect(result).toContain('backgroundColor');
    expect(result).toContain('`headline-display`');
    expect(result).toContain('#1A1C1E');
  });
});
