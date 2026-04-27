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
voice:
  formality: 2
  warmth: 5
  authority: 3
  playfulness: 4
  person: second
  tense: present-active
  oxfordComma: true
  contractions: permitted
copy:
  casing:
    button: sentence-case
    nav: title-case
  buttonLabelMaxWords: 3
  errorPattern: "{what-happened}. {how-to-fix}."
  emptyStateTone: encouraging
  bannedTerms:
    - seamless
    - leverage
    - revolutionary
  approvedTerms:
    user: pet parent
themes:
  dark:
    description: "Evening walk: orange recedes, deep night-blue carries the surface, and golden retriever orange shifts to a desaturated container step so it sits well against the dark canvas."
    colors:
      surface: "#0f1420"
      surface-dim: "#0a0e18"
      surface-bright: "#1c2230"
      surface-container-lowest: "#070a12"
      surface-container-low: "#141a26"
      surface-container: "#1a2030"
      surface-container-high: "#212838"
      surface-container-highest: "#2a3142"
      on-surface: "#e7ecf8"
      on-surface-variant: "#bfbab2"
      inverse-surface: "#e7ecf8"
      inverse-on-surface: "#151c27"
      outline: "#9c8a76"
      outline-variant: "#574a3c"
      surface-tint: "#ffb95f"
      primary: "#ffb95f"
      on-primary: "#3d2400"
      primary-container: "#5b3500"
      on-primary-container: "#ffddb8"
      inverse-primary: "#855300"
      secondary: "#adc6ff"
      on-secondary: "#001a42"
      secondary-container: "#003a89"
      on-secondary-container: "#d8e2ff"
      tertiary: "#7fd0ff"
      on-tertiary: "#001e2d"
      tertiary-container: "#004966"
      on-tertiary-container: "#c5e7ff"
      error: "#ffb4ab"
      on-error: "#690005"
      error-container: "#93000a"
      on-error-container: "#ffdad6"
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
      background: "#0f1420"
      on-background: "#e7ecf8"
      surface-variant: "#2a3142"
    elevation:
      # Dark surfaces lift via lighter color, not darker shadows. Shadows still
      # ground the element against scroll edges, but the surface tint does
      # most of the elevation work.
      resting: "0 1px 2px rgba(0,0,0,0.45)"
      raised: "0 4px 12px rgba(0,0,0,0.55)"
      overlay: "0 12px 24px rgba(0,0,0,0.65)"
      modal: "0 24px 48px rgba(0,0,0,0.75)"
    contrastTarget:
      body: 4.5
      large: 3
      ui: 3
breakpoints:
  philosophy: mobile-first
  values:
    sm: 640px
    md: 768px
    lg: 1024px
    xl: 1280px
    "2xl": 1536px
grid:
  columns: 12
  gutter: "{spacing.gutter}"
  margin:
    sm: "{spacing.md}"
    lg: "{spacing.margin}"
  maxWidth: 1280px
  bleedExceptions:
    - hero
    - gallery
    - modal-overlay
layoutRules:
  contentMaxWidth: 720px
  stackSpacing: "{spacing.lg}"
  formFieldWidth: 480px
templates:
  marketing:
    regions: [header, hero, sections, cta, footer]
    requiredRegions: [header, footer]
    maxWidth: 1280px
  app-shell:
    regions: [topbar, sidebar, main, statusbar]
    requiredRegions: [topbar, main]
    sidebarWidth: 280px
  settings:
    regions: [topbar, sidebar-nav, content]
    requiredRegions: [topbar, content]
pages:
  "/":
    template: marketing
  "/app":
    template: app-shell
  "/settings/*":
    template: settings
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

## Voice

The product talks to busy pet parents the way a friendly groomer would: warm, on a first-name basis, never preachy. The voice is casual (`formality: 2`) and very warm (`warmth: 5`); contractions are welcome and the page is allowed to crack a smile.

- **Person:** Second-person — "Book your dog's next walk".
- **Tense:** Present-active. Action verbs first; promises second.
- **Contractions:** Permitted ("we'll", "you're"). Removing them stiffens the voice.
<!-- design.md disable-next-line banned-term-in-prose -->
- **Banned terms:** `seamless`, `leverage`, `revolutionary`. They feel corporate and they always read like marketing copy.
<!-- design.md disable-next-line approved-term-violation -->
- **Approved terms:** Say `pet parent`, not `user`. The brand insists.

Button labels stay short (≤ 3 words) and use sentence-case to feel conversational. Error messages follow `{what-happened}. {how-to-fix}.` so people see the problem first, the next step second. Empty states project encouragement, not blame ("Add your first pup" beats "No pets found").

## Themes

