---
name: Totality Festival Design System
colors:
  surface: "#121318"
  surface-dim: "#121318"
  surface-bright: "#38393f"
  surface-container-lowest: "#0d0e13"
  surface-container-low: "#1a1b21"
  surface-container: "#1e1f25"
  surface-container-high: "#292a2f"
  surface-container-highest: "#34343a"
  on-surface: "#e3e1e9"
  on-surface-variant: "#d0c6ab"
  inverse-surface: "#e3e1e9"
  inverse-on-surface: "#2f3036"
  outline: "#999077"
  outline-variant: "#4d4732"
  surface-tint: "#e9c400"
  primary: "#fff6df"
  on-primary: "#3a3000"
  primary-container: "#ffd700"
  on-primary-container: "#705e00"
  inverse-primary: "#705d00"
  secondary: "#bdf4ff"
  on-secondary: "#00363d"
  secondary-container: "#00e3fd"
  on-secondary-container: "#00616d"
  tertiary: "#fcf3ff"
  on-tertiary: "#3b2754"
  tertiary-container: "#e7d1ff"
  on-tertiary-container: "#6b5586"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#ffe16d"
  primary-fixed-dim: "#e9c400"
  on-primary-fixed: "#221b00"
  on-primary-fixed-variant: "#544600"
  secondary-fixed: "#9cf0ff"
  secondary-fixed-dim: "#00daf3"
  on-secondary-fixed: "#001f24"
  on-secondary-fixed-variant: "#004f58"
  tertiary-fixed: "#eedbff"
  tertiary-fixed-dim: "#d6bcf4"
  on-tertiary-fixed: "#25113e"
  on-tertiary-fixed-variant: "#523d6c"
  background: "#121318"
  on-background: "#e3e1e9"
  surface-variant: "#34343a"
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: "700"
    lineHeight: 80px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: "600"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px
    height: 48px
    interactive: true
    states:
      hover:
        backgroundColor: "{colors.primary-fixed}"
      focus-visible:
        outline: "2px solid {colors.secondary}"
      disabled:
        backgroundColor: "{colors.surface-container-high}"
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  button-secondary:
    backgroundColor: "#00000000"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px
    height: 48px
    border: "1px solid {colors.secondary}"
    interactive: true
    states:
      hover:
        backgroundColor: "#00e3fd1a"
      focus-visible:
        outline: "2px solid {colors.secondary}"
      disabled:
        textColor: "{colors.on-surface}"
        border: "1px solid {colors.outline}"
        cursor: not-allowed
  card-glass-level-2:
    backgroundColor: "#34343a33"
    rounded: "{rounded.xl}"
    padding: "{spacing.gutter}"
  card-glass-interactive:
    backgroundColor: "#34343a33"
    rounded: "{rounded.xl}"
    padding: "{spacing.gutter}"
    border: "1px solid #ffffff14"
    interactive: true
    states:
      hover:
        backgroundColor: "#38393f66"
      focus-visible:
        outline: "2px solid {colors.secondary}"
      disabled:
        cursor: not-allowed
        textColor: "{colors.on-surface}"
  input-field:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 12px
    interactive: true
    states:
      focus-visible:
        outline: "2px solid {colors.secondary}"
      disabled:
        backgroundColor: "{colors.surface-container-high}"
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  list-item:
    backgroundColor: "#00000000"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 8px
    interactive: true
    states:
      hover:
        backgroundColor: "{colors.surface-container-high}"
        textColor: "{colors.primary}"
      focus-visible:
        outline: "2px solid {colors.secondary}"
      disabled:
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  hero-headline:
    textColor: "{colors.primary}"
    typography: "{typography.headline-xl}"
  badge-celestial:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px
---

## Brand & Style

The design system captures the visceral tension and awe of a solar eclipse. It targets an audience of celestial enthusiasts, music lovers, and seekers of rare experiences. The aesthetic is "Cosmic Premium," blending the stark mystery of deep space with the explosive brilliance of the solar corona.

