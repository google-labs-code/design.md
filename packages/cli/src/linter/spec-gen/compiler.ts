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

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';
import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

export async function compileMdx(source: string, scope: Record<string, unknown>): Promise<string> {
  const tree = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .parse(source) as Root;

  // Evaluate MDX expression nodes and replace with text
  visit(tree, (node, index, parent) => {
    if (node.type === 'mdxTextExpression' || node.type === 'mdxFlowExpression') {
      const expr = (node as any).value as string;
      const fn = new Function(...Object.keys(scope), `return ${expr}`);
      const result = String(fn(...Object.values(scope)));

      if (node.type === 'mdxTextExpression') {
        // Inline: replace with text node
        (node as any).type = 'text';
        (node as any).value = result;
      } else {
        // Block: use html node to preserve markdown formatting literally
        (node as any).type = 'html';
        (node as any).value = result;
      }
    }
  });

  // Remove import/export statements from the tree
  visit(tree, 'mdxjsEsm', (_node, index, parent) => {
    if (parent && index !== undefined) {
      parent.children.splice(index, 1);
      return index; // revisit this index since we removed a node
    }
  });

  const file = unified()
    .use(remarkStringify)
    .stringify(tree);

  return String(file);
}
