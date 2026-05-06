---
name: Heritage
description: Editorial design system for premium long-form publications, with motion tokens for cross-platform animation.
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  neutral: "#F7F5F2"
  on-tertiary: "#F7F5F2"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: Public Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.1em
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
motion:
  duration:
    instant: 100ms
    fast: 150ms
    base: 250ms
    slow: 400ms
    deliberate: 600ms
  easing:
    standard:   [0.2, 0.0, 0.0, 1.0]
    decelerate: [0.0, 0.0, 0.0, 1.0]
    accelerate: [0.3, 0.0, 1.0, 1.0]
    emphasized: [0.3, 0.0, 0.0, 1.0]
    linear:     [0.0, 0.0, 1.0, 1.0]
  transition:
    hover:
      duration: "{motion.duration.fast}"
      easing:   "{motion.easing.standard}"
    focus:
      duration: "{motion.duration.instant}"
      easing:   "{motion.easing.standard}"
    press:
      duration: "{motion.duration.instant}"
      easing:   "{motion.easing.standard}"
    enter:
      duration: "{motion.duration.slow}"
      easing:   "{motion.easing.decelerate}"
    exit:
      duration: "{motion.duration.fast}"
      easing:   "{motion.easing.accelerate}"
    page:
      duration: "{motion.duration.deliberate}"
      easing:   "{motion.easing.emphasized}"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
    transition: "{motion.transition.hover}"
  button-primary-active:
    transition: "{motion.transition.press}"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 24px
    transition: "{motion.transition.hover}"
  modal-enter:
    transition: "{motion.transition.enter}"
  modal-exit:
    transition: "{motion.transition.exit}"
  input-field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 12px
    transition: "{motion.transition.focus}"
---

## Overview

Architectural Minimalism meets Journalistic Gravitas. The UI evokes a
premium matte finish — a high-end broadsheet or contemporary gallery.

## Colors

The palette is rooted in high-contrast neutrals and a single accent color.

- **Primary (#1A1C1E):** Deep ink for headlines and core text.
- **Secondary (#6C7278):** Sophisticated slate for borders, captions, metadata.
- **Tertiary (#B8422E):** "Boston Clay" — the sole driver for interaction.
- **Neutral (#F7F5F2):** Warm limestone foundation, softer than pure white.

## Typography

Two families carry the system. **Public Sans** sets the editorial voice for
headlines and body text; **Space Grotesk** provides technical contrast for
labels, captions, and metadata.

## Layout

A fixed-max-width grid (1200px) on desktop, fluid on mobile. An 8px spacing
scale governs all rhythm; cards use generous internal padding (24–32px) to
emphasize editorial whitespace.

## Elevation & Depth

Depth is conveyed through tonal layers rather than shadows. The neutral
limestone background recedes; primary content sits on slightly brighter
surfaces with hairline borders in the secondary slate.

## Shapes

A restrained shape language: 4px radius on inputs and buttons, 8px on cards
and modals.

## Motion

Motion in Heritage is **editorial, not theatrical**. Transitions confirm
state changes — they do not perform. The system favors short durations and
standard easing curves, mirroring the calm authority of broadsheet typography.

- **Hover and focus (100–150ms):** Imperceptibly fast.
- **Modals and drawers (400ms enter, 150ms exit):** Asymmetric — slower in,
  faster out — mirrors physical doors.
- **Page transitions (600ms):** Reserved for navigation between major
  sections; the only place `emphasized` easing appears.
- **Easing roles:** `decelerate` for entering elements, `accelerate` for
  exiting, `standard` for everything else.

Easings are stored as cubic-bezier control-point arrays so the same tokens
compile to CSS, SwiftUI, Compose, and Flutter without reinterpretation.

## Components

Buttons, cards, and inputs all share the standard hover transition. The
modal overrides with asymmetric enter/exit, and the hero CTA gets a one-off
500ms emphasized transition as the single brand-expressive moment.

## Do's and Don'ts

- Do use the tertiary color only for the single most important action per
  screen.
- Don't mix rounded and sharp corners in the same view.
- Do respect `prefers-reduced-motion` — collapse all durations to `0ms`.
- Don't animate layout properties (`width`, `height`, `top`); animate
  `transform` and `opacity` instead.
- Don't use `emphasized` easing for routine transitions — reserve it for
  brand-expressive moments.
- Don't use `linear` easing for state changes; it reads as mechanical.
