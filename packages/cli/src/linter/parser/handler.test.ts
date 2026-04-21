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
