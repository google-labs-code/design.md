---
name: States Demo
colors:
  primary: "#1A1C1E"
  on-primary: "#FFFFFF"
  primary-container: "#3D3F42"
  surface: "#F7F5F2"
  on-surface: "#1A1C1E"
  surface-variant: "#E0E0E0"
  on-surface-variant: "#5A5A5A"
  focus-ring: "#0066CC"
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
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    interactive: true
    states:
      hover:
        backgroundColor: "{colors.primary-container}"
      focus-visible:
        outline: "2px solid {colors.focus-ring}"
      active:
        opacity: 0.9
      disabled:
        backgroundColor: "{colors.surface-variant}"
        textColor: "{colors.on-surface-variant}"
        cursor: "not-allowed"
---

## Overview

A minimal example with a single interactive button using nested states.

## Colors

The palette is grayscale with a single blue focus ring.

## Typography

Inter for body copy.

## Components

The button-primary defines all four canonical interactive states. Focus-visible
gets a dedicated focus ring color, separate from hover.
