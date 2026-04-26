---
name: Themes Demo
colors:
  primary:
    type: ramp
    anchor: "#3b82f6"
    humanName: "Ocean"
    description: "Driver for interaction."
    pairs:
      container: { bg: 100, fg: 800 }
  surface: "#FFFFFF"
  on-surface: "#0F172A"
  surface-info:
    type: pair
    container: "#E0F2FE"
    onContainer: "#0C4A6E"
typography:
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: 4px
    padding: 12px
  callout-info:
    backgroundColor: "{colors.surface-info}"
    textColor: "{colors.on-surface-info}"
    padding: 16px
themes:
  dark:
    description: "Dark counterpart with surface tinted up via lighter color steps."
    colors:
      primary:
        type: ramp
        anchor: "#A3C9FF"
        humanName: "Sky"
        pairs:
          container: { bg: 700, fg: 100 }
      surface: "#0B1220"
      on-surface: "#E2E8F0"
      surface-info:
        type: pair
        container: "#1B3A5F"
        onContainer: "#A3C9FF"
  high-contrast:
    inheritsFrom: light
    description: "Authored on top of light; raises the contrast floor to AAA."
    colors:
      primary:
        type: ramp
        anchor: "#000000"
        humanName: "True Black"
        pairs:
          container: { bg: 900, fg: 50 }
      surface: "#FFFFFF"
      on-surface: "#000000"
      surface-info:
        type: pair
        container: "#FFFFFF"
        onContainer: "#000000"
        minContrast: 7
    contrastTarget:
      body: 7
      large: 4.5
      ui: 4.5
---

## Overview
Demonstrates `themes:` with dark and high-contrast variants on top of an
implicit `light` base.

## Colors
A single base palette. Themes layer overrides on top.

## Typography
Body text only.

## Themes
- **Don't invert, reconsider** — the dark theme lifts surfaces via lighter
  color steps rather than inverting brightness.
- **Contrast targets that hold across themes** — light/dark target WCAG AA;
  high-contrast targets AAA.
- **Saturation discipline in dark mode** — the dark `primary` ramp anchors
  at a desaturated step (`#A3C9FF`), not at the original brand 500.
- **Density mode use cases** — not declared here; the example focuses on
  color modes only.
- **High-contrast is not a visual style** — it raises the contrast floor and
  swaps decorative surfaces for explicit boundaries.
- **When to add a theme** — durable identity surfaces only.

## Components
A primary button and an info callout.
