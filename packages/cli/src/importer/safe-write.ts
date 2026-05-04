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

import {
  closeSync,
  constants as fsConstants,
  lstatSync,
  openSync,
  realpathSync,
  writeSync,
} from 'node:fs';
import { dirname, resolve, sep } from 'node:path';

export class UnsafeOutputPathError extends Error {
  code = 'UNSAFE_OUTPUT_PATH';
  constructor(public readonly reason: string) {
    super(`refusing to write: ${reason}`);
  }
}

/**
 * Write a file safely in the presence of attacker-controlled directories.
 *
 *   - `O_NOFOLLOW` refuses to open if the final path component is a
 *     symlink, preventing pre-planted `DESIGN.md -> ~/.zshrc` attacks.
 *   - When `containWithin` is provided, the resolved parent directory
 *     must live under it — this catches a malicious project where
 *     `DESIGN.md` is a symlink and O_NOFOLLOW isn't honored (e.g. some
 *     network filesystems), or where the CLI's default output path was
 *     redirected through a symlinked subdirectory.
 *   - Refuses to overwrite existing symlinks even if O_NOFOLLOW failed
 *     to catch the case (belt-and-braces via `lstatSync`).
 */
export function safeWriteFile(
  outputPath: string,
  data: string,
  options: { containWithin?: string } = {},
): void {
  const abs = resolve(outputPath);
  const parent = dirname(abs);

  if (options.containWithin) {
    let resolvedParent: string;
    let resolvedRoot: string;
    try {
      resolvedParent = realpathSync(parent);
    } catch (err) {
      throw new UnsafeOutputPathError(
        `output parent directory does not exist: ${(err as Error).message}`,
      );
    }
    try {
      resolvedRoot = realpathSync(options.containWithin);
    } catch (err) {
      throw new UnsafeOutputPathError(
        `containment root does not exist: ${(err as Error).message}`,
      );
    }
    const rootPrefix = resolvedRoot.endsWith(sep) ? resolvedRoot : resolvedRoot + sep;
    if (resolvedParent !== resolvedRoot && !resolvedParent.startsWith(rootPrefix)) {
      throw new UnsafeOutputPathError('output would land outside the project root');
    }
  }

  // Reject an existing symlink outright. O_NOFOLLOW below catches most
  // cases but lstat gives a clearer error than an opaque EMLINK / ELOOP.
  try {
    const st = lstatSync(abs);
    if (st.isSymbolicLink()) {
      throw new UnsafeOutputPathError('output path is a symlink');
    }
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'ENOENT') throw err;
    // Path does not exist — fine, we're about to create it.
  }

  const flags =
    fsConstants.O_WRONLY |
    fsConstants.O_CREAT |
    fsConstants.O_TRUNC |
    // O_NOFOLLOW: refuse to traverse a symlink at the final path component.
    // On platforms that do not define it (rare), the bitwise OR with 0 is
    // a no-op; the lstat check above is the remaining defence.
    (fsConstants.O_NOFOLLOW ?? 0);

  // 0o644 — owner rw, others r. No exec bit.
  const fd = openSync(abs, flags, 0o644);
  try {
    writeSync(fd, data);
  } finally {
    closeSync(fd);
  }
}
