registerSystem({
  "meta": {
    "name": "ICAO Passport Booklet Layout Standards",
    "tagline": "ICAO Doc 9303 Digital Design Language",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "ICAO Passport Booklet Layout Standards",
    "colors": {
      "primary": "#1B2A4A",
      "on-primary": "#F5F0E8",
      "surface": "#F5F0E8",
      "on-surface": "#1B2A4A",
      "on-surface-variant": "#6B7A8D",
      "outline": "#C8A951",
      "outline-variant": "#D5C9B0",
      "surface-container": "#F0ECE0",
      "surface-container-low": "#FFFFFF",
      "error": "#C42E2A",
      "border-outline-variant": "#D5C9B0",
      "white": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "sans-serif",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "sans-serif",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "sans-serif",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "sans-serif",
        "fontSize": "14px",
        "fontWeight": 600,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "sans-serif",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "mrz-line": {
        "fontFamily": "monospace",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "6px",
      "card": "6px",
      "button": "0px",
      "input": "2px",
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "8px",
      "section-internal": "16px",
      "page-edge": "16px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "128px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "#1E3A8A",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "mrz-area": {
        "backgroundColor": "{colors.surface-container-low}",
        "height": "80px"
      },
      "data-field": {
        "padding": "8px"
      },
      "signature-box": {
        "backgroundColor": "{colors.surface-container}",
        "height": "40px"
      },
      "photo-zone": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}"
      },
      "hologram-element": {
        "size": "24px"
      }
    },
    "version": "alpha",
    "description": "A digital design language translating ICAO Doc 9303 machine-readable travel document standards into identity verification interfaces and passport data page renderings. Deep navy, off-white, and gold palette with guilloche security patterns, OCR-B monospace MRZ, and laminated card simulation on fixed-aspect-ratio data pages.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 6,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 4
        },
        {
          "host": "www.iso.org",
          "count": 1
        },
        {
          "host": "www.icao.int",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Machine-readable_passport",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Passport",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/OCR-B",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Biometric_passport",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.iso.org/standard/31426.html",
          "host": "www.iso.org",
          "institution": "International Organization for Standardization (ISO)",
          "confidence_original": "low"
        },
        {
          "url": "https://www.icao.int/",
          "host": "www.icao.int",
          "institution": "ICAO",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#1B2A4A",
    "--primary": "#1B2A4A",
    "--on-primary": "#F5F0E8",
    "--secondary-col": "#C8A951",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#6B7A8D",
    "--border": "#C8A951",
    "--error": "#C42E2A",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "6px",
    "--radius-card": "6px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "button-primary": {
      "bg": "var(--primary)",
      "text": "var(--on-primary)",
      "border": "var(--border)"
    },
    "card": {
      "bg": "var(--surface)",
      "border": "var(--primary)",
      "radius": "var(--radius-card)"
    },
    "input": {
      "bg": "var(--bg)",
      "border": "var(--border)",
      "radius": "var(--radius-default)"
    },
    "mrz-area": {
      "bg": "#FFFFFF",
      "border": "none",
      "radius": "0"
    },
    "signature-box": {
      "bg": "#F0ECE0",
      "border": "var(--border) dashed"
    },
    "photo-zone": {
      "bg": "#F0F0F0",
      "border": "2px solid var(--border)",
      "radius": "var(--radius-default)"
    },
    "hologram": {
      "bg": "linear-gradient(135deg, #FBBF24, #34D399, #60A5FA)",
      "opacity": "0.5"
    },
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#C42E2A",
    "deltaUp": "#22C55E",
    "deltaDown": "#C42E2A",
    "deltaFlat": "#6B7A8D",
    "live": "#1B2A4A",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#6B7A8D",
    "chartFont": "Inter"
  },
  "elevation": {
    "none": "none",
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "md": "0 2px 4px rgba(0,0,0,0.1)",
    "lg": "0 4px 6px rgba(0,0,0,0.15)"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "coated-card",
    "layers": [
      {
        "type": "paper-grain",
        "opacity": "10%",
        "blend": "overlay"
      },
      {
        "type": "lamination",
        "opacity": "7%",
        "blend": "overlay",
        "exclude": ".mrz-area"
      }
    ]
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='paper-grain-icao'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><filter id='hologram-scan'><feColorMatrix type='hueRotate' values='0'/></filter></defs></svg>",
  "globalBodyCss": "background-color: #F5F0E8; color: #1B2A4A; font-family: 'Inter', sans-serif; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility;",
  "globalCss": ".ds-layout-frame .data-page-card {\n  position: relative;\n  background: var(--surface);\n  border: 2px solid var(--primary);\n  border-radius: var(--radius-card);\n  padding: var(--page-edge);\n  overflow: hidden;\n}\n.ds-layout-frame .data-page-card::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: rgba(255,245,230,0.07);\n  mix-blend-mode: overlay;\n  pointer-events: none;\n  border-radius: inherit;\n  clip-path: inset(0 0 80px 0);\n  z-index: 0;\n}\n.ds-layout-frame .data-page-card::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E\");\n  opacity: var(--paper-grain-opacity);\n  pointer-events: none;\n  border-radius: inherit;\n  mix-blend-mode: overlay;\n}\n.ds-layout-frame .mrz-area {\n  background: #FFFFFF;\n  border: none;\n  height: 80px;\n  font-family: var(--font-mono);\n  position: relative;\n  z-index: 2;\n}",
  "interactionModel": {
    "hover": {
      "delta": "shadow-lift",
      "shadow": "0 2px 4px rgba(0,0,0,0.1)"
    },
    "active": {
      "delta": "opacity-dim",
      "opacity": "0.85"
    },
    "focus": {
      "style": "color-border",
      "borderColor": "var(--primary)",
      "outline": "none",
      "boxShadow": "none"
    },
    "transition": {
      "duration": "150ms",
      "easing": "ease-out"
    }
  },
  "interactionStyles": ".ds-layout-frame .button-primary:hover { box-shadow: 0 2px 4px rgba(0,0,0,0.1); } .ds-layout-frame .button-primary:active { opacity: 0.85; } .ds-layout-frame .input-field:focus { border-color: var(--primary); outline: none; box-shadow: none; } .ds-layout-frame .button-primary, .ds-layout-frame .input-field { transition: all 150ms ease-out; }",
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#6B7A8D",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "Fixed-width card grid with passport data pages as primary panels. Left sidebar with compact identity cards, main area with full data page, bottom MRZ rail.",
    "density": "Comfortable — generous padding (16px) around each element, but data fields compact (8px internal).",
    "panelTreatment": "Each panel is a card with guilloche background, lamination overlay, and gold border. Active panel has strong shadow.",
    "dataVizStyle": "No standard charts; data is shown as verified fields with checkmarks and status badges (e.g., 'VALID', 'MACHINE READABLE').",
    "signatureElement": "The MRZ strip spans the bottom of the dashboard, acting as a persistent security footer."
  },
  "landingStyle": {
    "heroApproach": "Full-bleed passport data page at the center with slight rotation, surrounded by subtle guilloche pattern on the background.",
    "scrollBehavior": "Smooth, with content snapping between hero, features, and demo sections. Sections separated by gold divider lines.",
    "ctaStyle": "Primary button in navy with gold border, always uppercase. Hover lifts shadow slightly.",
    "signatureMoment": "On scroll, the MRZ area slides up from below the fold with a 300ms ease animation, revealing the OCR-B text character by character."
  },
  "buttons": [
    {
      "name": "Passport Primary Button",
      "desc": "Solid navy button with gold outline, zero border-radius, uppercase label. Mimics a passport data page action like 'Verify Identity'.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: 0.025em; text-transform: uppercase; cursor: pointer;\">Verify Identity</button>",
      "label": "Passport Primary Button",
      "note": "Solid navy button with gold outline, zero border-radius, uppercase label. Mimics a passport data page action like 'Verify Identity'."
    },
    {
      "name": "Secondary Outline Button",
      "desc": "Outlined variant with gold border and navy text. Used for secondary actions like 'Cancel' or 'Print'.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: 0.025em; text-transform: uppercase; cursor: pointer;\">Print</button>",
      "label": "Secondary Outline Button",
      "note": "Outlined variant with gold border and navy text. Used for secondary actions like 'Cancel' or 'Print'."
    },
    {
      "name": "Ghost Utility Button",
      "desc": "No border, subtle navy text. For inline actions like 'View Details' within the data page.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); border: none; border-radius: var(--radius-btn); padding: 6px 12px; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer;\">View Details</button>",
      "label": "Ghost Utility Button",
      "note": "No border, subtle navy text. For inline actions like 'View Details' within the data page."
    }
  ],
  "cards": [
    {
      "name": "Passport Data Page Card",
      "desc": "Fixed-aspect-ratio card (125:88) simulating a passport data page. Includes guilloche background via SVG data URL, lamination overlay child div, photo zone, data fields, and MRZ area. Guilloche background is deep navy at low opacity.",
      "html": "<div style=\"width: 500px; max-width: 100%; height: auto; aspect-ratio: 125 / 88; background-color: var(--surface); border: 2px solid var(--primary); border-radius: var(--radius-card); position: relative; overflow: hidden; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 L90 10 M10 30 L90 30 M10 50 L90 50 M10 70 L90 70 M10 90 L90 90' stroke='%231B2A4A' stroke-opacity='0.06' stroke-width='1' fill='none'/%3E%3C/svg%3E\");\"><div style=\"position: absolute; inset: 0; background: rgba(255, 245, 230, 0.07); mix-blend-mode: overlay; pointer-events: none;\"></div><div style=\"display: flex; gap: 16px; padding: 16px; position: relative; z-index: 1;\"><div style=\"flex: 0 0 140px; aspect-ratio: 35 / 45; background-color: var(--on-bg-muted); border: 2px solid var(--border); border-radius: var(--radius-default); display: flex; align-items: center; justify-content: center; font-family: var(--font-body); font-size: 12px; color: var(--on-surface-variant);\">Photo</div><div style=\"flex: 1;\"><div><span style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase;\">Surname</span><div style=\"color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 600; padding: 4px 0;\">SMITH</div></div><div><span style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase;\">Given names</span><div style=\"color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 600; padding: 4px 0;\">JOHN</div></div><div><span style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase;\">Nationality</span><div style=\"color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 600; padding: 4px 0;\">UNITED KINGDOM</div></div></div></div><div style=\"position: absolute; bottom: 0; left: 0; right: 0; height: 80px; background-color: var(--surface-container-low); display: flex; align-items: center; justify-content: center; border-top: 2px solid var(--border);\"><span style=\"font-family: 'IBM Plex Mono', monospace; font-size: 16px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-surface);\">P&lt;GBR&lt;SMITH&lt;&lt;JOHN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span></div></div>",
      "label": "Passport Data Page Card",
      "note": "Fixed-aspect-ratio card (125:88) simulating a passport data page. Includes guilloche background via SVG data URL, lamination overlay child div, photo zone, data fields, and MRZ area. Guilloche background is deep navy at low opacity."
    },
    {
      "name": "Compact Identity Card",
      "desc": "Reduced-size card with same guilloche and lamination, suitable for summary or preview. Maintains object identity.",
      "html": "<div style=\"width: 300px; max-width: 100%; background-color: var(--surface); border: 2px solid var(--primary); border-radius: var(--radius-card); position: relative; overflow: hidden; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 L90 10 M10 30 L90 30 M10 50 L90 50 M10 70 L90 70 M10 90 L90 90' stroke='%231B2A4A' stroke-opacity='0.06' stroke-width='1' fill='none'/%3E%3C/svg%3E\");\"><div style=\"position: absolute; inset: 0; background: rgba(255, 245, 230, 0.07); mix-blend-mode: overlay; pointer-events: none;\"></div><div style=\"display: flex; gap: 8px; padding: 8px; position: relative; z-index: 1;\"><div style=\"flex: 0 0 80px; aspect-ratio: 35/45; background-color: var(--on-bg-muted); border: 2px solid var(--border); border-radius: 4px;\"></div><div style=\"flex: 1;\"><div style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 10px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase;\">Name</div><div style=\"color: var(--on-surface); font-family: var(--font-body); font-size: 12px; font-weight: 600;\">SMITH, JOHN</div><div style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 10px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 4px;\">Nationality</div><div style=\"color: var(--on-surface); font-family: var(--font-body); font-size: 12px; font-weight: 600;\">GBR</div></div></div></div>",
      "label": "Compact Identity Card",
      "note": "Reduced-size card with same guilloche and lamination, suitable for summary or preview. Maintains object identity."
    }
  ],
  "forms": [
    {
      "name": "Passport Number Input",
      "desc": "Text input styled like a data field. Gold border, navy text, uppercase label. Mimics document data entry.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase;\">Passport Number</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: var(--bg); color: var(--on-surface); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 14px; font-weight: 600; outline: none; text-transform: uppercase;\" value=\"123456789\" /></div>",
      "label": "Passport Number Input",
      "stateLabel": "Text input styled like a data field. Gold border, navy text, uppercase label. Mimics document data entry."
    },
    {
      "name": "Nationality Select",
      "desc": "Dropdown with gold border, uppercase label, and arrow indicator using native select styling.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"color: var(--on-surface-variant); font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase;\">Nationality</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--bg); color: var(--on-surface); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; appearance: auto; cursor: pointer;\"><option>UNITED KINGDOM</option><option>UNITED STATES</option><option>CANADA</option><option>AUSTRALIA</option></select></div>",
      "label": "Nationality Select",
      "stateLabel": "Dropdown with gold border, uppercase label, and arrow indicator using native select styling."
    },
    {
      "name": "Terms Checkbox",
      "desc": "Custom checkbox with gold border and checkmark using CSS. Inspired by passport seal approval.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 2px; background-color: var(--bg); display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 20 20\" width=\"14\" height=\"14\"><path d=\"M4 10 L9 15 L16 5\" stroke=\"var(--primary)\" stroke-width=\"3\" fill=\"none\"/></svg></div><span style=\"color: var(--on-surface); font-family: var(--font-body); font-size: 14px; font-weight: 400;\">I confirm the information is accurate</span></div>",
      "label": "Terms Checkbox",
      "stateLabel": "Custom checkbox with gold border and checkmark using CSS. Inspired by passport seal approval."
    }
  ],
  "extraComponents": [
    {
      "name": "MRZ Badge",
      "desc": "Pill-shaped badge showing a truncated MRZ line. Uses monospace font and gold outline.",
      "html": "<div style=\"display: inline-flex; align-items: center; background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-chip); padding: 4px 12px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-surface);\">P&lt;GBR&lt;SMITH&lt;&lt;JOHN&lt;&lt;&lt;...</div>"
    },
    {
      "name": "Hologram Element",
      "desc": "Small gradient square simulating a passport hologram. Animated hue rotation via CSS animation.",
      "html": "<div style=\"width: 24px; height: 24px; background: linear-gradient(135deg, var(--primary), var(--primary), var(--primary)); border-radius: 2px; opacity: 0.5; animation: hologram-rotate 6s linear infinite;\"></div>"
    },
    {
      "name": "National Emblem Icon",
      "desc": "Simplified shield emblem using SVG. Navy fill with gold border, representing intaglio-style emblem.",
      "html": "<div style=\"width: 32px; height: 32px; background-color: var(--primary); border: 2px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center;\"><svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\"><path d=\"M12 2 L22 8 L22 16 L12 22 L2 16 L2 8 Z\" fill=\"none\" stroke=\"var(--border)\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"var(--border)\"/></svg></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PASSPORT</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — UNITED KINGDOM OF GREAT BRITAIN</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — MACHINE READABLE PASSPORT</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — SMITH, JOHN</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SURNAME</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Placing any artwork, guilloche, or lamination overlay behind the MRZ area — the MRZ must remain on a clean white background with no patterns.",
      "avoid": {
        "html": "<div style=\"width: 400px; height: 80px; background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cpath d=%22M10 10 L30 30%22 stroke=%22%231B2A4A%22 stroke-opacity=%220.2%22/%3E%3C/svg%3E'); display: flex; align-items: center; justify-content: center; font-family: monospace; font-size: 16px; letter-spacing: 0.1em;\">P&lt;GBR&lt;SMITH&lt;&lt;JOHN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>",
        "label": "Avoid"
      },
      "rule": "Placing any artwork, guilloche, or lamination overlay behind the MRZ area — the MRZ must remain on a clean white background with no patterns.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Using italic typography for field labels or data values — all uppercase labels should be normal weight, not italic.",
      "avoid": {
        "html": "<span style=\"font-family: var(--font-body); font-size: 12px; font-style: italic; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-surface-variant);\">Surname</span>",
        "label": "Avoid"
      },
      "rule": "Using italic typography for field labels or data values — all uppercase labels should be normal weight, not italic.",
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
      "heroKicker": "ICAO DOC 9303",
      "heroHeadline": "DATA PAGE VERIFICATION SUITE",
      "heroSub": "Validate machine-readable travel documents against guilloche integrity, MRZ structure, and laminated card stock simulations.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VERIFY DOCUMENT</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LOAD SPEC SHEET</button>",
      "navLinks": [
        "DATA PAGE",
        "MRZ ANALYZER",
        "GUILLOCHE VIEW",
        "LAMINATION TEST",
        "PHOTO ZONE"
      ],
      "features": [
        {
          "title": "MRZ PARSING",
          "desc": "Extract two lines of 44 OCR-B characters with exact spacing and monospace validation.",
          "icon": "🔤",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔤 MRZ PARSING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Extract two lines of 44 OCR-B characters with exact spacing and monospace validation.</div></div>"
        },
        {
          "title": "GUILLOCHE INTEGRITY",
          "desc": "Detect pattern disruptions in the deep navy rosette background behind the data fields.",
          "icon": "🌀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌀 GUILLOCHE INTEGRITY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Detect pattern disruptions in the deep navy rosette background behind the data fields.</div></div>"
        },
        {
          "title": "PHOTO ZONE MATCHING",
          "desc": "Compare captured portrait against the 35:45 aspect ratio zone with gold border overlay.",
          "icon": "📸",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📸 PHOTO ZONE MATCHING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Compare captured portrait against the 35:45 aspect ratio zone with gold border overlay.</div></div>"
        },
        {
          "title": "LAMINATION OVERLAY CHECK",
          "desc": "Ensure the pseudo-element coating is present on data fields but strictly excluded from the MRZ area.",
          "icon": "🛡️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛡️ LAMINATION OVERLAY CHECK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Ensure the pseudo-element coating is present on data fields but strictly excluded from the MRZ area.</div></div>"
        }
      ],
      "ctaStripHeadline": "INITIATE BATCH VERIFICATION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">UPLOAD DOCUMENT IMAGE</button>",
      "sidebarBrand": "PASSPORT ID",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "VERIFICATION FLOW",
          "active": true
        },
        {
          "icon": "◉",
          "label": "AUDIT LOG",
          "active": false
        }
      ],
      "dashboardTitle": "VERIFICATION CENTER",
      "metrics": [
        {
          "label": "MRZ LINES PARSED",
          "value": "1,284",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PHOTO MATCH SCORE",
          "value": "96.3%",
          "delta": "+2.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SIGNATURE DETECTED",
          "value": "1,102",
          "delta": "-0.5%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "GUILLOCHE INTEGRITY",
          "value": "99.1%",
          "delta": "+0.3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LAMINATION PRESENT",
          "value": "1,247",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "VERIFICATION SUCCESS RATE",
      "panelATitle": "RECENT VERIFICATIONS",
      "panelARows": [
        {
          "label": "DOC P-10234",
          "value": "PASS",
          "pct": 0
        },
        {
          "label": "DOC P-10235",
          "value": "MANUAL REVIEW",
          "pct": 0
        },
        {
          "label": "DOC P-10236",
          "value": "FAIL",
          "pct": 0
        },
        {
          "label": "DOC P-10237",
          "value": "PASS",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "FIELD EXTRACTION DETAILS",
      "panelBCells": [
        {
          "label": "SURNAME",
          "value": "DOE",
          "state": "ok"
        },
        {
          "label": "GIVEN NAME",
          "value": "JOHN",
          "state": "warn"
        },
        {
          "label": "NATIONALITY",
          "value": "USA",
          "state": "err"
        },
        {
          "label": "DATE OF BIRTH",
          "value": "12 MAR 1985",
          "state": "ok"
        },
        {
          "label": "SEX",
          "value": "M",
          "state": "warn"
        },
        {
          "label": "DATE OF EXPIRY",
          "value": "01 JAN 2030",
          "state": "err"
        },
        {
          "label": "DOCUMENT NUMBER",
          "value": "AB123456",
          "state": "ok"
        },
        {
          "label": "PERSONAL NUMBER",
          "value": "789012",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "WEEK 1",
        "WEEK 2",
        "WEEK 3",
        "WEEK 4",
        "WEEK 5",
        "WEEK 6"
      ],
      "series": [
        {
          "data": [
            120,
            135,
            145,
            160,
            155,
            170,
            170,
            170,
            170,
            170,
            170,
            170
          ],
          "label": "PASS",
          "axis": "left",
          "color": "#1B2A4A"
        },
        {
          "data": [
            20,
            18,
            15,
            10,
            12,
            8,
            8,
            8,
            8,
            8,
            8,
            8
          ],
          "label": "MANUAL REVIEW",
          "axis": "right-1",
          "color": "#C8A951"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:32px;background:#1B2A4A;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'%3E%3Cpath d=\\'M10 10 L90 10 M10 30 L90 30 M10 50 L90 50 M10 70 L90 70 M10 90 L90 90\\' stroke=\\'%23C8A951\\' stroke-opacity=\\'0.08\\' stroke-width=\\'1\\' fill=\\'none\\'/%3E%3C/svg%3E\");position:relative;overflow:hidden;'; var card=document.createElement('div'); card.style.cssText='width:500px;max-width:100%;aspect-ratio:125/88;background:var(--surface);border:2px solid var(--border);border-radius:6px;position:relative;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.3);'; var guilloche=document.createElement('div'); guilloche.style.cssText='position:absolute;inset:0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\'%3E%3Cpath d=\\'M0 30 L60 30 M30 0 L30 60\\' stroke=\\'%231B2A4A\\' stroke-opacity=\\'0.08\\' stroke-width=\\'0.5\\' fill=\\'none\\'/%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'20\\' stroke=\\'%23C8A951\\' stroke-opacity=\\'0.1\\' stroke-width=\\'0.5\\' fill=\\'none\\'/%3E%3C/svg%3E\");opacity:0.5;pointer-events:none;'; card.appendChild(guilloche); var lamination=document.createElement('div'); lamination.style.cssText='position:absolute;inset:0;background:rgba(255,245,230,0.07);mix-blend-mode:overlay;pointer-events:none;'; card.appendChild(lamination); var content=document.createElement('div'); content.style.cssText='position:relative;z-index:1;display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:16px;'; content.innerHTML='<div style=\"display:flex;gap:16px;flex:1;\"><div style=\"flex:0 0 140px;aspect-ratio:35/45;background:#D5C9B0;border:2px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">PHOTO</div><div style=\"flex:1;display:flex;flex-direction:column;gap:4px;\"><div style=\"color:var(--on-surface-variant);font-family:var(--font-body);font-size:10px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;\">SURNAME</div><div style=\"color:var(--on-bg);font-family:var(--font-display);font-size:14px;font-weight:600;\">SMITH</div><div style=\"color:var(--on-surface-variant);font-family:var(--font-body);font-size:10px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;\">GIVEN NAMES</div><div style=\"color:var(--on-bg);font-family:var(--font-display);font-size:14px;font-weight:600;\">JOHN</div><div style=\"color:var(--on-surface-variant);font-family:var(--font-body);font-size:10px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;\">NATIONALITY</div><div style=\"color:var(--on-bg);font-family:var(--font-display);font-size:14px;font-weight:600;\">UNITED KINGDOM</div></div></div><div style=\"height:64px;background:#FFFFFF;display:flex;align-items:center;justify-content:center;border-top:2px solid var(--border);font-family:var(--font-mono);font-size:14px;letter-spacing:0.1em;color:var(--on-bg);\">P&lt;GBR&lt;SMITH&lt;&lt;JOHN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</div>'; card.appendChild(content); el.appendChild(card); var headline=document.createElement('div'); headline.style.cssText='text-align:center;margin-top:32px;color:var(--on-primary);font-family:var(--font-display);'; headline.innerHTML='<div style=\"font-size:12px;font-weight:300;letter-spacing:0.15em;opacity:0.7;\">ICAO DOC 9303</div><div style=\"font-size:36px;font-weight:700;letter-spacing:-0.02em;margin:8px 0;\">DATA PAGE VERIFICATION SUITE</div><div style=\"font-size:14px;font-weight:400;opacity:0.8;max-width:400px;margin:0 auto;\">Validate machine-readable travel documents against guilloche integrity, MRZ structure, and laminated card stock simulations.</div>'; el.appendChild(headline); }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;padding:32px;max-width:1200px;margin:0 auto;'; var features=[{title:'MRZ PARSING',desc:'Extract two lines of 44 OCR-B characters with exact spacing and monospace validation.'},{title:'GUILLOCHE INTEGRITY',desc:'Detect pattern disruptions in the deep navy rosette background behind the data fields.'},{title:'PHOTO ZONE MATCHING',desc:'Compare captured portrait against the 35:45 aspect ratio zone with gold border overlay.'},{title:'LAMINATION OVERLAY CHECK',desc:'Ensure the pseudo-element coating is present on data fields but strictly excluded from the MRZ area.'}]; features.forEach(function(f){ var card=document.createElement('div'); card.style.cssText='min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border-radius:6px;'; var title=document.createElement('div'); title.style.cssText='font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);'; title.textContent=f.title; card.appendChild(title); var desc=document.createElement('div'); desc.style.cssText='font-size:12px;line-height:1.55;color:var(--on-bg-muted);'; desc.textContent=f.desc; card.appendChild(desc); el.appendChild(card); }); }",
    "panelCRender": "function(el) { el.style.cssText='padding:16px;background:var(--surface);border:1px solid var(--border);border-radius:6px;position:relative;overflow:hidden;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\'%3E%3Cpath d=\\'M0 30 L60 30 M30 0 L30 60\\' stroke=\\'%231B2A4A\\' stroke-opacity=\\'0.05\\' stroke-width=\\'0.5\\' fill=\\'none\\'/%3E%3C/svg%3E\");'; var lamination=document.createElement('div'); lamination.style.cssText='position:absolute;inset:0;background:rgba(255,245,230,0.07);mix-blend-mode:overlay;pointer-events:none;'; el.appendChild(lamination); var content=document.createElement('div'); content.style.cssText='position:relative;z-index:1;display:flex;flex-direction:column;gap:8px;'; content.innerHTML='<div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:var(--primary);margin-bottom:4px;\">RECENT VERIFICATION</div><div style=\"display:flex;gap:8px;\"><div style=\"flex:0 0 100px;aspect-ratio:35/45;background:#D5C9B0;border:1px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--on-bg-muted);\">PHOTO</div><div style=\"flex:1;\"><div style=\"color:var(--on-surface-variant);font-size:9px;font-weight:300;letter-spacing:.05em;text-transform:uppercase;\">DOCUMENT</div><div style=\"color:var(--on-bg);font-size:12px;font-weight:600;\">P-10234</div><div style=\"color:var(--on-surface-variant);font-size:9px;font-weight:300;letter-spacing:.05em;text-transform:uppercase;margin-top:4px;\">STATUS</div><div style=\"color:#22C55E;font-size:12px;font-weight:600;\">PASS</div></div></div>'; el.appendChild(content); }",
    "heroBackground": "function(el) { el.style.background = 'linear-gradient(135deg, rgba(27,42,74,0.12), rgba(27,42,74,0.08)), url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\' viewBox=\\'0 0 200 200\\'%3E%3Cpath d=\\'M0 100 Q50 80 100 100 T200 100\\' stroke=\\'%23C8A951\\' stroke-opacity=\\'0.06\\' stroke-width=\\'0.5\\' fill=\\'none\\'/%3E%3Cpath d=\\'M0 150 Q50 130 100 150 T200 150\\' stroke=\\'%23C8A951\\' stroke-opacity=\\'0.04\\' stroke-width=\\'0.5\\' fill=\\'none\\'/%3E%3C/svg%3E\")'; }",
    "ctaBackground": "function(el) { el.style.background = 'linear-gradient(180deg, rgba(27,42,74,0.15), rgba(27,42,74,0.05)), url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'%3E%3Cline x1=\\'0\\' y1=\\'0\\' x2=\\'100\\' y2=\\'100\\' stroke=\\'%23C8A951\\' stroke-opacity=\\'0.1\\' stroke-width=\\'0.3\\'/%3E%3Cline x1=\\'100\\' y1=\\'0\\' x2=\\'0\\' y2=\\'100\\' stroke=\\'%23C8A951\\' stroke-opacity=\\'0.1\\' stroke-width=\\'0.3\\'/%3E%3C/svg%3E\")'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:var(--border);width:100%;margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'repeating-conic-gradient(rgba(27,42,74,0.04) 0deg 90deg, transparent 90deg 180deg), repeating-linear-gradient(45deg, rgba(200,169,81,0.02) 0px 2px, transparent 2px 4px)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background:rgba(255,245,230,0.07);mix-blend-mode:overlay;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#1B2A4A",
    "--color-card-foreground": "#1B2A4A",
    "--color-popover-foreground": "#1B2A4A",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#6B7A8D",
    "--color-primary": "#1B2A4A",
    "--color-ring": "#1B2A4A",
    "--color-primary-foreground": "#F5F0E8",
    "--color-secondary": "#C8A951",
    "--color-accent": "#C8A951",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#C8A951",
    "--color-input": "#C8A951",
    "--color-destructive": "#C42E2A"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#1B2A4A",
    "--card-foreground": "#1B2A4A",
    "--popover-foreground": "#1B2A4A",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#6B7A8D",
    "--primary": "#1B2A4A",
    "--ring": "#1B2A4A",
    "--primary-foreground": "#F5F0E8",
    "--secondary": "#C8A951",
    "--accent": "#C8A951",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#C8A951",
    "--input": "#C8A951",
    "--destructive": "#C42E2A"
  }
});
