import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import { readInput } from '../utils.js';
import { generateHtml } from './html.js';
import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';

export default defineCommand({
  meta: {
    name: 'show',
    description: 'Generate a visual dashboard for a DESIGN.md file.',
  },
  args: {
    file: {
      type: 'positional',
      description: 'Path to DESIGN.md',
      required: true,
    },
  },
  async run({ args }) {
    const content = await readInput(args.file);
    const report = lint(content);

    if (report.summary.errors > 0) {
      console.error('Cannot generate dashboard: DESIGN.md has errors.');
      report.findings
        .filter(f => f.severity === 'error')
        .forEach(f => console.error(`- ${f.message}`));
      process.exit(1);
    }

    const html = generateHtml(report.designSystem);
    const outPath = join(dirname(args.file), 'design.html');
    
    await writeFile(outPath, html, 'utf8');
    console.log(`Dashboard generated: ${outPath}`);
  },
});
