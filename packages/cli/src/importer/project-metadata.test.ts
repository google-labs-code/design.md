// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, basename } from 'node:path';
import { readProjectMetadata } from './project-metadata.js';

function scratchDir(): string {
  return mkdtempSync(join(tmpdir(), 'design-md-meta-'));
}

describe('readProjectMetadata', () => {
  it('reads name/description/version from package.json', () => {
    const dir = scratchDir();
    writeFileSync(
      join(dir, 'package.json'),
      JSON.stringify({ name: 'my-app', version: '1.2.3', description: 'hello' }),
    );
    const meta = readProjectMetadata(dir);
    expect(meta.name).toBe('my-app');
    expect(meta.description).toBe('hello');
    expect(meta.version).toBe('1.2.3');
  });

  it('falls back to directory basename when package.json is missing', () => {
    const dir = scratchDir();
    const meta = readProjectMetadata(dir);
    expect(meta.name).toBe(basename(dir));
    expect(meta.description).toBeUndefined();
  });

  it('picks up README H1 and first paragraph', () => {
    const dir = scratchDir();
    writeFileSync(join(dir, 'package.json'), JSON.stringify({ name: 'svc' }));
    writeFileSync(
      join(dir, 'README.md'),
      '# My Service\n\nA short explanation of what this does.\n\nSecond paragraph not included.\n',
    );
    const meta = readProjectMetadata(dir);
    expect(meta.readmeH1).toBe('My Service');
    expect(meta.readmeIntro).toBe('A short explanation of what this does.');
  });

  it('prefers README H1 over package.json name when both exist and differ', () => {
    const dir = scratchDir();
    writeFileSync(join(dir, 'package.json'), JSON.stringify({ name: '@scope/pkg' }));
    writeFileSync(join(dir, 'README.md'), '# Human Readable Name\n\nBlurb.\n');
    const meta = readProjectMetadata(dir);
    expect(meta.name).toBe('Human Readable Name');
  });

  it('skips lead badges/HTML when picking the first paragraph', () => {
    const dir = scratchDir();
    writeFileSync(
      join(dir, 'README.md'),
      '# App\n\n<p align="center"><img src="x.png" alt="logo" /></p>\n\nThe real intro paragraph.\n',
    );
    const meta = readProjectMetadata(dir);
    expect(meta.readmeIntro).toBe('The real intro paragraph.');
  });

  it('caps README intro length', () => {
    const dir = scratchDir();
    const long = 'x '.repeat(1000);
    writeFileSync(join(dir, 'README.md'), `# T\n\n${long}\n`);
    const meta = readProjectMetadata(dir);
    expect(meta.readmeIntro!.length).toBeLessThanOrEqual(500);
  });

  it('handles README.MD / readme.md casing and nested frontmatter', () => {
    const dir = scratchDir();
    mkdirSync(join(dir, 'sub'));
    writeFileSync(join(dir, 'readme.md'), '---\nfoo: bar\n---\n# Title\n\nIntro.\n');
    const meta = readProjectMetadata(dir);
    expect(meta.readmeH1).toBe('Title');
    expect(meta.readmeIntro).toBe('Intro.');
  });
});

describe('icon library detection', () => {
  it('maps lucide-react to library "Lucide"', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-lucide-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      dependencies: { 'lucide-react': '^0.300.0' },
    }));
    const md = readProjectMetadata(dir);
    expect(md.icons?.library).toBe('Lucide');
  });

  it('maps @heroicons/react to library "Heroicons"', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-hero-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      devDependencies: { '@heroicons/react': '^2.0.0' },
    }));
    const md = readProjectMetadata(dir);
    expect(md.icons?.library).toBe('Heroicons');
  });

  it('maps @mui/icons-material to library "Material Symbols"', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-mui-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      dependencies: { '@mui/icons-material': '^5.0.0' },
    }));
    const md = readProjectMetadata(dir);
    expect(md.icons?.library).toBe('Material Symbols');
  });

  it('maps phosphor-react to library "Phosphor"', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-phos-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      dependencies: { 'phosphor-react': '^1.0.0' },
    }));
    const md = readProjectMetadata(dir);
    expect(md.icons?.library).toBe('Phosphor');
  });

  it('returns no icons field when no recognized library present', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-none-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      dependencies: { react: '^18.0.0' },
    }));
    const md = readProjectMetadata(dir);
    expect(md.icons).toBeUndefined();
  });

  it('first LIBRARY_RULES match wins: Lucide before Heroicons when both present', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-multi-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      dependencies: {
        'lucide-react': '^0.300.0',
        '@heroicons/react': '^2.0.0',
      },
    }));
    const md = readProjectMetadata(dir);
    // Lucide appears first in LIBRARY_RULES.
    expect(md.icons?.library).toBe('Lucide');
  });

  it('treats non-string version values as a present dep (presence-of-key signal)', () => {
    const dir = mkdtempSync(join(tmpdir(), 'icon-bad-'));
    writeFileSync(join(dir, 'package.json'), JSON.stringify({
      name: 'x',
      dependencies: { 'lucide-react': { malicious: true } },
    }));
    const md = readProjectMetadata(dir);
    // We never inspect the version value; presence of the key is the signal.
    expect(md.icons?.library).toBe('Lucide');
  });
});
