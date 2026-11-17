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

import { existsSync, readFileSync, realpathSync, statSync } from 'node:fs';
import { isAbsolute, posix, relative, resolve, sep } from 'node:path';
import type { DesignSystemState } from '../../model/spec.js';
import { VALID_COMPONENT_SUB_TOKENS } from '../../model/spec.js';
import {
  extractExternalReferencesFromMarkdown,
  extractHtmlAnchors,
  extractMarkdownAnchors,
  type ExternalReference,
} from '../../parser/external-refs.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const MAX_TRANSITIVE_MARKDOWN_FILES = 32;

interface ValidationContext {
  rootDir: string | undefined;
  realRootDir: string | undefined;
  findings: RuleFinding[];
  visitedFiles: Set<string>;
  fileCache: Map<string, string>;
  markdownAnchorCache: Map<string, Set<string>>;
  htmlAnchorCache: Map<string, Set<string>>;
}

function readCachedFile(filePath: string, cache: Map<string, string>): string {
  const existing = cache.get(filePath);
  if (existing !== undefined) return existing;
  const content = readFileSync(filePath, 'utf-8');
  cache.set(filePath, content);
  return content;
}

function isOutsideRoot(rootDir: string, candidatePath: string): boolean {
  const rel = relative(rootDir, candidatePath);
  return rel === '..' || rel.startsWith(`..${sep}`) || isAbsolute(rel);
}

function validateReferences(
  refs: ExternalReference[],
  ctx: ValidationContext,
  sourceFilePrefix?: string,
): void {
  for (const ref of refs) {
    const findingPath = sourceFilePrefix
      ? ref.section
        ? `${sourceFilePrefix}#${ref.section}`
        : sourceFilePrefix
      : ref.section || undefined;

    if (ref.path.startsWith('/') || /^[a-zA-Z]:/.test(ref.path)) {
      ctx.findings.push({
        severity: 'error',
        path: findingPath,
        message: `External reference \`${ref.raw}\` resolves outside the DESIGN.md directory.`,
      });
      continue;
    }

    const posixNormalized = posix.normalize(ref.path);
    if (
      posixNormalized === '..' ||
      posixNormalized.startsWith('../') ||
      posix.isAbsolute(posixNormalized)
    ) {
      ctx.findings.push({
        severity: 'error',
        path: findingPath,
        message: `External reference \`${ref.raw}\` resolves outside the DESIGN.md directory.`,
      });
      continue;
    }

    if (!ctx.rootDir) continue;

    const targetPath = resolve(ctx.rootDir, posixNormalized);
    if (isOutsideRoot(ctx.rootDir, targetPath)) {
      ctx.findings.push({
        severity: 'error',
        path: findingPath,
        message: `External reference \`${ref.raw}\` resolves outside the DESIGN.md directory.`,
      });
      continue;
    }

    if (!existsSync(targetPath)) {
      ctx.findings.push({
        severity: 'warning',
        path: findingPath,
        message: `External reference \`${ref.raw}\` does not exist.`,
      });
      continue;
    }

    let realTarget: string;
    try {
      realTarget = realpathSync(targetPath);
    } catch {
      ctx.findings.push({
        severity: 'warning',
        path: findingPath,
        message: `External reference \`${ref.raw}\` does not exist.`,
      });
      continue;
    }

    const effectiveRealRoot = ctx.realRootDir ?? ctx.rootDir;
    if (isOutsideRoot(effectiveRealRoot, realTarget)) {
      ctx.findings.push({
        severity: 'error',
        path: findingPath,
        message: `External reference \`${ref.raw}\` resolves outside the DESIGN.md directory.`,
      });
      continue;
    }

    let isRegularFile = false;
    try {
      isRegularFile = statSync(realTarget).isFile();
    } catch {
      isRegularFile = false;
    }
    if (!isRegularFile) {
      ctx.findings.push({
        severity: 'warning',
        path: findingPath,
        message: `External reference \`${ref.raw}\` does not exist.`,
      });
      continue;
    }

    const ext = posix.extname(posixNormalized).toLowerCase();
    const isMarkdown = ext === '.md' || ext === '.markdown';
    const isHtml = ext === '.html' || ext === '.htm';

    if (ref.fragment !== undefined) {
      if (isMarkdown) {
        let anchors = ctx.markdownAnchorCache.get(realTarget);
        if (!anchors) {
          const content = readCachedFile(realTarget, ctx.fileCache);
          anchors = extractMarkdownAnchors(content);
          ctx.markdownAnchorCache.set(realTarget, anchors);
        }
        if (!anchors.has(ref.fragment)) {
          ctx.findings.push({
            severity: 'warning',
            path: findingPath,
            message: `External reference \`${ref.raw}\` has no matching anchor \`#${ref.fragment}\`.`,
          });
        }
      } else if (isHtml) {
        let anchors = ctx.htmlAnchorCache.get(realTarget);
        if (!anchors) {
          const content = readCachedFile(realTarget, ctx.fileCache);
          anchors = extractHtmlAnchors(content);
          ctx.htmlAnchorCache.set(realTarget, anchors);
        }
        if (!anchors.has(ref.fragment)) {
          ctx.findings.push({
            severity: 'warning',
            path: findingPath,
            message: `External reference \`${ref.raw}\` has no matching anchor \`#${ref.fragment}\`.`,
          });
        }
      } else {
        ctx.findings.push({
          severity: 'info',
          path: findingPath,
          message: `External reference \`${ref.raw}\` fragment \`#${ref.fragment}\` is not checked for this file type.`,
        });
      }
    }

    if (
      isMarkdown &&
      !ctx.visitedFiles.has(realTarget) &&
      ctx.visitedFiles.size < MAX_TRANSITIVE_MARKDOWN_FILES
    ) {
      ctx.visitedFiles.add(realTarget);
      const content = readCachedFile(realTarget, ctx.fileCache);
      const nestedRefs = extractExternalReferencesFromMarkdown(content);
      if (nestedRefs.length > 0) {
        validateReferences(nestedRefs, ctx, posixNormalized);
      }
    }
  }
}

