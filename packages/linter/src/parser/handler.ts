import YAML from 'yaml';
import type { ParserSpec, ParserInput, ParserResult, ParsedDesignSystem, SourceLocation } from './spec.js';

/**
 * Extracts and parses YAML design tokens from DESIGN.md content.
 * Supports two embedding modes: frontmatter (---) and fenced yaml code blocks.
 * Never throws — all errors returned as ParserResult failures.
 */
export class ParserHandler implements ParserSpec {
  execute(input: ParserInput): ParserResult {
    try {
      const { content } = input;

      // Attempt frontmatter extraction first
      const frontmatterYaml = this.extractFrontmatter(content);
      if (frontmatterYaml !== null) {
        return this.parseYamlContent(frontmatterYaml, 'frontmatter');
      }

      // Fall back to code block extraction
      const codeBlocks = this.extractCodeBlocks(content);
      if (codeBlocks.length === 0) {
        return {
          success: false,
          error: {
            code: 'NO_YAML_FOUND',
            message: 'No YAML content found. Expected frontmatter (---) or fenced yaml code blocks.',
            recoverable: true,
          },
        };
      }

      return this.mergeCodeBlocks(codeBlocks);
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
   * Extract YAML from frontmatter delimiters (--- ... ---).
   * Returns null if no frontmatter is found.
   */
  private extractFrontmatter(content: string): string | null {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match?.[1]) return null;
    return match[1];
  }

  /**
   * Extract all fenced yaml code blocks from the markdown content.
   * Returns an array of { yaml: string, startLine: number } objects.
   */
  private extractCodeBlocks(content: string): Array<{ yaml: string; blockIndex: number; startLine: number }> {
    const blocks: Array<{ yaml: string; blockIndex: number; startLine: number }> = [];
    const regex = /```yaml\r?\n([\s\S]*?)```/g;
    let match: RegExpExecArray | null;
    let blockIndex = 0;

    while ((match = regex.exec(content)) !== null) {
      const yamlContent = match[1];
      if (yamlContent) {
        const startLine = content.substring(0, match.index).split('\n').length + 1;
        blocks.push({ yaml: yamlContent, blockIndex, startLine });
        blockIndex++;
      }
    }

    return blocks;
  }

  /**
   * Parse a single YAML string into a ParsedDesignSystem.
   */
  private parseYamlContent(yamlStr: string, block: 'frontmatter' | number): ParserResult {
    try {
      const parsed = YAML.parse(yamlStr) as Record<string, unknown>;
      if (!parsed || typeof parsed !== 'object') {
        return {
          success: false,
          error: {
            code: 'YAML_PARSE_ERROR',
            message: 'YAML content did not parse to an object.',
            recoverable: true,
          },
        };
      }

      const sourceMap = new Map<string, SourceLocation>();
      // Build source map for top-level keys
      for (const key of Object.keys(parsed)) {
        sourceMap.set(key, { line: 0, column: 0, block });
      }

      return {
        success: true,
        data: this.toDesignSystem(parsed, sourceMap),
      };
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
  }

  /**
   * Merge multiple code blocks into a single ParsedDesignSystem.
   * Detects duplicate top-level sections across blocks.
   */
  private mergeCodeBlocks(blocks: Array<{ yaml: string; blockIndex: number; startLine: number }>): ParserResult {
    const merged: Record<string, unknown> = {};
    const sourceMap = new Map<string, SourceLocation>();
    const seenSections = new Map<string, number>(); // section → blockIndex

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
          return {
            success: false,
            error: {
              code: 'DUPLICATE_SECTION',
              message: `Section '${key}' is defined in both code block ${previousBlock + 1} and code block ${block.blockIndex + 1}.`,
              recoverable: true,
            },
          };
        }
        seenSections.set(key, block.blockIndex);
        sourceMap.set(key, { line: block.startLine, column: 0, block: block.blockIndex });
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
