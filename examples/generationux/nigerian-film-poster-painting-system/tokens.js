registerSystem({
  "meta": {
    "name": "Nollywood Poster Painting System",
    "tagline": "A digital UI language translating the raw, hand-painted movie poster tradition of Nollywood into saturated, unapologetically intense compositions built on clashing high-chroma colour combinations, massive cropped faces, and bold outlined display type.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Narrow&family=Archivo+Black&family=Oswald:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Nollywood Poster Painting System",
    "colors": {
      "primary": "#FF1493",
      "on-primary": "#FFFFFF",
      "on-secondary": "#000000",
      "neutral": "#000000",
      "on-neutral": "#FFFFFF",
      "error": "#FF0000",
      "lime": "#39FF14",
      "yellow": "#FFD700",
      "electric-blue": "#007FFF",
      "safety-orange": "#FF5E00",
      "hero-skin": "#D2691E",
      "villain-skin-green": "#00FF00",
      "villain-skin-purple": "#8B00FF",
      "cream": "#FFFDD0"
    },
    "typography": {
      "display": {
        "fontFamily": "Anton",
        "fontSize": "48px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Oswald, Anton",
        "fontSize": "36px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Archivo Narrow, Oswald",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Archivo Narrow, Oswald",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.625,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Oswald",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "0px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "24px",
      "page-edge": "16px",
      "gap-component": "16px",
      "gap-section": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#FF1493",
        "textColor": "#FFFFFF",
        "padding": "16px",
        "rounded": "{rounded.button}",
        "typography": "display"
      },
      "button-secondary": {
        "backgroundColor": "#39FF14",
        "textColor": "#000000",
        "padding": "16px",
        "rounded": "{rounded.button}",
        "typography": "display"
      },
      "hero-card": {
        "backgroundColor": "#FF1493",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "starring-banner": {
        "backgroundColor": "#FFD700",
        "height": "32px",
        "padding": "4px"
      },
      "lower-third-title-band": {
        "backgroundColor": "#39FF14",
        "height": "64px",
        "padding": "8px",
        "typography": "display"
      },
      "text-input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "12px"
      },
      "credits-band": {
        "backgroundColor": "#FFFFFF",
        "height": "24px",
        "padding": "4px",
        "typography": "label"
      }
    },
    "version": "alpha",
    "description": "A digital UI language translating the raw, hand-painted movie poster tradition of Nollywood into saturated, unapologetically intense compositions built on clashing high-chroma colour combinations, massive cropped faces, and bold outlined display type.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `nigerian-film-poster-painting-system` refers to the hand-painted film poster tradition in Nigeria, primarily from the early 1990s onward, associated with the rise of the home-video film industry known as Nollywood. These posters are not a single artefact but a system of visual identity — a body of rendering conventions, material practices, and compositional rules used to promote moti",
      "manual_enrichment_required": false,
      "imagery_count": 7,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "eap.bl.uk",
          "count": 1
        },
        {
          "host": "www.youtube.com",
          "count": 1
        },
        {
          "host": "www.rizzoliusa.com",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.unn.edu.ng",
          "count": 1
        },
        {
          "host": "www.unesco.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://eap.bl.uk/",
          "host": "eap.bl.uk",
          "institution": "British Library",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/watch?v=f7y3yGMC_pA",
          "host": "www.youtube.com",
          "institution": "YouTube / BBC News",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.rizzoliusa.com/book/9780847878361/",
          "host": "www.rizzoliusa.com",
          "institution": "Rizzoli / SkirRizzoli",
          "confidence_original": "medium"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Nollywood",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.unn.edu.ng/",
          "host": "www.unn.edu.ng",
          "institution": "University of Nigeria, Nsukka",
          "confidence_original": "low"
        },
        {
          "url": "https://www.unesco.org/en",
          "host": "www.unesco.org",
          "institution": "UNESCO",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Bold block capitals",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "3D extruded letters",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Script / italicised flare",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Stencilled characters",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **No measured colour data** – no spectrophotometric or colorimetric values for any poster. All hex values are inferred from reproductions with unknown colour shift."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#FF1493",
    "--on-primary": "#1e1e1e",
    "--secondary-col": "#39FF14",
    "--on-secondary": "#000000",
    "--surface": "#FF1493",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#FF0000",
    "--font-display": "Anton",
    "--font-body": "Archivo Narrow",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "--yellow": "#FFD700",
    "--electric-blue": "#007FFF",
    "--safety-orange": "#FF5E00"
  },
  "semanticColors": {
    "success": "#39FF14",
    "warning": "#FFD700",
    "info": "#007FFF",
    "error": "#FF0000",
    "on-success": "#000000",
    "on-warning": "#000000",
    "on-info": "#FFFFFF",
    "err": "#FF0000",
    "ok": "#39FF14",
    "warn": "#FFD700",
    "deltaUp": "#39FF14",
    "deltaDown": "#FF0000",
    "deltaFlat": "#1A1A1A",
    "live": "#FF1493",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Archivo Narrow"
  },
  "chartStyle": {
    "backgroundColor": "#1A0033",
    "gridColor": "#FF1493",
    "textColor": "#FFFFFF",
    "fontFamily": "Oswald",
    "barFillColor": "#FF1493",
    "lineColor": "#39FF14",
    "pointColor": "#FFD700",
    "areaFillOpacity": 0.4,
    "borderRadius": 0,
    "borderWidth": 2,
    "labelColor": "#1A1A1A"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": "feTurbulence baseFrequency 0.65, opacity 0.12",
      "misregistration": "text-shadow offset 2px 2px black, -1px -1px yellow"
    }
  },
  "interactionModel": {
    "hover": {
      "type": "color-shift",
      "description": "Background colour inverts or shifts to complementary; slight tilt 1-2deg, no opacity fade"
    },
    "focus": {
      "type": "multi-colour-outline",
      "description": "2-3px multi-colour outline ring: black + yellow + hot pink"
    },
    "active": {
      "type": "offset-shift",
      "description": "Content shifts 1px downward and right; colour may shift to secondary or tertiary"
    }
  },
  "interactionStyles": ".ds-layout-frame *:hover { filter: saturate(1.5) contrast(1.2); transform: rotate(1deg); transition: all 50ms ease-out; } .ds-layout-frame *:active { transform: translate(1px, 1px); } .ds-layout-frame *:focus { outline: 2px solid var(--primary); outline-offset: 2px; box-shadow: 0 0 0 2px var(--secondary-col), 0 0 0 4px var(--primary); }",
  "spacing": {
    "component-internal": "16px",
    "section-internal": "24px",
    "page-edge": "16px",
    "gap-component": "16px",
    "gap-section": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "baseContent": 0,
    "paintedFigures": 10,
    "spotlightHalos": 20,
    "stickyElements": 20,
    "overlays": 30,
    "modals": 40,
    "topLayer": 50
  },
  "dashboardStyle": {
    "layout": "Dense grid of panels with zero gaps, each panel a solid high-chroma colour block separated by thick black borders. No whitespace between panels. Panels mimic poster sections.",
    "density": "Maximum density. Every inch of screen occupied by content or colour. No padding without content.",
    "panelTreatment": "Each panel has a solid colour background (one of the token colours) and a 2px black border. Panels have no rounded corners. Titles use display type with misregistration text-shadow.",
    "dataVizStyle": "Charts use high-chroma fills (magenta, lime, orange, cyan) with thick black outlines. Grid lines are yellow or white. No smooth gradients; all fills are flat or with structural grain overlay.",
    "signatureElement": "A lower-third title band spanning the dashboard bottom, displaying current dataset name in lime with misregistration shadow. A starring banner at the top of primary metrics."
  },
  "landingStyle": {
    "heroApproach": "Full-viewport hero with a massive cropped face (placeholder) filling 40-60% of the canvas, chin cut off. Background is a flat saturated colour (primary or electric-blue). A yellow starring banner overlays the top, and a lime lower-third title band overlays the bottom with the film title.",
    "scrollBehavior": "Snap-scroll sections, each with a new clashing colour combo (magenta/lime, orange/cyan, purple/yellow). No parallax; each section fills the viewport with hard colour transitions.",
    "ctaStyle": "Buttons are primary or secondary with misregistration shadow, no rounded corners. CTA text in display type: 'WATCH NOW' or 'BUY TICKET'.",
    "signatureMoment": "On first scroll, the entire screen shifts to a new colour pair (e.g., from magenta/lime to orange/cyan) with no fade, just a hard cut. The title text appears with a 2px offset drop shadow effect."
  },
  "globalFilter": "<svg><defs><filter id='nollywood-noise'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.12 0' in='noise' result='coloredNoise'/><feBlend in='SourceGraphic' in2='coloredNoise' mode='overlay'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { filter: url(#nollywood-noise); } .ds-layout-frame ::selection { background: rgba(255, 20, 147, 0.3); color: inherit; } .ds-layout-frame ::-webkit-scrollbar { width: 6px; } .ds-layout-frame ::-webkit-scrollbar-track { background: #000; } .ds-layout-frame ::-webkit-scrollbar-thumb { background: var(--primary); } .ds-layout-frame ::-webkit-scrollbar-thumb:hover { background: var(--secondary-col); } .ds-layout-frame img { filter: saturate(150%) contrast(120%); }",
  "buttons": [
    {
      "name": "primaryButton",
      "desc": "High-chroma magenta primary button with bold uppercase text. Hard edges, no rounded corners. Uses misregistration effect via text-shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--neutral); padding: 16px; font-family: var(--font-display); font-size: 22px; line-height: 1.25; letter-spacing: -0.025em; text-transform: uppercase; border-radius: var(--radius-btn); cursor: pointer; box-shadow: 2px 2px 0 var(--secondary-col), -1px -1px 0 var(--yellow); transition: all 50ms ease-out;\">SIGN UP NOW</button>",
      "label": "primaryButton",
      "note": "High-chroma magenta primary button with bold uppercase text. Hard edges, no rounded corners. Uses misregistration effect via text-shadow."
    },
    {
      "name": "secondaryButton",
      "desc": "Lime green secondary button with black text and offset shadow mimicking misregistration. High contrast, raw edge.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--neutral); padding: 16px; font-family: var(--font-display); font-size: 22px; line-height: 1.25; letter-spacing: -0.025em; text-transform: uppercase; border-radius: var(--radius-btn); cursor: pointer; box-shadow: 2px 2px 0 var(--primary), -1px -1px 0 var(--yellow); transition: all 50ms ease-out;\">BUY TICKET</button>",
      "label": "secondaryButton",
      "note": "Lime green secondary button with black text and offset shadow mimicking misregistration. High contrast, raw edge."
    },
    {
      "name": "ghostButton",
      "desc": "Transparent ghost button with primary colored border and text. Retains bold uppercase and rough shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 2px solid var(--primary); padding: 16px; font-family: var(--font-display); font-size: 22px; line-height: 1.25; letter-spacing: -0.025em; text-transform: uppercase; border-radius: var(--radius-btn); cursor: pointer; box-shadow: 2px 2px 0 var(--secondary-col), -1px -1px 0 var(--yellow); transition: all 50ms ease-out;\">WATCH TRAILER</button>",
      "label": "ghostButton",
      "note": "Transparent ghost button with primary colored border and text. Retains bold uppercase and rough shadow."
    }
  ],
  "cards": [
    {
      "name": "heroCard",
      "desc": "Full-bleed hero card with a magenta background, massive cropped face placeholder, yellow starring banner, and green lower-third title band. All edges hard.",
      "html": "<div style=\"background: var(--primary); border: 4px solid var(--neutral); border-radius: var(--radius-card); padding: 0; overflow: hidden; position: relative; width: 320px; height: 480px; box-shadow: 4px 4px 0 var(--secondary-col), -2px -2px 0 var(--yellow);\"><div style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, var(--primary) 0%, var(--electric-blue) 100%); mix-blend-mode: multiply; opacity: 0.6;\"></div><div style=\"position: absolute; top: 10%; left: 5%; width: 90%; height: 60%; background-color: var(--hero-skin); border: 3px solid var(--neutral); border-radius: 0;\"><div style=\"position: absolute; top: -20px; left: -10px; width: 120%; height: 120%; background: radial-gradient(circle at 30% 40%, var(--cream) 5%, var(--hero-skin) 40%, transparent 70%);\"></div></div><div style=\"position: absolute; top: 12px; left: 0; width: 100%; background: var(--yellow); padding: 4px; text-align: center; font-family: var(--font-display); font-size: 18px; line-height: 1.25; color: var(--neutral); text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 2px 2px 0 var(--error), -1px -1px 0 var(--lime);\">STARRING</div><div style=\"position: absolute; bottom: 0; left: 0; width: 100%; background: var(--secondary-col); padding: 8px; font-family: var(--font-display); font-size: 28px; line-height: 1.25; color: var(--neutral); text-transform: uppercase; letter-spacing: -0.025em; text-shadow: 2px 2px 0 var(--primary), -1px -1px 0 var(--yellow);\">BLOOD MONEY</div></div>",
      "label": "heroCard",
      "note": "Full-bleed hero card with a magenta background, massive cropped face placeholder, yellow starring banner, and green lower-third title band. All edges hard."
    },
    {
      "name": "posterCard",
      "desc": "Card mimicking a hand-painted poster section with multiple clashing colour panels, offset text, and simulated grain.",
      "html": "<div style=\"background: var(--surface); border: 4px solid var(--neutral); border-radius: var(--radius-card); padding: 16px; width: 300px; height: 400px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 4px 4px 0 var(--secondary-col), -2px -2px 0 var(--electric-blue);\"><div style=\"background: var(--villain-skin-purple); padding: 8px; text-align: center; font-family: var(--font-display); font-size: 24px; color: var(--cream); text-transform: uppercase; border: 2px solid var(--neutral); letter-spacing: -0.025em; text-shadow: 2px 2px 0 var(--primary), -1px -1px 0 var(--yellow);\">ACTION!</div><div style=\"display: flex; gap: 8px;\"><div style=\"flex: 1; background: var(--yellow); padding: 12px; font-family: var(--font-body); font-size: 14px; color: var(--neutral); border: 2px solid var(--neutral); text-transform: uppercase;\">STUNTS</div><div style=\"flex: 1; background: var(--electric-blue); padding: 12px; font-family: var(--font-body); font-size: 14px; color: var(--on-primary); border: 2px solid var(--neutral); text-transform: uppercase;\">DRAMA</div></div><div style=\"background: var(--lime); padding: 8px; font-family: var(--font-display); font-size: 20px; color: var(--neutral); text-transform: uppercase; border: 2px solid var(--neutral); text-shadow: 2px 2px 0 var(--safety-orange), -1px -1px 0 var(--neutral);\">NOW SHOWING</div></div>",
      "label": "posterCard",
      "note": "Card mimicking a hand-painted poster section with multiple clashing colour panels, offset text, and simulated grain."
    }
  ],
  "forms": [
    {
      "name": "textInput",
      "desc": "Text input with white background, black text, hard edges, and misregistration-style focus ring.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; max-width: 300px;\"><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--neutral); text-transform: uppercase; letter-spacing: 0.025em;\">ENTER YOUR NAME</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"YOUR NAME\" style=\"background: var(--bg, #FFFFFF); color: var(--neutral); border: 2px solid var(--neutral); padding: 12px; font-family: var(--font-body); font-size: 16px; text-transform: uppercase; border-radius: var(--radius-input); outline: none; box-shadow: none;\"/></div>",
      "label": "textInput",
      "stateLabel": "Text input with white background, black text, hard edges, and misregistration-style focus ring."
    },
    {
      "name": "selectDropdown",
      "desc": "Styled select with clashing colour background, black text, and offset border mimicking misregistration.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; max-width: 300px;\"><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--neutral); text-transform: uppercase; letter-spacing: 0.025em;\">CHOOSE GENRE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--neutral); padding: 12px; font-family: var(--font-body); font-size: 16px; text-transform: uppercase; border-radius: var(--radius-input); outline: none; appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 16 16%22><path fill=%22%23000000%22 d=%22M4 6L8 10L12 6z%22/></svg>\\x27); background-repeat: no-repeat; background-position: right 12px center; background-size: 12px;\"><option>ACTION</option><option>COMEDY</option><option>THRILLER</option></select></div>",
      "label": "selectDropdown",
      "stateLabel": "Styled select with clashing colour background, black text, and offset border mimicking misregistration."
    },
    {
      "name": "checkbox",
      "desc": "Checkbox styled as a hand-painted X mark with clashing colours.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 14px; color: var(--neutral); text-transform: uppercase; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 24px; height: 24px; background: var(--yellow); border: 2px solid var(--neutral); border-radius: var(--radius-default); position: relative; cursor: pointer;\"/><span style=\"color: var(--neutral);\">I AGREE TO TERMS</span></label>",
      "label": "checkbox",
      "stateLabel": "Checkbox styled as a hand-painted X mark with clashing colours."
    }
  ],
  "extraComponents": [
    {
      "name": "starringBanner",
      "desc": "Compulsory yellow banner across the top of hero cards, with rough shadow and bold uppercase type.",
      "html": "<div style=\"background: var(--yellow); color: var(--neutral); padding: 4px 16px; font-family: var(--font-display); font-size: 18px; line-height: 1.25; text-transform: uppercase; letter-spacing: 0.05em; text-align: center; border: 2px solid var(--neutral); box-shadow: 2px 2px 0 var(--error), -1px -1px 0 var(--lime); display: inline-block;\">STARRING</div>"
    },
    {
      "name": "lowerThirdTitleBand",
      "desc": "Lower-third band with title text, using lime background and offset shadow.",
      "html": "<div style=\"background: var(--secondary-col); color: var(--on-secondary); padding: 8px 16px; font-family: var(--font-display); font-size: 28px; line-height: 1.25; text-transform: uppercase; letter-spacing: -0.025em; border: 2px solid var(--neutral); text-shadow: 2px 2px 0 var(--primary), -1px -1px 0 var(--yellow); display: inline-block;\">BLOOD MONEY</div>"
    },
    {
      "name": "creditsBand",
      "desc": "White horizontal band for credits, with small uppercase label typography.",
      "html": "<div style=\"background: var(--cream); color: var(--neutral); padding: 4px 8px; font-family: var(--font-body); font-size: 12px; line-height: 1.25; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid var(--neutral); display: inline-block; box-shadow: 1px 1px 0 var(--primary);\">DIRECTED BY OKORO</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — NOLLYWOOD THRILLS</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — BLOOD MONEY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — RATED 18+</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — WATCH IT IN CINEMAS NOW</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — DIRECTED BY OKORO</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners on any component. This system demands hard, raw edges.",
      "avoid": {
        "html": "<button style=\"background: #FF1493; color: #FFFFFF; border: 2px solid #000000; padding: 16px; border-radius: 12px; font-family: Impact, sans-serif; font-size: 22px;\">SIGN UP</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on any component. This system demands hard, raw edges.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use thin or elegant fonts. Avoid low-contrast or pastel color schemes. Everything must be bold and saturated.",
      "avoid": {
        "html": "<div style=\"background: #F5F5DC; color: #8B4513; padding: 16px; font-family: Georgia, serif; font-size: 14px; border-radius: 8px;\">You are watching a Nollywood film.</div>",
        "label": "Avoid"
      },
      "rule": "Do not use thin or elegant fonts. Avoid low-contrast or pastel color schemes. Everything must be bold and saturated.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use soft gradients or smooth shadows. Instead use hard-edged colour cuts and offset misregistration shadows.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #FF1493, #39FF14); padding: 16px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);\">Nollywood Poster</div>",
        "label": "Avoid"
      },
      "rule": "Do not use soft gradients or smooth shadows. Instead use hard-edged colour cuts and offset misregistration shadows.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "rule": "Maintain the system binary: accent-structured specificity, never generic neutral UI.",
      "do": {
        "label": "System-specific cue",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      },
      "avoid": {
        "label": "Generic soft card",
        "html": "<div style=\"width:110px;height:68px;background:#f4f4f4;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.12);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "★ ★ ★ ★ ★",
      "heroHeadline": "YOUR POSTER. YOUR FACE. YOUR REEL.",
      "heroSub": "The only digital toolkit that translates Nollywood's raw hand-painted poster tradition into clashing high-chroma, hard-edge compositions. Crop faces. Clash colours. Misregister type. No rounded corners. No mercy.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#FF1493;color:#FFF;padding:16px;font-family:Oswald;font-size:20px;border:none;text-transform:uppercase;letter-spacing:-0.025em;\\x27>COMMISSION A POSTER</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#39FF14;color:#000;padding:16px;font-family:Oswald;font-size:20px;border:none;text-transform:uppercase;letter-spacing:-0.025em;\\x27>PEEK THE GALLERY</button>",
      "navLinks": [
        "POSTERS",
        "STARS",
        "BANNERS",
        "STREAKS",
        "STUDIO"
      ],
      "features": [
        {
          "title": "MASSIVE CROP",
          "desc": "Slam the subject's face into the frame. Chin off. Forehead off. Eyes screaming. Occupancy 40–60% of canvas – no less.",
          "icon": "🎭",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎭 MASSIVE CROP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Slam the subject&#39;s face into the frame. Chin off. Forehead off. Eyes screaming. Occupancy 40–60% of canvas – no less.</div></div>"
        },
        {
          "title": "CLASH PALETTE",
          "desc": "Force magenta + lime, orange + cyan, purple + yellow. Every surface saturated. No pastels. No muted tones. Ever.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 CLASH PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Force magenta + lime, orange + cyan, purple + yellow. Every surface saturated. No pastels. No muted tones. Ever.</div></div>"
        },
        {
          "title": "STARRING BANNER",
          "desc": "Compulsory yellow top-band with actor names. One inch tall. Black text. No kerning adjustments. Non-negotiable.",
          "icon": "⭐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⭐ STARRING BANNER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Compulsory yellow top-band with actor names. One inch tall. Black text. No kerning adjustments. Non-negotiable.</div></div>"
        },
        {
          "title": "LOWER THIRD BAND",
          "desc": "Solid colour title band (lime, magenta, orange) with hard cut. Display type misregistered 2px down, 2px right in black.",
          "icon": "📽️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📽️ LOWER THIRD BAND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Solid colour title band (lime, magenta, orange) with hard cut. Display type misregistered 2px down, 2px right in black.</div></div>"
        },
        {
          "title": "ACTION STREAKS",
          "desc": "Hand-drawn speed lines radiating from the hero's face or weapon. White or yellow streaks, 6–12 per composition. No fades.",
          "icon": "💥",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💥 ACTION STREAKS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Hand-drawn speed lines radiating from the hero&#39;s face or weapon. White or yellow streaks, 6–12 per composition. No fades.</div></div>"
        },
        {
          "title": "SPIRIT OVERLAY",
          "desc": "Ghostly double-exposure effect on background. Outlined face or figure in translucent white / yellow behind the main subject.",
          "icon": "👻",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">👻 SPIRIT OVERLAY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Ghostly double-exposure effect on background. Outlined face or figure in translucent white / yellow behind the main subject.</div></div>"
        }
      ],
      "ctaStripHeadline": "WANT TO PAINT LIKE A NOLLYWOOD VETERAN?",
      "ctaStripHtml": "<div style=\\x27display:flex;gap:16px;justify-content:center;\\x27><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#FF1493;color:#FFF;padding:16px;font-family:Oswald;font-size:20px;border:none;text-transform:uppercase;\\x27>GRAB THE BRUSH</button><button style=\\x27background:#007FFF;color:#FFF;padding:16px;font-family:Oswald;font-size:20px;border:none;text-transform:uppercase;\\x27>WATCH REEL</button></div>",
      "sidebarBrand": "NOLLYWOOD POSTER PAINTER",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "STAGE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "REEL",
          "active": false
        },
        {
          "icon": "◉",
          "label": "PROPS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CREDITS",
          "active": false
        }
      ],
      "dashboardTitle": "POSTER COMMAND CENTER",
      "metrics": [
        {
          "label": "FACE OCCUPANCY",
          "value": "52%",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CHROMA CLASH RATIO",
          "value": "3.4",
          "delta": "+0.7",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "STARRING BANNERS ACTIVE",
          "value": "12",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACTION STREAK DENSITY",
          "value": "9.2 / POSTER",
          "delta": "+1.1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "COLOUR FREQUENCY BY POSTER",
      "panelATitle": "STARRING BANNER ROSTER",
      "panelARows": [
        {
          "label": "LEAD ACTOR",
          "value": "CHIOMA OKAFOR",
          "pct": 0
        },
        {
          "label": "SUPPORTING",
          "value": "EMMANUEL NWOSU",
          "pct": 0
        },
        {
          "label": "VILLAIN",
          "value": "MADUKE MBANEFO",
          "pct": 0
        },
        {
          "label": "COMIC RELIEF",
          "value": "PATRICK NNANU",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CREDITS BAND",
      "panelBCells": [
        {
          "label": "DIRECTOR",
          "value": "ZEB EJIRO",
          "state": "ok"
        },
        {
          "label": "PRODUCER",
          "value": "CHINWE OBI",
          "state": "warn"
        },
        {
          "label": "CINEMATOGRAPHER",
          "value": "OLU AKINYELE",
          "state": "err"
        },
        {
          "label": "SCRIPT",
          "value": "TUNDE KELANI",
          "state": "ok"
        },
        {
          "label": "EDITOR",
          "value": "FUNMI ADEGOKE",
          "state": "warn"
        },
        {
          "label": "MUSIC",
          "value": "YEMI AJAYI",
          "state": "err"
        },
        {
          "label": "COSTUME",
          "value": "NGOZI CHUKWU",
          "state": "ok"
        },
        {
          "label": "ART DIRECTOR",
          "value": "BABA JIMOH",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MAGENTA",
        "LIME",
        "ORANGE",
        "CYAN",
        "PURPLE",
        "YELLOW",
        "BLACK"
      ],
      "series": [
        {
          "data": [
            42,
            38,
            29,
            15,
            21,
            33,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "PRIMARY CLASH",
          "axis": "left",
          "color": "#FF1493"
        },
        {
          "data": [
            18,
            24,
            31,
            27,
            14,
            20,
            8,
            8,
            8,
            8,
            8,
            8
          ],
          "label": "SECONDARY CLASH",
          "axis": "right-1",
          "color": "#39FF14"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'width:100%;height:100vh;overflow:hidden;position:relative;background:var(--primary);'; el.innerHTML = '<div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,var(--primary) 0%,var(--electric-blue) 100%);mix-blend-mode:multiply;opacity:0.6;\"></div><div style=\"position:absolute;top:10%;left:5%;width:90%;height:60%;background-color:#D2691E;border:4px solid var(--neutral);\"><div style=\"position:absolute;top:-20px;left:-10px;width:120%;height:120%;background:radial-gradient(circle at 30% 40%,var(--cream) 5%,#D2691E 40%,transparent 70%);\"></div></div><div style=\"position:absolute;top:12px;left:0;width:100%;background:var(--yellow);padding:4px 0;text-align:center;font-family:var(--font-display);font-size:18px;line-height:1.25;color:var(--neutral);text-transform:uppercase;letter-spacing:0.05em;box-shadow:2px 2px 0 var(--error),-1px -1px 0 var(--lime);z-index:10;\">STARRING</div><div style=\"position:absolute;bottom:0;left:0;width:100%;background:var(--secondary-col);padding:8px 16px;font-family:var(--font-display);font-size:28px;line-height:1.25;color:var(--on-secondary);text-transform:uppercase;letter-spacing:-0.025em;text-shadow:2px 2px 0 var(--primary),-1px -1px 0 var(--yellow);z-index:10;\">BLOOD MONEY</div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:0;width:100%;\">'+[['MASSIVE CROP','#FF1493','#FFF'],['CLASH PALETTE','#007FFF','#FFF'],['STARRING BANNER','#FFD700','#000'],['LOWER THIRD','#39FF14','#000'],['ACTION STREAKS','#FF5E00','#FFF'],['SPIRIT OVERLAY','#8B00FF','#FFF']].map(function(c){return '<div style=\"background:'+c[1]+';color:'+c[2]+';padding:24px;border:2px solid var(--neutral);font-family:var(--font-display);font-size:20px;text-transform:uppercase;text-align:center;text-shadow:2px 2px 0 #000,-1px -1px 0 #FFD700;\">'+c[0]+'</div>'}).join('')+'</div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"background:var(--bg);border:2px solid var(--neutral);padding:16px;font-family:var(--font-body);text-transform:uppercase;\"><div style=\"font-family:var(--font-display);font-size:18px;margin-bottom:12px;text-shadow:2px 2px 0 var(--primary),-1px -1px 0 var(--yellow);\">CREDITS BAND</div>'+[['DIRECTOR','ZEB EJIRO','#39FF14'],['PRODUCER','CHINWE OBI','#FFD700'],['CINEMATOGRAPHER','OLU AKINYELE','#FF0000']].map(function(r){return '<div style=\"display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--neutral);color:var(--on-bg);\"><span>'+r[0]+'</span><span style=\"background:'+r[2]+';color:var(--on-secondary);padding:0 8px;\">'+r[1]+'</span></div>'}).join('')+'</div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FF1493'; }",
    "ctaBackground": "function(el) { el.style.background = '#39FF14'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:6px;background:#FFD700;box-shadow:2px 2px 0 #FF0000,-1px -1px 0 #39FF14;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#1A0033'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.3) 100%);z-index:2;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var el=document.createElement('div'); el.style.cssText='position:absolute;inset:0;transition:background 1s;pointer-events:none;'; var hue=(tick*30)%360; el.style.background='hsl('+hue+',100%,50%)'; return el; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FF1493",
    "--color-muted": "#FF1493",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#FF1493",
    "--color-ring": "#FF1493",
    "--color-primary-foreground": "#1e1e1e",
    "--color-secondary": "#39FF14",
    "--color-accent": "#39FF14",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#FF0000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FF1493",
    "--muted": "#FF1493",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#FF1493",
    "--ring": "#FF1493",
    "--primary-foreground": "#1e1e1e",
    "--secondary": "#39FF14",
    "--accent": "#39FF14",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#FF0000"
  }
});
