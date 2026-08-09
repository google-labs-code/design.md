---
name: Ink & Code
description: A minimal developer portfolio design system. Typographic precision meets terminal-native clarity — sharp, confident, and built for developers who let their work speak.
colors:
  primary: "#E8E6E1"
  secondary: "#A8A29E"
  tertiary: "#9A3412"
  surface: "#0C0A09"
  surface-dim: "#080705"
  surface-bright: "#1C1917"
  surface-container-lowest: "#050403"
  surface-container-low: "#111010"
  surface-container: "#1C1917"
  surface-container-high: "#292524"
  surface-container-highest: "#3A3633"
  on-surface: "#E8E6E1"
  on-surface-variant: "#A8A29E"
  outline: "#57534E"
  outline-variant: "#292524"
  background: "#0C0A09"
  on-background: "#E8E6E1"
  primary-container: "#1C1917"
  on-primary-container: "#E8E6E1"
  tertiary-container: "#431407"
  on-tertiary-container: "#FDBA74"
  error: "#F87171"
  on-error: "#450A0A"
  error-container: "#7F1D1D"
  on-error-container: "#FECACA"
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: "700"
    lineHeight: 80px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: "600"
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: "500"
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  label-mono:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px
  max-width: 1200px
components:
  card-project:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-project-hover:
    backgroundColor: "{colors.surface-container-high}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0 20px
  button-primary-hover:
    backgroundColor: "{colors.surface-container-highest}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 0 20px
  button-ghost-hover:
    textColor: "{colors.primary}"
  tag-skill:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  nav-link:
    textColor: "{colors.secondary}"
    typography: "{typography.label-mono}"
  nav-link-active:
    textColor: "{colors.primary}"
  input-field:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
  input-field-focus:
    backgroundColor: "{colors.surface-container}"
---

## Brand & Style

Ink & Code is built on the philosophy that a developer's portfolio is a product, not a resume. The aesthetic is **terminal-native minimalism** — the kind of UI that could exist in a well-crafted CLI tool or a documentation site, yet feels completely at home in a modern browser.

The design communicates confidence through restraint. There are no gradients, no decoration for decoration's sake. Every element earns its place. The single accent color — a warm, decisive deep burnt orange — acts as a signal rather than decoration: it marks what matters most.

The dual typeface system pairs **Geist** (clean geometric sans-serif) for reading with **Geist Mono** (its monospace sibling) for labels, tags, and UI chrome. This mirrors how developers think: prose for explanation, monospace for precision.

## Colors

The palette is anchored in near-black warm tones — not cold grays, which feel sterile, but deep stone tones that feel like a well-worn terminal.

- **Primary (#E8E6E1):** Warm off-white. Used for headlines and primary body text. Slightly warmer than pure white to reduce eye strain on dark backgrounds.
- **Secondary (#A8A29E):** Muted warm gray. Used for metadata, timestamps, secondary labels, and nav items in their resting state.
- **Tertiary (#C2410C):** Deep burnt orange. The sole interactive accent. Used exclusively for primary CTAs and active states. It draws the eye without overwhelming.
- **Surface (#0C0A09):** Deep warm black — the canvas. Not pure black (`#000`) which can feel harsh, but a rich stone-dark that feels grounded.

Surface layers use subtle warm-dark steps (`surface-container` through `surface-container-highest`) to create soft depth between cards and backgrounds without resorting to shadows or borders.

## Typography

Two fonts, one family. **Geist** and **Geist Mono** are designed as a matched pair, ensuring visual harmony between prose and code/UI labels.

- **Headlines:** Geist at high weight with tight negative letter spacing. `display-lg` is reserved for the hero name or opening statement — it should dominate the viewport.
- **Body:** Geist Regular at 16–18px with a generous line-height (1.6×) for comfortable reading of longer project descriptions.
- **Labels & Tags:** Geist Mono exclusively. Every skill tag, nav item, date string, and section marker uses monospace. This creates a clear semantic split: human prose is sans-serif, UI chrome is monospace.
- **Uppercase labels:** `label-sm` is used with `text-transform: uppercase` for section headings (e.g., `PROJECTS`, `EXPERIENCE`) — never for body copy.

## Layout & Spacing

The layout uses a single centered column that expands to a max-width of `1200px`, with generous outer padding to ensure the dark background breathes around the content.

- **Base grid:** 8px. All spacing values are multiples of this unit.
- **Section rhythm:** `80px` between top-level sections (`section` spacing token) creates clear breathing room and scroll pacing.
- **Project grid:** A 2-column responsive grid with `24px` gaps on desktop. Single column on mobile. Cards use internal `24px` padding (`spacing.lg`).
- **Hero zone:** The name/headline block occupies the full viewport height on load, centered vertically, with the primary CTA buttons below it.

## Elevation & Depth

This design system avoids box shadows entirely. Depth is communicated through **background color steps** and **surface contrast alone**.

- **Layer 0 (Canvas):** `surface` / `background` — the page base.
- **Layer 1 (Cards):** `surface-container` — project cards, info blocks.
- **Layer 2 (Hover / Active):** `surface-container-high` — the hover state of a card lifts it visually by stepping up the background one level.

This approach keeps the UI flat, fast, and readable — no rendering overhead from blurs or large shadow spreads.

## Shapes

Shape language is deliberately conservative and **code-adjacent**.

- **Cards and containers:** `rounded-lg` (6px) — enough to feel modern, not so much it feels playful.
- **Buttons:** `rounded-md` (4px) — tighter than cards, reinforcing that buttons are precision controls.
- **Tags and badges:** `rounded-sm` (2px) — nearly square. Evokes a CLI flag or terminal token.
- **Avatars and circular elements:** `rounded-full` (9999px).

No decorative shapes, no blobs, no abstract geometric backgrounds. Whitespace and typography carry the visual weight.

## Components

### Project Cards

Cards use `surface-container` as the base and step up to `surface-container-high` on hover. Internally, projects display: a monospace tag cluster (skill tags), a sans-serif title at `headline-md`, body description in `body-md`, and a row of ghost links (`View`, `GitHub`) in `label-mono`.

### Buttons

Two variants only. **Primary** (`button-primary`): burnt orange background with warm off-white text, used once per section for the single most important action. **Ghost** (`button-ghost`): transparent fill, used for secondary actions like "View source" or "Read more." Both buttons use Geist Mono for their labels to maintain the monospace UI chrome convention.

### Skill Tags

Monospace, near-square (2px radius), muted background. Tags should never use the orange accent — they are informational, not interactive. Use `on-surface-variant` text color to keep them subordinate to project titles and descriptions.

### Navigation

A slim top bar with the name/logo on the left (Geist, `headline-md` weight) and nav links on the right in `label-mono`. Nav links default to `secondary` color and transition to `primary` on hover/active — no underlines, no background fills. The active section link uses `primary` color.

### Contact / Input Fields

Input fields use `surface-container-low` as the background to sit subtly recessed against the page. The background steps up to `surface-container` on focus — providing a clear and accessible focus signal through tonal shift rather than a colored border.