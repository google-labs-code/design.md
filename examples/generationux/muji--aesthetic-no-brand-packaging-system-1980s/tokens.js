registerSystem({
  "meta": {
    "name": "Muji No-Brand Packaging System (1980s)",
    "tagline": "A quiet, material-honest interface language simulating unbleached paper, clear glass, and natural cork.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
  },
  "yamlTokens": {
    "name": "Muji No-Brand Packaging System (1980s)",
    "colors": {},
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "48px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "none"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "30px",
        "fontWeight": 300,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "none"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "20px",
        "fontWeight": 300,
        "lineHeight": 1.625,
        "letterSpacing": "0.025em",
        "textTransform": "none"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 300,
        "lineHeight": 1.625,
        "letterSpacing": "0.025em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1.5,
        "letterSpacing": "0.05em",
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
      "component-internal": "24px",
      "section-internal": "32px",
      "page-edge": "32px",
      "gap-component": "24px",
      "gap-section": "48px",
      "height-sm": "40px",
      "height-md": "48px",
      "height-lg": "56px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "transparent",
        "textColor": "#4A403A",
        "rounded": "{rounded.button}",
        "padding": "24px"
      },
      "button-primary-hover": {
        "backgroundColor": "transparent",
        "textColor": "#332E28",
        "rounded": "{rounded.button}",
        "padding": "24px"
      },
      "card": {
        "backgroundColor": "#E8D5B7",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "transparent",
        "textColor": "#4A403A",
        "rounded": "{rounded.input}",
        "padding": "24px"
      },
      "translucent-panel": {
        "backgroundColor": "rgba(255,255,255,0.2)",
        "rounded": "0px",
        "padding": "24px"
      },
      "label-strip": {
        "backgroundColor": "transparent",
        "textColor": "#4A403A",
        "padding": "0px"
      }
    },
    "version": "alpha",
    "description": "A quiet, material-honest interface language simulating unbleached paper, clear glass, and natural cork. Single geometric sans-serif in light weight floats in generous whitespace, with no logos, no decoration, and interactions limited to slow fades.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `muji--aesthetic-no-brand-packaging-system-1980s` refers to the early packaging identity of Muji (Mujirushi Ryohin, literally “No-Brand Quality Goods”), a Japanese retail company founded in 1980 in Tokyo. This record covers the packaging system used from approximately 1980 through the late 1980s, defined by its deliberate aesthetic of “emptiness” and “non-branding”: brown kraft paper, cle",
      "manual_enrichment_required": false,
      "imagery_count": 3,
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
          "host": "www.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "www.moma.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/collections?q=Muji+1980s+packaging",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.moma.org/",
          "host": "www.moma.org",
          "institution": "Museum of Modern Art, New York",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Muji logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "Japanese gothic (Shin-go or A-OTF Gothic)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unknown"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Colour specification (hex/Pantone/CMYK) for Muji red** — no primary source; all existing hex values are unverified approximations. Resolution requires Muji’s internal specification or a spectrophotometer measurement on an original packaging."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E6",
    "--on-bg": "#332E28",
    "--primary": "#332E28",
    "--on-primary": "#F5F0E6",
    "--secondary-col": "#E8D5B7",
    "--on-secondary": "#332E28",
    "--surface": "#E8D5B7",
    "--on-bg-muted": "#4D443F",
    "--border": "#C7A97A",
    "--error": "#5A4B41",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "bg": "#F5F0E6",
    "on-bg": "#332E28",
    "primary": "#332E28",
    "on-primary": "#F5F0E6",
    "secondary": "#E8D5B7",
    "on-secondary": "#332E28",
    "surface": "#E8D5B7",
    "on-bg-muted": "#4D443F",
    "border": "#C7A97A",
    "error": "#5A4B41",
    "err": "#5A4B41",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#5A4B41",
    "deltaFlat": "#4D443F",
    "live": "#332E28",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4D443F",
    "chartFont": "Inter"
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
    "params": {}
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { position: relative; isolation: isolate; } .ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22%3E%3Cfilter id=%22paper-grain%22%3E%3CfeTurbulence baseFrequency=%220.6%22 numOctaves=%223%22 type=%22fractalNoise%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23paper-grain)%22 opacity=%220.08%22 style=%22mix-blend-mode:%20multiply%22/%3E%3C/svg%3E'); pointer-events: none; z-index: 9999; } .ds-layout-frame, .ds-layout-frame * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; box-shadow: none !important; } .ds-layout-frame :focus { border-bottom: 1px solid var(--border); }",
  "interactionModel": {
    "hover": {
      "opacity": "0.8"
    },
    "focus": {
      "border-bottom": "1px solid var(--border)"
    },
    "active": {
      "opacity": "0.65"
    }
  },
  "interactionStyles": ".ds-layout-frame * { transition-property: opacity, color, background-color; transition-duration: 500ms; transition-timing-function: ease-out; }",
  "chartStyle": {
    "type": "text-only",
    "colors": [
      "var(--on-bg)",
      "var(--border)"
    ],
    "font": "var(--font-body)",
    "barTreatment": "thin horizontal rule",
    "pieTreatment": "none (avoid circular elements)",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4D443F",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "single-column with generous whitespace",
    "density": "low (70% negative space)",
    "panelTreatment": "kraft paper surface with centered label strips",
    "dataVizStyle": "minimal — use only text-based indicators (numeric labels, no charts) or thin rule lines",
    "signatureElement": "centered uppercase label strip on raw material background"
  },
  "landingStyle": {
    "heroApproach": "full-page blank material surface with a single centered label in display size",
    "scrollBehavior": "slow fade transitions (800ms) between sections; no parallax or movement",
    "ctaStyle": "ghost button with thin bottom border on hover; no fill, no rounding",
    "signatureMoment": "the first view: a bare cellulose-toned page with only a typographic label floating in the center, 70% empty"
  },
  "spacing": {
    "componentInternal": "24px",
    "sectionInternal": "32px",
    "pageEdge": "32px",
    "gapComponent": "24px",
    "gapSection": "48px",
    "heightSm": "40px",
    "heightMd": "48px",
    "heightLg": "56px",
    "icon": "20px"
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
      "name": "Primary Button",
      "desc": "A transparent button with centered uppercase label. No fill, no border. Text darkens on hover. Focus state adds a thin bottom border in ink color.",
      "html": "<button onmouseenter=\"this.style.opacity='0.8'\" onmouseleave=\"this.style.opacity='1'\" style=\"background: transparent; color: var(--on-bg); border: none; padding: 24px; cursor: pointer; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; transition: opacity 500ms ease-out; line-height: 1.5;\">Label</button>",
      "label": "Primary Button",
      "note": "A transparent button with centered uppercase label. No fill, no border. Text darkens on hover. Focus state adds a thin bottom border in ink color."
    },
    {
      "name": "Outline Button",
      "desc": "A button with a single thin stroke in ink color, no fill. Centered uppercase text. Hover slightly darkens text and border. Focus state adds a thicker bottom border.",
      "html": "<button onmouseenter=\"this.style.opacity='0.8'\" onmouseleave=\"this.style.opacity='1'\" style=\"background: transparent; color: var(--on-bg); border: 1px solid var(--border); padding: 24px; cursor: pointer; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; transition: opacity 500ms ease-out; line-height: 1.5;\">Label</button>",
      "label": "Outline Button",
      "note": "A button with a single thin stroke in ink color, no fill. Centered uppercase text. Hover slightly darkens text and border. Focus state adds a thicker bottom border."
    },
    {
      "name": "Ghost Button",
      "desc": "A fully transparent button with no border or fill. Only the text reveals its presence. Hover fades text to muted tone. Focus adds a thin bottom border.",
      "html": "<button onmouseenter=\"this.style.opacity='0.8'\" onmouseleave=\"this.style.opacity='1'\" style=\"background: transparent; color: var(--on-bg); border: none; padding: 24px; cursor: pointer; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; transition: opacity 500ms ease-out; line-height: 1.5;\">Label</button>",
      "label": "Ghost Button",
      "note": "A fully transparent button with no border or fill. Only the text reveals its presence. Hover fades text to muted tone. Focus adds a thin bottom border."
    }
  ],
  "cards": [
    {
      "name": "Kraft Paper Card",
      "desc": "A card that simulates unbleached kraft paper. No border, no rounding. Padding 24px. Centered label strip inside. The background fills with surface color.",
      "html": "<div style=\"background: var(--surface); padding: 24px; border-radius: var(--radius-card); display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; width: 100%;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-secondary);\">Product Label</span></div>",
      "label": "Kraft Paper Card",
      "note": "A card that simulates unbleached kraft paper. No border, no rounding. Padding 24px. Centered label strip inside. The background fills with surface color."
    },
    {
      "name": "Translucent Panel Card",
      "desc": "A card with a semi-transparent white overlay on the paper surface. Creates a subtle material layering effect. No rounding. Centered text.",
      "html": "<div style=\"background: rgba(255,255,255,0.2); padding: 24px; border-radius: 0px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 200px; width: 100%;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\">Overlay Label</span></div>",
      "label": "Translucent Panel Card",
      "note": "A card with a semi-transparent white overlay on the paper surface. Creates a subtle material layering effect. No rounding. Centered text."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "A single-line text input with transparent background and no border. Focus state reveals a thin bottom border in ink color. Placeholder text in uppercase light weight.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 100%;\"><input type=\"text\" placeholder=\"INPUT LABEL\" style=\"background: transparent; border: none; border-bottom: 1px solid transparent; padding: 24px; font-family: var(--font-body); font-size: 16px; font-weight: 300; letter-spacing: 0.025em; color: var(--on-bg); outline: none; transition: border-color 500ms ease-out;\" onfocus=\"this.style.borderBottom='1px solid var(--border)'\" onblur=\"this.style.borderBottom='1px solid transparent'\"/></div>",
      "label": "Text Input",
      "stateLabel": "A single-line text input with transparent background and no border. Focus state reveals a thin bottom border in ink color. Placeholder text in uppercase light weight."
    },
    {
      "name": "Select Dropdown",
      "desc": "A selector with transparent background and bottom border on focus. The dropdown arrow is omitted; instead, a subtle caret is indicated by the text itself.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 100%;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: none; border-bottom: 1px solid transparent; padding: 24px; font-family: var(--font-body); font-size: 16px; font-weight: 300; letter-spacing: 0.025em; color: var(--on-bg); -webkit-appearance: none; -moz-appearance: none; appearance: none; cursor: pointer;\"><option>OPTION 01</option><option>OPTION 02</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "A selector with transparent background and bottom border on focus. The dropdown arrow is omitted; instead, a subtle caret is indicated by the text itself."
    },
    {
      "name": "Checkbox",
      "desc": "A square checkbox with no rounding, using a thin border and ink fill for checked state. No label wrapper; the label is placed to the right in uppercase.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 20px; height: 20px; border: 1px solid var(--border); border-radius: 0px; appearance: none; -webkit-appearance: none; cursor: pointer; background: transparent; transition: background-color 500ms ease-out;\" onchange=\"this.style.background = this.checked ? \\x27var(--on-bg)\\x27 : \\x27transparent\\x27\"/><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\">Check Label</span></div>",
      "label": "Checkbox",
      "stateLabel": "A square checkbox with no rounding, using a thin border and ink fill for checked state. No label wrapper; the label is placed to the right in uppercase."
    }
  ],
  "extraComponents": [
    {
      "name": "Label Strip",
      "desc": "A thin centered strip of uppercase text. No background, no border. Used as a signature element across cards and panels.",
      "html": "<div style=\"display: flex; justify-content: center; padding: 0px; width: 100%;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\">Product Name</span></div>"
    },
    {
      "name": "Raw Edge Divider",
      "desc": "A thin horizontal line that simulates a torn paper edge. No rounding, no decoration. Uses the border color.",
      "html": "<hr style=\"border: none; border-top: 1px solid var(--border); margin: 32px 0; width: 100%;\"/>"
    },
    {
      "name": "Material Badge",
      "desc": "A small identifier showing material content (e.g., 'PAPER', 'GLASS'). Transparent background, thin border, uppercase light text. No rounding.",
      "html": "<div style=\"display: inline-flex; align-items: center; padding: 8px 16px; border: 1px solid var(--border); background: transparent; border-radius: 0px;\"><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg-muted);\">Paper</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:300;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Unbleached Kraft</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:300;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — No Brand Quality Goods</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:300;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Mujirushi Ryohin</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:300;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — The container itself is the brand. No logos, no decoration. The material honesty defines the object.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:300;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — PAPER | 1980</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not apply any drop shadow, inner shadow, or raised effect. Surfaces must remain coplanar.",
      "avoid": {
        "html": "<div style=\"box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 24px; border-radius: 8px; background: #fff;\">Shadowed card</div>",
        "label": "Avoid"
      },
      "rule": "Do not apply any drop shadow, inner shadow, or raised effect. Surfaces must remain coplanar.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--surface);display:flex;justify-content:center;align-items:center;\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-secondary);\">DO</span></div>"
      }
    },
    {
      "desc": "Do not round any corners. All shapes must be sharp rectangles.",
      "avoid": {
        "html": "<button style=\"border-radius: 20px; background: '#4A403A'; color: white; padding: 12px 24px;\">Rounded Button</button>",
        "label": "Avoid"
      },
      "rule": "Do not round any corners. All shapes must be sharp rectangles.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use bold or semi-bold font weights. Only light weight (300) is permitted.",
      "avoid": {
        "html": "<span style=\"font-weight: 700; font-family: sans-serif;\">Bold Label</span>",
        "label": "Avoid"
      },
      "rule": "Do not use bold or semi-bold font weights. Only light weight (300) is permitted.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not include any logos, brand marks, or decorative icons. The container shape alone defines identity.",
      "avoid": {
        "html": "<div><img src='logo.svg' alt='Muji'/> <span>Branded</span></div>",
        "label": "Avoid"
      },
      "rule": "Do not include any logos, brand marks, or decorative icons. The container shape alone defines identity.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "gloss": false,
    "glassmorphism": false,
    "neumorphism": false,
    "gradient": false,
    "animatedGradient": false,
    "metallic": false,
    "saturatedColors": false
  },
  "effects": [],
  "motion": [],
  "colors": {
    "bg": "#F5F0E6",
    "onBg": "#332E28",
    "primary": "#332E28",
    "onPrimary": "#F5F0E6",
    "secondary": "#E8D5B7",
    "onSecondary": "#332E28",
    "surface": "#E8D5B7",
    "border": "#C7A97A",
    "muted": "#4D443F"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "48px",
      "fontWeight": 300,
      "lineHeight": 1.25,
      "letterSpacing": "0.1em"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "30px",
      "fontWeight": 300,
      "lineHeight": 1.375,
      "letterSpacing": "0.025em"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "20px",
      "fontWeight": 300,
      "lineHeight": 1.625,
      "letterSpacing": "0.025em"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 300,
      "lineHeight": 1.625,
      "letterSpacing": "0.025em"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 300,
      "lineHeight": 1.5,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "NO-BRAND PACKAGING SYSTEM — ALPHA",
      "heroHeadline": "The container is the brand.",
      "heroSub": "Unbleached kraft paper, clear glass, natural cork. Single weight. Infinite silence.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REQUEST SAMPLE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE MATERIALS</button>",
      "navLinks": [
        "CONTAINERS",
        "MATERIALS",
        "GRAIN",
        "VOID"
      ],
      "features": [
        {
          "title": "Unbleached Kraft",
          "desc": "Substrate carries all colour. No ink. No coating. The paper speaks.",
          "icon": "📦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📦 Unbleached Kraft</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Substrate carries all colour. No ink. No coating. The paper speaks.</div></div>"
        },
        {
          "title": "Clear Glass",
          "desc": "Transparency as brand. Content defines presence, not label.",
          "icon": "🫙",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🫙 Clear Glass</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Transparency as brand. Content defines presence, not label.</div></div>"
        },
        {
          "title": "Natural Cork",
          "desc": "Silent closure. No seal, no shrink wrap. Touch replaces text.",
          "icon": "🪵",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🪵 Natural Cork</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Silent closure. No seal, no shrink wrap. Touch replaces text.</div></div>"
        },
        {
          "title": "Pure Void",
          "desc": "Seventy percent emptiness. Space for the object to breathe.",
          "icon": "◻️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◻️ Pure Void</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Seventy percent emptiness. Space for the object to breathe.</div></div>"
        }
      ],
      "ctaStripHeadline": "No logo. No decoration. Only material truth.",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">OPEN CATALOG</button>",
      "sidebarBrand": "MUJI NO-BRAND",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "CONTAINER INDEX",
          "active": true
        },
        {
          "icon": "◉",
          "label": "MATERIAL SPEC",
          "active": false
        }
      ],
      "dashboardTitle": "CONTAINER VOID",
      "metrics": [
        {
          "label": "EMPTY RATIO",
          "value": "72%",
          "delta": "+2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "KRAFT WEIGHT",
          "value": "240 gsm",
          "delta": "0%",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "GLASS THICKNESS",
          "value": "3.2 mm",
          "delta": "-0.1 mm",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "CORK PORE DENSITY",
          "value": "14 PPI",
          "delta": "+1 PPI",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SURFACE SILENCE",
          "value": "0 dB",
          "delta": "0 dB",
          "dir": "neutral",
          "direction": "neutral"
        }
      ],
      "chartTitle": "MATERIAL STIFFNESS VS. CLARITY",
      "panelATitle": "CONTAINER DIMENSIONS",
      "panelARows": [
        {
          "label": "HEIGHT",
          "value": "180 mm",
          "pct": 100
        },
        {
          "label": "WIDTH",
          "value": "120 mm",
          "pct": 100
        },
        {
          "label": "DEPTH",
          "value": "80 mm",
          "pct": 80
        },
        {
          "label": "WALL THICKNESS",
          "value": "0.6 mm",
          "pct": 0.6
        },
        {
          "label": "NECK FINISH",
          "value": "GCMI 400",
          "pct": 100
        }
      ],
      "panelBTitle": "MATERIAL CHARACTERISTICS",
      "panelBCells": [
        {
          "label": "TENSILE STRENGTH",
          "value": "45 N/mm²",
          "state": "ok"
        },
        {
          "label": "LIGHT TRANSMISSION",
          "value": "91%",
          "state": "warn"
        },
        {
          "label": "COMPRESSION SET",
          "value": "12%",
          "state": "err"
        },
        {
          "label": "SURFACE ROUGHNESS",
          "value": "Ra 3.2 μm",
          "state": "ok"
        },
        {
          "label": "THERMAL CONDUCTIVITY",
          "value": "0.13 W/mK",
          "state": "warn"
        },
        {
          "label": "MOISTURE ABSORPTION",
          "value": "7.5%",
          "state": "err"
        },
        {
          "label": "ACID RESISTANCE",
          "value": "pH 3–10",
          "state": "ok"
        },
        {
          "label": "RECYCLABILITY",
          "value": "100% (pulp)",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "kraft 1",
        "kraft 2",
        "glass 1",
        "glass 2",
        "cork 1",
        "cork 2"
      ],
      "series": [
        {
          "data": [
            45,
            48,
            65,
            62,
            12,
            14,
            14,
            14,
            14,
            14,
            14,
            14
          ],
          "label": "TENSILE (N/mm²)",
          "axis": "left",
          "color": "#332E28"
        },
        {
          "data": [
            0,
            0,
            89,
            92,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "CLARITY (%)",
          "axis": "right-1",
          "color": "#E8D5B7"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;display:flex;justify-content:center;align-items:center;background:var(--bg);'; el.innerHTML = '<span style=\"font-family:var(--font-display);font-size:48px;font-weight:300;letter-spacing:0.1em;line-height:1.25;color:var(--on-bg);text-transform:none;\">NO-BRAND QUALITY GOODS</span>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;justify-content:center;gap:24px;padding:32px;background:var(--bg);'; el.innerHTML = '<div style=\"width:200px;height:200px;background:var(--surface);display:flex;justify-content:center;align-items:center;\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-secondary);\">KRAFT</span></div><div style=\"width:200px;height:200px;background:rgba(255,255,255,0.2);display:flex;justify-content:center;align-items:center;\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);\">GLASS</span></div><div style=\"width:200px;height:200px;background:var(--surface);display:flex;justify-content:center;align-items:center;\"><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-secondary);\">CORK</span></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--bg);padding:32px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px;'; el.innerHTML = '<span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg-muted);\">EMPTY RATIO</span><span style=\"font-family:var(--font-display);font-size:48px;font-weight:300;letter-spacing:0.1em;color:var(--on-bg);\">72%</span><span style=\"font-family:var(--font-body);font-size:12px;font-weight:300;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg-muted);\">+2%</span>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:1px;background:var(--border);width:100%;margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { el.style.background = 'transparent'; }"
  },
  "ambientCanvas": "function(el) { el.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:1;'; var grain = document.createElement('div'); grain.style.cssText = 'position:absolute;inset:0;opacity:0.06;background-image:url(\\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%22100%25%22%3E%3Cfilter id=%22f%22%3E%3CfeTurbulence baseFrequency=%220.6%22 numOctaves=%223%22 type=%22fractalNoise%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23f)%22/%3E%3C/svg%3E\\');background-size:cover;transition:opacity 2s;'; el.appendChild(grain); var tick = 0; setInterval(function() { tick++; grain.style.opacity = 0.04 + 0.02 * Math.sin(tick * 0.1); }, 2000); }",
  "shadcnTokens": {
    "--color-background": "#F5F0E6",
    "--color-popover": "#F5F0E6",
    "--color-foreground": "#332E28",
    "--color-card-foreground": "#332E28",
    "--color-popover-foreground": "#332E28",
    "--color-card": "#E8D5B7",
    "--color-muted": "#E8D5B7",
    "--color-muted-foreground": "#4D443F",
    "--color-primary": "#332E28",
    "--color-ring": "#332E28",
    "--color-primary-foreground": "#F5F0E6",
    "--color-secondary": "#E8D5B7",
    "--color-accent": "#E8D5B7",
    "--color-secondary-foreground": "#332E28",
    "--color-accent-foreground": "#332E28",
    "--color-border": "#C7A97A",
    "--color-input": "#C7A97A",
    "--color-destructive": "#5A4B41"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E6",
    "--popover": "#F5F0E6",
    "--foreground": "#332E28",
    "--card-foreground": "#332E28",
    "--popover-foreground": "#332E28",
    "--card": "#E8D5B7",
    "--muted": "#E8D5B7",
    "--muted-foreground": "#4D443F",
    "--primary": "#332E28",
    "--ring": "#332E28",
    "--primary-foreground": "#F5F0E6",
    "--secondary": "#E8D5B7",
    "--accent": "#E8D5B7",
    "--secondary-foreground": "#332E28",
    "--accent-foreground": "#332E28",
    "--border": "#C7A97A",
    "--input": "#C7A97A",
    "--destructive": "#5A4B41"
  }
});