To achieve this, the design system utilizes **Glassmorphism** and **High-Contrast** movements. Surfaces appear as translucent obsidian slabs floating over nebula-like gradients, creating a sense of immense depth. High-energy accents represent the "diamond ring" effect, ensuring that while the interface is dark, it feels luminous and alive rather than heavy or muted.

## Colors

The palette is anchored in the transition from shadow to light.

- **Primary (Amber/White-Gold):** Represents the solar corona and the "diamond ring" flash. Used for critical CTAs and high-importance highlights.
- **Secondary (Soft Cyan):** Represents the atmospheric thinning and the ethereal glow of the sky during totality. Used for interactive states and secondary information.
- **Tertiary (Deep Indigo):** Provides the "midnight" depth, used for subtle atmospheric gradients and deep backgrounds.
- **Neutral (Obsidian/Charcoal):** A near-black foundation that ensures the vibrant accents pop with maximum intensity.

Gradient usage is mandatory: use radial gradients for backgrounds to simulate the circular nature of the eclipse, moving from `Neutral` at the edges to `Tertiary` or `Secondary` in the focal centers.

## Typography

This design system uses a dual-font strategy to balance cinematic impact with utility.

- **Space Grotesk** is the voice of the festival. Its geometric, technical quirks suggest a futuristic and astronomical tone. It should be used for all headers and labels. Large headings should use tight letter spacing to feel "locked" and monumental.
- **Inter** provides a neutral, highly legible counterpoint for long-form content and descriptions, ensuring that even in low-light environments, the information remains accessible.

For a truly cinematic feel, apply a subtle text-shadow or "glow" to `headline-xl` elements when they appear on the darkest backgrounds, using a low-opacity version of the Primary color.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a prestigious, editorial feel, while transitioning to a fluid model for mobile.

A 12-column grid is used for desktop layouts, with generous outer margins to simulate the isolation of a celestial body in the void. Spacing is governed by an 8px base unit, but "negative space" is prioritized—elements should be allowed to breathe, echoing the vastness of space. Component groups should use tight internal spacing (e.g., 8px or 16px) but wide external margins (e.g., 64px or 80px) to create distinct "islands" of content.

## Elevation & Depth

Depth in this design system is achieved through **Glassmorphism** and light-based layering rather than traditional drop shadows.

- **Level 1 (Base):** Deep obsidian/neutral background.
- **Level 2 (Panels):** Semi-transparent surfaces (10-20% opacity) with a `20px` backdrop blur. These layers should have a `1px` inner stroke of white at 10% opacity to define the edge, simulating a glass refraction.
- **Level 3 (Interactive):** Elements that are hovered or active should emit an "Ambient Glow." This is a soft, diffused shadow tinted with the `Secondary` or `Primary` color, creating the effect of light bleeding from behind the object.

## Shapes

The shape language is "Soft-Technical." While the overall feel is geometric, a small corner radius is applied to all components to prevent the UI from feeling too aggressive or "sharp."

Buttons and input fields should utilize the `rounded-lg` (8px) setting for a modern feel. For specific decorative elements, such as image containers or featured cards, the `rounded-xl` (12px) setting can be used to soften the composition. Circles and perfect arcs are encouraged as supporting graphic elements to mirror the orbital theme of the festival.

## Components

### Action Elements

Buttons utilize `Space Grotesk` for a technical, high-impact feel; the Primary button mimics the "diamond ring" flash with a luminous amber glow on hover. Secondary buttons remain ethereal with a cyan outline, suggesting the sky's transition during totality.

### Containers & Surfaces

Cards implement level-2 glassmorphism using a semi-transparent `surface-variant` fill and a fine 1px inner stroke to simulate light refraction on glass edges. For interactive states, cards should expand their "Ambient Glow" using the Secondary Cyan color to indicate focus.

### Inputs & Selection

Input fields are anchored in the deepest `surface-container-lowest` to provide maximum contrast for entered text. Focus states use the Secondary Cyan border to maintain the cosmic color story without distracting from content.

### Typography Application

`headline-xl` should always be paired with a subtle primary-colored glow when placed on dark backgrounds to ensure it feels "radiant" rather than static. List items use a tighter `rounded-md` corner to differentiate them from larger, more prominent layout containers.
