import { defineCommand } from 'citty';
import { lint, TailwindEmitterHandler } from '../linter/index.js';
import { DtcgEmitterHandler } from '../linter/dtcg/handler.js';
import { readInput } from '../utils.js';

const FORMATS = ['tailwind', 'dtcg'] as const;
type ExportFormat = typeof FORMATS[number];

export default defineCommand({
  meta: {
    name: 'export',
    description: 'Export DESIGN.md tokens to other formats (tailwind, dtcg).',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md (use "-" for stdin)',
      required: true,
    },
    format: {
      type: 'string',
      description: `Output format: ${FORMATS.join(', ')}`,
      required: true,
    },
  },
  async run({ args }) {
    const format = args.format as string;

    // Validate --format against closed enum
    if (!FORMATS.includes(format as ExportFormat)) {
      console.error(JSON.stringify({
        error: `Invalid format "${format}". Valid formats: ${FORMATS.join(', ')}`,
      }));
      process.exitCode = 1;
      return;
    }

    const content = await readInput(args.file);
    const report = lint(content);

    if (format === 'tailwind') {
      const handler = new TailwindEmitterHandler();
      const result = handler.execute(report.designSystem);

      if (!result.success) {
        console.error(JSON.stringify({ error: result.error.message }));
        process.exitCode = 1;
        return;
      }

      console.log(JSON.stringify(result.data, null, 2));
    } else if (format === 'dtcg') {
      const handler = new DtcgEmitterHandler();
      const result = handler.execute(report.designSystem);

      if (!result.success) {
        console.error(JSON.stringify({ error: result.error.message }));
        process.exitCode = 1;
        return;
      }

      console.log(JSON.stringify(result.data, null, 2));
    }

    process.exitCode = report.summary.errors > 0 ? 1 : 0;
  },
});
