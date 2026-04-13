import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { RuleDescriptor } from '../linter/rules/types.js';

export function getSpecContent(): string {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  
  // Candidate paths based on different execution contexts
  const candidates = [
    resolve(currentDir, '../spec.md'), // Original assumption
    resolve(currentDir, './linter/spec.md'), // Running from dist/index.js
    resolve(currentDir, './spec.md'), // Running from dist/linter/index.js
    resolve(currentDir, '../../../../../docs/spec.md'), // Dev path from src/linter/spec-gen/
    resolve(currentDir, '../../../docs/spec.md'), // Dev path from dist/
  ];

  for (const p of candidates) {
    try {
      return readFileSync(p, 'utf-8');
    } catch {
      // try next
    }
  }

  throw new Error(`Failed to load spec.md. Tried: ${candidates.join(', ')}`);
}

export function getRulesTable(rules: RuleDescriptor[]): string {
  let table = '| Rule | Severity | What it checks |\n';
  table += '|------|----------|----------------|\n';
  
  for (const rule of rules) {
    table += `| ${rule.name} | ${rule.severity} | ${rule.description} |\n`;
  }
  
  return table;
}
