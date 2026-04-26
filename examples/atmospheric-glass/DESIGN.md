---
name: Atmospheric Glass
colors:
  surface: "#0b1326"
  surface-dim: "#0b1326"
  surface-bright: "#31394d"
  surface-container-lowest: "#060e20"
  surface-container-low: "#131b2e"
  surface-container: "#171f33"
  surface-container-high: "#222a3d"
  surface-container-highest: "#2d3449"
  on-surface: "#dae2fd"
  on-surface-variant: "#c4c7c8"
  inverse-surface: "#dae2fd"
  inverse-on-surface: "#283044"
  outline: "#8e9192"
  outline-variant: "#444748"
  surface-tint: "#c6c6c7"
  primary: "#ffffff"
  on-primary: "#2f3131"
  primary-container: "#e2e2e2"
  on-primary-container: "#636565"
  inverse-primary: "#5d5f5f"
  secondary: "#adc9eb"
  on-secondary: "#14324e"
  secondary-container: "#304b68"
  on-secondary-container: "#9fbbdd"
  tertiary: "#ffffff"
  on-tertiary: "#620040"
  tertiary-container: "#ffd8e7"
  on-tertiary-container: "#ab3779"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#e2e2e2"
  primary-fixed-dim: "#c6c6c7"
  on-primary-fixed: "#1a1c1c"
  on-primary-fixed-variant: "#454747"
  secondary-fixed: "#d0e4ff"
  secondary-fixed-dim: "#adc9eb"
  on-secondary-fixed: "#001d35"
  on-secondary-fixed-variant: "#2d4965"
  tertiary-fixed: "#ffd8e7"
  tertiary-fixed-dim: "#ffafd3"
  on-tertiary-fixed: "#3d0026"
  on-tertiary-fixed-variant: "#85145a"
  background: "#0b1326"
  on-background: "#dae2fd"
  surface-variant: "#2d3449"
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 84px
    fontWeight: "700"
    lineHeight: 90px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "500"
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  card-gap: 16px
  section-margin: 40px
  glass-padding: 20px
elevation:
  resting: "0 1px 2px rgba(0,0,0,0.20)"
  raised: "0 8px 24px rgba(0,0,0,0.25)"
  overlay: "0 12px 32px rgba(0,0,0,0.40)"
  modal: "0 24px 48px rgba(0,0,0,0.50)"
components:
  glass-card-standard:
    backgroundColor: "#ffffff1a"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: "{spacing.glass-padding}"
    gap: "{spacing.card-gap}"
    shadow: "{elevation.raised}"
  glass-card-elevated:
    backgroundColor: "#ffffff33"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: "{spacing.glass-padding}"
    gap: "{spacing.card-gap}"
    shadow: "{elevation.overlay}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.xl}"
    height: 48px
    padding: 0px 24px
    transition: "opacity 150ms ease-out"
  button-primary-hover:
    backgroundColor: "{colors.primary-fixed-dim}"
  button-ghost:
    backgroundColor: "#ffffff0d"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.xl}"
    border: "1px solid #ffffff33"
    transition: "opacity 150ms ease-out"
  input-field:
    backgroundColor: "#ffffff1a"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 20px
    height: 48px
    border: "1px solid #ffffff33"
    iconSize: auto
  weather-display-large:
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
  metric-label:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-sm}"
  list-item-interactive:
    backgroundColor: "#ffffff00"
    rounded: "{rounded.md}"
    padding: 12px
    transition: "opacity 100ms ease-in"
  list-item-interactive-hover:
    backgroundColor: "#ffffff1a"
---

## Brand & Style

This design system centers on a high-fidelity Glassmorphism aesthetic designed to evoke a sense of clarity, depth, and modern sophistication. The brand personality is ethereal yet functional, transforming complex meteorological data into a serene visual experience.

The UI relies on a "vibrant-minimalist" approach: the background provides the energy through multi-colored abstract gradients (pinks, purples, and blues), while the interface elements act as frosted crystalline lenses that focus the user's attention. The emotional response is intended to be calm and premium, utilizing transparency and blur to simulate physical layers of glass floating in a fluid, digital space.

## Colors

The color strategy prioritizes luminosity and contrast. Because the background is a vibrant, multi-colored abstract composition, the UI components utilize a monochromatic white palette with varying alpha channels to maintain legibility.

