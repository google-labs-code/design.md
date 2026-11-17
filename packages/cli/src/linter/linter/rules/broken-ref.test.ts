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

import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import { mkdtempSync, mkdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { brokenRef, brokenRefRule } from './broken-ref.js';
import { buildState } from './test-helpers.js';

describe('brokenRef', () => {
  it('emits error for unresolved token reference', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { backgroundColor: '{colors.nonexistent}' } },
    });
    const findings = brokenRef(state);
    expect(findings.some(d => d.message.includes('does not resolve'))).toBe(true);
  });

  it('returns empty when all references resolve', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { backgroundColor: '{colors.primary}' } },
    });
    const errors = brokenRef(state).filter(d => d.message.includes('does not resolve'));
    expect(errors.length).toBe(0);
  });

  it('emits warning (not error) for unknown component sub-tokens', () => {
    const state = buildState({
      colors: { primary: '#ff0000' },
      components: { button: { borderColor: '#ff0000' } },
    });
    const findings = brokenRef(state);
    const subTokenDiag = findings.find(d => d.message.includes('not a recognized'));
    expect(subTokenDiag).toBeDefined();
    expect(subTokenDiag!.severity).toBe('warning');
  });

  it('has a valid rule descriptor', () => {
    expect(brokenRefRule.name).toBe('broken-ref');
    expect(brokenRefRule.severity).toBe('error');
    expect(brokenRefRule.description).toBeTruthy();
    expect(brokenRefRule.run).toBe(brokenRef);
  });

  describe('external @-references', () => {
    let tempDir: string;

    beforeEach(() => {
      tempDir = mkdtempSync(join(tmpdir(), 'design-md-broken-ref-'));
    });

    afterEach(() => {
      rmSync(tempDir, { recursive: true, force: true });
    });

    it('validates path containment in string-only mode (without baseDir)', () => {
      const state = buildState({
        colors: { primary: '#ff0000' },
        externalReferences: [
          { raw: '@components/button.html', path: 'components/button.html', section: 'Components' },
          { raw: '@../shared/tokens.json', path: '../shared/tokens.json', section: 'Overview' },
          { raw: '@/abs/tokens.json', path: '/abs/tokens.json', section: 'Overview' },
          { raw: '@components/../../escape.json', path: 'components/../../escape.json', section: 'Components' },
        ],
      });

      const findings = brokenRef(state);
      expect(findings).toEqual([
        {
          severity: 'error',
          path: 'Overview',
          message: 'External reference `@../shared/tokens.json` resolves outside the DESIGN.md directory.',
        },
        {
          severity: 'error',
          path: 'Overview',
          message: 'External reference `@/abs/tokens.json` resolves outside the DESIGN.md directory.',
        },
        {
          severity: 'error',
          path: 'Components',
          message: 'External reference `@components/../../escape.json` resolves outside the DESIGN.md directory.',
        },
      ]);
    });

    it('warns when a referenced target file does not exist and passes when it exists', () => {
      mkdirSync(join(tempDir, 'components'), { recursive: true });
      writeFileSync(join(tempDir, 'components/button.html'), '<button id="button-primary">OK</button>');

      const state = buildState({
        colors: { primary: '#ff0000' },
        baseDir: tempDir,
        externalReferences: [
          { raw: '@components/button.html', path: 'components/button.html', section: 'Components' },
          { raw: '@components/buton.html', path: 'components/buton.html', section: 'Components' },
        ],
      });

      const findings = brokenRef(state);
      expect(findings).toEqual([
        {
          severity: 'warning',
          path: 'Components',
          message: 'External reference `@components/buton.html` does not exist.',
        },
      ]);
    });

    it('checks HTML fragments against element id attributes and <!-- COMPONENT: name --> markers', () => {
      mkdirSync(join(tempDir, 'components'), { recursive: true });
      writeFileSync(
        join(tempDir, 'components/button.html'),
        [
          '<!-- COMPONENT: card-elevated -->',
          '<div class="card"><button id="button-primary">Primary</button></div>',
          "<!-- <div id='commented-out'></div> -->",
        ].join('\n'),
      );

      const state = buildState({
        colors: { primary: '#ff0000' },
        baseDir: tempDir,
        externalReferences: [
          {
            raw: '@components/button.html#button-primary',
            path: 'components/button.html',
            fragment: 'button-primary',
            section: 'Components',
          },
          {
            raw: '@components/button.html#card-elevated',
            path: 'components/button.html',
            fragment: 'card-elevated',
            section: 'Components',
          },
          {
            raw: '@components/button.html#card-flat',
            path: 'components/button.html',
            fragment: 'card-flat',
            section: 'Components',
          },
          {
            raw: '@components/button.html#commented-out',
            path: 'components/button.html',
            fragment: 'commented-out',
            section: 'Components',
          },
        ],
      });

      const findings = brokenRef(state);
      expect(findings).toEqual([
        {
          severity: 'warning',
          path: 'Components',
          message: 'External reference `@components/button.html#card-flat` has no matching anchor `#card-flat`.',
        },
        {
          severity: 'warning',
          path: 'Components',
          message: 'External reference `@components/button.html#commented-out` has no matching anchor `#commented-out`.',
        },
      ]);
    });

    it('checks Markdown fragments against heading slugs', () => {
      mkdirSync(join(tempDir, 'guides'), { recursive: true });
      writeFileSync(
        join(tempDir, 'guides/color.md'),
        '# Color System\n\n## Contrast\n\nMinimum 4.5:1 ratio.\n',
      );

      const state = buildState({
        colors: { primary: '#ff0000' },
        baseDir: tempDir,
        externalReferences: [
          {
            raw: '@guides/color.md#contrast',
            path: 'guides/color.md',
            fragment: 'contrast',
            section: 'Colors',
          },
          {
            raw: '@guides/color.md#missing-heading',
            path: 'guides/color.md',
            fragment: 'missing-heading',
            section: 'Colors',
          },
        ],
      });

      const findings = brokenRef(state);
      expect(findings).toEqual([
        {
          severity: 'warning',
          path: 'Colors',
          message: 'External reference `@guides/color.md#missing-heading` has no matching anchor `#missing-heading`.',
        },
      ]);
    });

    it('emits an info note (not a warning or error) for fragments on other existing file types', () => {
      mkdirSync(join(tempDir, 'src'), { recursive: true });
      writeFileSync(join(tempDir, 'src/button.tsx'), 'export function Button() { return null; }\n');

      const state = buildState({
        colors: { primary: '#ff0000' },
        baseDir: tempDir,
        externalReferences: [
          {
            raw: '@src/button.tsx#Button',
            path: 'src/button.tsx',
            fragment: 'Button',
            section: 'Components',
          },
        ],
      });

      const findings = brokenRef(state);
      expect(findings).toEqual([
        {
          severity: 'info',
          path: 'Components',
          message: 'External reference `@src/button.tsx#Button` fragment `#Button` is not checked for this file type.',
        },
      ]);
    });

    it('resolves transitive references in referenced Markdown files from the DESIGN.md base directory (One Base Path rule)', () => {
      mkdirSync(join(tempDir, 'guides'), { recursive: true });
      mkdirSync(join(tempDir, 'components'), { recursive: true });
      writeFileSync(
        join(tempDir, 'components/card.html'),
        '<!-- COMPONENT: card-elevated -->\n<div class="card"></div>\n',
      );
      // Only exists under guides/, NOT at <tempDir>/local-only.html
      writeFileSync(join(tempDir, 'guides/local-only.html'), '<div>Local</div>\n');
      writeFileSync(
        join(tempDir, 'guides/color.md'),
        [
          '## Cards',
          '',
          'See `@components/card.html#card-elevated` and `@local-only.html`.',
          'Also cycle back to `@guides/cycle-b.md`.',
        ].join('\n'),
      );
      writeFileSync(
        join(tempDir, 'guides/cycle-b.md'),
        'Back-reference to `@guides/color.md`.\n',
      );

      const state = buildState({
        colors: { primary: '#ff0000' },
        baseDir: tempDir,
        externalReferences: [
          {
            raw: '@guides/color.md',
            path: 'guides/color.md',
            section: 'Colors',
          },
        ],
      });

      const findings = brokenRef(state);
      expect(findings).toEqual([
        {
          severity: 'warning',
          path: 'guides/color.md#Cards',
          message: 'External reference `@local-only.html` does not exist.',
        },
      ]);
    });

    it('emits an error when a symlink inside baseDir points outside the DESIGN.md directory', () => {
      const outsideDir = mkdtempSync(join(tmpdir(), 'design-md-outside-'));
      try {
        const outsideFile = join(outsideDir, 'secret.json');
        writeFileSync(outsideFile, '{"secret": true}');
        symlinkSync(outsideFile, join(tempDir, 'escaped.json'));

        const state = buildState({
          colors: { primary: '#ff0000' },
          baseDir: tempDir,
          externalReferences: [
            {
              raw: '@escaped.json',
              path: 'escaped.json',
              section: 'Overview',
            },
          ],
        });

        const findings = brokenRef(state);
        expect(findings).toEqual([
          {
            severity: 'error',
            path: 'Overview',
            message: 'External reference `@escaped.json` resolves outside the DESIGN.md directory.',
          },
        ]);
      } finally {
        rmSync(outsideDir, { recursive: true, force: true });
      }
    });
  });
});
