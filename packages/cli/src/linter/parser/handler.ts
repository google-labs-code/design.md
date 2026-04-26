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

import YAML from 'yaml';
import type {
  ParserSpec,
  ParserInput,
  ParserResult,
  ParsedDesignSystem,
  SourceLocation,
  DocumentSection,
  SuppressionDirective,
  LineRange,
} from './spec.js';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';
import type { Root, Code, Yaml, Heading, PhrasingContent } from 'mdast';

/**
 * Extracts and parses YAML design tokens from DESIGN.md content.
 * Supports two embedding modes: frontmatter (---) and fenced yaml code blocks.
 * Never throws — all errors returned as ParserResult failures.
 */
export class ParserHandler implements ParserSpec {
  execute(input: ParserInput): ParserResult {
    try {
      const { content } = input;
      const processor = unified()
        .use(remarkParse)
        .use(remarkFrontmatter, ['yaml']);

      const ast = processor.parse(content) as Root;
      const blocks: Array<{ yaml: string; block: 'frontmatter' | number; startLine: number }> = [];
      const sections: string[] = [];
      const headingsWithLines: Array<{ text: string; line: number }> = [];
      const allCodeBlockRanges: LineRange[] = [];
      let blockIndex = 0;

      visit(ast, (node) => {
        if (node.type === 'yaml') {
          const yamlNode = node as Yaml;
          blocks.push({
            yaml: yamlNode.value,
            block: 'frontmatter',
            startLine: node.position?.start.line ?? 1
          });
        }

        if (node.type === 'code') {
          const codeNode = node as Code;
          const startLine = node.position?.start.line ?? 1;
          const endLine = node.position?.end.line ?? startLine;
          allCodeBlockRanges.push({ startLine, endLine });
          if (codeNode.lang === 'yaml' || codeNode.lang === 'yml') {
            blocks.push({
              yaml: codeNode.value,
              block: blockIndex,
              startLine
            });
            blockIndex++;
          }
        }

        if (node.type === 'heading') {
          const heading = node as Heading;
          if (heading.depth === 2) {
            const text = this.extractHeadingText(heading.children);
            if (text) {
              sections.push(text);
              headingsWithLines.push({ text, line: node.position?.start.line ?? 1 });
            }
          }
        }
      });

      // Slice content into sections
      const contentLines = content.split('\n');
      const allSuppressions = parseSuppressionDirectives(contentLines);
      const documentSections: DocumentSection[] = [];

      const firstHeading = headingsWithLines[0];
      if (firstHeading) {
        // Prelude (content before first H2)
        const firstHeadingLine = firstHeading.line;
        if (firstHeadingLine > 1) {
          documentSections.push(buildSection(
            '',
            contentLines,
            1,
            firstHeadingLine - 1,
            allSuppressions,
            allCodeBlockRanges,
          ));
        }

        for (let i = 0; i < headingsWithLines.length; i++) {
          const current = headingsWithLines[i];
          if (!current) continue;

          const next = headingsWithLines[i + 1];
          const startLine = current.line;
          const endLine = next ? next.line - 1 : contentLines.length;

          documentSections.push(buildSection(
            current.text,
            contentLines,
            startLine,
            endLine,
            allSuppressions,
            allCodeBlockRanges,
          ));
        }
      } else {
        // No H2 headings found, entire file is one section
        documentSections.push(buildSection(
          '',
          contentLines,
          1,
          contentLines.length,
          allSuppressions,
          allCodeBlockRanges,
        ));
      }

      if (blocks.length === 0) {
        return {
          success: false,
          error: {
            code: 'NO_YAML_FOUND',
            message: 'No YAML content found. Expected frontmatter (---) or fenced yaml code blocks.',
            recoverable: true,
          },
        };
      }

      return this.mergeCodeBlocks(blocks, sections, documentSections);
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'UNKNOWN_ERROR',
          message: error instanceof Error ? error.message : String(error),
          recoverable: false,
        },
      };
    }
  }

  /**
   * Merge multiple code blocks into a single ParsedDesignSystem.
   * Detects duplicate top-level sections across blocks.
   */
  private mergeCodeBlocks(blocks: Array<{ yaml: string; block: 'frontmatter' | number; startLine: number }>, sections: string[], documentSections: DocumentSection[]): ParserResult {
    const merged: Record<string, unknown> = {};
    const sourceMap = new Map<string, SourceLocation>();
    const seenSections = new Map<string, 'frontmatter' | number>();

    for (const block of blocks) {
      let parsed: Record<string, unknown>;
      try {
        parsed = YAML.parse(block.yaml) as Record<string, unknown>;
        if (!parsed || typeof parsed !== 'object') continue;
      } catch (error) {
        return {
          success: false,
          error: {
            code: 'YAML_PARSE_ERROR',
            message: error instanceof Error ? error.message : String(error),
            recoverable: true,
          },
        };
      }

      // Check for duplicate top-level sections
      for (const key of Object.keys(parsed)) {
        const previousBlock = seenSections.get(key);
        if (previousBlock !== undefined) {
          const prevDesc = previousBlock === 'frontmatter' ? 'frontmatter' : `code block ${previousBlock + 1}`;
          const currDesc = block.block === 'frontmatter' ? 'frontmatter' : `code block ${block.block + 1}`;
          return {
            success: false,
            error: {
              code: 'DUPLICATE_SECTION',
              message: `Section '${key}' is defined in both ${prevDesc} and ${currDesc}.`,
              recoverable: true,
            },
          };
        }
        seenSections.set(key, block.block);
        sourceMap.set(key, { line: block.startLine, column: 0, block: block.block });
      }

      Object.assign(merged, parsed);
    }

    return {
      success: true,
      data: this.toDesignSystem(merged, sourceMap, sections, documentSections),
    };
  }

  /**
   * Map a raw parsed object to the ParsedDesignSystem interface.
   */
  private toDesignSystem(raw: Record<string, unknown>, sourceMap: Map<string, SourceLocation>, sections: string[], documentSections: DocumentSection[]): ParsedDesignSystem {
    return {
      name: typeof raw['name'] === 'string' ? raw['name'] : undefined,
      description: typeof raw['description'] === 'string' ? raw['description'] : undefined,
      colors: raw['colors'] as ParsedDesignSystem['colors'],
      typography: raw['typography'] as Record<string, Record<string, string | number>> | undefined,
      rounded: raw['rounded'] as Record<string, string> | undefined,
      spacing: raw['spacing'] as Record<string, string> | undefined,
      elevation: raw['elevation'] as Record<string, string> | undefined,
      components: raw['components'] as Record<string, Record<string, string>> | undefined,
      sourceMap,
      sections,
      documentSections,
    };
  }

  private extractHeadingText(children: PhrasingContent[]): string {
    return children
      .map(c => 'value' in c ? c.value : '')
      .join('')
      .trim();
  }
}

