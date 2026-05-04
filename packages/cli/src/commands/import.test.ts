// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import importCommand from './import.js';

describe('import command metadata', () => {
  it('has name "import" and required args', async () => {
    const meta = typeof importCommand.meta === 'function'
      ? await importCommand.meta()
      : importCommand.meta;
    const args = typeof importCommand.args === 'function'
      ? await importCommand.args()
      : importCommand.args;

    expect(meta?.name).toBe('import');
    expect(args?.input).toBeDefined();
    expect(args?.output).toBeDefined();
    expect(args?.dryRun).toBeDefined();
    expect(args?.format).toBeDefined();
  });
});
