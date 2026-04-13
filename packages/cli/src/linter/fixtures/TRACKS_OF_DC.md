---
name: The Tracks of Washington DC
colors:
  surface: '#fff9ee'
  surface-dim: '#dfd9d0'
  surface-bright: '#fff9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3e9'
  surface-container: '#f3ede3'
  surface-container-high: '#ede7dd'
  surface-container-highest: '#e8e2d8'
  on-surface: '#1d1b16'
  on-surface-variant: '#424844'
  inverse-surface: '#33302a'
  inverse-on-surface: '#f6f0e6'
  outline: '#727874'
  outline-variant: '#c2c8c2'
  surface-tint: '#4d6357'
  primary: '#061b12'
  on-primary: '#ffffff'
  primary-container: '#1b3026'
  on-primary-container: '#81988b'
  inverse-primary: '#b4ccbe'
  secondary: '#6b5c4c'
  on-secondary: '#ffffff'
  secondary-container: '#f4dfcb'
  on-secondary-container: '#716252'
  tertiary: '#300a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#531700'
  on-tertiary-container: '#e96f3f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e8d9'
  primary-fixed-dim: '#b4ccbe'
  on-primary-fixed: '#0a1f16'
  on-primary-fixed-variant: '#364b40'
  secondary-fixed: '#f4dfcb'
  secondary-fixed-dim: '#d7c3b0'
  on-secondary-fixed: '#241a0e'
  on-secondary-fixed-variant: '#524436'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812900'
  background: '#fff9ee'
  on-background: '#1d1b16'
  surface-variant: '#e8e2d8'
typography:
  headline-display:
    fontFamily: Newsreader
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-main:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Noto Serif
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0px
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  grid-columns: '5'
  headline-span: '3'
  content-span: '2'
  gutter: 24px
  margin: 40px
  unit: 8px
---
 
## Brand & Style
This design system establishes a high-prestige editorial aesthetic that blends collegiate tradition with modern architectural precision. The brand identity is authoritative and quiet, evoking the intellectual rigor of a historical archive and the physical presence of iron and stone. 
 
The design style is **Brutalist-Minimalism**. It utilizes hard edges, raw structural lines, and a deliberate absence of decorative embellishments like shadows or gradients. The visual language favors high-contrast layouts and generous negative space to elevate the subject matter—the transit and architecture of the capital—to a level of fine art.
 
## Colors
The palette is rooted in a "Warm Cream" canvas that provides a softer, more sophisticated background than pure white. 
 
- **Deep Midnight Forest Green** serves as the primary ink, used for all headlines and foundational text to ensure maximum authority.
- **Warm Weathered Slate** is reserved for secondary information, metadata, and captions, providing a softer visual hierarchy.
- **Track Terracotta** is used sparingly as a singular accent for calls to action, drawing the eye to the primary interaction point on each panel.
 
## Typography
The typographic system relies on a sharp contrast between three distinct voices:
 
- **Headlines:** Set in a condensed, high-contrast serif (Newsreader). These must always be left-aligned to maintain a rigid vertical axis. 
- **Body:** A humanist serif (Noto Serif) designed for long-form legibility. The generous 1.7 line height ensures a luxurious, breathable reading experience.
- **Labels:** A monospace font (Space Grotesk) used for administrative data, timestamps, and "eyebrow" text. The wide tracking is inspired by mechanical stopwatches and archival stamps.
 
## Layout & Spacing
The layout follows a strict asymmetrical split-grid model based on a 5-column system.
 
- **Split Ratio:** Content is divided into a 3/5 width for headlines and primary imagery, and a 2/5 width for descriptions, metadata, and CTAs. 
- **The Grid:** A subtle canvas grid of thin ruled lines (0.5px Forest Green at 10% opacity) should be visible or implied, aligning all elements to a rigid structure.
- **Alignment:** Center-alignment is strictly prohibited. All elements must anchor to the left margin or the internal 3/5 split line.
- **Imagery:** Use full-bleed imagery that breaks through the margins to create a lookbook feel.
 
## Elevation & Depth
This design system avoids all drop shadows and blurs. Depth is achieved exclusively through **Tonal Variation** and layering. 
 
Elements are perceived as being on different planes through the use of solid color blocks and ruled lines. To separate sections, use thin 1px horizontal rules in Primary Forest Green. High-priority panels may use a subtle shift in background color from the Neutral Cream to a slightly darker variant of the Secondary Slate at extremely low opacity (3-5%).
 
## Shapes
The shape language is defined by **Hard Right Angles**. 
 
- **Border Radius:** All containers, buttons, and decorative elements must have a 0px radius. 
- **Geometry:** Arcs and circles may be used for specific technical diagrams or "Track" iconography, but they must be precise, geometric, and never "organic" or "hand-drawn."
 
## Components
- **Buttons:** Rectangular with a 0px radius. Fill is Track Terracotta; text is Primary Forest Green. Each button is framed by a 1px outer ring in Primary Forest Green at 10% opacity, spaced 4px from the button edge. No icons are permitted within buttons.
- **Pull Quotes:** Set in the editorial headline serif. These feature a 2px solid vertical border in Track Terracotta on the left side only.
- **Track Labels:** Monospace "eyebrow" labels used above headlines. These should always be uppercase with 0.2em tracking.
- **Metadata Lists:** Key-value pairs (e.g., "STATION: UNION") set in the Secondary Slate color, using a mix of Monospace for keys and Humanist Serif for values.
- **Dividers:** 1px solid ruled lines. Use sparingly to define the 3/5 - 2/5 split or to separate editorial sections.