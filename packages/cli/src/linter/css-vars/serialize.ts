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

import type { CssVarDeclaration } from './spec.js';

export interface SerializeCssVarsOptions {
  prefix?: string | undefined;
}

/**
 * Serialize declarations to a CSS `:root { ... }` block string.
 * Pure function — no I/O. Values are emitted verbatim.
 */
export function serializeCssVars(
  declarations: CssVarDeclaration[],
  options: SerializeCssVarsOptions = {},
): string {
  const variablePrefix = options.prefix ? `${options.prefix}-` : '';
  const lines = declarations.map(
    declaration => `  --${variablePrefix}${declaration.name}: ${declaration.value};`,
  );

  if (lines.length === 0) return ':root {\n}\n';
  return `:root {\n${lines.join('\n')}\n}\n`;
}
