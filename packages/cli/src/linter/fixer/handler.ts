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
