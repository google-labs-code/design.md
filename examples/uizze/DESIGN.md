---
name: UIZZE
description: An editorial UI quality system for coding agents. Clear hierarchy, concrete product language, and visible states help teams ship interfaces with a point of view.
colors:
  primary: "#0a0a0a"
  secondary: "#3476d8"
  tertiary: "#f8c808"
  surface: "#ffffff"
  surface-dim: "#f5f5f5"
  surface-bright: "#ffffff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#fafafa"
  surface-container: "#f5f5f5"
  surface-container-high: "#ededed"
  surface-container-highest: "#e5e5e5"
  on-surface: "#0a0a0a"
  on-surface-variant: "#737373"
  outline: "#a3a3a3"
  outline-variant: "#e5e5e5"
  background: "#ffffff"
  on-background: "#0a0a0a"
  primary-container: "#0a0a0a"
  on-primary-container: "#ffffff"
  secondary-container: "#eaf2ff"
  on-secondary-container: "#173b72"
  tertiary-container: "#fff7cc"
  on-tertiary-container: "#5c4700"
  error: "#b91c1c"
  on-error: "#ffffff"
  error-container: "#fee2e2"
  on-error-container: "#7f1d1d"
typography:
  display-lg:
    fontFamily: Figtree
    fontSize: 64px
    fontWeight: "800"
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Figtree
    fontSize: 36px
    fontWeight: "800"
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Figtree
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  body-lg:
    fontFamily: Figtree
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Figtree
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Geist Mono
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.375rem
  md: 0.5rem
  lg: 0.75rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 80px
  container: 1200px
components:
  card-reference:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-reference-hover:
    backgroundColor: "{colors.surface-container-low}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 0 16px
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 0 16px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 44px
    padding: 0 12px
  input-field-focus:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
---

## Brand & Style

UIZZE is an editorial tool for coding agents. The interface helps an agent make better UI decisions, so the product UI shows hierarchy, concrete nouns, real states, and restrained decoration.

The visual language uses a light canvas, strong black type, a blue review accent, and yellow depth on selected primary controls. Figtree carries product copy. Geist Mono marks commands, paths, and structured output.

## Colors

White and near-white surfaces keep references easy to compare. Black carries primary text and the strongest action. Blue marks the main action. Yellow adds deliberate depth to selected controls. Green and red communicate positive and destructive states.

Use semantic roles in components. Keep raw color values in the token layer so the same component can support light and dark themes.

## Typography

Figtree handles headings, labels, and explanatory copy. Use heavy weights for short headings and regular or medium weights for supporting text. Geist Mono handles commands, file paths, and structured results.

Keep headings compact. Put longer explanations below the primary action instead of inside every card.

## Layout & Spacing

Use a centered container with a maximum width of `1200px`. Mobile pages use `16px` or `24px` side padding. Desktop pages use `48px` side padding. Keep regions clear and use a small number of strong layout decisions.

Use `8px` as the base spacing unit. Cards use `24px` internal padding. Top-level sections use `80px` separation. Reference screens keep a platform-aware radius instead of changing shape at a breakpoint.

## Elevation & Depth

UIZZE keeps the canvas flat. Surface steps and deliberate button depth create hierarchy. Avoid gradients, glows, glassmorphism, and decorative dashboard chrome unless a product requirement gives them a job.

## Shapes

Inputs and small controls use `rounded-md`. Cards use `rounded-lg`. Featured areas and reference screens use `rounded-xl`. Pills and avatars use `rounded-full`.

## Components

### Reference Cards

Reference cards show the screen's source, platform, purpose, and action. Keep the screenshot readable. Give the card a visible loading, empty, and error state when the reference cannot load.

### Actions

Use one visually dominant primary action. Secondary actions use a bordered or muted surface. Every action must produce a visible result.

### Review Findings

Findings name the observed issue, affected element, and next action. Use blue for review actions, green for a passing check, and red for a blocking error. Do not hide the reason behind a score alone.

## Interaction & States

Every control needs focus, hover, pressed, disabled, loading, success, and error behavior where the interaction supports it. Loading text names the work in progress. Empty states tell the reader what is missing and what to do next. Mobile controls remain at least `44px` tall.

## Accessibility

Keep focus visible. Pair color with text or structure. Preserve readable contrast for body copy and controls. Respect `prefers-reduced-motion` and keep transitions between `150ms` and `200ms`.

## Source

This example adapts the public UIZZE design contract to the DESIGN.md format. The canonical contract and implementation source remain at [github.com/uizze/uizze/DESIGN.md](https://github.com/uizze/uizze/blob/main/DESIGN.md).
