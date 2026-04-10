import type { DesignSystemState } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';

/**
 * Orphaned tokens — tokens defined but never referenced by any component.
 */
export function orphanedTokens(state: DesignSystemState): Diagnostic[] {
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

  const diagnostics: Diagnostic[] = [];
  for (const [name] of state.colors) {
    const path = `colors.${name}`;
    if (!referencedPaths.has(path)) {
      diagnostics.push({
        severity: 'warning',
        path,
        message: `'${name}' is defined but never referenced by any component.`,
      });
    }
  }
  return diagnostics;
}
