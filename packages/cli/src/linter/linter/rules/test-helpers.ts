// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
