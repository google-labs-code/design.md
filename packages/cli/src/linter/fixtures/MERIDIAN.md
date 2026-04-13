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
  display-xl:
    fontFamily: Newsreader
    fontSize: 84px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Noto Serif
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.7'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.2em
  quote-editorial:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 8px
  gutter: 24px
  margin: 64px
  panel-padding: 120px
---
 
## Brand & Style
 
This design system establishes an atmosphere of intellectual authority and discovery. It targets a sophisticated audience that values long-form investigative journalism, historical context, and precision data. The brand personality is scholarly yet avant-garde, blending the archival feel of physical parchment and ink with the crispness of modern digital mapping.
 
The aesthetic follows a **High-Contrast / Minimalist** approach. It rejects modern trends of soft shadows and rounded corners in favor of a rigid, monumental structure. The emotional response is intended to be one of quiet focus, evoking the feeling of a researcher in a darkened library illuminated by a single high-intensity lamp.
 
## Colors
 
The palette is restricted to four core tones to maintain an editorial rigor.
- **Obsidian Canvas (#080C14):** The foundational ground. It provides a deep, non-distracting void that allows content to emerge.
- **Ink Navy (#0A0E1A):** Used for primary content containers and headings to create a subtle shift from the background without losing the dark-mode immersion.
- **Slate Structure (#2C3A4A):** The color of technicality. Used for hair-line borders, grid lines, and utilitarian UI elements.
- **Antique Gold (#C9A227):** A singular, high-intensity accent. It must be used sparingly—ideally only once per screen view—to act as a beacon for the most important action or data point.
 
## Typography
 
The typography system relies on the interplay between traditional literary serifs and technical geometric sans-serifs.
- **Headlines:** Use **Newsreader** at large scales. Its high-contrast strokes and sharp serifs command attention. Increased tracking on display sizes enhances the "monumental" feel.
- **Body:** **Noto Serif** is utilized for its warmth and legibility over long periods. The 1.7 line height is mandatory to prevent text blocks from feeling dense or unapproachable.
- **Labels & UI:** **Space Grotesk** serves as the annotation layer. It is used in all-caps with wide tracking to mimic the coordinate labels found on topographical charts.
 
## Layout & Spacing
 
This design system employs a **Full-Bleed Panel Grid** with scroll-snap functionality. Each panel represents a "chapter" or "map sheet" in the experience.
- **Offset Text Blocks:** Avoid centering text. Content should be offset to the left or right of the vertical center line to create a dynamic, editorial rhythm.
- **Alternating Panels:** Visual weight should shift between panels (e.g., a text-heavy slate panel followed by a full-screen image/data visualization on the obsidian canvas).
- **Margins:** Generous margins (64px+) ensure that content never feels crowded, maintaining the "Atlas" feel of vast, explored territory.
 
## Elevation & Depth
 
In accordance with the flat, cartographic nature of the design system, **shadows are strictly prohibited**. Depth is created exclusively through:
- **Tonal Stepping:** Layering the Primary Ink Navy (#0A0E1A) over the Neutral Obsidian (#080C14).
- **Hairline Borders:** Using 1px solid Slate (#2C3A4A) to define boundaries between panels or components.
- **Z-Index Layering:** Elements like fixed navigation or labels float over content with 100% opacity, relying on color contrast rather than blur or shadow to stand out.
 
## Shapes
 
The shape language is defined by the **0px border radius**. All containers, buttons, and decorative elements must utilize sharp, 90-degree angles. This reflects the precision of a mapmaker's tools and the rigid lines of architectural drafting. No exceptions are made for circular profile images or icons; these should be framed in square or rectangular containers.
 
## Components
 
### Buttons
Primary buttons use the Antique Gold (#C9A227) fill with Navy (#0A0E1A) text. They are rectangular (0px radius) and lack any hover shadow; hover states are indicated by a 1px Slate (#2C3A4A) outline or a slight color shift in the gold.
 
### Pull Quotes
Quotes are treated with high editorial importance. They feature the large Newsreader italic typeface and are anchored by a 2px vertical gold border on the left. They should often be placed in the "offset" layout area to break the body text flow.
 
### Lists & Annotations
Lists use the Label-style font (Space Grotesk) for bullets or numbers. Items are separated by subtle horizontal hair-lines in Slate (#2C3A4A).
 
### Input Fields
Inputs are simple 1px Slate outlines against the Navy surface. Focus states are indicated by the border changing to Gold. Labeling always sits above the field in uppercase, wide-tracked Space Grotesk.
 
### Data Panels
A unique component for this design system is the "Coordinate Panel"—a small, fixed UI element in the corner of the viewport that displays progress or metadata in the Label font style, mimicking the legend of a map.