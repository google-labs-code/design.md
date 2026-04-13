---
name: The Cartographer's Atlas
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c7c6cc'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#909096'
  outline-variant: '#46464c'
  surface-tint: '#c3c6d7'
  primary: '#c3c6d7'
  on-primary: '#2c303d'
  primary-container: '#0a0e1a'
  on-primary-container: '#777b8a'
  inverse-primary: '#5a5e6d'
  secondary: '#b9c8dc'
  on-secondary: '#233241'
  secondary-container: '#3c4a5b'
  on-secondary-container: '#abbacd'
  tertiary: '#ecc246'
  on-tertiary: '#3d2e00'
  tertiary-container: '#150e00'
  on-tertiary-container: '#987700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe2f3'
  primary-fixed-dim: '#c3c6d7'
  on-primary-fixed: '#171b28'
  on-primary-fixed-variant: '#434654'
  secondary-fixed: '#d5e4f9'
  secondary-fixed-dim: '#b9c8dc'
  on-secondary-fixed: '#0e1d2b'
  on-secondary-fixed-variant: '#3a4858'
  tertiary-fixed: '#ffe08e'
  tertiary-fixed-dim: '#ecc246'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#584400'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Newsreader
    fontSize: 84px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.25em
  coordinate:
    fontFamily: Work Sans
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin: 64px
  section-gap: 128px
---
 
## Brand & Style
 
This design system establishes a high-end editorial atmosphere that bridges the gap between 18th-century maritime navigation and 21st-century data visualization. The brand personality is authoritative, mysterious, and precise. It targets an intellectually curious audience—scholars, analysts, and enthusiasts of long-form digital storytelling.
 
The design style is a hybrid of **Minimalism** and **Modern Editorial**. It relies on monumental typography and extreme tonal shifts rather than decorative chrome. The aesthetic response should feel like unfolding a rare, heavy-paper map in a dimly lit study: quiet, intentional, and vast.
 
## Colors
 
The palette is anchored in "Obsidian Canvas," a near-black that provides infinite depth. 
 
- **Neutral (#080C14):** Used for the primary background/void.
- **Primary (#0A0E1A):** Used for structural panels, cards, and inset surfaces. The contrast between Neutral and Primary is subtle, creating depth without harsh lines.
- **Secondary (#2C3A4A):** Reserved for ultra-thin dividers or structural guides when tonal contrast is insufficient. Use with extreme restraint.
- **Tertiary/Accent (#C9A227):** This vivid gold is the "Compass Rose" of the UI. It is restricted to exactly one occurrence per view—typically the primary action or a singular focal point of data.
 
## Typography
 
Typography is the primary vehicle for the "Cartographer" aesthetic. 
 
- **Headlines:** Use **Newsreader** for its high-contrast, traditional serif quality. Display sizes should use light weights with generous tracking to feel monumental and airy.
- **Body:** Use **Manrope** for readability. The 1.7 line height is mandatory to maintain an "open" editorial feel against the dark background.
- **Labels & Annotations:** Use **Work Sans** in all-caps with wide tracking. These mimic the technical coordinates found on nautical charts.
 
## Layout & Spacing
 
This design system utilizes a **Fixed Grid** model within a full-bleed canvas. While images and background panels may stretch from edge to edge, the typographic content adheres to a strict 12-column grid with wide margins.
 
The rhythm is "sparse." High-density information is discouraged. Use massive vertical gaps (section-gaps) to separate narrative beats. Elements should feel like islands in a dark ocean.
 
## Elevation & Depth
 
There are no shadows in this design system. Depth is achieved through **Tonal Layering** and **Negative Space**:
 
1.  **Level 0 (Background):** #080C14 (The base canvas).
2.  **Level 1 (Panels):** #0A0E1A (Used for content blocks or "floating" map segments).
3.  **Level 2 (Interaction):** Hover states use slight shifts in background color or the introduction of a #2C3A4A hairline border.
 
Avoid stacking more than two levels of depth. The interface should feel flat and planar, like a physical map spread across a table.
 
## Shapes
 
The shape language is strictly **Sharp**. A 0px border radius is applied to every element—buttons, cards, input fields, and images. This reinforces the precision of cartography and the "cut" feel of archival paper.
 
## Components
 
- **Buttons:** Large, rectangular, 0px radius. The primary CTA is the only element allowed to use the Gold (#C9A227) background with dark text. Secondary buttons are transparent with a thin #2C3A4A border.
- **Cards:** Defined by tonal change (#0A0E1A) against the background. No borders unless necessary for accessibility.
- **Inputs:** Minimalist bottom-border only, or a solid Primary color block. Use Label-caps for field headers.
- **Lists:** Clean rows with wide vertical padding. Use "Coordinate" style typography for indices (e.g., 001, 002).
- **The Compass Rose:** A bespoke icon or navigational element that serves as the single gold accent in a composition, used to return to "North" (the home screen) or trigger the primary narrative flow.
- **Data Points:** Small, sharp squares or crosshair glyphs (using Secondary color) for map annotations.