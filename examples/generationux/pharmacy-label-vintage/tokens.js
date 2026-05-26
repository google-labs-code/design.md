registerSystem({
  "meta": {
    "name": "Pharmacy-Label Vintage",
    "tagline": "A vintage apothecary-inspired design system evoking archival authority and handmade craftsmanship through aged paper, sepia ink, and engraved line art.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:wght@300;400;500;600;700;800;900&family=Allura:wght@300;400;500;600;700;800;900&family=Libre+Baskerville:wght@300;400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Pharmacy-Label Vintage",
    "colors": {
      "surface-container-lowest": "#F5E6C8",
      "surface-container": "#EFDCB0",
      "on-surface": "#3E2C1B",
      "secondary": "#8B3A3A",
      "secondary-container": "#D4A574",
      "tertiary": "#6B7A55",
      "outline": "#7A5C3A",
      "outline-variant": "#A08B6C",
      "error": "#7A3B3B",
      "on-error": "#F5E6C8"
    },
    "typography": {
      "display": {
        "fontFamily": "Libre Caslon Text",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em"
      },
      "headline": {
        "fontFamily": "Libre Caslon Text",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.3,
        "letterSpacing": "0.025em"
      },
      "title": {
        "fontFamily": "Libre Caslon Text",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.3,
        "letterSpacing": "0.05em"
      },
      "body": {
        "fontFamily": "Libre Caslon Text",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Libre Caslon Text",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "2px",
      "input": "0px",
      "chip": "9999px"
    },
    "spacing": {
      "padding-xs": "8px",
      "padding-sm": "12px",
      "padding-md": "16px",
      "padding-lg": "24px",
      "padding-xl": "32px",
      "gap-xs": "8px",
      "gap-sm": "12px",
      "gap-md": "16px",
      "gap-lg": "24px",
      "component-height-sm": "32px",
      "component-height-md": "40px",
      "component-height-lg": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#8B3A3A",
        "textColor": "#F5E6C8",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "#7A2E2E",
        "textColor": "#F5E6C8",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#3E2C1B",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "#F5E6C8",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "#3E2C1B",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "badge-stamp": {
        "backgroundColor": "#8B3A3A",
        "textColor": "#F5E6C8",
        "rounded": "{rounded.chip}",
        "padding": "4px",
        "width": "48px",
        "height": "48px"
      }
    },
    "version": "alpha",
    "description": "A vintage apothecary-inspired design system evoking archival authority and handmade craftsmanship through aged paper, sepia ink, and engraved line art.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "wellcomecollection.org",
          "count": 1
        },
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "www.nlm.nih.gov",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Prescription_label",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://wellcomecollection.org/search/works?query=pharmacy+label",
          "host": "wellcomecollection.org",
          "institution": "Wellcome Collection, London",
          "confidence_original": "medium"
        },
        {
          "url": "https://archive.org/search?query=pharmaceutical+labels",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.nlm.nih.gov/",
          "host": "www.nlm.nih.gov",
          "institution": "U.S. National Library of Medicine",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "sparse_imagery",
        "no_typography_extracted",
        "no_colour_extracted",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5E6C8",
    "--on-bg": "#3E2C1B",
    "--primary": "#8B3A3A",
    "--on-primary": "#F5E6C8",
    "--secondary-col": "#6B7A55",
    "--on-secondary": "#3E2C1B",
    "--surface": "#EFDCB0",
    "--on-bg-muted": "#7A5C3A",
    "--border": "#7A5C3A",
    "--error": "#7A3B3B",
    "--font-display": "Libre Baskerville, serif",
    "--font-body": "Libre Baskerville, serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "2px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "primary": "var(--primary)",
    "on-primary": "var(--on-primary)",
    "secondary": "var(--secondary-col)",
    "on-secondary": "var(--on-secondary)",
    "background": "var(--bg)",
    "surface": "var(--surface)",
    "text": "var(--on-bg)",
    "text-muted": "var(--on-bg-muted)",
    "border": "var(--border)",
    "error": "var(--error)",
    "err": "var(--error)",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "var(--error)",
    "deltaFlat": "#7A5C3A",
    "live": "#8B3A3A",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#7A5C3A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "type": "bar",
    "barColor": "var(--primary)",
    "barBorder": "1px solid var(--border)",
    "backgroundColor": "transparent",
    "gridColor": "var(--outline-variant)",
    "gridStyle": "dotted",
    "labelColor": "#7A5C3A",
    "fontFamily": "Libre Caslon Text, serif"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": true,
      "foxing": true,
      "edgeWear": true,
      "inkBleed": true,
      "blendMode": "multiply",
      "aging": "medium"
    }
  },
  "interactionModel": {
    "hover": {
      "primary": "background-color darkens, border broadens",
      "secondary": "background fills with light brick tint",
      "stamp": "background darkens, border broadens"
    },
    "focus": {
      "primary": "border-color darkens",
      "secondary": "border-color darkens",
      "input": "border-color darkens"
    },
    "active": {
      "primary": "bevel-depress: translateY(1px) scale(0.98), inner shadow",
      "secondary": "bevel-depress: translateY(1px) scale(0.98), inner shadow",
      "stamp": "rotate(0.5deg) scale(0.98), inner shadow"
    },
    "transition-duration": "0ms",
    "transition-easing": "none"
  },
  "spacing": {
    "padding-xs": "8px",
    "padding-sm": "12px",
    "padding-md": "16px",
    "padding-lg": "24px",
    "padding-xl": "32px",
    "gap-xs": "8px",
    "gap-sm": "12px",
    "gap-md": "16px",
    "gap-lg": "24px",
    "component-height-sm": "32px",
    "component-height-md": "40px",
    "component-height-lg": "48px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "2px",
    "input": "0px",
    "chip": "9999px"
  },
  "elevation": {
    "flat": true,
    "shadows": [],
    "description": "No layered shadows; depth implied by paper texture and inner shadow on stamps/buttons only."
  },
  "dashboardStyle": {
    "layout": "single-column, centered grid with portrait cards",
    "density": "low (lots of white/cream space)",
    "panelTreatment": "double-rule border frame on each card",
    "dataVizStyle": "sepia-toned bar charts with dotted grid",
    "signatureElement": "brick-red circular stamp badge on each data card"
  },
  "landingStyle": {
    "heroApproach": "large prescription label card with double-rule border, Rx symbol, and stamp",
    "scrollBehavior": "smooth, with paper grain overlay simmering subtly",
    "ctaStyle": "primary stamp button with inner shadow press effect",
    "signatureMoment": "the stamp appears with a slight rotation and fade-in animation on page load"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='ds-noise'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0;",
  "globalCss": ".ds-layout-frame::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='ds-noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ds-noise)' opacity='0.12'/%3E%3C/svg%3E\"); background-repeat: repeat; pointer-events: none; z-index: 9999; mix-blend-mode: overlay; }\n.ds-layout-frame .card { border: 1px solid var(--border); box-shadow: 0 0 0 0.5px var(--outline-variant) inset; }\n.ds-layout-frame .card::before { content: ''; position: absolute; top: -1px; left: -1px; right: -1px; bottom: -1px; border: 1px solid var(--border); pointer-events: none; }\n.ds-layout-frame .stamp { border: 2px solid var(--primary); background: var(--primary); color: var(--on-primary); border-radius: 50%; transform: rotate(0.5deg); box-shadow: inset 0 1px 2px rgba(59,47,47,0.3); }\n.ds-layout-frame .btn-primary { border: 2px solid var(--primary); }\n.ds-layout-frame .btn-secondary { border: 2px solid var(--border); background: transparent; }",
  "interactionStyles": ".ds-layout-frame .btn-primary:hover { background-color: #7A2E2E; border-width: 3px; } .ds-layout-frame .btn-primary:active { transform: translateY(1px) scale(0.98); box-shadow: inset 0 1px 2px rgba(59,47,47,0.5); } .ds-layout-frame .btn-primary:focus { border-color: #5C3A2A; } .ds-layout-frame .btn-secondary:hover { background-color: rgba(139,58,58,0.15); } .ds-layout-frame .stamp:active { transform: rotate(0.5deg) scale(0.98); box-shadow: inset 0 1px 2px rgba(0,0,0,0.4); } .ds-layout-frame .stamp:hover { background-color: #7A2E2E; }",
  "buttons": [
    {
      "name": "primary-stamp",
      "desc": "Primary button styled as a brick-red stamp with sepia border, small caps, and a pressed inner-shadow effect on activation.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer;\\x27>COMPOUND</button>",
      "label": "primary-stamp",
      "note": "Primary button styled as a brick-red stamp with sepia border, small caps, and a pressed inner-shadow effect on activation."
    },
    {
      "name": "secondary-outline",
      "desc": "Secondary button with transparent background and a solid sepia border, mimicking an engraved outline.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-body); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\\x27>TINCTURE</button>",
      "label": "secondary-outline",
      "note": "Secondary button with transparent background and a solid sepia border, mimicking an engraved outline."
    },
    {
      "name": "ghost-underline",
      "desc": "Ghost button with no border, using only an underlined text link style in brick red.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background: transparent; border: none; color: var(--primary); font-family: var(--font-body); font-size: 12px; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; cursor: pointer;\\x27>DISPENSE</button>",
      "label": "ghost-underline",
      "note": "Ghost button with no border, using only an underlined text link style in brick red."
    }
  ],
  "cards": [
    {
      "name": "prescription-label",
      "desc": "Full prescription label card with double-rule border, three horizontal bands separated by decorative bar rule, Rx symbol, and a brick-red stamp.",
      "html": "<div style='background: var(--bg); border: 1px solid var(--border); box-shadow: inset 0 0 0 0.5px var(--border); padding: 16px; width: 320px; font-family: var(--font-body); color: var(--on-bg);'>\n  <div style='display: flex; justify-content: space-between; align-items: start;'>\n    <span style='font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;'>APOTHECARY HALL</span>\n    <span style='font-family: var(--font-display); font-size: 20px; font-weight: 700;'>℞</span>\n  </div>\n  <div style='height: 1px; background: var(--border); margin: 8px 0; position: relative;'>\n    <span style='position: absolute; left: 50%; top: -6px; transform: translateX(-50%); background: var(--bg); padding: 0 4px; color: var(--primary); font-size: 10px;'>◆</span>\n  </div>\n  <div style='display: flex; justify-content: space-between; margin: 8px 0;'>\n    <span style='font-style: italic; font-size: 16px;'>J. Smith</span>\n    <span style='font-family: var(--font-display); font-size: 14px; font-weight: 700;'>No. 245</span>\n  </div>\n  <div style='font-style: italic; font-size: 13px;'>Tincture of Opium 10% — 30 mL</div>\n  <div style='height: 1px; background: var(--border); margin: 8px 0;'></div>\n  <div style='display: flex; justify-content: space-between; font-size: 11px;'>\n    <span>10 May 1892</span>\n    <span>Refill: 2</span>\n  </div>\n  <div style='margin-top: 8px; display: flex; justify-content: flex-end;'>\n    <span style='display: inline-block; width: 48px; height: 48px; border-radius: 50%; background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; transform: rotate(1deg); box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);'>Rx</span>\n  </div>\n</div>",
      "label": "prescription-label",
      "note": "Full prescription label card with double-rule border, three horizontal bands separated by decorative bar rule, Rx symbol, and a brick-red stamp."
    },
    {
      "name": "simple-double-rule",
      "desc": "A minimal card with the signature double-rule border and paper grain, suitable for any container.",
      "html": "<div style='background: var(--bg); border: 1px solid var(--border); box-shadow: inset 0 0 0 0.5px var(--border); padding: 24px; font-family: var(--font-body); color: var(--on-bg);'>\n  <p style='margin: 0; font-size: 14px; line-height: 1.5;'>This card uses the double-rule frame and cream paper background. Content sits flat on the page.</p>\n</div>",
      "label": "simple-double-rule",
      "note": "A minimal card with the signature double-rule border and paper grain, suitable for any container."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "A vintage text input with transparent background, sepia border, and no rounded corners.",
      "html": "<div style=\\x27display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body);\\x27>\n  <label style=\\x27font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted);\\x27>Patient Name</label>\n  <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\\x27text\\x27 placeholder=\\x27Enter name\\x27 style=\\x27background: transparent; border: 1px solid var(--border); padding: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); outline: none; width: 100%; box-sizing: border-box;\\x27 />\n</div>",
      "label": "text-input",
      "stateLabel": "A vintage text input with transparent background, sepia border, and no rounded corners."
    },
    {
      "name": "select-dropdown",
      "desc": "A styled select element with a custom dropdown arrow using a Unicode character, matching the vintage aesthetic.",
      "html": "<div style=\\x27display: flex; flex-direction: column; gap: 4px; font-family: var(--font-body);\\x27>\n  <label style=\\x27font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted);\\x27>Dosage Form</label>\n  <div style=\\x27position: relative;\\x27>\n    <select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27width: 100%; background: transparent; border: 1px solid var(--border); padding: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); appearance: none; -webkit-appearance: none; -moz-appearance: none; padding-right: 24px;\\x27>\n      <option>Tincture</option>\n      <option>Powder</option>\n      <option>Pill</option>\n      <option>Elixir</option>\n    </select>\n    <span style=\\x27position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--border);\\x27>▼</span>\n  </div>\n</div>",
      "label": "select-dropdown",
      "stateLabel": "A styled select element with a custom dropdown arrow using a Unicode character, matching the vintage aesthetic."
    },
    {
      "name": "checkbox",
      "desc": "A custom checkbox styled as a small engraved square with a checkmark using a serif '✓' character.",
      "html": "<label style=\\x27display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); cursor: pointer;\\x27>\n  <input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\\x27checkbox\\x27 style=\\x27appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border: 1px solid var(--border); background: transparent; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; color: var(--primary); cursor: pointer;\\x27 checked />\n  <span>Include directions</span>\n</label>",
      "label": "checkbox",
      "stateLabel": "A custom checkbox styled as a small engraved square with a checkmark using a serif '✓' character."
    }
  ],
  "extraComponents": [
    {
      "name": "badge-stamp",
      "desc": "Circular stamp badge with brick red background, cream text, and an offset rotation for a pressed-ink effect.",
      "html": "<span style='display: inline-block; width: 48px; height: 48px; border-radius: 50%; background: var(--primary); color: var(--on-primary); border: 2px solid var(--border); display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; transform: rotate(0.8deg); box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);'>Rx</span>"
    },
    {
      "name": "bar-rule",
      "desc": "Decorative horizontal bar rule with a centered diamond ornament, used to separate bands.",
      "html": "<div style='height: 0; border-top: 1px solid var(--border); position: relative; margin: 12px 0;'>\n  <span style='position: absolute; left: 50%; top: -8px; transform: translateX(-50%); background: var(--bg); padding: 0 6px; color: var(--primary); font-size: 12px;'>◆</span>\n</div>"
    },
    {
      "name": "prescription-number",
      "desc": "Prescription number display in condensed serif, preceded by 'No.' in smaller caps, right-aligned.",
      "html": "<div style='font-family: var(--font-display); text-align: right;'>\n  <span style='font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;'>No.</span>\n  <span style='font-size: 18px; font-weight: 700; letter-spacing: 0.02em;'>245</span>\n</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — APOTHECARY HALL</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Prescription for J. Smith</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Tincture of Opium 10%</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Take 15 drops in water three times daily before meals.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — DISPENSE AS WRITTEN</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never use a modern sans-serif typeface like Helvetica or Inter — it breaks the vintage apothecary character.",
      "avoid": {
        "html": "<span style='font-family: Helvetica, sans-serif; font-size: 14px; color: #000;'>Modern Rx</span>",
        "label": "Avoid"
      },
      "rule": "Never use a modern sans-serif typeface like Helvetica or Inter — it breaks the vintage apothecary character.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid pure black (#000) or pure white (#FFF) backgrounds — they clash with the aged paper palette.",
      "avoid": {
        "html": "<div style='background: #FFF; border: 1px solid #000; padding: 16px; color: #000;'>Contrast error</div>",
        "label": "Avoid"
      },
      "rule": "Avoid pure black (#000) or pure white (#FFF) backgrounds — they clash with the aged paper palette.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use drop shadows — the design system demands a flat depth model with only inner shadows for press effects.",
      "avoid": {
        "html": "<div style='background: #F5E6C8; box-shadow: 2px 2px 4px rgba(0,0,0,0.5); padding: 16px;'>Shadow violation</div>",
        "label": "Avoid"
      },
      "rule": "Do not use drop shadows — the design system demands a flat depth model with only inner shadows for press effects.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid landscape orientation for cards — all containers should be portrait or square to match prescription label proportions.",
      "avoid": {
        "html": "<div style='width: 400px; height: 200px; background: #F5E6C8; border: 1px solid #7A5C3A; padding: 8px;'>Landscape card</div>",
        "label": "Avoid"
      },
      "rule": "Avoid landscape orientation for cards — all containers should be portrait or square to match prescription label proportions.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "These visual patterns should never appear: modern sans-serif typefaces, pure black/white, drop shadows, landscape cards, gradients (except paper-aging radial), and pure geometric icons.",
    "avoid": {
      "html": "<div style='font-family: Arimo; background: #000; color: #FFF; box-shadow: 0 4px 6px rgba(0,0,0,0.1); width: 500px; height: 100px;'>Broken style</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "surface-container-lowest": "#F5E6C8",
    "surface-container": "#EFDCB0",
    "on-surface": "#3E2C1B",
    "secondary": "#8B3A3A",
    "secondary-container": "#D4A574",
    "tertiary": "#6B7A55",
    "outline": "#7A5C3A",
    "outline-variant": "#A08B6C",
    "error": "#7A3B3B",
    "on-error": "#F5E6C8"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.3,
      "letterSpacing": "0.025em"
    },
    "title": {
      "fontFamily": "var(--font-display)",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "letterSpacing": "0.05em"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "var(--font-body)",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "℞  A P O T H E C A R Y   L E D G E R",
      "heroHeadline": "Prescription Archive & Label Registry",
      "heroSub": "Catalogue of tinctures, powders, and electuaries — each bearing the authenticating stamp of the House.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ENTER APOTHECARY</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW RECENT PRESCRIPTIONS</button>",
      "navLinks": [
        "LEDGER",
        "COMPOUNDS",
        "MATERIA MEDICA",
        "STAMPS",
        "BIN"
      ],
      "features": [
        {
          "title": "Double‑Rule Frame",
          "desc": "Every label is enclosed in a fine double‑rule border, sepia on cream, as prescribed by the guild.",
          "icon": "🏷️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏷️ Double‑Rule Frame</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every label is enclosed in a fine double‑rule border, sepia on cream, as prescribed by the guild.</div></div>"
        },
        {
          "title": "Circular Stamp Authority",
          "desc": "Brick‑red stamp with inner press effect, offset rotation, and small serif initials — the mark of authenticity.",
          "icon": "🖨️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖨️ Circular Stamp Authority</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Brick‑red stamp with inner press effect, offset rotation, and small serif initials — the mark of authenticity.</div></div>"
        },
        {
          "title": "Rx & Prescription Number",
          "desc": "The ℞ symbol and a bold condensed “No.” prefix always appear near the upper band for immediate identification.",
          "icon": "℞",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">℞ Rx & Prescription Number</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">The ℞ symbol and a bold condensed “No.” prefix always appear near the upper band for immediate identification.</div></div>"
        },
        {
          "title": "Engraved Botanical Vignette",
          "desc": "Mortar & pestle or herb sprig line art — no fills, only engraved strokes — adorns each label’s lower band.",
          "icon": "🌿",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌿 Engraved Botanical Vignette</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Mortar & pestle or herb sprig line art — no fills, only engraved strokes — adorns each label’s lower band.</div></div>"
        }
      ],
      "ctaStripHeadline": "Commence a new entry — request a label number",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">APPLY FOR NUMBER</button>",
      "sidebarBrand": "℞  ARCHIVE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LEDGER",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COMPOUNDS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "MATERIA MEDICA",
          "active": false
        },
        {
          "icon": "◉",
          "label": "STAMPS",
          "active": false
        }
      ],
      "dashboardTitle": "Dispensary Ledger",
      "metrics": [
        {
          "label": "TINCTURES",
          "value": "42",
          "delta": "+5",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "POWDERS",
          "value": "28",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "ELECTUARIES",
          "value": "16",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "STAMPS ISSUED",
          "value": "134",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "Monthly Compounding Volume",
      "panelATitle": "Recent Prescriptions Entered",
      "panelARows": [
        {
          "label": "No. 8421",
          "value": "Tinct. Gentian Co.",
          "pct": 0
        },
        {
          "label": "No. 8422",
          "value": "Pulv. Rhei",
          "pct": 0
        },
        {
          "label": "No. 8423",
          "value": "Elect. Scammon.",
          "pct": 0
        },
        {
          "label": "No. 8424",
          "value": "Tinct. Digitalis",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "Stamps to Affix — Awaiting Authentication",
      "panelBCells": [
        {
          "label": "Dr. A. Black",
          "value": "Tinct. Gentian Co.",
          "state": "ok"
        },
        {
          "label": "Dr. M. Green",
          "value": "Pulv. Ipecac.",
          "state": "warn"
        },
        {
          "label": "Dr. J. Long",
          "value": "Elect. Senna",
          "state": "err"
        },
        {
          "label": "Dr. P. Short",
          "value": "Ungt. Sulphur",
          "state": "ok"
        },
        {
          "label": "Dr. R. Tate",
          "value": "Tinct. Opii",
          "state": "warn"
        },
        {
          "label": "Dr. L. Wren",
          "value": "Pulv. Cinchon.",
          "state": "err"
        },
        {
          "label": "Dr. E. Day",
          "value": "Mist. Camph.",
          "state": "ok"
        },
        {
          "label": "Dr. S. Fox",
          "value": "Tinct. Ferri",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
      ],
      "series": [
        {
          "data": [
            10,
            12,
            9,
            14,
            11,
            13,
            13,
            13,
            13,
            13,
            13,
            13
          ],
          "label": "Tinctures",
          "axis": "left",
          "color": "#8B3A3A"
        },
        {
          "data": [
            5,
            7,
            6,
            8,
            4,
            6,
            6,
            6,
            6,
            6,
            6,
            6
          ],
          "label": "Powders",
          "axis": "right-1",
          "color": "#6B7A55"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:400px;display:flex;align-items:center;justify-content:center;padding:32px;background:var(--bg);'; var card = document.createElement('div'); card.style.cssText = 'width:360px;border:1px solid var(--border);box-shadow:inset 0 0 0 0.5px var(--border);padding:24px;background:var(--surface);font-family:var(--font-body);color:var(--on-bg);'; card.innerHTML = '<div style=\"display:flex;justify-content:space-between;align-items:start;\"><span style=\"font-family:var(--font-display);font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">APOTHECARY HALL</span><span style=\"font-family:var(--font-display);font-size:24px;font-weight:700;\">℞</span></div><div style=\"height:1px;background:var(--border);margin:12px 0;position:relative;\"><span style=\"position:absolute;left:50%;top:-7px;transform:translateX(-50%);background:var(--bg);padding:0 4px;color:var(--primary);font-size:10px;\">◆</span></div><div style=\"display:flex;justify-content:space-between;margin:8px 0;\"><span style=\"font-style:italic;font-size:18px;\">J. Smith</span><span style=\"font-family:var(--font-display);font-size:16px;font-weight:700;\">No. 245</span></div><div style=\"font-style:italic;font-size:14px;\">Tincture of Opium 10% — 30 mL</div><div style=\"height:1px;background:var(--border);margin:12px 0;\"></div><div style=\"display:flex;justify-content:space-between;font-size:12px;\"><span>10 May 1892</span><span>Refill: 2</span></div><div style=\"margin-top:12px;display:flex;justify-content:flex-end;\"><span style=\"display:inline-block;width:48px;height:48px;border-radius:50%;background:var(--primary);color:var(--on-primary);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;transform:rotate(1deg);box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);\">Rx</span></div>'; el.appendChild(card); }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;padding:24px;'; var features = [{\"title\":\"Double‑Rule Frame\",\"desc\":\"Every label is enclosed in a fine double‑rule border, sepia on cream, as prescribed by the guild.\"},{\"title\":\"Circular Stamp Authority\",\"desc\":\"Brick‑red stamp with inner press effect, offset rotation, and small serif initials — the mark of authenticity.\"},{\"title\":\"Rx & Prescription Number\",\"desc\":\"The ℞ symbol and a bold condensed “No.” prefix always appear near the upper band for immediate identification.\"},{\"title\":\"Engraved Botanical Vignette\",\"desc\":\"Mortar & pestle or herb sprig line art — no fills, only engraved strokes — adorns each label’s lower band.\"}]; features.forEach(function(f){ var card=document.createElement('div'); card.style.cssText='border:1px solid var(--border);box-shadow:inset 0 0 0 0.5px var(--border);background:var(--surface);padding:24px;'; card.innerHTML='<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:8px;\">'+f.title+'</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">'+f.desc+'</div>'; el.appendChild(card); }); }",
    "panelCRender": "function(el) { el.style.cssText='padding:16px;font-family:var(--font-body);'; var table=document.createElement('div'); table.style.cssText='border:1px solid var(--border);box-shadow:inset 0 0 0 0.5px var(--border);background:var(--bg);padding:16px;'; table.innerHTML='<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;\">Recent Prescriptions Entered</div><div style=\"display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;justify-content:space-between;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg-muted);\"><span>Number</span><span>Preparation</span></div><div style=\"display:flex;justify-content:space-between;\"><span>No. 8421</span><span>Tinct. Gentian Co.</span></div><div style=\"display:flex;justify-content:space-between;\"><span>No. 8422</span><span>Pulv. Rhei</span></div><div style=\"display:flex;justify-content:space-between;\"><span>No. 8423</span><span>Elect. Scammon.</span></div><div style=\"display:flex;justify-content:space-between;\"><span>No. 8424</span><span>Tinct. Digitalis</span></div></div>'; el.appendChild(table); }",
    "heroBackground": "function(el) { el.style.background = 'radial-gradient(ellipse at center, #F5E6C8 0%, #E8D4A0 100%)'; }",
    "ctaBackground": "function(el) { el.style.background = 'radial-gradient(ellipse at center, #EFDCB0 0%, #DBC498 100%)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:0;border-top:1px solid var(--border);position:relative;margin:24px 0;'; var s=document.createElement('span'); s.style.cssText='position:absolute;left:50%;top:-8px;transform:translateX(-50%);background:var(--bg);padding:0 6px;color:var(--primary);font-size:12px;'; s.textContent='◆'; d.appendChild(s); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#F5E6C8'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27200%27%3E%3Cfilter id=%27ds-noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23ds-noise)%27 opacity=%270.12%27/%3E%3C/svg%3E\");background-repeat:repeat;mix-blend-mode:overlay;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:9998;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27200%27 height=%27200%27%3E%3Cfilter id=%27ds-noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23ds-noise)%27 opacity=%270.12%27/%3E%3C/svg%3E\");background-repeat:repeat;mix-blend-mode:overlay;opacity:' + (0.08 + 0.04 * Math.sin(tick * 0.02)) + ';'; el.appendChild(ov); }",
  "shadcnTokens": {
    "--color-background": "#F5E6C8",
    "--color-popover": "#F5E6C8",
    "--color-foreground": "#3E2C1B",
    "--color-card-foreground": "#3E2C1B",
    "--color-popover-foreground": "#3E2C1B",
    "--color-card": "#EFDCB0",
    "--color-muted": "#EFDCB0",
    "--color-muted-foreground": "#7A5C3A",
    "--color-primary": "#8B3A3A",
    "--color-ring": "#8B3A3A",
    "--color-primary-foreground": "#F5E6C8",
    "--color-secondary": "#6B7A55",
    "--color-accent": "#6B7A55",
    "--color-secondary-foreground": "#3E2C1B",
    "--color-accent-foreground": "#3E2C1B",
    "--color-border": "#7A5C3A",
    "--color-input": "#7A5C3A",
    "--color-destructive": "#7A3B3B"
  },
  "shadcnTokensClassic": {
    "--background": "#F5E6C8",
    "--popover": "#F5E6C8",
    "--foreground": "#3E2C1B",
    "--card-foreground": "#3E2C1B",
    "--popover-foreground": "#3E2C1B",
    "--card": "#EFDCB0",
    "--muted": "#EFDCB0",
    "--muted-foreground": "#7A5C3A",
    "--primary": "#8B3A3A",
    "--ring": "#8B3A3A",
    "--primary-foreground": "#F5E6C8",
    "--secondary": "#6B7A55",
    "--accent": "#6B7A55",
    "--secondary-foreground": "#3E2C1B",
    "--accent-foreground": "#3E2C1B",
    "--border": "#7A5C3A",
    "--input": "#7A5C3A",
    "--destructive": "#7A3B3B"
  }
});
