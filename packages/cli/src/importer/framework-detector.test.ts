// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { detectFramework } from './framework-detector.js';

const F = (name: string): string => join(import.meta.dir, 'fixtures', name);

// Framework detection is exercised against synthetic minimal projects so
// the test isn't coupled to whatever shape the importer fixtures happen to
// take this week. Each project is a temp dir with a package.json (and
// optionally a config file) — nothing else.
function makeProject(pkg: object, files: Record<string, string> = {}): string {
  const dir = mkdtempSync(join(tmpdir(), 'fwk-detect-'));
  writeFileSync(join(dir, 'package.json'), JSON.stringify(pkg));
  for (const [name, body] of Object.entries(files)) {
    writeFileSync(join(dir, name), body);
  }
  return dir;
}

describe('detectFramework', () => {
  it('detects Next.js by dep + config', () => {
    const dir = makeProject(
      { name: 'p', dependencies: { next: '^14.2.0', react: '^18.0.0' } },
      { 'next.config.js': 'module.exports = {};' },
    );
    try {
      const info = detectFramework(dir);
      expect(info.name).toBe('next');
      expect(info.confidence).toBe('high');
      expect(info.version).toBe('^14.2.0');
      expect(info.evidence.some((e) => e.includes('next'))).toBe(true);
      expect(info.evidence.some((e) => e.includes('next.config'))).toBe(true);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('detects Vite', () => {
    const dir = makeProject(
      { name: 'p', devDependencies: { vite: '^5.0.0' }, dependencies: { react: '^18.0.0' } },
      { 'vite.config.ts': 'export default {};' },
    );
    try {
      const info = detectFramework(dir);
      expect(info.name).toBe('vite');
      expect(info.confidence).toBe('high');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('detects Nuxt', () => {
    const dir = makeProject({ name: 'p', dependencies: { nuxt: '^3.13.0' } });
    try {
      const info = detectFramework(dir);
      expect(info.name).toBe('nuxt');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it('falls back to "node" when no known framework', () => {
    const info = detectFramework(F('plain-node'));
    expect(info.name).toBe('node');
    expect(info.confidence).toBe('low');
  });

  it('returns "unknown" when no package.json', () => {
    const info = detectFramework(join(import.meta.dir, 'fixtures'));
    expect(info.name).toBe('unknown');
  });

  it('does not pollute Object.prototype from a malicious package.json', () => {
    const dir = mkdtempSync(join(tmpdir(), 'evil-pkg-'));
    try {
      writeFileSync(
        join(dir, 'package.json'),
        JSON.stringify({
          name: 'evil',
          dependencies: {
            __proto__: { polluted: 'YES' },
            constructor: { prototype: { polluted: 'YES' } },
            react: '^18.0.0',
          },
        }),
      );
      const info = detectFramework(dir);
      // React dep is still detected; dangerous keys are dropped.
      expect(info.name).toBe('node');
      // Host Object.prototype untouched.
      expect(({} as Record<string, unknown>)['polluted']).toBeUndefined();
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
