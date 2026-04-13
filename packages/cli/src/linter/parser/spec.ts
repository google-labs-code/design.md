import { z } from 'zod';

// ── INPUT ──────────────────────────────────────────────────────────
export const ParserInputSchema = z.object({
  /** Raw DESIGN.md content (or standalone YAML string) */
  content: z.string().min(1, 'Content must not be empty'),
});
export type ParserInput = z.infer<typeof ParserInputSchema>;

// ── ERROR CODES ────────────────────────────────────────────────────
export const ParserErrorCode = z.enum([
  'EMPTY_CONTENT',
  'NO_YAML_FOUND',
  'YAML_PARSE_ERROR',
  'DUPLICATE_SECTION',
  'UNKNOWN_ERROR',
]);

// ── OUTPUT ──────────────────────────────────────────────────────────
export interface SourceLocation {
  line: number;
  column: number;
  block: 'frontmatter' | number;
}

/** Raw, unresolved parsed output — mirrors the YAML schema */
export interface ParsedDesignSystem {
  name?: string | undefined;
  description?: string | undefined;
  colors?: Record<string, string> | undefined;
  typography?: Record<string, Record<string, string | number>> | undefined;
  rounded?: Record<string, string> | undefined;
  spacing?: Record<string, string> | undefined;
  components?: Record<string, Record<string, string>> | undefined;
  sourceMap: Map<string, SourceLocation>;
  /** Markdown heading names found in the document (e.g., 'Colors', 'Typography') */
  sections?: string[] | undefined;
  /** Full content of each section, including heading and body. */
  documentSections?: Array<{ heading: string; content: string }> | undefined;
}

// ── RESULT ─────────────────────────────────────────────────────────
export type ParserResult =
  | { success: true; data: ParsedDesignSystem }
  | {
      success: false;
      error: {
        code: z.infer<typeof ParserErrorCode>;
        message: string;
        recoverable: boolean;
      };
    };

// ── INTERFACE ──────────────────────────────────────────────────────
export interface ParserSpec {
  execute(input: ParserInput): ParserResult;
}
