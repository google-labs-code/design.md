registerSystem({
  "meta": {
    "name": "IKEA Assembly Instruction Language (Early Era)",
    "tagline": "Monochrome line art on warm off-white paper, bold step numbers in circles, dashed guide lines, stick-figure humans, geometric sans typography – a functional, nostalgic instruction manual aesthetic.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "IKEA Assembly Instruction Language (Early Era)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#F5F0E8",
      "on-surface": "#000000",
      "secondary": "#0051BA",
      "on-secondary": "#FFFFFF",
      "error": "#C0392B",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost, system-ui, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "none"
      },
      "headline": {
        "fontFamily": "Jost, system-ui, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost, system-ui, sans-serif",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Jost, system-ui, sans-serif",
        "fontSize": "12px",
        "fontWeight": 600,
        "lineHeight": 1,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "16px",
      "section-internal": "24px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "icon": "24px"
    },
    "components": {
      "step-panel": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "button-primary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.secondary}",
        "textColor": "{colors.on-secondary}",
        "padding": "16px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-destructive": {
        "backgroundColor": "#FFFFFF",
        "textColor": "{colors.error}",
        "rounded": "{rounded.chip}",
        "size": "40px",
        "height": "40px",
        "width": "40px"
      },
      "parts-list-card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "step-indicator-current": {
        "backgroundColor": "{colors.secondary}",
        "rounded": "{rounded.chip}",
        "size": "16px"
      },
      "step-indicator-inactive": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.chip}",
        "size": "16px"
      }
    },
    "version": "alpha",
    "description": "Monochrome, monoline line art on warm off‑white paper, using exploded isometric or orthographic views, bold step numbers in circles, dashed guide lines, stick‑figure humans in profile, and minimal text. The tone is instructive, nostalgic, and folk‑technical.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `ikea--aesthetic-assembly-instruction-language-early-era` refers to the visual language system used in IKEA furniture assembly instructions from the company's founding (1943) through the early‑to‑mid 1970s. This system is characteristically pictorial (minimal or no text, relying on universal symbols and line‑drawn diagrams), using isometric projection, step‑numbering, and a simplified hum",
      "manual_enrichment_required": false,
      "imagery_count": 7,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.ikeamuseum.com",
          "count": 3
        },
        {
          "host": "ikeahackers.net",
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
          "host": "www.prv.se",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.ikeamuseum.com/en/",
          "host": "www.ikeamuseum.com",
          "institution": "IKEA Museum, Älmhult, Sweden",
          "confidence_original": "low"
        },
        {
          "url": "https://www.ikeamuseum.com/en/",
          "host": "www.ikeamuseum.com",
          "institution": "IKEA Museum, Älmhult, Sweden",
          "confidence_original": "low"
        },
        {
          "url": "https://ikeahackers.net/",
          "host": "ikeahackers.net",
          "institution": "IKEA Hackers (fan site)",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/IKEA",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.vam.ac.uk/errors/404.html",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.prv.se/en/",
          "host": "www.prv.se",
          "institution": "Swedish Patent and Registration Office (PRV)",
          "confidence_original": "low"
        },
        {
          "url": "https://www.ikeamuseum.com/en/",
          "host": "www.ikeamuseum.com",
          "institution": "IKEA Museum, Älmhult, Sweden",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "IKEA logotype wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **Colour** – exact hex/PMS for early blue accent unknown; paper white point and brightness unknown."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0051BA",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#4A4A4A",
    "--border": "#000000",
    "--error": "#C0392B",
    "--font-display": "Jost, system-ui, sans-serif",
    "--font-body": "Jost, system-ui, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "error": "#C0392B",
    "on-error": "#FFFFFF",
    "disabled": "#A0A0A0",
    "err": "#C0392B",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#C0392B",
    "deltaFlat": "#4A4A4A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4A4A4A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "__comment": "Not applicable – this system does not support data dashboards or chart visualizations.",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4A4A4A",
    "fontFamily": "Jost, system-ui, sans-serif"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "svg feTurbulence",
      "parameters": "baseFrequency=0.8, numOctaves=3, type=fractalNoise",
      "opacity": 0.08,
      "blendMode": "multiply",
      "animation": "none"
    },
    "inkBleed": {
      "active": false,
      "intensity": "very faint",
      "surface": "line art"
    },
    "foldCrease": {
      "active": false,
      "intensity": "faint",
      "position": "gutter"
    }
  },
  "globalFilter": "<svg><defs><filter id='ikea-noise'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; image-rendering: auto; text-rendering: auto;",
  "globalCss": ".ds-layout-frame { background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ikea-noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ikea-noise)' opacity='0.08'/%3E%3C/svg%3E\"); background-repeat: repeat; background-blend-mode: multiply; }",
  "interactionModel": {
    "hover": {
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    },
    "active": {
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    },
    "focus": {
      "transitionDuration": "0ms",
      "transitionEasing": "none"
    },
    "exemptAnimations": "none"
  },
  "interactionStyles": "",
  "spacing": {
    "component-internal": "16px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "9999px"
  },
  "elevation": {
    "base": "z-0",
    "sticky": "z-20",
    "overlay": "z-40",
    "modal": "z-50",
    "shadow": "none"
  },
  "dashboardStyle": {
    "layout": "Not applicable – this design system is unsuitable for data dashboards. It is optimized for step-by-step instruction panels.",
    "density": "N/A",
    "panelTreatment": "N/A",
    "dataVizStyle": "N/A",
    "signatureElement": "N/A"
  },
  "landingStyle": {
    "heroApproach": "Not applicable – this design system is not intended for landing pages. It is designed for instructional stepper sequences.",
    "scrollBehavior": "N/A",
    "ctaStyle": "N/A",
    "signatureMoment": "N/A"
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Flat, border-only button used for primary actions like 'NEXT STEP'. No background, just a thin black outline and uppercase geometric sans label.",
      "html": "<button onmouseenter=\"this.style.background='var(--secondary-col)'; this.style.color='var(--on-secondary)'; this.style.borderColor='transparent';\" onmouseleave=\"this.style.background='transparent'; this.style.color='var(--primary)'; this.style.borderColor='var(--border)';\" style=\"background:transparent; border:1px solid var(--border); border-radius:var(--radius-btn); padding:16px; color:var(--primary); font-family:var(--font-body); font-size:14px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; cursor:pointer; transition:none;\">NEXT STEP</button>",
      "label": "button-primary",
      "note": "Flat, border-only button used for primary actions like 'NEXT STEP'. No background, just a thin black outline and uppercase geometric sans label."
    },
    {
      "name": "button-secondary",
      "desc": "Dashed border button for secondary or reversible actions like 'BACK'. Uses the same monochrome line-art treatment with a dashed outline.",
      "html": "<button onmouseenter=\"this.style.background='var(--secondary-col)'; this.style.color='var(--on-secondary)'; this.style.border='1px solid var(--secondary-col)';\" onmouseleave=\"this.style.background='transparent'; this.style.color='var(--primary)'; this.style.border='1px dashed var(--border)';\" style=\"background:transparent; border:1px dashed var(--border); border-radius:var(--radius-btn); padding:16px; color:var(--primary); font-family:var(--font-body); font-size:14px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; cursor:pointer; transition:none;\">BACK</button>",
      "label": "button-secondary",
      "note": "Dashed border button for secondary or reversible actions like 'BACK'. Uses the same monochrome line-art treatment with a dashed outline."
    },
    {
      "name": "button-destructive",
      "desc": "Circular label-like button for removal or errors. White fill with red text, using the chip border-radius (fully rounded). Used for 'NO' symbol in IKEA instructions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: #FFFFFF; border: 1px solid var(--error); border-radius: var(--radius-chip); width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center; color: var(--error); font-family: var(--font-body); font-size: 14px; font-weight: 600; cursor: pointer; transition: none;\">✕</button>",
      "label": "button-destructive",
      "note": "Circular label-like button for removal or errors. White fill with red text, using the chip border-radius (fully rounded). Used for 'NO' symbol in IKEA instructions."
    }
  ],
  "cards": [
    {
      "name": "step-panel",
      "desc": "Primary instruction panel. Contains a bold step number in a circle, an exploded isometric line drawing with dashed assembly guides, and an action verb label below. Background is warm off-white with paper grain.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 24px; position: relative;\">\n  <div style=\"display: flex; align-items: center; gap: 16px; margin-bottom: 24px;\">\n    <div style=\"width: 48px; height: 48px; border-radius: 9999px; border: 2px solid var(--secondary-col); display: flex; align-items: center; justify-content: center; background: var(--secondary-col); color: var(--on-secondary); font-family: var(--font-display); font-size: 24px; font-weight: 700; line-height: 1;\">1</div>\n    <span style=\"font-family: var(--font-headline); font-size: 24px; font-weight: 700; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">ASSEMBLE LEGS</span>\n  </div>\n  <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 16px;\">\n    <div style=\"border: 1px solid var(--border); height: 120px; display: flex; align-items: center; justify-content: center; padding: 16px;\">\n      <svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" style=\"color: var(--primary);\">\n        <rect x=\"10\" y=\"10\" width=\"60\" height=\"20\" stroke=\"currentColor\" fill=\"none\" />\n        <rect x=\"25\" y=\"30\" width=\"30\" height=\"40\" stroke=\"currentColor\" fill=\"none\" />\n        <line x1=\"40\" y1=\"30\" x2=\"40\" y2=\"70\" stroke=\"var(--secondary-col)\" stroke-width=\"1\" stroke-dasharray=\"4 2\" />\n      </svg>\n    </div>\n    <div style=\"border: 1px solid var(--border); height: 120px; display: flex; align-items: center; justify-content: center;\">\n      <svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" style=\"color: var(--primary);\">\n        <circle cx=\"40\" cy=\"20\" r=\"10\" stroke=\"currentColor\" fill=\"none\" />\n        <rect x=\"30\" y=\"30\" width=\"20\" height=\"40\" stroke=\"currentColor\" fill=\"none\" />\n        <line x1=\"35\" y1=\"35\" x2=\"20\" y2=\"55\" stroke=\"currentColor\" />\n        <line x1=\"45\" y1=\"35\" x2=\"60\" y2=\"55\" stroke=\"currentColor\" />\n      </svg>\n    </div>\n  </div>\n  <div style=\"margin-top: 16px; font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary); text-align: center;\">PUSH INTO PLACE</div>\n</div>",
      "label": "step-panel",
      "note": "Primary instruction panel. Contains a bold step number in a circle, an exploded isometric line drawing with dashed assembly guides, and an action verb label below. Background is warm off-white with paper grain."
    },
    {
      "name": "parts-list-card",
      "desc": "List of required parts with letter labels. Each row shows a part letter in a circle, description, and quantity. Uses monochrome line borders and minimal spacing.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 16px;\">\n  <div style=\"display: flex; flex-direction: column; gap: 12px;\">\n    <div style=\"display: flex; align-items: center; gap: 12px;\">\n      <div style=\"width: 32px; height: 32px; border-radius: 9999px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--primary);\">A</div>\n      <span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">SCREW M6</span>\n      <span style=\"margin-left: auto; font-family: var(--font-body); font-size: 12px; font-weight: 600; color: var(--primary);\">x4</span>\n    </div>\n    <div style=\"display: flex; align-items: center; gap: 12px;\">\n      <div style=\"width: 32px; height: 32px; border-radius: 9999px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--primary);\">B</div>\n      <span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">SHELF 600mm</span>\n      <span style=\"margin-left: auto; font-family: var(--font-body); font-size: 12px; font-weight: 600; color: var(--primary);\">x1</span>\n    </div>\n    <div style=\"display: flex; align-items: center; gap: 12px;\">\n      <div style=\"width: 32px; height: 32px; border-radius: 9999px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--primary);\">C</div>\n      <span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--primary);\">DOWEL 8mm</span>\n      <span style=\"margin-left: auto; font-family: var(--font-body); font-size: 12px; font-weight: 600; color: var(--primary);\">x8</span>\n    </div>\n  </div>\n</div>",
      "label": "parts-list-card",
      "note": "List of required parts with letter labels. Each row shows a part letter in a circle, description, and quantity. Uses monochrome line borders and minimal spacing."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line input with a thin black border and uppercase label. Designed for part number entry or search.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n  <label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--primary);\">PART NO.</label>\n  <input onfocus=\"this.style.border='2px solid var(--secondary-col)'\" onblur=\"this.style.border='1px solid var(--border)'\" type=\"text\" placeholder=\"e.g. 100.123.45\" style=\"background: transparent; border: 1px solid var(--border); border-radius: var(--radius-input); padding: 12px; font-family: var(--font-body); font-size: 14px; font-weight: 500; color: var(--primary); outline: none; transition: none;\" />\n</div>",
      "label": "text-input",
      "stateLabel": "Single-line input with a thin black border and uppercase label. Designed for part number entry or search."
    },
    {
      "name": "select-dropdown",
      "desc": "Native-like select with custom styling: monochrome border, uppercase label, and chevron indicator using SVG.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\">\n  <label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--primary);\">STEP</label>\n  <div style=\"position: relative;\">\n    <select onfocus=\"this.style.border='2px solid var(--secondary-col)'\" onblur=\"this.style.border='1px solid var(--border)'\" style=\"appearance: none; background: transparent; border: 1px solid var(--border); border-radius: var(--radius-input); padding: 12px 36px 12px 12px; font-family: var(--font-body); font-size: 14px; font-weight: 500; color: var(--primary); width: 100%; cursor: pointer; outline: none; transition: none;\">\n      <option value=\"1\">1 – LEGS</option>\n      <option value=\"2\">2 – SHELVES</option>\n      <option value=\"3\">3 – TOP</option>\n    </select>\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" style=\"position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none;\">\n      <polyline points=\"2,4 6,8 10,4\" stroke=\"currentColor\" fill=\"none\" />\n    </svg>\n  </div>\n</div>",
      "label": "select-dropdown",
      "stateLabel": "Native-like select with custom styling: monochrome border, uppercase label, and chevron indicator using SVG."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with a stencil-like checkmark. Uses only stroke and fill from the monochrome palette.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\">\n  <div style=\"position: relative; width: 20px; height: 20px; border: 1px solid var(--border); border-radius: 0; display: flex; align-items: center; justify-content: center;\">\n    <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"opacity: 0; position: absolute; width: 100%; height: 100%; cursor: pointer;\" />\n    <svg width=\"12\" height=\"12\" viewBox=\"0 0 12 12\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2\" style=\"display: none;\">\n      <polyline points=\"2,6 5,9 10,2\" stroke=\"currentColor\" fill=\"none\" />\n    </svg>\n  </div>\n  <label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--primary);\">CONFIRM</label>\n</div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with a stencil-like checkmark. Uses only stroke and fill from the monochrome palette."
    }
  ],
  "extraComponents": [
    {
      "name": "step-indicator",
      "desc": "Row of circular step numbers showing progress. Current step filled with blue, inactive steps outlined in black. Mirrors IKEA's step numbering convention.",
      "html": "<div style=\"display: flex; gap: 8px; align-items: center;\">\n  <div style=\"width: 28px; height: 28px; border-radius: 9999px; border: 2px solid var(--secondary-col); background: var(--secondary-col); display: flex; align-items: center; justify-content: center;\">\n    <span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; color: var(--on-secondary);\">1</span>\n  </div>\n  <div style=\"width: 28px; height: 28px; border-radius: 9999px; border: 2px solid var(--border); background: transparent; display: flex; align-items: center; justify-content: center;\">\n    <span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; color: var(--primary);\">2</span>\n  </div>\n  <div style=\"width: 28px; height: 28px; border-radius: 9999px; border: 2px solid var(--border); background: transparent; display: flex; align-items: center; justify-content: center;\">\n    <span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; color: var(--primary);\">3</span>\n  </div>\n</div>"
    },
    {
      "name": "stick-figure",
      "desc": "Simplified profile stick figure in action pose (e.g., pushing). Circle head, rectangular torso, angled limbs. Used to demonstrate human interaction with parts.",
      "html": "<svg width=\"60\" height=\"80\" viewBox=\"0 0 60 80\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" style=\"color: var(--primary);\">\n  <circle cx=\"30\" cy=\"12\" r=\"10\" stroke=\"currentColor\" fill=\"none\" />\n  <rect x=\"20\" y=\"22\" width=\"20\" height=\"30\" stroke=\"currentColor\" fill=\"none\" />\n  <line x1=\"20\" y1=\"30\" x2=\"8\" y2=\"50\" stroke=\"currentColor\" />\n  <circle cx=\"8\" cy=\"50\" r=\"3\" stroke=\"currentColor\" fill=\"none\" />\n  <line x1=\"40\" y1=\"30\" x2=\"52\" y2=\"50\" stroke=\"currentColor\" />\n  <circle cx=\"52\" cy=\"50\" r=\"3\" stroke=\"currentColor\" fill=\"none\" />\n  <line x1=\"25\" y1=\"52\" x2=\"15\" y2=\"72\" stroke=\"currentColor\" />\n  <line x1=\"35\" y1=\"52\" x2=\"45\" y2=\"72\" stroke=\"currentColor\" />\n</svg>"
    },
    {
      "name": "dashed-assembly-line",
      "desc": "Dashed guide line that visually connects two parts in an exploded view. Can be animated via stroke-dashoffset on page load.",
      "html": "<svg width=\"200\" height=\"40\" viewBox=\"0 0 200 40\" fill=\"none\" stroke=\"var(--secondary-col)\" stroke-width=\"1.5\" style=\"overflow: visible;\">\n  <line x1=\"10\" y1=\"20\" x2=\"190\" y2=\"20\" stroke=\"currentColor\" stroke-dasharray=\"8 4\" />\n  <circle cx=\"10\" cy=\"20\" r=\"6\" stroke=\"var(--border)\" fill=\"none\" />\n  <circle cx=\"190\" cy=\"20\" r=\"6\" stroke=\"var(--border)\" fill=\"none\" />\n</svg>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — 72</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — STEP 1</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — ASSEMBLE LEGS</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — A – SCREW M6</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — PUSH</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use gradients, shading, or multiple colors. The palette must remain strictly monochrome with a single blue accent for step highlights and 'no' symbols. Avoid any color blending or opacities other than the paper grain overlay.",
      "avoid": {
        "html": "<button style=\"background: linear-gradient(to right, #FF6B6B, #C0392B); border: none; border-radius: 9999px; padding: 16px 24px; color: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\">NEXT STEP</button>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients, shading, or multiple colors. The palette must remain strictly monochrome with a single blue accent for step highlights and 'no' symbols. Avoid any color blending or opacities other than the paper grain overlay.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use realistic human faces or front-facing poses. Stick figures must remain in profile or three-quarter view, with simple geometric shapes. Avoid any shading or anatomical detail.",
      "avoid": {
        "html": "<svg width=\"60\" height=\"80\" viewBox=\"0 0 60 80\" fill=\"#F5F0E8\" stroke=\"#000\" stroke-width=\"0.5\">\n  <ellipse cx=\"30\" cy=\"15\" rx=\"12\" ry=\"14\" fill=\"#F5F0E8\" />\n  <circle cx=\"30\" cy=\"15\" r=\"8\" fill=\"#000\" />\n  <path d=\"M30 28 Q30 45 30 60\" stroke=\"#000\" stroke-width=\"3\" fill=\"none\" />\n  <path d=\"M30 35 Q15 40 10 35\" stroke=\"#000\" stroke-width=\"3\" fill=\"none\" />\n  <path d=\"M30 35 Q45 40 50 35\" stroke=\"#000\" stroke-width=\"3\" fill=\"none\" />\n  <path d=\"M30 60 Q20 70 15 72\" stroke=\"#000\" stroke-width=\"3\" fill=\"none\" />\n  <path d=\"M30 60 Q40 70 45 72\" stroke=\"#000\" stroke-width=\"3\" fill=\"none\" />\n</svg>",
        "label": "Avoid"
      },
      "rule": "Do not use realistic human faces or front-facing poses. Stick figures must remain in profile or three-quarter view, with simple geometric shapes. Avoid any shading or anatomical detail.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use rounded corners on panels or buttons (except for step number circles and toggle chips). All containers must have sharp 90-degree corners to reflect the paper-and-ink construction.",
      "avoid": {
        "html": "<div style=\"background: #F5F0E8; border: 1px solid #000; border-radius: 12px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\">\n  <div style=\"border-radius: 8px; overflow: hidden;\">\n    <img src=\"\" alt=\"\" style=\"width: 100%;\" />\n  </div>\n</div>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on panels or buttons (except for step number circles and toggle chips). All containers must have sharp 90-degree corners to reflect the paper-and-ink construction.",
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
  "doAvoidStyle": {
    "description": "Avoid any visual treatment that adds depth, fluidity, or realism. The system is flat, monoline, and purely outline-based.",
    "rules": [
      "No shadows or elevation",
      "No gradients or color blends",
      "No rounded corners on structural elements",
      "No realistic anatomical detail",
      "No curved or organic shapes except circles for step numbers",
      "No smooth transitions or animations other than stepped keyframe lines"
    ]
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "surface": "#F5F0E8",
    "on-surface": "#000000",
    "secondary": "#0051BA",
    "on-secondary": "#FFFFFF",
    "error": "#C0392B",
    "outline": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost, system-ui, sans-serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "-0.025em"
    },
    "headline": {
      "fontFamily": "Jost, system-ui, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em"
    },
    "body": {
      "fontFamily": "Jost, system-ui, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.5,
      "letterSpacing": "0.025em"
    },
    "label": {
      "fontFamily": "Jost, system-ui, sans-serif",
      "fontSize": "12px",
      "fontWeight": 600,
      "lineHeight": 1,
      "letterSpacing": "0.05em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "INSTRUCTION SET // EARLY ERA",
      "heroHeadline": "EXPLODED VIEW",
      "heroSub": "Monochrome line art on warm off-white paper. Bold step circles. Dashed guide lines.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;border:2px solid #000000;color:#000000;padding:16px;font-family:Jost, system-ui, sans-serif;font-size:14px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">START ASSEMBLY</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;border:2px solid #000000;color:#000000;padding:16px;font-family:Jost, system-ui, sans-serif;font-size:14px;font-weight:500;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">EXPLORE PARTS</button>",
      "navLinks": [
        "STEPS",
        "PARTS",
        "GUIDES",
        "BLUEPRINTS"
      ],
      "features": [
        {
          "title": "STEP NUMBERING",
          "desc": "Bold numbers enclosed in circles guide each action.",
          "icon": "◉",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◉ STEP NUMBERING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Bold numbers enclosed in circles guide each action.</div></div>"
        },
        {
          "title": "DASHED GUIDES",
          "desc": "Dashed lines trace assembly paths and alignments.",
          "icon": "✂",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✂ DASHED GUIDES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Dashed lines trace assembly paths and alignments.</div></div>"
        },
        {
          "title": "PARTS LIST",
          "desc": "Each component is labelled with a letter and quantity.",
          "icon": "🔩",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔩 PARTS LIST</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Each component is labelled with a letter and quantity.</div></div>"
        },
        {
          "title": "STICK-FIGURE ACTIONS",
          "desc": "Simplified humans demonstrate push, slide, and turn moves.",
          "icon": "🧑",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧑 STICK-FIGURE ACTIONS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Simplified humans demonstrate push, slide, and turn moves.</div></div>"
        }
      ],
      "ctaStripHeadline": "ASSEMBLE WITH CONFIDENCE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;border:2px solid #000000;color:#000000;padding:16px;font-family:Jost, system-ui, sans-serif;font-size:14px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;\">VIEW FULL MANUAL</button>",
      "sidebarBrand": "IKEA ASSEMBLY",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "STEPS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "PARTS",
          "active": false
        }
      ],
      "dashboardTitle": "ASSEMBLY PROGRESS",
      "metrics": [
        {
          "label": "STEPS COMPLETE",
          "value": "3",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TIME ELAPSED",
          "value": "12 MIN",
          "delta": "+3 MIN",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PARTS COUNT",
          "value": "18",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "GUIDES FOLLOWED",
          "value": "4",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "ASSEMBLY PACE",
      "panelATitle": "INSTRUCTION PANEL",
      "panelARows": [
        {
          "label": "FRAME LEFT SIDE",
          "value": "INSERT",
          "pct": 0
        },
        {
          "label": "FRAME RIGHT SIDE",
          "value": "ALIGN",
          "pct": 0
        },
        {
          "label": "SHELF A",
          "value": "PUSH",
          "pct": 0
        },
        {
          "label": "SHELF B",
          "value": "TURN",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "PARTS LIST",
      "panelBCells": [
        {
          "label": "A – FRAME LEFT",
          "value": "1x",
          "state": "ok"
        },
        {
          "label": "B – FRAME RIGHT",
          "value": "1x",
          "state": "warn"
        },
        {
          "label": "C – SHELF",
          "value": "2x",
          "state": "err"
        },
        {
          "label": "D – SCREW",
          "value": "8x",
          "state": "ok"
        },
        {
          "label": "E – DOWEL",
          "value": "4x",
          "state": "warn"
        },
        {
          "label": "F – CAM LOCK",
          "value": "4x",
          "state": "err"
        },
        {
          "label": "G – KEY",
          "value": "1x",
          "state": "ok"
        },
        {
          "label": "H – TOOL",
          "value": "1x",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "STEP 1",
        "STEP 2",
        "STEP 3",
        "STEP 4",
        "STEP 5",
        "STEP 6"
      ],
      "series": [
        {
          "data": [
            4,
            8,
            12,
            14,
            16,
            18,
            18,
            18,
            18,
            18,
            18,
            18
          ],
          "label": "TOTAL PARTS",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            2,
            4,
            6,
            8,
            10,
            12,
            12,
            12,
            12,
            12,
            12,
            12
          ],
          "label": "FASTENERS",
          "axis": "right-1",
          "color": "#0051BA"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:320px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;padding:32px;'; el.innerHTML='<div style=\"display:flex;align-items:center;gap:16px;\"><div style=\"width:80px;height:80px;border-radius:9999px;border:2px solid var(--secondary-col);display:flex;align-items:center;justify-content:center;background:var(--secondary-col);color:var(--on-secondary);font-family:var(--font-display);font-size:36px;font-weight:700;line-height:1;\">1</div><div style=\"width:200px;height:4px;border-top:2px dashed var(--secondary-col);\"></div><div style=\"width:60px;height:80px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;\"><svg width=\"40\" height=\"60\" viewBox=\"0 0 40 60\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" style=\"color:var(--primary);\"><rect x=\"5\" y=\"5\" width=\"30\" height=\"50\" stroke=\"currentColor\" fill=\"none\"/><line x1=\"20\" y1=\"5\" x2=\"20\" y2=\"55\" stroke=\"var(--secondary-col)\" stroke-width=\"1\" stroke-dasharray=\"4 2\"/></svg></div></div><div style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:var(--primary);margin-top:16px;\">ASSEMBLE LEGS</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:24px;padding:24px;'; el.innerHTML='<div style=\"background:var(--surface);border:1px solid var(--border);padding:24px;\"><div style=\"display:flex;align-items:center;gap:12px;margin-bottom:16px;\"><div style=\"width:40px;height:40px;border-radius:9999px;border:2px solid var(--secondary-col);display:flex;align-items:center;justify-content:center;background:var(--secondary-col);color:var(--on-secondary);font-family:var(--font-display);font-size:20px;font-weight:700;\">2</div><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-transform:uppercase;color:var(--primary);\">ALIGN SHELF</span></div><div style=\"border:1px solid var(--border);height:120px;display:flex;align-items:center;justify-content:center;\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"1.5\" style=\"color:var(--primary);\"><rect x=\"10\" y=\"15\" width=\"60\" height=\"50\" stroke=\"currentColor\" fill=\"none\"/><line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"65\" stroke=\"var(--secondary-col)\" stroke-width=\"1\" stroke-dasharray=\"6 3\"/></svg></div><div style=\"margin-top:12px;font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--primary);text-align:center;\">PUSH INTO PLACE</div></div><div style=\"background:var(--surface);border:1px solid var(--border);padding:24px;\"><div style=\"font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--primary);margin-bottom:12px;\">PARTS LIST</div><div style=\"display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:24px;height:24px;border-radius:9999px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--primary);\">A</div><span style=\"font-family:var(--font-body);font-size:14px;font-weight:500;color:var(--primary);\">SCREW M6</span><span style=\"margin-left:auto;font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--primary);\">x4</span></div><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:24px;height:24px;border-radius:9999px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--primary);\">B</div><span style=\"font-family:var(--font-body);font-size:14px;font-weight:500;color:var(--primary);\">SHELF 600mm</span><span style=\"margin-left:auto;font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--primary);\">x1</span></div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:24px;background:var(--surface);border:1px solid var(--border);'; el.innerHTML='<div style=\"font-family:var(--font-body);font-size:12px;font-weight:600;text-transform:uppercase;color:var(--primary);margin-bottom:16px;\">ASSEMBLY PROGRESS</div><div style=\"display:flex;flex-direction:column;gap:12px;\"><div style=\"display:flex;align-items:center;gap:12px;\"><div style=\"width:28px;height:28px;border-radius:9999px;border:2px solid var(--secondary-col);background:var(--secondary-col);display:flex;align-items:center;justify-content:center;\"><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--on-secondary);\">1</span></div><span style=\"font-family:var(--font-body);font-size:14px;font-weight:500;color:var(--primary);\">LEGS</span><span style=\"margin-left:auto;font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--secondary-col);\">DONE</span></div><div style=\"display:flex;align-items:center;gap:12px;\"><div style=\"width:28px;height:28px;border-radius:9999px;border:2px solid var(--border);background:transparent;display:flex;align-items:center;justify-content:center;\"><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--primary);\">2</span></div><span style=\"font-family:var(--font-body);font-size:14px;font-weight:500;color:var(--primary);\">SHELVES</span><span style=\"margin-left:auto;font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--on-bg-muted);\">PENDING</span></div><div style=\"display:flex;align-items:center;gap:12px;\"><div style=\"width:28px;height:28px;border-radius:9999px;border:2px solid var(--border);background:transparent;display:flex;align-items:center;justify-content:center;\"><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;color:var(--primary);\">3</span></div><span style=\"font-family:var(--font-body);font-size:14px;font-weight:500;color:var(--primary);\">TOP</span><span style=\"margin-left:auto;font-family:var(--font-body);font-size:12px;font-weight:600;color:var(--on-bg-muted);\">PENDING</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background='var(--surface)'; }",
    "ctaBackground": "function(el) { el.style.background='var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--border);width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%'); var line = document.createElementNS('http://www.w3.org/2000/svg', 'line'); line.setAttribute('x1', '0'); line.setAttribute('y1', '50%'); line.setAttribute('x2', '100%'); line.setAttribute('y2', '50%'); line.setAttribute('stroke', 'var(--primary)'); line.setAttribute('stroke-width', '1.5'); line.setAttribute('stroke-dasharray', '8 4'); line.setAttribute('stroke-dashoffset', (tick % 200).toString()); svg.appendChild(line); el.appendChild(svg); }",
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#4A4A4A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#0051BA",
    "--color-accent": "#0051BA",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#C0392B"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#4A4A4A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#0051BA",
    "--accent": "#0051BA",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#C0392B"
  }
});
