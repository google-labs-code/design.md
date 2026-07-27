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

import type { CssVarDeclaration, CssVarsEmitterSpec, CssVarsEmitterResult } from './spec.js';
import type { DesignSystemState, ResolvedDimension } from '../model/spec.js';

/**
 * Pure function mapping DesignSystemState → CSS custom property declarations.
 * No side effects.
 */
export class CssVarsEmitterHandler implements CssVarsEmitterSpec {
  execute(state: DesignSystemState): CssVarsEmitterResult {
    const declarations: CssVarDeclaration[] = [];

    for (const [name, color] of state.colors) {
      declarations.push({
        name: `color-${this.cssSafe(name)}`,
        value: color.hex.toLowerCase(),
      });
    }

    this.mapDimensionGroup(declarations, 'spacing', state.spacing);
    this.mapDimensionGroup(declarations, 'rounded', state.rounded);

    return { success: true, data: { declarations } };
  }

  private mapDimensionGroup(
    declarations: CssVarDeclaration[],
    group: 'spacing' | 'rounded',
    dims: Map<string, ResolvedDimension>,
  ): void {
    for (const [name, dim] of dims) {
      declarations.push({
        name: `${group}-${this.cssSafe(name)}`,
        value: this.dimToString(dim),
      });
    }
  }

  private dimToString(dim: ResolvedDimension): string {
    return `${dim.value}${dim.unit}`;
  }

  /**
   * Make a token name safe for a CSS custom property. Nested tokens flatten to
   * dotted keys (e.g. `background.light`); a literal dot makes a browser drop
   * the declaration, so collapse dots to hyphens.
   */
  private cssSafe(name: string): string {
    return name.replace(/\./g, '-');
  }
}