Paws & Paths ships with a single base palette (the `light` mode) and a `dark` mode counterpart for evening walks and OS-level dark preferences. Themes here are alternate values, not alternate brands — the personality, type family, and shape language stay constant.

- **Don't invert, reconsider.** The dark mode is not "light with inverted colors." Surfaces *lift* via lighter color steps (e.g., `surface-container-high` is paler than `surface`) instead of stacking deeper shadows. The Golden Retriever orange recedes to a desaturated container step (`#5b3500`) — fully-saturated `#855300` would vibrate against the deep navy backgrounds.
- **Contrast targets that hold across themes.** Both themes target WCAG AA (`body: 4.5`, `large: 3`, `ui: 3`). The `contrast-ratio` rule runs per theme; a dark-only state that drops below the body floor surfaces explicitly with the theme name in the diagnostic.
<!-- design.md disable-next-line prose-token-mismatch -->
- **Saturation discipline in dark mode.** Use `primary-container` / `on-primary-container` for dark backgrounds and accents; reserve the bare `primary` (now `#ffb95f`) for elements that want to read as "lit from above," not as a saturated brand mark.
- **High-contrast (future).** A high-contrast theme would inherit from `light`, set `contrastTarget.body` to 7, strip decorative shadows from `elevation.resting`, and replace tonal hover affordances with explicit borders. Adding it is a follow-up — themes are expensive (every component is reviewed in every theme) and we add them only when the use case is durable.
- **When to add a theme.** Themes are durable identity surfaces (light vs. dark, normal vs. high-contrast, comfortable vs. compact density). Never per-customer or per-campaign — those belong elsewhere.

## Layout & Spacing

The layout follows a **Fixed Grid** model for mobile-first consistency, utilizing a 12-column system at desktop widths and collapsing toward a single column on the smallest viewports.

### Mobile-first

Paws & Paths is mobile-first. Base styles target the smallest viewport (a phone in a coat pocket on a walk); breakpoints are progressive enhancements layered on top. The cascade is `sm 640px → md 768px → lg 1024px → xl 1280px → 2xl 1536px`. Authors who reach for a desktop-first cascade are out of step with the system.

### Breakpoint philosophy

Breakpoints are content-driven, not device-driven. `md` is "two-column layouts become viable"; `lg` is "the sidebar earns its keep"; `xl` is "the marketing hero gets full breathing room." We add a breakpoint when the layout actually breaks, never because a hypothetical tablet exists.

### Responsive content strategy

Narrower viewports restructure, they don't squish. The `card-walk-stat` row collapses from a 3-up grid to a stacked list below `md`; the `app-shell` sidebar slides into a drawer below `lg`; the `card-profile` walker grid drops from 4 → 2 → 1 columns across `lg → md → sm`.

### Grid usage

Components and layout dimensions snap to `grid.gutter` (16px) or to the declared spacing scale. The `off-grid-dimension` rule warns on widths, paddings, gaps, and margins that drift off-grid. The grid itself centers on screens above `grid.maxWidth` (1280px) — past that, we letterbox rather than stretch. Off-grid dimensions are reserved for the regions in `grid.bleedExceptions` (hero artwork, gallery thumbnails, modal overlays).

### Readable measure

Body prose and long-form content stay under `layoutRules.contentMaxWidth` (720px ≈ 65 characters per line at our body size). The "Paths" detail screens use this width even on `2xl`; the brand value of focus beats the visual symmetry of full-width text.

### Page templates

Three templates cover Paws & Paths today:

- **`marketing`** — the public surfaces (`/`, `/pricing`, `/about`). Required regions: `header`, `footer`. The hero uses `bleedExceptions` to break out of the grid.
- **`app-shell`** — the authenticated walker app (`/app/*`). Required regions: `topbar`, `main`. The 280px sidebar is fixed; the main column flexes against `grid.maxWidth`.
- **`settings`** — secondary surfaces inside the app (`/settings/*`). Required regions: `topbar`, `content`. Inherits the app chrome but swaps the sidebar for `sidebar-nav`.

Anti-pattern: the marketing template used for an in-app surface (it loses the topbar / sidebar context the user expects), or the app-shell wrapped around the public homepage (the global header/footer disappear).

### Region semantics

`header` is identity + global nav (marketing scope). `topbar` is contextual to the current page (app scope). `sidebar` is persistent navigation; `sidebar-nav` is a sub-navigation rail inside settings. We never use `header` and `topbar` interchangeably — each carries different expectations about scroll behavior and shrinkage.

- **Whitespace:** A "generous" philosophy is applied. Never crowd elements; use `lg` and `xl` spacing for section vertical separation to maintain a high-end aesthetic.
- **Rhythm:** Spacing is strictly based on an 8px scale.
<!-- design.md disable-next-line approved-term-violation -->
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
