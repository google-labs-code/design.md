import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import { readInput, formatOutput } from '../utils.js';

export default defineCommand({
  meta: {
    name: 'lint',
    description: 'Validate a DESIGN.md file for structural correctness.',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md (use "-" for stdin)',
      required: true,
    },
    format: {
      type: 'string',
      description: 'Output format: json or text',
      default: 'json',
    },
  },
  async run({ args }) {
    const content = await readInput(args.file);
    const report = lint(content);

    const output = {
      findings: report.findings,
      summary: report.summary,
    };

    console.log(formatOutput(output, args));
    process.exitCode = report.summary.errors > 0 ? 1 : 0;
  },
});
