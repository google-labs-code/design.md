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

import type { ColorIndexEntry, DesignSystemState, ResolvedColor, ResolvedValue } from '../../model/spec.js';
import type { LineRange, SuppressionDirective } from '../../parser/spec.js';
import type { RuleDescriptor, RuleFinding } from './types.js';

const RULE_NAME = 'prose-token-mismatch';

/**
 * Hex literals embedded in markdown prose.
 * The negative lookbehind avoids matching the leading `#` of markdown anchors
 * like `#section`. We accept 3, 4, 6, and 8 digit hex.
 */
const HEX_RE = /(?<![A-Za-z0-9])#([0-9A-Fa-f]{8}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{3})\b/g;

/** Backticked token key like `tertiary`, `colors.tertiary`, `primary.500`. */
const BACKTICK_KEY_RE = /`([A-Za-z][\w.-]*)`/g;

/** Anchor search window (chars on each side of the hex literal). */
const ANCHOR_WINDOW = 40;

/**
 * `prose-token-mismatch` — flags hex literals in markdown prose that drift
 * from the declared token values.
 *
 * Sub-rule A (always on): every hex literal in prose must appear as the
 *   resolved value of some color token.
 * Sub-rule B (anchor-driven): when a hex appears next to a token's
 *   `humanName` or a backticked token key, the hex must equal that
 *   specific token's resolved value.
 *
 * Suppressible per-line, per-region, or per-file via
 * `<!-- design.md disable-next-line prose-token-mismatch -->` and friends.
 */
export function proseTokenMismatch(state: DesignSystemState): RuleFinding[] {
  const findings: RuleFinding[] = [];
  const sections = state.documentSections;
  if (!sections || sections.length === 0) return findings;

  // Pre-build a humanName → token entry index for anchor matching.
  const humanNameIndex = new Map<string, ColorIndexEntry>();
  for (const entries of state.colorIndex.values()) {
    for (const entry of entries) {
      if (entry.humanName) {
        humanNameIndex.set(entry.humanName.toLowerCase(), entry);
      }
    }
  }

  for (const section of sections) {
    const lines = section.content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i] ?? '';
      const absLine = section.startLine + i;

      if (isInCodeBlock(absLine, section.codeBlockRanges)) continue;
      if (isSuppressed(absLine, RULE_NAME, section.suppressions)) continue;

      HEX_RE.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = HEX_RE.exec(line)) !== null) {
        const literal = m[0];
        const hex = normalizeHex(literal);
        const matches = state.colorIndex.get(hex) ?? [];

        const sectionLabel = section.heading || 'prose';
        const path = `prose:${sectionLabel}:${absLine}`;

        // Sub-rule B: anchored mismatch — anchor present, but hex disagrees
        // with the anchored token's value.
        const anchor = findInlineAnchor(line, m.index, state, humanNameIndex);
        if (anchor) {
          const anchored = state.symbolTable.get(`colors.${anchor.tokenKey}`);
          const anchoredHex = resolvedHex(anchored);
          if (anchoredHex && anchoredHex !== hex) {
            findings.push({
              path,
              message: `Prose says ${anchor.label} (${literal}), but token '${anchor.tokenKey}' = ${anchoredHex}.`,
            });
            continue;
          }
        }

        // Sub-rule A: orphan — hex doesn't appear as any token's value.
        if (matches.length === 0) {
          findings.push({
            path,
            message: `Hex ${literal} in prose does not match any defined token value.`,
          });
        }
      }
    }
  }
  return findings;
}

interface InlineAnchor {
  /** The token key to look up in the symbol table (relative to `colors.`). */
  tokenKey: string;
  /** Display label used in the finding message. */
  label: string;
}

/**
 * Look within ~ANCHOR_WINDOW chars on either side of the hex for a token
 * anchor — either a backticked token key (`tertiary`, `colors.tertiary`) or
 * a humanName from a ramp anchor ("Boston Clay").
 */
function findInlineAnchor(
  line: string,
  hexStart: number,
  state: DesignSystemState,
  humanNameIndex: Map<string, ColorIndexEntry>,
): InlineAnchor | null {
  const winStart = Math.max(0, hexStart - ANCHOR_WINDOW);
  const winEnd = Math.min(line.length, hexStart + ANCHOR_WINDOW);
  const window = line.slice(winStart, winEnd);

  // Backticked token keys win — they're explicit.
  BACKTICK_KEY_RE.lastIndex = 0;
  let bm: RegExpExecArray | null;
  while ((bm = BACKTICK_KEY_RE.exec(window)) !== null) {
    const raw = bm[1]!;
    const tokenKey = raw.startsWith('colors.') ? raw.slice('colors.'.length) : raw;
    if (state.symbolTable.has(`colors.${tokenKey}`)) {
      return { tokenKey, label: `\`${raw}\`` };
    }
  }

  // humanName match — case-insensitive whole-phrase scan.
  const lower = window.toLowerCase();
  for (const [name, entry] of humanNameIndex) {
    const idx = lower.indexOf(name);
    if (idx < 0) continue;
    // Require word-boundary-ish surroundings so "red" doesn't match "redacted".
    const before = idx > 0 ? lower[idx - 1] : ' ';
    const afterIdx = idx + name.length;
    const after = afterIdx < lower.length ? lower[afterIdx] : ' ';
    if (isWordChar(before) || isWordChar(after)) continue;
    return { tokenKey: entry.tokenKey, label: entry.humanName ?? entry.tokenKey };
  }

  return null;
}

function isWordChar(ch: string | undefined): boolean {
  if (!ch) return false;
  return /[\w]/.test(ch);
}

function resolvedHex(value: ResolvedValue | undefined): string | null {
  if (!value || typeof value !== 'object' || !('type' in value)) return null;
  if (value.type !== 'color') return null;
  return (value as ResolvedColor).hex.toLowerCase();
}

/**
 * Normalize a hex literal to lowercase #rrggbb (or #rrggbbaa). Expands
 * 3- and 4-digit shorthand. Input is assumed to already be a valid hex
 * literal (the caller matches against `HEX_RE`).
 */
export function normalizeHex(raw: string): string {
  let hex = raw.toLowerCase();
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  } else if (hex.length === 5) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}${hex[4]}${hex[4]}`;
  }
  return hex;
}

function isInCodeBlock(line: number, ranges: LineRange[]): boolean {
  for (const r of ranges) {
    if (line >= r.startLine && line <= r.endLine) return true;
  }
  return false;
}

function isSuppressed(line: number, rule: string, suppressions: SuppressionDirective[]): boolean {
  for (const s of suppressions) {
    if (line < s.fromLine || line > s.toLine) continue;
    if (s.rule === '*' || s.rule === rule) return true;
  }
  return false;
}

export const proseTokenMismatchRule: RuleDescriptor = {
  name: RULE_NAME,
  severity: 'warning',
  description: 'Hex literals in prose drift from token values.',
  run: proseTokenMismatch,
};
