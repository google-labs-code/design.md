---
name: Ramps and Pairs Demo
colors:
  primary:
    type: ramp
    anchor: "#3b82f6"
    humanName: "Ocean"
    description: "Driver for interaction."
    pairs:
      container: { bg: 100, fg: 800 }
  neutral: "#F7F5F2"
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
    textColor: "{colors.neutral}"
    rounded: 4px
    padding: 12px
  callout-info:
    backgroundColor: "{colors.surface-info}"
    textColor: "{colors.on-surface-info}"
    padding: 16px
  badge-strong:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    padding: 4px
---

## Overview
Demonstrates ramp expansion and pair authoring side-by-side with flat tokens.

## Colors
"Ocean" anchors the ramp at step 500. Steps 50–900 are derived in OKLCH.
The `surface-info` pair wires container and on-container together; the
`primary-container` pair is derived inline on the ramp.

## Typography
Body text only.

## Components
Three components: a primary button, an info callout, and a strong badge.
