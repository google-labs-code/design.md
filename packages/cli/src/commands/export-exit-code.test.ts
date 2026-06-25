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

import { describe, it, expect, afterAll } from 'bun:test';
import { join } from 'node:path';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';

const CLI = join(import.meta.dir, '../index.ts');

function run(args: string[]): { code: number | null; stdout: string } {
  const proc = Bun.spawnSync(['bun', 'run', CLI, ...args], { stdout: 'pipe', stderr: 'pipe' });
  return { code: proc.exitCode, stdout: Buffer.from(proc.stdout).toString('utf-8') };
}

describe('export exit code', () => {
  const dir = mkdtempSync(join(tmpdir(), 'designmd-export-'));
  const badFile = join(dir, 'DESIGN.md');
  // An invalid color is a lint *error*, but the export itself still succeeds.
  writeFileSync(badFile, '---\ncolors:\n  primary: "notacolor"\n---\n## Colors\n');

  afterAll(() => rmSync(dir, { recursive: true, force: true }));

  it('exits 0 on a successful export even when the source has lint errors', () => {
    const { code, stdout } = run(['export', '--format', 'json-tailwind', badFile]);
    expect(code).toBe(0);
    expect(stdout.trim().length).toBeGreaterThan(0);
  });

  it('lint still exits 1 on the same source (the validation gate)', () => {
    const { code } = run(['lint', badFile]);
    expect(code).toBe(1);
  });
});
