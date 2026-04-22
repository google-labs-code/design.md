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

import { defineCommand } from 'citty';
import { lint } from '../linter/index.js';
import type { ComponentDef, DesignSystemState } from '../linter/model/spec.js';
import { readInput, formatOutput, diffMaps } from '../utils.js';

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
      hermes: buildHermesDiff(beforeReport.designSystem, afterReport.designSystem),
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

function buildHermesDiff(before: DesignSystemState, after: DesignSystemState) {
  return {
    agent: diffUnknownRecords(before.agent, after.agent),
    accessibility: diffUnknownRecords(before.accessibility, after.accessibility),
    platformOverrides: diffUnknownRecords(before.platformOverrides, after.platformOverrides),
    mergedPlatformComponents: diffPlatformComponentMaps(before.mergedPlatformComponents, after.mergedPlatformComponents),
    componentStates: diffComponentStates(before.components, after.components),
  };
}

function diffUnknownRecords(before: Record<string, unknown> | undefined, after: Record<string, unknown> | undefined) {
  const beforeJson = JSON.stringify(before ?? null);
  const afterJson = JSON.stringify(after ?? null);
  return {
    changed: beforeJson !== afterJson,
    before,
    after,
  };
}

function diffPlatformComponentMaps(
  before: Map<string, Map<string, ComponentDef>> | undefined,
  after: Map<string, Map<string, ComponentDef>> | undefined,
) {
  const beforePlatforms = before ?? new Map();
  const afterPlatforms = after ?? new Map();
  const platformNames = new Set([...beforePlatforms.keys(), ...afterPlatforms.keys()]);
  const details: Record<string, unknown> = {};
  let changed = false;

  for (const platform of platformNames) {
    const beforeComponents = beforePlatforms.get(platform) ?? new Map<string, ComponentDef>();
    const afterComponents = afterPlatforms.get(platform) ?? new Map<string, ComponentDef>();
    const diff = diffComponentMaps(beforeComponents, afterComponents);
    details[platform] = diff;
    if (diff.added.length || diff.removed.length || diff.modified.length) changed = true;
  }

  return { changed, details };
}

function diffComponentMaps(before: Map<string, ComponentDef>, after: Map<string, ComponentDef>) {
  const added: string[] = [];
  const removed: string[] = [];
  const modified: string[] = [];

  for (const [key, value] of after.entries()) {
    if (!before.has(key)) {
      added.push(key);
    } else if (JSON.stringify(serializeComponentDef(before.get(key)!)) !== JSON.stringify(serializeComponentDef(value))) {
      modified.push(key);
    }
  }

  for (const key of before.keys()) {
    if (!after.has(key)) removed.push(key);
  }

  return { added, removed, modified };
}

function diffComponentStates(before: Map<string, ComponentDef>, after: Map<string, ComponentDef>) {
  const beforeStates = flattenComponentStates(before);
  const afterStates = flattenComponentStates(after);
  const diff = diffMaps(beforeStates, afterStates);
  return {
    changed: diff.added.length > 0 || diff.removed.length > 0 || diff.modified.length > 0,
    ...diff,
  };
}

function flattenComponentStates(components: Map<string, ComponentDef>): Map<string, unknown> {
  const flattened = new Map<string, unknown>();
  for (const [componentName, def] of components.entries()) {
    const states = def.extensionProperties.get('states');
    if (!states || typeof states !== 'object' || Array.isArray(states)) continue;
    for (const [stateName, payload] of Object.entries(states as Record<string, unknown>)) {
      flattened.set(`${componentName}.${stateName}`, payload);
    }
  }
  return flattened;
}

function serializeComponentDef(component: ComponentDef) {
  return {
    properties: Object.fromEntries(component.properties),
    extensionProperties: Object.fromEntries(component.extensionProperties),
    unresolvedRefs: component.unresolvedRefs,
  };
}
