// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import { join } from 'node:path';
import { detectFramework } from './framework-detector.js';

const F = (name: string): string => join(import.meta.dir, 'fixtures', name);

describe('detectFramework', () => {
  it('detects Next.js by dep + config', () => {
    const info = detectFramework(F('next-minimal'));
    expect(info.name).toBe('next');
    expect(info.confidence).toBe('high');
    expect(info.version).toBe('^14.2.0');
    expect(info.evidence.some((e) => e.includes('next'))).toBe(true);
    expect(info.evidence.some((e) => e.includes('next.config'))).toBe(true);
  });

  it('detects Vite', () => {
    const info = detectFramework(F('vite-react-minimal'));
    expect(info.name).toBe('vite');
    expect(info.confidence).toBe('high');
  });

  it('detects Nuxt', () => {
    const info = detectFramework(F('nuxt-minimal'));
    expect(info.name).toBe('nuxt');
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
});
