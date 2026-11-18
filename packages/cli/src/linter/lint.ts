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

import { dirname, resolve } from 'node:path';
import { ParserHandler } from './parser/handler.js';
import { extractExternalReferencesFromMarkdown } from './parser/external-refs.js';
import type { ParsedDesignSystem } from './parser/spec.js';
import { ModelHandler } from './model/handler.js';
import { runLinter } from './linter/runner.js';
import { brokenRefRule } from './linter/rules/broken-ref.js';
import { TailwindEmitterHandler } from './tailwind/handler.js';
import type { DesignSystemState } from './model/spec.js';
import type { Finding } from './linter/spec.js';
import type { LintRule } from './linter/rules/types.js';
import type { TailwindEmitterResult } from './tailwind/spec.js';

export interface LintOptions {
  /** Custom lint rules. Defaults to DEFAULT_RULES if omitted. */
  rules?: LintRule[];
  /** File path of the DESIGN.md file, used to derive the base directory for external @-references. */
  filePath?: string;
  /** Explicit base directory for resolving external @-references. Overrides filePath if both are provided. */
  baseDir?: string;
}

export interface LintReport {
  /** The fully resolved design system model. */
  designSystem: DesignSystemState;
  /** All findings from the linter. */
  findings: Finding[];
  /** Aggregate counts by severity. */
  summary: { errors: number; warnings: number; infos: number };
  /** Generated Tailwind CSS theme configuration. */
  tailwindConfig: TailwindEmitterResult;
  /** Markdown heading names found in the document. */
  sections: string[];
  /** The partitioned document sections. */
  documentSections: Array<{ heading: string; content: string }>;
}

/**
 * Lint a DESIGN.md document.
 *
 * Parses the markdown, resolves all design tokens into a typed model,
 * runs lint rules, and generates a Tailwind CSS theme configuration.
 *
 * @param content - Raw DESIGN.md content (markdown with YAML frontmatter or code blocks)
 * @param options - Optional configuration (custom rules, etc.)
 * @returns A LintReport with the resolved design system, findings, and Tailwind config
 * @throws If parsing or model resolution fails unrecoverably
 */
export function lint(content: string, options?: LintOptions): LintReport {
  const parser = new ParserHandler();
  const model = new ModelHandler();
  const tailwind = new TailwindEmitterHandler();

  const resolvedFilePath = options?.filePath ? resolve(options.filePath) : undefined;
  const resolvedBaseDir = options?.baseDir
    ? resolve(options.baseDir)
    : resolvedFilePath
      ? dirname(resolvedFilePath)
      : undefined;

  const parseResult = parser.execute({ content });

  // Handle parse failures gracefully
  if (!parseResult.success) {
    // For recoverable errors (e.g. no YAML found), return a report
    // with an empty design system and a finding instead of throwing.
    if (parseResult.error.recoverable) {
      const externalReferences = extractExternalReferencesFromMarkdown(content);
      const emptyParsed: ParsedDesignSystem = {
        sourceMap: new Map(),
        externalReferences,
        baseDir: resolvedBaseDir,
        filePath: resolvedFilePath,
      };
      const { designSystem } = model.execute(emptyParsed);

      // Still extract sections from the raw content even without YAML
      const sections = extractSectionsFromContent(content);
      const refFindings: Finding[] = externalReferences.length > 0
        ? brokenRefRule.run(designSystem).map(f => ({
            severity: f.severity ?? brokenRefRule.severity,
            path: f.path,
            message: f.message,
            rule: f.rule ?? brokenRefRule.name,
          }))
        : [];
      const findings: Finding[] = [
        {
          severity: 'warning',
          message: parseResult.error.message,
        },
        ...refFindings,
      ];

      return {
        designSystem,
        findings,
        summary: {
          errors: findings.filter(d => d.severity === 'error').length,
          warnings: findings.filter(d => d.severity === 'warning').length,
          infos: findings.filter(d => d.severity === 'info').length,
        },
        tailwindConfig: tailwind.execute(designSystem),
        sections: sections.map(s => s.heading).filter(Boolean),
        documentSections: sections,
      };
    }

    // Non-recoverable errors are still fatal
    throw new Error(`Parse failed: ${parseResult.error.message}`);
  }

  const { designSystem, findings: modelFindings } = model.execute({
    ...parseResult.data,
    baseDir: resolvedBaseDir ?? parseResult.data.baseDir,
    filePath: resolvedFilePath ?? parseResult.data.filePath,
  });
  const lintResult = runLinter(designSystem, options?.rules);
  const tailwindConfig = tailwind.execute(designSystem);

  const findings = [...modelFindings, ...lintResult.findings];
  const summary = {
    errors: modelFindings.filter((d) => d.severity === 'error').length + lintResult.summary.errors,
    warnings: modelFindings.filter((d) => d.severity === 'warning').length + lintResult.summary.warnings,
    infos: modelFindings.filter((d) => d.severity === 'info').length + lintResult.summary.infos,
  };

  return {
    designSystem,
    findings,
    summary,
    tailwindConfig,
    sections: parseResult.data.sections ?? [],
    documentSections: parseResult.data.documentSections ?? [],
  };

}

/**
 * Extract document sections from raw markdown content by finding H2 headings.
 * Used as a fallback when the parser cannot extract YAML.
 */
function extractSectionsFromContent(content: string): Array<{ heading: string; content: string }> {
  const lines = content.split('\n');
  const sections: Array<{ heading: string; content: string }> = [];
  const headingPattern = /^## (.+)$/;

  let currentStart = 0;
  let currentHeading = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;

    const match = headingPattern.exec(line);
    if (match) {
      // Push previous section
      if (i > 0) {
        sections.push({
          heading: currentHeading,
          content: lines.slice(currentStart, i).join('\n'),
        });
      }
      currentHeading = match[1] ?? '';
      currentStart = i;
    }
  }

  // Push final section
  sections.push({
    heading: currentHeading,
    content: lines.slice(currentStart).join('\n'),
  });

  return sections;
}
