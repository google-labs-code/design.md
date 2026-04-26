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

  // ── Suppression directives + section line numbers ────────────────
  describe('suppression directives and section ranges', () => {
    it('captures startLine, endLine, and code-block ranges per section', () => {
      const input = `---
colors:
  primary: "#000000"
---

## Colors

Body before code.

\`\`\`
not yaml — should still be a code block range
\`\`\`

After.
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (!result.success) return;
      const sections = result.data.documentSections!;
      const colorsSection = sections.find(s => s.heading === 'Colors')!;
      expect(colorsSection.startLine).toBeGreaterThan(0);
      expect(colorsSection.endLine).toBeGreaterThan(colorsSection.startLine);
      expect(colorsSection.codeBlockRanges.length).toBe(1);
      const range = colorsSection.codeBlockRanges[0]!;
      expect(range.endLine).toBeGreaterThan(range.startLine);
    });

    it('parses disable-next-line directives', () => {
      const input = `---
colors:
  primary: "#000000"
---

## Colors

<!-- design.md disable-next-line prose-token-mismatch -->
Boston Clay (#B8422E) for legacy.
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (!result.success) return;
      const colorsSection = result.data.documentSections!.find(s => s.heading === 'Colors')!;
      expect(colorsSection.suppressions.length).toBe(1);
      const s = colorsSection.suppressions[0]!;
      expect(s.rule).toBe('prose-token-mismatch');
      expect(s.fromLine).toBe(s.toLine);
    });

    it('parses region disable/enable directives', () => {
      const input = `---
colors:
  primary: "#000000"
---

## Colors

<!-- design.md disable prose-token-mismatch -->
External (#B8422E).
External (#C84E3A).
<!-- design.md enable prose-token-mismatch -->
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (!result.success) return;
      const colorsSection = result.data.documentSections!.find(s => s.heading === 'Colors')!;
      expect(colorsSection.suppressions.length).toBe(1);
      const s = colorsSection.suppressions[0]!;
      expect(s.rule).toBe('prose-token-mismatch');
      expect(s.toLine).toBeGreaterThan(s.fromLine);
    });

    it('parses disable-file directives applying to every section', () => {
      const input = `---
colors:
  primary: "#000000"
---
<!-- design.md disable-file prose-token-mismatch -->

## Colors

Anything (#deadbe) goes.
`;
      const result = handler.execute({ content: input });
      expect(result.success).toBe(true);
      if (!result.success) return;
      const sections = result.data.documentSections!;
      // Both the prelude (between frontmatter and ## Colors) and the
      // Colors section should carry the suppression.
      for (const section of sections) {
        expect(section.suppressions.some(s => s.rule === 'prose-token-mismatch')).toBe(true);
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
});
