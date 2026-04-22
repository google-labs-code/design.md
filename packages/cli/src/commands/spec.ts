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
import { getProfileSpecContent, getRulesTable } from '../linter/spec-gen/spec-helpers.js';
import { DEFAULT_RULE_DESCRIPTORS } from '../linter/linter/rules/index.js';
import type { LintProfile } from '../linter/model/spec.js';

export default defineCommand({
  meta: {
    name: 'spec',
    description: 'Output the DESIGN.md format specification.',
  },
  args: {
    rules: {
      type: 'boolean',
      description: 'Append the active linting rules table.',
    },
    rulesOnly: {
      type: 'boolean',
      description: 'Output only the active linting rules table.',
    },
    format: {
      type: 'string',
      description: 'Output format (markdown, json).',
      default: 'markdown',
    },
    profile: {
      type: 'string',
      description: 'Specification profile: upstream or hermes.',
    },
  },
  async run({ args }) {
    const selectedProfile: LintProfile = args.profile === 'hermes' ? 'hermes' : 'upstream';
    const rulesTable = getRulesTable(DEFAULT_RULE_DESCRIPTORS);
    const specContent = getProfileSpecContent(selectedProfile);

    if (args.format === 'json') {
      const jsonOutput: any = {
        profile: selectedProfile,
      };

      if (args.rulesOnly) {
        jsonOutput.rules = DEFAULT_RULE_DESCRIPTORS.map(r => ({
          name: r.name,
          severity: r.severity,
          description: r.description,
        }));
      } else {
        jsonOutput.spec = specContent;
        if (args.rules) {
          jsonOutput.rules = DEFAULT_RULE_DESCRIPTORS.map(r => ({
            name: r.name,
            severity: r.severity,
            description: r.description,
          }));
        }
      }

      console.log(JSON.stringify(jsonOutput, null, 2));
      return;
    }

    if (args.rulesOnly) {
      console.log(rulesTable);
      return;
    }

    let output = specContent;

    if (args.rules) {
      output += '\n\n## Active Linting Rules\n\n' + rulesTable;
    }

    console.log(output);
  },
});
