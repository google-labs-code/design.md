// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { safeWriteFile, UnsafeOutputPathError } from './safe-write.js';

function scratch(): string {
  return mkdtempSync(join(tmpdir(), 'safe-write-'));
}

describe('safeWriteFile', () => {
  it('writes a new file', () => {
    const dir = scratch();
    try {
      const p = join(dir, 'out.md');
      safeWriteFile(p, 'hello');
      expect(readFileSync(p, 'utf-8')).toBe('hello');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('overwrites an existing regular file', () => {
    const dir = scratch();
    try {
      const p = join(dir, 'out.md');
      writeFileSync(p, 'old');
      safeWriteFile(p, 'new');
      expect(readFileSync(p, 'utf-8')).toBe('new');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('refuses to overwrite a symlink (attacker-planted DESIGN.md)', () => {
    const dir = scratch();
    try {
      const victim = join(dir, 'victim.txt');
      const planted = join(dir, 'DESIGN.md');
      writeFileSync(victim, 'untouched');
      symlinkSync(victim, planted);

      let err: unknown;
      try {
        safeWriteFile(planted, 'pwned');
      } catch (e) {
        err = e;
      }
      expect(err).toBeInstanceOf(UnsafeOutputPathError);
      expect((err as UnsafeOutputPathError).code).toBe('UNSAFE_OUTPUT_PATH');
      // Victim file must remain untouched — no arbitrary write.
      expect(readFileSync(victim, 'utf-8')).toBe('untouched');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('rejects outputs outside the containment root', () => {
    const project = scratch();
    const outside = scratch();
    try {
      let err: unknown;
      try {
        safeWriteFile(join(outside, 'DESIGN.md'), 'x', { containWithin: project });
      } catch (e) {
        err = e;
      }
      expect(err).toBeInstanceOf(UnsafeOutputPathError);
    } finally {
      rmSync(project, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });

  it('rejects outputs whose parent directory is a symlink out of the root', () => {
    const project = scratch();
    const outside = scratch();
    try {
      // project/evil -> /tmp/outside
      symlinkSync(outside, join(project, 'evil'));
      let err: unknown;
      try {
        safeWriteFile(join(project, 'evil', 'DESIGN.md'), 'x', { containWithin: project });
      } catch (e) {
        err = e;
      }
      expect(err).toBeInstanceOf(UnsafeOutputPathError);
    } finally {
      rmSync(project, { recursive: true, force: true });
      rmSync(outside, { recursive: true, force: true });
    }
  });

  it('allows writing inside a nested subdirectory of containWithin', () => {
    const project = scratch();
    try {
      mkdirSync(join(project, 'docs'));
      safeWriteFile(join(project, 'docs', 'DESIGN.md'), 'ok', { containWithin: project });
      expect(readFileSync(join(project, 'docs', 'DESIGN.md'), 'utf-8')).toBe('ok');
    } finally {
      rmSync(project, { recursive: true, force: true });
    }
  });
});
