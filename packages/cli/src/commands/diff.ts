// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");

import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import { readInput, formatOutput, diffMaps } from '../utils.js';
import type { ComponentDef } from '../linter/model/spec.js';

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
    // Parallel I/O
    const [beforeContent, afterContent] = await Promise.all([
      readInput(args.before),
      readInput(args.after),
    ]);

    // Parallel CPU work
    const [beforeReport, afterReport] = await Promise.all([
      Promise.resolve(lint(beforeContent)),
      Promise.resolve(lint(afterContent)),
    ]);

    const beforeDS = beforeReport.designSystem;
    const afterDS = afterReport.designSystem;

    const beforeSummary = beforeReport.summary;
    const afterSummary = afterReport.summary;

    const errorDelta = afterSummary.errors - beforeSummary.errors;
    const warningDelta = afterSummary.warnings - beforeSummary.warnings;

    const regression = errorDelta > 0 || warningDelta > 0;

    const diff = {
      tokens: {
        colors: diffMaps(beforeDS.colors, afterDS.colors),
        typography: diffMaps(beforeDS.typography, afterDS.typography),
        rounded: diffMaps(beforeDS.rounded, afterDS.rounded),
        spacing: diffMaps(beforeDS.spacing, afterDS.spacing),

        // Lazy serialization only when needed
        components: diffMaps(
          serializeComponents(beforeDS.components),
          serializeComponents(afterDS.components),
        ),
      },

      findings: {
        before: beforeSummary,
        after: afterSummary,

        delta: {
          errors: errorDelta,
          warnings: warningDelta,
        },
      },

      regression,
    };

    console.log(formatOutput(diff, args));

    process.exitCode = regression ? 1 : 0;
  },
});

function serializeComponents(
  components: Map<string, ComponentDef>,
): Map<string, Record<string, unknown>> {
  const result = new Map<string, Record<string, unknown>>();

  for (const [name, comp] of components.entries()) {
    const props: Record<string, unknown> = {};

    for (const [key, value] of comp.properties) {
      props[key] = value;
    }

    result.set(name, props);
  }

  return result;
}
