---
name: The Alpine Observatory
colors:
  surface: '#0a1325'
  surface-dim: '#0a1325'
  surface-bright: '#30394d'
  surface-container-lowest: '#050e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f32'
  surface-container-high: '#212a3d'
  surface-container-highest: '#2c3548'
  on-surface: '#dae2fc'
  on-surface-variant: '#d5c3b6'
  inverse-surface: '#dae2fc'
  inverse-on-surface: '#283044'
  outline: '#9d8e81'
  outline-variant: '#50453a'
  surface-tint: '#f6bb81'
  primary: '#f6bb81'
  on-primary: '#4a2800'
  primary-container: '#c58f59'
  on-primary-container: '#4c2a00'
  inverse-primary: '#815524'
  secondary: '#c9c6c1'
  on-secondary: '#31312d'
  secondary-container: '#474743'
  on-secondary-container: '#b7b5af'
  tertiary: '#b7c9d8'
  on-tertiary: '#22323e'
  tertiary-container: '#8b9caa'
  on-tertiary-container: '#233440'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbe'
  primary-fixed-dim: '#f6bb81'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#663d0e'
  secondary-fixed: '#e5e2dc'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#d3e5f4'
  tertiary-fixed-dim: '#b7c9d8'
  on-tertiary-fixed: '#0c1d28'
  on-tertiary-fixed-variant: '#384955'
  background: '#0a1325'
  on-background: '#dae2fc'
  surface-variant: '#2c3548'
typography:
  heading-display:
    fontFamily: Marcellus
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  heading-section:
    fontFamily: Marcellus
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.05em
  body-journal:
    fontFamily: newsreader
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  telemetry-data:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.15em
  telemetry-label:
    fontFamily: IBM Plex Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.2em
spacing:
  panel-gap: 1rem
  margin-edge: 2rem
  gutter: 1rem
  unit: 4px
---
 
## Brand & Style
 
This design system channels the rigorous spirit of 19th-century exploration, blending the intellectual weight of a Royal Geographical Society with the technical precision required for high-altitude survival. The aesthetic is defined as **Scientific Alpinism**—a hybrid of tactile, historic materials and cold, celestial data.
 
The UI should evoke a sense of "The Sublime"—a mixture of awe and peril found at extreme elevations. It utilizes a **Modern-Tactile** approach where information is treated like artifacts on a cartographer’s desk or telemetry viewed through a brass sextant. It avoids all modern softness, favoring the rigid structures of physical instruments and the starkness of the night sky above the treeline.
 
## Colors
 
The palette is anchored by **The Void**, a deep observatory navy that serves as the infinite backdrop of the high-altitude atmosphere. **The Lens** (Parchment) provides a high-contrast surface for intensive reading, mimicking the hand-drawn maps of early expeditions. 
 
**The Instrument** (Antique Brass) is used exclusively for interactive elements and critical focus points, representing the physical tools of navigation. **The Hardware** (Glacial Steel) provides the structural framework, acting as the thin, cold line between the observer and the environment. Use parchment sparingly for primary content containers to create a "magnified" effect against the dark canvas.
 
## Typography
 
Typography functions as both narrative and data. **Primary Markings** (Marcellus) lend an air of classical authority and historical permanence to headers. 
 
**The Journal** text uses Newsreader (as a proxy for the requested EB Garamond style) to facilitate long-form reading of expedition logs and alpine surveys. It should feel literary and intentional.
 
**The Telemetry** (IBM Plex Mono) is the voice of the machine. It must always be presented in uppercase with wide tracking, simulating the etched labels on brass equipment or the printed output of a barometer. This font is used for navigation, coordinates, and metadata.
 
## Layout & Spacing
 
The design system utilizes a **Fixed Grid** philosophy inspired by technical drafting sheets. The layout is composed of rigid panels separated by a mandatory **1rem gap**, ensuring that every module feels like a distinct instrument housed within a larger kit.
 
Structure is reinforced by 1px Glacial Steel borders. Layouts should be symmetrical where possible, mimicking the balanced lens of a telescope. Use white space not for "breathability," but to isolate specific data points, much like a star map isolates celestial bodies. Alignment should be strictly mathematical, with no rounded corners to break the geometry.
 
## Elevation & Depth
 
Depth is achieved through **Tonal Layering** and structural framing rather than shadows. The global canvas is the deepest level (The Void). Information panels (The Lens) sit on top as flat, non-elevated surfaces.
 
To indicate hierarchy, use "crosshair" intersection points where 1px borders meet. Subtle 1px insets can be used to suggest that a piece of glass has been "mounted" into a frame. There are no ambient shadows; the "light" in this system is binary—either an element is illuminated by the brass accent color or it remains in the cold steel of the background.
 
## Shapes
 
The shape language is strictly **Linear and Sharp**. A 0px border radius is enforced across all components, from buttons to large containers. This communicates precision, danger, and the uncompromising nature of high-altitude environments. Decorative elements are limited to 45-degree angled corners (chamfers) and compass-inspired iconography.
 
## Components
 
- **Action Orreries (Buttons):** Rectangular with 0px radius. Default state features a 1px Navy border and transparent background. On hover, the background fills with Antique Brass, and text shifts to Navy.
- **The Ledger (Lists):** Rows are separated by 1px Glacial Steel rules. Each row starts with a Telemetry-style timestamp or coordinate.
- **The Sextant (Inputs):** Input fields are underlined only or fully boxed in Glacial Steel. Focus state changes the border to Antique Brass with a small crosshair icon appearing in the top-right corner.
- **Specimen Cards:** Containers using the Parchment background. They must feature a 1px Steel border and often include small "latitude/longitude" telemetry in the four corners to frame the content.
- **Navigation:** Top-level navigation is centered and tracked wide using IBM Plex Mono. Active links are underlined with an Antique Brass 1px line.
- **Celestial Markers:** Use thin plus-signs (+) at the corners of main sections to act as registration marks for the UI "lens."