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

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';

const CLI = join(import.meta.dir, '../index.ts');

function runCli(args: string[]): { code: number | null; stdout: string; stderr: string } {
  const proc = Bun.spawnSync(['bun', 'run', CLI, ...args], { stdout: 'pipe', stderr: 'pipe' });
  return {
    code: proc.exitCode,
    stdout: Buffer.from(proc.stdout).toString('utf-8'),
    stderr: Buffer.from(proc.stderr).toString('utf-8'),
  };
}

describe('CLI error output', () => {
  it('exits 2 with a friendly error and no stack trace when the input file is missing', () => {
    const { code, stdout, stderr } = runCli(['lint', 'definitely-does-not-exist-90af.md']);
    expect(code).toBe(2);
    expect(stdout).toBe('');
    // Exactly one line on stderr — no second, stack-trace error.
    const lines = stderr.trim().split('\n').filter(Boolean);
    expect(lines.length).toBe(1);
    expect(lines[0]).toContain('not found');
    expect(lines[0]).toContain('definitely-does-not-exist-90af.md');
  });

  it('reports an unknown export format with a coded error envelope and exit 1', () => {
    // Format is validated before any input is read, so the file path is unused.
    const { code, stderr } = runCli(['export', '--format', 'bogus', 'unused.md']);
    expect(code).toBe(1);
    const err = JSON.parse(stderr.trim());
    expect(err.error).toBe('INVALID_FORMAT');
    expect(err.message).toContain('Invalid format');
  });
});
