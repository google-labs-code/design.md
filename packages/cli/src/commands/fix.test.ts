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

import { describe, it, expect, beforeEach, afterEach, spyOn } from 'bun:test';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import fixCommand from './fix.js';
import lintCommand from './lint.js';

const OUT_OF_ORDER = `---
name: Test
colors:
  primary: '#000000'
---

## Colors

Colors body.

## Overview

Overview body.
`;

function makeTempFile(content: string, name = 'DESIGN.md'): string {
  const dir = mkdtempSync(join(tmpdir(), 'designmd-fix-'));
  const path = join(dir, name);
  writeFileSync(path, content, 'utf-8');
  return path;
}

describe('fix command', () => {
  let stdoutSpy: any;
  let logSpy: any;

  beforeEach(() => {
    stdoutSpy = spyOn(process.stdout, 'write').mockImplementation(() => true);
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    stdoutSpy.mockRestore();
    logSpy.mockRestore();
  });

  it('writes fixed content to stdout by default', async () => {
    const path = makeTempFile(OUT_OF_ORDER);
    await fixCommand.run!({ args: { file: path, format: 'json' } } as any);

    expect(stdoutSpy.mock.calls.length).toBe(1);
    const written = stdoutSpy.mock.calls[0][0];
    expect(written.indexOf('## Overview')).toBeLessThan(written.indexOf('## Colors'));

    // Original file is untouched
    expect(readFileSync(path, 'utf-8')).toBe(OUT_OF_ORDER);
  });

  it('rewrites the input file when --write is passed', async () => {
    const path = makeTempFile(OUT_OF_ORDER);
    await fixCommand.run!({ args: { file: path, write: true, format: 'json' } } as any);

    const updated = readFileSync(path, 'utf-8');
    expect(updated.indexOf('## Overview')).toBeLessThan(updated.indexOf('## Colors'));
    expect(logSpy.mock.calls.length).toBe(1);
  });
});

describe('lint --fix flag', () => {
  let logSpy: any;

  beforeEach(() => {
    logSpy = spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('reorders sections in place and reports the fix', async () => {
    const path = makeTempFile(OUT_OF_ORDER);
    await lintCommand.run!({ args: { file: path, fix: true, format: 'json' } } as any);

    const updated = readFileSync(path, 'utf-8');
    expect(updated.indexOf('## Overview')).toBeLessThan(updated.indexOf('## Colors'));

    expect(logSpy.mock.calls.length).toBe(1);
    const output = JSON.parse(logSpy.mock.calls[0][0]);
    expect(output.fixed.beforeOrder).toEqual(['Colors', 'Overview']);
    expect(output.fixed.afterOrder).toEqual(['Overview', 'Colors']);
  });
});
