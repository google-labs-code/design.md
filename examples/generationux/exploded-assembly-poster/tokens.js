registerSystem({
  "meta": {
    "name": "Exploded Assembly Interface",
    "tagline": "A schematic, instructional UI that reveals a device's inner structure through exploded views, leader lines, and technical drafting conventions.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=IBM+Plex+Mono:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Exploded Assembly Interface",
    "colors": {
      "surface-paper": "#F5F0E8",
      "primary": "#FF6B35",
      "error": "#D0342C",
      "blueprint-bg": "#1A3C6E",
      "blueprint-line": "#FFFFFF",
      "ok": "#333333",
      "warn": "#FF6B35",
      "err": "#D0342C",
      "delta-up": "#2B2B2B",
      "delta-down": "#D0342C",
      "delta-flat": "#808080"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "IBM Plex Mono, monospace",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "IBM Plex Mono, monospace",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "IBM Plex Mono, monospace",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "chip": "9999px"
    },
    "spacing": {
      "component-internal": "8px",
      "section-internal": "24px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "56px",
      "icon": "16px"
    },
    "components": {
      "button-default": {
        "backgroundColor": "transparent",
        "textColor": "{colors.surface-paper}",
        "rounded": "{rounded.default}",
        "padding": "8px",
        "height": "40px"
      },
      "button-hover": {
        "backgroundColor": "{colors.ok}",
        "textColor": "{colors.surface-paper}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "button-active": {
        "backgroundColor": "{colors.ok}",
        "textColor": "{colors.surface-paper}",
        "padding": "8px"
      },
      "callout-badge": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.chip}",
        "width": "32px",
        "height": "32px"
      },
      "drawing-frame": {
        "backgroundColor": "{colors.surface-paper}",
        "rounded": "{rounded.default}",
        "padding": "32px"
      }
    },
    "version": "alpha",
    "description": "A schematic, instructional UI that translates the visual language of technical disassembly posters — patent drawings, IKEA manuals, and mid‑century illustration — into an interactive dashboard. Built on a cream vellum substrate with uniform linework, flat tints, and monospaced uppercase type, it uses an exploded‑view layout with dashed leader lines and numbered callouts to reveal a device's inner structure.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `exploded-assembly-poster` is most plausibly interpreted as referring to the series of exploded-view technical posters produced by Braun AG (West Germany) from the late 1950s through the 1960s, principally associated with the company’s product design programme under the direction of Dieter Rams (head of design from 1961) and the Ulm School of Design influence. These posters typically depi",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "braun.nl",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/search?q=braun+exploded+poster",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://braun.nl/nl-nl",
          "host": "braun.nl",
          "institution": "Braun GmbH",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": null,
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Braun logotype",
          "foundry": null,
          "year": 1935,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "few_usable_urls",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Exact paper stock reference** (colour substrate) – no mill, weight, or brightness published. Resolved by measurement from a primary specimen."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#333333",
    "--primary": "#FF6B35",
    "--on-primary": "#303030",
    "--secondary-col": "#808080",
    "--on-secondary": "#1A1A1A",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#6B7280",
    "--border": "#333333",
    "--error": "#D0342C",
    "--font-display": "Inter",
    "--font-body": "IBM Plex Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "ok": "#333333",
    "warn": "#FF6B35",
    "err": "#D0342C",
    "delta-up": "#2B2B2B",
    "delta-down": "#D0342C",
    "delta-flat": "#808080",
    "deltaUp": "#2B2B2B",
    "deltaDown": "#D0342C",
    "deltaFlat": "#808080",
    "live": "#FF6B35",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#6B7280",
    "chartFont": "IBM Plex Mono"
  },
  "elevation": {
    "shadow-none": "none",
    "shadow-sm": "none",
    "shadow-md": "none",
    "shadow-lg": "none"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": "feTurbulence baseFrequency 0.65 0.8 numOctaves 3 fractalNoise blend multiply opacity 10",
    "grid": "repeating-linear-gradient 5mm spacing overlay opacity 15"
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0\" height=\"0\"><defs><filter id=\"paper-grain\" x=\"0%\" y=\"0%\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65 0.8\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.33  0 0 0 0 0.33  0 0 0 0 0.33  0 0 0 0.08 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend in=\"SourceGraphic\" in2=\"coloredNoise\" mode=\"multiply\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame {\n  position: relative;\n  background-image: repeating-linear-gradient(0deg, transparent, transparent 4.9mm, rgba(51,51,51,0.15) 5mm), repeating-linear-gradient(90deg, transparent, transparent 4.9mm, rgba(51,51,51,0.15) 5mm);\n  filter: url(#paper-grain);\n  background-blend-mode: overlay;\n}\n.ds-layout-frame .drawing-frame {\n  border: 1px solid var(--on-bg);\n  padding: 32px;\n}\n.ds-layout-frame .callout-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: #fff;\n  font-family: var(--font-body);\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.ds-layout-frame .leader-line {\n  stroke: var(--on-bg);\n  stroke-width: 1px;\n  stroke-dasharray: 4 4;\n  fill: none;\n}\n.ds-layout-frame .leader-line-arrow {\n  stroke: var(--primary);\n  stroke-width: 1px;\n  fill: var(--primary);\n}",
  "interactionModel": {
    "hover": {
      "transform": "scale(1.02)",
      "opacity": 0.8,
      "ring": {
        "width": "1px",
        "color": "var(--primary)"
      }
    },
    "active": {
      "transform": "scale(0.98)",
      "border": "2px solid var(--primary)"
    },
    "focus": {
      "outline": "2px dashed var(--primary)",
      "outlineOffset": "2px"
    },
    "transition": {
      "duration": "300ms",
      "timingFunction": "ease-out",
      "property": "opacity, transform, border-color, outline"
    },
    "exemptions": [
      "part-enter",
      "label-fade",
      "leader-line-draw"
    ],
    "disabled": {
      "opacity": 0.4
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame [role=\"button\"], .ds-layout-frame .interactive {\n  transition: transform 300ms ease-out, opacity 300ms ease-out, border-color 300ms ease-out, outline 300ms ease-out;\n}\n.ds-layout-frame button:hover,\n.ds-layout-frame [role=\"button\"]:hover,\n.ds-layout-frame .interactive:hover {\n  transform: scale(1.02);\n  opacity: 0.8;\n  outline: 1px solid var(--primary);\n}\n.ds-layout-frame button:active,\n.ds-layout-frame [role=\"button\"]:active,\n.ds-layout-frame .interactive:active {\n  transform: scale(0.98);\n  border: 2px solid var(--primary);\n}\n.ds-layout-frame button:focus,\n.ds-layout-frame [role=\"button\"]:focus,\n.ds-layout-frame .interactive:focus {\n  outline: 2px dashed var(--primary);\n  outline-offset: 2px;\n}\n.ds-layout-frame button:disabled,\n.ds-layout-frame [role=\"button\"]:disabled,\n.ds-layout-frame .interactive:disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}",
  "chartStyle": {
    "type": "line",
    "lineColor": "var(--on-bg)",
    "lineWidth": "1.5px",
    "dotRadius": "2.5px",
    "dotColor": "var(--on-bg)",
    "gridLines": {
      "positions": [
        "25%",
        "50%",
        "75%",
        "100%"
      ],
      "color": "var(--on-bg)",
      "opacity": 0.1
    },
    "fill": "none",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#6B7280",
    "fontFamily": "IBM Plex Mono"
  },
  "dashboardStyle": {
    "layout": "centered with generous white space",
    "density": "sparse — large gaps between parts and panels",
    "panelTreatment": "drawing frame — 1px solid border, no rounded corners, faint grid overlay background",
    "dataVizStyle": "line chart with uniform stroke width, no fill, minimal grid lines, monospaced axis labels",
    "signatureElement": "callout badge with leader lines radiating at 30°/45°/60° angles"
  },
  "landingStyle": {
    "heroApproach": "single centered part in exploded view with callout badge and title block below",
    "scrollBehavior": "smooth — parts animate along assembly axes with ease-out, labels fade in after movement stops",
    "ctaStyle": "outlined button with solid border, monospaced uppercase, no background fill",
    "signatureMoment": "part enter animation: 600ms ease-out translation along axis, followed by label fade-in 200ms and leader line draw 400ms linear"
  },
  "buttons": [
    {
      "name": "primary-button",
      "desc": "Solid accent button used for primary actions. Uses structural orange to signal a callout or trigger assembly animation.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; border: none; border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; cursor: pointer; transition: opacity 300ms ease-out, transform 300ms ease-out;\">ASSEMBLE</button>",
      "label": "primary-button",
      "note": "Solid accent button used for primary actions. Uses structural orange to signal a callout or trigger assembly animation."
    },
    {
      "name": "secondary-button",
      "desc": "Outlined button with structural linework. Follows the drafting aesthetic with a solid border and no fill.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; border: 1px solid var(--on-bg); border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; cursor: pointer; transition: opacity 300ms ease-out, transform 300ms ease-out;\">EXPLODE</button>",
      "label": "secondary-button",
      "note": "Outlined button with structural linework. Follows the drafting aesthetic with a solid border and no fill."
    },
    {
      "name": "ghost-button",
      "desc": "Minimal button with only hover underline. Reserved for low-priority actions like reset or info.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; letter-spacing: -0.025em; border: none; border-radius: var(--radius-btn); padding: 8px 16px; height: 40px; cursor: pointer; transition: opacity 300ms ease-out; text-decoration: none;\">RESET</button>",
      "label": "ghost-button",
      "note": "Minimal button with only hover underline. Reserved for low-priority actions like reset or info."
    }
  ],
  "cards": [
    {
      "name": "part-card",
      "desc": "Represents a disassembled part with callout badge and leader lines. Displays part number, description, and metrics. Uses the drawing-frame styling with faint grid overlay.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--on-bg); border-radius: var(--radius-card); padding: 24px; position: relative; display: flex; flex-direction: column; gap: 12px; box-shadow: none;\"><div style=\"position: absolute; top: -8px; left: -8px; width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); display: flex; align-items: center; justify-content: center; font-family: var(--font-body); font-size: 12px; font-weight: 700;\">1</div><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--on-bg);\">ROTOR ASSEMBLY</span><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 400; text-transform: uppercase; color: var(--on-bg-muted);\">QTY: 1 | MAT: STEEL | WT: 1.2 KG</span><div style=\"height: 60px; background: var(--secondary-col); opacity: 0.2; border: 1px dashed var(--on-bg);\"></div></div>",
      "label": "part-card",
      "note": "Represents a disassembled part with callout badge and leader lines. Displays part number, description, and metrics. Uses the drawing-frame styling with faint grid overlay."
    },
    {
      "name": "metrics-card",
      "desc": "Shows key metrics (total parts, weight, etc.) in a structured table similar to a legend. Uses monospaced uppercase labels and tabular numbers.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--on-bg); border-radius: var(--radius-card); padding: 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;\"><div style=\"text-align: center;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--on-bg-muted);\">QTY</span><br><span style=\"font-family: var(--font-body); font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--on-bg);\">12</span></div><div style=\"text-align: center;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--on-bg-muted);\">MAT</span><br><span style=\"font-family: var(--font-body); font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--on-bg);\">3</span></div><div style=\"text-align: center;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--on-bg-muted);\">WT</span><br><span style=\"font-family: var(--font-body); font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--on-bg);\">6.8</span></div></div>",
      "label": "metrics-card",
      "note": "Shows key metrics (total parts, weight, etc.) in a structured table similar to a legend. Uses monospaced uppercase labels and tabular numbers."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with monospaced uppercase styling and a bottom border line. Mimics a drafting note field.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--on-bg-muted);\">PART NAME</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER PART NAME\" style=\"background: transparent; border: none; border-bottom: 1px solid var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; letter-spacing: -0.025em; padding: 4px 0; color: var(--on-bg); outline: none; transition: border-color 300ms ease-out;\"></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with monospaced uppercase styling and a bottom border line. Mimics a drafting note field."
    },
    {
      "name": "select-dropdown",
      "desc": "Dropdown select styled as a drafting table cell with a dashed arrow indicator.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--on-bg-muted);\">MATERIAL</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: 1px solid var(--on-bg); border-radius: var(--radius-default); font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; letter-spacing: -0.025em; padding: 8px; color: var(--on-bg); appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"6\"><path d=\"M0 0l5 6 5-6\" stroke=\"%23333\" fill=\"none\" stroke-width=\"1.5\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 8px center; background-size: 10px 6px; cursor: pointer;\"><option>STEEL</option><option>ALUMINUM</option><option>PLASTIC</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Dropdown select styled as a drafting table cell with a dashed arrow indicator."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Checkbox styled as a small square with a checkmark. Uses structural linework and no fill on unchecked.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"c1-b916\" style=\"width: 16px; height: 16px; border: 1px solid var(--on-bg); background: transparent; appearance: none; border-radius: var(--radius-default); cursor: pointer; position: relative;\"><label for=\"c1-b916\" style=\"font-family: var(--font-body); font-size: 12px; font-weight: 400; text-transform: uppercase; color: var(--on-bg); cursor: pointer;\">INCLUDE FASTENERS</label></div>",
      "label": "checkbox-toggle",
      "stateLabel": "Checkbox styled as a small square with a checkmark. Uses structural linework and no fill on unchecked."
    }
  ],
  "extraComponents": [
    {
      "name": "callout-badge",
      "desc": "Numbered circle badge used to identify parts in the exploded view. Filled with accent orange, white number, monospaced bold.",
      "html": "<div style=\"width: 32px; height: 32px; background: var(--primary); color: var(--on-primary); border-radius: var(--radius-chip); display: flex; align-items: center; justify-content: center; font-family: var(--font-body); font-size: 12px; font-weight: 700;\">1</div>"
    },
    {
      "name": "legend-table",
      "desc": "Table listing parts with number, description, quantity, and material. Mimics a drafting legend block.",
      "html": "<table style=\"width: 100%; border-collapse: collapse; font-family: var(--font-body); font-size: 12px; text-transform: uppercase;\"><thead><tr style=\"border-bottom: 1px solid var(--on-bg);\"><th style=\"text-align: left; padding: 4px 8px; font-weight: 700; color: var(--on-bg);\">#</th><th style=\"text-align: left; padding: 4px 8px; font-weight: 700; color: var(--on-bg);\">DESCRIPTION</th><th style=\"text-align: right; padding: 4px 8px; font-weight: 700; color: var(--on-bg);\">QTY</th><th style=\"text-align: left; padding: 4px 8px; font-weight: 700; color: var(--on-bg);\">MATERIAL</th></tr></thead><tbody><tr><td style=\"padding: 4px 8px; color: var(--primary); font-weight: 700;\">1</td><td style=\"padding: 4px 8px; color: var(--on-bg);\">ROTOR ASSEMBLY</td><td style=\"padding: 4px 8px; text-align: right; color: var(--on-bg);\">1</td><td style=\"padding: 4px 8px; color: var(--on-bg);\">STEEL</td></tr><tr><td style=\"padding: 4px 8px; color: var(--primary); font-weight: 700;\">2</td><td style=\"padding: 4px 8px; color: var(--on-bg);\">COVER PLATE</td><td style=\"padding: 4px 8px; text-align: right; color: var(--on-bg);\">2</td><td style=\"padding: 4px 8px; color: var(--on-bg);\">ALUMINUM</td></tr></tbody></table>"
    },
    {
      "name": "metric-cell",
      "desc": "Individual metric display with label and value, used in a top metrics panel.",
      "html": "<div style=\"display: flex; flex-direction: column; align-items: center; gap: 4px;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--on-bg-muted);\">WEIGHT</span><span style=\"font-family: var(--font-body); font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--on-bg);\">6.8 KG</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — EXPLODED ASSEMBLY</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — ROTOR DISASSEMBLY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — PART NUMBER 005</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — QTY: 2  MAT: ALUMINUM  WT: 0.8 KG</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CALLOUT 01 — ROTOR CAP</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use gradients or soft shadows. This breaks the flat drafting aesthetic and introduces unwanted depth.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(90deg, #f5f0e8, #e0d6c8); box-shadow: 2px 2px 4px rgba(0,0,0,0.2); padding: 16px; font-family: var(--font-body); color: var(--on-bg);\">WRONG: GRADIENT AND SHADOW</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients or soft shadows. This breaks the flat drafting aesthetic and introduces unwanted depth.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not overlap parts or labels. The exploded view requires clear white space between every element.",
      "avoid": {
        "html": "<div style=\"position: relative; width: 100px; height: 100px; background: var(--secondary-col);\"><div style=\"position: absolute; top: 0; left: 0; width: 80px; height: 80px; background: var(--on-bg); opacity: 0.5;\"></div><span style=\"position: absolute; top: 20px; left: 20px; font-family: var(--font-body); color: red;\">OVERLAP</span></div>",
        "label": "Avoid"
      },
      "rule": "Do not overlap parts or labels. The exploded view requires clear white space between every element.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use serif, italic, or proportional type. All typography must be monospaced uppercase for labels and structural grotesque for headings.",
      "avoid": {
        "html": "<div style=\"font-family: Georgia, serif; font-style: italic; font-size: 14px; color: var(--on-bg);\">WRONG: Serif italic proportional text</div>",
        "label": "Avoid"
      },
      "rule": "Do not use serif, italic, or proportional type. All typography must be monospaced uppercase for labels and structural grotesque for headings.",
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
    "desc": "Never use rounded corners on panels, frames, or buttons (except callout badges). Never apply gradients, shadows, or glows. Do not use perspective or overlapping elements.",
    "avoid": {
      "html": "<div style=\"border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); background: linear-gradient(180deg, #f5f0e8, #ffffff); padding: 16px;\">WRONG: ROUNDED CORNERS, SHADOW, GRADIENT</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "surface": "#F5F0E8",
    "on-surface": "#333333",
    "primary": "#FF6B35",
    "on-primary": "#FFFFFF",
    "error": "#D0342C",
    "ok": "#333333",
    "warn": "#FF6B35",
    "err": "#D0342C",
    "delta-up": "#2B2B2B",
    "delta-down": "#D0342C",
    "delta-flat": "#808080",
    "blueprint-bg": "#1A3C6E",
    "blueprint-line": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Courier Prime, monospace",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Courier Prime, monospace",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Courier Prime, monospace",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "chip": "9999px"
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "16px",
    "gap-section": "32px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "56px",
    "icon": "16px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "TECHNICAL DRAWING NO. 0001",
      "heroHeadline": "EXPLODED ASSEMBLY: PROFESSIONAL TURNTABLE TONEARM",
      "heroSub": "REVEAL THE INNER MECHANISM OF A PRECISION TONEARM THROUGH ORTHOGRAPHIC DISASSEMBLY. 14 PARTS. 8 CALLOUTS. 3 AXES.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;border:1px solid #333;color:#333;font-family:\\x27IBM Plex Mono\\x27,monospace;font-size:14px;font-weight:700;text-transform:uppercase;padding:8px 16px;cursor:pointer\">VIEW EXPLODED DIAGRAM</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#FF6B35;border:none;color:#FFF;font-family:\\x27IBM Plex Mono\\x27,monospace;font-size:14px;font-weight:700;text-transform:uppercase;padding:8px 16px;cursor:pointer\">DOWNLOAD DRAWING</button>",
      "navLinks": [
        "INDEX",
        "DIAGRAM",
        "PARTS LIST",
        "MANUAL",
        "SPECS"
      ],
      "features": [
        {
          "title": "LEADER LINES",
          "desc": "DASHED LINES AT 30° / 45° / 60° ANGLES, NEVER CROSSING. EACH LEADER TERMINATES IN A CALLOUT CIRCLE.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 LEADER LINES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DASHED LINES AT 30° / 45° / 60° ANGLES, NEVER CROSSING. EACH LEADER TERMINATES IN A CALLOUT CIRCLE.</div></div>"
        },
        {
          "title": "CALLOUT CIRCLES",
          "desc": "ACCENT-COLORED CIRCLES NUMBERED 1–8. EACH IS A STRUCTURAL REFERENCE TO THE LEGEND TABLE.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 CALLOUT CIRCLES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ACCENT-COLORED CIRCLES NUMBERED 1–8. EACH IS A STRUCTURAL REFERENCE TO THE LEGEND TABLE.</div></div>"
        },
        {
          "title": "ORTHOGRAPHIC VIEW",
          "desc": "FLAT PROJECTION WITH NO PERSPECTIVE. PARTS FLOAT WITH UNIFORM GAPS, VISIBLE PAPER GRAIN THROUGH VOIDS.",
          "icon": "📏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📏 ORTHOGRAPHIC VIEW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">FLAT PROJECTION WITH NO PERSPECTIVE. PARTS FLOAT WITH UNIFORM GAPS, VISIBLE PAPER GRAIN THROUGH VOIDS.</div></div>"
        },
        {
          "title": "UNIFORM STROKES",
          "desc": "ALL PARTS RENDERED WITH 1PX LINE WEIGHT AND SINGLE FLAT TINTS. NO GRADIENTS, NO SOFT SHADOWS.",
          "icon": "✏️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✏️ UNIFORM STROKES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ALL PARTS RENDERED WITH 1PX LINE WEIGHT AND SINGLE FLAT TINTS. NO GRADIENTS, NO SOFT SHADOWS.</div></div>"
        }
      ],
      "ctaStripHeadline": "NEED A DIFFERENT ASSEMBLY? BROWSE THE ARCHIVE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;border:1px solid #333;color:#333;font-family:\\x27IBM Plex Mono\\x27,monospace;font-size:14px;font-weight:700;text-transform:uppercase;padding:8px 16px;cursor:pointer\">BROWSE ARCHIVE</button>",
      "sidebarBrand": "EXPLODED ASSEMBLY",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CATALOG",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ABOUT",
          "active": false
        }
      ],
      "dashboardTitle": "TONEARM ASSEMBLY 5/P — EXPLODED VIEW",
      "metrics": [
        {
          "label": "PART QTY",
          "value": "14",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "NET WEIGHT",
          "value": "87 G",
          "delta": "-3 G",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "TOLERANCE",
          "value": "±0.05 MM",
          "delta": "+0.01",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DRAFTING REV",
          "value": "A3",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "MATERIALS",
          "value": "5",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "BEARING WEAR BY CYCLE",
      "panelATitle": "ASSEMBLY PARTS",
      "panelARows": [
        {
          "label": "1",
          "value": "COUNTERWEIGHT",
          "pct": 0
        },
        {
          "label": "2",
          "value": "PIVOT HOUSING",
          "pct": 0
        },
        {
          "label": "3",
          "value": "ANTI-SKATE MECH",
          "pct": 0
        },
        {
          "label": "4",
          "value": "STYLUS CARRIER",
          "pct": 0
        },
        {
          "label": "5",
          "value": "BASE PLATE",
          "pct": 0
        }
      ],
      "panelBTitle": "MATERIAL SPECIFICATION",
      "panelBCells": [
        {
          "label": "ALUMINUM",
          "value": "3",
          "state": "ok"
        },
        {
          "label": "BRASS",
          "value": "2",
          "state": "warn"
        },
        {
          "label": "STAINLESS STEEL",
          "value": "4",
          "state": "err"
        },
        {
          "label": "ABS THERMOPLASTIC",
          "value": "2",
          "state": "ok"
        },
        {
          "label": "RUBBER",
          "value": "1",
          "state": "warn"
        },
        {
          "label": "NYLON",
          "value": "1",
          "state": "err"
        },
        {
          "label": "COPPER",
          "value": "1",
          "state": "ok"
        },
        {
          "label": "CERAMIC",
          "value": "1",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "1K",
        "2K",
        "3K",
        "4K",
        "5K",
        "6K"
      ],
      "series": [
        {
          "data": [
            0.02,
            0.03,
            0.05,
            0.07,
            0.1,
            0.15,
            0.15,
            0.15,
            0.15,
            0.15,
            0.15,
            0.15
          ],
          "label": "AXIAL",
          "axis": "left",
          "color": "#FF6B35"
        },
        {
          "data": [
            0.01,
            0.015,
            0.02,
            0.025,
            0.03,
            0.045,
            0.045,
            0.045,
            0.045,
            0.045,
            0.045,
            0.045
          ],
          "label": "RADIAL",
          "axis": "right-1",
          "color": "#808080"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:400px;padding:32px;position:relative;background:var(--bg);'; el.innerHTML='<div style=\"border:1px solid #333;padding:24px;width:100%;max-width:600px;background:var(--bg);\"><div style=\"font-family:var(--font-body);font-size:12px;font-weight:700;color:var(--primary);letter-spacing:0.1em;margin-bottom:4px;\">TECHNICAL DRAWING NO. 0001</div><div style=\"font-family:var(--font-display);font-size:32px;font-weight:700;color:var(--on-bg);text-transform:uppercase;line-height:1.2;\">EXPLODED ASSEMBLY: PROFESSIONAL TURNTABLE TONEARM</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);margin-top:12px;line-height:1.5;\">REVEAL THE INNER MECHANISM OF A PRECISION TONEARM THROUGH ORTHOGRAPHIC DISASSEMBLY. 14 PARTS. 8 CALLOUTS. 3 AXES.</div><div style=\"margin-top:24px;display:flex;gap:16px;\"><button style=\"background:transparent;border:1px solid var(--on-bg);color:var(--on-bg);font-family:var(--font-body);font-size:14px;font-weight:700;text-transform:uppercase;padding:8px 16px;cursor:pointer;\">VIEW EXPLODED DIAGRAM</button><button style=\"background:var(--primary);border:none;color:#fff;font-family:var(--font-body);font-size:14px;font-weight:700;text-transform:uppercase;padding:8px 16px;cursor:pointer;\">DOWNLOAD DRAWING</button></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(2,1fr);gap:16px;padding:32px;'; var html=''; var features=[{title:'LEADER LINES',desc:'DASHED LINES AT 30° / 45° / 60° ANGLES, NEVER CROSSING. EACH LEADER TERMINATES IN A CALLOUT CIRCLE.',icon:'📐'},{title:'CALLOUT CIRCLES',desc:'ACCENT-COLORED CIRCLES NUMBERED 1–8. EACH IS A STRUCTURAL REFERENCE TO THE LEGEND TABLE.',icon:'🔴'},{title:'ORTHOGRAPHIC VIEW',desc:'FLAT PROJECTION WITH NO PERSPECTIVE. PARTS FLOAT WITH UNIFORM GAPS, VISIBLE PAPER GRAIN THROUGH VOIDS.',icon:'📏'},{title:'UNIFORM STROKES',desc:'ALL PARTS RENDERED WITH 1PX LINE WEIGHT AND SINGLE FLAT TINTS. NO GRADIENTS, NO SOFT SHADOWS.',icon:'✏️'}]; for(var i=0;i<features.length;i++){ var f=features[i]; html+='<div style=\"border:1px solid var(--on-bg);padding:24px;background:var(--bg);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">'+f.icon+' '+f.title+'</div><div style=\"font-family:var(--font-body);font-size:12px;line-height:1.55;color:var(--on-bg-muted);margin-top:8px;\">'+f.desc+'</div></div>';} el.innerHTML=html; }",
    "panelCRender": "function(el) { el.style.cssText='padding:16px;'; el.innerHTML='<table style=\"width:100%;border-collapse:collapse;font-family:var(--font-body);font-size:12px;text-transform:uppercase;\"><thead><tr style=\"border-bottom:1px solid var(--on-bg);\"><th style=\"text-align:left;padding:4px 8px;font-weight:700;color:var(--on-bg);\">#</th><th style=\"text-align:left;padding:4px 8px;font-weight:700;color:var(--on-bg);\">DESCRIPTION</th><th style=\"text-align:right;padding:4px 8px;font-weight:700;color:var(--on-bg);\">QTY</th><th style=\"text-align:left;padding:4px 8px;font-weight:700;color:var(--on-bg);\">MATERIAL</th></tr></thead><tbody><tr><td style=\"padding:4px 8px;color:var(--primary);font-weight:700;\">1</td><td style=\"padding:4px 8px;color:var(--on-bg);\">ROTOR ASSEMBLY</td><td style=\"padding:4px 8px;text-align:right;color:var(--on-bg);\">1</td><td style=\"padding:4px 8px;color:var(--on-bg);\">STEEL</td></tr><tr><td style=\"padding:4px 8px;color:var(--primary);font-weight:700;\">2</td><td style=\"padding:4px 8px;color:var(--on-bg);\">COVER PLATE</td><td style=\"padding:4px 8px;text-align:right;color:var(--on-bg);\">2</td><td style=\"padding:4px 8px;color:var(--on-bg);\">ALUMINUM</td></tr></tbody></table>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;border-top:1px dashed var(--on-bg);width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background-image:repeating-linear-gradient(0deg,transparent,transparent 4.9mm,rgba(51,51,51,0.1) 5mm),repeating-linear-gradient(90deg,transparent,transparent 4.9mm,rgba(51,51,51,0.1) 5mm);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { el.style.cssText='position:absolute;inset:0;pointer-events:none;'; var html=''; for(var i=0;i<12;i++){ var angle=i*30+(tick%360); html+='<div style=\"position:absolute;top:50%;left:50%;width:1px;height:60px;background:var(--primary);opacity:0.3;transform-origin:50% 100%;transform:rotate('+angle+'deg);\"></div>'; } el.innerHTML=html; }",
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#333333",
    "--color-card-foreground": "#333333",
    "--color-popover-foreground": "#333333",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#6B7280",
    "--color-primary": "#FF6B35",
    "--color-ring": "#FF6B35",
    "--color-primary-foreground": "#303030",
    "--color-secondary": "#808080",
    "--color-accent": "#808080",
    "--color-secondary-foreground": "#1A1A1A",
    "--color-accent-foreground": "#1A1A1A",
    "--color-border": "#333333",
    "--color-input": "#333333",
    "--color-destructive": "#D0342C"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#333333",
    "--card-foreground": "#333333",
    "--popover-foreground": "#333333",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#6B7280",
    "--primary": "#FF6B35",
    "--ring": "#FF6B35",
    "--primary-foreground": "#303030",
    "--secondary": "#808080",
    "--accent": "#808080",
    "--secondary-foreground": "#1A1A1A",
    "--accent-foreground": "#1A1A1A",
    "--border": "#333333",
    "--input": "#333333",
    "--destructive": "#D0342C"
  }
});
