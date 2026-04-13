import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import { readInput, formatOutput, diffMaps, serializeDesignSystem } from '../utils.js';

export default defineCommand({
  meta: {
    name: 'diff',
    description: 'Compare two DESIGN.md files and report changes.',
  },
  args: {
    before: {
      type: 'positional',
      description: 'Path to the "before" DESIGN.md',
      required: true,
    },
    after: {
      type: 'positional',
      description: 'Path to the "after" DESIGN.md',
      required: true,
    },
    format: {
      type: 'string',
      description: 'Output format: json or text',
      default: 'json',
    },
  },
  async run({ args }) {
    const beforeContent = await readInput(args.before);
    const afterContent = await readInput(args.after);

    const beforeReport = lint(beforeContent);
    const afterReport = lint(afterContent);

    const diff = {
      tokens: {
        colors: diffMaps(beforeReport.designSystem.colors, afterReport.designSystem.colors),
        typography: diffMaps(beforeReport.designSystem.typography, afterReport.designSystem.typography),
        rounded: diffMaps(beforeReport.designSystem.rounded, afterReport.designSystem.rounded),
        spacing: diffMaps(beforeReport.designSystem.spacing, afterReport.designSystem.spacing),
      },
      findings: {
        before: beforeReport.summary,
        after: afterReport.summary,
        delta: {
          errors: afterReport.summary.errors - beforeReport.summary.errors,
          warnings: afterReport.summary.warnings - beforeReport.summary.warnings,
        },
      },
      regression: afterReport.summary.errors > beforeReport.summary.errors
        || afterReport.summary.warnings > beforeReport.summary.warnings,
    };

    console.log(formatOutput(diff, args));
    process.exitCode = diff.regression ? 1 : 0;
  },
});
