import type { DesignSystemState } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';

/**
 * Missing primary color — warns when colors are defined but no 'primary' exists.
 */
export function missingPrimary(state: DesignSystemState): Diagnostic[] {
  if (state.colors.size > 0 && !state.colors.has('primary')) {
    return [{
      severity: 'warning',
      path: 'colors',
      message: "No 'primary' color defined. The agent will auto-generate key colors, reducing your control over the palette.",
    }];
  }
  return [];
}
