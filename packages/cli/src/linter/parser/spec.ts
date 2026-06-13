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
  version?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  colors?: Record<string, any> | undefined;
  typography?: Record<string, Record<string, any>> | undefined;
  rounded?: Record<string, any> | undefined;
  spacing?: Record<string, any> | undefined;
  components?: Record<string, Record<string, any>> | undefined;
  sourceMap: Map<string, SourceLocation>;
  /** Markdown heading names found in the document (e.g., 'Colors', 'Typography') */
  sections?: string[] | undefined;
  /** Full content of each section, including heading and body. */
  documentSections?: Array<{ heading: string; content: string }> | undefined;
  /** Raw YAML values for all top-level keys (known and unknown), used by lint rules. */
  rawValues?: Record<string, unknown> | undefined;
}

/** Canonical top-level YAML keys per the DESIGN.md schema. */
export const SCHEMA_KEYS = [
  'version',
  'name',
  'description',
  'colors',
  'typography',
  'rounded',
  'spacing',
  'components',
] as const;

export type SchemaKey = typeof SCHEMA_KEYS[number];

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
