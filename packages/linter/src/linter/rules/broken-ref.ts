import type { DesignSystemState } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';
import { VALID_COMPONENT_SUB_TOKENS } from '../../model/spec.js';

/**
 * Broken/circular references and unknown component sub-tokens.
 */
export function brokenRef(state: DesignSystemState): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const [compName, comp] of state.components) {
    // Unresolved references
    for (const ref of comp.unresolvedRefs) {
      diagnostics.push({
        severity: 'error',
        path: `components.${compName}`,
        message: `Reference ${ref} does not resolve to any defined token.`,
      });
    }

    // Unknown component sub-tokens
    for (const [propName] of comp.properties) {
      if (!(VALID_COMPONENT_SUB_TOKENS as readonly string[]).includes(propName)) {
        diagnostics.push({
          severity: 'error',
          path: `components.${compName}.${propName}`,
          message: `'${propName}' is not a recognized component sub-token. Valid sub-tokens: ${VALID_COMPONENT_SUB_TOKENS.join(', ')}.`,
        });
      }
    }
  }
  return diagnostics;
}
