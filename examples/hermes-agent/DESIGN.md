---
version: alpha
profile: hermes-v1
name: Hermes Operator Console

description: A pragmatic operator-facing design profile for agentic tooling.

colors:
  primary: "#14171A"
  secondary: "#5B6670"
  tertiary: "#2F7CF6"
  neutral: "#F4F6F8"
  success: "#1F9D55"
  warning: "#C98900"
  danger: "#C43D2F"
  focus-ring: "#2F7CF6"
  on-tertiary: "#FFFFFF"
  surface-disabled: "#D6DCE2"
  on-surface-muted: "#6B7280"
  tertiary-hover: "#2569D9"

typography:
  headline-md:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.01em

rounded:
  sm: 6px
  md: 10px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px

agent:
  mode: strict
  canInfer:
    - spacing-between-related-elements
    - missing-hover-state
  mustNotInfer:
    - brand-colors
    - component-taxonomy
  fallbackOrder:
    - components
    - typography
    - colors

accessibility:
  contrast:
    bodyText: AA
    largeText: AA
  focus:
    minRingWidth: 2px
    minContrast: 3
  motion:
    respectReducedMotion: true

components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.md}"
    padding: 12px
    minHeight: 40px
    focusRingColor: "{colors.focus-ring}"
    focusRingWidth: 2px
    states:
      hover:
        backgroundColor: "{colors.tertiary-hover}"
      disabled:
        backgroundColor: "{colors.surface-disabled}"
        textColor: "{colors.on-surface-muted}"

platformOverrides:
  mobile:
    components:
      button-primary:
        minHeight: 44px
  telegram:
    components:
      button-primary:
        rounded: "{rounded.full}"
        minHeight: 36px
---

## Overview

This design favors clarity over theater. It should read like a competent operator console, not a startup landing page pretending to be a spaceship.

## Colors

The palette is mostly neutral with one strong blue interaction color. Success, warning, and danger should be obvious but not screaming.

## Typography

Typography should stay boring in the good way. If the agent wants to get cute with decorative fonts, that's a bug, not creativity.

## Layout

Spacing should follow a compact but breathable rhythm. Dense enough for real work, not so dense that it turns into compliance soup.

## Components

Primary buttons are decisive, readable, and keyboard-friendly. Disabled states must look inactive without becoming invisible.

## Interaction

The agent should prefer predictable controls, visible state changes, and low-surprise flows. Fancy transitions are lower priority than making next actions obvious.

## Motion

Motion should be subtle and optional. If reduced motion is requested, avoid animated state flourishes entirely.

## Accessibility

Readable contrast and obvious keyboard focus are mandatory. If a styling decision makes focus harder to see, the styling loses.

## Do's and Don'ts

- Do optimize for long sessions and operational clarity
- Do keep primary actions visually obvious
- Don't invent extra accent colors because the screen feels "empty"
- Don't hide state in hover-only affordances
