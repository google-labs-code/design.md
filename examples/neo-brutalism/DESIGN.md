---
name: Neo-Brutalism
description: A stark, high-contrast, structural aesthetic
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  accent-yellow: "#FFD000"
  accent-pink: "#FF90E8"
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: 700
    letterSpacing: -0.04em
  body:
    fontFamily: Public Sans
    fontSize: 1rem
    fontWeight: 500
rounded:
  none: 0px
  sm: 2px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  button-primary:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
---

## Overview

Neo-Brutalism is characterized by a stark, high-contrast aesthetic that rejects soft shadows and subtle gradients. It embraces thick borders, solid vivid colors, and a structural layout that exposes its own construction.

## Colors

The palette relies on pure black and white for structure, with saturated, highly visible accent colors to denote interactivity and state.

- **Primary (#000000):** Used for all structural borders, text, and harsh drop shadows.
- **Secondary (#FFFFFF):** The default background for cards and the page canvas.
- **Accent Yellow (#FFD000):** The primary interactive color (buttons, highlights).
- **Accent Pink (#FF90E8):** Secondary highlight or warning.

## Typography

Typography should be bold and legible, using geometric or grotesque sans-serifs. `Space Grotesk` is used for oversized, commanding headlines, while `Public Sans` handles body copy.

## Shapes

Shapes are strictly rectangular. Border radiuses are either entirely absent (`0px`) or extremely minimal (`2px`) for slight softening on small elements.

## Components

Components are defined by their thick borders and harsh offsets. Buttons and cards typically feature a solid black border and a solid black shadow (offset 4px to the bottom right).
