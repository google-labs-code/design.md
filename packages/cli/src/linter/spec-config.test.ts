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

import { describe, it, expect } from 'bun:test';
import { writeFileSync, unlinkSync } from 'node:fs';
import {
  loadSpecConfig,
  SPEC_VERSION,
  STANDARD_UNITS,
  SECTIONS,
  TYPOGRAPHY_PROPERTIES,
  COMPONENT_SUB_TOKENS,
  CORE_COLOR_ROLES,
  RECOMMENDED_TOKENS,
  EXAMPLES,
  CANONICAL_ORDER,
  SECTION_ALIASES,
  resolveAlias,
  VALID_TYPOGRAPHY_PROPS,
  VALID_COMPONENT_SUB_TOKENS,
} from './spec-config.js';

// ── Loader robustness ─────────────────────────────────────────────────

describe('spec-config loader', () => {
  it('throws when file does not exist', () => {
    expect(() => loadSpecConfig('non-existent.yaml')).toThrow();
  });

  it('throws when YAML is malformed', () => {
    const path = '__test_malformed.yaml';
    writeFileSync(path, 'invalid: yaml: :');
    try {
      expect(() => loadSpecConfig(path)).toThrow();
    } finally {
      unlinkSync(path);
    }
  });

  it('throws when required fields are missing', () => {
    const path = '__test_incomplete.yaml';
    writeFileSync(path, 'version: alpha\nunits: [px]');
    try {
      expect(() => loadSpecConfig(path)).toThrow();
    } finally {
      unlinkSync(path);
    }
  });

  it('throws when sections array is empty', () => {
    const path = '__test_empty_sections.yaml';
    writeFileSync(path, [
      'version: alpha',
      'units: [px]',
      'sections: []',
      'typography_properties: [{name: x, type: y}]',
      'component_sub_tokens: [{name: x, type: y}]',
      'color_roles: [primary]',
      'recommended_tokens: {a: [b]}',
      'examples:',
      '  colors: {a: "#000"}',
      '  typography: {a: {fontFamily: x}}',
      '  components: {a: {bg: x}}',
    ].join('\n'));
    try {
      expect(() => loadSpecConfig(path)).toThrow();
    } finally {
      unlinkSync(path);
    }
  });
});

// ── Structural invariants ─────────────────────────────────────────────
// These never need updating when values change.
// They catch real bugs: duplicates, empty arrays, collision.

describe('spec-config structural invariants', () => {
  it('sections are non-empty', () => {
    expect(SECTIONS.length).toBeGreaterThan(0);
  });

  it('section canonical names are unique', () => {
    const names = SECTIONS.map(s => s.canonical);
    expect(new Set(names).size).toBe(names.length);
  });

  it('no alias collides with a canonical name', () => {
    const canonicals = new Set(SECTIONS.map(s => s.canonical));
    const aliases = SECTIONS.flatMap(s => s.aliases ?? []);
    for (const alias of aliases) {
      expect(canonicals.has(alias)).toBe(false);
    }
  });

  it('aliases are unique across all sections', () => {
    const aliases = SECTIONS.flatMap(s => s.aliases ?? []);
    expect(new Set(aliases).size).toBe(aliases.length);
  });

  it('typography property names are unique', () => {
    const names = TYPOGRAPHY_PROPERTIES.map(p => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('component sub-token names are unique', () => {
    const names = COMPONENT_SUB_TOKENS.map(p => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('color roles are unique', () => {
    expect(new Set(CORE_COLOR_ROLES).size).toBe(CORE_COLOR_ROLES.length);
  });

  it('units are non-empty and unique', () => {
    expect(STANDARD_UNITS.length).toBeGreaterThan(0);
    expect(new Set(STANDARD_UNITS).size).toBe(STANDARD_UNITS.length);
  });

  it('recommended token categories are non-empty', () => {
    for (const [category, tokens] of Object.entries(RECOMMENDED_TOKENS)) {
      expect(tokens.length).toBeGreaterThan(0);
    }
  });

  it('examples covers colors, typography, and components', () => {
    expect(Object.keys(EXAMPLES.colors).length).toBeGreaterThan(0);
    expect(Object.keys(EXAMPLES.typography).length).toBeGreaterThan(0);
    expect(Object.keys(EXAMPLES.components).length).toBeGreaterThan(0);
  });
});

// ── Derived constants ─────────────────────────────────────────────────

describe('spec-config derived constants', () => {
  it('CANONICAL_ORDER length matches SECTIONS length', () => {
    expect(CANONICAL_ORDER.length).toBe(SECTIONS.length);
  });

  it('resolveAlias returns canonical for known alias', () => {
    // Pick the first alias we can find
    const sectionWithAlias = SECTIONS.find(s => s.aliases && s.aliases.length > 0);
    const alias = sectionWithAlias?.aliases?.[0];
    if (alias) {
      expect(resolveAlias(alias)).toBe(sectionWithAlias.canonical);
    }
  });

  it('resolveAlias returns input for unknown heading', () => {
    expect(resolveAlias('NonExistentSection')).toBe('NonExistentSection');
  });

  it('VALID_TYPOGRAPHY_PROPS length matches TYPOGRAPHY_PROPERTIES', () => {
    expect(VALID_TYPOGRAPHY_PROPS.length).toBe(TYPOGRAPHY_PROPERTIES.length);
  });

  it('VALID_COMPONENT_SUB_TOKENS length matches COMPONENT_SUB_TOKENS', () => {
    expect(VALID_COMPONENT_SUB_TOKENS.length).toBe(COMPONENT_SUB_TOKENS.length);
  });

  it('SECTION_ALIASES maps every alias to a canonical name', () => {
    for (const [alias, canonical] of Object.entries(SECTION_ALIASES)) {
      expect(CANONICAL_ORDER).toContain(canonical);
    }
  });
});
