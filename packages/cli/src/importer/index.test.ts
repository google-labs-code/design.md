// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { readFileSync, existsSync, rmSync } from 'node:fs';
import { runImport } from './index.js';
import { lint } from '../linter/index.js';

const EX = join(import.meta.dir, '..', '..', '..', '..', 'examples', 'paws-and-paths');

describe('runImport', () => {
  it('VR-1: round-trips paws-and-paths into a lint-clean DESIGN.md', async () => {
    const events: string[] = [];
    const tmp = join(EX, 'DESIGN.generated.md');
    try {
      const result = await runImport({
        projectPath: EX,
        outputPath: tmp,
        dryRun: false,
        onStep: (s) => events.push(s.kind),
      });
      expect(result.success).toBe(true);
      expect(events).toContain('detect-done');
      expect(events).toContain('scan-done');
      expect(events).toContain('merge-done');
      expect(events).toContain('write-done');

      const md = readFileSync(tmp, 'utf-8');
      const report = lint(md);
      expect(report.summary.errors).toBe(0);

      expect(report.designSystem.colors.get('primary')?.hex).toBe('#855300');
      expect(report.designSystem.rounded.get('full')?.value).toBe(9999);
      expect(report.designSystem.spacing.get('gutter')?.value).toBe(16);
    } finally {
      rmSync(tmp, { force: true });
    }
  });

  it('dry-run does not write a file', async () => {
    const tmp = join(EX, 'DESIGN.generated.md');
    rmSync(tmp, { force: true });
    const r = await runImport({ projectPath: EX, outputPath: tmp, dryRun: true });
    expect(r.success).toBe(true);
    expect(r.markdown.length).toBeGreaterThan(0);
    expect(existsSync(tmp)).toBe(false);
  });

  it('refuses to write when DESIGN.md is a symlink in the project root', async () => {
    const { mkdtempSync, writeFileSync, symlinkSync, rmSync, readFileSync } = await import('node:fs');
    const { tmpdir } = await import('node:os');
    const project = mkdtempSync(join(import.meta.dir, 'tmp-sym-'));
    const outside = mkdtempSync(join(tmpdir(), 'victim-'));
    try {
      writeFileSync(join(project, 'package.json'), '{"name":"evil"}');
      writeFileSync(join(outside, 'secret'), 'original-content');
      symlinkSync(join(outside, 'secret'), join(project, 'DESIGN.md'));

      const events: string[] = [];
      const result = await runImport({
        projectPath: project,
        dryRun: false,
        onStep: (s) => events.push(s.kind),
      });
      expect(result.success).toBe(false);
      expect(events).toContain('error');
      // Victim file must be untouched — no arbitrary write.
      expect(readFileSync(join(outside, 'secret'), 'utf-8')).toBe('original-content');
    } finally {
      rmSync(project, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });

  it('emits parse-source events for each found source', async () => {
    const events: string[] = [];
    await runImport({
      projectPath: EX,
      dryRun: true,
      onStep: (s) => {
        if (s.kind === 'parse-source') events.push(s.source);
      },
    });
    // paws-and-paths has both tailwind.config.js and design_tokens.json
    expect(events).toContain('tailwind');
    expect(events).toContain('dtcg');
  });
});
