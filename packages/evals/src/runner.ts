// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License").

import { formatContext, loadDesign } from './formats.js';
import { extract, meanScore, score } from './score.js';
import type { Agent, DesignFixture, Format, Report, RunRecord, Score, Task } from './types.js';

export interface RunOptions {
  designs: DesignFixture[];
  tasks: Task[];
  formats: Format[];
  agents: Agent[];
}

export async function run(options: RunOptions): Promise<Report> {
  const startedAt = new Date().toISOString();
  const runs: RunRecord[] = [];

  for (const design of options.designs) {
    const parsed = loadDesign(design.path);
    for (const task of options.tasks) {
      for (const format of options.formats) {
        const context = formatContext(format, parsed);
        for (const agent of options.agents) {
          const output = await agent.render(task, context);
          const extracted = extract(output);
          const s = score(extracted, parsed);
          runs.push({
            designId: design.id,
            taskId: task.id,
            format,
            agentId: agent.id,
            output,
            extracted,
            score: s,
          });
        }
      }
    }
  }

  const byFormat = aggregateByFormat(runs, options.formats);
  return { startedAt, finishedAt: new Date().toISOString(), runs, byFormat };
}

function aggregateByFormat(runs: RunRecord[], formats: Format[]): Report['byFormat'] {
  const out = {} as Report['byFormat'];
  for (const fmt of formats) {
    const subset = runs.filter((r) => r.format === fmt);
    const scores: Score[] = subset.map((r) => r.score);
    out[fmt] = { count: subset.length, mean: meanScore(scores) };
  }
  return out;
}
