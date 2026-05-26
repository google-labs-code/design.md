registerSystem({
  "meta": {
    "name": "Nutrition Facts Panel",
    "tagline": "Strict black-on-white data interface inspired by the iconic US FDA Nutrition Facts label",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Libre+Franklin:wght@700&display=swap"
  },
  "yamlTokens": {
    "name": "Nutrition Facts Panel",
    "colors": {
      "text-primary": "#000000",
      "surface": "#FFFFFF",
      "surface-warm": "#F9F6EE",
      "accent": "#FF0000",
      "ok": "#000000",
      "warn": "#000000",
      "err": "#FF0000",
      "delta-up": "#000000",
      "delta-down": "#FF0000",
      "delta-flat": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Libre Franklin",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "0em"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "gap-section": "4px"
    },
    "components": {
      "card-panel": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.text-primary}",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "metric-cell": {
        "backgroundColor": "transparent",
        "textColor": "{colors.text-primary}"
      },
      "status-cell": {
        "backgroundColor": "transparent",
        "textColor": "{colors.text-primary}"
      }
    },
    "version": "alpha",
    "description": "A data-interface style derived from US food labels, characterized by strict black-on-white, dense typographic grid, horizontal rules, and no decoration.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `nutrition-label` refers to the standardized Nutrition Facts label (also called the Nutrition Facts panel) mandated by the U.S. Food and Drug Administration (FDA) for packaged foods and dietary supplements. The canonical form debuted in 1993 under the Nutrition Labeling and Education Act (NLEA), with a major revision effective in 2018 (the 2016‑finalized rule). This record documents t",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.fda.gov",
          "count": 2
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "unblock.federalregister.gov",
          "count": 1
        },
        {
          "host": "www.govinfo.gov",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.fda.gov/media/99069/download",
          "host": "www.fda.gov",
          "institution": "U.S. Food and Drug Administration",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Nutrition_facts_label",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://unblock.federalregister.gov/",
          "host": "unblock.federalregister.gov",
          "institution": "U.S. Government Publishing Office (eCFR)",
          "confidence_original": "high"
        },
        {
          "url": "https://www.govinfo.gov/app/details/FR-2016-05-27/2016-11867",
          "host": "www.govinfo.gov",
          "institution": "U.S. Government Publishing Office (GovInfo)",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.fda.gov/media/99071/download",
          "host": "www.fda.gov",
          "institution": "U.S. Food and Drug Administration",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Franklin Gothic Heavy",
          "foundry": "American Type Founders",
          "year": 1903,
          "google_fonts": "Libre Franklin",
          "attestation": "conventional"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **Exact typeface name for body text.** The regulation says “a sans‑serif type.” Franklin Gothic Heavy is attested for the title; the body is most commonly Helvetica or Arial, but which font was used on the *first* official prototype is not documented."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#FF0000",
    "--on-primary": "#151515",
    "--secondary-col": "#F9F6EE",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#FF0000",
    "--font-display": "Libre Franklin",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#000000",
    "warn": "#000000",
    "err": "#FF0000",
    "delta-up": "#000000",
    "delta-down": "#FF0000",
    "delta-flat": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#FF0000",
    "deltaFlat": "#000000",
    "live": "#FF0000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "chartStyle": {
    "type": "none",
    "colorPalette": [],
    "fontFamily": "Inter",
    "gridLines": "none",
    "axis": "none",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": "subtle",
      "grainFilter": "url(#paper-grain)"
    }
  },
  "interactionModel": {
    "hover": {
      "opacity": 0.95
    },
    "focus": {
      "outline": "2px solid var(--border)",
      "outlineOffset": "1px"
    },
    "active": {
      "opacity": 0.85
    }
  },
  "spacing": {
    "component-internal": "2px",
    "section-internal": "4px",
    "page-edge": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "chip": "0px"
  },
  "elevation": {
    "level0": {
      "boxShadow": "none"
    },
    "level1": {
      "boxShadow": "none"
    }
  },
  "dashboardStyle": {
    "layout": "Single-column vertical stack, max-width 450px, centered. No sidebars or nested panels.",
    "density": "High. Every row separated by a hairline rule. Minimal whitespace (2px internal padding).",
    "panelTreatment": "All panels follow the Nutrition Facts card style: white background, black border, double rules at top and bottom, internal hairline rules.",
    "dataVizStyle": "Text-only. No charts, graphs, or progress bars. Percentage Daily Value displayed as a right-aligned numeric string.",
    "signatureElement": "Double-headed rule line (two parallel hairlines) at the top and bottom of every major panel."
  },
  "landingStyle": {
    "heroApproach": "A large, centered 'Nutrition Facts' header in display type, followed by a vertical stack of key metrics with thick rules.",
    "scrollBehavior": "Smooth, simple. No parallax or sticky elements. Content scrolls naturally in a single column.",
    "ctaStyle": "Solid black button with white text, or a ghost button for secondary actions. No rounded corners or shadows.",
    "signatureMoment": "The panel appears as a white box with double rules at top and bottom, framed by a black border, instantly recognizable as the FDA label."
  },
  "globalFilter": "<svg><defs><filter id='paper-grain'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.03 0' in='noise' result='coloredNoise'/><feBlend in='SourceGraphic' in2='coloredNoise' mode='multiply'/></filter></defs></svg>",
  "globalBodyCss": "background-color: var(--bg); color: var(--on-bg); font-family: var(--font-body); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { border: 1px solid var(--border); padding: 16px; max-width: 450px; margin: 0 auto; background: var(--bg); color: var(--on-bg); font-family: var(--font-body); } .ds-layout-frame h1 { font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.025em; text-transform: uppercase; margin: 0 0 4px 0; } .ds-layout-frame hr { border: none; border-top: 1px solid var(--border); margin: 0; } .ds-layout-frame .thick-hr { border-top-width: 3px; } .ds-layout-frame .double-rule { border-top: 2px solid var(--border); border-bottom: 2px solid var(--border); height: 2px; } .ds-layout-frame .row { display: flex; justify-content: space-between; align-items: baseline; padding: 2px 0; } .ds-layout-frame .row .label { font-family: var(--font-body); font-size: 14px; } .ds-layout-frame .row .value { font-family: var(--font-body); font-size: 14px; font-weight: 700; margin-left: auto; padding-left: 1em; } .ds-layout-frame .row .percent { font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em; } .ds-layout-frame .sub-item { margin-left: 1em; } .ds-layout-frame .footnote { font-family: var(--font-body); font-size: 12px; font-weight: 300; } .ds-layout-frame * { font-variant-numeric: tabular-nums; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }",
  "interactionStyles": ".ds-layout-frame:hover { opacity: 0.95; } .ds-layout-frame:active { opacity: 0.85; } .ds-layout-frame:focus { outline: 2px solid var(--border); outline-offset: 1px; } .ds-layout-frame .row:hover { background-color: rgba(0,0,0,0.05); }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid black background, white text, 1px black border. No rounding, no shadow. Used for primary actions like 'Apply' or 'Submit'.",
      "html": "<button onmouseenter=\"this.style.opacity='0.85'\" onmouseleave=\"this.style.opacity='1'\" style=\"background: var(--border); color: var(--bg); border: 1px solid var(--border); padding: 8px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; line-height: 1; border-radius: var(--radius-default); cursor: pointer;\">Submit</button>",
      "label": "Primary Button",
      "note": "Solid black background, white text, 1px black border. No rounding, no shadow. Used for primary actions like 'Apply' or 'Submit'."
    },
    {
      "name": "Secondary Button",
      "desc": "White background, black text, black border. For less emphasized actions. Matches the panel's inner rows.",
      "html": "<button onmouseenter=\"this.style.opacity='0.85'\" onmouseleave=\"this.style.opacity='1'\" style=\"background: var(--bg); color: var(--on-bg); border: 1px solid var(--border); padding: 8px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; line-height: 1; border-radius: var(--radius-default); cursor: pointer;\">Cancel</button>",
      "label": "Secondary Button",
      "note": "White background, black text, black border. For less emphasized actions. Matches the panel's inner rows."
    },
    {
      "name": "Ghost Button",
      "desc": "No border, transparent background, black text. Used for subtle inline actions within the dense layout.",
      "html": "<button onmouseenter=\"this.style.opacity='0.85'\" onmouseleave=\"this.style.opacity='1'\" style=\"background: transparent; color: var(--on-bg); border: none; padding: 8px 16px; font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; line-height: 1; border-radius: var(--radius-default); cursor: pointer;\">Reset</button>",
      "label": "Ghost Button",
      "note": "No border, transparent background, black text. Used for subtle inline actions within the dense layout."
    }
  ],
  "cards": [
    {
      "name": "Nutrition Facts Panel Card",
      "desc": "The canonical label card: outer 1px black border, double hairline at top, white background, internal rows separated by hairline rules. Emulates the FDA-required panel.",
      "html": "<div style=\"border: 1px solid var(--border); background: var(--bg); color: var(--on-bg); padding: 16px; max-width: 400px; border-radius: var(--radius-default);\"><div style=\"border-top: 2px double var(--border); border-bottom: 2px double var(--border); height: 4px; margin-bottom: 8px;\"></div><h1 style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.025em; text-transform: uppercase; margin: 0 0 4px 0;\">Nutrition Facts</h1><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; margin-bottom: 4px;\">Serving Size 1 cup (240ml)</div><hr style=\"border: none; border-top: 1px solid var(--border); margin: 2px 0;\"><div style=\"display: flex; justify-content: space-between; padding: 2px 0;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400;\">Calories</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700;\">120</span></div><hr style=\"border: none; border-top: 3px solid var(--border); margin: 2px 0;\"><div style=\"display: flex; justify-content: space-between; padding: 2px 0;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400;\">Total Fat 3g</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em;\">5%</span></div><hr style=\"border: none; border-top: 1px solid var(--border); margin: 2px 0;\"><div style=\"display: flex; justify-content: space-between; padding: 2px 0; padding-left: 1em;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400;\">Saturated Fat 1g</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em;\">5%</span></div><hr style=\"border: none; border-top: 1px solid var(--border); margin: 2px 0;\"><div style=\"display: flex; justify-content: space-between; padding: 2px 0;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400;\">Sodium 160mg</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em;\">7%</span></div><hr style=\"border: none; border-top: 1px solid var(--border); margin: 2px 0;\"><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; margin-top: 8px;\">* Percent Daily Values are based on a 2,000 calorie diet.</div><div style=\"border-top: 2px double var(--border); border-bottom: 2px double var(--border); height: 4px; margin-top: 4px;\"></div></div>",
      "label": "Nutrition Facts Panel Card",
      "note": "The canonical label card: outer 1px black border, double hairline at top, white background, internal rows separated by hairline rules. Emulates the FDA-required panel."
    },
    {
      "name": "Compact Metric Summary Card",
      "desc": "A smaller, stand-alone card showing a single metric row. Used for dashboards or summaries. Maintains the same grid and rule philosophy.",
      "html": "<div style=\"border: 1px solid var(--border); background: var(--bg); color: var(--on-bg); padding: 8px 12px; border-radius: var(--radius-default); max-width: 300px;\"><div style=\"display: flex; justify-content: space-between; align-items: baseline;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase;\">Total Fat</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400;\">3g</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em;\">5%</span></div><hr style=\"border: none; border-top: 1px solid var(--border); margin: 2px 0;\"><div style=\"display: flex; justify-content: space-between; align-items: baseline;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; padding-left: 1em;\">Saturated</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400;\">1g</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em;\">5%</span></div><hr style=\"border: none; border-top: 1px solid var(--border); margin: 2px 0;\"><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300;\">%DV based on 2,000 cal diet</div></div>",
      "label": "Compact Metric Summary Card",
      "note": "A smaller, stand-alone card showing a single metric row. Used for dashboards or summaries. Maintains the same grid and rule philosophy."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "A single-line text input with a thick bottom border (2px black) and no other decorations. Follows the dense, flat style.",
      "html": "<div style=\"margin-bottom: 8px;\"><label style=\"display: block; font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; margin-bottom: 2px; color: var(--on-bg);\">Amount</label><input onfocus=\"this.style.borderBottom='2px solid var(--primary)'\" onblur=\"this.style.borderBottom='2px solid var(--border)'\" type=\"text\" placeholder=\"e.g. 200\" style=\"width: 100%; padding: 4px 0; border: none; border-bottom: 2px solid var(--border); background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 400; outline: none; border-radius: 0;\" /></div>",
      "label": "Text Input",
      "stateLabel": "A single-line text input with a thick bottom border (2px black) and no other decorations. Follows the dense, flat style."
    },
    {
      "name": "Select/Dropdown",
      "desc": "A custom dropdown styled as a bordered box with an arrow. Black border, white background, no rounding.",
      "html": "<div style=\"position: relative; margin-bottom: 8px;\"><label style=\"display: block; font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; margin-bottom: 2px; color: var(--on-bg);\">Unit</label><select onfocus=\"this.style.border='2px solid var(--primary)'\" onblur=\"this.style.border='1px solid var(--border)'\" style=\"width: 100%; padding: 6px 4px; border: 1px solid var(--border); background: var(--bg); color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 400; border-radius: 0; -webkit-appearance: none; appearance: none; padding-right: 20px; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\"><path d=\"M6 8L0 0h12z\" fill=\"black\"/></svg>'); background-repeat: no-repeat; background-position: right 4px center;\"><option>g</option><option>mg</option><option>mcg</option></select></div>",
      "label": "Select/Dropdown",
      "stateLabel": "A custom dropdown styled as a bordered box with an arrow. Black border, white background, no rounding."
    },
    {
      "name": "Checkbox",
      "desc": "A square checkbox with a solid black border. No rounding. Uses an X for checked state (black on white).",
      "html": "<label style=\"display: flex; align-items: center; gap: 4px; font-family: var(--font-body); font-size: 14px; font-weight: 400; color: var(--on-bg);\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 1px solid var(--border); background: var(--bg); border-radius: 0; -webkit-appearance: none; appearance: none; cursor: pointer; position: relative;\" checked /><span>Include %DV</span></label>",
      "label": "Checkbox",
      "stateLabel": "A square checkbox with a solid black border. No rounding. Uses an X for checked state (black on white)."
    }
  ],
  "extraComponents": [
    {
      "name": "Double Rule Divider",
      "desc": "A horizontal divider made of two parallel hairline rules (each 0.5px thick) spaced 2px apart, mimicking the double rule line at the top and bottom of the label.",
      "html": "<div style=\"height: 6px; display: flex; flex-direction: column; justify-content: space-between;\"><div style=\"border-top: 0.5px solid var(--border);\"></div><div style=\"border-top: 0.5px solid var(--border);\"></div></div>"
    },
    {
      "name": "Nutrition Facts Header",
      "desc": "The title block: 'Nutrition Facts' in display type, followed by 'Serving Size' in headline type. Used at the top of any info panel.",
      "html": "<div><h1 style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.025em; text-transform: uppercase; margin: 0 0 2px 0; color: var(--on-bg);\">Nutrition Facts</h1><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; color: var(--on-bg);\">Serving Size 1 container (250g)</div></div>"
    },
    {
      "name": "Metric Row (Label + Value + %DV)",
      "desc": "A single data row showing a label, a numeric value (right-aligned), and a % Daily Value (right-aligned, fixed gutter). Sub-items are indented by 1em.",
      "html": "<div style=\"display: flex; justify-content: space-between; align-items: baseline; padding: 2px 0;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; color: var(--on-bg);\">Total Fat 3g</span><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-align: right; min-width: 3em; color: var(--on-bg);\">5%</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Nutrition Facts</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SERVING SIZE 1 CUP (240ML)</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Calories 120</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Total Fat 3g</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — * Percent Daily Values are based on a 2,000 calorie diet.</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners anywhere. Every element must have border-radius: 0.",
      "avoid": {
        "html": "<div style=\"border-radius: 8px; border: 1px solid black;\">Rounded card</div>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners anywhere. Every element must have border-radius: 0.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use colors other than black, white, or red (#FF0000). No blue, green, gray etc.",
      "avoid": {
        "html": "<span style=\"color: blue;\">Blue text</span>",
        "label": "Avoid"
      },
      "rule": "Do not use colors other than black, white, or red (#FF0000). No blue, green, gray etc.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use multi-column layouts. The panel must be single column between 300-450px width.",
      "avoid": {
        "html": "<div style=\"display: grid; grid-template-columns: 1fr 1fr;\">Two columns</div>",
        "label": "Avoid"
      },
      "rule": "Do not use multi-column layouts. The panel must be single column between 300-450px width.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not include icons, images, shadows, or any decorative elements. Only solid black rules and type.",
      "avoid": {
        "html": "<button style=\"box-shadow: 2px 2px 4px rgba(0,0,0,0.5);\">Shadow button</button>",
        "label": "Avoid"
      },
      "rule": "Do not include icons, images, shadows, or any decorative elements. Only solid black rules and type.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "Avoid all decorative embellishments. The style is defined by absence: no gradients, no shadows, no rounded corners, no icons, no images, no multi-column, no colors beyond black/white/red. Stick to pure typography and solid rules.",
  "effects": [],
  "motion": [],
  "colors": {
    "bg": "#FFFFFF",
    "on-bg": "#000000",
    "border": "#000000",
    "primary": "#FF0000",
    "secondary-col": "#F9F6EE",
    "on-secondary": "#000000",
    "error": "#FF0000"
  },
  "typography": [
    {
      "role": "display",
      "fontFamily": "Libre Franklin",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    {
      "role": "headline",
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    {
      "role": "title",
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    {
      "role": "body",
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em"
    },
    {
      "role": "label",
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 300,
      "lineHeight": 1,
      "letterSpacing": "0em"
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "REGULATORY LABELING SYSTEM",
      "heroHeadline": "NUTRITION FACTS PANEL",
      "heroSub": "Automated compliance with FDA 2016 standards. Generate, preview, and audit your Nutrition Facts labels in strict black-on-white.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000;color:#fff;border:1px solid #000;padding:8px 16px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">NEW LABEL</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#000;border:1px solid #000;padding:8px 16px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">SCAN INGREDIENT</button>",
      "navLinks": [
        "LABELS",
        "DAILY VALUE",
        "ALLERGENS",
        "FOOTNOTES",
        "COMPLIANCE"
      ],
      "features": [
        {
          "title": "UPC SCAN",
          "desc": "Instantly pull product data from UPC barcode and populate serving size, calories, and nutrients.",
          "icon": "🔍",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔍 UPC SCAN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Instantly pull product data from UPC barcode and populate serving size, calories, and nutrients.</div></div>"
        },
        {
          "title": "DAILY VALUE CALC",
          "desc": "Auto-calculate % Daily Value based on FDA reference amounts for all mandatory nutrients.",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 DAILY VALUE CALC</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Auto-calculate % Daily Value based on FDA reference amounts for all mandatory nutrients.</div></div>"
        },
        {
          "title": "ALLERGEN FLAG",
          "desc": "Flag top allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) with red accents.",
          "icon": "⚠️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚠️ ALLERGEN FLAG</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Flag top allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) with red accents.</div></div>"
        },
        {
          "title": "SERVING SUGGEST",
          "desc": "Smart serving size suggestions based on RACC tables and product category.",
          "icon": "🍽️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🍽️ SERVING SUGGEST</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Smart serving size suggestions based on RACC tables and product category.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO COMPLY WITH THE LATEST FDA RULES?",
      "ctaStripHtml": "<div style=\"display:flex;gap:8px;justify-content:center;\"><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000;color:#fff;border:1px solid #000;padding:8px 16px;font-family:Inter;font-weight:700;text-transform:uppercase;\">START PANEL</button><button style=\"background:transparent;color:#000;border:1px solid #000;padding:8px 16px;font-family:Inter;font-weight:700;text-transform:uppercase;\">VIEW SAMPLE</button></div>",
      "sidebarBrand": "NUTRITION FACTS",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LABEL AUDIT",
          "active": true
        },
        {
          "icon": "◉",
          "label": "NUTRIENT DATA",
          "active": false
        },
        {
          "icon": "◉",
          "label": "COMPLIANCE ALERTS",
          "active": false
        }
      ],
      "dashboardTitle": "NUTRITION HUB",
      "metrics": [
        {
          "label": "ACTIVE LABELS",
          "value": "24",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PENDING REVIEW",
          "value": "7",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "COMPLIANCE RATE",
          "value": "92%",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "AVG SERVING SIZE",
          "value": "1 cup (228g)",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "CALORIE TRACKING (30-DAY)",
      "panelATitle": "DAILY VALUE BREAKDOWN",
      "panelARows": [
        {
          "label": "Total Fat",
          "value": "65g",
          "pct": 65
        },
        {
          "label": "Sodium",
          "value": "240mg",
          "pct": 100
        },
        {
          "label": "Total Carbohydrate",
          "value": "300g",
          "pct": 100
        },
        {
          "label": "Protein",
          "value": "50g",
          "pct": 50
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "INGREDIENT AUDIT",
      "panelBCells": [
        {
          "label": "Enriched Flour",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "Sugar",
          "value": "WARN",
          "state": "warn"
        },
        {
          "label": "Soy Lecithin",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "Milk Solids",
          "value": "FLAG",
          "state": "ok"
        },
        {
          "label": "Egg White",
          "value": "FLAG",
          "state": "warn"
        },
        {
          "label": "Natural Flavor",
          "value": "OK",
          "state": "err"
        },
        {
          "label": "Salt",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "Ascorbic Acid",
          "value": "OK",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "Wk 1",
        "Wk 2",
        "Wk 3",
        "Wk 4",
        "Wk 5",
        "Wk 6"
      ],
      "series": [
        {
          "data": [
            1850,
            2100,
            1950,
            2050,
            1800,
            2200,
            2200,
            2200,
            2200,
            2200,
            2200,
            2200
          ],
          "label": "Calories (target 2000)",
          "axis": "left",
          "color": "#FF0000"
        },
        {
          "data": [
            18,
            22,
            19,
            21,
            17,
            23,
            23,
            23,
            23,
            23,
            23,
            23
          ],
          "label": "Saturated Fat (limit 20g)",
          "axis": "right-1",
          "color": "#F9F6EE"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'margin:0 auto;padding:16px;max-width:400px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);'; var inner = ''; inner += '<div style=\"border-top:2px double var(--border);border-bottom:2px double var(--border);height:4px;margin-bottom:8px;\"></div>'; inner += '<h1 style=\"font-family:var(--font-display);font-size:24px;font-weight:700;letter-spacing:-0.025em;text-transform:uppercase;margin:0 0 4px 0;\">Nutrition Facts</h1>'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;margin-bottom:4px;\">Serving Size 1 cup (240ml)</div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Calories</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;\">120</span></div>'; inner += '<hr style=\"border:none;border-top:3px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Total Fat 3g</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">5%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;padding-left:1em;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Saturated Fat 1g</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">5%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Sodium 160mg</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">7%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;margin-top:8px;\">* Percent Daily Values are based on a 2,000 calorie diet.</div>'; inner += '<div style=\"border-top:2px double var(--border);border-bottom:2px double var(--border);height:4px;margin-top:4px;\"></div>'; el.innerHTML = inner; }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:16px;max-width:450px;margin:0 auto;'; var inner = ''; inner += '<div style=\"border:1px solid var(--border);background:var(--surface);padding:12px;margin-bottom:8px;\">'; inner += '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);margin-bottom:4px;\">UPC SCAN</div>'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;\">Instantly pull product data from UPC barcode and populate serving size, calories, and nutrients.</div>'; inner += '</div>'; inner += '<div style=\"border:1px solid var(--border);background:var(--surface);padding:12px;margin-bottom:8px;\">'; inner += '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);margin-bottom:4px;\">DAILY VALUE CALC</div>'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;\">Auto-calculate % Daily Value based on FDA reference amounts for all mandatory nutrients.</div>'; inner += '</div>'; inner += '<div style=\"border:1px solid var(--border);background:var(--surface);padding:12px;margin-bottom:8px;\">'; inner += '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);margin-bottom:4px;\">ALLERGEN FLAG</div>'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;\">Flag top allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) with red accents.</div>'; inner += '</div>'; inner += '<div style=\"border:1px solid var(--border);background:var(--surface);padding:12px;\">'; inner += '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);margin-bottom:4px;\">SERVING SUGGEST</div>'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;\">Smart serving size suggestions based on RACC tables and product category.</div>'; inner += '</div>'; el.innerHTML = inner; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;max-width:400px;margin:0 auto;border:1px solid var(--border);background:var(--surface);'; var inner = ''; inner += '<div style=\"border-top:2px double var(--border);border-bottom:2px double var(--border);height:4px;margin-bottom:8px;\"></div>'; inner += '<div style=\"font-family:var(--font-display);font-size:16px;font-weight:700;letter-spacing:-0.025em;text-transform:uppercase;margin:0 0 4px 0;\">Daily Value Breakdown</div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Total Fat</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;\">65g</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">65%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Sodium</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;\">240mg</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">100%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Total Carbohydrate</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;\">300g</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">100%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"display:flex;justify-content:space-between;padding:2px 0;\"><span style=\"font-family:var(--font-body);font-size:14px;font-weight:400;\">Protein</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;\">50g</span><span style=\"font-family:var(--font-body);font-size:14px;font-weight:700;text-align:right;min-width:3em;\">50%</span></div>'; inner += '<hr style=\"border:none;border-top:1px solid var(--border);margin:2px 0;\">'; inner += '<div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;margin-top:4px;\">* Percent Daily Values are based on a 2,000 calorie diet.</div>'; inner += '<div style=\"border-top:2px double var(--border);border-bottom:2px double var(--border);height:4px;margin-top:4px;\"></div>'; el.innerHTML = inner; }",
    "heroBackground": "function(el) { el.style.cssText = 'background:var(--bg);'; }",
    "ctaBackground": "function(el) { el.style.cssText = 'background:var(--bg);'; var hr = document.createElement('div'); hr.style.cssText = 'position:absolute;bottom:0;left:0;right:0;height:2px;border-top:2px double var(--border);'; el.appendChild(hr); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:6px;display:flex;flex-direction:column;justify-content:space-between;margin:0;'; var r1 = document.createElement('div'); r1.style.cssText = 'border-top:0.5px solid var(--border);'; var r2 = document.createElement('div'); r2.style.cssText = 'border-top:0.5px solid var(--border);'; d.appendChild(r1); d.appendChild(r2); return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText = 'background:var(--surface);'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;opacity:0.03;background-image:url(\"data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\' opacity=\\'0.5\\'/%3E%3C/svg%3E\");background-repeat:repeat;background-size:200px 200px;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var c = document.createElement('canvas'); c.width = 200; c.height = 200; var ctx = c.getContext('2d'); ctx.fillStyle = 'white'; ctx.fillRect(0,0,200,200); ctx.strokeStyle = 'var(--primary)'; ctx.lineWidth = 1; var y = (tick * 0.5) % 200; ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(200,y); ctx.stroke(); return c; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#FF0000",
    "--color-ring": "#FF0000",
    "--color-primary-foreground": "#151515",
    "--color-secondary": "#F9F6EE",
    "--color-accent": "#F9F6EE",
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
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#FF0000",
    "--ring": "#FF0000",
    "--primary-foreground": "#151515",
    "--secondary": "#F9F6EE",
    "--accent": "#F9F6EE",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#FF0000"
  }
});
