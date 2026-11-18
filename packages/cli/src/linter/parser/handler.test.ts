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

import { describe, it, expect } from 'bun:test';
import { ParserHandler } from './handler.js';
import {
  parseExternalReference,
  extractExternalReferencesFromMarkdown,
  extractMarkdownAnchors,
  extractHtmlAnchors,
} from './external-refs.js';

const handler = new ParserHandler();

describe('ParserHandler', () => {
  // ── Cycle 2: Frontmatter extraction ───────────────────────────────
  describe('frontmatter extraction', () => {
    it('extracts YAML from frontmatter delimiters', () => {
      const input = `---
name: Kindred Spirit
colors:
  primary: "#647D66"
---

Some markdown content here.
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('Kindred Spirit');
        expect(result.data.colors?.['primary']).toBe('#647D66');
      }
    });
  });

  // ── Cycle 3: Code block extraction ────────────────────────────────
  describe('code block extraction', () => {
    it('extracts YAML from fenced yaml code blocks', () => {
      const input = `# Design System

\`\`\`yaml
colors:
  primary: "#ff0000"
  secondary: "#00ff00"
\`\`\`

Some explanation text.
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.colors?.['primary']).toBe('#ff0000');
        expect(result.data.colors?.['secondary']).toBe('#00ff00');
      }
    });

    it('extracts YAML code blocks with attributes', () => {
      const input = `# Code block with attributes
      
\`\`\`yaml title="theme"
colors:
  primary: "#ffffff"
\`\`\`
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.colors?.['primary']).toBe('#ffffff');
      }
    });
  });

  // ── Cycle 4: Merge multiple code blocks ───────────────────────────
  describe('merging multiple code blocks', () => {
    it('merges separate YAML blocks into one tree', () => {
      const input = `# Colors

\`\`\`yaml
colors:
  primary: "#647D66"
\`\`\`

# Typography

\`\`\`yaml
typography:
  headline-lg:
    fontFamily: Google Sans Display
    fontSize: 42px
\`\`\`
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.colors?.['primary']).toBe('#647D66');
        expect(result.data.typography?.['headline-lg']?.['fontFamily']).toBe('Google Sans Display');
      }
    });
  });

  // ── Cycle 5: Duplicate section detection ──────────────────────────
  describe('duplicate section detection', () => {
    it('returns DUPLICATE_SECTION when same top-level key appears in multiple blocks', () => {
      const input = `
\`\`\`yaml
colors:
  primary: "#ff0000"
\`\`\`

\`\`\`yaml
colors:
  secondary: "#00ff00"
\`\`\`
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.code).toBe('DUPLICATE_SECTION');
        expect(result.error.message).toContain('colors');
      }
    });
  });

  // ── Cycle 6: Malformed YAML ───────────────────────────────────────
  describe('malformed YAML', () => {
    it('returns YAML_PARSE_ERROR on invalid YAML syntax', () => {
      const input = `---
colors:
  primary: "#ff0000"
  - this is invalid
---`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.code).toBe('YAML_PARSE_ERROR');
      }
    });

    it('returns NO_YAML_FOUND when no YAML content exists', () => {
      const input = `# Just a heading

Some markdown text with no YAML blocks.
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.code).toBe('NO_YAML_FOUND');
      }
    });
  });

  // ── Cycle 7: External @-reference extraction ──────────────────────
  describe('external @-reference extraction', () => {
    it('recognizes valid inline code span @<path>[#<fragment>] references and rejects non-references', () => {
      expect(parseExternalReference('@components/button.html')).toEqual({
        raw: '@components/button.html',
        path: 'components/button.html',
      });
      expect(parseExternalReference('@tokens.json')).toEqual({
        raw: '@tokens.json',
        path: 'tokens.json',
      });
      expect(parseExternalReference('@guides/color.md#contrast')).toEqual({
        raw: '@guides/color.md#contrast',
        path: 'guides/color.md',
        fragment: 'contrast',
      });
      expect(parseExternalReference('@src/button.tsx#Button')).toEqual({
        raw: '@src/button.tsx#Button',
        path: 'src/button.tsx',
        fragment: 'Button',
      });
      expect(parseExternalReference('@../shared/tokens.json')).toEqual({
        raw: '@../shared/tokens.json',
        path: '../shared/tokens.json',
      });
      expect(parseExternalReference('@/abs/tokens.json')).toEqual({
        raw: '@/abs/tokens.json',
        path: '/abs/tokens.json',
      });

      expect(parseExternalReference('@media')).toBeNull();
      expect(parseExternalReference('@font-face')).toBeNull();
      expect(parseExternalReference('@scope/package')).toBeNull();
      expect(parseExternalReference('@scope/pkg@1.2.3')).toBeNull();
      expect(parseExternalReference('@.gitignore')).toBeNull();
      expect(parseExternalReference('@..')).toBeNull();
      expect(parseExternalReference('@components/')).toBeNull();
      expect(parseExternalReference('@components/button.html#')).toBeNull();
      expect(parseExternalReference('@components/button.html#a#b')).toBeNull();
      expect(parseExternalReference('@components\\button.html')).toBeNull();
      expect(parseExternalReference('@components/button .html')).toBeNull();
      expect(parseExternalReference('components/button.html')).toBeNull();
    });

    it('extracts only inline code span references from prose and ignores bare prose, fenced code blocks, and YAML', () => {
      const input = `---
name: Test System
description: "@frontmatter/ignored.json"
colors:
  primary: "#1A1C1E"
---

Introductory note referencing \`@tokens.json\`.

## Overview

Bare prose mention @components/bare-ignored.html and user mention @davideast.
CSS at-rules like \`@media\` and \`@font-face\` and npm packages like \`@scope/package\` have no extension.

\`\`\`html
<!-- Fenced code block should be ignored -->
<link href="@components/in-code-block.html" />
\`\`\`

## Components

- **Buttons** → \`@components/button.html#button-primary\`
- **Color Guide** → \`@guides/color.md#contrast\`
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.externalReferences).toEqual([
          {
            raw: '@tokens.json',
            path: 'tokens.json',
            section: undefined,
            line: 8,
          },
          {
            raw: '@components/button.html#button-primary',
            path: 'components/button.html',
            fragment: 'button-primary',
            section: 'Components',
            line: 22,
          },
          {
            raw: '@guides/color.md#contrast',
            path: 'guides/color.md',
            fragment: 'contrast',
            section: 'Components',
            line: 23,
          },
        ]);
      }

      const directRefs = extractExternalReferencesFromMarkdown(input);
      expect(directRefs.map(r => r.raw)).toEqual([
        '@tokens.json',
        '@components/button.html#button-primary',
        '@guides/color.md#contrast',
      ]);
    });

    it('extracts Markdown heading slugs and HTML element id / COMPONENT anchors', () => {
      const md = `# Color Guide

## Contrast

### Color & Contrast

## Usage

## Usage

<div id="custom-html-anchor"></div>
`;
      const mdAnchors = extractMarkdownAnchors(md);
      expect(mdAnchors.has('color-guide')).toBe(true);
      expect(mdAnchors.has('contrast')).toBe(true);
      expect(mdAnchors.has('color--contrast')).toBe(true);
      expect(mdAnchors.has('color-contrast')).toBe(true);
      expect(mdAnchors.has('usage')).toBe(true);
      expect(mdAnchors.has('usage-1')).toBe(true);
      expect(mdAnchors.has('custom-html-anchor')).toBe(true);

      const html = `
<!-- COMPONENT: button-primary -->
<button id="btn-main" class="primary">Click</button>
<div id='single-quoted'></div>
<span id=unquoted-id></span>
<button data-label="Next ->" id="after-gt-in-attr">Next</button>
<!-- <div id="commented-out"></div> -->
<script>const x = '<div id="in-script"></div>';</script >
`;
      const htmlAnchors = extractHtmlAnchors(html);
      expect(htmlAnchors.has('button-primary')).toBe(true);
      expect(htmlAnchors.has('btn-main')).toBe(true);
      expect(htmlAnchors.has('single-quoted')).toBe(true);
      expect(htmlAnchors.has('unquoted-id')).toBe(true);
      expect(htmlAnchors.has('after-gt-in-attr')).toBe(true);
      expect(htmlAnchors.has('commented-out')).toBe(false);
      expect(htmlAnchors.has('in-script')).toBe(false);
    });
  });
});
