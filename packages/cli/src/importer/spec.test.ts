// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import type { ImportStep, ImportOptions, ImportResult } from './spec.js';

describe('importer spec types', () => {
  it('ImportStep discriminated union covers all stages', () => {
    const s1: ImportStep = { kind: 'detect-start', projectPath: '/x' };
    const s2: ImportStep = {
      kind: 'detect-done',
      framework: { name: 'next', confidence: 'high', evidence: [] },
    };
    const s3: ImportStep = { kind: 'scan-start' };
    const s4: ImportStep = {
      kind: 'scan-done',
      sources: { tailwindConfigs: [], cssFiles: [], dtcgFiles: [] },
    };
    const s5: ImportStep = {
      kind: 'parse-source',
      source: 'tailwind',
      path: '/tw',
      counts: { colors: 1, typography: 0, spacing: 0, rounded: 0 },
    };
    const s6: ImportStep = {
      kind: 'parse-skip',
      source: 'css',
      path: '/c',
      reason: 'empty',
    };
    const s7: ImportStep = {
      kind: 'merge-done',
      totals: { colors: 1, typography: 0, spacing: 0, rounded: 0, components: 0 },
    };
    const s8: ImportStep = { kind: 'write-done', outputPath: '/x', bytes: 42 };
    const s9: ImportStep = { kind: 'error', message: 'boom' };

    const all = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
    expect(all.length).toBe(9);
    expect(new Set(all.map((s) => s.kind)).size).toBe(9);
  });

  it('ImportOptions accepts step callback', () => {
    const opts: ImportOptions = {
      projectPath: '/p',
      dryRun: true,
      onStep: (s) => {
        expect(s.kind).toBeDefined();
      },
    };
    expect(opts.projectPath).toBe('/p');
  });

  it('ImportResult shape compiles', () => {
    const r: ImportResult = {
      success: true,
      markdown: '---\nname: X\n---\n',
      framework: { name: 'unknown', confidence: 'low', evidence: [] },
      sources: { tailwindConfigs: [], cssFiles: [], dtcgFiles: [] },
      warnings: [],
    };
    expect(r.success).toBe(true);
  });
});
