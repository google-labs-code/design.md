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
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';
import type { Root, Heading, InlineCode, Html } from 'mdast';

export interface ExternalReference {
  raw: string;
  path: string;
  fragment?: string | undefined;
  section?: string | undefined;
  line?: number | undefined;
}

const FILE_EXT_RE = /^[a-zA-Z][a-zA-Z0-9]*$/;
const COMPONENT_MARKER_RE = /<!--\s*COMPONENT:\s*(\S+?)\s*-->/g;
const HTML_COMMENT_RE = /<!--[\s\S]*?-->/g;
const SCRIPT_STYLE_BLOCK_RE = /<(?:script|style)\b[^>]*>[\s\S]*?<\/(?:script|style)>/gi;
const HTML_OPEN_TAG_RE = /<[a-zA-Z](?:"[^"]*"|'[^']*'|[^>"'])*>/g;
const HTML_ID_ATTR_RE = /\bid\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s"'=<>`]+))/gi;

export function extractNodeText(node: unknown): string {
  if (!node || typeof node !== 'object') return '';
  if ('value' in node && typeof (node as { value: unknown }).value === 'string') {
    return (node as { value: string }).value;
  }
  if ('children' in node && Array.isArray((node as { children: unknown[] }).children)) {
    return (node as { children: unknown[] }).children.map(extractNodeText).join('');
  }
  return '';
}

/**
 * Parse an inline code span value into an external `@<path>[#<fragment>]` reference.
 * Returns null if the string is not a syntactic external file reference.
 */
export function parseExternalReference(
  inlineCodeValue: string,
): { raw: string; path: string; fragment?: string } | null {
  if (!inlineCodeValue.startsWith('@')) return null;
  if (/\s/.test(inlineCodeValue) || inlineCodeValue.includes('\\')) return null;

  const hashIndex = inlineCodeValue.indexOf('#');
  let path: string;
  let fragment: string | undefined;

  if (hashIndex !== -1) {
    path = inlineCodeValue.slice(1, hashIndex);
    fragment = inlineCodeValue.slice(hashIndex + 1);
    if (fragment.length === 0 || fragment.includes('#')) return null;
  } else {
    path = inlineCodeValue.slice(1);
  }

  if (path.length === 0 || path.endsWith('/')) return null;

  const lastSlash = path.lastIndexOf('/');
  const basename = lastSlash === -1 ? path : path.slice(lastSlash + 1);
  const lastDot = basename.lastIndexOf('.');
  if (lastDot <= 0) return null;

  const stem = basename.slice(0, lastDot);
  if (/^\.+$/.test(stem)) return null;

  const ext = basename.slice(lastDot + 1);
  if (!FILE_EXT_RE.test(ext)) return null;

  return fragment !== undefined
    ? { raw: inlineCodeValue, path, fragment }
    : { raw: inlineCodeValue, path };
}

export function extractExternalReferencesFromAst(ast: Root): ExternalReference[] {
  const refs: ExternalReference[] = [];
  let currentSection: string | undefined;

  visit(ast, (node) => {
    if (node.type === 'heading') {
      const heading = node as Heading;
      if (heading.depth === 2) {
        const text = extractNodeText(heading).trim();
        if (text) {
          currentSection = text;
        }
      }
      return;
    }

    if (node.type === 'inlineCode') {
      const parsed = parseExternalReference((node as InlineCode).value);
      if (parsed) {
        refs.push({
          ...parsed,
          section: currentSection,
          line: node.position?.start.line,
        });
      }
    }
  });

  return refs;
}

export function extractExternalReferencesFromMarkdown(content: string): ExternalReference[] {
  const ast = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .parse(content) as Root;
  return extractExternalReferencesFromAst(ast);
}

function addHtmlTagIds(markup: string, anchors: Set<string>): void {
  const tags = markup.match(HTML_OPEN_TAG_RE);
  if (!tags) return;
  for (const tag of tags) {
    HTML_ID_ATTR_RE.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = HTML_ID_ATTR_RE.exec(tag)) !== null) {
      const id = match[1] || match[2] || match[3];
      if (id) anchors.add(id);
    }
  }
}

export function extractMarkdownAnchors(content: string): Set<string> {
  const anchors = new Set<string>();
  const slugCounts = new Map<string, number>();

  const ast = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ['yaml'])
    .parse(content) as Root;

  visit(ast, (node) => {
    if (node.type === 'heading') {
      const text = extractNodeText(node as Heading).trim();
      const baseSlug = text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}_ -]/gu, '')
        .replace(/ /g, '-');
      if (!baseSlug) return;

      const count = slugCounts.get(baseSlug) ?? 0;
      slugCounts.set(baseSlug, count + 1);

      const slug = count === 0 ? baseSlug : `${baseSlug}-${count}`;
      anchors.add(slug);

      const collapsed = baseSlug.replace(/-+/g, '-');
      if (collapsed !== baseSlug) {
        anchors.add(count === 0 ? collapsed : `${collapsed}-${count}`);
      }
      return;
    }

    if (node.type === 'html') {
      const cleaned = (node as Html).value.replace(HTML_COMMENT_RE, '');
      addHtmlTagIds(cleaned, anchors);
    }
  });

  return anchors;
}

export function extractHtmlAnchors(content: string): Set<string> {
  const anchors = new Set<string>();

  COMPONENT_MARKER_RE.lastIndex = 0;
  let markerMatch: RegExpExecArray | null;
  while ((markerMatch = COMPONENT_MARKER_RE.exec(content)) !== null) {
    const markerName = markerMatch[1];
    if (markerName) anchors.add(markerName);
  }

  const stripped = content
    .replace(HTML_COMMENT_RE, '')
    .replace(SCRIPT_STYLE_BLOCK_RE, '');
  addHtmlTagIds(stripped, anchors);

  return anchors;
}
