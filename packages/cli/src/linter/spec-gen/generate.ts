#!/usr/bin/env bun
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

/**
 * Generate docs/spec.md from docs/spec.mdx + spec-config.ts.
 *
 * Usage:
 *   bun run packages/linter/src/spec-gen/generate.ts
 *   bun run packages/linter/src/spec-gen/generate.ts --check
 */

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { compileMdx } from './compiler.js';
import { SPEC_CONFIG } from '../spec-config.js';
import * as renderers from './renderers.js';

const ROOT = resolve(import.meta.dir, '../../../../../');
const MDX_PATH = resolve(import.meta.dir, 'spec.mdx');
const OUTPUT_PATH = resolve(ROOT, 'docs/spec.md');

const isCheck = process.argv.includes('--check');

async function main() {
  const source = await readFile(MDX_PATH, 'utf-8');

  // Scope: raw config values + renderer functions
  const cfg = SPEC_CONFIG;
  const scope = {
    ...cfg,
    // Renderer functions — pre-bound to config so MDX calls are clean
    frontmatterExample: () => renderers.frontmatterExample(cfg),
    colorsExample: () => renderers.colorsExample(cfg),
    typographyExample: () => renderers.typographyExample(cfg),
    componentsExample: () => renderers.componentsExample(cfg),
    typographyPropertyList: () => renderers.typographyPropertyList(cfg),
    sectionOrderList: () => renderers.sectionOrderList(cfg),
    componentSubTokenList: () => renderers.componentSubTokenList(cfg),
    recommendedTokens: () => renderers.recommendedTokens(cfg),
  };

  const generated = await compileMdx(source, scope);

  // Prepend header comment
  const header = `<!-- Generated from spec.mdx + spec-config.ts | version: ${cfg.SPEC_VERSION} -->\n<!-- Do not edit directly. Run \`bun run spec:gen\` to regenerate. -->\n\n`;
  const content = header + generated;

  if (isCheck) {
    const existing = await readFile(OUTPUT_PATH, 'utf-8');

    // Strip header for comparison (contains no timestamp, but future-proof)
    const stripHeader = (s: string) => s.replace(/^<!--.*-->\n/gm, '');
    const existingBody = stripHeader(existing);
    const generatedBody = stripHeader(content);

    if (existingBody === generatedBody) {
      console.log('✅ docs/spec.md is up to date.');
      process.exit(0);
    } else {
      console.error('❌ docs/spec.md is out of date. Run `bun run spec:gen` to regenerate.');

      const existingLines = existingBody.split('\n');
      const generatedLines = generatedBody.split('\n');
      for (let i = 0; i < Math.max(existingLines.length, generatedLines.length); i++) {
        if (existingLines[i] !== generatedLines[i]) {
          console.error(`   First difference at line ${i + 1}:`);
          console.error(`   - existing:  ${existingLines[i]?.slice(0, 100)}`);
          console.error(`   + generated: ${generatedLines[i]?.slice(0, 100)}`);
          break;
        }
      }
      process.exit(1);
    }
  }

  await writeFile(OUTPUT_PATH, content);
  console.log(`✅ Generated docs/spec.md (${content.split('\n').length} lines)`);
}

main();
