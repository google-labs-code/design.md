import YAML from 'yaml';
import type { ParserSpec, ParserInput, ParserResult, ParsedDesignSystem, SourceLocation } from './spec.js';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';
import type { Root, Code, Yaml } from 'mdast';

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
          if (codeNode.lang === 'yaml' || codeNode.lang === 'yml') {
            blocks.push({
              yaml: codeNode.value,
              block: blockIndex,
              startLine: node.position?.start.line ?? 1
            });
            blockIndex++;
          }
        }
      });

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

      return this.mergeCodeBlocks(blocks);
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
  private mergeCodeBlocks(blocks: Array<{ yaml: string; block: 'frontmatter' | number; startLine: number }>): ParserResult {
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
      data: this.toDesignSystem(merged, sourceMap),
    };
  }

  /**
   * Map a raw parsed object to the ParsedDesignSystem interface.
   */
  private toDesignSystem(raw: Record<string, unknown>, sourceMap: Map<string, SourceLocation>): ParsedDesignSystem {
    return {
      name: typeof raw['name'] === 'string' ? raw['name'] : undefined,
      description: typeof raw['description'] === 'string' ? raw['description'] : undefined,
      colors: raw['colors'] as Record<string, string> | undefined,
      typography: raw['typography'] as Record<string, Record<string, string | number>> | undefined,
      rounded: raw['rounded'] as Record<string, string> | undefined,
      spacing: raw['spacing'] as Record<string, string> | undefined,
      components: raw['components'] as Record<string, Record<string, string>> | undefined,
      sourceMap,
    };
  }
}
