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

import { describe, it, expect, spyOn } from 'bun:test';
import { readInput, FileReadError, formatOutput } from './utils.js';
import type { StdinStream } from './utils.js';

function makeStdin(content: string, isTTY: boolean): StdinStream {
  async function* gen() { yield Buffer.from(content); }
  return Object.assign(gen(), { isTTY });
}

describe('readInput', () => {
  it('throws FileReadError when file does not exist', async () => {
    const err = await readInput('/nonexistent-path/DESIGN.md').catch(e => e);
    expect(err).toBeInstanceOf(FileReadError);
  });

  it('FileReadError carries the missing file path', async () => {
    const err = await readInput('/nonexistent-path/DESIGN.md').catch(e => e);
    expect((err as FileReadError).filePath).toBe('/nonexistent-path/DESIGN.md');
  });

  it('FileReadError carries the underlying OS error message', async () => {
    const err = await readInput('/nonexistent-path/DESIGN.md').catch(e => e);
    expect((err as FileReadError).message).toContain('ENOENT');
  });

  it('friendlyMessage says "not found" for ENOENT', async () => {
    const err = await readInput('/nonexistent-path/DESIGN.md').catch(e => e);
    expect((err as FileReadError).friendlyMessage).toContain('not found');
  });

  it('friendlyMessage says "permission denied" for EACCES', () => {
    const cause = Object.assign(new Error('EACCES: permission denied'), { code: 'EACCES' });
    const err = new FileReadError('/some/file.md', cause);
    expect(err.friendlyMessage).toContain('permission denied');
    expect(err.friendlyMessage).not.toContain('not found');
  });

  it('friendlyMessage falls back to the raw message for unknown errors', () => {
    const cause = Object.assign(new Error('ENOMEM: out of memory'), { code: 'ENOMEM' });
    const err = new FileReadError('/some/file.md', cause);
    expect(err.friendlyMessage).toContain('ENOMEM');
  });
});

describe('readInput stdin ("-")', () => {
  it('reads content from a piped stream', async () => {
    const result = await readInput('-', makeStdin('hello world', false));
    expect(result).toBe('hello world');
  });

  it('returns empty string for an empty piped stream', async () => {
    async function* empty() {}
    const result = await readInput('-', Object.assign(empty(), { isTTY: false }));
    expect(result).toBe('');
  });

  it('writes a hint to stderr when stdin is a TTY', async () => {
    const stderrSpy = spyOn(process.stderr, 'write').mockImplementation(() => true);
    try {
      await readInput('-', makeStdin('some content', true));
      expect(stderrSpy).toHaveBeenCalledWith(
        expect.stringContaining('Press Ctrl+D')
      );
    } finally {
      stderrSpy.mockRestore();
    }
  });

  it('does not write a hint when stdin is not a TTY', async () => {
    const stderrSpy = spyOn(process.stderr, 'write').mockImplementation(() => true);
    try {
      await readInput('-', makeStdin('piped content', false));
      expect(stderrSpy).not.toHaveBeenCalled();
    } finally {
      stderrSpy.mockRestore();
    }
  });
});

describe('formatOutput', () => {
  describe('--format markdown', () => {
    it('renders a lint report instead of [object Object]', () => {
      const lintOutput = {
        findings: [
          { severity: 'warning', path: 'colors.surface', message: "'surface' is defined but never referenced." },
          { severity: 'info', message: 'Design system defines 10 colors.' },
        ],
        summary: { errors: 0, warnings: 1, infos: 1 },
      };

      const result = formatOutput(lintOutput, { format: 'markdown' });
      expect(result).not.toContain('[object Object]');
      expect(result).toContain('# Lint Report');
      expect(result).toContain('**0 errors**');
      expect(result).toContain('**1 warnings**');
      expect(result).toContain('**1 infos**');
      expect(result).toContain("'surface' is defined but never referenced.");
      expect(result).toContain('`colors.surface`');
    });

    it('renders findings without a path', () => {
      const lintOutput = {
        findings: [
          { severity: 'info', message: 'Token count summary.' },
        ],
        summary: { errors: 0, warnings: 0, infos: 1 },
      };

      const result = formatOutput(lintOutput, { format: 'markdown' });
      expect(result).toContain('- **info**: Token count summary.');
    });

    it('renders an empty findings section when there are none', () => {
      const lintOutput = {
        findings: [],
        summary: { errors: 0, warnings: 0, infos: 0 },
      };

      const result = formatOutput(lintOutput, { format: 'markdown' });
      expect(result).toContain('# Lint Report');
      expect(result).not.toContain('## Findings');
    });

    it('handles the --format md alias', () => {
      const lintOutput = {
        findings: [],
        summary: { errors: 0, warnings: 0, infos: 0 },
      };

      const result = formatOutput(lintOutput, { format: 'md' });
      expect(result).toContain('# Lint Report');
    });

    it('preserves legacy fixer shape with string summary', () => {
      const fixerOutput = {
        summary: 'Fixed 3 issues',
        details: 'Some details here',
      };

      const result = formatOutput(fixerOutput, { format: 'markdown' });
      expect(result).toContain('# Fixed 3 issues');
      expect(result).toContain('## Details');
    });
  });

  describe('default format (JSON)', () => {
    it('returns valid JSON', () => {
      const data = { findings: [], summary: { errors: 0, warnings: 0, infos: 0 } };
      const result = formatOutput(data, {});
      expect(JSON.parse(result)).toEqual(data);
    });
  });
});
