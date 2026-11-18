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
const COMPONENT_BODY_RE = /^\s*COMPONENT:\s*(\S+?)\s*$/;

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

function isAsciiLetter(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isTagNameChar(ch: string): boolean {
  if (isAsciiLetter(ch)) return true;
  const code = ch.charCodeAt(0);
  return (code >= 48 && code <= 57) || ch === '-' || ch === ':' || ch === '_';
}

function isWhitespace(ch: string): boolean {
  return ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r' || ch === '\f';
}

function findTagClose(markup: string, start: number): number {
  let quote: string | null = null;
  for (let i = start; i < markup.length; i++) {
    const ch = markup[i]!;
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === '>') {
      return i;
    }
  }
  return -1;
}

function extractIdFromAttributes(attrSlice: string, anchors: Set<string>): void {
  let i = 0;
  const len = attrSlice.length;

  while (i < len) {
    while (i < len && (isWhitespace(attrSlice[i]!) || attrSlice[i] === '/')) i++;
    if (i >= len) break;

    const nameStart = i;
    while (
      i < len &&
      !isWhitespace(attrSlice[i]!) &&
      attrSlice[i] !== '=' &&
      attrSlice[i] !== '/'
    ) {
      i++;
    }
    const attrName = attrSlice.slice(nameStart, i).toLowerCase();

    while (i < len && isWhitespace(attrSlice[i]!)) i++;
    if (i >= len || attrSlice[i] !== '=') continue;
    i++; // skip '='
    while (i < len && isWhitespace(attrSlice[i]!)) i++;
    if (i >= len) break;

    let attrValue = '';
    const quote = attrSlice[i]!;
    if (quote === '"' || quote === "'") {
      i++;
      const valStart = i;
      while (i < len && attrSlice[i] !== quote) i++;
      attrValue = attrSlice.slice(valStart, i);
      if (i < len) i++;
    } else {
      const valStart = i;
      while (i < len && !isWhitespace(attrSlice[i]!)) i++;
      attrValue = attrSlice.slice(valStart, i);
    }

    if (attrName === 'id' && attrValue.length > 0) {
      anchors.add(attrValue);
    }
  }
}

function skipRawTextElement(markup: string, start: number, tagNameLower: string): number {
  const lowerMarkup = markup.toLowerCase();
  const closeNeedle = `</${tagNameLower}`;
  let searchFrom = start;

  while (searchFrom < markup.length) {
    const idx = lowerMarkup.indexOf(closeNeedle, searchFrom);
    if (idx === -1) return markup.length;
    const afterName = markup[idx + closeNeedle.length];
    if (
      afterName === '>' ||
      afterName === '/' ||
      (afterName !== undefined && isWhitespace(afterName))
    ) {
      const gt = markup.indexOf('>', idx + closeNeedle.length);
      return gt === -1 ? markup.length : gt + 1;
    }
    searchFrom = idx + closeNeedle.length;
  }

  return markup.length;
}

function scanHtmlAnchors(
  markup: string,
  anchors: Set<string>,
  includeComponentMarkers: boolean,
): void {
  let i = 0;
  while (i < markup.length) {
    const lt = markup.indexOf('<', i);
    if (lt === -1) break;

    if (markup.startsWith('<!--', lt)) {
      const endComment = markup.indexOf('-->', lt + 4);
      const commentBody =
        endComment === -1 ? markup.slice(lt + 4) : markup.slice(lt + 4, endComment);
      if (includeComponentMarkers) {
        const match = COMPONENT_BODY_RE.exec(commentBody);
        if (match?.[1]) {
          anchors.add(match[1]);
        }
      }
      if (endComment === -1) break;
      i = endComment + 3;
      continue;
    }

    const nextChar = markup[lt + 1];
    if (!nextChar) break;

    if (nextChar === '/' || nextChar === '!' || nextChar === '?') {
      const gt = markup.indexOf('>', lt + 2);
      if (gt === -1) break;
      i = gt + 1;
      continue;
    }

    if (!isAsciiLetter(nextChar)) {
      i = lt + 1;
      continue;
    }

    let nameEnd = lt + 2;
    while (nameEnd < markup.length && isTagNameChar(markup[nameEnd]!)) {
      nameEnd++;
    }
    const tagNameLower = markup.slice(lt + 1, nameEnd).toLowerCase();
    const tagClose = findTagClose(markup, nameEnd);
    if (tagClose === -1) break;

    const attrSlice = markup.slice(nameEnd, tagClose);
    extractIdFromAttributes(attrSlice, anchors);

    const selfClosing = attrSlice.trimEnd().endsWith('/');
    if (!selfClosing && (tagNameLower === 'script' || tagNameLower === 'style')) {
      i = skipRawTextElement(markup, tagClose + 1, tagNameLower);
    } else {
      i = tagClose + 1;
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
      scanHtmlAnchors((node as Html).value, anchors, false);
    }
  });

  return anchors;
}

export function extractHtmlAnchors(content: string): Set<string> {
  const anchors = new Set<string>();
  scanHtmlAnchors(content, anchors, true);
  return anchors;
}
