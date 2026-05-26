registerSystem({
  "meta": {
    "name": "Bank of England Banknote Design System",
    "tagline": "Ceremonial, symmetrical, craft-oriented interface language rooted in security-printing heritage.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "null",
    "colors": {
      "primary": "#1B2A4A",
      "secondary": "#005A6E",
      "accent": "#CC5500",
      "surface": "#FFFDF5",
      "outline": "#8C6A3A",
      "error": "#D32F2F",
      "on-primary": "#FFFFFF",
      "on-secondary": "#FFFFFF",
      "on-surface": "#1B2A4A",
      "on-error": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Playfair Display",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Playfair Display",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Playfair Display",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Courier Prime",
        "fontSize": "8px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
      },
      "microtext": {
        "fontFamily": "Playfair Display",
        "fontSize": "4px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0.025em",
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
      "icon": "24px",
      "component-padding": "16px",
      "section-padding": "32px",
      "page-padding": "32px",
      "component-gap": "16px",
      "section-gap": "32px",
      "component-height-sm": "32px",
      "component-height-md": "48px",
      "component-height-lg": "64px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#1B2A4A",
        "textColor": "#FFFFFF",
        "rounded": "0px",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#1B2A4A",
        "textColor": "#FFFFFF",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#FFFDF5",
        "textColor": "#1B2A4A",
        "rounded": "0px",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "#FFFDF5",
        "textColor": "#1B2A4A",
        "rounded": "0px",
        "padding": "12px"
      },
      "portrait-medallion": {
        "backgroundColor": "#FFFDF5",
        "rounded": "0px",
        "size": "96px"
      }
    },
    "version": "alpha",
    "description": "A digital interface system translating Bank of England banknote aesthetics: ceremonial, symmetrical, craft-oriented, with intaglio lines, limited spot colors, paper grain, guilloché patterns, and authoritative serif/condensed typography.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `banknote-design-bank-of-england` refers to the visual identity system of banknotes issued by the Bank of England, the central bank of the United Kingdom, from its founding in 1694 to the present. This encompasses the full range of design elements—typography, illustration, ornament, colour, material substrate, and production processes—across all denominational series, from handwritten not",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 3
        },
        {
          "host": "www.bankofengland.co.uk",
          "count": 2
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Bank_of_England_note_issues",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Banknotes_of_the_pound_sterling",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.bankofengland.co.uk/museum",
          "host": "www.bankofengland.co.uk",
          "institution": "Bank of England Museum",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.bankofengland.co.uk/banknotes/withdrawn-banknotes",
          "host": "www.bankofengland.co.uk",
          "institution": "Bank of England",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Britannia",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Blackletter (gothic) script style",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Serifed roman style",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "inferred"
        },
        {
          "name": "Bank of England wordmark lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Custom denominational numerals",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour": "No official colour standards published.** Pantone, RAL, Munsell, NCS values for any note are unknown. Hex values in this record are crude approximations from digital reproductions, all tagged [unverified]. Resolution requires access to internal design specifications or spectrophotometry of genuine notes.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFDF5",
    "--on-bg": "#1B2A4A",
    "--primary": "#1B2A4A",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#005A6E",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFDF5",
    "--on-bg-muted": "#8C6A3A",
    "--border": "#8C6A3A",
    "--error": "#D32F2F",
    "--font-display": "Inter",
    "--font-body": "Playfair Display",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "info": "#005A6E",
    "success": "#2E8B57",
    "warning": "#C85A17",
    "danger": "#D32F2F",
    "foil-gold": "#D4AF37",
    "foil-silver": "#C0C0C0",
    "watermark": "rgba(27, 42, 74, 0.1)",
    "color-shift-a": "#2E8B57",
    "color-shift-b": "#4B0082",
    "err": "#D32F2F",
    "ok": "#2E8B57",
    "warn": "#C85A17",
    "deltaUp": "#2E8B57",
    "deltaDown": "#D32F2F",
    "deltaFlat": "#8C6A3A",
    "live": "#1B2A4A",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#8C6A3A",
    "chartFont": "Playfair Display"
  },
  "chartStyle": {
    "fontFamily": "\"Inter\", sans-serif",
    "labelFont": "\"Playfair Display\", serif",
    "titleFont": "\"Playfair Display\", serif",
    "borderColor": "#8C6A3A",
    "gridColor": "rgba(139, 106, 58, 0.3)",
    "axisColor": "#1B2A4A",
    "tooltipBg": "#FFFDF5",
    "tooltipBorder": "#8C6A3A",
    "colorPalette": [
      "#1B2A4A",
      "#005A6E",
      "#CC5500",
      "#8C6A3A",
      "#D32F2F",
      "#2E8B57"
    ],
    "shadow": "drop-shadow(0 1px 0 rgba(0,0,0,0.1))",
    "labelColor": "#8C6A3A"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainType": "fractalNoise",
      "baseFrequency": "0.65",
      "numOctaves": 3,
      "blendMode": "multiply",
      "opacity": 0.08,
      "overlayLayer": "::before",
      "position": "fixed",
      "pointerEvents": "none",
      "zIndex": 9998
    }
  },
  "interactionModel": {
    "hover": {
      "opacity": [
        0.8,
        0.9
      ],
      "transitionDuration": "0ms",
      "transitionTiming": "step-start"
    },
    "focus": {
      "outline": "none",
      "transitionDuration": "0ms"
    },
    "active": {
      "opacity": 0.65,
      "transitionDuration": "0ms"
    }
  },
  "spacing": {
    "icon": "24px",
    "component-padding": "16px",
    "section-padding": "32px",
    "page-padding": "32px",
    "component-gap": "16px",
    "section-gap": "32px",
    "component-height-sm": "32px",
    "component-height-md": "48px",
    "component-height-lg": "64px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "raised-ink": "drop-shadow(0 1px 0 rgba(0,0,0,0.15))",
    "foil-glow": "drop-shadow(0 1px 0 rgba(0,0,0,0.12))",
    "none": "none",
    "stackContext": {
      "base": 0,
      "watermark": 10,
      "security-thread": 20,
      "intaglio-portrait": 30,
      "foil-patch": 40,
      "microtext-overlay": 50
    }
  },
  "dashboardStyle": {
    "layout": "Centered bilateral symmetry, 1:2 portrait aspect ratio for primary canvas, double-line borders separating panels.",
    "density": "High around focal points (headlines, values) with deliberate voids (watermark zones) for breathing room.",
    "panelTreatment": "Frame with double-line border, corner ornaments (crown, rose, thistle), microtext separators between rows.",
    "dataVizStyle": "Guilloché-inspired background patterns, solid spot-color fills, intaglio stroke for data lines, no gradients.",
    "signatureElement": "Governor signature script at lower left corner, 8px font size, Playfair Display italic."
  },
  "landingStyle": {
    "heroApproach": "Single banknote face centered, at-rest uncirculated state, with watermark overlay and security thread visible.",
    "scrollBehavior": "None – the note remains static; content fades in via opacity to preserve the engraved stillness.",
    "ctaStyle": "Double-line bordered button with intaglio shadow, reading 'VIEW DENOMINATIONS'.",
    "signatureMoment": "A foil patch with gold shimmer animation on hover, revealing the denomination numeral in condensed sans-serif."
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='paperGrain' x='0%' y='0%' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0' in='noise' result='alphaNoise'/><feBlend mode='multiply' in='SourceGraphic' in2='alphaNoise'/></filter><filter id='inkSpread'><feMorphology operator='dilate' radius='0.3' in='SourceAlpha'/><feGaussianBlur stdDeviation='0.2'/><feMerge><feMergeNode/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9998; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\"); background-repeat: repeat; mix-blend-mode: multiply; } .ds-layout-frame .double-border { border: 2px solid var(--border); box-shadow: inset 0 0 0 1px var(--border); } .ds-layout-frame .intaglio-shadow { filter: drop-shadow(0 1px 0 rgba(0,0,0,0.15)); } .ds-layout-frame .foil-glow { filter: drop-shadow(0 1px 0 rgba(0,0,0,0.12)) brightness(1.02); }",
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame textarea { transition: opacity 0ms step-start; } .ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame input:hover, .ds-layout-frame select:hover, .ds-layout-frame textarea:hover { opacity: 0.85; } .ds-layout-frame button:active, .ds-layout-frame a:active { opacity: 0.65; } .ds-layout-frame input:focus, .ds-layout-frame select:focus, .ds-layout-frame textarea:focus { outline: none; }",
  "buttons": [
    {
      "name": "primary",
      "desc": "Primary action button with intaglio-inspired raised-ink shadow and solid fill. Simulates heavy engraved ink.",
      "html": "<button onmouseenter=\"this.style.opacity='0.85'\" onmouseleave=\"this.style.opacity='0.9'\" style=\"background:var(--primary); color:var(--on-primary); border:2px solid var(--border); border-radius:var(--radius-btn); padding:var(--component-padding); font-family:var(--font-display); font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; box-shadow:var(--raised-ink); cursor:pointer; opacity:0.9; transition:opacity 0ms;\">PROMISSORY NOTE</button>",
      "label": "primary",
      "note": "Primary action button with intaglio-inspired raised-ink shadow and solid fill. Simulates heavy engraved ink."
    },
    {
      "name": "secondary",
      "desc": "Secondary action button with surface background and outline, resembling a blank note area with ink border.",
      "html": "<button onmouseenter=\"this.style.opacity='0.85'\" onmouseleave=\"this.style.opacity='0.9'\" style=\"background:var(--surface); color:var(--primary); border:2px solid var(--border); border-radius:var(--radius-btn); padding:var(--component-padding); font-family:var(--font-display); font-size:14px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; box-shadow:var(--raised-ink); cursor:pointer; opacity:0.9; transition:opacity 0ms;\">BANK NOTE</button>",
      "label": "secondary",
      "note": "Secondary action button with surface background and outline, resembling a blank note area with ink border."
    },
    {
      "name": "ghost",
      "desc": "Ghost button with no fill, only a border, evoking a watermark or blind emboss effect.",
      "html": "<button onmouseenter=\"this.style.opacity='0.85'\" onmouseleave=\"this.style.opacity='0.85'\" style=\"background:transparent; color:var(--primary); border:1px solid var(--primary); border-radius:var(--radius-btn); padding:var(--component-padding); font-family:var(--font-display); font-size:14px; font-weight:400; text-transform:uppercase; letter-spacing:0.05em; cursor:pointer; opacity:0.85; transition:opacity 0ms;\">CANCELLED</button>",
      "label": "ghost",
      "note": "Ghost button with no fill, only a border, evoking a watermark or blind emboss effect."
    }
  ],
  "cards": [
    {
      "name": "standard",
      "desc": "Standard card with double-line border simulating banknote frame. Inner and outer border, corner ornament implied via border-style double.",
      "html": "<div style=\"background:var(--surface); color:var(--on-bg); border:4px double var(--border); border-radius:var(--radius-card); padding:24px; margin:16px; box-shadow:var(--raised-ink);\"><div style=\"font-family:var(--font-body); font-size:14px; text-transform:uppercase; letter-spacing:0.025em;\">DENOMINATION: FIVE POUNDS</div><div style=\"font-family:var(--font-display); font-size:32px; font-weight:900; margin-top:8px; letter-spacing:-0.025em;\">£5</div><div style=\"margin-top:16px; padding-top:8px; border-top:1px solid var(--border); font-family:var(--font-body); font-size:10px; text-transform:uppercase; letter-spacing:0.1em;\">ISSUED BY THE GOVERNOR</div></div>",
      "label": "standard",
      "note": "Standard card with double-line border simulating banknote frame. Inner and outer border, corner ornament implied via border-style double."
    },
    {
      "name": "portrait",
      "desc": "Card featuring a simplified portrait medallion at center, with intaglio shadow. Mimics the oval portrait on banknotes.",
      "html": "<div style=\"background:var(--surface); color:var(--on-bg); border:2px solid var(--border); border-radius:var(--radius-card); padding:32px; margin:16px; display:flex; flex-direction:column; align-items:center; box-shadow:var(--raised-ink);\"><div style=\"width:96px; height:96px; border:3px solid var(--border); border-radius:50%; background:var(--surface); display:flex; align-items:center; justify-content:center; box-shadow:var(--raised-ink); margin-bottom:16px;\"><span style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:var(--primary);\">HER MAJESTY</span></div><div style=\"font-family:var(--font-body); font-size:16px; text-transform:uppercase; letter-spacing:0.05em; text-align:center;\">QUEEN ELIZABETH II</div><div style=\"font-family:var(--font-display); font-size:12px; font-weight:400; margin-top:8px; opacity:0.7;\">1926–2022</div></div>",
      "label": "portrait",
      "note": "Card featuring a simplified portrait medallion at center, with intaglio shadow. Mimics the oval portrait on banknotes."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input with outlined border, no rounded corners, evoking a ledger entry field on a banknote.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px;\"><label style=\"font-family:var(--font-body); font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:var(--on-bg);\">ACCOUNT NUMBER</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"000000\" style=\"background:var(--surface); color:var(--on-bg); border:2px solid var(--border); border-radius:var(--radius-input); padding:12px; font-family:var(--font-display); font-size:16px; font-weight:700; letter-spacing:0.025em; text-transform:uppercase; outline:none;\" /></div>",
      "label": "text-input",
      "stateLabel": "Text input with outlined border, no rounded corners, evoking a ledger entry field on a banknote."
    },
    {
      "name": "select",
      "desc": "Select dropdown styled as a banknote border element, with chevron indicator.",
      "html": "<div style=\"display:flex; flex-direction:column; gap:4px;\"><label style=\"font-family:var(--font-body); font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:var(--on-bg);\">DENOMINATION</label><div style=\"position:relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"appearance:none; background:var(--surface); color:var(--on-bg); border:2px solid var(--border); border-radius:var(--radius-input); padding:12px 40px 12px 12px; font-family:var(--font-body); font-size:14px; text-transform:uppercase; letter-spacing:0.025em; width:100%; outline:none; cursor:pointer;\"><option>£5 NOTE</option><option>£10 NOTE</option><option>£20 NOTE</option><option>£50 NOTE</option></select><span style=\"position:absolute; right:12px; top:50%; transform:translateY(-50%); font-size:10px; pointer-events:none;\">▼</span></div></div>",
      "label": "select",
      "stateLabel": "Select dropdown styled as a banknote border element, with chevron indicator."
    },
    {
      "name": "checkbox",
      "desc": "Checkbox styled as a micro-perforation pattern, using a repeating radial gradient to simulate tiny holes.",
      "html": "<div style=\"display:flex; align-items:center; gap:8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"ck-891d\" style=\"width:20px; height:20px; border:2px solid var(--border); border-radius:0px; background:var(--surface); appearance:none; cursor:pointer; position:relative;\" checked /><label for=\"ck-891d\" style=\"font-family:var(--font-body); font-size:12px; text-transform:uppercase; letter-spacing:0.05em; color:var(--on-bg);\">CERTIFIED</label></div>",
      "label": "checkbox",
      "stateLabel": "Checkbox styled as a micro-perforation pattern, using a repeating radial gradient to simulate tiny holes."
    }
  ],
  "extraComponents": [
    {
      "name": "portrait-medallion",
      "desc": "Oval portrait medallion with double-line border and intaglio shadow, as on banknotes.",
      "html": "<div style=\"width:96px; height:120px; border:3px solid var(--border); border-radius:50%; background:var(--surface); display:flex; align-items:center; justify-content:center; box-shadow:var(--raised-ink); position:relative;\"><div style=\"width:80px; height:104px; border:1px solid var(--border); border-radius:50%; display:flex; align-items:center; justify-content:center;\"><span style=\"font-family:var(--font-body); font-size:8px; text-transform:uppercase; letter-spacing:0.1em; color:var(--primary); text-align:center;\">MONARCH</span></div></div>"
    },
    {
      "name": "security-thread",
      "desc": "Vertical security thread, a solid dashed line (simulating embedded thread) near the edge.",
      "html": "<div style=\"width:6px; height:160px; background:repeating-linear-gradient(to bottom, var(--primary) 0px, var(--primary) 8px, transparent 8px, transparent 12px); border:1px solid var(--border); margin:8px;\"></div>"
    },
    {
      "name": "foil-patch",
      "desc": "Foil patch with metallic gradient (gold) and thin emboss shadow. Only element allowed to use gradient.",
      "html": "<div style=\"width:64px; height:64px; background:linear-gradient(135deg, var(--primary), var(--primary), var(--primary)); border:1px solid var(--border); box-shadow:var(--foil-glow); border-radius:0px; display:flex; align-items:center; justify-content:center;\"><span style=\"font-family:var(--font-display); font-size:8px; font-weight:900; text-transform:uppercase; color:#1B2A4A;\">£</span></div>"
    },
    {
      "name": "microtext-border",
      "desc": "Repeating microtext line simulating edge lettering on banknotes. Uses 4pt font.",
      "html": "<div style=\"overflow:hidden; white-space:nowrap; padding:2px 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border);\"><span style=\"font-family:var(--font-body); font-size:4px; letter-spacing:0.025em; text-transform:uppercase; color:var(--on-bg);\">BANK OF ENGLAND BANK OF ENGLAND BANK OF ENGLAND</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — DISPLAY — TEN POUNDS</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — HEADLINE — I PROMISE TO PAY THE BEARER</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Title — Bank of England Note</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Body — This note is legal tender for all debts, public and private.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Label — SERIAL NUMBER 000000</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any component – breaks the security-printing rigidity.",
      "avoid": {
        "html": "<div style=\"border-radius:16px; background:#FFFDF5; border:2px solid #1B2A4A; padding:16px;\">Incorrect card with rounded corners</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any component – breaks the security-printing rigidity.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Blurred drop shadows or glassmorphism – undermines intaglio and paper materiality.",
      "avoid": {
        "html": "<div style=\"box-shadow:0 4px 30px rgba(0,0,0,0.3); backdrop-filter:blur(4px); background:rgba(255,253,245,0.5); border-radius:8px;\">Blurred glassmorphism card</div>",
        "label": "Avoid"
      },
      "rule": "Blurred drop shadows or glassmorphism – undermines intaglio and paper materiality.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Asymmetric layout – must maintain bilateral symmetry like a banknote face.",
      "avoid": {
        "html": "<div style=\"display:flex; justify-content:flex-start;\"><span style=\"margin-right:auto;\">Left-aligned text</span><span>Right element</span></div>",
        "label": "Avoid"
      },
      "rule": "Asymmetric layout – must maintain bilateral symmetry like a banknote face.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients outside foil patches – only foil areas may have metallic gradient.",
      "avoid": {
        "html": "<button style=\"background:linear-gradient(to right, #1B2A4A, #005A6E); color:white; border:0; padding:12px;\">Gradient button (not allowed)</button>",
        "label": "Avoid"
      },
      "rule": "Gradients outside foil patches – only foil areas may have metallic gradient.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Avoid any visual treatment that suggests digital-native interfaces: rounded corners, soft shadows, gradients, glows, transparency beyond foil patches, motion blur, or asymmetrical compositions. The system must feel printed, not pixelated."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#1B2A4A",
    "secondary": "#005A6E",
    "accent": "#CC5500",
    "surface": "#FFFDF5",
    "outline": "#8C6A3A",
    "error": "#D32F2F",
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "on-surface": "#1B2A4A",
    "on-error": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Playfair Display",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.5,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Playfair Display",
      "fontSize": "16px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Playfair Display",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Courier Prime",
      "fontSize": "8px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "BANK OF ENGLAND · EST. 1694",
      "heroHeadline": "SOVEREIGN NOTE DESIGN SYSTEM",
      "heroSub": "A CEREMONIAL INTERFACE FOR CRAFTING AND VERIFYING SECURITY PRINT LAYOUTS, ROOTED IN INTAGLIO AND GUILLOCHÉ TRADITION.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#1B2A4A;color:#FFFFFF;border:none;padding:16px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\\x27>OPEN DESIGN REGISTER</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:transparent;color:#1B2A4A;border:2px solid #8C6A3A;padding:14px 16px;font-family:Inter;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;\\x27>VIEW ARCHIVED SERIES</button>",
      "navLinks": [
        "REGISTRY",
        "PRESS",
        "WATERMARK",
        "GUARDIAN"
      ],
      "features": [
        {
          "title": "PORTRAIT MEDALLION",
          "desc": "OVAL FRAME WITH DOUBLE-LINE BORDER AND ENGRAVED SHADOW, CENTRED ON THE NOTE FACE.",
          "icon": "🏛️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏛️ PORTRAIT MEDALLION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">OVAL FRAME WITH DOUBLE-LINE BORDER AND ENGRAVED SHADOW, CENTRED ON THE NOTE FACE.</div></div>"
        },
        {
          "title": "GUILLOCHÉ PATTERN",
          "desc": "REPEATING GEOMETRIC LATHE-WORK BACKGROUND DENSITY ADJUSTABLE PER DENOMINATION.",
          "icon": "🔐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔐 GUILLOCHÉ PATTERN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">REPEATING GEOMETRIC LATHE-WORK BACKGROUND DENSITY ADJUSTABLE PER DENOMINATION.</div></div>"
        },
        {
          "title": "SECURITY THREAD",
          "desc": "VERTICAL DASHED OR SOLID LINE NEAR EDGE WITH METALLIC FOIL OVERLAY OPTIONS.",
          "icon": "🛡️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛡️ SECURITY THREAD</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">VERTICAL DASHED OR SOLID LINE NEAR EDGE WITH METALLIC FOIL OVERLAY OPTIONS.</div></div>"
        },
        {
          "title": "GOVERNOR SIGNATURE",
          "desc": "SCRIPT SIGNATURE PLACED LOWER-LEFT, CONFIRMED BY MICROTEXT BORDER INTEGRITY.",
          "icon": "🖋️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖋️ GOVERNOR SIGNATURE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SCRIPT SIGNATURE PLACED LOWER-LEFT, CONFIRMED BY MICROTEXT BORDER INTEGRITY.</div></div>"
        }
      ],
      "ctaStripHeadline": "INSTITUTIONAL LICENSING NOW AVAILABLE FOR CENTRAL BANKS AND MINT OFFICES.",
      "ctaStripHtml": "<p style='font-family:Playfair Display; font-size:14px; letter-spacing:0.025em; color:#1B2A4A; text-transform:uppercase;'>REQUEST A CONSULTATION WITH THE DESIGN REGISTRY</p>",
      "sidebarBrand": "SOVEREIGN NOTE · BANK OF ENGLAND",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LAYOUT REGISTER",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SIGNATORY ARCHIVE",
          "active": false
        },
        {
          "icon": "◉",
          "label": "FOIL SPECIFICATION",
          "active": false
        },
        {
          "icon": "◉",
          "label": "WATERMARK ZONE",
          "active": false
        }
      ],
      "dashboardTitle": "NOTE DESIGN WORKBENCH · SERIES G",
      "metrics": [
        {
          "label": "NOTES IN CIRCULATION",
          "value": "4.7B",
          "delta": "+2.3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACTIVE DENOMINATIONS",
          "value": "5",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ENGRAVING PLATES",
          "value": "38",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GUILLOCHÉ VARIANTS",
          "value": "12",
          "delta": "+24%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "DENOMINATION PRODUCTION VOLUME (Q1–Q3)",
      "panelATitle": "INTAGLIO ELEMENT REGISTER",
      "panelARows": [
        {
          "label": "PORTRAIT MEDALLION",
          "value": "HM THE KING · SERIES G",
          "pct": 0
        },
        {
          "label": "GUILLOCHÉ DENSITY",
          "value": "HIGH · 32 LINES PER MM",
          "pct": 32
        },
        {
          "label": "MICROTEXT BORDER",
          "value": "REPEATING 'BANK OF ENGLAND' · 4PT",
          "pct": 4
        },
        {
          "label": "CORNER ORNAMENTS",
          "value": "CROWN · ROSE · THISTLE",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "NOTE SPECIFICATION SHEET",
      "panelBCells": [
        {
          "label": "SERIES",
          "value": "G",
          "state": "ok"
        },
        {
          "label": "DENOMINATION",
          "value": "£20",
          "state": "warn"
        },
        {
          "label": "ISSUE DATE",
          "value": "2024-03-20",
          "state": "err"
        },
        {
          "label": "PAPER WEIGHT",
          "value": "90 G/M²",
          "state": "ok"
        },
        {
          "label": "SECURITY THREAD TYPE",
          "value": "METALLIC DASHED",
          "state": "warn"
        },
        {
          "label": "FOIL PATCH COLOUR",
          "value": "GOLD · #D4AF37",
          "state": "err"
        },
        {
          "label": "WATERMARK POSITION",
          "value": "LOWER RIGHT ZONE",
          "state": "ok"
        },
        {
          "label": "GOVERNOR SIGNATORY",
          "value": "ANDREW BAILEY",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "£5",
        "£10",
        "£20",
        "£50",
        "£100",
        "CUSTOM"
      ],
      "series": [
        {
          "data": [
            120,
            240,
            580,
            190,
            45,
            8,
            8,
            8,
            8,
            8,
            8,
            8
          ],
          "label": "NOTES PRINTED (MILLIONS)",
          "axis": "left",
          "color": "#1B2A4A"
        },
        {
          "data": [
            90,
            180,
            410,
            130,
            20,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "label": "NOTES RETIRED (MILLIONS)",
          "axis": "right-1",
          "color": "#005A6E"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:240px;background:var(--surface);color:var(--on-bg);border:4px double var(--border);margin:0;padding:32px;box-shadow:var(--raised-ink);'; el.innerHTML = '<div style=\"display:flex;flex-direction:column;align-items:center;gap:8px;width:100%;\"><div style=\"width:96px;height:96px;border:3px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:var(--raised-ink);\"><span style=\"font-family:var(--font-body);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);text-align:center;\">MONARCH</span></div><div style=\"font-family:var(--font-display);font-size:32px;font-weight:900;letter-spacing:-0.025em;text-transform:uppercase;color:var(--primary);\">£20</div><div style=\"font-family:var(--font-body);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg-muted);\">SOVEREIGN NOTE</div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:var(--component-gap);padding:var(--section-padding);background:var(--surface);color:var(--on-bg);'; el.innerHTML = '<div style=\"border:2px solid var(--border);padding:24px;box-shadow:var(--raised-ink);\"><div style=\"font-family:var(--font-body);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg-muted);margin-bottom:8px;\">PORTRAIT</div><div style=\"width:64px;height:64px;border:2px solid var(--border);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto;\"><span style=\"font-family:var(--font-body);font-size:8px;text-transform:uppercase;\">HM</span></div></div><div style=\"border:2px solid var(--border);padding:24px;box-shadow:var(--raised-ink);\"><div style=\"font-family:var(--font-body);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg-muted);margin-bottom:8px;\">SECURITY THREAD</div><div style=\"width:4px;height:120px;background:repeating-linear-gradient(to bottom,var(--primary) 0px,var(--primary) 6px,transparent 6px,transparent 10px);margin:0 auto;\"></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:var(--section-padding);background:var(--surface);color:var(--on-bg);border:2px solid var(--border);margin:var(--section-padding);box-shadow:var(--raised-ink);'; el.innerHTML = '<div style=\"font-family:var(--font-body);font-size:10px;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid var(--border);padding-bottom:8px;margin-bottom:16px;\">NOTE SPECIFICATION SHEET</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:12px;\"><div><span style=\"font-family:var(--font-body);font-size:8px;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg-muted);\">SERIES</span><div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;\">G</div></div><div><span style=\"font-family:var(--font-body);font-size:8px;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg-muted);\">DENOMINATION</span><div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;\">£20</div></div><div><span style=\"font-family:var(--font-body);font-size:8px;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg-muted);\">PAPER</span><div style=\"font-family:var(--font-body);font-size:12px;\">90 G/M²</div></div><div><span style=\"font-family:var(--font-body);font-size:8px;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg-muted);\">GOVERNOR</span><div style=\"font-family:var(--font-body);font-size:12px;\">ANDREW BAILEY</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='width:100%;height:0;border-top:2px double var(--border);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:2;background-image:radial-gradient(circle at 30% 40%, rgba(27,42,74,0.03) 0%, transparent 60%);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%'); svg.style.position = 'absolute'; svg.style.top = '0'; svg.style.left = '0'; svg.style.pointerEvents = 'none'; svg.style.zIndex = '5'; var pattern = document.createElementNS('http://www.w3.org/2000/svg', 'pattern'); pattern.setAttribute('id', 'ambient-guilloche'); pattern.setAttribute('width', '40'); pattern.setAttribute('height', '40'); pattern.setAttribute('patternUnits', 'userSpaceOnUse'); var path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', 'M0,20 Q20,0 40,20 Q20,40 0,20'); path.setAttribute('stroke', 'var(--primary)'); path.setAttribute('stroke-width', '0.5'); path.setAttribute('fill', 'none'); path.setAttribute('opacity', '0.1'); path.style.transformOrigin = 'center'; path.style.transition = 'transform 0s'; pattern.appendChild(path); svg.appendChild(pattern); var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); rect.setAttribute('width', '100%'); rect.setAttribute('height', '100%'); rect.setAttribute('fill', 'url(#ambient-guilloche)'); svg.appendChild(rect); el.appendChild(svg); var rot = Math.sin(tick * Math.PI * 2) * 5; path.setAttribute('style', 'transform: rotate(' + rot + 'deg);'); }",
  "shadcnTokens": {
    "--color-background": "#FFFDF5",
    "--color-popover": "#FFFDF5",
    "--color-foreground": "#1B2A4A",
    "--color-card-foreground": "#1B2A4A",
    "--color-popover-foreground": "#1B2A4A",
    "--color-card": "#FFFDF5",
    "--color-muted": "#FFFDF5",
    "--color-muted-foreground": "#8C6A3A",
    "--color-primary": "#1B2A4A",
    "--color-ring": "#1B2A4A",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#005A6E",
    "--color-accent": "#005A6E",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#8C6A3A",
    "--color-input": "#8C6A3A",
    "--color-destructive": "#D32F2F"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFDF5",
    "--popover": "#FFFDF5",
    "--foreground": "#1B2A4A",
    "--card-foreground": "#1B2A4A",
    "--popover-foreground": "#1B2A4A",
    "--card": "#FFFDF5",
    "--muted": "#FFFDF5",
    "--muted-foreground": "#8C6A3A",
    "--primary": "#1B2A4A",
    "--ring": "#1B2A4A",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#005A6E",
    "--accent": "#005A6E",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#8C6A3A",
    "--input": "#8C6A3A",
    "--destructive": "#D32F2F"
  }
});
