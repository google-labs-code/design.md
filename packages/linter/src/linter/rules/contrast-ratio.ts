import type { DesignSystemState, ResolvedColor, ResolvedValue } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';
import { contrastRatio } from '../../model/handler.js';

const WCAG_AA_MINIMUM = 4.5;

/**
 * WCAG contrast ratio — warns when component backgroundColor/textColor pairs
 * fall below the AA minimum of 4.5:1.
 */
export function contrastCheck(state: DesignSystemState): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  for (const [compName, comp] of state.components) {
    const bgValue = comp.properties.get('backgroundColor');
    const textValue = comp.properties.get('textColor');
    if (!bgValue || !textValue) continue;

    const bgColor = resolveToColor(bgValue);
    const textColor = resolveToColor(textValue);
    if (!bgColor || !textColor) continue;

    const ratio = contrastRatio(bgColor, textColor);
    if (ratio < WCAG_AA_MINIMUM) {
      diagnostics.push({
        severity: 'warning',
        path: `components.${compName}`,
        message: `textColor (${textColor.hex}) on backgroundColor (${bgColor.hex}) has contrast ratio ${ratio.toFixed(2)}:1, below WCAG AA minimum of ${WCAG_AA_MINIMUM}:1.`,
      });
    }
  }
  return diagnostics;
}

function resolveToColor(value: ResolvedValue): ResolvedColor | null {
  if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'color') {
    return value as ResolvedColor;
  }
  return null;
}
