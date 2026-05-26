registerSystem({
  "meta": {
    "name": "IRS Tax Form 1040 Layout System",
    "tagline": "Dense monochrome grid with hairline rules and 6pt baseline – a bureaucratic paper aesthetic",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@300;400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "IRS Tax Form 1040 Layout System",
    "colors": {
      "hex_primary": "#000000",
      "hex_secondary": "#FDFBF7",
      "on-surface": "#000000",
      "outline": "#000000",
      "outline-variant": "#000000",
      "error": "#000000",
      "inverse-surface": "#000000",
      "inverse-on-surface": "#FDFBF7",
      "surface-container": "#F5F2EE",
      "color": "#000000",
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "secondary": "#F5F2EE",
      "surface": "#F5F2EE",
      "on-secondary": "#FFFFFF"
    },
    "typography": {},
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px"
    },
    "spacing": {
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "24px",
      "gap-section": "8px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.on-surface}",
        "padding": "4px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}"
      }
    },
    "version": "alpha",
    "description": "A design system based on IRS Tax Form 1040 Layout System.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `irs-tax-form-1040-layout-system` refers to the visual identity and page-layout system of the U.S. Internal Revenue Service Form 1040, the primary individual income tax return form. This identity consists of a functional, government‑bureaucratic document system — not a commercial brand — encompassing the physical form's grid, typography, colour palette, official marks (IRS seal, Departmen",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.irs.gov",
          "count": 3
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.gpo.gov",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.irs.gov/pub/irs-pdf/f1040.pdf",
          "host": "www.irs.gov",
          "institution": "Internal Revenue Service",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Form_1040",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.gpo.gov/",
          "host": "www.gpo.gov",
          "institution": "U.S. Government Publishing Office",
          "confidence_original": "low"
        },
        {
          "url": "https://www.irs.gov/pub/irs-prior/f1040--2020.pdf",
          "host": "www.irs.gov",
          "institution": "Internal Revenue Service",
          "confidence_original": "low"
        },
        {
          "url": "https://www.irs.gov/",
          "host": "www.irs.gov",
          "institution": "Internal Revenue Service",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        },
        {
          "name": "Arial Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Arimo",
          "attestation": "inferred"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Times New Roman",
          "foundry": null,
          "year": null,
          "google_fonts": "Tinos",
          "attestation": "inferred"
        },
        {
          "name": "Courier New",
          "foundry": null,
          "year": null,
          "google_fonts": "Courier Prime",
          "attestation": "attested"
        },
        {
          "name": "Helvetica Narrow Condensed",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        }
      ],
      "flags": [
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour specifications** — exact Pantone or CMYK values for red and blue, tint percentage for gray shading. *Resolved by": "* finding an internal GPO specification or a GPO printer’s colour‑chip book for the form.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FDFBF7",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#F5F2EE",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F2EE",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Courier Prime",
    "--font-body": "IBM Plex Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "outline": "#000000",
    "outline-variant": "#000000",
    "error": "#000000",
    "inverse-surface": "#000000",
    "inverse-on-surface": "#FDFBF7",
    "surface-container": "#F5F2EE",
    "surface-container-high": "#E8DCC6",
    "on-surface": "#000000",
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "err": "#000000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#000000",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "IBM Plex Mono"
  },
  "chartStyle": {
    "background": "#FDFBF7",
    "fontFamily": "Courier Prime",
    "gridColor": "#000000",
    "gridStyle": "dashed",
    "lineColor": "#000000",
    "lineWidth": 0.5,
    "axisColor": "#000000",
    "barFill": "#000000",
    "labelColor": "#000000",
    "valueColor": "#000000"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "texture": "feTurbulence",
      "baseFrequency": 0.65,
      "numOctaves": 3,
      "type": "fractalNoise",
      "opacity": 0.03,
      "blend": "overlay",
      "color": "monochrome"
    }
  },
  "interactionModel": {
    "hover": {
      "transitionDuration": "0ms",
      "transitionEasing": "none",
      "border": "none"
    },
    "focus": {
      "outline": "2px solid var(--primary)",
      "outlineOffset": "1px",
      "transitionDuration": "0ms"
    },
    "active": {
      "boxShadow": "inset 0 0 0 2px var(--primary)",
      "transitionDuration": "0ms"
    }
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "24px 16px",
    "gap-section": "8px",
    "input-height": "24px",
    "checkbox-size": "12px",
    "signature-line-height": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "shadow-sm": "none",
    "shadow-md": "none",
    "shadow-lg": "none",
    "shadow-xl": "none"
  },
  "dashboardStyle": {
    "layout": "not applicable",
    "density": "not applicable",
    "panelTreatment": "none",
    "dataVizStyle": "none",
    "signatureElement": "none"
  },
  "landingStyle": {
    "heroApproach": "none",
    "scrollBehavior": "none",
    "ctaStyle": "none",
    "signatureMoment": "none"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='irs1040-noise' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0.03 0' in='noise' result='coloredNoise'/><feBlend in='SourceGraphic' in2='coloredNoise' mode='overlay'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); font-size: 12px; line-height: 1.25; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;",
  "globalCss": ".ds-layout-frame { position: relative; } .ds-layout-frame::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; mix-blend-mode: overlay; opacity: 1; filter: url(#irs1040-noise); z-index: 10000; } .ds-layout-frame ::selection { background: #000000; color: #FDFBF7; } .ds-layout-frame ::-moz-focus-inner { border: 0; }",
  "interactionStyles": ".ds-layout-frame *:focus { outline: 2px solid #000000; outline-offset: 1px; } .ds-layout-frame *:active { box-shadow: inset 0 0 0 2px #000000; } .ds-layout-frame input:disabled, .ds-layout-frame button:disabled { opacity: 0.5; border-style: dashed; } .ds-layout-frame * { transition: none; }",
  "buttons": [
    {
      "name": "primary",
      "desc": "Standard action button – transparent background, black hairline border, monospace all-caps text. Active state inverts colours.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 0.5px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; height: 24px; padding: 4px 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;\">File</button>",
      "label": "primary",
      "note": "Standard action button – transparent background, black hairline border, monospace all-caps text. Active state inverts colours."
    },
    {
      "name": "secondary",
      "desc": "Thicker border variant for secondary actions. Same shape, slightly heavier visual weight.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; height: 24px; padding: 4px 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: none;\">Save</button>",
      "label": "secondary",
      "note": "Thicker border variant for secondary actions. Same shape, slightly heavier visual weight."
    },
    {
      "name": "ghost",
      "desc": "Text-only button with no border. Active state inverts background to black.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: none; border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; height: 24px; padding: 4px 8px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; transition: none;\">Cancel</button>",
      "label": "ghost",
      "note": "Text-only button with no border. Active state inverts background to black."
    }
  ],
  "cards": [
    {
      "name": "section-container",
      "desc": "A rectangular panel with a full hairline border and transparent fill. Used to group line items with internal dashed dividers.",
      "html": "<div style=\"border: 0.5px solid var(--border); border-radius: var(--radius-card); background: transparent; padding: 8px; margin: 0;\"> <div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; border-bottom: 0.5px dashed var(--border); padding-bottom: 4px; margin-bottom: 4px;\">Line Item 1</div> <div style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-bg);\">$ 1,000</div> </div>",
      "label": "section-container",
      "note": "A rectangular panel with a full hairline border and transparent fill. Used to group line items with internal dashed dividers."
    },
    {
      "name": "double-rule-total",
      "desc": "Encloses a total amount with thick solid top and bottom rules. The value is right-aligned in bold monospace with a leading $.",
      "html": "<div style=\"border-top: 2px solid var(--border); border-bottom: 2px solid var(--border); background: transparent; padding: 4px 8px;\"> <div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-align: right;\">$ 2,500</div> </div>",
      "label": "double-rule-total",
      "note": "Encloses a total amount with thick solid top and bottom rules. The value is right-aligned in bold monospace with a leading $."
    }
  ],
  "forms": [
    {
      "name": "text-input-dollar",
      "desc": "A sharp rectangular input box with a right-aligned value and a left-aligned $ prefix outside the field.",
      "html": "<div style=\"display: flex; align-items: center; border: 0.5px solid var(--border); border-radius: var(--radius-default); height: 24px; background: transparent;\"> <span style=\"padding: 0 4px; font-family: var(--font-display); font-size: 12px;\">$</span> <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"500\" style=\"border: none; background: transparent; font-family: var(--font-body); font-size: 12px; text-align: right; flex: 1; outline: none; padding: 0 4px; color: var(--on-bg);\" /> </div>",
      "label": "text-input-dollar",
      "stateLabel": "A sharp rectangular input box with a right-aligned value and a left-aligned $ prefix outside the field."
    },
    {
      "name": "select-dropdown",
      "desc": "A rectangular dropdown with a custom arrow made from CSS borders. No icons.",
      "html": "<div style=\"position: relative; border: 0.5px solid var(--border); border-radius: var(--radius-default); height: 24px; background: transparent;\"> <select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"appearance: none; -webkit-appearance: none; -moz-appearance: none; border: none; background: transparent; font-family: var(--font-body); font-size: 12px; color: var(--on-bg); width: 100%; height: 100%; padding: 0 8px; cursor: pointer; outline: none;\"> <option>Option 1</option> <option>Option 2</option> </select> <div style=\"position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid var(--border); pointer-events: none;\"></div> </div>",
      "label": "select-dropdown",
      "stateLabel": "A rectangular dropdown with a custom arrow made from CSS borders. No icons."
    },
    {
      "name": "checkbox-dotted",
      "desc": "A perfectly square checkbox with a dotted border and transparent fill. Checked state shows an X using text.",
      "html": "<div style=\"display: flex; align-items: center;\"> <div style=\"width: 12px; height: 12px; border: 1px dotted var(--border); border-radius: var(--radius-default); display: flex; align-items: center; justify-content: center; margin-right: 4px;\">X</div> <span style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-bg);\">Agree</span> </div>",
      "label": "checkbox-dotted",
      "stateLabel": "A perfectly square checkbox with a dotted border and transparent fill. Checked state shows an X using text."
    }
  ],
  "extraComponents": [
    {
      "name": "line-item",
      "desc": "A single data row consisting of a line number gutter (right-aligned number separated by vertical hairline), a label, and a data entry field. Hairline rule below.",
      "html": "<div style=\"display: flex; align-items: center; border-bottom: 0.5px solid var(--border); padding: 2px 0;\"> <div style=\"width: 48px; text-align: right; font-family: var(--font-display); font-size: 12px; font-weight: 700; padding-right: 4px; border-right: 0.5px solid var(--border); margin-right: 8px;\">01</div> <div style=\"flex: 1; font-family: var(--font-body); font-size: 12px;\">Wages, salaries, tips</div> <div style=\"font-family: var(--font-display); font-size: 12px; text-align: right;\">$ 0.00</div> </div>"
    },
    {
      "name": "section-header",
      "desc": "Thick solid rule above an all-caps monospace heading, followed by a thin hairline rule before the first line item.",
      "html": "<div style=\"margin: 8px 0 4px 0;\"> <div style=\"border-top: 2px solid var(--border); margin-bottom: 4px;\"></div> <div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;\">Income</div> <div style=\"border-top: 0.5px solid var(--border); margin-top: 4px;\"></div> </div>"
    },
    {
      "name": "signature-line",
      "desc": "A fixed-width underscore line with an italic label below, simulating a handwritten signature area.",
      "html": "<div style=\"margin: 16px 0;\"> <div style=\"border-bottom: 1px solid var(--border); width: 200px; margin-bottom: 4px;\"></div> <div style=\"font-family: var(--font-body); font-size: 10px; font-style: italic; color: var(--on-bg);\">Your signature</div> </div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — FORM 1040 U.S. INDIVIDUAL INCOME TAX RETURN</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — INCOME</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — ADJUSTED GROSS INCOME</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Wages, salaries, tips, etc. Attach Form(s) W-2.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SOCIAL SECURITY NUMBER</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Using colour or icons – a button with a blue background and a checkmark icon breaks the monochrome, no-icon rule.",
      "avoid": {
        "html": "<button style=\"background: blue; color: white; border-radius: 4px; padding: 8px 16px; font-family: sans-serif;\">✓ Submit</button>",
        "label": "Avoid"
      },
      "rule": "Using colour or icons – a button with a blue background and a checkmark icon breaks the monochrome, no-icon rule.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Rounded corners on a container – a card with border-radius: 8px softens the bureaucratic rigidity.",
      "avoid": {
        "html": "<div style=\"border: 1px solid black; border-radius: 8px; padding: 16px; background: white;\">Content</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on a container – a card with border-radius: 8px softens the bureaucratic rigidity.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Loose leading and generous whitespace – adding vertical padding inside line items wastes space and violates the 6pt baseline.",
      "avoid": {
        "html": "<div style=\"border-bottom: 1px solid black; padding: 16px 0; margin-bottom: 16px;\">Line item with too much space</div>",
        "label": "Avoid"
      },
      "rule": "Loose leading and generous whitespace – adding vertical padding inside line items wastes space and violates the 6pt baseline.",
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
      "heroKicker": "TAX YEAR 2024 — FINAL DRAFT",
      "heroHeadline": "INDIVIDUAL INCOME TAX RETURN",
      "heroSub": "FORM 1040 (REV. 2024) — DEPARTMENT OF THE TREASURY — INTERNAL REVENUE SERVICE",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"border:0.5pt solid black; background:transparent; color:black; font-family:\\x27Courier Prime\\x27,monospace; font-size:12px; text-transform:uppercase; padding:4px 8px; border-radius:0;\">BEGIN PREPARATION</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"border:0.5pt dashed black; background:transparent; color:black; font-family:\\x27Courier Prime\\x27,monospace; font-size:12px; text-transform:uppercase; padding:4px 8px; border-radius:0;\">LOAD PRIOR RETURN</button>",
      "navLinks": [
        "FORM 1040",
        "SCHEDULE 1",
        "SCHEDULE A",
        "INSTRUCTIONS",
        "E-FILE"
      ],
      "features": [
        {
          "title": "LINE NUMBER GUTTER",
          "desc": "Right-aligned line numbers separated by vertical hairline. Ensures precise referencing for all entries.",
          "icon": "¶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">¶ LINE NUMBER GUTTER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Right-aligned line numbers separated by vertical hairline. Ensures precise referencing for all entries.</div></div>"
        },
        {
          "title": "DOUBLE RULE TOTALS",
          "desc": "Thick solid rules above and below total amounts. Bold monospace with leading $ prefix.",
          "icon": "¶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">¶ DOUBLE RULE TOTALS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Thick solid rules above and below total amounts. Bold monospace with leading $ prefix.</div></div>"
        },
        {
          "title": "HAIRLINE SECTION GRID",
          "desc": "0.5pt rules between line items. Thick 2pt rule precedes each section heading. No wasted space.",
          "icon": "¶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">¶ HAIRLINE SECTION GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">0.5pt rules between line items. Thick 2pt rule precedes each section heading. No wasted space.</div></div>"
        },
        {
          "title": "SIGNATURE LINE",
          "desc": "Fixed-width underscore with italic label below. Matches official IRS signature block specification.",
          "icon": "¶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">¶ SIGNATURE LINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Fixed-width underscore with italic label below. Matches official IRS signature block specification.</div></div>"
        }
      ],
      "ctaStripHeadline": "FILE YOUR RETURN WITH CONFIDENCE — PAPER GRAIN SIMULATION INCLUDED",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"border:0.5pt solid black; background:black; color:#FDFBF7; font-family:\\x27Courier Prime\\x27,monospace; font-size:12px; text-transform:uppercase; padding:4px 8px; border-radius:0;\">SUBMIT TO IRS</button>",
      "sidebarBrand": "IRS FORM 1040 SYSTEM",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "QUICK REFERENCE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "LINE-BY-LINE",
          "active": false
        }
      ],
      "dashboardTitle": "RETURN SUMMARY — LINE ITEM OVERVIEW",
      "metrics": [
        {
          "label": "LINE 1 (WAGES)",
          "value": "$72,350.00",
          "delta": "+3.2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LINE 2 (INTEREST)",
          "value": "$1,240.50",
          "delta": "-0.8%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "LINE 3 (DIVIDENDS)",
          "value": "$4,810.00",
          "delta": "+12.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "LINE 4 (CAPITAL GAINS)",
          "value": "$8,300.00",
          "delta": "+5.4%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "TAX LIABILITY PROJECTION — MONTHLY WITHHOLDING",
      "panelATitle": "SCHEDULE A — ITEMIZED DEDUCTIONS",
      "panelARows": [
        {
          "label": "MEDICAL EXPENSES",
          "value": "$2,340.00",
          "pct": 2
        },
        {
          "label": "STATE TAXES PAID",
          "value": "$6,210.00",
          "pct": 6
        },
        {
          "label": "MORTGAGE INTEREST",
          "value": "$9,500.00",
          "pct": 9
        },
        {
          "label": "CHARITABLE CONTRIBUTIONS",
          "value": "$1,800.00",
          "pct": 1
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TAX CREDITS AND PAYMENTS",
      "panelBCells": [
        {
          "label": "CHILD TAX CREDIT",
          "value": "$4,000.00",
          "state": "ok"
        },
        {
          "label": "EITC",
          "value": "$1,500.00",
          "state": "warn"
        },
        {
          "label": "WITHHOLDING",
          "value": "$12,340.00",
          "state": "err"
        },
        {
          "label": "ESTIMATED PAYMENTS",
          "value": "$3,000.00",
          "state": "ok"
        },
        {
          "label": "REFUNDABLE CREDITS",
          "value": "$2,100.00",
          "state": "warn"
        },
        {
          "label": "NONREFUNDABLE CREDITS",
          "value": "$1,200.00",
          "state": "err"
        },
        {
          "label": "OTHER PAYMENTS",
          "value": "$500.00",
          "state": "ok"
        },
        {
          "label": "TOTAL PAYMENTS",
          "value": "$24,640.00",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN"
      ],
      "series": [
        {
          "data": [
            1200,
            1100,
            1300,
            1250,
            1400,
            1350,
            1350,
            1350,
            1350,
            1350,
            1350,
            1350
          ],
          "label": "WITHHELD",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000
          ],
          "label": "ESTIMATED",
          "axis": "right-1",
          "color": "#F5F2EE"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:280px;background:var(--bg);color:var(--on-bg);font-family:var(--font-display);padding:12px 8px;'; el.innerHTML = '<div style=\"border-top:2px solid var(--border);margin-bottom:4px;\"></div><div style=\"font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;\">U.S. INDIVIDUAL INCOME TAX RETURN</div><div style=\"font-size:10px;text-transform:uppercase;letter-spacing:0.3px;border-bottom:0.5px solid var(--border);padding-bottom:4px;margin-bottom:8px;\">FORM 1040 (REV. 2024) — DEPARTMENT OF THE TREASURY — INTERNAL REVENUE SERVICE</div><div style=\"display:flex;border-bottom:0.5px solid var(--border);padding:2px 0;\"><div style=\"width:48px;text-align:right;font-size:12px;font-weight:700;padding-right:4px;border-right:0.5px solid var(--border);margin-right:8px;\">01</div><div style=\"flex:1;font-family:var(--font-body);font-size:12px;\">Wages, salaries, tips, etc.</div><div style=\"font-family:var(--font-display);font-size:12px;text-align:right;\">$ 0.00</div></div><div style=\"display:flex;border-bottom:0.5px solid var(--border);padding:2px 0;\"><div style=\"width:48px;text-align:right;font-size:12px;font-weight:700;padding-right:4px;border-right:0.5px solid var(--border);margin-right:8px;\">02</div><div style=\"flex:1;font-family:var(--font-body);font-size:12px;\">Taxable interest</div><div style=\"font-family:var(--font-display);font-size:12px;text-align:right;\">$ 0.00</div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'background:var(--bg);color:var(--on-bg);font-family:var(--font-body);padding:8px;'; el.innerHTML = '<div style=\"margin-bottom:8px;\"><div style=\"border-top:2px solid var(--border);margin-bottom:4px;\"></div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;\">INCOME</div><div style=\"border-top:0.5px solid var(--border);margin-top:4px;\"></div></div><div style=\"display:flex;border-bottom:0.5px solid var(--border);padding:2px 0;\"><div style=\"width:48px;text-align:right;font-family:var(--font-display);font-size:12px;font-weight:700;padding-right:4px;border-right:0.5px solid var(--border);margin-right:8px;\">01</div><div style=\"flex:1;font-size:12px;\">Wages, salaries, tips, etc. Attach Form(s) W-2</div><div style=\"font-family:var(--font-display);font-size:12px;text-align:right;\">$ 72,350.00</div></div><div style=\"display:flex;border-bottom:0.5px solid var(--border);padding:2px 0;\"><div style=\"width:48px;text-align:right;font-family:var(--font-display);font-size:12px;font-weight:700;padding-right:4px;border-right:0.5px solid var(--border);margin-right:8px;\">02</div><div style=\"flex:1;font-size:12px;\">Taxable interest</div><div style=\"font-family:var(--font-display);font-size:12px;text-align:right;\">$ 1,240.50</div></div><div style=\"border-top:2px solid var(--border);border-bottom:2px solid var(--border);margin-top:8px;padding:4px 0;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-align:right;\">$ 73,590.50</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--bg);color:var(--on-bg);font-family:var(--font-body);padding:8px;'; el.innerHTML = '<div><div style=\"border-top:2px solid var(--border);margin-bottom:4px;\"></div><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;\">SCHEDULE A — ITEMIZED DEDUCTIONS</div><div style=\"border-top:0.5px solid var(--border);margin-top:4px;\"></div></div><div style=\"display:flex;justify-content:space-between;font-size:12px;padding:2px 0;border-bottom:0.5px dashed var(--border);\"><span>MEDICAL EXPENSES</span><span style=\"font-family:var(--font-display);font-weight:700;\">$ 2,340.00</span></div><div style=\"display:flex;justify-content:space-between;font-size:12px;padding:2px 0;border-bottom:0.5px dashed var(--border);\"><span>STATE TAXES PAID</span><span style=\"font-family:var(--font-display);font-weight:700;\">$ 6,210.00</span></div><div style=\"display:flex;justify-content:space-between;font-size:12px;padding:2px 0;border-bottom:0.5px dashed var(--border);\"><span>MORTGAGE INTEREST</span><span style=\"font-family:var(--font-display);font-weight:700;\">$ 9,500.00</span></div><div style=\"display:flex;justify-content:space-between;font-size:12px;padding:2px 0;border-bottom:0.5px dashed var(--border);\"><span>CHARITABLE CONTRIBUTIONS</span><span style=\"font-family:var(--font-display);font-weight:700;\">$ 1,800.00</span></div><div style=\"border-top:2px solid var(--border);border-bottom:2px solid var(--border);margin-top:8px;padding:4px 0;\"><div style=\"display:flex;justify-content:space-between;font-size:12px;font-weight:700;\"><span>TOTAL DEDUCTIONS</span><span style=\"font-family:var(--font-display);\">$ 19,850.00</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FDFBF7'; }",
    "ctaBackground": "function(el) { el.style.background = '#FDFBF7'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:0;border-top:2px solid var(--border);width:100%;margin:4px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FDFBF7'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(canvas, tokens, tick) { var ctx = canvas.getContext('2d'); ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.strokeStyle = tokens['--primary']; ctx.lineWidth = 1; var y = (tick * 0.02) % canvas.height; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }",
  "shadcnTokens": {
    "--color-background": "#FDFBF7",
    "--color-popover": "#FDFBF7",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F2EE",
    "--color-muted": "#F5F2EE",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#F5F2EE",
    "--color-accent": "#F5F2EE",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#FDFBF7",
    "--popover": "#FDFBF7",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F2EE",
    "--muted": "#F5F2EE",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#F5F2EE",
    "--accent": "#F5F2EE",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
