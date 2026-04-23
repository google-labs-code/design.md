// Copyright 2026 Google LLC
// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'bun:test';
import React from 'react';
import { render } from 'ink-testing-library';
import { ImportProgress } from './ui.js';
import type { ImportStep } from './spec.js';

describe('ImportProgress', () => {
  it('renders a full run of steps in order', () => {
    const steps: ImportStep[] = [
      { kind: 'detect-start', projectPath: '/my-app' },
      {
        kind: 'detect-done',
        framework: {
          name: 'next',
          version: '14.2.0',
          confidence: 'high',
          evidence: ['package.json: next@14.2.0'],
        },
      },
      { kind: 'scan-start' },
      {
        kind: 'scan-done',
        sources: {
          tailwindConfigs: ['/my-app/tailwind.config.js'],
          cssFiles: ['/my-app/app/globals.css'],
          dtcgFiles: [],
        },
      },
      {
        kind: 'parse-source',
        source: 'tailwind',
        path: '/my-app/tailwind.config.js',
        counts: { colors: 12, typography: 4, spacing: 6, rounded: 3 },
      },
      {
        kind: 'merge-done',
        totals: { colors: 13, typography: 4, spacing: 7, rounded: 3, components: 0 },
      },
      { kind: 'write-done', outputPath: '/my-app/DESIGN.md', bytes: 1234 },
    ];

    const { lastFrame } = render(
      <ImportProgress steps={steps} done={true} dryRun={false} />,
    );
    const frame = lastFrame() ?? '';
    expect(frame).toContain('Detecting framework');
    expect(frame).toContain('Next.js');
    expect(frame).toContain('14.2.0');
    expect(frame).toContain('Scanning project');
    expect(frame).toContain('1 tailwind config');
    expect(frame).toContain('tailwind');
    expect(frame).toContain('12 colors');
    expect(frame).toContain('Merged');
    expect(frame).toContain('Wrote /my-app/DESIGN.md');
  });

  it('shows dry-run marker when done && dryRun', () => {
    const { lastFrame } = render(
      <ImportProgress
        steps={[{ kind: 'detect-start', projectPath: '/x' }]}
        done={true}
        dryRun={true}
      />,
    );
    expect(lastFrame() ?? '').toContain('dry-run');
  });

  it('renders skip warnings for empty sources', () => {
    const { lastFrame } = render(
      <ImportProgress
        steps={[
          {
            kind: 'parse-skip',
            source: 'css',
            path: '/x/y.css',
            reason: 'no tokens found',
          },
        ]}
        done={false}
      />,
    );
    expect(lastFrame() ?? '').toContain('skipped');
    expect(lastFrame() ?? '').toContain('no tokens found');
  });

  it('renders error steps in red', () => {
    const { lastFrame } = render(
      <ImportProgress
        steps={[{ kind: 'error', message: 'boom', path: '/broken' }]}
        done={false}
      />,
    );
    expect(lastFrame() ?? '').toContain('boom');
    expect(lastFrame() ?? '').toContain('/broken');
  });
});
