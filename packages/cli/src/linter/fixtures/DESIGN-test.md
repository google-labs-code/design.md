---
name: Pacific Mint Dental
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#3d4945'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#6d7a75'
  outline-variant: '#bcc9c4'
  surface-tint: '#006b5a'
  primary: '#006b5a'
  on-primary: '#ffffff'
  primary-container: '#4cbfa6'
  on-primary-container: '#004a3d'
  inverse-primary: '#69dabf'
  secondary: '#075fab'
  on-secondary: '#ffffff'
  secondary-container: '#70aeff'
  on-secondary-container: '#004077'
  tertiary: '#59605e'
  on-tertiary: '#ffffff'
  tertiary-container: '#a7aeac'
  on-tertiary-container: '#3b4240'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#87f6db'
  primary-fixed-dim: '#69dabf'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005143'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004884'
  tertiary-fixed: '#dde4e1'
  tertiary-fixed-dim: '#c1c8c5'
  on-tertiary-fixed: '#161d1b'
  on-tertiary-fixed-variant: '#414846'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is anchored in the concept of "Clinical Serenity." Aimed at urban professionals in Seattle, the aesthetic balances the precision of modern dentistry with the calming atmosphere of a high-end wellness studio. The personality is approachable yet authoritative, designed to reduce patient anxiety through visual clarity and soft interactions.

The design style utilizes a **Modern Corporate** foundation with **Soft-Minimalist** overlays. It avoids the harsh sterility of traditional medical interfaces by using generous whitespace, translucent layers, and a palette inspired by the Pacific Northwest’s natural light and water. The UI should feel airy and breathable, prioritizing ease of navigation and a sense of cleanliness.

## Colors

The palette is centered on a "Calming Mint" primary tone that signals health and freshness. This is paired with a "Soft Sky Blue" secondary to reinforce feelings of trust and stability.

- **Primary:** A vibrant yet desaturated mint green used for calls to action and key brand indicators.

- **Secondary:** A soft blue used for supportive information, secondary actions, and navigational accents.

- **Surface:** Crisp white is the dominant background color to maintain a clinical standard of cleanliness.

- **Accents:** Tertiary mint-whites are used for large background sections to soften the contrast against pure white.

- **Typography:** Deep slate grays replace pure black to ensure the interface remains soft and legible without being aggressive.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. 

**Manrope** is used for headlines. Its geometric yet slightly rounded apertures provide a contemporary, friendly look that mirrors the "roundedness" of the brand's shape language.

**Inter** is used for all body copy and functional labels. Chosen for its exceptional legibility in clinical contexts, it ensures that medical information and appointment details are communicated with absolute clarity. Hierarchy is established through weight shifts (Medium to Semibold) rather than dramatic size changes to maintain a calm, steady rhythm.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop views, centering content within a 1200px container to create an organized, professional feel. On smaller screens, the system transitions to a fluid model with generous margins.

The rhythm is built on a strictly enforced 8px base unit. 

- Use **24px (3 units)** for standard gutters and element spacing.
- Use **48px-64px (6-8 units)** for vertical section spacing to maintain an "airy" and unhurried feel.
- Elements should be aligned to a 12-column grid to ensure information-heavy pages (like dental history or treatment plans) remain structured and digestible.

## Elevation & Depth

To convey a sense of modern care, the design system utilizes **Ambient Shadows** and **Tonal Layers**. Depth is used sparingly to signify interactivity and importance.

- **Level 1 (Base):** Crisp white or tertiary-mint backgrounds.
- **Level 2 (Cards/Widgets):** Subtle 1px borders in a light gray-blue or a very soft, diffused shadow (15% opacity primary color tint) to lift the element slightly from the background.
- **Level 3 (Modals/Popovers):** Higher diffusion shadows with no blur-offset, creating a "glow" effect that feels more like light than a physical shadow.

Avoid heavy blacks or harsh dropshadows. All depth should feel "feathered" and light, as if diffused through a soft-box.

## Shapes

The shape language is defined by **Moderate Roundedness**. This approach softens the "sharpness" associated with dental tools and clinical environments, replacing it with a comforting, organic feel.

- **Primary containers:** Use a 12px to 16px corner radius.
- **Buttons and Inputs:** Use a consistent 8px radius to feel modern but structured.
- **Small elements (Tags/Chips):** Can utilize pill-shapes (fully rounded) to differentiate them from functional inputs.

Consistent radii across all components ensure the interface feels cohesive and intentionally designed.

## Components

### Buttons

Primary buttons are solid Mint Green with white text and 8px rounded corners. Secondary buttons use a "Soft Blue" outline or ghost style. Hover states should involve a subtle scale-up (1.02x) rather than a dramatic color change to keep the interaction gentle.

### Input Fields

Inputs feature a light gray-blue border that transitions to the Primary Mint color on focus. Labels are always positioned above the field for maximum accessibility. Validation states (error/success) should use soft, desaturated versions of red and green to avoid alarming the user.

### Calendar Widget

The signature component of this design system. It utilizes a soft-shadowed card (Level 2 elevation) with high-contrast dates. Selected dates are highlighted with a Primary Mint circle. The header navigation (Month/Year) uses the secondary Sky Blue to provide clear visual separation from the functional grid.

### Cards & Appointment Summaries

Cards use a Level 1 elevation (subtle border) and generous internal padding (24px). They are used to group treatment steps or upcoming appointments, creating a "tiled" look that organizes the user's health journey.

### Progress Indicators

Thin, horizontal bars using a Mint Green fill on a light mint track, used to show treatment plan completion or booking steps.
