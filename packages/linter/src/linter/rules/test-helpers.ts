/**
 * Shared test helper for rule unit tests.
 * Builds a DesignSystemState from parsed overrides, reusing the ModelHandler.
 */
import { ModelHandler } from '../../model/handler.js';
import type { ParsedDesignSystem } from '../../parser/spec.js';
import type { DesignSystemState } from '../../model/spec.js';

const modelHandler = new ModelHandler();

export function buildState(overrides: Partial<ParsedDesignSystem> = {}): DesignSystemState {
  const parsed: ParsedDesignSystem = { sourceMap: new Map(), ...overrides };
  const result = modelHandler.execute(parsed);
  if (!result.success) throw new Error(`Model build failed: ${result.error.message}`);
  return result.data;
}