- **Primary Canvas:** A multi-stop linear or radial gradient background featuring Deep Blue (#1E3A8A), Vivid Purple (#7E22CE), and Soft Pink (#DB2777).
- **Surface Alpha:** Component backgrounds are never solid. They range from `rgba(255, 255, 255, 0.1)` for secondary depth to `0.2` for primary interaction areas.
- **Accents:** Semantic colors for weather conditions (e.g., Warning Yellow, Rain Blue) should be applied with high saturation but low opacity fills to maintain the glass effect.
- **Text:** Strictly white (#FFFFFF) or high-tint silver (#E2E8F0) to ensure WCAG compliance against the vibrant background.

## Typography

The design system utilizes **Inter** for its neutral, geometric clarity which balances the organic nature of the blurred backgrounds.

- **Hierarchy:** Large display sizes are used for temperature readings to create a clear focal point.
- **Legibility:** On frosted glass, font weight is increased by one tier (e.g., using Medium instead of Regular) to counteract the visual noise of the background blur.
- **Treatment:** Subtle text-shadows (`0px 2px 4px rgba(0,0,0,0.15)`) may be applied to small labels to ensure they "pop" against lighter areas of the background gradient.

## Layout & Spacing

The layout follows a fluid, contextual model. Elements are grouped into "Glass Containers" that float within the safe areas of the viewport.

- **Rhythm:** An 8px base grid governs all dimensions.
- **Grouping:** Related weather metrics (humidity, wind, UV index) are housed in a CSS grid or flex layout with 16px gaps.
- **Negative Space:** Generous outer margins (24px+) are maintained to ensure the vibrant background is visible, reinforcing the "floating" nature of the interface.

## Elevation & Depth

Depth in this design system is not achieved through darkness, but through the physics of light and refraction.

- **The Glass Stack:**
  - **Level 1 (Base):** Dynamic background gradient with a slight grain texture.
  - **Level 2 (Standard Card):** `backdrop-filter: blur(20px)`, `background: #ffffff1a`, `shadow: {elevation.raised}`.
  - **Level 3 (Elevated/Modals):** `backdrop-filter: blur(40px)`, `background: #ffffff33`, `shadow: {elevation.overlay}`.
- **Edge Definition:** Glass surfaces use a single `border: 1px solid #ffffff33` to simulate light refraction on the edges. **Pick one** separator per surface — a card uses either its border *or* an elevation shadow, never both stacked on top of a tinted background.
- **Elevation tokens:** The semantic `resting` / `raised` / `overlay` / `modal` levels map physical depth to z-index intent. Components reference them via `shadow: "{elevation.raised}"`; literal `box-shadow` values are flagged by the linter as a nudge toward semantic elevation.
- **Opacity discipline:** Translucent surfaces are encoded as 8-digit hex colors (e.g., `#ffffff1a` for 10% white). Components never combine `opacity` with a translucent `backgroundColor` — that would stack alpha and break the WCAG contrast budget.

## Shapes

The shape language is organic and approachable. This design system uses "Rounded" (Level 2) settings to complement the fluid nature of the background.

- **Cards:** Use `1rem` (16px) for standard weather cards.
- **Action Elements:** Buttons and search bars use `rounded-xl` (1.5rem / 24px) to create a soft, tactile feel.
- **Icons:** Weather iconography should be line-based with rounded caps (2px stroke width) to match the border weights of the containers.

## Components

### Glass Containers

Standard cards use a 20px blur for general metrics, while elevated cards (modals or focal points) use 40px blur and higher opacity to sit physically higher in the stack. All glass elements must feature a 1px white border to simulate light refraction on the edges.

### Action Elements

Buttons use the `rounded-xl` setting to maintain a soft, organic feel. Primary buttons are solid white for maximum contrast, while ghost buttons utilize backdrop filters to remain integrated with the atmospheric background.

### Inputs & Interaction

Interactive list items and text inputs use subtle hover states and light blurs rather than solid color changes, preserving the "crystalline" transparency of the UI. The `input-field` component uses `iconSize: auto` so leading icons follow the body-md text size; only override that when the icon is the primary affordance.

State changes use `transition: opacity 150ms ease-out` — opacity and transform are the only properties we animate. Width, height, padding, and margin are off-limits because animating them forces a re-layout on every frame.

### Typography Application

Large weather displays utilize subtle text shadows to maintain legibility against the unpredictable colors of the background gradient. Metric labels should remain secondary in hierarchy using the silver-tinted `on-surface-variant` color.
