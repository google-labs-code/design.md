/**
 * Shared test helper for rule unit tests.
 * Builds a DesignSystemState from parsed overrides, reusing the ModelHandler.
 */
import { ModelHandler } from '../../model/handler.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';
import type { DesignSystemState } from '../../model/spec.js';

let modelHandler: ModelHandler | undefined;

export function buildState(overrides: Partial<ParsedDesignSystem> = {}): DesignSystemState {
  if (!modelHandler) {
    modelHandler = new ModelHandler();
  }
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const result = modelHandler.execute(parsed);
  const hasErrors = result.findings.some(d => d.severity === 'error');
  if (hasErrors) {
    throw new Error(`Model build failed: ${result.findings.map(d => d.message).join(', ')}`);
  }
  return result.designSystem;
}
