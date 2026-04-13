import type { DesignSystemState, ResolvedColor, ResolvedValue } from '../../model/spec.js';
import { contrastRatio } from '../../model/handler.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const WCAG_AA_MINIMUM = 4.5;

/**
 * WCAG contrast ratio — warns when component backgroundColor/textColor pairs
 * fall below the AA minimum of 4.5:1.
 */
export function contrastCheck(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    const bgValue = comp.properties.get('backgroundColor');
    const textValue = comp.properties.get('textColor');
    if (!bgValue || !textValue) continue;

    const bgColor = resolveToColor(bgValue);
    const textColor = resolveToColor(textValue);
    if (!bgColor || !textColor) continue;

    const ratio = contrastRatio(bgColor, textColor);
    if (ratio < WCAG_AA_MINIMUM) {
      findings.push({
        path: `components.${compName}`,
        message: `textColor (${textColor.hex}) on backgroundColor (${bgColor.hex}) has contrast ratio ${ratio.toFixed(2)}:1, below WCAG AA minimum of ${WCAG_AA_MINIMUM}:1.`,
      });
    }
  }
  return findings;
}

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}

export const contrastCheckRule: RuleDescriptor = {
  name: 'contrast-ratio',
  severity: 'warning',
  description: 'WCAG contrast ratio — warns when component backgroundColor/textColor pairs fall below the AA minimum of 4.5:1.',
  run: contrastCheck,
};
