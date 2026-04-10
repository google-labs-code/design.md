import type { DesignSystemState, ResolvedDimension } from '../../model/spec.js';
import type { Diagnostic } from '../spec.js';
import { isStandardDimension } from '../../model/spec.js';

const BASE_FONT_SIZE = 16;

/**
 * Non-standard dimension unit — warns when dimensions use units
 * other than px or rem (the spec-standard units).
 */
export function nonStandardUnit(state: DesignSystemState): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  const checkDimension = (dim: ResolvedDimension, path: string) => {
    const raw = `${dim.value}${dim.unit}`;
    if (!isStandardDimension(raw)) {
      let suggestion = `consider converting to px or rem`;
      if (dim.unit === 'em' || dim.unit === 'rem') {
        const pxValue = dim.value * BASE_FONT_SIZE;
        suggestion = `consider converting: ${raw} ≈ ${pxValue}px (at ${BASE_FONT_SIZE}px base)`;
      }
      diagnostics.push({
        severity: 'warning',
        path,
        message: `'${raw}' uses non-standard unit '${dim.unit}'. Spec recommends px or rem — ${suggestion}.`,
      });
    }
  };

  // Check typography dimension properties
  for (const [name, typo] of state.typography) {
    const dimProps = ['fontSize', 'lineHeight', 'letterSpacing'] as const;
    for (const prop of dimProps) {
      const dim = typo[prop];
      if (dim) checkDimension(dim, `typography.${name}.${prop}`);
    }
  }

  // Check rounded
  for (const [name, dim] of state.rounded) {
    checkDimension(dim, `rounded.${name}`);
  }

  // Check spacing
  for (const [name, dim] of state.spacing) {
    checkDimension(dim, `spacing.${name}`);
  }

  return diagnostics;
}