/**
 * Build a section, scoping suppressions and code-block ranges to the
 * section's [startLine, endLine] window.
 */
function buildSection(
  heading: string,
  contentLines: string[],
  startLine: number,
  endLine: number,
  allSuppressions: SuppressionDirective[],
  allCodeBlockRanges: LineRange[],
): DocumentSection {
  const suppressions = allSuppressions.filter(s =>
    !(s.toLine < startLine || s.fromLine > endLine)
  );
  const codeBlockRanges = allCodeBlockRanges.filter(r =>
    !(r.endLine < startLine || r.startLine > endLine)
  );
  return {
    heading,
    content: contentLines.slice(startLine - 1, endLine).join('\n'),
    startLine,
    endLine,
    suppressions,
    codeBlockRanges,
  };
}

/**
 * Scan markdown for `<!-- design.md ... -->` HTML comment directives.
 * Recognized forms:
 *   <!-- design.md disable-next-line <rule>[,<rule>...] -->
 *   <!-- design.md disable-file      <rule>[,<rule>...] -->
 *   <!-- design.md disable           <rule>[,<rule>...] -->
 *   <!-- design.md enable            <rule>[,<rule>...] -->
 * Use `*` as the rule name to apply to all rules.
 */
const DIRECTIVE_RE = /<!--\s*design\.md\s+(disable-next-line|disable-file|disable|enable)\s+([\w*][\w*,\s-]*?)\s*-->/g;

function parseSuppressionDirectives(contentLines: string[]): SuppressionDirective[] {
  const directives: SuppressionDirective[] = [];
  // Per-rule open ranges keyed by rule name (or `*`).
  const open = new Map<string, number>();
  const totalLines = contentLines.length;

  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];
    if (!line) continue;
    DIRECTIVE_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = DIRECTIVE_RE.exec(line)) !== null) {
      const kind = m[1]!;
      const rules = m[2]!.split(',').map(r => r.trim()).filter(Boolean);
      if (rules.length === 0) continue;
      const lineNum = i + 1; // 1-based

      if (kind === 'disable-next-line') {
        for (const rule of rules) {
          directives.push({ rule, fromLine: lineNum + 1, toLine: lineNum + 1 });
        }
      } else if (kind === 'disable-file') {
        for (const rule of rules) {
          directives.push({ rule, fromLine: 1, toLine: totalLines });
        }
      } else if (kind === 'disable') {
        for (const rule of rules) {
          if (!open.has(rule)) open.set(rule, lineNum);
        }
      } else if (kind === 'enable') {
        for (const rule of rules) {
          const from = open.get(rule);
          if (from !== undefined) {
            directives.push({ rule, fromLine: from, toLine: lineNum });
            open.delete(rule);
          }
        }
      }
    }
  }

  // Close any still-open ranges at EOF.
  for (const [rule, from] of open) {
    directives.push({ rule, fromLine: from, toLine: totalLines });
  }

  return directives;
}
