// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { runImport } from './index.js';
import { lint } from '../linter/index.js';
import type { FrameworkName } from './spec.js';

const F = (name: string): string => join(import.meta.dir, 'fixtures', name);

const CASES: Array<{ dir: string; framework: FrameworkName }> = [
  { dir: 'next-minimal', framework: 'next' },
  { dir: 'vite-react-minimal', framework: 'vite' },
  { dir: 'nuxt-minimal', framework: 'nuxt' },
];

describe('VR-2: end-to-end import on framework fixtures', () => {
  for (const { dir, framework } of CASES) {
    it(`runs cleanly on ${dir} and produces a lint-clean DESIGN.md`, async () => {
      const steps: string[] = [];
      const result = await runImport({
        projectPath: F(dir),
        dryRun: true,
        onStep: (s) => {
          steps.push(s.kind);
        },
      });

      expect(result.success).toBe(true);
      expect(result.framework.name).toBe(framework);
      expect(steps).toContain('detect-done');
      expect(steps).toContain('scan-done');
      expect(steps).toContain('merge-done');

      const report = lint(result.markdown);
      expect(report.summary.errors).toBe(0);

      const totalTokens =
        report.designSystem.colors.size +
        report.designSystem.typography.size +
        report.designSystem.spacing.size +
        report.designSystem.rounded.size;
      expect(totalTokens).toBeGreaterThan(0);
    });
  }
});
