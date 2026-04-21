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

import { describe, test, expect } from 'bun:test';
import { writeFileSync, mkdtempSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import { spawnSync } from 'child_process';
import { lint } from '../lint.js';
import { DtcgEmitterHandler } from './handler.js';

describe('DTCG Conformance', () => {
  test('Terrazzo can parse our DTCG output and generate CSS', () => {
    const fixtureContent = `---
name: Test Brand
colors:
  primary: "#1A1C1E"
  accent: "#4A90D9"
spacing:
  sm: 8px
  md: 16px
typography:
  heading:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2em
    letterSpacing: 0px
---
# Spec
`;

    // 1. Export to DTCG
    const report = lint(fixtureContent);
    const handler = new DtcgEmitterHandler();
    const result = handler.execute(report.designSystem);

    expect(result.success).toBe(true);
    if (!result.success) return;

    // 2. Create temp dir
    const tmpDir = mkdtempSync(join(tmpdir(), 'dtcg-test-'));

    try {
      // 3. Write tokens.json
      writeFileSync(join(tmpDir, 'tokens.json'), JSON.stringify(result.data, null, 2));

      // 4. Write minimal terrazzo.config.js
      // We use JS to avoid needing to resolve TS imports in the spawned process
      writeFileSync(
        join(tmpDir, 'terrazzo.config.js'),
        `
import { defineConfig } from '@terrazzo/cli';
import pluginCSS from '@terrazzo/plugin-css';

export default defineConfig({
  tokens: ['./tokens.json'],
  outDir: './out/',
  plugins: [pluginCSS()],
});
`
      );

      // We also need a package.json in the temp dir to make it a module,
      // so we can use ES imports in terrazzo.config.js
      writeFileSync(
        join(tmpDir, 'package.json'),
        JSON.stringify({ type: 'module' })
      );

      // Install dependencies in temp dir so they can be imported in config
      // Using bun add should be fast if cached
      const installProc = spawnSync('bun', ['add', '@terrazzo/cli', '@terrazzo/plugin-css'], {
        cwd: tmpDir,
        env: { ...process.env, PATH: process.env.PATH },
        shell: true
      });

      if (installProc.status !== 0) {
        console.error('Install failed:', installProc.stderr.toString());
      }

      // 5. Run Terrazzo build
      const proc = spawnSync('npx', ['@terrazzo/cli', 'build'], {
        cwd: tmpDir,
        env: { ...process.env, PATH: process.env.PATH },
        shell: true
      });

      if (proc.status !== 0) {
        console.error('Terrazzo stderr:', proc.stderr.toString());
        console.error('Terrazzo stdout:', proc.stdout.toString());
      }

      expect(proc.status).toBe(0);

      // 6. Verify CSS was generated
      const cssPath = join(tmpDir, 'out/index.css');
      
      if (!existsSync(cssPath)) {
        console.log('Temp dir contents:', spawnSync('ls', ['-R', tmpDir]).stdout.toString());
      }

      expect(existsSync(cssPath)).toBe(true);

      if (existsSync(cssPath)) {
        const css = readFileSync(cssPath, 'utf-8');
        expect(css).toContain('--color-primary');
        expect(css).toContain('--color-accent');
        expect(css).toContain('--spacing-sm');
        // Terrazzo might flatten typography differently, let's check for a part of it
        expect(css).toContain('heading');
      }
    } finally {
      // Cleanup
      try {
        spawnSync('rm', ['-rf', tmpDir]);
      } catch {
        // best effort
      }
    }
  }, 30000); // Increase timeout for npx
});
