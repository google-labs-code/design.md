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
  bad-color: red

components:
  card:
    backgroundColor: "{colors.nonexistent}"
    textColor: "#ffffff"
---`;

    const result = lint(content);

    // Should have errors: invalid color + broken reference
    expect(result.summary.errors).toBeGreaterThanOrEqual(2);
  });
});
