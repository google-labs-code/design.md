---
name: Paws & Paths
colors:
  surface: "#f9f9ff"
  surface-dim: "#d3daea"
  surface-bright: "#f9f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f0f3ff"
  surface-container: "#e7eefe"
  surface-container-high: "#e2e8f8"
  surface-container-highest: "#dce2f3"
  on-surface: "#151c27"
  on-surface-variant: "#534434"
  inverse-surface: "#2a313d"
  inverse-on-surface: "#ebf1ff"
  outline: "#867461"
  outline-variant: "#d8c3ad"
  surface-tint: "#855300"
  primary: "#855300"
  on-primary: "#ffffff"
  primary-container: "#f59e0b"
  on-primary-container: "#613b00"
  inverse-primary: "#ffb95f"
  secondary: "#0058be"
  on-secondary: "#ffffff"
  secondary-container: "#2170e4"
  on-secondary-container: "#fefcff"
  tertiary: "#00658b"
  on-tertiary: "#ffffff"
  tertiary-container: "#1abdff"
  on-tertiary-container: "#004966"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffddb8"
  primary-fixed-dim: "#ffb95f"
  on-primary-fixed: "#2a1700"
  on-primary-fixed-variant: "#653e00"
  secondary-fixed: "#d8e2ff"
  secondary-fixed-dim: "#adc6ff"
  on-secondary-fixed: "#001a42"
  on-secondary-fixed-variant: "#004395"
  tertiary-fixed: "#c5e7ff"
  tertiary-fixed-dim: "#7fd0ff"
  on-tertiary-fixed: "#001e2d"
  on-tertiary-fixed-variant: "#004c6a"
  background: "#f9f9ff"
  on-background: "#151c27"
  surface-variant: "#dce2f3"
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: "800"
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin: 24px
elevation:
  resting: "0 1px 2px rgba(133,83,0,0.06)"
  raised: "0 4px 12px rgba(133,83,0,0.10)"
  overlay: "0 12px 24px rgba(133,83,0,0.14)"
  modal: "0 24px 48px rgba(133,83,0,0.18)"
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
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    transition: "opacity {motion.duration.fast} {motion.easing.standard}"
    interactive: true
    states:
      hover:
        backgroundColor: "{colors.primary-container}"
        textColor: "{colors.on-primary-container}"
      focus-visible:
        outline: "2px solid {colors.primary}"
      disabled:
        backgroundColor: "{colors.surface-container-high}"
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
    transition: "opacity {motion.duration.fast} {motion.easing.standard}"
    interactive: true
    states:
      hover:
        backgroundColor: "{colors.secondary-container}"
        textColor: "{colors.on-secondary-container}"
      focus-visible:
        outline: "2px solid {colors.secondary}"
      disabled:
        backgroundColor: "{colors.surface-container-high}"
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  card-profile:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
    gap: "{spacing.sm}"
    shadow: "{elevation.raised}"
    transition: "transform {motion.duration.medium} {motion.easing.decelerate}"
    iconSize: "{iconography.sizes.lg}"
  modal-walker-detail:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
    shadow: "{elevation.modal}"
    transition: "opacity {motion.duration.slow} {motion.easing.decelerate}"
    iconSize: "{iconography.sizes.xl}"
  card-walk-stat:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    shadow: "{elevation.resting}"
  input-field:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
    border: "1px solid {colors.outline-variant}"
    iconSize: "{iconography.sizes.md}"
    interactive: true
    states:
      focus-visible:
        outline: "2px solid {colors.primary}"
      disabled:
        backgroundColor: "{colors.surface-container-high}"
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  list-item-walker:
    backgroundColor: "#00000000"
    padding: "{spacing.sm}"
    rounded: "{rounded.md}"
    transition: "opacity {motion.duration.fast} {motion.easing.accelerate}"
    iconSize: "{iconography.sizes.sm}"
    interactive: true
    states:
      hover:
        backgroundColor: "{colors.surface-container-high}"
      focus-visible:
        outline: "2px solid {colors.primary}"
      disabled:
        textColor: "{colors.on-surface}"
        cursor: not-allowed
  badge-status:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
    iconSize: "{iconography.sizes.sm}"
---

## Brand & Style

The design system is built to evoke the joyful energy of a walk in the park balanced with the reliability of a premium professional service. The brand personality is optimistic, trustworthy, and active.

The chosen style is **Modern Corporate** with a friendly, human-centric twist. It utilizes clean layouts and significant whitespace to reduce cognitive load for busy pet owners. The interface feels light and airy, avoiding heavy borders in favor of soft shadows and tonal shifts to create a welcoming, "best-in-class" digital environment.

## Colors

The palette centers on "Golden Retriever" orange to drive action and signal energy. This is balanced by "Sky Walk" blue, which provides a calming counterpoint for administrative tasks and scheduling.

- **Primary:** Use for main actions, active states, and highlights.
- **Secondary:** Use for secondary information, trust indicators, and navigation accents.
- **Neutral:** A range of soft grays used for backgrounds and borders to keep the UI feeling "premium."
- **Deep Charcoal:** Used for all primary text to ensure high legibility and a grounded, professional feel.

