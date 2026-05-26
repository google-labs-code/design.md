registerSystem({
  "meta": {
    "name": "Isotype Visual Education System (Neurath)",
    "tagline": "A modular pictographic language for statistical and explanatory diagrams – rational, didactic, ruthlessly simplified",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Isotype Visual Education System (Neurath)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "background": "#F5F0E8",
      "on-surface": "#000000",
      "on-secondary": "#FFFFFF",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Jost, Cabin, sans-serif",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.08em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Jost, Cabin, sans-serif",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Jost, Cabin, sans-serif",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Jost, Cabin, sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Jost, Cabin, sans-serif",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "component-internal": "0px",
      "section-internal": "16px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "icon": "48px"
    },
    "components": {
      "pictogram-cell": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.default}",
        "size": "64px"
      },
      "data-row": {
        "backgroundColor": "transparent",
        "height": "64px",
        "width": "100%"
      },
      "chart-frame": {
        "backgroundColor": "{colors.background}",
        "rounded": "{rounded.default}",
        "padding": "32px",
        "width": "100%"
      },
      "headline": {
        "textColor": "{colors.on-surface}",
        "backgroundColor": "transparent",
        "padding": "16px"
      },
      "legend-key": {
        "textColor": "{colors.on-surface}",
        "backgroundColor": "transparent",
        "padding": "8px"
      },
      "grid-divider": {
        "backgroundColor": "{colors.outline}",
        "height": "1px",
        "width": "100%"
      }
    },
    "version": "alpha",
    "description": "A modular pictographic language for statistical and explanatory diagrams developed in 1920s-30s Vienna by Otto Neurath, Gerd Arntz, and Marie Reidemeister — rational, didactic, and ruthlessly simplified with every element serving a single instructional purpose.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `isotype-visual-education-system-neurath` refers to the International System of Typographic Picture Education (ISOTYPE), a visual language for statistical and factual information developed from the mid‑1920s by Otto Neurath, in collaboration with Marie Neurath (née Reidemeister) and the graphic designer Gerd Arntz. ISOTYPE is a systematic method comprising a defined set of drawing con",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "collections.reading.ac.uk",
          "count": 2
        },
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.wienmuseum.at",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://collections.reading.ac.uk/special-collections/",
          "host": "collections.reading.ac.uk",
          "institution": "University of Reading Special Collections",
          "confidence_original": "low"
        },
        {
          "url": "https://archive.org/details/internationalpic00neur",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "medium"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Isotype_(picture_language)",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.wienmuseum.at/en/",
          "host": "www.wienmuseum.at",
          "institution": "Wien Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://collections.reading.ac.uk/",
          "host": "collections.reading.ac.uk",
          "institution": "University of Reading",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Futura",
          "foundry": null,
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "unverified"
        },
        {
          "name": "Primär-Grotesk",
          "foundry": "J. G. Schelter & Giesecke",
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "Erbar-Grotesk",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "unverified"
        },
        {
          "name": "hand-drawn sans-serif logotype and label lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Gill Sans",
          "foundry": null,
          "year": null,
          "google_fonts": "Cabin",
          "attestation": "unverified"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour coordinates**": "No confirmed hex/CMYK/Pantone values for any ISOTYPE colour. Providers gave conflicting approximations. Resolution: spectrophotometry on original prints.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#D32F2F",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#D32F2F",
    "--font-display": "Jost",
    "--font-body": "Jost",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#D32F2F",
    "deltaUp": "#22C55E",
    "deltaDown": "#D32F2F",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Jost"
  },
  "elevation": {
    "level0": "none",
    "level1": "none",
    "level2": "none",
    "level3": "none"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "parameters": {
      "grain": {
        "technique": "feTurbulence",
        "baseFrequency": 0.65,
        "numOctaves": 2,
        "opacity": 0.1,
        "blend": "multiply"
      },
      "halftone": {
        "dotSize": "1.5px",
        "spacing": "6px",
        "opacity": 0.2,
        "blend": "multiply"
      },
      "misregistration": {
        "dx": "1px",
        "dy": "0.5px"
      },
      "inkGain": {
        "blurRadius": "0.5px"
      }
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='paper-grain'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.1 0' in='noise' result='alphaNoise'/><feBlend mode='multiply' in='SourceGraphic' in2='alphaNoise'/></filter><filter id='ink-gain'><feGaussianBlur stdDeviation='0.5'/></filter><filter id='misregistration'><feOffset dx='1' dy='0.5' in='SourceGraphic' result='offset'/><feBlend in='SourceGraphic' in2='offset' mode='normal'/></filter></defs></svg>",
  "globalBodyCss": "font-family:var(--font-body);background-color:var(--bg);color:var(--on-bg);text-transform:uppercase;letter-spacing:0.02em;margin:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility",
  "globalCss": ".ds-layout-frame{margin:0 auto;max-width:1200px;padding:32px;background-color:var(--bg);color:var(--on-bg);font-family:var(--font-body);text-transform:uppercase;letter-spacing:0.02em;position:relative;width:100%;min-height:100%;filter:url(#paper-grain)}.ds-layout-frame *{box-sizing:border-box}",
  "interactionModel": {
    "hover": "none",
    "active": "none",
    "focus": "none",
    "transitionDuration": "0ms",
    "transitionEasing": "none"
  },
  "interactionStyles": null,
  "chartStyle": {
    "background": "#F5F0E8",
    "border": "1px solid #000000",
    "aspectRatio": "4/3",
    "padding": "32px",
    "headlineSpacing": "64px",
    "rowSpacing": "32px",
    "cellSize": "64px",
    "cellGap": "16px",
    "labelPosition": "left",
    "typography": "uppercase geometric sans",
    "accentFill": "solid with optional halftone",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Jost"
  },
  "dashboardStyle": {
    "layout": "A rigid grid of chart-frames, each occupying a 4:3 module. No overlapping elements. All rows aligned to baseline grid.",
    "density": "Moderate – generous whitespace around each chart (32px). Each chart contains 3–6 data rows with repeated pictograms.",
    "panelTreatment": "Every chart is an independent framed block with a black border and off-white fill. No background behind the dashboard itself – the page background is the base paper color.",
    "dataVizStyle": "Exclusively pictogram rows (repeated symbols), no bar/line/pie charts. Text labels on left, aligned to top of each row. No numerical scales.",
    "signatureElement": "A repeating header banner showing a single row of identical pictograms across the top, functioning as a categorical legend."
  },
  "landingStyle": {
    "heroApproach": "A large, centered headline in display type (uppercase) with a row of identical pictograms underneath. No imagery other than the pictograms and the text.",
    "scrollBehavior": "No transition – content appears block by block in a fixed, print-like layout. Each section is a new chart-frame below the previous.",
    "ctaStyle": "A primary button in solid black, all-caps, placed at bottom of hero. No hover effect. Exactly one per section.",
    "signatureMoment": "The hero row of pictograms slides in from the left on page load – but strictly as a single static block (no animation), reinforcing the print aesthetic."
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid black button with white uppercase text. No border, no shadow, sharp corners.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 12px 32px; border: none; border-radius: var(--radius-default); cursor: default;\">SIGNAL</button>",
      "label": "Primary Button",
      "note": "Solid black button with white uppercase text. No border, no shadow, sharp corners."
    },
    {
      "name": "Secondary Button",
      "desc": "White button with black border and black uppercase text. No fill, no shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 12px 32px; border: 1px solid var(--border); border-radius: var(--radius-default); cursor: default;\">TRANSMIT</button>",
      "label": "Secondary Button",
      "note": "White button with black border and black uppercase text. No fill, no shadow."
    },
    {
      "name": "Ghost/Outline Button",
      "desc": "Transparent background, black text, no border on resting state – appears as pure type. For minimal emphasis.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); font-family: var(--font-body); font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 16px; border: none; border-radius: var(--radius-default); cursor: default;\">RESET</button>",
      "label": "Ghost/Outline Button",
      "note": "Transparent background, black text, no border on resting state – appears as pure type. For minimal emphasis."
    }
  ],
  "cards": [
    {
      "name": "Chart Frame Card",
      "desc": "A bordered, off-white rectangle framing statistical content. No rounded corners, no elevation. Mimics a printed chart board.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 32px; width: 100%; max-width: 600px;\"><div style=\"font-family: var(--font-display); font-size: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg); margin-bottom: 16px;\">POPULATION</div><div style=\"display: flex; gap: 8px;\" role=\"img\" aria-label=\"Five red human pictograms\"><div style=\"width: 40px; height: 40px; background-color: var(--secondary-col);\"></div><div style=\"width: 40px; height: 40px; background-color: var(--secondary-col);\"></div><div style=\"width: 40px; height: 40px; background-color: var(--secondary-col);\"></div><div style=\"width: 40px; height: 40px; background-color: var(--secondary-col);\"></div><div style=\"width: 40px; height: 40px; background-color: var(--secondary-col);\"></div></div></div>",
      "label": "Chart Frame Card",
      "note": "A bordered, off-white rectangle framing statistical content. No rounded corners, no elevation. Mimics a printed chart board."
    },
    {
      "name": "Pictogram Cell Card",
      "desc": "A standalone cell showing a single black pictogram in a 64px square. Used to assemble quantities through repetition.",
      "html": "<div style=\"width: 64px; height: 64px; background-color: transparent; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;\"><div style=\"width: 48px; height: 48px; background-color: var(--primary); clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\"></div></div>",
      "label": "Pictogram Cell Card",
      "note": "A standalone cell showing a single black pictogram in a 64px square. Used to assemble quantities through repetition."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "All-caps text input with black border, off-white background. No rounded corners. Placeholder in lowercase – but actual input uppercase.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"display: block; font-family: var(--font-body); font-size: 12px; font-weight: 300; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg); margin-bottom: 4px;\">QUANTITY</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"enter value\" style=\"width: 100%; padding: 8px 12px; background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); font-size: 14px; font-weight: 400; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0em;\"></div>",
      "label": "Text Input",
      "stateLabel": "All-caps text input with black border, off-white background. No rounded corners. Placeholder in lowercase – but actual input uppercase."
    },
    {
      "name": "Select/Dropdown",
      "desc": "Dropdown control with custom arrow, sharp corners, all-caps labels.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"display: block; font-family: var(--font-body); font-size: 12px; font-weight: 300; text-transform: uppercase; margin-bottom: 4px;\">CATEGORY</label><div style=\"position: relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"width: 100%; padding: 8px 12px; background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); font-size: 14px; font-weight: 400; color: var(--on-bg); text-transform: uppercase; -webkit-appearance: none; appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"6\"><path d=\"M0 0 L5 6 L10 0\" fill=\"none\" stroke=\"%23000\" stroke-width=\"1\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 12px center; background-size: 10px 6px;\"><option>MANUFACTURING</option><option>AGRICULTURE</option><option>TRANSPORT</option></select></div></div>",
      "label": "Select/Dropdown",
      "stateLabel": "Dropdown control with custom arrow, sharp corners, all-caps labels."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with black border, filled with solid accent when selected. No rounding.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"cb01-4f83\" style=\"width: 20px; height: 20px; border: 1px solid var(--border); border-radius: 0px; background-color: var(--surface); appearance: none; -webkit-appearance: none; cursor: default;\" checked><label for=\"cb01-4f83\" style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; color: var(--on-bg);\">CONFIRMED</label></div>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with black border, filled with solid accent when selected. No rounding."
    }
  ],
  "extraComponents": [
    {
      "name": "Pictogram Cell",
      "desc": "A 64×64px cell containing a single geometric pictogram (e.g. a human figure). Repeats to show quantity.",
      "html": "<div style=\"width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background-color: transparent;\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"var(--primary)\"><rect x=\"16\" y=\"0\" width=\"16\" height=\"16\" rx=\"0\"/><rect x=\"12\" y=\"16\" width=\"24\" height=\"32\" rx=\"0\"/></svg></div>"
    },
    {
      "name": "Data Row",
      "desc": "A horizontal row containing a label and repeated pictogram cells. Foundation of ISOTYPE charts.",
      "html": "<div style=\"display: flex; align-items: center; height: 64px; width: 100%; gap: 16px;\"><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; letter-spacing: 0em; color: var(--on-bg); min-width: 120px;\">GERMANY</div><div style=\"display: flex; gap: 8px;\" role=\"img\" aria-label=\"Three pictograms\"><div style=\"width: 48px; height: 48px; background-color: var(--primary); clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--primary); clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--primary); clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\"></div></div></div>"
    },
    {
      "name": "Chart Frame (Wrapper)",
      "desc": "A framing rectangle that contains data rows, headline, and grid dividers. Acts as the chart container.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); padding: 32px; width: 100%; max-width: 800px;\"><div style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--on-bg); margin-bottom: 32px;\">STEEL PRODUCTION</div><div style=\"display: flex; flex-direction: column; gap: 32px;\"><div style=\"display: flex; align-items: center; height: 64px; gap: 16px;\"><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; min-width: 120px;\">USA</div><div style=\"display: flex; gap: 8px;\"><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div></div></div><div style=\"background-color: var(--border); height: 1px; width: 100%;\"></div><div style=\"display: flex; align-items: center; height: 64px; gap: 16px;\"><div style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; text-transform: uppercase; min-width: 120px;\">USSR</div><div style=\"display: flex; gap: 8px;\"><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div><div style=\"width: 48px; height: 48px; background-color: var(--secondary-col);\"></div></div></div></div></div>"
    },
    {
      "name": "Legend Key",
      "desc": "A small label-pictogram pair used in chart legends. Pictogram repeated to indicate category.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; padding: 8px;\"><div style=\"width: 24px; height: 24px; background-color: var(--secondary-col);\"></div><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; text-transform: uppercase; letter-spacing: 0em; color: var(--on-bg);\">COAL</div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — INTERNATIONAL PICTURE LANGUAGE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — STATISTICAL TABLES</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — UNEMPLOYMENT RATES 1929</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — EACH FIGURE REPRESENTS 100,000 WORKERS</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — COUNTRY OF ORIGIN</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use numbers to represent quantity — always repeat identical pictograms.",
      "avoid": {
        "html": "<div><span>3</span> factories</div>",
        "label": "Avoid"
      },
      "rule": "Do not use numbers to represent quantity — always repeat identical pictograms.",
      "do": {
        "label": "Do",
        "html": "<div style=\"display:flex;gap:4px\"><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%)\"></div><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%)\"></div><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%)\"></div></div>"
      }
    },
    {
      "desc": "Do not use curved human figures, facial features, or perspective. Keep geometric and flat.",
      "avoid": {
        "html": "<svg viewBox=\"0 0 48 48\"><circle cx=\"24\" cy=\"12\" r=\"10\" fill=\"black\"/><path d=\"M12 24 Q18 30 12 48\" fill=\"black\"/><path d=\"M36 24 Q30 30 36 48\" fill=\"black\"/></svg>",
        "label": "Avoid"
      },
      "rule": "Do not use curved human figures, facial features, or perspective. Keep geometric and flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use lowercase, italic, or serif text. All text must be uppercase geometric sans.",
      "avoid": {
        "html": "<span style=\"font-family: 'Times New Roman'; font-style: italic;\">Statistical Chart</span>",
        "label": "Avoid"
      },
      "rule": "Do not use lowercase, italic, or serif text. All text must be uppercase geometric sans.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use gradient fills, shadows, or rounded corners. Maintain flat, solid shapes.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(red, yellow); border-radius: 8px; box-shadow: 2px 2px 4px gray;\"></div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradient fills, shadows, or rounded corners. Maintain flat, solid shapes.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Do not apply gradients, shadows, rounded corners, or any visual effects that contradict the flat, printed-paper aesthetic."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "background": "#F5F0E8",
    "on-surface": "#000000",
    "on-secondary": "#FFFFFF",
    "outline": "#000000",
    "secondary": "#D32F2F",
    "error": "#D32F2F"
  },
  "typography": {
    "display": {
      "fontFamily": "Jost",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.08em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Jost",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Jost",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Jost",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Jost",
      "fontSize": "12px",
      "fontWeight": 300,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "chip": "0px"
  },
  "spacing": {
    "componentInternal": "0px",
    "sectionInternal": "16px",
    "pageEdge": "32px",
    "gapComponent": "16px",
    "gapSection": "32px",
    "icon": "48px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "ISOTYPE VISUAL EDUCATION",
      "heroHeadline": "STATISTICS WITHOUT NUMBERS",
      "heroSub": "A MODULAR PICTORIAL SYSTEM FOR DIDACTIC DIAGRAMS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000000;color:#FFFFFF;border:2px solid #000000;padding:12px 32px;font-family:Jost;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">INQUIRE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#000000;border:2px solid #000000;padding:12px 32px;font-family:Jost;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;\">LEARN METHOD</button>",
      "navLinks": [
        "PICTURES",
        "STATISTICS",
        "DIAGRAMS",
        "MODULES",
        "ARCHIVE"
      ],
      "features": [
        {
          "title": "SYSTEMATIC PICTURES",
          "desc": "EACH SYMBOL IS A GEOMETRIC SILHOUETTE WITH FLAT TOP AND RIGHT-ANGLE FEET. NO FACIAL FEATURES.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 SYSTEMATIC PICTURES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EACH SYMBOL IS A GEOMETRIC SILHOUETTE WITH FLAT TOP AND RIGHT-ANGLE FEET. NO FACIAL FEATURES.</div></div>"
        },
        {
          "title": "QUANTITY BY REPETITION",
          "desc": "REPEAT IDENTICAL SYMBOLS TO SHOW AMOUNT. NO NUMERALS.",
          "icon": "🔁",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔁 QUANTITY BY REPETITION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">REPEAT IDENTICAL SYMBOLS TO SHOW AMOUNT. NO NUMERALS.</div></div>"
        },
        {
          "title": "MODULAR GRID",
          "desc": "EQUAL MARGINS, FIXED ASPECT RATIO, REUSABLE PICTORIAL UNITS.",
          "icon": "🧱",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧱 MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EQUAL MARGINS, FIXED ASPECT RATIO, REUSABLE PICTORIAL UNITS.</div></div>"
        },
        {
          "title": "OFFSET PRINT TEXTURE",
          "desc": "PAPER GRAIN, HALFTONE DOTS, INK GAIN, MISREGISTRATION.",
          "icon": "🖨️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖨️ OFFSET PRINT TEXTURE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PAPER GRAIN, HALFTONE DOTS, INK GAIN, MISREGISTRATION.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR OWN ISOTYPE CHART",
      "ctaStripHtml": "<a href=\"#\" style=\"color:#000000;font-family:Jost;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">REQUEST MATERIALS →</a>",
      "sidebarBrand": "ISOTYPE VIENNA",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "METHOD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "PLATES",
          "active": false
        }
      ],
      "dashboardTitle": "POPULATION COMPARISON 1930",
      "metrics": [
        {
          "label": "VIENNA",
          "value": "1,800,000",
          "delta": "+2.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "BRATISLAVA",
          "value": "120,000",
          "delta": "+0.8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "BUDAPEST",
          "value": "1,000,000",
          "delta": "-1.2%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PRAGUE",
          "value": "850,000",
          "delta": "+1.5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GRAZ",
          "value": "150,000",
          "delta": "+0.3%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "INDUSTRY SECTORS BY REGION",
      "panelATitle": "FACTORY OUTPUT",
      "panelARows": [
        {
          "label": "VIENNA METAL",
          "value": "45 UNITS",
          "pct": 45
        },
        {
          "label": "BRATISLAVA TEXTILE",
          "value": "12 UNITS",
          "pct": 12
        },
        {
          "label": "BUDAPEST CHEMICAL",
          "value": "28 UNITS",
          "pct": 28
        },
        {
          "label": "PRAGUE MACHINERY",
          "value": "33 UNITS",
          "pct": 33
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "POPULATION BY AGE GROUP",
      "panelBCells": [
        {
          "label": "0-14 MALE",
          "value": "----",
          "state": "ok"
        },
        {
          "label": "0-14 FEMALE",
          "value": "----",
          "state": "warn"
        },
        {
          "label": "15-29 MALE",
          "value": "----",
          "state": "err"
        },
        {
          "label": "15-29 FEMALE",
          "value": "----",
          "state": "ok"
        },
        {
          "label": "30-44 MALE",
          "value": "----",
          "state": "warn"
        },
        {
          "label": "30-44 FEMALE",
          "value": "----",
          "state": "err"
        },
        {
          "label": "45-59 MALE",
          "value": "----",
          "state": "ok"
        },
        {
          "label": "60+ MALE",
          "value": "----",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "VIENNA",
        "BRATISLAVA",
        "BUDAPEST",
        "PRAGUE",
        "GRAZ",
        "LINZ"
      ],
      "series": [
        {
          "data": [
            85,
            12,
            63,
            71,
            9,
            15,
            15,
            15,
            15,
            15,
            15,
            15
          ],
          "label": "FACTORIES",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            42,
            7,
            31,
            38,
            4,
            8,
            8,
            8,
            8,
            8,
            8,
            8
          ],
          "label": "SCHOOLS",
          "axis": "right-1",
          "color": "#D32F2F"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:320px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 32px;background:var(--bg);'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:48px;font-weight:700;line-height:1.25;letter-spacing:0.08em;text-transform:uppercase;color:var(--on-bg);text-align:center;margin-bottom:16px;\">ISOTYPE VISUAL EDUCATION</div><div style=\"font-family:var(--font-display);font-size:30px;font-weight:700;line-height:1.25;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);text-align:center;margin-bottom:32px;\">STATISTICS WITHOUT NUMBERS</div><div style=\"display:flex;gap:8px;justify-content:center;\"><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);\"></div><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);\"></div><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);\"></div><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);\"></div><div style=\"width:48px;height:48px;background:var(--primary);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);\"></div></div><div style=\"margin-top:32px;\"><button style=\"background:var(--primary);color:var(--on-primary);border:none;padding:12px 32px;font-family:var(--font-body);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\">INQUIRE</button></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;gap:32px;padding:32px;'; var features = ['EACH SYMBOL IS A GEOMETRIC SILHOUETTE WITH FLAT TOP AND RIGHT-ANGLE FEET. NO FACIAL FEATURES.', 'REPEAT IDENTICAL SYMBOLS TO SHOW AMOUNT. NO NUMERALS.', 'EQUAL MARGINS, FIXED ASPECT RATIO, REUSABLE PICTORIAL UNITS.', 'PAPER GRAIN, HALFTONE DOTS, INK GAIN, MISREGISTRATION.']; var html = '<div style=\"font-family:var(--font-display);font-size:30px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);margin-bottom:16px;\">PRINCIPLES</div><div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:32px;\">'; features.forEach(function(f){html += '<div style=\"border:1px solid var(--border);background:var(--surface);padding:24px;font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.5;text-transform:uppercase;color:var(--on-bg);\">'+f+'</div>';}); html += '</div>'; el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'border:1px solid var(--border);background:var(--surface);padding:24px;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:0em;text-transform:uppercase;margin-bottom:16px;\">LEGEND</div><div style=\"display:flex;gap:8px;flex-wrap:wrap;\"><div style=\"display:flex;align-items:center;gap:4px;\"><div style=\"width:24px;height:24px;background:var(--primary);\"></div><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;text-transform:uppercase;\">FACTORIES</span></div><div style=\"display:flex;align-items:center;gap:4px;\"><div style=\"width:24px;height:24px;background:var(--secondary-col);\"></div><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;text-transform:uppercase;\">SCHOOLS</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText = 'height:1px;background:var(--border);width:100%;margin:32px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:var(--secondary-col);opacity:0.15;transform:translate(1px,0.5px);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#D32F2F",
    "--color-accent": "#D32F2F",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#D32F2F"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#D32F2F",
    "--accent": "#D32F2F",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#D32F2F"
  }
});
