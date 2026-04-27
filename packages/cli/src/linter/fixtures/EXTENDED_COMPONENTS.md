---
name: Extended Components
colors:
  primary: '#1a1c1e'
  on-primary: '#ffffff'
  surface: oklch(98% 0.01 90)
  on-surface: '#1a1c1e'
  accent: 'color(display-p3 0.7 0.2 0.4)'
  outline: 'hsl(220 8% 60%)'
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
components:
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.md}'
    padding: 16px
    gap: '{spacing.sm}'
    border: 1px solid {colors.outline}
    boxShadow: 0 2px 8px rgba(0, 0, 0, 0.08)
    backdropFilter: blur(6px)
    opacity: 1
    transition: background-color 150ms ease
  card-focus:
    outline: 2px solid {colors.accent}
---

## Overview

A fixture covering the extended component sub-tokens (`gap`, `border`, `outline`,
`opacity`, `boxShadow`, `transition`, `backdropFilter`) alongside the new color
formats (oklch, color(display-p3 …), hsl).

## Colors

Surface uses `oklch()`, accent uses `color(display-p3 …)`, outline uses `hsl()`.

## Typography

Single body scale for the fixture.

## Components

The `card` component exercises every extended sub-token; `card-focus` adds a
focus outline using the accent color.
