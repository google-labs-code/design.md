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
 * Generate the published spec docs from MDX + spec-config.ts.
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
const HERMES_MDX_PATH = resolve(import.meta.dir, 'spec-hermes.mdx');
const OUTPUTS = {
  upstream: resolve(ROOT, 'docs/spec.md'),
  hermes: resolve(ROOT, 'docs/spec.hermes.md'),
} as const;

const isCheck = process.argv.includes('--check');

function stripHeader(content: string): string {
  return content.replace(/^<!--.*-->\n/gm, '');
}

function relativeOutputPath(path: string): string {
  return path.replace(`${ROOT}/`, '');
}

async function checkOrWrite(outputPath: string, content: string) {
  if (isCheck) {
    const existing = await readFile(outputPath, 'utf-8');
    const existingBody = stripHeader(existing);
    const generatedBody = stripHeader(content);

    if (existingBody !== generatedBody) {
      console.error(`❌ ${relativeOutputPath(outputPath)} is out of date. Run \`bun run spec:gen\` to regenerate.`);

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

    console.log(`✅ ${relativeOutputPath(outputPath)} is up to date.`);
    return;
  }

  await writeFile(outputPath, content);
  console.log(`✅ Generated ${relativeOutputPath(outputPath)} (${content.split('\n').length} lines)`);
}

async function main() {
  const [source, hermesSource] = await Promise.all([
    readFile(MDX_PATH, 'utf-8'),
    readFile(HERMES_MDX_PATH, 'utf-8'),
  ]);

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

  const [generated, hermesAppendix] = await Promise.all([
    compileMdx(source, scope),
    compileMdx(hermesSource, scope),
  ]);

  const upstreamHeader = `<!-- Generated from spec.mdx + spec-config.ts | version: ${cfg.SPEC_VERSION} -->\n<!-- Do not edit directly. Run \`bun run spec:gen\` to regenerate. -->\n\n`;
  const hermesHeader = `<!-- Generated from spec.mdx + spec-hermes.mdx + spec-config.ts | version: ${cfg.SPEC_VERSION} -->\n<!-- Do not edit directly. Run \`bun run spec:gen\` to regenerate. -->\n\n`;
  const generatedByProfile = {
    upstream: upstreamHeader + generated,
    hermes: hermesHeader + generated + '\n\n' + hermesAppendix,
  } as const;

  await checkOrWrite(OUTPUTS.upstream, generatedByProfile.upstream);
  await checkOrWrite(OUTPUTS.hermes, generatedByProfile.hermes);
}

main();
