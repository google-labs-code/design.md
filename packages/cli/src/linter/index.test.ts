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
import { lint } from './index.js';

describe('Integration: full pipeline', () => {
  it('processes a frontmatter DESIGN.md through the complete pipeline', () => {
    const content = `---
name: Kindred Spirit
description: Describes the design system for a pet care assistant.

colors:
  primary: "#647D66"
  secondary: "#A3B8A5"

typography:
  headline-lg:
    fontFamily: Google Sans Display
    fontSize: 42px
    fontWeight: 500
    lineHeight: 50px
    letterSpacing: 1.2px
  body-lg:
    fontFamily: Roboto
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 1.2px

rounded:
  regular: 4px
  lg: 8px
  xl: 12px
  full: 9999px

spacing:
  gutter-s: 8px
  gutter-l: 16px
---

# Kindred Spirit Design System

The palette uses a deep "Evergreen" primary for health-sector credibility.
`;

    const result = lint(content);

    // ── State assertions ────────────────────────────────────────────
    expect(result.designSystem.colors.size).toBe(2);
    expect(result.designSystem.typography.size).toBe(2);
    expect(result.designSystem.rounded.size).toBe(4);
    expect(result.designSystem.spacing.size).toBe(2);
    expect(result.designSystem.name).toBe('Kindred Spirit');

    // ── Lint assertions ─────────────────────────────────────────────
    expect(result.summary.errors).toBe(0);
    // Should have at least the info summary
    expect(result.summary.infos).toBeGreaterThan(0);

    // ── Tailwind assertions ─────────────────────────────────────────
    expect(result.tailwindConfig.success).toBe(true);
    if (result.tailwindConfig.success) {
      const config = result.tailwindConfig.data;
      expect(config.theme?.extend?.colors?.['primary']).toBe('#647d66');
      expect(config.theme?.extend?.fontFamily?.['headline-lg']).toContain('Google Sans Display');
      expect(config.theme?.extend?.borderRadius?.['full']).toBe('9999px');
      expect(config.theme?.extend?.spacing?.['gutter-s']).toBe('8px');
    }
  });

  it('processes a code-block DESIGN.md with components', () => {
    const content = `# Kindred Spirit

\`\`\`yaml
colors:
  primary: "#647D66"
  white: "#ffffff"
\`\`\`

\`\`\`yaml
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: 8px
    padding: 12px
\`\`\`
`;

    const result = lint(content);

    expect(result.designSystem.colors.size).toBe(2);
    expect(result.designSystem.components.size).toBe(1);
    expect(result.summary.errors).toBe(0);

    // The component should have resolved backgroundColor to the primary color
    const btn = result.designSystem.components.get('button-primary');
    expect(btn).toBeDefined();
    const bg = btn?.properties.get('backgroundColor');
    expect(typeof bg === 'object' && bg !== null && 'type' in bg && bg.type === 'color').toBe(true);
  });

  it('correctly detects errors in a broken DESIGN.md', () => {
    const content = `---
colors:
  primary: "#647D66"
  bad-color: not-a-color

components:
  card:
    backgroundColor: "{colors.nonexistent}"
    textColor: "#ffffff"
---`;

    const result = lint(content);

    // Should have errors: invalid color + broken reference
    expect(result.summary.errors).toBeGreaterThanOrEqual(2);
  });

  it('warns on a misspelled top-level key via the default rule set', () => {
    const content = `---
name: Example
colours:
  primary: "#647D66"
---`;

    const result = lint(content);

    const finding = result.findings.find(
      f => f.message === 'Unknown key "colours" — did you mean "colors"?'
    );
    expect(finding).toBeDefined();
    expect(finding!.severity).toBe('warning');
    expect(finding!.path).toBe('colours');
  });

  it('stays silent for custom extension keys that are not close to any known key', () => {
    const content = `---
name: Example
icons:
  search: "search-icon.svg"
motion:
  fast: "100ms"
---`;

    const result = lint(content);

    const unknownKeyFindings = result.findings.filter(f =>
      f.message.startsWith('Unknown key ')
    );
    expect(unknownKeyFindings).toEqual([]);
  });

  it('processes a DESIGN.md with Motion & Micro-interaction section and purpose-named motion tokens', () => {
    const content = `---
name: Daylight Prestige

colors:
  primary: "#1A1C1E"

typography:
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6

motion:
  state-change:
    duration: 100ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 250ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
---

## Overview

Editorial design system with high-contrast neutrals.

## Colors

Primary ink palette.

## Typography

Public Sans for body text.

## Motion & Micro-interaction

Motion is quick and understated. Interactive feedback lands within a tenth of a second so the interface feels immediate, while surfaces that enter the screen take longer and decelerate. Nothing loops, and nothing moves purely for decoration. Honor \`prefers-reduced-motion\`.

## Components

Core component library.
`;

    const result = lint(content);

    expect(result.summary.errors).toBe(0);
    expect(result.designSystem.motion?.size).toBe(3);
    expect(result.designSystem.motion?.get('state-change')).toEqual({
      type: 'motion',
      duration: '100ms',
      delay: '0ms',
      timingFunction: 'ease-out',
    });

    expect(result.tailwindConfig.success).toBe(true);
    if (result.tailwindConfig.success) {
      const extend = result.tailwindConfig.data.theme.extend;
      expect(extend.transitionDuration?.['surface-enter']).toBe('250ms');
      expect(extend.transitionDelay?.['surface-enter']).toBe('0ms');
      expect(extend.transitionTimingFunction?.['surface-enter']).toBe('cubic-bezier(0.2, 0, 0, 1)');
    }
  });
});
