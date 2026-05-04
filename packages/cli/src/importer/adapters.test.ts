// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runImport } from './index.js';
import { BUILTIN_ADAPTERS } from './adapters.js';
import type { PartialState } from './merger.js';
import type { ScanResult, SourceAdapter } from './spec.js';
import type { ResolvedColor } from '../linter/model/spec.js';

describe('SourceAdapter contract', () => {
  it('registers built-in adapters in CSS → DTCG order (least → most structured wins)', () => {
    expect(BUILTIN_ADAPTERS.map((a) => a.kind)).toEqual(['css', 'dtcg']);
  });

  it('runImport accepts a custom adapter set — adding a new source needs no orchestrator change', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'adapter-contract-'));
    try {
      writeFileSync(join(dir, 'package.json'), '{"name":"p"}');

      // A toy adapter that selects every CSS file and returns a fixed
      // colors map. The orchestrator iterates whatever's in the registry.
      const toyAdapter: SourceAdapter = {
        kind: 'css',
        selectFiles: (_scan: ScanResult) => ['ignored.css'],
        parse: (_path: string): PartialState => ({
          colors: new Map<string, ResolvedColor>([
            ['toy', { type: 'color', hex: '#abcdef', r: 0, g: 0, b: 0, luminance: 0 }],
          ]),
        }),
      };

      const result = await runImport({ projectPath: dir, dryRun: true }, [toyAdapter]);
      expect(result.success).toBe(true);
      expect(result.markdown).toContain('toy:');
      expect(result.markdown).toContain('#abcdef');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