/**
 * Broken/circular references, unknown component sub-tokens, and external @-references.
 */
export function brokenRef(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  for (const [compName, comp] of state.components) {
    // Unresolved references
    for (const ref of comp.unresolvedRefs) {
      findings.push({
        path: `components.${compName}`,
        message: `Reference ${ref} does not resolve to any defined token.`,
      });
    }

    // Unknown component sub-tokens (lower severity override)
    for (const [propName] of comp.properties) {
      if (!(VALID_COMPONENT_SUB_TOKENS as readonly string[]).includes(propName)) {
        findings.push({
          severity: 'warning',
          path: `components.${compName}.${propName}`,
          message: `'${propName}' is not a recognized component sub-token. Valid sub-tokens: ${VALID_COMPONENT_SUB_TOKENS.join(', ')}.`,
        });
      }
    }
  }

  const externalReferences = state.externalReferences;
  if (externalReferences && externalReferences.length > 0) {
    const rootDir = state.baseDir ? resolve(state.baseDir) : undefined;
    let realRootDir: string | undefined;
    const visitedFiles = new Set<string>();

    if (rootDir && existsSync(rootDir)) {
      try {
        realRootDir = realpathSync(rootDir);
      } catch {
        realRootDir = rootDir;
      }
      const rootDocCandidate = state.filePath ? resolve(state.filePath) : resolve(rootDir, 'DESIGN.md');
      if (existsSync(rootDocCandidate)) {
        try {
          visitedFiles.add(realpathSync(rootDocCandidate));
        } catch {
          // Ignore if root file cannot be resolved
        }
      }
    }

    validateReferences(externalReferences, {
      rootDir,
      realRootDir,
      findings,
      visitedFiles,
      fileCache: new Map(),
      markdownAnchorCache: new Map(),
      htmlAnchorCache: new Map(),
    });
  }

  return findings;
}

export const brokenRefRule: RuleDescriptor = {
  name: 'broken-ref',
  severity: 'error',
  description: 'Broken/circular references, unknown component sub-tokens, and invalid or missing external @-references.',
  run: brokenRef,
};
