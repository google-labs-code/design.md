import type { DesignSystemState } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';
import { isValidColor, isTokenReference } from '../../model/spec.js';

/**
 * Invalid color format — colors must be valid hex (#RGB or #RRGGBB).
 */
export function invalidColor(state: DesignSystemState): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const [key, value] of state.symbolTable) {
    if (key.startsWith('colors.') && typeof value === 'string') {
      if (isTokenReference(value)) continue;
      if (!isValidColor(value)) {
        diagnostics.push({
          severity: 'error',
          path: key,
          message: `'${value}' is not a valid hex color. Expected #RGB or #RRGGBB.`,
        });
      }
    }
  }
  return diagnostics;
}
