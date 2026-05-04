// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { runImport } from './index.js';
import { lint } from '../linter/index.js';

const F = (name: string): string => join(import.meta.dir, 'fixtures', name);

// Fixtures are named by the SHAPE of their token sources, not by which
// framework generated them. The importer doesn't care about Next/Vue/etc.
// internals — it only reads CSS @theme/:root and DTCG token files.
const CASES = ['theme-css-fixture', 'mixed-sources-fixture', 'dtcg-only-fixture'];

describe('VR-2: end-to-end import across token-source shapes', () => {
  for (const dir of CASES) {
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

describe('icons-mixed-fixture e2e', () => {
  const FIXTURE = join(import.meta.dir, 'fixtures', 'icons-mixed-fixture');

  it('imports icons from all three sources and the output lints cleanly', async () => {
    const result = await runImport({
      projectPath: FIXTURE,
      dryRun: true,
    });
    expect(result.success).toBe(true);

    expect(result.markdown).toMatch(/^### Iconography$/m);
    expect(result.markdown).toContain('icons:');

    // Library from package.json (lucide-react -> Lucide).
    expect(result.markdown).toMatch(/library: Lucide/);
    // Style from DTCG.
    expect(result.markdown).toMatch(/style: outlined/);
    // strokeWidth from CSS.
    expect(result.markdown).toMatch(/strokeWidth: 1\.5/);
    // Grid from CSS.
    expect(result.markdown).toMatch(/grid: 24px/);
    // Size from CSS (the test asserts the leaves; YAML indentation may
    // be 2 or 4 spaces depending on yaml lib defaults — we pinned 2).
    expect(result.markdown).toMatch(/sm: 16px/);
    expect(result.markdown).toMatch(/md: 24px/);
    expect(result.markdown).toMatch(/lg: 32px/);
    // Color token ref from DTCG (must be quoted in YAML output).
    expect(result.markdown).toMatch(/color: ['"]\{colors\.primary\}['"]/);

    // Lint passes with zero errors. The main-branch linter silently
    // ignores the unknown `icons:` frontmatter key and the unknown
    // `## Iconography` section, so emitted output round-trips.
    const report = lint(result.markdown);
    expect(report.summary.errors).toBe(0);
  });
});
