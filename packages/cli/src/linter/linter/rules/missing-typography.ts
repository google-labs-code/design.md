import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Missing typography — warns when colors are defined but no typography tokens exist.
 * Without typography tokens, agents will fall back to their own font choices,
 * reducing the author's control over the design system's typographic identity.
 */
export function missingTypography(state: DesignSystemState): RuleFinding[] {
  if (state.typography.size === 0 && state.colors.size > 0) {
    return [{
      path: 'typography',
      message: "No typography tokens defined. Agents will use default font choices, reducing your control over the design system's typographic identity.",
    }];
  }
  return [];
}

export const missingTypographyRule: RuleDescriptor = {
  name: 'missing-typography',
  severity: 'warning',
  description: "Missing typography — warns when colors are defined but no typography tokens exist.",
  run: missingTypography,
};
