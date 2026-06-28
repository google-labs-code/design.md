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

import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { afterEach, describe, expect, it, spyOn } from 'bun:test';
import exportCommand from './export.js';

const DESIGN = `---
version: alpha
name: Finding Repro
colors:
  primary: "#000000"
  on-primary: "#ffffff"
components:
  header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
---

## Overview

Repro.
`;

describe('export command', () => {
  afterEach(() => {
    process.exitCode = undefined;
  });

  it('emits exactly one trailing newline for css-tailwind output', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'designmd-export-'));
    const designPath = join(dir, 'DESIGN.md');
    writeFileSync(designPath, DESIGN);
    const writeSpy = spyOn(process.stdout, 'write').mockImplementation(() => true);
    let output = '';

    try {
      await exportCommand.run!({
        args: {
          file: designPath,
          format: 'css-tailwind',
        },
      } as any);
      expect(writeSpy.mock.calls.length).toBe(1);
      output = String(writeSpy.mock.calls[0][0]);
    } finally {
      writeSpy.mockRestore();
      rmSync(dir, { recursive: true, force: true });
    }

    expect(output).toEndWith('\n');
    expect(output).not.toEndWith('\n\n');
  });
});
