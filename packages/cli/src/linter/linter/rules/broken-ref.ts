import type { DesignSystemState } from '../../model/spec.js';
import { VALID_COMPONENT_SUB_TOKENS } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Broken/circular references and unknown component sub-tokens.
 */
export function brokenRef(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    // Unresolved references
    for (const ref of comp.unresolvedRefs) {
      findings.push({
        path: `components.${compName}`,
        message: `Reference ${ref} does not resolve to any defined token.`,
      });
    }

    // Unknown component sub-tokens (lower severity override)
    for (const [propName] of comp.properties) {
      if (!(VALID_COMPONENT_SUB_TOKENS as readonly string[]).includes(propName)) {
        findings.push({
          severity: 'warning',
          path: `components.${compName}.${propName}`,
          message: `'${propName}' is not a recognized component sub-token. Valid sub-tokens: ${VALID_COMPONENT_SUB_TOKENS.join(', ')}.`,
        });
      }
    }
  }
  return findings;
}

export const brokenRefRule: RuleDescriptor = {
  name: 'broken-ref',
  severity: 'error',
  description: 'Broken/circular references and unknown component sub-tokens.',
  run: brokenRef,
};
