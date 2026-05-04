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

import { homedir } from 'node:os';
import { basename } from 'node:path/posix';

const HOME = homedir();

// POSIX: `/` followed by 2+ path segments. A segment is 1+ characters that
// are NOT whitespace, quote, path-stop punctuation, or `/` itself — so the
// regex engine walks one segment per `/` and doesn't swallow URL hosts.
// The negative lookbehind `(?<![:a-zA-Z])` prevents matching inside URL
// schemes like `https://example.com` (the `/` after `:` is rejected).
const ABSOLUTE_PATH_RE = /(?<![:a-zA-Z/])(?:\/[^\s'"`:,;<>()\[\]{}/]+){2,}/g;
// Windows drive-letter paths: C:\foo\bar.
const WINDOWS_PATH_RE = /[A-Za-z]:\\(?:[^\s'"`:,;<>()\[\]{}\\]+\\?){1,128}/g;

function trailingBasenamePosix(m: string): string {
  return basename(m);
}

function trailingBasenameWindows(m: string): string {
  const parts = m.split('\\').filter((p) => p.length > 0);
  return parts[parts.length - 1] ?? m;
}

/**
 * Replace absolute paths with their basename and the user's home directory
 * with `~`. Keeps error messages informative ("cannot open DESIGN.md")
 * while stripping local-machine leakage ("/Users/alice/secret/…"), even
 * when paths contain spaces, unicode, or non-ASCII characters.
 */
export function redactPaths(message: string): string {
  let out = message;
  if (HOME && HOME.length > 2) {
    out = out.split(HOME).join('~');
  }
  out = out.replace(WINDOWS_PATH_RE, trailingBasenameWindows);
  out = out.replace(ABSOLUTE_PATH_RE, trailingBasenamePosix);
  return out;
}

interface SanitizedError {
  code: string;
  message?: string;
}

/**
 * Produce a machine-readable error suitable for stderr.
 *
 * Defaults to a CODE-ONLY envelope (e.g. `{ code: 'ENOENT' }`): no
 * freeform message, because raw `err.message` can leak filesystem
 * layout, environment hints, or the specific file that failed. The
 * code alone is enough for a machine consumer to react on.
 *
 * Pass `includeMessage: true` when the caller is confident the
 * destination is trusted (e.g. `--verbose` set by an interactive
 * developer on their own machine). Even then, paths and $HOME are
 * redacted before emission.
 */
export function sanitizeError(
  err: unknown,
  opts: { includeMessage?: boolean; fallbackCode?: string } = {},
): SanitizedError {
  const fallbackCode = opts.fallbackCode ?? 'IMPORT_FAILED';
  let code = fallbackCode;
  let rawMessage = '';
  if (err instanceof Error) {
    const withCode = err as Error & { code?: string };
    if (typeof withCode.code === 'string') code = withCode.code;
    rawMessage = err.message || String(err);
  } else {
    rawMessage = String(err);
  }
  if (opts.includeMessage && rawMessage) {
    return { code, message: redactPaths(rawMessage) };
  }
  return { code };
}
