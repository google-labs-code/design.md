---
name: Heritage
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#44474a'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#75777a'
  outline-variant: '#c5c6ca'
  surface-tint: '#5d5e61'
  primary: '#000101'
  on-primary: '#ffffff'
  primary-container: '#1a1c1e'
  on-primary-container: '#838486'
  inverse-primary: '#c6c6c9'
  secondary: '#595f65'
  on-secondary: '#ffffff'
  secondary-container: '#dde3ea'
  on-secondary-container: '#5f656b'
  tertiary: '#040000'
  on-tertiary: '#ffffff'
  tertiary-container: '#400300'
  on-tertiary-container: '#db5b45'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e5'
  primary-fixed-dim: '#c6c6c9'
  on-primary-fixed: '#1a1c1e'
  on-primary-fixed-variant: '#454749'
  secondary-fixed: '#dde3ea'
  secondary-fixed-dim: '#c1c7ce'
  on-secondary-fixed: '#161c21'
  on-secondary-fixed-variant: '#41474d'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a6'
  on-tertiary-fixed: '#3f0300'
  on-tertiary-fixed-variant: '#881f0f'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-numeral:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built upon a philosophy of **Architectural Minimalism** mixed with **Journalistic Gravitas**. It is designed for high-performance athletic heritage brands, marathon organizers, and prestigious sporting publications. The aesthetic targets an audience that values discipline, endurance, and historical prestige.

The UI evokes a premium matte finish, avoiding glossy gradients or excessive shadows in favor of structural clarity and "Color Stacking." The emotional response is one of calm authority—resembling a high-end broadsheet newspaper or a contemporary gallery exhibition. It prioritizes legibility, precision timing, and editorial flow. 

## Colors

The palette is rooted in high-contrast neutrals and a single, evocative accent color.  

- **Primary (#1A1C1E):** A deep ink used for headlines and core text to provide maximum readability and a sense of permanence.
- **Secondary (#6C7278):** A sophisticated slate used primarily for utilitarian elements like borders, captions, and metadata.
- **Tertiary (#B8422E):** Known as "Boston Clay," this vibrant earthy red is the sole driver for interaction, used exclusively for primary actions and critical highlights.
- **Neutral (#F7F5F2):** A warm limestone that serves as the foundation for all pages, providing a softer, more organic feel than pure white.
- **Surface (#FFFFFF):** Pure white is reserved for foreground cards and content sections to create a "stacked" physical appearance against the neutral canvas.

## Typography

The typography strategy leverages two distinct weights of **Public Sans** for the narrative and **Space Grotesk** for technical data.

- **Headlines:** Set in Public Sans Semi-Bold to establish an institutional and trustworthy voice.
- **Body:** Public Sans Regular at 16px ensures contemporary professionalism and long-form readability.
- **Labels:** Space Grotesk is used for all technical data, time-stamps, and metadata. Its geometric construction evokes the precision of a digital stopwatch or race clock. Labels are strictly uppercase with generous letter spacing to enhance their "technical" feel.

## Layout & Spacing

This design system utilizes a **Relaxed Fixed Grid** approach. Content is organized within a standard 12-column grid to maintain structural alignment, but the spacing between sections is generous to allow for "breathability."

The 16px base unit dictates all padding and margins. Vertical rhythm is strictly enforced in multiples of 8px or 16px. Margins on the outer edges of the viewport should be substantial (32px+) to reinforce the editorial, "magazine-style" layout.

## Elevation & Depth

Depth in this system is achieved through **Color Stacking** and **Architectural Outlines** rather than shadows.  

1. **Base Layer:** The Neutral (#F7F5F2) background serves as the ground.
2. **Surface Layer:** White (#FFFFFF) cards or sections sit directly on the ground.
3. **Definition:** Every surface layer is defined by a 1px solid Secondary (#6C7278) border. 

Shadows should be avoided entirely to maintain the matte, premium finish. The hierarchy is established purely through the contrast between the limestone background and the pure white foreground containers.

## Shapes

The shape language is defined by **Architectural Sharpness**. All interactive elements, containers, and inputs utilize a minimal **4px corner radius**. This provides just enough softness to feel modern while maintaining a rigid, engineered aesthetic that reflects the precision of the marathon theme. 

## Components

- **Buttons:** Primary buttons are solid "Boston Clay" (#B8422E) with white text. They use a 4px radius and 16px horizontal padding. No shadows; hover states should darken the background color slightly.

- **Inputs:** Text fields use a White background with a 1px Secondary border. On focus, the border increases to 2px and changes to Tertiary (#B8422E). Label text should use the Space Grotesk label style positioned above the field.

- **Cards:** Cards are pure white with a 1px Secondary border. They should never have shadows. Use generous internal padding (24px or 32px) to maintain the relaxed editorial feel.

- **Chips/Badges:** Use a transparent background with a 1px Secondary border and Space Grotesk labels. If used for status, the border can take on the Tertiary color.

- **Lists:** Items are separated by 1px Secondary horizontal rules. Ensure high vertical padding (16px) between items to prevent visual clutter.

- **Data Displays:** For timing and race results, use Space Grotesk numerals in Primary ink to emphasize the precision and "clock" aesthetic.

## Do's and Don'ts

### Do:
- **Do** use asymmetrical margins. If the left margin is `16 (5.5rem)`, try making the right margin `24 (8.5rem)` to create an editorial layout.
- **Do** use `Space Grotesk` for anything that feels like "data" or "process."
- **Do** lean into the "Limestone" warmth. Pure grey (#808080) is too cold; always use the `Slate Gray` (#6C7278) which has a hint of blue-gold.

### Don't:
- **Don't** use 100% black. Always use `Deep Ink` (#1A1C1E).
- **Don't** use "pill" buttons. The `4px` radius is a strict rule to maintain architectural discipline.
- **Don't** use dividers. If two pieces of content need separation, increase the spacing token (e.g., move from `4` to `6`) or change the background tone.