## Typography

This design system utilizes **Plus Jakarta Sans** for its friendly, rounded terminals and exceptional legibility. It maintains a contemporary look while feeling more approachable than standard geometric sans-serifs.

- **Headlines:** Bold weights are used to create a clear hierarchy and guide the eye quickly to key information.
- **Body:** Generous line heights are applied to the body text to maintain the "premium and clean" feel.
- **Labels:** Used for buttons and small metadata, utilizing a medium or semi-bold weight to remain distinct even at small scales.

## Layout & Spacing

The layout follows a **Fixed Grid** model for mobile-first consistency, utilizing a 4-column system for handheld devices.

- **Whitespace:** A "generous" philosophy is applied. Never crowd elements; use `lg` and `xl` spacing for section vertical separation to maintain a high-end aesthetic.
- **Rhythm:** Spacing is strictly based on an 8px scale.
- **Containers:** Content should be centered with a maximum width on larger screens, ensuring the "Paths" (user journeys) feel focused and intentional.

## Motion

Motion in Paws & Paths is short, calm, and purposeful — it confirms that an action took effect, never decorates.

- **Duration scale:** `fast` (150ms) for hover, focus, press; `medium` (250ms) when a card lifts on selection; `slow` (400ms) reserved for full-screen transitions.
- **Easing:** Hovers use `standard`. Cards entering the screen use `decelerate` (the lift settles in). List items leaving on dismissal use `accelerate`.
- **Reduced motion:** Under `prefers-reduced-motion`, every motion clamps to the `instant` duration with `standard` easing — opacity changes still apply, transforms are dropped.
- **What never animates:** `width`, `height`, `padding`, `margin`. The walker-card hover lifts via `transform: translateY(-2px)`, never via padding.

## Elevation & Depth

This design system uses **Ambient Shadows** and **Tonal Layers** to define the interface's verticality.

- **Surfaces:** Main backgrounds use the lightest neutral tint. Interactive cards sit one level above on a pure white surface.
- **Shadows:** Shadows are highly diffused and soft (Blur: 20px-40px, Opacity: 4-8%) with a subtle hint of the primary orange mixed into the shadow color to prevent a "dirty" gray look.
- **Elevation tokens:** The four semantic levels are defined in the `elevation:` block — `resting` for content cards, `raised` for the hero `card-profile`, `overlay` for transient surfaces, `modal` for the highest-z dialogs. Reference them from components via `shadow: "{elevation.raised}"` rather than hand-rolling shadow values.
- **Interactions:** Hover lifts elements one elevation level by transitioning to the next-higher token. Animate `opacity` and `transform`; never animate `width`, `height`, `padding`, or `margin`.

## Shapes

The shape language is defined by **Rounded** corners, mirroring the soft features of a pet and making the app feel safe and friendly.

- **Buttons:** Main CTA buttons use a `12px` (rounded-lg) radius to feel substantial and clickable.
- **Cards:** Dog profiles and walker cards use a `1.5rem` (rounded-xl) radius to create a soft, containerized look.
- **Inputs:** Form fields use a `0.5rem` radius to maintain a professional yet modern appearance.
- **Icons:** Icons should feature rounded caps and corners to harmonize with the UI's structural elements.

## Iconography

Paws & Paths commits to **Lucide** at a `1.5px` stroke weight. The rounded caps echo the soft button radii and never compete visually with the typography.

- **Library and weight:** Lucide outlined; do not mix with Material Symbols or custom SVGs. The single library is the system's iconographic identity.
- **Filled vs outlined:** Outlined is the default. The filled style is reserved for selected nav items (active tab) and favorited walkers.
- **Sizing:** The size scale is `sm` 16px, `md` 20px, `lg` 24px, `xl` 32px. Form fields and badges use `sm`; list rows and buttons use `md`; avatar overlays and toolbar actions use `lg`.
- **Color binding:** Icons inherit `currentColor`. The only exception is the brand mark in the splash screen.
- **Accessibility:** Icon-only controls (e.g. dismiss buttons) always carry an `aria-label`.

## Components

### Buttons & Inputs

Buttons use `rounded-lg` (12px) to feel substantial and friendly, while form fields use a smaller `DEFAULT` radius to maintain structural alignment. All interactive states should utilize a subtle 150ms ease-in-out transition for background color shifts.

### Cards & Elevation

The `card-profile` is the hero container, utilizing `rounded-xl` and `shadow: {elevation.raised}` to create a "lifted" appearance against the `surface` background. `card-walk-stat` sits at `{elevation.resting}` and relies on its blue secondary backgroundColor for separation — pick **one** strategy per surface (`triple-separation` keeps us honest). The `input-field` is the only component that combines a `border` with a tonal background; it intentionally has no shadow.

### Lists & Navigation

List items should maintain a wide touch target and use `surface-container-high` for hover states to provide clear feedback without visual clutter. Use the `badge-status` for pet availability or walk progress indicators, ensuring the typography remains legible at the smaller scale.
