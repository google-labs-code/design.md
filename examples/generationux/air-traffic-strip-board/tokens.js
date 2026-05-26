registerSystem({
  "meta": {
    "name": "Air Traffic Strip Board",
    "tagline": "An operational dashboard aesthetic translating physical flight-progress strips into a digital interface.",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Caveat:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Air Traffic Strip Board",
    "colors": {
      "surface": "#1A1A1A",
      "on-surface": "#9CA3AF",
      "surface-container": "#F5F0E1",
      "on-surface-container": "#1A1A1A",
      "primary": "#CC3333",
      "on-primary": "#FFFFFF",
      "secondary": "#2E7D32",
      "tertiary": "#1A3A6B",
      "marker-yellow": "#FFE066",
      "marker-white": "#FFFFFF",
      "outline-variant": "#D6DCE5"
    },
    "typography": {
      "display": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em"
      },
      "body": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "11px",
        "fontWeight": 400,
        "lineHeight": 1.1,
        "letterSpacing": "-0.025em"
      },
      "label": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "10px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "handwritten": {
        "fontFamily": "Caveat",
        "fontSize": "11px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
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
      "strip-internal": "2px",
      "board-edge-x": "16px",
      "board-edge-y": "8px",
      "section-internal": "4px",
      "strip-gap": "4px",
      "row-gap": "8px",
      "strip-height": "48px",
      "icon-size": "12px"
    },
    "components": {
      "strip": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.on-surface-container}",
        "rounded": "{rounded.default}",
        "padding": "2px",
        "height": "48px",
        "width": "240px"
      },
      "push-button": {
        "backgroundColor": "#3A3F4B",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "4px",
        "height": "32px",
        "width": "64px"
      },
      "tooltip": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.on-surface-container}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.on-surface-container}",
        "rounded": "{rounded.default}",
        "padding": "2px",
        "height": "48px",
        "width": "240px"
      },
      "shuttle-flag": {
        "backgroundColor": "{colors.primary}",
        "size": "16px",
        "width": "8px"
      }
    },
    "version": "alpha",
    "description": "An operational dashboard aesthetic that translates the tactile, information‑dense ritual of mid‑20th‑century physical flight‑progress strips into a digital interface. It evokes a shadowy control tower with near‑black matte board, off‑cream paper cards, monospaced data, coloured plastic shuttles, and the wear of heavy use.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `air-traffic-strip-board` refers to the physical board (also called a flight progress strip board, strip holder, or strip bay) used in air traffic control (ATC) to hold paper flight progress strips. These strips are rectangular paper slips that track individual aircraft, and the board provides a rack or frame – often vertically slotted or horizontally arrayed – for organising strips by se",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.ral-farben.de",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "patents.google.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.ral-farben.de/en/",
          "host": "www.ral-farben.de",
          "institution": "RAL gGmbH",
          "confidence_original": "low"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Flight_progress_strips",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://patents.google.com/patent/USD261407S/",
          "host": "patents.google.com",
          "institution": "Google Patents / USPTO",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Univers 55",
          "foundry": "Monotype",
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "inferred"
        },
        {
          "name": "Futura",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "inferred"
        },
        {
          "name": "Akzidenz-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "inferred"
        },
        {
          "name": "OCR-B",
          "foundry": null,
          "year": null,
          "google_fonts": "Roboto Mono",
          "attestation": "unverified"
        },
        {
          "name": "Courier",
          "foundry": null,
          "year": null,
          "google_fonts": "Courier Prime",
          "attestation": "unverified"
        },
        {
          "name": "proprietary bitmap font",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unverified"
        },
        {
          "name": "OCR-A",
          "foundry": null,
          "year": null,
          "google_fonts": "Major Mono Display",
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour – board grey": "no verified hex, RAL, Munsell, or paint reference.** Resolved only by direct measurement from a surviving primary artefact (e.g., Science Museum object 1992‑634).\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#1A1A1A",
    "--on-bg": "#9CA3AF",
    "--primary": "#CC3333",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#2E7D32",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E1",
    "--on-bg-muted": "#6B7280",
    "--border": "#6B7280",
    "--error": "#CC3333",
    "--font-display": "JetBrains Mono",
    "--font-body": "JetBrains Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "marker-yellow": "#FFE066",
    "marker-white": "#FFFFFF",
    "outline-variant": "#D6DCE5",
    "tertiary": "#1A3A6B",
    "warning": "#FFE066",
    "info": "#1A3A6B",
    "warn": "#FFE066",
    "ok": "#22C55E",
    "err": "#CC3333",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC3333",
    "deltaFlat": "#6B7280",
    "live": "#CC3333",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#6B7280",
    "chartFont": "JetBrains Mono"
  },
  "elevation": {
    "default": "0 1px 0 0 rgba(0,0,0,0.3)",
    "pulled": "0 2px 0 0 rgba(0,0,0,0.4)",
    "shuttle": "0 1px 0 0 rgba(0,0,0,0.2)",
    "tooltip": "0 4px 0 0 rgba(0,0,0,0.4)",
    "recessed": "inset 0 1px 0 0 rgba(0,0,0,0.3)",
    "zIndex": {
      "base": 0,
      "strip": 10,
      "pulled": 20,
      "shuttle": 20,
      "tooltip": 30,
      "modal": 40
    }
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "SVG feTurbulence via #paper-grain",
      "parameters": {
        "baseFrequency": "0.65-0.72",
        "numOctaves": 3,
        "type": "fractalNoise"
      },
      "blend": "overlay",
      "opacity": "0.2",
      "color": "monochrome"
    },
    "paperCurl": "inset 0 1px 0 rgba(0,0,0,0.3)",
    "inkSmear": "mix-blend-mode: multiply with #ink-smear filter; slight rotation in component",
    "stamp": "opacity-70; rotation ±3° via feTurbulence",
    "tape": "semi-transparent yellowed rectangle; thin fold shadow"
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0\" height=\"0\"><defs><filter id=\"paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65 0.72\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.2 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend mode=\"overlay\" in=\"SourceGraphic\" in2=\"coloredNoise\"/></filter><filter id=\"ink-smear\" x=\"-5%\" y=\"-5%\" width=\"110%\" height=\"110%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.1\" numOctaves=\"1\" result=\"noise\"/><feDisplacementMap in=\"SourceGraphic\" in2=\"noise\" scale=\"1\" xChannelSelector=\"R\" yChannelSelector=\"G\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: 'JetBrains Mono', monospace; background-color: #1A1A1A; color: #9CA3AF; font-size: 11px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "globalCss": ".ds-layout-frame::selection { background: rgba(204, 51, 51, 0.25); } .ds-layout-frame::-webkit-scrollbar { width: 6px; } .ds-layout-frame::-webkit-scrollbar-track { background: var(--bg); } .ds-layout-frame::-webkit-scrollbar-thumb { background: var(--border); } .ds-layout-frame::-webkit-scrollbar-thumb:hover { background: var(--on-bg-muted); } .ds-layout-frame .strip { box-shadow: var(--elevation-default); } .ds-layout-frame .strip:hover { box-shadow: var(--elevation-pulled); } .ds-layout-frame .strip:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; } .ds-layout-frame .strip:active { box-shadow: var(--elevation-recessed); }",
  "interactionModel": {
    "hover": {
      "transform": "translateY(-1px)",
      "shadow": "0 2px 0 rgba(0,0,0,0.4)",
      "transition": "none"
    },
    "focus": {
      "outline": "2px solid var(--primary)",
      "outlineOffset": "2px"
    },
    "active": {
      "transform": "translateY(0)",
      "shadow": "inset 0 1px 0 rgba(0,0,0,0.3)"
    }
  },
  "interactionStyles": ".ds-layout-frame .strip { transition: none; } .ds-layout-frame .strip:hover { transform: translateY(-1px); box-shadow: 0 2px 0 rgba(0,0,0,0.4); } .ds-layout-frame .strip:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; } .ds-layout-frame .strip:active { transform: translateY(0); box-shadow: inset 0 1px 0 rgba(0,0,0,0.3); } .ds-layout-frame .strip.dragged { box-shadow: 0 2px 0 rgba(0,0,0,0.4); opacity: 0.8; }",
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#6B7280",
    "fontFamily": "JetBrains Mono"
  },
  "dashboardStyle": {
    "layout": "flex column with rows of strip slots. Each row contains multiple 240px-wide slots with 4px gap. Board has 16px padding on sides, 8px top/bottom. Empty slots appear as dark voids (background: #1A1A1A). Strips sit at z-index 10, pulled strips at 20, tooltips at 30.",
    "density": "Variable. Controlled by a density parameter: sparse (30% slots filled, visible dark gaps) to dense (all slots filled, strips nearly touching, minimal gap).",
    "panelTreatment": "All panels have zero border-radius, hard drop shadows (0 blur), and a paper grain overlay applied via feTurbulence at baseFrequency 0.65-0.72, 3 octaves, monochrome, overlay blend at 20% opacity. Add paper curl line (1px dark at bottom).",
    "dataVizStyle": "No charts; data is displayed as dense monospaced text within strips. Use colored shuttle flags (primary/red, marker-yellow) for status indicators. Handwritten annotations (Caveat) for manual marks.",
    "signatureElement": "The flight progress strip itself: a 240x48px off-cream paper card with perforation holes on the left edge, hard shadow, and monospaced data columns separated by dashed vertical rules."
  },
  "landingStyle": {
    "heroApproach": "A single row of strips against the dark board background, with one strip partially pulled out (lifted shadow) to indicate interaction. Subtle paper grain overlay on the entire board. The hero functions as a live preview of the interface.",
    "scrollBehavior": "Smooth scroll with 12-18fps visual cadence (low frame rate homage to CRT refresh). No parallax or decorative scroll effects. Horizontal scroll for strip rows is maintained below 768px.",
    "ctaStyle": "A primary push button ('FPL') and a secondary button ('HANDOFF') placed at the bottom-left of the hero. Hard shadow, zero radius, monospaced uppercase label. CTA text avoids generic terms like 'Get Started'; uses domain-specific labels.",
    "signatureMoment": "A single strip animates in from the left (300ms easeOutBack) when the page loads, mimicking a new flight progress strip being inserted into the board. No other animations; all state transitions are instant."
  },
  "spacing": {
    "strip-internal": "2px",
    "board-edge-x": "16px",
    "board-edge-y": "8px",
    "section-internal": "4px",
    "strip-gap": "4px",
    "row-gap": "8px",
    "strip-height": "48px",
    "icon-size": "12px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "buttons": [
    {
      "name": "Primary Push Button",
      "desc": "Simulates the physical push-button used in ATC consoles. Solid red with hard shadow for tactile press.",
      "html": "<button onmouseenter=\"this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.boxShadow='0 2px 0 var(--primary)'\" onmouseleave=\"this.style.boxShadow=this.dataset.guxBoxShadow||''\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--primary); border-radius: var(--radius-btn, 0px); padding: 4px 12px; font-family: var(--font-body); font-size: 11px; line-height: 1.1; letter-spacing: -0.025em; text-transform: uppercase; box-shadow: 0 1px 0 rgba(0,0,0,0.3); cursor: pointer; height: 32px; width: 64px;\">FPL</button>",
      "label": "Primary Push Button",
      "note": "Simulates the physical push-button used in ATC consoles. Solid red with hard shadow for tactile press."
    },
    {
      "name": "Secondary Push Button",
      "desc": "Green button for clearance or handoff actions, matching the secondary spot color.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: #FFFFFF; border: 2px solid var(--secondary-col); border-radius: var(--radius-btn, 0px); padding: 4px 12px; font-family: var(--font-body); font-size: 11px; line-height: 1.1; letter-spacing: -0.025em; text-transform: uppercase; box-shadow: 0 1px 0 rgba(0,0,0,0.3); cursor: pointer; height: 32px; width: 64px;\">HANDOFF</button>",
      "label": "Secondary Push Button",
      "note": "Green button for clearance or handoff actions, matching the secondary spot color."
    },
    {
      "name": "Ghost Button (Outline)",
      "desc": "Border-only button that respects the board surface, used for less critical actions like filter toggles.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn, 0px); padding: 4px 12px; font-family: var(--font-body); font-size: 11px; line-height: 1.1; letter-spacing: -0.025em; text-transform: uppercase; cursor: pointer; height: 32px; width: auto;\">STRIP ALL</button>",
      "label": "Ghost Button (Outline)",
      "note": "Border-only button that respects the board surface, used for less critical actions like filter toggles."
    }
  ],
  "cards": [
    {
      "name": "Flight Progress Strip Card",
      "desc": "A digital paper strip mimicking the physical flight progress strip. Includes perforation holes on the left edge, hard drop shadow, and dense monospaced data fields. Material: uncoated paper with fine grain.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg-muted, #1A1A1A); border: 1px solid var(--border); border-radius: var(--radius-card, 0px); padding: 2px; height: 48px; width: 240px; display: flex; align-items: center; gap: 4px; box-shadow: 0 1px 0 rgba(0,0,0,0.3); font-family: var(--font-body); font-size: 11px; line-height: 1.1; letter-spacing: -0.025em; position: relative; overflow: hidden;\">\n  <div style=\"display: flex; flex-direction: column; gap: 0; padding: 0 2px; border-right: 1px dashed var(--outline-variant, #D6DCE5);\">\n    <span style=\"font-size: 8px; color: var(--on-bg-muted, #6B7280);\">CALL</span>\n    <span style=\"font-weight: 500;\">UAL123</span>\n  </div>\n  <div style=\"display: flex; flex-direction: column; gap: 0; padding: 0 2px; border-right: 1px dashed var(--outline-variant, #D6DCE5);\">\n    <span style=\"font-size: 8px; color: var(--on-bg-muted, #6B7280);\">FL</span>\n    <span>350</span>\n  </div>\n  <div style=\"display: flex; flex-direction: column; gap: 0; padding: 0 2px; border-right: 1px dashed var(--outline-variant, #D6DCE5);\">\n    <span style=\"font-size: 8px; color: var(--on-bg-muted, #6B7280);\">SPD</span>\n    <span>465</span>\n  </div>\n  <div style=\"display: flex; flex-direction: column; gap: 0; padding: 0 2px;\">\n    <span style=\"font-size: 8px; color: var(--on-bg-muted, #6B7280);\">HDG</span>\n    <span>270</span>\n  </div>\n  <\!-- Perforation holes on left edge -->\n  <div style=\"position: absolute; left: -4px; top: 4px; display: flex; flex-direction: column; gap: 6px;\">\n    <div style=\"width: 4px; height: 4px; background: var(--bg); border-radius: 50%;\"></div>\n    <div style=\"width: 4px; height: 4px; background: var(--bg); border-radius: 50%;\"></div>\n    <div style=\"width: 4px; height: 4px; background: var(--bg); border-radius: 50%;\"></div>\n  </div>\n  <\!-- Paper curl bottom edge -->\n  <div style=\"position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: rgba(0,0,0,0.15);\"></div>\n</div>",
      "label": "Flight Progress Strip Card",
      "note": "A digital paper strip mimicking the physical flight progress strip. Includes perforation holes on the left edge, hard drop shadow, and dense monospaced data fields. Material: uncoated paper with fine grain."
    },
    {
      "name": "Detail / Information Card (Tooltip Style)",
      "desc": "A raised panel for auxiliary data such as route or remarks. Uses a stronger hard shadow and slightly wider padding. Background matches paper, border mimics a torn edge.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg-muted, #1A1A1A); border: 1px solid var(--border); border-radius: var(--radius-card, 0px); padding: 8px; width: 180px; box-shadow: 0 2px 0 rgba(0,0,0,0.4); font-family: var(--font-body); font-size: 11px; line-height: 1.25; letter-spacing: -0.025em; position: relative;\">\n  <div style=\"display: flex; flex-direction: column; gap: 4px;\">\n    <div style=\"display: flex; justify-content: space-between;\">\n      <span style=\"color: var(--on-bg-muted, #6B7280); font-size: 10px; text-transform: uppercase;\">Route</span>\n      <span style=\"color: var(--primary); font-weight: 500;\">KORD-KLAX</span>\n    </div>\n    <div style=\"display: flex; justify-content: space-between;\">\n      <span style=\"color: var(--on-bg-muted, #6B7280); font-size: 10px; text-transform: uppercase;\">EET</span>\n      <span>02:45</span>\n    </div>\n    <div style=\"display: flex; justify-content: space-between;\">\n      <span style=\"color: var(--on-bg-muted, #6B7280); font-size: 10px; text-transform: uppercase;\">Status</span>\n      <span style=\"color: var(--marker-yellow, #FFE066);\">WX DIV</span>\n    </div>\n  </div>\n  <\!-- Torn edge effect on right side -->\n  <div style=\"position: absolute; right: -2px; top: 0; bottom: 0; width: 4px; background: linear-gradient(135deg, transparent 33%, var(--border) 33%, var(--border) 66%, transparent 66%);\"></div>\n</div>",
      "label": "Detail / Information Card (Tooltip Style)",
      "note": "A raised panel for auxiliary data such as route or remarks. Uses a stronger hard shadow and slightly wider padding. Background matches paper, border mimics a torn edge."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Strip Data Entry)",
      "desc": "A monospaced text field for entering flight data. Uses a recessed inset shadow to mimic a paper slot. Border and background from token palette.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body);\">\n  <label style=\"font-size: 10px; text-transform: uppercase; color: var(--on-bg-muted, #6B7280); letter-spacing: -0.025em;\">Callsign</label>\n  <input onfocus=\"this.dataset.guxBorder=this.style.border||'';this.dataset.guxBoxShadow=this.style.boxShadow||'';this.style.border='2px solid var(--secondary-col)';this.style.boxShadow='0 1px 0 var(--secondary-col)'\" onblur=\"this.style.border=this.dataset.guxBorder||'';this.style.boxShadow=this.dataset.guxBoxShadow||''\" type=\"text\" placeholder=\"e.g. UAL123\" value=\"\" style=\"background: var(--surface); color: var(--on-bg-muted, #1A1A1A); border: 1px solid var(--border); border-radius: var(--radius-input, 0px); padding: 4px 6px; font-family: var(--font-body); font-size: 11px; line-height: 1.1; letter-spacing: -0.025em; text-transform: uppercase; box-shadow: inset 0 1px 0 rgba(0,0,0,0.2); outline: none; width: 240px; height: 32px;\"/>\n</div>",
      "label": "Text Input (Strip Data Entry)",
      "stateLabel": "A monospaced text field for entering flight data. Uses a recessed inset shadow to mimic a paper slot. Border and background from token palette."
    },
    {
      "name": "Select / Dropdown (Strip Bay Selector)",
      "desc": "A dropdown selecting the strip bay or sector. Styled as a recessed field with a custom arrow indicator.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body);\">\n  <label style=\"font-size: 10px; text-transform: uppercase; color: var(--on-bg-muted, #6B7280); letter-spacing: -0.025em;\">Sector</label>\n  <div style=\"position: relative;\">\n    <select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg-muted, #1A1A1A); border: 1px solid var(--border); border-radius: var(--radius-input, 0px); padding: 4px 24px 4px 6px; font-family: var(--font-body); font-size: 11px; line-height: 1.1; letter-spacing: -0.025em; text-transform: uppercase; box-shadow: inset 0 1px 0 rgba(0,0,0,0.2); outline: none; width: 240px; height: 32px; appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer;\">\n      <option>ZNY 01</option>\n      <option>ZNY 02</option>\n      <option>ZNY 03</option>\n      <option>ZNY 04</option>\n    </select>\n    <div style=\"position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid var(--on-bg-muted, #6B7280);\"></div>\n  </div>\n</div>",
      "label": "Select / Dropdown (Strip Bay Selector)",
      "stateLabel": "A dropdown selecting the strip bay or sector. Styled as a recessed field with a custom arrow indicator."
    },
    {
      "name": "Checkbox / Toggle (Active Strip Flag)",
      "desc": "A toggle representing a physical shuttle flag that marks a strip as active. Uses the primary color for the active state, with a hard shadow on the knob.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 11px; letter-spacing: -0.025em;\">\n  <label style=\"position: relative; display: inline-flex; align-items: center; cursor: pointer;\">\n    <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"opacity: 0; position: absolute; width: 0; height: 0;\" />\n    <span style=\"width: 28px; height: 12px; background: var(--on-bg-muted, #6B7280); border-radius: 0px; position: relative; transition: background 0ms; box-shadow: inset 0 1px 0 rgba(0,0,0,0.2);\">\n      <span style=\"width: 10px; height: 10px; background: var(--surface); border: 1px solid var(--border); position: absolute; top: 1px; left: 1px; transition: left 0ms; box-shadow: 0 1px 0 rgba(0,0,0,0.3);\"></span>\n    </span>\n  </label>\n  <span style=\"color: var(--on-bg);\">Active (red when checked)</span>\n</div>",
      "label": "Checkbox / Toggle (Active Strip Flag)",
      "stateLabel": "A toggle representing a physical shuttle flag that marks a strip as active. Uses the primary color for the active state, with a hard shadow on the knob."
    }
  ],
  "extraComponents": [
    {
      "name": "Shuttle Flag",
      "desc": "A small colored plastic shuttle that slides along a strip to indicate state. Red primary color, with a hard shadow to simulate thickness.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); width: 8px; height: 16px; border-radius: 0px; box-shadow: 0 1px 0 rgba(0,0,0,0.3); font-size: 6px; line-height: 16px; text-align: center; cursor: pointer; display: inline-block; vertical-align: middle;\"></div>"
    },
    {
      "name": "Tooltip / Annotation Bubble",
      "desc": "A tooltip appearing above a strip, mimicking a sticky note or annotation tape. Surface container background, hard shadow, border.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg-muted, #1A1A1A); border: 1px solid var(--border); border-radius: 0px; padding: 4px 8px; font-family: var(--font-body); font-size: 10px; line-height: 1.25; letter-spacing: -0.025em; text-transform: uppercase; box-shadow: 0 2px 0 rgba(0,0,0,0.4); position: relative; width: auto; display: inline-block;\">\n  <span>COORD REQ</span>\n  <div style=\"position: absolute; bottom: -4px; left: 12px; width: 8px; height: 8px; background: var(--surface); border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); transform: rotate(45deg);\"></div>\n</div>"
    },
    {
      "name": "Marker Stamp (Emergency Flag)",
      "desc": "A small badge indicating an emergency or priority status, using marker-yellow background with black text. Mimics a physical stamp with slight rotation and ink bleed effect.",
      "html": "<div style=\"background: var(--marker-yellow, #FFE066); color: #1A1A1A; border: 1px solid #1A1A1A; border-radius: 0px; padding: 2px 4px; font-family: var(--font-body); font-size: 9px; line-height: 1; letter-spacing: -0.025em; text-transform: uppercase; font-weight: 700; display: inline-block; transform: rotate(-3deg); box-shadow: 0 1px 0 rgba(0,0,0,0.2); position: relative;\">\n  EMERG\n  <div style=\"position: absolute; top: -1px; left: -1px; right: -1px; bottom: -1px; border: 0; pointer-events: none; background: rgba(0,0,0,0.05); mix-blend-mode: multiply;\"></div>\n</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — STRIP BAY 04 ACTIVE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — DEPARTURE WINDOW ZNY 01</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — UAL123 / B738 / KORD-KLAX</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — FL350 465KT 270° 02:45 EET WX DIV</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CALLSIGN   FL   SPD   HDG   ROUTE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do NOT use rounded corners anywhere. The physical strips and board are perfectly rectangular.",
      "avoid": {
        "html": "<div style=\"background: var(--surface); border-radius: 8px; padding: 8px;\">Rounded strip</div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use rounded corners anywhere. The physical strips and board are perfectly rectangular.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:240px;height:48px;background:var(--surface);border:1px solid var(--border);box-shadow:0 1px 0 rgba(0,0,0,0.3);display:flex;align-items:center;gap:2px;padding:2px;font-family:var(--font-body);font-size:11px;position:relative;\"><div style=\"position:absolute;left:-4px;top:6px;display:flex;flex-direction:column;gap:4px;\"><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">CALL</span><span style=\"font-weight:500;color:var(--on-surface-container);\">UAL123</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">FL</span><span style=\"color:var(--on-surface-container);\">350</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">SPD</span><span style=\"color:var(--on-surface-container);\">465</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">HDG</span><span style=\"color:var(--on-surface-container);\">270</span></div></div>"
      }
    },
    {
      "desc": "Do NOT use soft/blurred shadows. All shadows must be hard (0 blur) to simulate paper offset.",
      "avoid": {
        "html": "<div style=\"background: var(--surface); box-shadow: 0 2px 8px rgba(0,0,0,0.3); padding: 8px;\">Soft shadow</div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use soft/blurred shadows. All shadows must be hard (0 blur) to simulate paper offset.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:240px;height:48px;background:var(--surface);border:1px solid var(--border);box-shadow:0 1px 0 rgba(0,0,0,0.3);display:flex;align-items:center;gap:2px;padding:2px;font-family:var(--font-body);font-size:11px;position:relative;\"><div style=\"position:absolute;left:-4px;top:6px;display:flex;flex-direction:column;gap:4px;\"><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">CALL</span><span style=\"font-weight:500;color:var(--on-surface-container);\">UAL123</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">FL</span><span style=\"color:var(--on-surface-container);\">350</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">SPD</span><span style=\"color:var(--on-surface-container);\">465</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">HDG</span><span style=\"color:var(--on-surface-container);\">270</span></div></div>"
      }
    },
    {
      "desc": "Do NOT use decorative fonts. Only monospaced and handwritten (Caveat) are allowed.",
      "avoid": {
        "html": "<div style=\"font-family: 'Georgia', serif; font-size: 14px;\">Non-monospaced text</div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use decorative fonts. Only monospaced and handwritten (Caveat) are allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:240px;height:48px;background:var(--surface);border:1px solid var(--border);box-shadow:0 1px 0 rgba(0,0,0,0.3);display:flex;align-items:center;gap:2px;padding:2px;font-family:'JetBrains Mono',monospace;font-size:11px;position:relative;\"><div style=\"position:absolute;left:-4px;top:6px;display:flex;flex-direction:column;gap:4px;\"><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">CALL</span><span style=\"font-weight:500;color:var(--on-surface-container);\">UAL123</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">FL</span><span style=\"color:var(--on-surface-container);\">350</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">SPD</span><span style=\"color:var(--on-surface-container);\">465</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">HDG</span><span style=\"color:var(--on-surface-container);\">270</span></div></div>"
      }
    },
    {
      "desc": "Do NOT use gradients or glows. The visual language is flat, matte, and utilitarian.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(180deg, var(--surface), var(--border)); padding: 8px;\">Gradient strip</div>",
        "label": "Avoid"
      },
      "rule": "Do NOT use gradients or glows. The visual language is flat, matte, and utilitarian.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:240px;height:48px;background:var(--surface);border:1px solid var(--border);box-shadow:0 1px 0 rgba(0,0,0,0.3);display:flex;align-items:center;gap:2px;padding:2px;font-family:var(--font-body);font-size:11px;position:relative;\"><div style=\"position:absolute;left:-4px;top:6px;display:flex;flex-direction:column;gap:4px;\"><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">CALL</span><span style=\"font-weight:500;color:var(--on-surface-container);\">UAL123</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">FL</span><span style=\"color:var(--on-surface-container);\">350</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">SPD</span><span style=\"color:var(--on-surface-container);\">465</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">HDG</span><span style=\"color:var(--on-surface-container);\">270</span></div></div>"
      }
    }
  ],
  "doAvoidStyle": "Rounded corners, blurred shadows, decorative fonts, gradients, glows, and any digital-smooth effects are strictly forbidden. The design must remain faithful to the physical, matte, hard-edge nature of the original ATC strip board.",
  "effects": [],
  "motion": [],
  "colors": {
    "surface": "#1A1A1A",
    "on-surface": "#9CA3AF",
    "surface-container": "#F5F0E1",
    "on-surface-container": "#1A1A1A",
    "primary": "#CC3333",
    "on-primary": "#FFFFFF",
    "secondary": "#2E7D32",
    "tertiary": "#1A3A6B",
    "marker-yellow": "#FFE066",
    "marker-white": "#FFFFFF",
    "outline-variant": "#D6DCE5"
  },
  "typography": {
    "display": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "12px",
      "fontWeight": 500,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em"
    },
    "body": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "11px",
      "fontWeight": 400,
      "lineHeight": 1.1,
      "letterSpacing": "-0.025em"
    },
    "label": {
      "fontFamily": "JetBrains Mono",
      "fontSize": "10px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "handwritten": {
      "fontFamily": "Caveat",
      "fontSize": "11px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "OPERATIONAL DASHBOARD",
      "heroHeadline": "AIR TRAFFIC STRIP BOARD",
      "heroSub": "Tactile flight progress simulation for modern control towers.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#3A3F4B;color:#fff;font-family:\\x27JetBrains Mono\\x27,monospace;font-size:12px;padding:4px 12px;border:0;text-transform:uppercase;letter-spacing:-0.025em;cursor:pointer;box-shadow:0 1px 0 0 rgba(0,0,0,0.3);\">LAUNCH BAY</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#9CA3AF;font-family:\\x27JetBrains Mono\\x27,monospace;font-size:12px;padding:4px 12px;border:1px solid #6B7280;text-transform:uppercase;letter-spacing:-0.025em;cursor:pointer;\">VIEW SECTOR MAP</button>",
      "navLinks": [
        "SECTOR MAP",
        "STRIP RACK",
        "HOLD LIST",
        "BEACON LOG"
      ],
      "features": [
        {
          "title": "PAPER STRIPS",
          "desc": "Real-time paper strip simulation with perforation and curl. Each strip holds flight data, altitude, speed, and beacon code.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 PAPER STRIPS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Real-time paper strip simulation with perforation and curl. Each strip holds flight data, altitude, speed, and beacon code.</div></div>"
        },
        {
          "title": "SHUTTLE FLAGS",
          "desc": "Colour-coded plastic shuttles for emergency, handoff, and priority markers. Snap to strip edge with zero-blur shadow.",
          "icon": "🚩",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🚩 SHUTTLE FLAGS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Colour-coded plastic shuttles for emergency, handoff, and priority markers. Snap to strip edge with zero-blur shadow.</div></div>"
        },
        {
          "title": "BOARD VIEW",
          "desc": "Full bay overview with variable density. Empty slots render as dark voids. Supports sparse to dense configurations.",
          "icon": "🖥️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖥️ BOARD VIEW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Full bay overview with variable density. Empty slots render as dark voids. Supports sparse to dense configurations.</div></div>"
        },
        {
          "title": "HARD SHADOWS",
          "desc": "Physical offset shadow model with zero blur. Every lifted strip, shuttle, or tooltip uses hard drop shadows mimicking paper thickness.",
          "icon": "📏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📏 HARD SHADOWS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Physical offset shadow model with zero blur. Every lifted strip, shuttle, or tooltip uses hard drop shadows mimicking paper thickness.</div></div>"
        }
      ],
      "ctaStripHeadline": "DEPLOY YOUR BAY",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#CC3333;color:#fff;font-family:\\x27JetBrains Mono\\x27,monospace;font-size:12px;padding:6px 16px;border:0;text-transform:uppercase;letter-spacing:-0.025em;cursor:pointer;box-shadow:0 2px 0 0 rgba(0,0,0,0.4);\">LAUNCH STRIP BOARD</button>",
      "sidebarBrand": "ATC STRIP BOARD v0.1",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "STRIP BAY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SECTOR LOG",
          "active": false
        }
      ],
      "dashboardTitle": "ACTIVE BAY — SECTOR 4",
      "metrics": [
        {
          "label": "STRIPS IN BAY",
          "value": "24",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "HOLD COUNT",
          "value": "7",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "BEACONS",
          "value": "12",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "PULLED STRIPS",
          "value": "5",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "EMERGENCY",
          "value": "1",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "SECTOR LOAD / 30MIN",
      "panelATitle": "PULLED STRIP DETAIL",
      "panelARows": [
        {
          "label": "FLIGHT",
          "value": "BAW123",
          "pct": 100
        },
        {
          "label": "ALTITUDE",
          "value": "FL350",
          "pct": 100
        },
        {
          "label": "SPEED",
          "value": "480KT",
          "pct": 100
        },
        {
          "label": "HEADING",
          "value": "270°",
          "pct": 100
        },
        {
          "label": "BEACON",
          "value": "3456",
          "pct": 100
        }
      ],
      "panelBTitle": "HOLD LIST",
      "panelBCells": [
        {
          "label": "AFR456",
          "value": "HOLD AT HON",
          "state": "ok"
        },
        {
          "label": "DAL234",
          "value": "HOLD AT LHR",
          "state": "warn"
        },
        {
          "label": "UAL789",
          "value": "HOLD AT EWR",
          "state": "err"
        },
        {
          "label": "SWA345",
          "value": "HOLD AT MDW",
          "state": "ok"
        },
        {
          "label": "JBU567",
          "value": "HOLD AT JFK",
          "state": "warn"
        },
        {
          "label": "FDX890",
          "value": "HOLD AT MEM",
          "state": "err"
        },
        {
          "label": "AAL111",
          "value": "HOLD AT ORD",
          "state": "ok"
        },
        {
          "label": "DHL222",
          "value": "HOLD AT CVG",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "08:00",
        "08:05",
        "08:10",
        "08:15",
        "08:20",
        "08:25"
      ],
      "series": [
        {
          "data": [
            3,
            5,
            2,
            7,
            4,
            6,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "ARRIVALS",
          "axis": "left",
          "color": "#CC3333"
        },
        {
          "data": [
            4,
            2,
            6,
            3,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "label": "DEPARTURES",
          "axis": "right-1",
          "color": "#2E7D32"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;background:#1A1A1A;display:flex;align-items:center;justify-content:center;gap:4px;padding:16px;'; var s1 = document.createElement('div'); s1.style.cssText = 'width:240px;height:48px;background:var(--surface);border:1px solid var(--border);box-shadow:0 2px 0 rgba(0,0,0,0.4);display:flex;align-items:center;gap:2px;padding:2px;font-family:var(--font-body);font-size:11px;position:relative;'; s1.innerHTML = '<div style=\"position:absolute;left:-4px;top:6px;display:flex;flex-direction:column;gap:4px;\"><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">CALL</span><span style=\"font-weight:500;color:var(--on-surface-container);\">UAL123</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">FL</span><span style=\"color:var(--on-surface-container);\">350</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">SPD</span><span style=\"color:var(--on-surface-container);\">465</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">HDG</span><span style=\"color:var(--on-surface-container);\">270</span></div>'; var s2 = document.createElement('div'); s2.style.cssText = 'width:240px;height:48px;background:var(--surface);border:1px solid var(--border);box-shadow:0 1px 0 rgba(0,0,0,0.3);display:flex;align-items:center;gap:2px;padding:2px;font-family:var(--font-body);font-size:11px;position:relative;'; s2.innerHTML = '<div style=\"position:absolute;left:-4px;top:6px;display:flex;flex-direction:column;gap:4px;\"><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div><div style=\"width:4px;height:4px;background:var(--bg);border-radius:50%;\"></div></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">CALL</span><span style=\"font-weight:500;color:var(--on-surface-container);\">BAW456</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">FL</span><span style=\"color:var(--on-surface-container);\">320</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;border-right:1px dashed var(--outline-variant);\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">SPD</span><span style=\"color:var(--on-surface-container);\">410</span></div><div style=\"display:flex;flex-direction:column;gap:0;padding:0 2px;\"><span style=\"font-size:8px;color:var(--on-bg-muted);\">HDG</span><span style=\"color:var(--on-surface-container);\">180</span></div>'; el.appendChild(s1); el.appendChild(s2); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:8px;padding:16px;background:var(--bg);'; var cards = [\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📄 PAPER STRIPS</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Real-time paper strip simulation with perforation and curl. Each strip holds flight data, altitude, speed, and beacon code.</div></div>\",\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🚩 SHUTTLE FLAGS</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Colour-coded plastic shuttles for emergency, handoff, and priority markers. Snap to strip edge with zero-blur shadow.</div></div>\",\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🖥️ BOARD VIEW</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Full bay overview with variable density. Empty slots render as dark voids. Supports sparse to dense configurations.</div></div>\",\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📏 HARD SHADOWS</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Physical offset shadow model with zero blur. Every lifted strip, shuttle, or tooltip uses hard drop shadows mimicking paper thickness.</div></div>\"]; var html = ''; for(var i=0;i<cards.length;i++){ html += cards[i]; } el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--surface);border:1px solid var(--border);box-shadow:0 2px 0 rgba(0,0,0,0.4);padding:8px;font-family:var(--font-body);font-size:11px;color:var(--on-surface-container);'; el.innerHTML = '<div style=\"display:flex;flex-direction:column;gap:4px;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0;color:var(--primary);margin-bottom:4px;\">PULLED STRIP DETAIL</div><div style=\"display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid var(--outline-variant);\"><span style=\"color:var(--on-bg-muted);font-size:10px;text-transform:uppercase;\">FLIGHT</span><span style=\"font-weight:500;\">BAW123</span></div><div style=\"display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid var(--outline-variant);\"><span style=\"color:var(--on-bg-muted);font-size:10px;text-transform:uppercase;\">ALTITUDE</span><span>FL350</span></div><div style=\"display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid var(--outline-variant);\"><span style=\"color:var(--on-bg-muted);font-size:10px;text-transform:uppercase;\">SPEED</span><span>480KT</span></div><div style=\"display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid var(--outline-variant);\"><span style=\"color:var(--on-bg-muted);font-size:10px;text-transform:uppercase;\">HEADING</span><span>270°</span></div><div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"color:var(--on-bg-muted);font-size:10px;text-transform:uppercase;\">BEACON</span><span>3456</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#1A1A1A'; }",
    "ctaBackground": "function(el) { el.style.background = '#1A1A1A'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;background:var(--border);margin:8px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#1A1A1A'; el.style.position = 'relative'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;filter:url(#paper-grain);mix-blend-mode:overlay;opacity:0.2;background:transparent;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#1A1A1A",
    "--color-popover": "#1A1A1A",
    "--color-foreground": "#9CA3AF",
    "--color-card-foreground": "#9CA3AF",
    "--color-popover-foreground": "#9CA3AF",
    "--color-card": "#F5F0E1",
    "--color-muted": "#F5F0E1",
    "--color-muted-foreground": "#6B7280",
    "--color-primary": "#CC3333",
    "--color-ring": "#CC3333",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#2E7D32",
    "--color-accent": "#2E7D32",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#6B7280",
    "--color-input": "#6B7280",
    "--color-destructive": "#CC3333"
  },
  "shadcnTokensClassic": {
    "--background": "#1A1A1A",
    "--popover": "#1A1A1A",
    "--foreground": "#9CA3AF",
    "--card-foreground": "#9CA3AF",
    "--popover-foreground": "#9CA3AF",
    "--card": "#F5F0E1",
    "--muted": "#F5F0E1",
    "--muted-foreground": "#6B7280",
    "--primary": "#CC3333",
    "--ring": "#CC3333",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#2E7D32",
    "--accent": "#2E7D32",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#6B7280",
    "--input": "#6B7280",
    "--destructive": "#CC3333"
  }
});
