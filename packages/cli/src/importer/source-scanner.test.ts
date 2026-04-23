// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { scanSources } from './source-scanner.js';

const F = (name: string): string => join(import.meta.dir, 'fixtures', name);

describe('scanSources', () => {
  it('finds tailwind configs and CSS files in Next.js project', () => {
    const r = scanSources(F('next-minimal'), 'next');
    expect(r.tailwindConfigs.some((p) => p.endsWith('tailwind.config.js'))).toBe(true);
    expect(r.cssFiles.some((p) => p.endsWith('globals.css'))).toBe(true);
  });

  it('skips node_modules', () => {
    const r = scanSources(F('next-minimal'), 'next');
    expect(r.tailwindConfigs.every((p) => !p.includes('node_modules'))).toBe(true);
    expect(r.cssFiles.every((p) => !p.includes('node_modules'))).toBe(true);
  });

  it('finds DTCG tokens.json when present', () => {
    const r = scanSources(F('vite-react-minimal'), 'vite');
    expect(r.dtcgFiles.some((p) => p.endsWith('tokens.json'))).toBe(true);
  });

  it('finds Nuxt assets/css paths', () => {
    const r = scanSources(F('nuxt-minimal'), 'nuxt');
    expect(r.cssFiles.some((p) => p.endsWith('main.css'))).toBe(true);
  });

  it('returns all three categories as arrays (never undefined)', () => {
    const r = scanSources(F('plain-node'), 'node');
    expect(Array.isArray(r.tailwindConfigs)).toBe(true);
    expect(Array.isArray(r.cssFiles)).toBe(true);
    expect(Array.isArray(r.dtcgFiles)).toBe(true);
  });

  describe('vendor / bundle filtering', () => {
    it('skips CSS files under charting_library/bundles', async () => {
      const { mkdirSync, writeFileSync, rmSync } = await import('node:fs');
      const { tmpdir } = await import('node:os');
      const { mkdtempSync } = await import('node:fs');
      const root = mkdtempSync(join(tmpdir(), 'scan-vendor-'));
      try {
        mkdirSync(join(root, 'src', 'assets', 'charting_library', 'bundles'), { recursive: true });
        writeFileSync(join(root, 'src', 'assets', 'charting_library', 'bundles', 'a.css'), ':root {}');
        writeFileSync(join(root, 'src', 'app.css'), ':root {}');
        const r = scanSources(root, 'node');
        expect(r.cssFiles.some((p) => p.endsWith('app.css'))).toBe(true);
        expect(r.cssFiles.every((p) => !p.includes('charting_library'))).toBe(true);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    });

    it('skips *.min.css and *.rtl.css', async () => {
      const { mkdirSync, writeFileSync, rmSync, mkdtempSync } = await import('node:fs');
      const { tmpdir } = await import('node:os');
      const root = mkdtempSync(join(tmpdir(), 'scan-min-'));
      try {
        mkdirSync(join(root, 'src'), { recursive: true });
        writeFileSync(join(root, 'src', 'styles.css'), ':root {}');
        writeFileSync(join(root, 'src', 'styles.min.css'), ':root {}');
        writeFileSync(join(root, 'src', 'styles.rtl.css'), ':root {}');
        const r = scanSources(root, 'node');
        expect(r.cssFiles.filter((p) => p.endsWith('styles.css')).length).toBe(1);
        expect(r.cssFiles.every((p) => !p.endsWith('.min.css'))).toBe(true);
        expect(r.cssFiles.every((p) => !p.endsWith('.rtl.css'))).toBe(true);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    });

    it('skips hashed bundler output names', async () => {
      const { mkdirSync, writeFileSync, rmSync, mkdtempSync } = await import('node:fs');
      const { tmpdir } = await import('node:os');
      const root = mkdtempSync(join(tmpdir(), 'scan-hash-'));
      try {
        mkdirSync(join(root, 'src'), { recursive: true });
        writeFileSync(join(root, 'src', '1996.25e6f30e7a095ec239f4.css'), ':root {}');
        writeFileSync(join(root, 'src', 'app.css'), ':root {}');
        const r = scanSources(root, 'node');
        expect(r.cssFiles.some((p) => p.endsWith('app.css'))).toBe(true);
        expect(r.cssFiles.every((p) => !/\.[0-9a-f]{12,}\.css$/.test(p))).toBe(true);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    });

    it('skips symlinks (prevents escape out of project root)', async () => {
      const { mkdirSync, writeFileSync, symlinkSync, rmSync, mkdtempSync } = await import('node:fs');
      const { tmpdir } = await import('node:os');
      const outsideRoot = mkdtempSync(join(tmpdir(), 'scan-outside-'));
      const projectRoot = mkdtempSync(join(tmpdir(), 'scan-symlink-'));
      try {
        writeFileSync(join(outsideRoot, 'leaked.css'), ':root { --secret: #deadbe; }');
        writeFileSync(join(outsideRoot, 'leaked.tokens.json'), '{}');
        mkdirSync(join(projectRoot, 'src'));
        writeFileSync(join(projectRoot, 'src', 'ok.css'), ':root {}');
        symlinkSync(join(outsideRoot, 'leaked.css'), join(projectRoot, 'src', 'evil.css'));
        symlinkSync(join(outsideRoot, 'leaked.tokens.json'), join(projectRoot, 'src', 'evil.tokens.json'));
        symlinkSync(outsideRoot, join(projectRoot, 'link-to-outside'));
        const r = scanSources(projectRoot, 'node');
        expect(r.cssFiles.some((p) => p.endsWith('ok.css'))).toBe(true);
        expect(r.cssFiles.some((p) => p.endsWith('evil.css'))).toBe(false);
        expect(r.cssFiles.some((p) => p.includes('leaked'))).toBe(false);
        expect(r.dtcgFiles.some((p) => p.includes('leaked'))).toBe(false);
        expect(r.cssFiles.some((p) => p.includes('link-to-outside'))).toBe(false);
      } finally {
        rmSync(projectRoot, { recursive: true, force: true });
        rmSync(outsideRoot, { recursive: true, force: true });
      }
    });

    it('skips files under a "public" directory', async () => {
      const { mkdirSync, writeFileSync, rmSync, mkdtempSync } = await import('node:fs');
      const { tmpdir } = await import('node:os');
      const root = mkdtempSync(join(tmpdir(), 'scan-public-'));
      try {
        mkdirSync(join(root, 'public'), { recursive: true });
        mkdirSync(join(root, 'src'), { recursive: true });
        writeFileSync(join(root, 'public', 'vendor.css'), ':root {}');
        writeFileSync(join(root, 'src', 'app.css'), ':root {}');
        const r = scanSources(root, 'node');
        expect(r.cssFiles.every((p) => !p.includes('/public/'))).toBe(true);
      } finally {
        rmSync(root, { recursive: true, force: true });
      }
    });
  });
});
