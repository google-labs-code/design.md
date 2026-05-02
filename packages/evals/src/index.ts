// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { offBrandMockAgent, tokenAwareMockAgent } from './agents.js';
import { run } from './runner.js';
import { TASKS } from './tasks.js';
import type { DesignFixture, Format } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..', '..', '..');

const DEFAULT_DESIGNS: DesignFixture[] = [
  { id: 'paws-and-paths', path: join(REPO_ROOT, 'examples/paws-and-paths/DESIGN.md') },
  { id: 'atmospheric-glass', path: join(REPO_ROOT, 'examples/atmospheric-glass/DESIGN.md') },
  { id: 'totality-festival', path: join(REPO_ROOT, 'examples/totality-festival/DESIGN.md') },
];

const DEFAULT_FORMATS: Format[] = ['designmd', 'prose', 'dtcg', 'none'];

async function main() {
  const args = process.argv.slice(2);
  const outArg = args.indexOf('--out');
  const outPath = outArg >= 0 ? args[outArg + 1]! : 'eval-report.json';

  const report = await run({
    designs: DEFAULT_DESIGNS,
    tasks: TASKS,
    formats: DEFAULT_FORMATS,
    agents: [tokenAwareMockAgent, offBrandMockAgent],
  });

  mkdirSync(dirname(resolve(outPath)) || '.', { recursive: true });
  writeFileSync(outPath, JSON.stringify(report, null, 2));

  console.log(`Wrote ${report.runs.length} runs to ${outPath}`);
  console.log('Mean aggregate score by format:');
  for (const [format, { count, mean }] of Object.entries(report.byFormat)) {
    console.log(
      `  ${format.padEnd(10)} n=${String(count).padEnd(3)} aggregate=${mean.aggregate.toFixed(3)} color=${mean.colorScore.toFixed(3)} type=${mean.typographyScore.toFixed(3)} space=${mean.spacingScore.toFixed(3)}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
