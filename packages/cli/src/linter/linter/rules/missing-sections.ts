import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

/**
 * Missing sections — notes when optional sections (spacing, rounded) are absent.
 */
export function missingSections(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const sections = [
    { map: state.spacing, name: 'spacing', fallback: 'Layout spacing will fall back to agent defaults.' },
    { map: state.rounded, name: 'rounded', fallback: 'Corner rounding will fall back to agent defaults.' },
  ];

  for (const { map, name, fallback } of sections) {
    if (map.size === 0 && state.colors.size > 0) {
      findings.push({
        path: name,
        message: `No '${name}' section defined. ${fallback}`,
      });
    }
  }
  return findings;
}

export const missingSectionsRule: RuleDescriptor = {
  name: 'missing-sections',
  severity: 'info',
  description: 'Missing sections — notes when optional sections (spacing, rounded) are absent.',
  run: missingSections,
};
