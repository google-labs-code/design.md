import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Orphaned tokens — tokens defined but never referenced by any component.
 */
export function orphanedTokens(state: DesignSystemState): RuleFinding[] {
  if (state.components.size === 0) return [];

  const referencedPaths = new Set<string>();
  for (const [, comp] of state.components) {
    for (const [, value] of comp.properties) {
      if (typeof value === 'object' && value !== null && 'type' in value) {
        for (const [key, symValue] of state.symbolTable) {
          if (symValue === value) {
            referencedPaths.add(key);
          }
        }
      }
    }
  }

  const findings: RuleFinding[] = [];
  for (const [name] of state.colors) {
    const path = `colors.${name}`;
    if (!referencedPaths.has(path)) {
      findings.push({
        path,
        message: `'${name}' is defined but never referenced by any component.`,
      });
    }
  }
  return findings;
}

export const orphanedTokensRule: RuleDescriptor = {
  name: 'orphaned-tokens',
  severity: 'warning',
  description: 'Orphaned tokens — tokens defined but never referenced by any component.',
  run: orphanedTokens,
};
