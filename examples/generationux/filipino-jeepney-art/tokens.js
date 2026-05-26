registerSystem({
  "meta": {
    "name": "Filipino Jeepney Art",
    "tagline": "A maximalist folk aesthetic translating vibrant hand-painted jeepney art into UI — dense, saturated, loud, and celebratory with brush-stroke texture, chrome gradients, and thick contrasting borders.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Anton&family=Bangers&family=Oswald:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Filipino Jeepney Art",
    "colors": {
      "on-primary": "#FFFFFF",
      "on-secondary": "#000000",
      "on-tertiary": "#FFFFFF",
      "outline": "#000000",
      "outline-variant": "#FFFFFF",
      "error": "#FF0000",
      "on-error": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Bangers",
        "fontSize": "48px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Bangers",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Anton",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Oswald, sans-serif",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Oswald, sans-serif",
        "fontSize": "14px",
        "fontWeight": 700,
        "lineHeight": 1.25,
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
      "component-internal": "8px",
      "section-internal": "16px",
      "page-edge": "8px",
      "gap-component": "4px",
      "gap-section": "12px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#D42B2B",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "#D42B2B",
        "textColor": "{colors.on-primary}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "#F2C744",
        "textColor": "{colors.on-secondary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "#F2C744",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "mascot-panel": {
        "backgroundColor": "#1E3A8A",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "chrome-accent-bar": {
        "backgroundColor": "#C0C0C0",
        "rounded": "{rounded.default}",
        "height": "8px"
      }
    },
    "version": "alpha",
    "description": "A maximalist folk aesthetic translating the vibrant hand-painted jeepney art into UI — dense, saturated, loud, and celebratory with brush-stroke texture, chrome gradients, and thick contrasting borders.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `filipino-jeepney-art` refers to the vernacular decorative painting and ornamentation tradition applied to jeepneys — the repurposed Second World War Willys MB / Ford GPW military jeeps that became the most ubiquitous form of public transport in the Philippines. The visual identity is not a single corporate or authored system but an evolving, regionally varied folk art practiced by indepe",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "www.nationalmuseum.gov.ph",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Jeepney",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia / Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Jeepneys",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.nationalmuseum.gov.ph/",
          "host": "www.nationalmuseum.gov.ph",
          "institution": "National Museum of the Philippines",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Sarao_Motors",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia / Wikimedia Foundation",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "sparse_imagery",
        "no_typography_extracted"
      ],
      "honest_gaps": [
        {
          "\"1. **Numerical colour specifications.** No hex, Pantone, RAL, or Munsell values attested for any colour. This is the most consequential gap for accurate visual recreation. *Resolution": "* spectrophotometry of an actual jeepney panel or color-calibrated photography with a reference chart.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#D42B2B",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#F2C744",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#4A4A4A",
    "--border": "#000000",
    "--error": "#FF0000",
    "--font-display": "Bangers",
    "--font-body": "Oswald, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "--secondary": "#F2C744",
    "--tertiary": "#1E3A8A"
  },
  "semanticColors": {
    "success": "#008000",
    "warning": "#F2C744",
    "info": "#1E3A8A",
    "danger": "#FF0000",
    "onSuccess": "#FFFFFF",
    "onWarning": "#000000",
    "onInfo": "#FFFFFF",
    "onDanger": "#FFFFFF",
    "err": "#FF0000",
    "ok": "#008000",
    "warn": "#F2C744",
    "deltaUp": "#008000",
    "deltaDown": "#FF0000",
    "deltaFlat": "#4A4A4A",
    "live": "#D42B2B",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4A4A4A",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "backgroundColor": "transparent",
    "fontFamily": "Oswald, sans-serif",
    "labelColor": "#000000",
    "gridColor": "#000000",
    "palette": [
      "#D42B2B",
      "#F2C744",
      "#1E3A8A",
      "#228B22",
      "#C0C0C0"
    ],
    "borderColor": "#000000",
    "borderWidth": 4,
    "tooltipBackground": "#FFFFFF",
    "tooltipBorder": "#000000",
    "tooltipColor": "#000000"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "printed-plastic",
    "params": {
      "grain": "heavy",
      "roughness": 0.85,
      "reflectivity": 0.1
    }
  },
  "interactionModel": {
    "hover": {
      "scale": 1.03,
      "glow": "0 0 12px 4px var(--primary)"
    },
    "focus": {
      "ring": "0 0 0 4px #FF0080",
      "outline": "none"
    },
    "active": {
      "opacity": 0.8,
      "scale": 0.97
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a { transition: transform 150ms ease-out, box-shadow 150ms ease-out, opacity 150ms ease-out; } .ds-layout-frame button:hover { transform: scale(1.03); box-shadow: 0 0 12px 4px #FF0080; } .ds-layout-frame button:active { opacity: 0.8; transform: scale(0.97); } .ds-layout-frame button:focus-visible { outline: none; box-shadow: 0 0 0 4px #FF0080; }",
  "globalFilter": "<svg><defs><filter id='brush-stroke' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0'/></filter></defs></svg>",
  "globalBodyCss": "font-family: 'Oswald', sans-serif; background-color: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame { font-family: var(--font-display), sans-serif; } .ds-layout-frame h1, .ds-layout-frame h2, .ds-layout-frame h3, .ds-layout-frame h4, .ds-layout-frame h5, .ds-layout-frame h6, .ds-layout-frame p { text-shadow: 2px 2px 0 #000, -1px -1px 0 #000; } .ds-layout-frame .card { border: 4px solid var(--border); outline: 2px solid var(--secondary-col); outline-offset: -6px; background-color: var(--secondary-col); position: relative; overflow: hidden; } .ds-layout-frame .card::before { content: ''; position: absolute; inset: 0; filter: url(#brush-stroke); mix-blend-mode: overlay; opacity: 0.3; pointer-events: none; } .ds-layout-frame .chrome-accent-bar { background: linear-gradient(90deg, #C0C0C0 0%, #1E3A8A 50%, #FFFFFF 51%, #C0C0C0 100%); height: 8px; border: none; } .ds-layout-frame .mascot-panel { border: 4px solid var(--border); outline: 2px solid var(--secondary-col); outline-offset: -6px; background-color: #1E3A8A; }",
  "dashboardStyle": {
    "layout": "dense grid with thick borders, minimal whitespace",
    "background": "alternating primary red and off-white paper (#E8DFD0)",
    "dataElements": "labels in uppercase bold (Anton 700, 13px, #A67C52), values in primary red or gold with brush-stroke overlay",
    "gridLines": "1px solid #A67C52",
    "statusIndicators": "mapped to system palette (green/blue/red) with thick borders and uppercase text",
    "elevation": "shadow-md (offset 3px 3px 0 black) on cards"
  },
  "landingStyle": {
    "heroApproach": "center-weighted mascot panel with chrome accent bar and double border",
    "scrollBehavior": "smooth snap to sections with chrome dividers",
    "ctaStyle": "primary red button with thick black border and dropshadow",
    "signatureMoment": "hero section: large rearing horse mascot, chrome gradient bar, and overlapping route sign tags"
  },
  "elevation": {
    "levels": [
      {
        "name": "flat",
        "shadow": "none",
        "style": ""
      },
      {
        "name": "raised",
        "shadow": "0 2px 4px rgba(0,0,0,.12)",
        "style": "box-shadow:0 2px 4px rgba(0,0,0,.12);"
      },
      {
        "name": "overlay",
        "shadow": "0 8px 24px rgba(0,0,0,.18)",
        "style": "box-shadow:0 8px 24px rgba(0,0,0,.18);"
      }
    ]
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Loud red button with thick black border and jagged dropshadow, used for primary CTAs in dense layouts.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 4px solid var(--border); border-radius: var(--radius-btn); padding: 8px 24px; font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 4px 4px 0 var(--border); cursor: pointer;\">SIGE NA!</button>",
      "label": "Primary Button",
      "note": "Loud red button with thick black border and jagged dropshadow, used for primary CTAs in dense layouts."
    },
    {
      "name": "Secondary Button",
      "desc": "Gold button with black text and double border (outer black, inner white), often paired with primary.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); border: 6px double var(--border); border-radius: var(--radius-btn); padding: 8px 24px; font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 4px 4px 0 var(--border); cursor: pointer;\">BAYAD NA</button>",
      "label": "Secondary Button",
      "note": "Gold button with black text and double border (outer black, inner white), often paired with primary."
    },
    {
      "name": "Outline Button",
      "desc": "Transparent button with thick black outline and no fill, used for secondary actions or in crowded panels.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 4px solid var(--border); border-radius: var(--radius-btn); padding: 8px 24px; font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 4px 4px 0 var(--border); cursor: pointer;\">TINAPOS</button>",
      "label": "Outline Button",
      "note": "Transparent button with thick black outline and no fill, used for secondary actions or in crowded panels."
    }
  ],
  "cards": [
    {
      "name": "Gold Card with Double Border",
      "desc": "Saturated gold card with double border (outer black 4px, inner white 2px) and dense layout of competing elements.",
      "html": "<div style=\"background: var(--secondary-col); border: 4px solid var(--border); outline: 2px solid var(--outline-variant); outline-offset: -6px; border-radius: var(--radius-card); padding: 8px; box-shadow: 6px 6px 0 var(--border); display: flex; flex-direction: column; gap: 4px;\"><div style=\"display: flex; gap: 4px; align-items: center;\"><span style=\"font-family: var(--font-display); font-size: 36px; color: var(--on-secondary); text-shadow: 2px 2px 0 var(--border);\">★</span><span style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-secondary); text-transform: uppercase; letter-spacing: 0.05em;\">MANILA</span><span style=\"font-family: var(--font-display); font-size: 24px; color: var(--primary); text-shadow: 2px 2px 0 var(--border);\">🚌</span></div><div style=\"display: flex; gap: 4px;\"><span style=\"background: var(--primary); color: var(--on-primary); padding: 2px 8px; border: 2px solid var(--border); font-family: var(--font-body); font-size: 14px; text-transform: uppercase;\">ROUTE 42</span><span style=\"background: var(--surface); color: var(--on-bg); padding: 2px 8px; border: 2px solid var(--border); font-family: var(--font-body); font-size: 14px; text-transform: uppercase;\">PASAY</span></div></div>",
      "label": "Gold Card with Double Border",
      "note": "Saturated gold card with double border (outer black 4px, inner white 2px) and dense layout of competing elements."
    },
    {
      "name": "Red Card with Chrome Accent",
      "desc": "Primary red card with top chrome accent bar and crowded interior, featuring mascot and text.",
      "html": "<div style=\"background: var(--primary); border: 4px solid var(--border); border-radius: var(--radius-card); padding: 8px; box-shadow: 6px 6px 0 var(--border); display: flex; flex-direction: column; gap: 4px;\"><div style=\"background: linear-gradient(90deg, var(--border), var(--outline-variant) 40%, var(--outline-variant) 60%, var(--border)); height: 8px; width: 100%;\"></div><div style=\"display: flex; gap: 4px; align-items: center;\"><span style=\"font-family: var(--font-display); font-size: 36px; color: var(--on-primary); text-shadow: 2px 2px 0 var(--border);\">🐴</span><span style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-primary); text-transform: uppercase; letter-spacing: 0.05em;\">PARE NG KABAYO</span><span style=\"font-family: var(--font-display); font-size: 24px; color: var(--secondary-col); text-shadow: 2px 2px 0 var(--border);\">🔥</span></div><div style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-primary); border: 2px solid var(--outline-variant); padding: 2px 4px;\">★ RELIHIYON ★ POP ★</div></div>",
      "label": "Red Card with Chrome Accent",
      "note": "Primary red card with top chrome accent bar and crowded interior, featuring mascot and text."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "White input with thick black border, uppercase label, and brush-stroke texture overlay.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;\">DESTINASYON</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 4px solid var(--border); border-radius: 0px; padding: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); box-shadow: none;\" placeholder=\"Saan ka pupunta?\"/></div>",
      "label": "Text Input",
      "stateLabel": "White input with thick black border, uppercase label, and brush-stroke texture overlay."
    },
    {
      "name": "Select Dropdown",
      "desc": "Custom select with thick borders, gold background, and uppercase options.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;\">RUTA</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); border: 4px solid var(--border); border-radius: 0px; padding: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-secondary); text-transform: uppercase;\"><option>PASAY</option><option>CUBAO</option><option>MAKATI</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Custom select with thick borders, gold background, and uppercase options."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with thick border and custom checkmark style.",
      "html": "<div style=\"display: flex; gap: 8px; align-items: center;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 24px; height: 24px; border: 4px solid var(--border); border-radius: 0px; background: var(--surface); cursor: pointer;\"/><label style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700;\">NAPUNO NA?</label></div>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with thick border and custom checkmark style."
    }
  ],
  "extraComponents": [
    {
      "name": "Chrome Accent Bar",
      "desc": "Thin horizontal chrome gradient bar used as section divider, header, or footer decoration.",
      "html": "<div style=\"background: linear-gradient(90deg, var(--border), var(--outline-variant) 40%, var(--outline-variant) 60%, var(--border)); height: 8px; width: 100%;\"></div>"
    },
    {
      "name": "Mascot Panel",
      "desc": "Blue panel with double border, featuring a horse mascot, chrome top bar, and crowded text elements.",
      "html": "<div style=\"background: var(--info); border: 4px solid var(--border); outline: 2px solid var(--outline-variant); outline-offset: -6px; border-radius: 0px; padding: 16px; display: flex; flex-direction: column; gap: 8px; box-shadow: 6px 6px 0 var(--border);\"><div style=\"background: linear-gradient(90deg, var(--border), var(--outline-variant) 40%, var(--outline-variant) 60%, var(--border)); height: 8px; width: 100%;\"></div><div style=\"display: flex; gap: 8px; align-items: center;\"><span style=\"font-family: var(--font-display); font-size: 48px; color: var(--secondary-col); text-shadow: 3px 3px 0 var(--border);\">🐎</span><span style=\"font-family: var(--font-display); font-size: 36px; color: var(--on-primary); text-shadow: 3px 3px 0 var(--border); text-transform: uppercase;\">PARE</span><span style=\"font-family: var(--font-body); font-size: 16px; color: var(--secondary-col); text-transform: uppercase; text-shadow: 2px 2px 0 var(--border);\">NG KABAYO</span></div></div>"
    },
    {
      "name": "Route Sign Tag",
      "desc": "Small tag mimicking jeepney route sign, with thick borders and inverted colors.",
      "html": "<div style=\"background: var(--primary); color: var(--on-primary); border: 4px solid var(--border); outline: 2px solid var(--outline-variant); outline-offset: -4px; padding: 4px 12px; font-family: var(--font-display); font-size: 18px; letter-spacing: 0.05em; text-transform: uppercase; display: inline-flex; box-shadow: 3px 3px 0 var(--border);\">BACLARAN</div>"
    },
    {
      "name": "Dangle Charm",
      "desc": "Small decorative charm hanging from a corner, mimicking religious or pop-culture medallions.",
      "html": "<div style=\"display: inline-flex; align-items: center; gap: 2px;\"><span style=\"font-size: 16px; color: var(--secondary-col); text-shadow: 1px 1px 0 var(--border);\">⛪</span><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.05em; border: 2px solid var(--border); padding: 2px 4px; background: var(--surface);\">STO. NIÑO</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — BAYAD NA!</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MANILA CITY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — ROUTE 42</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Sakay na sa jeepney patungong Baclaran.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — DESTINASYON</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid minimal layouts with generous whitespace and pastel colors. Jeepney art must be dense and saturated.",
      "avoid": {
        "html": "<div style=\"background: #F5E6CA; border: 1px solid #D4C4A8; padding: 32px; border-radius: 8px; color: #4A4A4A; font-family: 'Helvetica Neue'; font-size: 14px;\"><p style=\"margin-bottom: 24px;\">Welcome to our service</p><button style=\"background: #C4A882; color: white; border: none; padding: 12px 32px; border-radius: 6px;\">Start</button></div>",
        "label": "Avoid"
      },
      "rule": "Avoid minimal layouts with generous whitespace and pastel colors. Jeepney art must be dense and saturated.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid smooth linear gradients without chrome hotspot. Jeepney chrome is sharp and high contrast.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(180deg, #A0A0A0 0%, #606060 100%); height: 8px; width: 100%;\"></div>",
        "label": "Avoid"
      },
      "rule": "Avoid smooth linear gradients without chrome hotspot. Jeepney chrome is sharp and high contrast.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid single-element cards with no competing content. Every panel must have at least three elements.",
      "avoid": {
        "html": "<div style=\"background: #FFFFFF; border: 1px solid #E0E0E0; padding: 16px; font-family: 'Inter'; color: #333;\"><p>Single line of text</p></div>",
        "label": "Avoid"
      },
      "rule": "Avoid single-element cards with no competing content. Every panel must have at least three elements.",
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
    "desc": "Avoid smooth, rounded, minimal, or pastel-heavy styles. All radii must be 0px, borders thick and high-contrast.",
    "html": "<div style=\"border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: #F0F0F0; padding: 24px; color: #777;\">Do not use this style.</div>"
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#D42B2B",
    "secondary": "#F2C744",
    "tertiary": "#1E3A8A",
    "surface": "#FFFFFF",
    "neutral": "#4A4A4A",
    "outline": "#000000",
    "outline-variant": "#FFFFFF",
    "error": "#FF0000",
    "on-primary": "#FFFFFF",
    "on-secondary": "#000000",
    "on-tertiary": "#FFFFFF",
    "on-error": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "Bangers",
      "fontSize": "48px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Bangers",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Anton",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Oswald, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "label": {
      "fontFamily": "Oswald, sans-serif",
      "fontSize": "14px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "8px",
    "gap-component": "4px",
    "gap-section": "12px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "24px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "MANILA'S FINEST ROUTE",
      "heroHeadline": "JEEPNEY PARADA 2025",
      "heroSub": "Track every route, fare, and passenger. No more waiting.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#D42B2B;color:white;font-family:\\x27Anton\\x27,sans-serif;font-size:18px;padding:8px 16px;border:4px solid black;box-shadow:3px 3px 0 black;cursor:pointer;\">SUMAKAY KA NA!</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#F2C744;color:black;font-family:\\x27Anton\\x27,sans-serif;font-size:18px;padding:8px 16px;border:4px solid black;box-shadow:3px 3px 0 black;cursor:pointer;\">ALAMIN ANG RUTA</button>",
      "navLinks": [
        "RUTA",
        "PASAHERO",
        "BAYAD",
        "GALLERY"
      ],
      "features": [
        {
          "title": "LIVE ROUTE TRACKING",
          "desc": "Real-time GPS on every jeepney. No more missed trips.",
          "icon": "🗺️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🗺️ LIVE ROUTE TRACKING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Real-time GPS on every jeepney. No more missed trips.</div></div>"
        },
        {
          "title": "BAYAD WALLET",
          "desc": "Digital fare collection with QR codes. Quick and secure.",
          "icon": "💰",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">💰 BAYAD WALLET</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Digital fare collection with QR codes. Quick and secure.</div></div>"
        },
        {
          "title": "PASAHERO COUNT",
          "desc": "Automated passenger counting using AI cameras.",
          "icon": "👥",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">👥 PASAHERO COUNT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Automated passenger counting using AI cameras.</div></div>"
        },
        {
          "title": "KABAYO MASCOT",
          "desc": "Our horse mascot guides you through the system.",
          "icon": "🐴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🐴 KABAYO MASCOT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Our horse mascot guides you through the system.</div></div>"
        }
      ],
      "ctaStripHeadline": "HALIKA NA! SUMALI SA PARADA",
      "ctaStripHtml": "<a href=\"#\" style=\"background:#D42B2B;color:white;font-family:'Anton',sans-serif;font-size:22px;padding:8px 24px;border:4px solid black;text-decoration:none;box-shadow:4px 4px 0 black;\">MAG-SIGN UP NGAYON</a>",
      "sidebarBrand": "JEEPNEY ART PARADA",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "RUTA BOARD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TALAAN NG PASAHERO",
          "active": false
        }
      ],
      "dashboardTitle": "PARADA DASHBOARD",
      "metrics": [
        {
          "label": "AKTIBONG JEEPNEY",
          "value": "157",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PASAHERO NGAYON",
          "value": "2,340",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "BAYAD NGAYON",
          "value": "₱45,600",
          "delta": "-3%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "ORAS NG BYAHE",
          "value": "4.2 hrs",
          "delta": "+0.5",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "PASAHERO TREND (LINGGO-ARAW)",
      "panelATitle": "RUTA HIGHLIGHTS",
      "panelARows": [
        {
          "label": "PINAKA-TRAPIK NA RUTA",
          "value": "Cubao-San Mateo",
          "pct": 0
        },
        {
          "label": "PINAKA-MABILIS NA RUTA",
          "value": "Quiapo-Baclaran",
          "pct": 0
        },
        {
          "label": "PINAKA-MARAMING PASAHERO",
          "value": "Divisoria-Manila Pier",
          "pct": 0
        },
        {
          "label": "BAGONG RUTA (2025)",
          "value": "Antipolo-Ortigas",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "JEEPNEY FLEET STATUS",
      "panelBCells": [
        {
          "label": "MAKINA OK",
          "value": "124",
          "state": "ok"
        },
        {
          "label": "MAKINA SIRA",
          "value": "12",
          "state": "warn"
        },
        {
          "label": "NAKAHINTO",
          "value": "21",
          "state": "err"
        },
        {
          "label": "BYAHE NGAYON",
          "value": "98",
          "state": "ok"
        },
        {
          "label": "KULANG SA PASAHERO",
          "value": "5",
          "state": "warn"
        },
        {
          "label": "FULL LOAD",
          "value": "45",
          "state": "err"
        },
        {
          "label": "OVERLOAD ALERT",
          "value": "3",
          "state": "ok"
        },
        {
          "label": "EMERGENCY STOP",
          "value": "1",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "LUNES",
        "MARTES",
        "MIYERKOLES",
        "HUWEBES",
        "BIYERNES",
        "SABADO",
        "LINGGO"
      ],
      "series": [
        {
          "data": [
            320,
            450,
            410,
            380,
            520,
            600,
            480,
            480,
            480,
            480,
            480,
            480
          ],
          "label": "DAGAT (North)",
          "axis": "left",
          "color": "#D42B2B"
        },
        {
          "data": [
            210,
            280,
            260,
            240,
            310,
            350,
            290,
            290,
            290,
            290,
            290,
            290
          ],
          "label": "LOOB (South)",
          "axis": "right-1",
          "color": "#F2C744"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:240px;background:var(--secondary-col);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;'; el.innerHTML = '<div style=\"display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px;\"><div style=\"background:linear-gradient(90deg,var(--border),var(--outline-variant) 40%,var(--outline-variant) 60%,var(--border));height:8px;width:100%;\"></div><div style=\"display:flex;gap:8px;align-items:center;\"><span style=\"font-family:var(--font-display);font-size:48px;color:var(--primary);text-shadow:3px 3px 0 var(--border);\">🐴</span><span style=\"font-family:var(--font-display);font-size:36px;color:var(--on-secondary);text-shadow:3px 3px 0 var(--border);text-transform:uppercase;\">PARADA</span></div><div style=\"font-family:var(--font-body);font-size:16px;color:var(--on-secondary);text-shadow:2px 2px 0 var(--border);text-transform:uppercase;\">MANILA\\'S JEEPNEY ART PARADE</div><div style=\"background:var(--primary);border:4px solid var(--border);padding:4px 12px;margin-top:4px;\"><span style=\"font-family:var(--font-display);font-size:18px;color:var(--on-primary);text-transform:uppercase;\">SUMAKAY NA!</span></div></div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:grid;grid-template-columns:repeat(2,1fr);gap:4px;\"><div style=\"background:var(--primary);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;padding:8px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;align-items:center;\"><span style=\"font-family:var(--font-display);font-size:24px;color:var(--on-primary);text-shadow:2px 2px 0 var(--border);\">🗺️</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-primary);text-transform:uppercase;\">LIVE ROUTE TRACKING</span></div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-primary);\">Real-time GPS on every jeepney.</div></div><div style=\"background:var(--secondary-col);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;padding:8px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;align-items:center;\"><span style=\"font-family:var(--font-display);font-size:24px;color:var(--on-secondary);text-shadow:2px 2px 0 var(--border);\">💰</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-secondary);text-transform:uppercase;\">BAYAD WALLET</span></div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-secondary);\">Digital fare collection with QR.</div></div><div style=\"background:var(--info);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;padding:8px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;align-items:center;\"><span style=\"font-family:var(--font-display);font-size:24px;color:var(--on-primary);text-shadow:2px 2px 0 var(--border);\">👥</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-primary);text-transform:uppercase;\">PASAHERO COUNT</span></div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-primary);\">Automated counting.</div></div><div style=\"background:var(--primary);border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;padding:8px;display:flex;flex-direction:column;gap:4px;\"><div style=\"display:flex;gap:4px;align-items:center;\"><span style=\"font-family:var(--font-display);font-size:24px;color:var(--on-primary);text-shadow:2px 2px 0 var(--border);\">🐴</span><span style=\"font-family:var(--font-body);font-size:14px;color:var(--on-primary);text-transform:uppercase;\">KABAYO MASCOT</span></div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-primary);\">Horse guide.</div></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'border:4px solid var(--border);outline:2px solid var(--outline-variant);outline-offset:-6px;background:var(--info);padding:16px;'; el.innerHTML = '<div style=\"background:linear-gradient(90deg,var(--border),var(--outline-variant) 40%,var(--outline-variant) 60%,var(--border));height:8px;width:100%;\"></div><div style=\"display:flex;gap:8px;align-items:center;margin-top:8px;\"><span style=\"font-family:var(--font-display);font-size:48px;color:var(--secondary-col);text-shadow:3px 3px 0 var(--border);\">🐎</span><span style=\"font-family:var(--font-display);font-size:36px;color:var(--on-primary);text-shadow:3px 3px 0 var(--border);text-transform:uppercase;\">PARE</span><span style=\"font-family:var(--font-body);font-size:16px;color:var(--secondary-col);text-shadow:2px 2px 0 var(--border);text-transform:uppercase;\">NG KABAYO</span></div><div style=\"margin-top:8px;font-family:var(--font-body);font-size:14px;color:var(--on-primary);text-shadow:1px 1px 0 var(--border);text-transform:uppercase;\">★ RELIHIYON ★ POP ★</div>'; }",
    "heroBackground": "function(el) { el.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--info) 100%)'; }",
    "ctaBackground": "function(el) { el.style.background = 'linear-gradient(135deg, var(--secondary-col) 0%, var(--primary) 100%)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'background:linear-gradient(90deg, var(--border), var(--outline-variant) 40%, var(--outline-variant) 60%, var(--border));height:8px;width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#E8DFD0'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;filter:url(#brush-stroke);mix-blend-mode:overlay;opacity:0.3;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var d = document.createElement('div'); var angle = tick % 360; d.style.cssText = 'position:absolute;inset:0;z-index:0;background:linear-gradient(' + angle + 'deg, var(--primary), var(--secondary-col), var(--info), var(--primary));background-size:400% 400%;'; return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#4A4A4A",
    "--color-primary": "#D42B2B",
    "--color-ring": "#D42B2B",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#F2C744",
    "--color-accent": "#F2C744",
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
    "--muted-foreground": "#4A4A4A",
    "--primary": "#D42B2B",
    "--ring": "#D42B2B",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#F2C744",
    "--accent": "#F2C744",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#FF0000"
  }
});
