---
name: Registry Demo
colors:
  primary: "#1a1c1e"
  on-primary: "#ffffff"
  secondary: "#6c7278"
  on-secondary: "#ffffff"
  surface: "#ffffff"
  on-surface: "#1a1c1e"
typography:
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 4px
  md: 8px
  lg: 12px
components:
  registry:
    - name: button-primary
      kind: button
      requiredProperties: [backgroundColor, textColor, padding, rounded]
    - name: button-secondary
      kind: button
    - name: card
      kind: container
    - name: card-elevated
      kind: container
      composes: card
    - name: input-text
      kind: input
      interactive: true
      requiredProperties: [backgroundColor, textColor, padding]
  definitions:
    button-primary:
      backgroundColor: "{colors.primary}"
      textColor: "{colors.on-primary}"
      typography: "{typography.label-md}"
      rounded: "{rounded.md}"
      padding: 12px
    button-secondary:
      backgroundColor: "{colors.secondary}"
      textColor: "{colors.on-secondary}"
      typography: "{typography.label-md}"
      rounded: "{rounded.md}"
      padding: 12px
    card:
      backgroundColor: "{colors.surface}"
      textColor: "{colors.on-surface}"
      rounded: "{rounded.lg}"
      padding: 16px
    card-elevated:
      shadow: "0 4px 8px rgba(0,0,0,0.08)"
    input-text:
      backgroundColor: "{colors.surface}"
      textColor: "{colors.on-surface}"
      typography: "{typography.body-md}"
      padding: 8px
---

## Brand & Style

A registry-demo design system. Closed-world component model.

## Colors

Primary `{colors.primary}` and a single accompanying `secondary`.

## Typography

A two-step type scale: `body-md` and `label-md`.

## Layout

Compact 8px rhythm.

## Elevation & Depth

The elevated card variant uses a 0/4/8 raised shadow.

## Shapes

Rounded scale: `sm`, `md`, `lg`.

## Components

Use `{components.button-primary}` for the primary CTA, `{components.button-secondary}` for secondary actions, and compose `{components.card-elevated}` over `{components.card}` rather than inventing new variants.

## Do's and Don'ts

- Do prefer composition over new registry entries
- Don't invent component names that aren't in the registry
