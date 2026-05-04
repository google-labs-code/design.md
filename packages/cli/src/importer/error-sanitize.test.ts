// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { homedir } from 'node:os';
import { redactPaths, sanitizeError } from './error-sanitize.js';

describe('redactPaths', () => {
  it('replaces user home directory with ~', () => {
    const msg = `ENOENT: no such file ${homedir()}/projects/foo/DESIGN.md`;
    const out = redactPaths(msg);
    expect(out).not.toContain(homedir());
    expect(out).toContain('~');
  });

  it('reduces absolute POSIX paths to basename', () => {
    const msg = 'EACCES: permission denied /var/lib/db/prod.sqlite';
    const out = redactPaths(msg);
    expect(out).not.toContain('/var/lib/db/');
    expect(out).toContain('prod.sqlite');
  });

  it('reduces Windows paths to basename', () => {
    const msg = "could not open C:\\Users\\alice\\secret\\proj\\config.js";
    const out = redactPaths(msg);
    expect(out).not.toContain('Users\\alice');
    expect(out).toContain('config.js');
  });

  it('leaves unrelated text alone', () => {
    expect(redactPaths('invalid syntax near {')).toBe('invalid syntax near {');
  });

  it('redacts the identifying segments of POSIX paths even with spaces', () => {
    // Space-containing paths are inherently ambiguous for regex-based
    // redaction (we can't know where the path ends without parsing). The
    // important thing is that usernames / home-dir segments are gone —
    // fragments following the first space in the path may survive.
    const out = redactPaths('cannot open /Users/alice/Client Projects/acme/DESIGN.md');
    expect(out).not.toContain('/Users/');
    expect(out).not.toContain('alice');
    expect(out).toContain('DESIGN.md');
  });

  it('redacts POSIX paths containing non-ASCII segments', () => {
    const out = redactPaths('EACCES: /Users/mañana/projekt/tailwind.config.js');
    expect(out).not.toContain('mañana');
    expect(out).toContain('tailwind.config.js');
  });

  it('does not expand paths with embedded URL-like segments unsafely', () => {
    // Something like "open https://foo.com/bar" must not be mistaken for
    // a filesystem path — the regex matches only 2+ segments starting
    // with `/`, so this is safe. Check it does not over-redact.
    const out = redactPaths('fetch https://example.com/api/v1');
    expect(out).toContain('example.com');
  });

  it('is linear on pathological inputs (no ReDoS)', () => {
    const evil = '/a'.repeat(50000);
    const started = Date.now();
    redactPaths(evil);
    const elapsed = Date.now() - started;
    expect(elapsed).toBeLessThan(500);
  });
});

describe('sanitizeError', () => {
  it('defaults to code-only (no message leak)', () => {
    const e = Object.assign(new Error(`secret path ${homedir()}/x`), { code: 'ENOENT' });
    const s = sanitizeError(e);
    expect(s.code).toBe('ENOENT');
    expect(s.message).toBeUndefined();
  });

  it('falls back to IMPORT_FAILED for codeless errors', () => {
    const s = sanitizeError(new Error('generic'));
    expect(s.code).toBe('IMPORT_FAILED');
    expect(s.message).toBeUndefined();
  });

  it('includes a redacted message only when caller opts in', () => {
    const e = new Error(`cannot read ${homedir()}/secret/file.css`);
    const s = sanitizeError(e, { includeMessage: true });
    expect(s.message).toBeDefined();
    expect(s.message).not.toContain(homedir());
  });

  it('handles non-Error throwables without leaking a message', () => {
    const s = sanitizeError('string-throw');
    expect(s.code).toBe('IMPORT_FAILED');
    expect(s.message).toBeUndefined();
  });
});
