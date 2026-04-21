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

import type { FixerInput, FixerResult } from './spec.js';
import { CANONICAL_ORDER, resolveAlias } from '../linter/rules/section-order.js';

export function fixSectionOrder(input: FixerInput): FixerResult {
  const { sections } = input;
  
  const prelude = sections.find(s => s.heading === '');
  
  const known = sections.filter(s => {
    if (s.heading === '') return false;
    return CANONICAL_ORDER.includes(resolveAlias(s.heading));
  });
  
  const unknown = sections.filter(s => {
    if (s.heading === '') return false;
    return !CANONICAL_ORDER.includes(resolveAlias(s.heading));
  });

  // Sort known sections by canonical order
  known.sort((a, b) => {
    return CANONICAL_ORDER.indexOf(resolveAlias(a.heading)) - CANONICAL_ORDER.indexOf(resolveAlias(b.heading));
  });

  const resultSections = [];
  if (prelude) resultSections.push(prelude);
  resultSections.push(...known);
  resultSections.push(...unknown);

  // Join content with newlines.
  // We might need to ensure there are enough newlines between sections.
  // The parser keeps the trailing newlines if they are part of the section content.
  // Let's see if we need to add a newline between them.
  // If we join with '\n', and content already ends with '\n', we might get double newlines.
  // Let's just join them for now and see what happens in tests!
  const fixedContent = resultSections.map(s => s.content).join('\n');

  const beforeOrder = sections.map(s => s.heading).filter(h => h !== '');
  const afterOrder = resultSections.map(s => s.heading).filter(h => h !== '');

  return {
    success: true,
    fixedContent,
    details: {
      beforeOrder,
      afterOrder
    }
  };
}
