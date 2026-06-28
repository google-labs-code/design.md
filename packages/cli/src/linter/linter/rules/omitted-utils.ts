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
import type { OmittedEntry } from '../../parser/spec.js';

/** Valid section names that can appear in the `omitted` key. */
export const VALID_OMITTED_SECTIONS = new Set([
  'colors',
  'typography',
  'spacing',
  'rounded',
  'components',
]);

/**
 * Extract the section name from an OmittedEntry.
 */
export function getSectionName(entry: OmittedEntry): string {
  return typeof entry === 'string' ? entry : entry.section;
}

/**
 * Build a Set of section names declared as omitted.
 */
export function getOmittedSections(state: DesignSystemState): Set<string> {
  const omitted = new Set<string>();
  if (state.omitted) {
    for (const entry of state.omitted) {
      omitted.add(getSectionName(entry));
    }
  }
  return omitted;
}

/**
 * Check if a specific section is declared as omitted.
 */
export function isOmitted(state: DesignSystemState, section: string): boolean {
  if (!state.omitted) return false;
  return state.omitted.some(e => getSectionName(e) === section);
}
