registerSystem({
  "meta": {
    "name": "Soviet Constructivist Sweet Wrapper (1920s–1930s)",
    "tagline": "Constructivist geometry meets misregistered printing artefacts",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Russo+One:wght@300;400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700;800;900&family=Inter+Tight:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Soviet Constructivist Sweet Wrapper (1920s–1930s)",
    "colors": {
      "secondary": "#1A1A1A",
      "on-secondary": "#F5F0E8",
      "surface": "#F5F0E8",
      "on-surface": "#1A1A1A",
      "outline": "#1A1A1A",
      "primary": "#D93A1E"
    },
    "typography": {
      "display": {
        "fontFamily": "Russo One, sans-serif",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Russo One, sans-serif",
        "fontSize": "36px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Oswald, sans-serif",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter Tight, sans-serif",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "DM Sans, sans-serif",
        "fontSize": "12px",
        "fontWeight": 700,
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
      "chip": "0px"
    },
    "spacing": {
      "component-internal": "8px",
      "section-internal": "16px",
      "page-edge": "16px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#D93A1E",
        "textColor": "#F5F0E8",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#1A1A1A",
        "textColor": "#D93A1E",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "#F5F0E8",
        "textColor": "#1A1A1A",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.card}",
        "padding": "12px"
      },
      "input": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "#F5F0E8",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "star-motif-badge": {
        "backgroundColor": "#D93A1E",
        "size": "40px"
      },
      "gear-motif": {
        "size": "40px"
      },
      "wrapper-frame": {
        "backgroundColor": "#F5F0E8",
        "padding": "16px"
      }
    },
    "version": "alpha",
    "description": "This design system translates the raw, handmade energy of 1920s–1930s Soviet confectionery packaging into a structured but deliberately unpolished interface language, marrying constructivist geometry with misregistered printing artefacts.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 2,
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
          "host": "collections.vam.ac.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Constructivism_(art)",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "medium"
        },
        {
          "url": "https://collections.vam.ac.uk/search/?q=Soviet+graphic+design",
          "host": "collections.vam.ac.uk",
          "institution": "Victoria and Albert Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "few_usable_urls",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E8",
    "--on-bg": "#1A1A1A",
    "--primary": "#D93A1E",
    "--on-primary": "#fffff7",
    "--secondary-col": "#1A1A1A",
    "--on-secondary": "#F5F0E8",
    "--surface": "#F5F0E8",
    "--on-bg-muted": "#808080",
    "--border": "#1A1A1A",
    "--error": "#D93A1E",
    "--font-display": "Russo One, sans-serif",
    "--font-body": "Inter Tight, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "var(--primary)",
    "on-primary": "var(--on-primary)",
    "secondary": "var(--secondary-col)",
    "on-secondary": "var(--on-secondary)",
    "surface": "var(--surface)",
    "background": "var(--bg)",
    "on-background": "var(--on-bg)",
    "text-muted": "var(--on-bg-muted)",
    "border": "var(--border)",
    "error": "var(--error)",
    "success": "#1A1A1A",
    "err": "var(--error)",
    "ok": "#1A1A1A",
    "warn": "#FF8C42",
    "deltaUp": "#1A1A1A",
    "deltaDown": "var(--error)",
    "deltaFlat": "#808080",
    "live": "#D93A1E",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#808080",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "containerBackground": "var(--bg)",
    "containerBorder": "4px double var(--border)",
    "rowBackground": "var(--surface)",
    "rowAltBackground": "#EDE4D6",
    "headerRotation": "-8deg",
    "headerFont": "var(--font-display)",
    "headerWeight": 700,
    "headerColor": "var(--on-bg)",
    "keyMetricColor": "var(--primary)",
    "keyMetricStar": true,
    "dividerStyle": "border-bottom: 2px solid var(--border);",
    "spacing": "tight",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#808080",
    "fontFamily": "Inter Tight, sans-serif"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper"
  },
  "interactionModel": {
    "hover": {
      "backgroundColor": "#1A1A1A",
      "color": "#D93A1E",
      "borderColor": "#D93A1E",
      "transitionDuration": "0ms"
    },
    "focus": {
      "outline": "4px solid #D93A1E",
      "outlineOffset": "0px"
    },
    "active": {
      "borderWidth": "4px",
      "borderStyle": "double",
      "transform": "scale(0.95)",
      "transitionDuration": "0ms"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame [role='button'] { transition-duration: 0ms; transition-property: background-color, color, border-color, transform; cursor: pointer; } .ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame [role='button']:hover { background-color: #1A1A1A; color: #D93A1E; border-color: #D93A1E; } .ds-layout-frame button:focus-visible, .ds-layout-frame a:focus-visible, .ds-layout-frame [role='button']:focus-visible { outline: 4px solid #D93A1E; outline-offset: 0px; } .ds-layout-frame button:active, .ds-layout-frame a:active, .ds-layout-frame [role='button']:active { border-width: 4px; border-style: double; transform: scale(0.95); } .ds-layout-frame .ds-button-secondary:hover { background-color: #1A1A1A; color: #F5F0E8; }",
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "16px",
    "gap-component": "8px",
    "gap-section": "16px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "20px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "base": {
      "shadow": "none",
      "zIndex": 0
    },
    "overlay": {
      "shadow": "none",
      "zIndex": 40
    },
    "modal": {
      "shadow": "none",
      "zIndex": 50
    }
  },
  "dashboardStyle": {
    "layout": "Asymmetric grid with diagonal anchors; one major element rotated at 35°.",
    "density": "Moderate — panels are tightly packed but separated by thick double borders.",
    "panelTreatment": "Heavy frame (4px double border) with paper grain overlay and misregistration offset on red accents.",
    "dataVizStyle": "Constructivist charts using thick line strokes and red/black only; halftone for density.",
    "signatureElement": "Rotating gear motif in bottom-left corner."
  },
  "landingStyle": {
    "heroApproach": "Single wrapper frame (3:4 aspect) with diagonal title and star badge bleeding off edge.",
    "scrollBehavior": "Instant jumps via anchor links; no smooth scrolling (authentic period feel).",
    "ctaStyle": "Primary button with red background and black border; on hover inverts to black with red text.",
    "signatureMoment": "Misregistration jitter applied to hero title on page load — red layer drifts 2px right over 4s."
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"0\" height=\"0\"><defs><filter id=\"paperGrain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0\" in=\"noise\" result=\"coloredNoise\"/><feBlend in=\"SourceGraphic\" in2=\"coloredNoise\" mode=\"overlay\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body, 'Inter Tight', sans-serif); background-color: var(--bg, #F5F0E8); color: var(--on-bg, #1A1A1A); margin: 0;",
  "globalCss": ".ds-layout-frame { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; image-rendering: auto; text-rendering: auto; filter: url(#paperGrain); } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { box-sizing: border-box; }",
  "buttons": [
    {
      "name": "primary-button",
      "desc": "Primary action button with red fill and black border. Hover inverts colors.",
      "html": "<button onmouseenter=\"this.style.borderWidth='4px';this.style.borderStyle='double';this.style.backgroundColor='var(--primary)';this.style.color='var(--on-primary)';\" onmouseleave=\"this.style.borderWidth='2px';this.style.borderStyle='solid';this.style.backgroundColor='var(--primary)';this.style.color='var(--on-primary)';\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px; height: 40px; font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; cursor: pointer;\">СЛАДОСТЬ</button>",
      "label": "primary-button",
      "note": "Primary action button with red fill and black border. Hover inverts colors."
    },
    {
      "name": "secondary-button",
      "desc": "Secondary button with paper background and black text. Hover swaps to red background.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px; height: 40px; font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; cursor: pointer;\">КУПИТЬ</button>",
      "label": "secondary-button",
      "note": "Secondary button with paper background and black text. Hover swaps to red background."
    },
    {
      "name": "ghost-button",
      "desc": "Ghost/outline button with no fill, only border. Hover fills with black and red text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px; height: 40px; font-family: var(--font-display); font-size: 14px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; cursor: pointer;\">ПРОДУКТ</button>",
      "label": "ghost-button",
      "note": "Ghost/outline button with no fill, only border. Hover fills with black and red text."
    }
  ],
  "cards": [
    {
      "name": "wrapper-card",
      "desc": "A card that mimics the paper wrapper frame with double border and paper grain texture. Object-specific: hand-drawn star motif offset to top-right.",
      "html": "<div style=\"background-color: var(--surface); border: 4px double var(--border); border-radius: var(--radius-card); padding: 16px; position: relative; min-height: 200px;\"><div style=\"position: absolute; top: -12px; right: -12px; width: 40px; height: 40px; background-color: var(--primary); border: 2px solid var(--border); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\"></div><p style=\"font-family: var(--font-display); font-size: 18px; color: var(--on-bg); text-transform: uppercase; letter-spacing: -0.02em; margin: 0; transform: rotate(-5deg);\">КОНФЕТА</p></div>",
      "label": "wrapper-card",
      "note": "A card that mimics the paper wrapper frame with double border and paper grain texture. Object-specific: hand-drawn star motif offset to top-right."
    },
    {
      "name": "constructivist-card",
      "desc": "Card with heavy frame border and diagonal text anchor. Red accent bar along left edge.",
      "html": "<div style=\"background-color: var(--surface); border: 4px solid var(--border); border-radius: var(--radius-card); padding: 12px; position: relative; min-height: 150px;\"><div style=\"position: absolute; left: 0; top: 0; bottom: 0; width: 8px; background-color: var(--primary);\"></div><h3 style=\"font-family: var(--font-display); font-size: 24px; color: var(--primary); text-transform: uppercase; text-align: center; margin: 0; transform: rotate(30deg); transform-origin: left center;\">БИСКВИТ</h3></div>",
      "label": "constructivist-card",
      "note": "Card with heavy frame border and diagonal text anchor. Red accent bar along left edge."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input with paper background, black border, and label in label typography.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\">НАЗВАНИЕ</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\" placeholder=\"Ваша сладость...\" /></div>",
      "label": "text-input",
      "stateLabel": "Text input with paper background, black border, and label in label typography."
    },
    {
      "name": "select-dropdown",
      "desc": "Custom select with thick border and monochrome palette.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg);\">ТИП</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 8px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); appearance: none; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\\x27http://www.w3.org/2000/svg\\x27 width=\\x2710\\x27 height=\\x276\\x27%3E%3Cpath d=\\x27M0 0l5 6 5-6z\\x27 fill=\\x27%231A1A1A\\x27/%3E%3C/svg%3E\"); background-repeat: no-repeat; background-position: right 8px center; padding-right: 28px;\"><option>Шоколад</option><option>Карамель</option><option>Мармелад</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Custom select with thick border and monochrome palette."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with heavy border, red fill on checked, black check mark.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 20px; height: 20px; background-color: var(--surface); border: 2px solid var(--border); border-radius: 0px; appearance: none; cursor: pointer;\" checked=\"\" /><span style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\">Без сахара</span></div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with heavy border, red fill on checked, black check mark."
    }
  ],
  "extraComponents": [
    {
      "name": "star-motif-badge",
      "desc": "Hand-drawn five-pointed star with intentionally irregular points. Red fill, black outline. Used as badge or hero element.",
      "html": "<div style=\"width: 40px; height: 40px; background-color: var(--primary); border: 2px solid var(--border); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); transform: rotate(15deg);\"></div>"
    },
    {
      "name": "gear-motif",
      "desc": "Abstract gear motif used as decorative element. Rotates on hover using steps timing.",
      "html": "<div style=\"width: 40px; height: 40px; border: 4px solid var(--border); border-radius: 50%; position: relative; animation: spin 8s steps(12) infinite;\"><div style=\"position: absolute; top: 0; left: 50%; width: 8px; height: 12px; background-color: var(--border); transform: translateX(-50%);\"></div><div style=\"position: absolute; right: 0; top: 50%; width: 12px; height: 8px; background-color: var(--border); transform: translateY(-50%);\"></div><div style=\"position: absolute; bottom: 0; left: 50%; width: 8px; height: 12px; background-color: var(--border); transform: translateX(-50%);\"></div><div style=\"position: absolute; left: 0; top: 50%; width: 12px; height: 8px; background-color: var(--border); transform: translateY(-50%);\"></div></div>"
    },
    {
      "name": "diagonal-stripe-divider",
      "desc": "Chevron/zigzag pattern used as section divider. Repeating linear gradient at 45°.",
      "html": "<div style=\"width: 100%; height: 8px; background: repeating-linear-gradient(45deg, var(--border) 0px, var(--border) 4px, transparent 4px, transparent 8px);\"></div>"
    },
    {
      "name": "heavy-frame-border",
      "desc": "Double thick frame border used around panels and hero sections.",
      "html": "<div style=\"background-color: var(--surface); border: 4px double var(--border); padding: 16px; min-height: 80px; display: flex; align-items: center; justify-content: center;\"><span style=\"font-family: var(--font-display); font-size: 18px; color: var(--primary); text-transform: uppercase; transform: rotate(35deg);\">БОРДЮР</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — CCCP СЛАДОСТЬ</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — КОНФЕТНАЯ ФАБРИКА</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — НОВЫЙ СОРТ КАРАМЕЛИ</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Съешь ещё этих мягких французских булок, да выпей же чаю.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ВЕС 200Г • ГОСТ 1932</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid rounded corners — they break the sharp constructivist geometry.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background-color: var(--primary);\">ПЛОХО</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners — they break the sharp constructivist geometry.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid drop shadows — all surfaces lie on a single plane.",
      "avoid": {
        "html": "<div style=\"box-shadow: 2px 2px 4px rgba(0,0,0,0.5);\">ТЕНЬ</div>",
        "label": "Avoid"
      },
      "rule": "Avoid drop shadows — all surfaces lie on a single plane.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid gradients and smooth digital blends — use flat solid fills or halftone.",
      "avoid": {
        "html": "<button style=\"background: linear-gradient(to right, var(--primary), var(--surface));\">ГРАДИЕНТ</button>",
        "label": "Avoid"
      },
      "rule": "Avoid gradients and smooth digital blends — use flat solid fills or halftone.",
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
    "desc": "Use only the three colours plus paper tone: #D93A1E (red), #1A1A1A (black), #F5F0E8 (paper). No additional hues.",
    "avoid": {
      "html": "<div style=\"background-color: #00FF00; color: #FFFFFF;\">ЗЕЛЁНЫЙ</div>"
    }
  },
  "effects": [],
  "motion": [
    {
      "name": "gearSpin",
      "keyframes": "@keyframes gearSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
      "timing": "8s steps(12) infinite",
      "demoStyle": ";width:48px;height:48px;background:var(--primary);border-radius:var(--radius-default,0px);display:flex;align-items:center;justify-content:center;"
    },
    {
      "name": "starPulse",
      "keyframes": "@keyframes starPulse { from { transform: scale(1); } to { transform: scale(1.08); } }",
      "timing": "2s ease-in-out alternate",
      "demoStyle": ";width:48px;height:48px;background:var(--primary);border-radius:var(--radius-default,0px);display:flex;align-items:center;justify-content:center;"
    }
  ],
  "colors": {
    "--bg": "#F5F0E8",
    "--on-bg": "#1A1A1A",
    "--primary": "#D93A1E",
    "--on-primary": "#F5F0E8",
    "--secondary": "#1A1A1A",
    "--on-secondary": "#F5F0E8",
    "--surface": "#F5F0E8",
    "--border": "#1A1A1A",
    "--error": "#D93A1E",
    "--text-muted": "#808080"
  },
  "typography": {
    "display": {
      "fontFamily": "Russo One, sans-serif",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter Tight, sans-serif, sans-serif",
      "fontSize": "36px",
      "fontWeight": 800,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Oswald, sans-serif",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter Tight, sans-serif",
      "fontSize": "16px",
      "fontWeight": 500,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "label": {
      "fontFamily": "DM Sans, sans-serif",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ГОСТ 1930 / ОБЁРТКА",
      "heroHeadline": "SWEET CONSTRUCT",
      "heroSub": "Hand-pulled wrappers from the Soviet sweet trust. Three inks, one paper. Uneven stars, deliberate flaws.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#D93A1E;color:#F5F0E8;border:2px solid #1A1A1A;padding:8px;font-family:\\x27Russo One\\x27,sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">PULL A PROOF</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#F5F0E8;color:#1A1A1A;border:2px solid #1A1A1A;padding:8px;font-family:\\x27Russo One\\x27,sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">EXAMINE REGISTER</button>",
      "navLinks": [
        "WRAPPER",
        "INK",
        "PLATE",
        "STAR",
        "GEAR"
      ],
      "features": [
        {
          "title": "MISREGISTER TOGGLE",
          "desc": "Slide the red plate off its black anchor by 1–3px. Every proof is a unique misprint.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 MISREGISTER TOGGLE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Slide the red plate off its black anchor by 1–3px. Every proof is a unique misprint.</div></div>"
        },
        {
          "title": "DIAGONAL COMPOSE",
          "desc": "Anchor type or shape at 30°–60°. Break the horizontal grid. Asymmetric weight.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 DIAGONAL COMPOSE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Anchor type or shape at 30°–60°. Break the horizontal grid. Asymmetric weight.</div></div>"
        },
        {
          "title": "INK BLEED SIM",
          "desc": "Dilate and blur red edges. Halftone dots on ochre fills. Paper grain overlay at 15%.",
          "icon": "🖌️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖌️ INK BLEED SIM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Dilate and blur red edges. Halftone dots on ochre fills. Paper grain overlay at 15%.</div></div>"
        },
        {
          "title": "STAR & GEAR LIBRARY",
          "desc": "Hand-drawn motifs with unequal points. One star per surface max. Gear spins in 12 steps.",
          "icon": "⭐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⭐ STAR & GEAR LIBRARY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Hand-drawn motifs with unequal points. One star per surface max. Gear spins in 12 steps.</div></div>"
        },
        {
          "title": "THREE-INK PALETTE",
          "desc": "Vermilion red, matte black, cream paper. Gold accent sparingly. No more than three plus paper.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 THREE-INK PALETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Vermilion red, matte black, cream paper. Gold accent sparingly. No more than three plus paper.</div></div>"
        }
      ],
      "ctaStripHeadline": "PRINT YOUR OWN PROOF — 3:4 WRAPPER CANVAS",
      "ctaStripHtml": "<div style=\"display:flex;gap:8px;\"><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#1A1A1A;color:#D93A1E;border:2px solid #D93A1E;padding:8px;font-family:\\x27Russo One\\x27,sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">START WITH STAR</button><button style=\"background:#F5F0E8;color:#1A1A1A;border:2px solid #1A1A1A;padding:8px;font-family:\\x27Russo One\\x27,sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">LOAD GEAR</button></div>",
      "sidebarBrand": "СЛАДКИЙ ФРОНТ",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "OBERTKA",
          "active": true
        },
        {
          "icon": "◉",
          "label": "KONSTRUKT",
          "active": false
        },
        {
          "icon": "◉",
          "label": "PEKARNJA",
          "active": false
        }
      ],
      "dashboardTitle": "PROOF GALLERY — СБОРНИК",
      "metrics": [
        {
          "label": "STARS CAST",
          "value": "124",
          "delta": "+7%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "RED PLATE OFFSET",
          "value": "2.3px",
          "delta": "+0.4px",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PAPER STOCK",
          "value": "CREAM 120g",
          "delta": "—",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "ACTIVE WRAPPERS",
          "value": "38",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "INK BLEED INDEX",
          "value": "0.8",
          "delta": "-0.2",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "REGISTER DRIFT PER PLATE (DAILY PULLS)",
      "panelATitle": "RECENT PROOFS — ПОСЛЕДНИЕ",
      "panelARows": [
        {
          "label": "KRASNYJ OKTJABR",
          "value": "Pull #402 — misreg 1.8px",
          "pct": 100
        },
        {
          "label": "KARMA GRAND",
          "value": "Pull #401 — star offset 3°",
          "pct": 100
        },
        {
          "label": "PROLETARSKIJ PRJANIK",
          "value": "Pull #400 — gear ink bleed",
          "pct": 100
        },
        {
          "label": "CCCP BAR",
          "value": "Pull #399 — double frame, diagonal text",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "INK STATION — КРАСКА",
      "panelBCells": [
        {
          "label": "RED #D93A1E",
          "value": "Vermilion, offset +2px",
          "state": "ok"
        },
        {
          "label": "BLACK #1A1A1A",
          "value": "Matte, border-4 everywhere",
          "state": "warn"
        },
        {
          "label": "PAPER #F5F0E8",
          "value": "Cream stock, grain overlay",
          "state": "err"
        },
        {
          "label": "GOLD ACCENT",
          "value": "Sparing — one element only",
          "state": "ok"
        },
        {
          "label": "HALFTONE DENSITY",
          "value": "Repeating radial, 20% fill",
          "state": "warn"
        },
        {
          "label": "STAR POINTS",
          "value": "Unequal, hand-drawn",
          "state": "err"
        },
        {
          "label": "GEAR TEETH",
          "value": "12 steps, wonky spacing",
          "state": "ok"
        },
        {
          "label": "FRAME TYPE",
          "value": "Double or broken, no radius",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
      ],
      "series": [
        {
          "data": [
            1.2,
            2.1,
            1.8,
            2.3,
            1.9,
            2,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5,
            1.5
          ],
          "label": "RED PLATE X-OFFSET (px)",
          "axis": "left",
          "color": "#D93A1E"
        },
        {
          "data": [
            0.3,
            0.4,
            0.2,
            0.5,
            0.3,
            0.4,
            0.3,
            0.3,
            0.3,
            0.3,
            0.3,
            0.3
          ],
          "label": "BLACK PLATE X-OFFSET (px)",
          "axis": "right-1",
          "color": "#1A1A1A"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;width:240px;height:320px;background:var(--bg);border:4px double var(--border);margin:auto;overflow:hidden;'; var star = document.createElement('div'); star.style.cssText = 'position:absolute;top:-10px;right:-10px;width:50px;height:50px;background:var(--primary);border:2px solid var(--border);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);transform:rotate(15deg);z-index:2;'; el.appendChild(star); var title = document.createElement('div'); title.style.cssText = 'position:absolute;bottom:16px;left:16px;right:16px;font-family:var(--font-display);font-size:28px;font-weight:900;line-height:1;text-transform:uppercase;letter-spacing:-0.05em;color:var(--primary);transform:rotate(-35deg);transform-origin:left bottom;white-space:nowrap;'; title.textContent = 'SWEET CONSTRUCT'; el.appendChild(title); var subtitle = document.createElement('div'); subtitle.style.cssText = 'position:absolute;top:16px;left:16px;font-family:var(--font-body);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;color:var(--border);'; subtitle.textContent = 'ГОСТ 1930'; el.appendChild(subtitle); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:16px;padding:16px;justify-content:center;'; var items = ['КРАСНЫЙ ОКТЯБРЬ', 'ПРОЛЕТАРСКИЙ', 'К А Р М А', 'СССР БАР']; for (var i=0;i<items.length;i++) { var wrapper = document.createElement('div'); wrapper.style.cssText = 'width:120px;height:160px;background:var(--bg);border:4px double var(--border);position:relative;'; var star = document.createElement('div'); star.style.cssText = 'position:absolute;top:-8px;right:-8px;width:30px;height:30px;background:var(--primary);border:2px solid var(--border);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);transform:rotate(10deg);'; wrapper.appendChild(star); var label = document.createElement('div'); label.style.cssText = 'position:absolute;bottom:8px;left:8px;right:8px;font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:-0.02em;color:var(--border);transform:rotate(-25deg);transform-origin:left bottom;'; label.textContent = items[i]; wrapper.appendChild(label); el.appendChild(wrapper); } }",
    "panelCRender": "function(el) { el.style.cssText = 'position:relative;padding:16px;background:var(--bg);border:4px double var(--border);min-height:300px;display:flex;flex-direction:column;justify-content:center;'; var redPlate = document.createElement('div'); redPlate.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) translateX(3px);width:160px;height:200px;background:var(--primary);z-index:1;border:2px solid var(--border);'; el.appendChild(redPlate); var blackText = document.createElement('div'); blackText.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--font-display);font-size:32px;font-weight:900;text-transform:uppercase;color:var(--border);z-index:2;text-align:center;letter-spacing:-0.05em;line-height:1.1;'; blackText.innerHTML = 'ПРОБА<br>НОМЕР 402'; el.appendChild(blackText); var star = document.createElement('div'); star.style.cssText = 'position:absolute;top:0;right:0;width:40px;height:40px;background:var(--primary);border:2px solid var(--border);clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);transform:rotate(20deg);z-index:3;'; el.appendChild(star); }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--secondary-col)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'width:100%;height:8px;background:repeating-linear-gradient(45deg, var(--border) 0px, var(--border) 4px, transparent 4px, transparent 8px);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var child = document.createElement('div'); child.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(217,58,30,0.04) 8px, rgba(217,58,30,0.04) 9px);z-index:2;'; el.appendChild(child); }"
  },
  "variations": [
    {
      "name": "DARK MODE — НОЧНАЯ ОБЁРТКА",
      "copy": {
        "heroKicker": "ГОСТ 1930 / НОЧНАЯ",
        "heroHeadline": "BLACK SUGAR",
        "heroSub": "Inverted paper grain: white noise on black fill. Light bleed instead of ink bleed. Same three inks, inverted.",
        "heroCtaHtml": "<button style=\"background:#D93A1E;color:#1A1A1A;border:2px solid #F5F0E8;padding:8px;font-family:'Russo One',sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">PULL NIGHT PROOF</button>",
        "heroCtaSecHtml": "<button style=\"background:#1A1A1A;color:#F5F0E8;border:2px solid #F5F0E8;padding:8px;font-family:'Russo One',sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">EXAMINE INV REGISTER</button>",
        "navLinks": [
          "WRAPPER",
          "INK",
          "PLATE",
          "STAR",
          "GEAR"
        ],
        "features": [
          {
            "title": "INVERTED GRAIN",
            "desc": "White noise overlay on black surface. Texture reads as paper in negative.",
            "icon": "⬛"
          },
          {
            "title": "LIGHT BLEED",
            "desc": "Red plates emit a white glow offset. Halftone becomes white dots.",
            "icon": "✨"
          },
          {
            "title": "STAR GLOW",
            "desc": "Star motif pulses with light bleed. Gear spins with inverted teeth.",
            "icon": "🌟"
          },
          {
            "title": "PALETTE SWAP",
            "desc": "Background black, text cream, red stays. Gold accent becomes silver.",
            "icon": "🔄"
          }
        ],
        "ctaStripHeadline": "PRINT NIGHT EDITION — 3:4 CANVAS",
        "ctaStripHtml": "<div style=\"display:flex;gap:8px;\"><button style=\"background:#F5F0E8;color:#1A1A1A;border:2px solid #D93A1E;padding:8px;font-family:'Russo One',sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">START WITH STAR</button><button style=\"background:#1A1A1A;color:#F5F0E8;border:2px solid #F5F0E8;padding:8px;font-family:'Russo One',sans-serif;text-transform:uppercase;font-size:16px;cursor:pointer;\">LOAD GEAR</button></div>",
        "sidebarBrand": "НОЧНОЙ ФРОНТ",
        "sidebarNav": [
          "OBERTKA",
          "KONSTRUKT",
          "PEKARNJA"
        ],
        "dashboardTitle": "NIGHT PROOF GALLERY",
        "metrics": [
          {
            "label": "STARS LIT",
            "value": "89",
            "delta": "+12%",
            "dir": "up"
          },
          {
            "label": "LIGHT OFFSET",
            "value": "1.9px",
            "delta": "+0.3px",
            "dir": "up"
          },
          {
            "label": "PAPER STOCK",
            "value": "DARK 120g",
            "delta": "—",
            "dir": "neutral"
          },
          {
            "label": "ACTIVE WRAPPERS",
            "value": "22",
            "delta": "+5",
            "dir": "up"
          },
          {
            "label": "GLOW INDEX",
            "value": "1.2",
            "delta": "+0.1",
            "dir": "up"
          }
        ],
        "chartTitle": "INVERTED REGISTER DRIFT (NIGHT PULLS)",
        "panelATitle": "NIGHT PROOFS",
        "panelARows": [
          {
            "label": "NOČNAJA KARAMEL",
            "value": "Pull #N12 — light bleed 2.2px"
          },
          {
            "label": "ČERNYJ MED",
            "value": "Pull #N11 — star glow active"
          },
          {
            "label": "TENI SAHARA",
            "value": "Pull #N10 — inverted halftone"
          },
          {
            "label": "LUNA BAR",
            "value": "Pull #N09 — double frame white"
          }
        ],
        "panelBTitle": "INK STATION (NIGHT)",
        "panelBCells": [
          {
            "label": "RED #D93A1E",
            "value": "Vermilion, light bleed +2px"
          },
          {
            "label": "BLACK #1A1A1A",
            "value": "Background, white grain overlay"
          },
          {
            "label": "WHITE #F5F0E8",
            "value": "Text and outlines"
          },
          {
            "label": "SILVER ACCENT",
            "value": "Sparing — one element"
          },
          {
            "label": "HALFTONE DOTS",
            "value": "White, 20% density"
          },
          {
            "label": "STAR TYPE",
            "value": "Inverted, glow edges"
          },
          {
            "label": "GEAR TYPE",
            "value": "Teeth white, body black"
          },
          {
            "label": "FRAME STYLE",
            "value": "Double white, no radius"
          }
        ],
        "chartData": {
          "labels": [
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT",
            "SUN"
          ],
          "series": [
            {
              "name": "RED LIGHT OFFSET (px)",
              "data": [
                1.8,
                2.3,
                2,
                2.5,
                2.1,
                2.2,
                1.9
              ]
            },
            {
              "name": "WHITE EDGE OFFSET (px)",
              "data": [
                0.5,
                0.6,
                0.4,
                0.7,
                0.5,
                0.6,
                0.5
              ]
            }
          ]
        }
      }
    }
  ],
  "shadcnTokens": {
    "--color-background": "#F5F0E8",
    "--color-popover": "#F5F0E8",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#F5F0E8",
    "--color-muted": "#F5F0E8",
    "--color-muted-foreground": "#808080",
    "--color-primary": "#D93A1E",
    "--color-ring": "#D93A1E",
    "--color-primary-foreground": "#fffff7",
    "--color-secondary": "#1A1A1A",
    "--color-accent": "#1A1A1A",
    "--color-secondary-foreground": "#F5F0E8",
    "--color-accent-foreground": "#F5F0E8",
    "--color-border": "#1A1A1A",
    "--color-input": "#1A1A1A",
    "--color-destructive": "#D93A1E"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E8",
    "--popover": "#F5F0E8",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#F5F0E8",
    "--muted": "#F5F0E8",
    "--muted-foreground": "#808080",
    "--primary": "#D93A1E",
    "--ring": "#D93A1E",
    "--primary-foreground": "#fffff7",
    "--secondary": "#1A1A1A",
    "--accent": "#1A1A1A",
    "--secondary-foreground": "#F5F0E8",
    "--accent-foreground": "#F5F0E8",
    "--border": "#1A1A1A",
    "--input": "#1A1A1A",
    "--destructive": "#D93A1E"
  }
});
