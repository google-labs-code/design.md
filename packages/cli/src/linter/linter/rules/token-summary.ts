import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Token count summary — emits an info diagnostic summarizing how many
 * tokens are defined in each section.
 */
export function tokenSummary(state: DesignSystemState): RuleFinding[] {
  const parts: string[] = [];
  if (state.colors.size > 0) parts.push(`${state.colors.size} color${state.colors.size !== 1 ? 's' : ''}`);
  if (state.typography.size > 0) parts.push(`${state.typography.size} typography scale${state.typography.size !== 1 ? 's' : ''}`);
  if (state.rounded.size > 0) parts.push(`${state.rounded.size} rounding level${state.rounded.size !== 1 ? 's' : ''}`);
  if (state.spacing.size > 0) parts.push(`${state.spacing.size} spacing token${state.spacing.size !== 1 ? 's' : ''}`);
  if (state.components.size > 0) parts.push(`${state.components.size} component${state.components.size !== 1 ? 's' : ''}`);

  if (parts.length > 0) {
    return [{
      message: `Design system defines ${parts.join(', ')}.`,
    }];
  }
  return [];
}

export const tokenSummaryRule: RuleDescriptor = {
  name: 'token-summary',
  severity: 'info',
  description: 'Token count summary — emits an info diagnostic summarizing how many tokens are defined.',
  run: tokenSummary,
};
