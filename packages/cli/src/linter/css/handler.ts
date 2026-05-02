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

import type { DesignSystemState } from '../model/spec.js';

function toKebabCase(s: string) {
  return s
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/^-/, '');
}

export type CssEmitterResult =
  | { success: true; data: string }
  | { success: false; error: Error };

export class CssEmitterHandler {
  execute(state: DesignSystemState): CssEmitterResult {
    const lines: string[] = [':root {'];

    for (const [name, color] of state.colors) {
      lines.push(`  --color-${toKebabCase(name)}: ${color.hex};`);
    }

    for (const [name, typo] of state.typography) {
      const prefix = `  --typography-${toKebabCase(name)}`;
      if (typo.fontFamily) lines.push(`${prefix}-font-family: ${typo.fontFamily};`);
      if (typo.fontSize) lines.push(`${prefix}-font-size: ${typo.fontSize.value}${typo.fontSize.unit};`);
      if (typo.fontWeight) lines.push(`${prefix}-font-weight: ${typo.fontWeight};`);
      if (typo.letterSpacing) lines.push(`${prefix}-letter-spacing: ${typo.letterSpacing.value}${typo.letterSpacing.unit};`);
      if (typo.lineHeight) lines.push(`${prefix}-line-height: ${typo.lineHeight.value}${typo.lineHeight.unit || ''};`);
    }

    for (const [name, dim] of state.spacing) {
        lines.push(`  --space-${toKebabCase(name)}: ${dim.value}${dim.unit};`);
    }
    
    for (const [name, dim] of state.rounded) {
        lines.push(`  --rounded-${toKebabCase(name)}: ${dim.value}${dim.unit};`);
    }

    lines.push('}');
    return { success: true, data: lines.join('\n') };
  }
}
