import { defineCommand } from 'citty';
import { getSpecContent, getRulesTable } from '../linter/spec-gen/spec-helpers.js';
import { DEFAULT_RULE_DESCRIPTORS } from '../linter/linter/rules/index.js';

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
  },
  async run({ args }) {
    const rulesTable = getRulesTable(DEFAULT_RULE_DESCRIPTORS);
    
    if (args.format === 'json') {
      const jsonOutput: any = {};
      
      if (args.rulesOnly) {
        jsonOutput.rules = DEFAULT_RULE_DESCRIPTORS.map(r => ({
          name: r.name,
          severity: r.severity,
          description: r.description,
        }));
      } else {
        jsonOutput.spec = getSpecContent();
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
    
    let output = getSpecContent();
    
    if (args.rules) {
      output += '\n\n## Active Linting Rules\n\n' + rulesTable;
    }
    
    console.log(output);
  },
});
