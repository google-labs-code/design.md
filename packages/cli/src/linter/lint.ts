import { ParserHandler } from './parser/handler.js';
import type { ParsedDesignSystem } from './parser/spec.js';
import { ModelHandler } from './model/handler.js';
import { runLinter } from './linter/runner.js';
import { TailwindEmitterHandler } from './tailwind/handler.js';
import type { DesignSystemState } from './model/spec.js';
import type { Finding } from './linter/spec.js';
import type { LintRule } from './linter/rules/types.js';
import type { TailwindEmitterResult } from './tailwind/spec.js';

export interface LintOptions {
  /** Custom lint rules. Defaults to DEFAULT_RULES if omitted. */
  rules?: LintRule[];
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

  const parseResult = parser.execute({ content });

  // Handle parse failures gracefully
  if (!parseResult.success) {
    // For recoverable errors (e.g. no YAML found), return a report
    // with an empty design system and a finding instead of throwing.
    if (parseResult.error.recoverable) {
      const emptyParsed: ParsedDesignSystem = { sourceMap: new Map() };
      const { designSystem } = model.execute(emptyParsed);

      // Still extract sections from the raw content even without YAML
      const sections = extractSectionsFromContent(content);

      return {
        designSystem,
        findings: [{
          severity: 'warning',
          message: parseResult.error.message,
        }],
        summary: { errors: 0, warnings: 1, infos: 0 },
        tailwindConfig: tailwind.execute(designSystem),
        sections: sections.map(s => s.heading).filter(Boolean),
        documentSections: sections,
      };
    }

    // Non-recoverable errors are still fatal
    throw new Error(`Parse failed: ${parseResult.error.message}`);
  }

  const { designSystem, findings: modelFindings } = model.execute(parseResult.data);
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
