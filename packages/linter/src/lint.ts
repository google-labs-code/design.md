import { ParserHandler } from './parser/handler.js';
import { ModelHandler } from './model/handler.js';
import { runLinter } from './linter/runner.js';
import { TailwindEmitterHandler } from './tailwind/handler.js';
import type { DesignSystemState } from './model/spec.js';
import type { Diagnostic } from './linter/spec.js';
import type { LintRule } from './linter/rules/types.js';
import type { TailwindConfig } from './tailwind/spec.js';

export interface LintOptions {
  /** Custom lint rules. Defaults to DEFAULT_RULES if omitted. */
  rules?: LintRule[];
}

export interface LintReport {
  /** The fully resolved design system model. */
  designSystem: DesignSystemState;
  /** All diagnostic findings from the linter. */
  diagnostics: Diagnostic[];
  /** Aggregate counts by severity. */
  summary: { errors: number; warnings: number; infos: number };
  /** Generated Tailwind CSS theme configuration. */
  tailwindConfig: TailwindConfig;
}

/**
 * Lint a DESIGN.md document.
 *
 * Parses the markdown, resolves all design tokens into a typed model,
 * runs lint rules, and generates a Tailwind CSS theme configuration.
 *
 * @param content - Raw DESIGN.md content (markdown with YAML frontmatter or code blocks)
 * @param options - Optional configuration (custom rules, etc.)
 * @returns A LintReport with the resolved design system, diagnostics, and Tailwind config
 * @throws If parsing or model resolution fails unrecoverably
 */
export function lint(content: string, options?: LintOptions): LintReport {
  const parser = new ParserHandler();
  const model = new ModelHandler();
  const tailwind = new TailwindEmitterHandler();

  const parseResult = parser.execute({ content });
  if (!parseResult.success) {
    throw new Error(`Parse failed: ${parseResult.error.message}`);
  }

  const { designSystem, diagnostics: modelDiagnostics } = model.execute(parseResult.data);
  const lintResult = runLinter(designSystem, options?.rules);
  const tailwindConfig = tailwind.execute(designSystem);

  const diagnostics = [...modelDiagnostics, ...lintResult.diagnostics];
  const summary = {
    errors: modelDiagnostics.filter((d) => d.severity === 'error').length + lintResult.summary.errors,
    warnings: modelDiagnostics.filter((d) => d.severity === 'warning').length + lintResult.summary.warnings,
    infos: modelDiagnostics.filter((d) => d.severity === 'info').length + lintResult.summary.infos,
  };

  return {
    designSystem,
    diagnostics,
    summary,
    tailwindConfig,
  };

}
