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

import type { DesignSystemState } from '../../model/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

// CSS hex color: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA
const HEX_COLOR_RE = /#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;

// CSS functional color notations: rgb(), rgba(), hsl(), hsla()
const FUNCTIONAL_COLOR_RE = /\b(rgba?|hsla?)\([^\)]+\)/g;

// CSS dimension: number + unit suffix (px, rem, em, pt, mm, cm, in, vh, vw, %)
const CSS_DIMENSION_RE = /\b\d*\.?\d+(px|rem|em|pt|mm|cm|in|vh|vw|%)\b/g;

export function proseTokenLeak(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const docs = state.documentSections ?? [];

  for (const section of docs) {
    let content = section.content;

    // 0. Strip YAML frontmatter block from prelude if present
    if (!section.heading) {
      content = content.replace(/^---[\s\S]*?^---/m, '');
    }

    // 1. Strip markdown links (e.g. [label](#abc)) to prevent matching anchor hashes
    content = content.replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '');

    // 2. Strip HTML tags (e.g. <a href="#abc">) to prevent matching HTML attribute values
    content = content.replace(/<[^>]*>/g, '');

    // 3. Strip HTML comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');

    // 4. Strip fenced code blocks
    content = content.replace(/```[\s\S]*?```/g, '');

    // 5. Strip inline code backticks
    content = content.replace(/`[\s\S]*?`/g, '');

    // 6. Strip markdown headings (e.g. ## Colors)
    content = content.replace(/^#+.*$/gm, '');

    // 7. Strip curly-brace token references (e.g. {colors.primary}) so they are allowed
    content = content.replace(/\{[^{}]+\}/g, '');

    // Check for hex color leaks
    let match;
    // Reset regex indices
    HEX_COLOR_RE.lastIndex = 0;
    FUNCTIONAL_COLOR_RE.lastIndex = 0;
    CSS_DIMENSION_RE.lastIndex = 0;

    while ((match = HEX_COLOR_RE.exec(content)) !== null) {
      findings.push({
        path: section.heading ? `sections.${section.heading}` : 'prelude',
        message: `Literal hex color '${match[0]}' found in markdown prose under '${section.heading || 'prelude'}'. Literal values cause documentation drift. Reference the token by name (e.g., '{colors.primary}') instead.`,
      });
    }

    // Check for functional color leaks
    while ((match = FUNCTIONAL_COLOR_RE.exec(content)) !== null) {
      findings.push({
        path: section.heading ? `sections.${section.heading}` : 'prelude',
        message: `Literal functional color '${match[0]}' found in markdown prose under '${section.heading || 'prelude'}'. Literal values cause documentation drift. Reference the token by name (e.g., '{colors.primary}') instead.`,
      });
    }

    // Check for dimension leaks
    while ((match = CSS_DIMENSION_RE.exec(content)) !== null) {
      findings.push({
        path: section.heading ? `sections.${section.heading}` : 'prelude',
        message: `Literal dimension '${match[0]}' found in markdown prose under '${section.heading || 'prelude'}'. Literal values cause documentation drift. Reference the token by name instead.`,
      });
    }
  }

  return findings;
}

export const proseTokenLeakRule: RuleDescriptor = {
  name: 'prose-token-leak',
  severity: 'warning',
  description: 'Prose token leak — warns when a literal color or dimension token value is written in the markdown prose body.',
  run: proseTokenLeak,
};
