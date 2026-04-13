---
name: Neo-Esoteric Monument
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e2de'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d4545'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7f7575'
  outline-variant: '#d0c4c4'
  surface-tint: '#615d5d'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1d1b1b'
  on-primary-container: '#878382'
  inverse-primary: '#cbc5c5'
  secondary: '#745b1d'
  on-secondary: '#ffffff'
  secondary-container: '#fedc91'
  on-secondary-container: '#785f21'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410004'
  on-tertiary-container: '#dd5853'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e7e1e1'
  primary-fixed-dim: '#cbc5c5'
  on-primary-fixed: '#1d1b1b'
  on-primary-fixed-variant: '#494646'
  secondary-fixed: '#ffdf9a'
  secondary-fixed-dim: '#e3c37a'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5a4305'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#8a1b1d'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e2de'
typography:
  display-serif:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  quote-editorial:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-main:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  metadata-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.15em
  label-small:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  margin-page: 64px
  gutter: 32px
  block-gap: 48px
  element-gap: 16px
---
 
## Brand & Style
 
The design system is rooted in the "Minimalist Neo-Esoteric" aesthetic—a fusion of ancient monumentalism and modern editorial precision. It evokes the feeling of a rare, physical manuscript or a stone-carved archive rather than a digital interface. The audience is intellectual and discerning, seeking a "grave" and quiet space for high-signal discourse.
 
The style is **Tactile and Minimalist**, rejecting standard web conventions (like heavy gradients or standard blue links) in favor of a craftsmen-focused approach. It utilizes physical metaphors—heavy cardstock, etched metal highlights, and hard-edged shadows—to create a sense of permanence and weight. The emotional response is one of reverence, focused intensity, and analog tactile satisfaction.
 
## Colors
 
The palette is anchored by the **Warm Alabaster** base, which acts as a physical canvas. **Rich Charcoal** provides the weight for primary text and structural boundaries, creating a sense of "monumental" grounding. 
 
**Matte Brass** is reserved for the highest tier of editorial importance and interactive states, mimicking the look of inlaid metal. **Deep Crimson** is used exclusively as a structural "bloodline"—a 1px offset shadow or a hair-thin line—to suggest depth and history without resorting to digital blurs. Avoid vibrant colors; the palette must remain muted, antique, and serious.
 
## Typography
 
This design system uses a high-contrast typographic pairing. **Newsreader** (serving the Serif requirement) is used for headlines and blockquotes, appearing authoritative and literary. **Inter** handles all functional data and body text, providing a clean, utilitarian counterpoint.
 
Metadata and labels must utilize **heavy tracking** (letter-spacing) and uppercase styling to evoke the feeling of architectural engravings. Body text should maintain generous line height to ensure the "cardstock" canvas feels breathable and premium.
 
## Layout & Spacing
 
The layout follows a **Fixed Grid** philosophy, centered on the screen like an open book. It uses a rigorous 12-column grid with wide gutters to emphasize the "monumental" nature of the content. 
 
Whitespace is not "empty" but is treated as "physical margin." Elements are spaced with a mathematical rhythm based on a 4px baseline, but large-scale components (like sections or articles) use exaggerated vertical gaps to slow the reader's pace and demand attention.
 
## Elevation & Depth
 
Depth in this design system is achieved through **Physical Offsets** rather than ambient blurs. 
 
1.  **The Etch:** Instead of a drop shadow, interactive cards use a 1px or 2px solid offset in **Deep Crimson (#9F2B2A)**. This creates a "cut" or "stamped" look.
2.  **The Inlay:** Interactive elements in their active state may shift 1px down and to the right, simulating a physical button press.
3.  **Tonal Stacking:** Surfaces remain flat on the Alabaster background, using thin Charcoal borders (0.5pt to 1pt) to define boundaries. No soft shadows are permitted. Hierarchy is communicated through typographic scale and the presence of the Crimson offset.
 
## Shapes
 
The shape language is strictly **Sharp (0px)**. Any curvature would betray the "monumental" and "architectural" intent of the system. Rectangles represent stone slabs and cut paper. All buttons, cards, and input fields must feature perfectly square corners. Decorative elements like dividers should be 1px solid lines, occasionally interrupted by a small diamond or square glyph to mark a center point.
 
## Components
 
*   **Buttons:** Rectangular with a 1px Charcoal border. On hover, the background fills with Matte Brass and the text remains Charcoal. Use the "Etch" depth (Deep Crimson offset) only for primary actions.
*   **Cards (Feed Items):** Flat containers with a thin bottom border. The "upvote" or "rank" number is displayed in high-contrast Serif, while metadata (author, time) is in spaced-out Sans-serif caps.
*   **Chips/Tags:** Small, all-caps labels with no background, separated by a vertical pipe `|` or a simple 1px border.
*   **Lists:** Items are separated by generous whitespace and thin horizontal rules. No bullet points; use typographic hierarchy or numerical indicators in Matte Brass.
*   **Input Fields:** A single bottom border in Charcoal. Labels sit above in metadata-style caps. The cursor should be a solid Charcoal block.
*   **The "Artifact" (Special Component):** A featured quote or key post encased in a double-border frame (1px Charcoal outer, 1px Brass inner) to signify its "esoteric" value.