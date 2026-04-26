---
name: Motion & Icons Fixture
description: Exercises motion duration / easing / reduced-motion plus iconography library + size scale.
colors:
  primary: "#1a73e8"
  on-primary: "#ffffff"
  surface: "#ffffff"
  on-surface: "#0f172a"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
rounded:
  md: 8px
spacing:
  md: 16px
motion:
  duration:
    instant: 0ms
    fast: 150ms
    medium: 250ms
    slow: 400ms
  easing:
    standard: "cubic-bezier(0.4, 0, 0.2, 1)"
    decelerate: "cubic-bezier(0, 0, 0.2, 1)"
    accelerate: "cubic-bezier(0.4, 0, 1, 1)"
  reducedMotion:
    duration: instant
    easing: standard
iconography:
  library:
    name: lucide
    version: "0.451.0"
    style: outlined
  strokeWeight: 1.5px
  sizes:
    sm: 16px
    md: 20px
    lg: 24px
    xl: 32px
  defaultSize: md
  colorBinding: currentColor
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    transition: "opacity {motion.duration.fast} {motion.easing.standard}"
    iconSize: "{iconography.sizes.md}"
  modal-dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    transition: "transform {motion.duration.medium} {motion.easing.decelerate}"
    iconSize: "{iconography.sizes.lg}"
  toast:
    backgroundColor: "{colors.surface}"
    transition: "opacity {motion.duration.slow} {motion.easing.accelerate}"
    iconSize: "{iconography.sizes.sm}"
  filter-chip:
    backgroundColor: "{colors.surface}"
    iconSize: "{iconography.sizes.xl}"
---

## Overview

A minimal fixture exercising the motion + iconography token primitives.

## Colors

The palette is one accent against neutral surface.

## Typography

Inter Regular at 16px for body. Headlines reuse the same family.

## Layout

Single-column rhythm on an 8px grid.

## Motion

Hover and focus use `fast`. Modal entrances use `medium` with `decelerate`. Toast dismissals use `slow` with `accelerate`. Reduced motion clamps every duration to `instant`.

## Elevation & Depth

Modals lift with shadow only — never a border + shadow combination.

## Shapes

Rounded corners at `md`; full-radius for chips and avatars.

## Iconography

Lucide outlined at 1.5px. The size scale is `sm` 16px, `md` 20px, `lg` 24px, `xl` 32px. Filled style is reserved for selected nav items.

## Components

The four sample components above demonstrate every motion / iconography reference path.

## Do's and Don'ts

- Do honor reduced motion in every transition.
- Don't mix Lucide and Material Symbols in the same product.
