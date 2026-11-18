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
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
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

  it('processes a hybrid frontmatter + interleaved YAML code block DESIGN.md', () => {
    const content = `---
version: alpha
name: Kindred Spirit
description: Describes the design system for a pet care assistant.
---

## Overview

A warm, health-sector-inspired design system for pet care.

## Colors

The palette uses a deep Evergreen primary with a soft neutral canvas.

\`\`\`yaml
colors:
  primary: "#647D66"
  on-primary: "#FFFFFF"
  surface: "#FAFDF7"
\`\`\`

## Typography

\`\`\`yaml
typography:
  headline-lg:
    fontFamily: Google Sans Display
    fontSize: 42px
    fontWeight: 500
    lineHeight: 50px
\`\`\`

## Layout & Spacing

\`\`\`yaml
spacing:
  gutter-s: 8px
  gutter-l: 16px
\`\`\`

## Elevation & Depth

Depth is achieved through subtle tonal layering.

## Shapes

\`\`\`yaml
rounded:
  md: 8px
  full: 9999px
\`\`\`

## Components

\`\`\`yaml
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px
\`\`\`

## Do's and Don'ts

- Do use primary color for main actions.
`;

    const result = lint(content);

    expect(result.summary.errors).toBe(0);
    expect(result.designSystem.name).toBe('Kindred Spirit');
    expect(result.designSystem.colors.size).toBe(3);
    expect(result.designSystem.typography.size).toBe(1);
    expect(result.designSystem.spacing.size).toBe(2);
    expect(result.designSystem.rounded.size).toBe(2);
    expect(result.designSystem.components.size).toBe(1);
    expect(result.tailwindConfig.success).toBe(true);
  });

  it('processes grouped tokens across colors, typography, spacing, and rounded', () => {
    const content = `---
name: Adaptive Design System

colors:
  primary: "#647D66"
  on-primary: "#FFFFFF"
  light:
    surface: "#FAFDF7"
    on-surface: "#1A1C19"
  dark:
    surface: "#10130E"
    on-surface: "#E2E4DE"

typography:
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  sm:
    headline-lg:
      fontFamily: Public Sans
      fontSize: 32px
      fontWeight: 600
      lineHeight: 1.15
  lg:
    headline-lg:
      fontFamily: Public Sans
      fontSize: 48px
      fontWeight: 600
      lineHeight: 1.1

rounded:
  sm: 4px
  control:
    pill: 9999px

spacing:
  base: 16px
  sm:
    gutter: 16px
  lg:
    gutter: 24px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.sm.headline-lg}"
    rounded: "{rounded.control.pill}"
    padding: "{spacing.sm.gutter}"
  card-light:
    backgroundColor: "{colors.light.surface}"
    textColor: "{colors.light.on-surface}"
  card-dark:
    backgroundColor: "{colors.dark.surface}"
    textColor: "{colors.dark.on-surface}"
---

## Overview

Adaptive design system with grouped theme and responsive tokens.
`;

    const result = lint(content);

    expect(result.summary.errors).toBe(0);
    expect(result.designSystem.colors.size).toBe(6);
    expect(result.designSystem.typography.size).toBe(3);
    expect(result.designSystem.rounded.size).toBe(2);
    expect(result.designSystem.spacing.size).toBe(3);
    expect(result.designSystem.typography.get('sm.headline-lg')?.fontSize?.value).toBe(32);
    expect(result.designSystem.typography.get('lg.headline-lg')?.fontSize?.value).toBe(48);
    expect(result.designSystem.spacing.get('sm.gutter')?.value).toBe(16);
    expect(result.designSystem.spacing.get('lg.gutter')?.value).toBe(24);
    expect(result.tailwindConfig.success).toBe(true);
    if (result.tailwindConfig.success) {
      const extend = result.tailwindConfig.data.theme.extend;
      expect(extend.colors?.['light']).toEqual({
        surface: '#fafdf7',
        'on-surface': '#1a1c19',
      });
      expect(extend.fontSize?.['sm-headline-lg']?.[0]).toBe('32px');
      expect(extend.borderRadius?.['control-pill']).toBe('9999px');
      expect(extend.spacing?.['sm-gutter']).toBe('16px');
    }
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

  it('processes a DESIGN.md with a prose-only Voice & Content Strategy section in canonical order', () => {
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
---

## Overview

Editorial design system with high-contrast neutrals.

## Colors

Primary ink palette.

## Typography

Public Sans for body text.

## Shapes

Sharp 4px corner radius.

## Voice & Content Strategy

- **Tone of voice:** Precise, calm, and utilitarian. Avoid exclamation marks, marketing hyperbole, and conversational filler.
- **Capitalization:** Sentence case applied consistently across all headings, buttons, form labels, and menu items.
- **Terminology:** Use "Workspace" (never "Project" or "Repo") and "Member" (never "User" or "Collaborator"). Pick one word per concept and keep it.
- **Button and action labels:** Use a verb phrase naming the outcome (e.g., "Save changes", "Create workspace"), never vague labels like "OK" or "Submit".
- **Empty, loading, and error states:** Empty states explain what belongs in the list and provide a direct creation CTA. Error messages state what failed and suggest a specific next action.
- **Numbers, dates, and units:** Format dates as \`YYYY-MM-DD\` in tables, use relative time ("3m ago") in activity feeds, and separate numeric values from units with a space (\`16 px\`).

## Components

Core component library.
`;

    const result = lint(content);

    expect(result.summary.errors).toBe(0);
    expect(result.designSystem.sections).toContain('Voice & Content Strategy');
    const orderFindings = result.findings.filter(f => f.rule === 'section-order');
    expect(orderFindings).toEqual([]);
  });

  it('processes a DESIGN.md with external @components/*.html references without errors or orphaned-token warnings', () => {
    const content = `---
name: Kindred Spirit

colors:
  primary: "#647D66"
  secondary: "#A3B8A5"

typography:
  headline-lg:
    fontFamily: Google Sans Display
    fontSize: 42px
    fontWeight: 500
    lineHeight: 50px
---

## Overview

The palette uses a deep "Evergreen" primary for health-sector credibility.

## Colors

- **Primary (#647D66):** Deep Evergreen for primary actions.
- **Secondary (#A3B8A5):** Soft sage for secondary surfaces.

## Typography

- **Headline Large:** Google Sans Display at 42px.

## Components

Component implementations live as individual HTML sticker sheet files in \`components/\`. Each file contains the canonical, styled HTML components with \`<!-- COMPONENT: name -->\` comment markers. Read each file before use.

- **Buttons** → \`@components/button.html\` — \`button-primary\`, \`button-secondary\`, \`button-tertiary\`, \`button-icon\`
- **Cards** → \`@components/card.html\` — \`card-elevated\`, \`card-outlined\`
- **Input Fields** → \`@components/input-field.html\` — \`input-default\`, \`input-error\`, \`input-disabled\`
`;

    const result = lint(content);

    expect(result.summary.errors).toBe(0);
    expect(result.summary.warnings).toBe(0);
    expect(result.designSystem.sections).toEqual(['Overview', 'Colors', 'Typography', 'Components']);
  });

  it('validates external @-references against the filesystem when filePath is provided', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'design-md-pipeline-'));
    try {
      mkdirSync(join(tempDir, 'components'), { recursive: true });
      mkdirSync(join(tempDir, 'src'), { recursive: true });
      writeFileSync(
        join(tempDir, 'components/button.html'),
        '<!-- COMPONENT: button-primary -->\n<button class="btn">Primary</button>\n',
      );
      writeFileSync(join(tempDir, 'src/button.tsx'), 'export const Button = () => null;\n');

      const designMdPath = join(tempDir, 'DESIGN.md');
      const content = `---
name: Kindred Spirit
colors:
  primary: "#647D66"
typography:
  body-md:
    fontFamily: Roboto
    fontSize: 16px
---

## Overview

Uses \`@../shared/tokens.json\` and \`@src/button.tsx#Button\`.

## Components

- **Buttons** → \`@components/button.html#button-primary\`
- **Missing Anchor** → \`@components/button.html#card-flat\`
- **Typo File** → \`@components/buton.html\`
`;
      writeFileSync(designMdPath, content);

      const result = lint(content, { filePath: designMdPath });
      const brokenRefFindings = result.findings.filter(f => f.rule === 'broken-ref');

      expect(brokenRefFindings).toEqual([
        {
          severity: 'error',
          path: 'Overview',
          message: 'External reference `@../shared/tokens.json` resolves outside the DESIGN.md directory.',
          rule: 'broken-ref',
        },
        {
          severity: 'info',
          path: 'Overview',
          message: 'External reference `@src/button.tsx#Button` fragment `#Button` is not checked for this file type.',
          rule: 'broken-ref',
        },
        {
          severity: 'warning',
          path: 'Components',
          message: 'External reference `@components/button.html#card-flat` has no matching anchor `#card-flat`.',
          rule: 'broken-ref',
        },
        {
          severity: 'warning',
          path: 'Components',
          message: 'External reference `@components/buton.html` does not exist.',
          rule: 'broken-ref',
        },
      ]);
      expect(result.summary.errors).toBe(1);
      expect(result.summary.warnings).toBe(2);
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('validates external @-references even in prose-only DESIGN.md files without YAML', () => {
    const content = `## Overview

Escaping path \`@../outside.json\` in a prose-only file.
`;
    const result = lint(content);
    expect(result.summary.errors).toBe(1);
    expect(result.summary.warnings).toBe(1);
    expect(result.findings.some(f => f.message.includes('resolves outside the DESIGN.md directory'))).toBe(true);
  });
});

