registerSystem({
  "meta": {
    "name": "Kit-Kat Aesthetic — Original Foil and Sleeve Construction",
    "tagline": "Tactile, industrial packaging aesthetic with two-layer material system: crinkled foil and matte red sleeve, bold white wordmark, geometric segmentation.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Kit-Kat Aesthetic — Original Foil and Sleeve Construction",
    "colors": {
      "on-primary": "#FFFFFF",
      "foil-shadow": "#4D4D4D",
      "outline": "#B0B0B0"
    },
    "typography": {
      "display": {
        "fontFamily": "Barlow Condensed, sans-serif",
        "fontSize": "48px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Barlow Condensed, sans-serif",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter, sans-serif",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter, sans-serif",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625
      },
      "label": {
        "fontFamily": "Inter, sans-serif",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "2px"
    },
    "spacing": {
      "tight": "8px",
      "default": "16px",
      "section-gap": "32px",
      "page-edge": "16px",
      "component-height-sm": "32px",
      "component-height-md": "40px",
      "component-height-lg": "48px",
      "icon-size": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#DA291C",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px 16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#DA291C",
        "textColor": "{colors.on-primary}",
        "padding": "8px 16px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#DA291C",
        "rounded": "{rounded.button}",
        "padding": "8px 16px"
      },
      "foil-card": {
        "backgroundColor": "linear-gradient(90deg, #4D4D4D 0%, #D9D9D9 30%, #FFFFFF 50%, #D9D9D9 70%, #4D4D4D 100%)",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "sleeve-card": {
        "backgroundColor": "#DA291C",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#F5F5F5",
        "textColor": "#1A1A1A",
        "rounded": "{rounded.input}",
        "padding": "8px 12px"
      },
      "input-focus": {
        "backgroundColor": "#F5F5F5",
        "textColor": "#1A1A1A",
        "rounded": "{rounded.input}",
        "padding": "8px 12px"
      },
      "cutout-window": {
        "backgroundColor": "#3E2723",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.chip}",
        "padding": "8px"
      },
      "segmented-strip-item": {
        "backgroundColor": "linear-gradient(90deg, #4D4D4D 0%, #D9D9D9 30%, #FFFFFF 50%, #D9D9D9 70%, #4D4D4D 100%)",
        "rounded": "0px",
        "width": "48px",
        "height": "48px"
      }
    },
    "version": "alpha",
    "description": "Tactile, industrial packaging aesthetic with two-layer material system: crinkled foil and matte red sleeve, bold white wordmark, geometric segmentation. Nostalgic, high-contrast, product-centric.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `kit-kat--aesthetic-original-foil-and-sleeve-construction` refers to the original packaging design of the Kit Kat chocolate wafer bar, as manufactured by Rowntree & Co. (later Nestlé) in the United Kingdom. The identity is centred on a two‑layer packaging system: an inner aluminium foil wrapper (printed in red on the outside) and an outer paper sleeve (or band) carrying the brand name, lo",
      "manual_enrichment_required": false,
      "imagery_count": 5,
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
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.ebay.com",
          "count": 1
        },
        {
          "host": "museumofbrands.com",
          "count": 1
        },
        {
          "host": "borthcat.york.ac.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Kit_Kat",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.ebay.com/",
          "host": "www.ebay.com",
          "institution": "eBay (various sellers)",
          "confidence_original": "low"
        },
        {
          "url": "https://museumofbrands.com/",
          "host": "museumofbrands.com",
          "institution": "Museum of Brands, Packaging and Advertising, London",
          "confidence_original": "low"
        },
        {
          "url": "https://borthcat.york.ac.uk/",
          "host": "borthcat.york.ac.uk",
          "institution": "Borthwick Institute for Archives",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Kit Kat wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Unidentified sans‑serif",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **CONTESTED": "§2.primary_colour_hex** — no attested hex/Pantone/spectrophotometric value for the red foil or sleeve red.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F5F5",
    "--on-bg": "#1A1A1A",
    "--primary": "#DA291C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#D9D9D9",
    "--on-secondary": "#1A1A1A",
    "--surface": "#F5F5F5",
    "--on-bg-muted": "#4D4D4D",
    "--border": "#B0B0B0",
    "--error": "#B00020",
    "--font-display": "'Barlow Condensed', sans-serif",
    "--font-body": "'Inter', sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "2px",
    "--chocolate": "#3E2723",
    "--ok": "#22C55E",
    "--warn": "#FF8C42",
    "--err": "#B00020"
  },
  "semanticColors": {
    "sleeve": "#DA291C",
    "foil-base": "#D9D9D9",
    "foil-shadow": "#4D4D4D",
    "chocolate": "#3E2723",
    "on-sleeve": "#FFFFFF",
    "on-foil": "#1A1A1A",
    "on-chocolate": "#FFFFFF",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#B00020",
    "deltaUp": "#22C55E",
    "deltaDown": "#B00020",
    "deltaFlat": "#4D4D4D",
    "live": "#DA291C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4D4D4D",
    "chartFont": "Space Grotesk"
  },
  "elevation": {
    "level1": "0 2px 0 0 rgba(0,0,0,0.1)",
    "level2": "0 4px 0 0 rgba(0,0,0,0.1)",
    "level3": "0 8px 0 0 rgba(0,0,0,0.1)"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "printed-plastic",
    "params": {
      "foilFilterId": "foil-crinkle",
      "sleeveFilterId": "paper-grain",
      "description": "Metallic foil wrapper with paper sleeve overlay. Foil surfaces use gradient and crinkle noise filter; sleeve surfaces use solid red with subtle grain."
    }
  },
  "interactionModel": {
    "hover": {
      "scale": 1.02,
      "effect": "glow"
    },
    "focus": {
      "ring": "2px solid var(--primary)",
      "offset": "2px"
    },
    "active": {
      "scale": 0.98,
      "duration": "150ms",
      "easing": "ease-out"
    }
  },
  "interactionStyles": ".ds-layout-frame .card:hover, .ds-layout-frame .foil-panel:hover, .ds-layout-frame .sleeve-card:hover { transform: scale(1.02); } .ds-layout-frame .btn:active { transform: scale(0.98); } .ds-layout-frame .input:focus, .ds-layout-frame .cutout-window:focus { border-color: var(--primary); box-shadow: 0 0 0 2px var(--primary); } .ds-layout-frame * { transition: opacity 150ms ease-out, transform 150ms ease-out, background-color 150ms ease-out; }",
  "chartStyle": {
    "backgroundColor": "linear-gradient(90deg, var(--foil-shadow), var(--secondary-col), var(--on-primary), var(--secondary-col), var(--foil-shadow))",
    "gridColor": "var(--outline)",
    "gridStyle": "dashed",
    "fillColor": "var(--primary)",
    "barBorder": "none",
    "labelColor": "var(--on-surface)",
    "labelStyle": "uppercase",
    "fontFamily": "'Inter', sans-serif"
  },
  "dashboardStyle": {
    "layout": "grid with 4 columns on large screens, 2 columns on mobile, each cell is a chocolate finger (rectangular, foil top, sleeve bottom, dashed separators)",
    "density": "spacious with 32px section gap, cards have no padding between foil/sleeve layers",
    "panelTreatment": "each metric displayed inside a foil-card (top) and sleeve-card (bottom) stacked vertically; the sleeve carries the metric label in uppercase white",
    "dataVizStyle": "charts use foil gradient background, dashed grid lines, red bars (primary) with no rounding; labels uppercase",
    "signatureElement": "a dashed snap-line divider between rows, and a cutout window on the hero metric card revealing chocolate texture"
  },
  "landingStyle": {
    "heroApproach": "foil panel (60% height) with crinkle noise overlay, cutout window centered; sleeve panel (40% height) with centered wordmark 'KIT KAT' in white display type; hard horizontal seam between the two",
    "scrollBehavior": "smooth snap on segment breaks; sleeve slides down slightly on scroll (translateY animation); sections separated by dashed snap-lines",
    "ctaStyle": "primary red button with white uppercase text, no border radius; on hover, button scales to 1.02 and foil shimmer plays",
    "signatureMoment": "the foil layer's specular highlight sweeps from left to right (background-position shift) on page load, mimicking crinkle reflection; then the sleeve slides up from below into place"
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='foil-crinkle'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0' in='noise' result='coloredNoise'/><feBlend mode='multiply' in='SourceGraphic' in2='coloredNoise'/></filter><filter id='paper-grain'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0' in='noise' result='coloredNoise'/><feBlend mode='multiply' in='SourceGraphic' in2='coloredNoise'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg);",
  "globalCss": null,
  "buttons": [
    {
      "name": "primary",
      "desc": "Solid red sleeve background with white condensed uppercase text. Highlights the vibrant red and sharp rectangular shape.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 16px; font-weight: 700; line-height: 1; text-transform: uppercase; padding: 8px 16px; letter-spacing: 0.05em; cursor: pointer;\">BREAK</button>",
      "label": "primary",
      "note": "Solid red sleeve background with white condensed uppercase text. Highlights the vibrant red and sharp rectangular shape."
    },
    {
      "name": "secondary",
      "desc": "Transparent background with red text and a dashed red border, evoking the snap-line break pattern.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 2px dashed var(--primary); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 16px; font-weight: 700; line-height: 1; text-transform: uppercase; padding: 6px 14px; letter-spacing: 0.05em; cursor: pointer;\">HAVE A BREAK</button>",
      "label": "secondary",
      "note": "Transparent background with red text and a dashed red border, evoking the snap-line break pattern."
    },
    {
      "name": "foil",
      "desc": "Foil gradient background with dark text, reflecting the crinkled metallic wrapper. Subtle shimmer from background-position animation.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%); background-size: 200% 100%; animation: foil-shimmer 2s linear infinite; color: var(--on-secondary); border: none; border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 16px; font-weight: 700; line-height: 1; text-transform: uppercase; padding: 8px 16px; letter-spacing: 0.05em; cursor: pointer; transition: transform 0.15s ease-out;\">SNAP</button>",
      "label": "foil",
      "note": "Foil gradient background with dark text, reflecting the crinkled metallic wrapper. Subtle shimmer from background-position animation."
    }
  ],
  "cards": [
    {
      "name": "sleeve-card",
      "desc": "Matte red rectangle with bold white centered text. Represents the outer paper sleeve. No rounding, hard edges.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-display); font-size: 24px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.025em; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px;\"><span>KIT KAT</span><span style=\"font-size: 16px; font-weight: 400; letter-spacing: 0.1em; margin-top: 8px;\">ORIGINAL</span></div>",
      "label": "sleeve-card",
      "note": "Matte red rectangle with bold white centered text. Represents the outer paper sleeve. No rounding, hard edges."
    },
    {
      "name": "foil-panel-card",
      "desc": "Foil gradient surface with crinkle noise overlay, representing the metallic inner wrapper. Contains a cutout window revealing chocolate texture.",
      "html": "<div style=\"background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%); border-radius: var(--radius-card); padding: 8px; position: relative; overflow: hidden; min-height: 160px;\"><div style=\"position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px); pointer-events: none;\"></div><div style=\"background: var(--chocolate); color: var(--on-chocolate); border-radius: var(--radius-chip); padding: 8px; margin: 24px auto; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; font-family: var(--font-body); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;\">WAFFER</div></div>",
      "label": "foil-panel-card",
      "note": "Foil gradient surface with crinkle noise overlay, representing the metallic inner wrapper. Contains a cutout window revealing chocolate texture."
    },
    {
      "name": "chocolate-finger-card",
      "desc": "Segmented rectangular card mimicking a single Kit Kat finger. Top half foil, bottom half sleeve with wordmark and snap lines.",
      "html": "<div style=\"display: flex; flex-direction: column; border-radius: var(--radius-card); width: 120px; min-height: 200px;\"><div style=\"flex: 1; background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%); position: relative; overflow: hidden;\"><div style=\"position: absolute; inset: 0; background: repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);\"></div></div><div style=\"background: var(--primary); color: var(--on-primary); padding: 8px; text-align: center; font-family: var(--font-display); font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: -0.025em;\">KIT KAT</div><div style=\"border-top: 2px dashed var(--on-primary); margin: 4px 8px;\"></div></div>",
      "label": "chocolate-finger-card",
      "note": "Segmented rectangular card mimicking a single Kit Kat finger. Top half foil, bottom half sleeve with wordmark and snap lines."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Light grey rectangular input with sharp corners and red focus ring. Matches the industrial packaging feel.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-surface);\">YOUR NAME</label><input style=\"background: var(--surface); color: var(--on-surface); border: 2px solid var(--outline); border-radius: var(--radius-input); padding: 8px 12px; font-family: var(--font-body); font-size: 16px; outline: none; transition: border-color 0.15s, box-shadow 0.15s;\" placeholder=\"e.g. KIT KAT\" onfocus=\"this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 2px var(--primary)'\" onblur=\"this.style.borderColor='var(--outline)'; this.style.boxShadow='none'\"></div>",
      "label": "text-input",
      "stateLabel": "Light grey rectangular input with sharp corners and red focus ring. Matches the industrial packaging feel."
    },
    {
      "name": "select-dropdown",
      "desc": "Rectangular dropdown with foil gradient background and custom arrow made from dashed border.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-surface);\">FLAVOUR</label><div style=\"position: relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%); color: var(--on-secondary); border: none; border-radius: var(--radius-input); padding: 8px 32px 8px 12px; font-family: var(--font-body); font-size: 16px; appearance: none; width: 100%; cursor: pointer;\"><option>MILK CHOCOLATE</option><option>DARK</option><option>WHITE</option></select><div style=\"position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; border-left: 6px dashed var(--primary); border-right: none; border-bottom: none; height: 6px; width: 6px;\"></div></div></div>",
      "label": "select-dropdown",
      "stateLabel": "Rectangular dropdown with foil gradient background and custom arrow made from dashed border."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Sharp rectangular checkbox with dashed border and red fill when checked. Mimics a snap-line divider.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 16px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 20px; height: 20px; border: 2px dashed var(--outline); border-radius: var(--radius-chip); background: var(--surface); cursor: pointer; transition: background 0.15s, border-color 0.15s;\" onchange=\"if(this.checked){this.style.background=\\x27var(--primary)\\x27; this.style.borderColor=\\x27var(--primary)\\x27; this.style.boxShadow=\\x27inset 0 0 0 3px var(--on-primary)\\x27}else{this.style.background=\\x27var(--surface)\\x27; this.style.borderColor=\\x27var(--outline)\\x27; this.style.boxShadow=\\x27none\\x27}\">I want to break this kit kat</label>",
      "label": "checkbox-toggle",
      "stateLabel": "Sharp rectangular checkbox with dashed border and red fill when checked. Mimics a snap-line divider."
    }
  ],
  "extraComponents": [
    {
      "name": "segmented-strip",
      "desc": "Horizontal row of 4 identical rectangular foil items separated by dashed white lines. Represents the divisible bar structure.",
      "html": "<div style=\"display: flex; gap: 0; border-radius: var(--radius-card); overflow: hidden;\"><div style=\"width: 48px; height: 48px; background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%);\"></div><div style=\"width: 2px; height: 48px; border-right: 2px dashed var(--on-primary);\"></div><div style=\"width: 48px; height: 48px; background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%);\"></div><div style=\"width: 2px; height: 48px; border-right: 2px dashed var(--on-primary);\"></div><div style=\"width: 48px; height: 48px; background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%);\"></div><div style=\"width: 2px; height: 48px; border-right: 2px dashed var(--on-primary);\"></div><div style=\"width: 48px; height: 48px; background: linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%);\"></div></div>"
    },
    {
      "name": "snap-line",
      "desc": "Dashed horizontal line using the `+ + +` pattern, acting as a visual section divider.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; width: 100%;\"><div style=\"flex: 1; border-top: 2px dashed var(--outline);\"></div><span style=\"font-family: var(--font-body); font-size: 14px; letter-spacing: 0.2em; color: var(--on-bg-muted);\">+ + +</span><div style=\"flex: 1; border-top: 2px dashed var(--outline);\"></div></div>"
    },
    {
      "name": "cutout-window",
      "desc": "Small chocolate brown rectangle revealing wafer texture, placed over a sleeve panel to mimic the wrapper's cutout.",
      "html": "<div style=\"background: var(--chocolate); color: var(--on-chocolate); border-radius: var(--radius-chip); padding: 8px; display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; font-family: var(--font-body); font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; text-align: center; border: 1px solid var(--on-primary);\">WAFER</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — KIT KAT</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — HAVE A BREAK</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — ORIGINAL FOUR FINGER BAR</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — The original Kit Kat is a chocolate-covered wafer bar first produced by Rowntree&#39;s in 1935. Each finger breaks cleanly along the dashed line.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — NET WT 1.5 OZ</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on cards or buttons destroys the crisp rectangular segmentation that defines the object's breakable structure.",
      "avoid": {
        "html": "<button style=\"background: #DA291C; color: white; border: none; border-radius: 8px; padding: 12px 24px; font-family: Inter, sans-serif; font-size: 16px;\">BREAK</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on cards or buttons destroys the crisp rectangular segmentation that defines the object's breakable structure.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Smooth gradient transitions between foil and sleeve layers removes the hard seam that distinguishes the two-material packaging.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(180deg, #D9D9D9, #DA291C); padding: 16px; border-radius: 0;\">CONTENT</div>",
        "label": "Avoid"
      },
      "rule": "Smooth gradient transitions between foil and sleeve layers removes the hard seam that distinguishes the two-material packaging.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Rotated or stacked text breaks the strict horizontal orientation of the wordmark and product copy.",
      "avoid": {
        "html": "<div style=\"transform: rotate(-90deg); font-family: Barlow Condensed, sans-serif; font-weight: 800; text-transform: uppercase;\">KIT KAT</div>",
        "label": "Avoid"
      },
      "rule": "Rotated or stacked text breaks the strict horizontal orientation of the wordmark and product copy.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Use of serif or script typefaces contradicts the condensed sans-serif wordmark identity.",
      "avoid": {
        "html": "<span style=\"font-family: 'Times New Roman', serif; font-size: 24px; color: #DA291C;\">Kit Kat</span>",
        "label": "Avoid"
      },
      "rule": "Use of serif or script typefaces contradicts the condensed sans-serif wordmark identity.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Avoid any use of soft shadows, blur, or drop shadows that simulate depth. The object is flat printed-plastic with hard edges. Also avoid icons, illustrations, or any graphic beyond the wordmark and chocolate texture.",
    "avoid": {
      "html": "<div style=\"box-shadow: 0 4px 15px rgba(0,0,0,0.2); border-radius: 12px; padding: 20px;\">DO NOT USE</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#DA291C",
    "on-primary": "#FFFFFF",
    "secondary": "#D9D9D9",
    "on-secondary": "#1A1A1A",
    "surface": "#F5F5F5",
    "on-surface": "#1A1A1A",
    "foil-shadow": "#4D4D4D",
    "chocolate": "#3E2723",
    "outline": "#B0B0B0"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "48px",
      "fontWeight": "800",
      "lineHeight": "1.25",
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "30px",
      "fontWeight": "700",
      "lineHeight": "1.375",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "var(--font-body)",
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "1.5",
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "1.625"
    },
    "label": {
      "fontFamily": "var(--font-body)",
      "fontSize": "14px",
      "fontWeight": "500",
      "lineHeight": "1.5",
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "2px"
  },
  "spacing": {
    "tight": "8px",
    "default": "16px",
    "section-gap": "32px",
    "page-edge": "16px",
    "component-height-sm": "32px",
    "component-height-md": "40px",
    "component-height-lg": "48px",
    "icon-size": "20px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "SNAP KIT — ORIGINAL FOIL & SLEEVE CONSTRUCTION",
      "heroHeadline": "BUILD YOUR BAR. SNAP BY SNAP.",
      "heroSub": "A tactile design system for packaging configurators. Each finger is a distinct rectangle. Hard edges. High contrast. No round corners.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START SNAPPING</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW BREAK LINE</button>",
      "navLinks": [
        "FOIL",
        "SLEEVE",
        "SEGMENT",
        "SNAP",
        "STACK"
      ],
      "features": [
        {
          "title": "FOIL GRADIENT",
          "desc": "Crinkled metallic with specular highlight streaks. Linear gradient from shadow to silver to white.",
          "icon": "✨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✨ FOIL GRADIENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Crinkled metallic with specular highlight streaks. Linear gradient from shadow to silver to white.</div></div>"
        },
        {
          "title": "SLEEVE COLOR",
          "desc": "Matte red paper overlay. Hard boundary with foil. No soft transitions.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 SLEEVE COLOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Matte red paper overlay. Hard boundary with foil. No soft transitions.</div></div>"
        },
        {
          "title": "SEGMENTATION GRID",
          "desc": "Divide into 2, 4, or 6 identical rectangular fingers with clean break lines.",
          "icon": "🧱",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧱 SEGMENTATION GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Divide into 2, 4, or 6 identical rectangular fingers with clean break lines.</div></div>"
        },
        {
          "title": "SNAP LINE",
          "desc": "Dashed white border-line (+++) between sections. Visual cue for divisibility.",
          "icon": "⚡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ SNAP LINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Dashed white border-line (+++) between sections. Visual cue for divisibility.</div></div>"
        },
        {
          "title": "CUTOUT WINDOW",
          "desc": "Chocolate brown reveal behind sleeve. Aligns with segmentation gap.",
          "icon": "🍫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🍫 CUTOUT WINDOW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Chocolate brown reveal behind sleeve. Aligns with segmentation gap.</div></div>"
        }
      ],
      "ctaStripHeadline": "SNAP INTO PRODUCTION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">GENERATE WRAPPER</button>",
      "sidebarBrand": "SNAP KIT",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "FOIL SELECT",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SLEEVE SET",
          "active": false
        },
        {
          "icon": "◉",
          "label": "BREAK POINTS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "EXPORT",
          "active": false
        }
      ],
      "dashboardTitle": "SNAP KIT — FACTORY FLOOR",
      "metrics": [
        {
          "label": "FINGERS",
          "value": "48",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SLEEVES",
          "value": "24",
          "delta": "-3",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "BREAK POINTS",
          "value": "192",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "WRAP SPEED",
          "value": "2.4s",
          "delta": "-0.3s",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "SEGMENTATION DISTRIBUTION",
      "panelATitle": "RECENT BREAKS",
      "panelARows": [
        {
          "label": "BATCH 24-01",
          "value": "4 FINGERS",
          "pct": 4
        },
        {
          "label": "BATCH 24-02",
          "value": "6 FINGERS",
          "pct": 6
        },
        {
          "label": "BATCH 24-03",
          "value": "2 FINGERS",
          "pct": 2
        },
        {
          "label": "BATCH 24-04",
          "value": "4 FINGERS",
          "pct": 4
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "MATERIAL STACK",
      "panelBCells": [
        {
          "label": "FOIL TOP",
          "value": "GRADIENT A",
          "state": "ok"
        },
        {
          "label": "FOIL BOTTOM",
          "value": "GRADIENT B",
          "state": "warn"
        },
        {
          "label": "SLEEVE FRONT",
          "value": "MATTE RED",
          "state": "err"
        },
        {
          "label": "SLEEVE BACK",
          "value": "MATTE RED",
          "state": "ok"
        },
        {
          "label": "CHOCOLATE",
          "value": "WAFFER LAYER",
          "state": "warn"
        },
        {
          "label": "CUTOUT",
          "value": "ALIGN SEAM",
          "state": "err"
        },
        {
          "label": "SNAP LINE",
          "value": "DASHED ++",
          "state": "ok"
        },
        {
          "label": "BONDING",
          "value": "HARD EDGE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "BATCH A",
        "BATCH B",
        "BATCH C",
        "BATCH D",
        "BATCH E",
        "BATCH F"
      ],
      "series": [
        {
          "data": [
            12,
            15,
            10,
            18,
            14,
            20,
            20,
            20,
            20,
            20,
            20,
            20
          ],
          "label": "4-FINGER",
          "axis": "left",
          "color": "#DA291C"
        },
        {
          "data": [
            8,
            10,
            12,
            6,
            9,
            11,
            11,
            11,
            11,
            11,
            11,
            11
          ],
          "label": "6-FINGER",
          "axis": "right-1",
          "color": "#D9D9D9"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;min-height:480px;background:var(--bg);'; var foil = document.createElement('div'); foil.style.cssText = 'flex:6;position:relative;overflow:hidden;background:linear-gradient(90deg,var(--foil-shadow) 0%,var(--secondary-col) 30%,var(--on-primary) 50%,var(--secondary-col) 70%,var(--foil-shadow) 100%);'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);pointer-events:none;'; foil.appendChild(noise); var cutout = document.createElement('div'); cutout.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:60px;background:var(--chocolate);border:1px solid var(--on-primary);border-radius:var(--radius-chip);display:flex;align-items:center;justify-content:center;color:var(--on-chocolate);font-family:var(--font-body);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;'; cutout.textContent = 'WAFER'; foil.appendChild(cutout); el.appendChild(foil); var seam = document.createElement('div'); seam.style.cssText = 'height:4px;background:var(--foil-shadow);'; el.appendChild(seam); var sleeve = document.createElement('div'); sleeve.style.cssText = 'flex:4;background:var(--primary);display:flex;flex-direction:column;align-items:center;justify-content:center;'; var wordmark = document.createElement('div'); wordmark.style.cssText = 'font-family:var(--font-display);font-size:48px;font-weight:800;color:var(--on-primary);text-transform:uppercase;letter-spacing:-0.025em;line-height:1.25;'; wordmark.textContent = 'KIT KAT'; sleeve.appendChild(wordmark); var sub = document.createElement('div'); sub.style.cssText = 'font-family:var(--font-body);font-size:16px;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-primary);margin-top:8px;'; sub.textContent = 'ORIGINAL FOUR FINGER BAR'; sleeve.appendChild(sub); el.appendChild(sleeve); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;gap:8px;justify-content:center;padding:32px 0;background:var(--bg);'; for (var i = 0; i < 4; i++) { var finger = document.createElement('div'); finger.style.cssText = 'display:flex;flex-direction:column;width:120px;min-height:200px;border-radius:0;overflow:hidden;'; var foil = document.createElement('div'); foil.style.cssText = 'flex:1;background:linear-gradient(90deg,var(--foil-shadow) 0%,var(--secondary-col) 30%,var(--on-primary) 50%,var(--secondary-col) 70%,var(--foil-shadow) 100%);position:relative;overflow:hidden;'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);pointer-events:none;'; foil.appendChild(noise); finger.appendChild(foil); var sleeve = document.createElement('div'); sleeve.style.cssText = 'padding:8px;background:var(--primary);text-align:center;font-family:var(--font-display);font-size:14px;font-weight:800;text-transform:uppercase;letter-spacing:-0.025em;color:var(--on-primary);'; sleeve.textContent = 'KIT KAT'; finger.appendChild(sleeve); var snapLine = document.createElement('div'); snapLine.style.cssText = 'border-top:2px dashed var(--on-primary);margin:4px 8px;'; finger.appendChild(snapLine); el.appendChild(finger); if (i < 3) { var sep = document.createElement('div'); sep.style.cssText = 'width:2px;height:200px;border-right:2px dashed var(--outline);'; el.appendChild(sep); } } }",
    "panelCRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;gap:4px;padding:16px;background:var(--surface);'; var items = [ {label:'FOIL TOP', value:'GRADIENT A', state:'ok'}, {label:'FOIL BOTTOM', value:'GRADIENT B', state:'warn'}, {label:'SLEEVE FRONT', value:'MATTE RED', state:'err'}, {label:'SLEEVE BACK', value:'MATTE RED', state:'ok'}, {label:'CHOCOLATE', value:'WAFFER LAYER', state:'warn'}, {label:'CUTOUT', value:'ALIGN SEAM', state:'err'}, {label:'SNAP LINE', value:'DASHED ++', state:'ok'}, {label:'BONDING', value:'HARD EDGE', state:'warn'} ]; for (var i = 0; i < items.length; i++) { var item = items[i]; var row = document.createElement('div'); row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-bottom:1px dashed var(--border);font-family:var(--font-body);font-size:12px;text-transform:uppercase;'; var label = document.createElement('span'); label.textContent = item.label; label.style.cssText = 'color:var(--on-bg-muted);letter-spacing:0.1em;'; row.appendChild(label); var value = document.createElement('span'); value.textContent = item.value; value.style.cssText = 'color:var(--on-bg);font-weight:600;'; row.appendChild(value); var state = document.createElement('span'); var stateColor = item.state === 'ok' ? 'var(--ok)' : item.state === 'warn' ? 'var(--warn)' : 'var(--err)'; state.style.cssText = 'width:10px;height:10px;border-radius:0;background:' + stateColor + ';'; row.appendChild(state); el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background = 'linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%)'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);pointer-events:none;'; el.appendChild(noise); }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "sectionSeparator": "function() { var div = document.createElement('div'); div.style.cssText = 'display:flex;align-items:center;gap:8px;width:100%;padding:8px 0;'; var leftLine = document.createElement('div'); leftLine.style.cssText = 'flex:1;border-top:2px dashed var(--outline);'; div.appendChild(leftLine); var plus = document.createElement('span'); plus.style.cssText = 'font-family:var(--font-body);font-size:14px;letter-spacing:0.2em;color:var(--on-bg-muted);'; plus.textContent = '+ + +'; div.appendChild(plus); var rightLine = document.createElement('div'); rightLine.style.cssText = 'flex:1;border-top:2px dashed var(--outline);'; div.appendChild(rightLine); return div; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'linear-gradient(135deg, var(--foil-shadow) 0%, var(--secondary-col) 30%, var(--on-primary) 50%, var(--secondary-col) 70%, var(--foil-shadow) 100%)'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(0,0,0,0.02) 2px,rgba(0,0,0,0.02) 4px);pointer-events:none;'; el.appendChild(noise); }",
    "surfaceOverlay": "function(el) { var overlay = document.createElement('div'); overlay.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(0,0,0,0.02) 3px, rgba(0,0,0,0.02) 6px);'; el.appendChild(overlay); }"
  },
  "ambientCanvas": "function(el, tick) { var p = (tick * 30) % 300; el.style.cssText = 'position:absolute;inset:0;background:linear-gradient(90deg, var(--foil-shadow) 0%, var(--secondary-col) ' + (p - 20) + '%, var(--on-primary) ' + p + '%, var(--secondary-col) ' + (p + 20) + '%, var(--foil-shadow) 100%); background-size: 300% 100%;'; var noise = document.createElement('div'); noise.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px); pointer-events:none;'; el.appendChild(noise); }",
  "shadcnTokens": {
    "--color-background": "#F5F5F5",
    "--color-popover": "#F5F5F5",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#F5F5F5",
    "--color-muted": "#F5F5F5",
    "--color-muted-foreground": "#4D4D4D",
    "--color-primary": "#DA291C",
    "--color-ring": "#DA291C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#D9D9D9",
    "--color-accent": "#D9D9D9",
    "--color-secondary-foreground": "#1A1A1A",
    "--color-accent-foreground": "#1A1A1A",
    "--color-border": "#B0B0B0",
    "--color-input": "#B0B0B0",
    "--color-destructive": "#B00020"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F5F5",
    "--popover": "#F5F5F5",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#F5F5F5",
    "--muted": "#F5F5F5",
    "--muted-foreground": "#4D4D4D",
    "--primary": "#DA291C",
    "--ring": "#DA291C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#D9D9D9",
    "--accent": "#D9D9D9",
    "--secondary-foreground": "#1A1A1A",
    "--accent-foreground": "#1A1A1A",
    "--border": "#B0B0B0",
    "--input": "#B0B0B0",
    "--destructive": "#B00020"
  }
});
