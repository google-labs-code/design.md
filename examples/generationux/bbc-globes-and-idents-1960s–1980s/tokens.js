registerSystem({
  "meta": {
    "name": "BBC Globes & Idents (1960s–1980s)",
    "tagline": "Nostalgic broadcast style with spinning globes and analog artifacts",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
  },
  "yamlTokens": {
    "name": "BBC Globes & Idents (1960s–1980s)",
    "colors": {
      "primary": "#003366",
      "on-primary": "#FFFFFF",
      "secondary": "#CC0000",
      "on-secondary": "#FFFFFF",
      "tertiary": "#DDCC88",
      "on-tertiary": "#003366",
      "neutral": "#000000",
      "on-surface": "#FFFFFF",
      "on-surface-variant": "#FFFFCC",
      "outline": "#FFFFFF",
      "error": "#CC0000",
      "on-error": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Oswald",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.1,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.2,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "sans-serif",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.3,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "sans-serif",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": 1.4,
        "letterSpacing": "0.025em"
      },
      "label": {
        "fontFamily": "sans-serif",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.4,
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
      "component-internal": "16px",
      "section-internal": "32px",
      "page-edge": "48px",
      "gap-component": "32px",
      "gap-section": "64px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "12px 32px",
        "height": "48px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.neutral}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "12px 32px",
        "height": "48px"
      },
      "card": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "{colors.neutral}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "16px",
        "height": "48px"
      }
    },
    "version": "alpha",
    "description": "A nostalgic, authoritative broadcast style built around spinning physical globes, solid saturated backgrounds, and bold all‑caps typography. The system simulates analog video with film grain, scanlines, and halation.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `bbc-globes-and-idents-1960s–1980s` refers to the on-screen continuity identification devices (idents) used by the British Broadcasting Corporation (BBC) for its television channels BBC1 and BBC2 between the early 1960s and the late 1980s, most notably the rotating globes that served as channel brandmarks. These idents evolved from filmed mechanical models (1963–1985) to early computer-ge",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.youtube.com",
          "count": 1
        },
        {
          "host": "collections.vam.ac.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.youtube.com/watch?v=z_Dv3RMgN1g",
          "host": "www.youtube.com",
          "institution": null,
          "confidence_original": "low"
        },
        {
          "url": "https://collections.vam.ac.uk/item/O135668/bbc-poster/",
          "host": "collections.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Custom BBC lettering (BBC Blocks and channel numerals)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "few_usable_urls",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Exact colour values": "** No verified CIE, RGB, or Pantone values for any ident colour. The \\\"teal\\\" of the globe ranges from #3F8E9A to #5F9EA0 in secondary estimates. A verified reference point (e.g., a frame from a known film master) would be required to anchor colours.\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#003366",
    "--on-bg": "#FFFFFF",
    "--primary": "#003366",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#CC0000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#000000",
    "--on-bg-muted": "#FFFFCC",
    "--border": "#FFFFFF",
    "--error": "#CC0000",
    "--font-display": "Oswald",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#003366",
    "onPrimary": "#FFFFFF",
    "secondary": "#CC0000",
    "onSecondary": "#FFFFFF",
    "tertiary": "#DDCC88",
    "onTertiary": "#003366",
    "neutral": "#000000",
    "onSurface": "#FFFFFF",
    "onSurfaceVariant": "#FFFFCC",
    "outline": "#FFFFFF",
    "error": "#CC0000",
    "onError": "#FFFFFF",
    "err": "#CC0000",
    "deltaFlat": "#000000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC0000",
    "live": "#003366",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#FFFFCC",
    "chartFont": "Inter"
  },
  "elevation": {
    "none": "0",
    "globeShadow": "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
    "zBase": 0,
    "zGlobe": 10,
    "zTextBand": 20,
    "zOverlay": 30
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "broadcast",
    "params": {
      "filmGrain": true,
      "scanlines": true,
      "halation": true,
      "vignette": true,
      "crtBloom": true
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><defs><filter id=\"halation\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\"/><feMerge><feMergeNode in=\"blur\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter><filter id=\"film-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\"/><feColorMatrix type=\"saturate\" values=\"0\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0; overflow-x: hidden; min-height: 100vh;",
  "globalCss": ".ds-layout-frame .vhs-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 10000; }\n.ds-layout-frame .vhs-grain { background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" /></filter><rect width=\"100%\" height=\"100%\" filter=\"url(#noise)\" opacity=\"0.15\" mix-blend-mode=\"overlay\" /></svg>'); mix-blend-mode: overlay; opacity: 0.15; pointer-events: none; }\n.ds-layout-frame .vhs-scanlines { background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px); mix-blend-mode: multiply; opacity: 0.1; pointer-events: none; }\n.ds-layout-frame .vhs-vignette { background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%); mix-blend-mode: multiply; opacity: 0.5; pointer-events: none; }\n.ds-layout-frame .vhs-halation { filter: drop-shadow(0 0 6px rgba(255,255,255,0.4)); pointer-events: none; }",
  "interactionModel": {
    "hover": {
      "brightness": 1.15,
      "filter": "brightness(1.15)"
    },
    "focus": {
      "outline": "none"
    },
    "active": {
      "backgroundColor": "var(--secondary-col)"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover { filter: brightness(1.15); }\n.ds-layout-frame button:active { background-color: var(--secondary-col); }\n.ds-layout-frame button:focus { outline: none; }",
  "chartStyle": {
    "type": "typographic",
    "description": "Data is minimal and typographically driven. No charts or gauges. Use color-coded dots (ok: none, warn: gold, err: red) next to values. Globe rotation continues.",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#FFFFCC",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "Not applicable – this system is for broadcast ident-style presentations, not data dashboards. Use single-screen hero compositions.",
    "density": "Low",
    "panelTreatment": "N/A",
    "dataVizStyle": "Minimal typographic – no charts or gauges. Use color-coded dots (ok: none, warn: gold, err: red) next to values.",
    "signatureElement": "Globe rotation continues in the background."
  },
  "landingStyle": {
    "heroApproach": "Solid saturated background (primary blue #003366) with centered physical globe rotating slowly (12s revolution).",
    "scrollBehavior": "No scroll – single 4:3 frame. Transition via circular wipe or fade to black.",
    "ctaStyle": "No CTA – all information is in the centred all-caps text band at the lower third.",
    "signatureMoment": "Globe rotation and text band fade-in (500ms linear)."
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary broadcast-style button with solid blue background and white all-caps text, featuring a white border and analog halation on hover (brightness bump).",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--outline); padding: 12px 32px; height: 48px; font-family: var(--font-display); font-size: 18px; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; border-radius: var(--radius-default); outline: none; transition: filter 0ms;\">LIVE</button>",
      "label": "button-primary",
      "note": "Primary broadcast-style button with solid blue background and white all-caps text, featuring a white border and analog halation on hover (brightness bump)."
    },
    {
      "name": "button-secondary",
      "desc": "Secondary button with solid black background and blue text, retaining the same typographic treatment and flat aesthetic.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--primary); border: 2px solid var(--outline); padding: 12px 32px; height: 48px; font-family: var(--font-display); font-size: 18px; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; border-radius: var(--radius-default); outline: none;\">ON AIR</button>",
      "label": "button-secondary",
      "note": "Secondary button with solid black background and blue text, retaining the same typographic treatment and flat aesthetic."
    },
    {
      "name": "button-ghost",
      "desc": "Ghost button with transparent background and white border, used for secondary actions while maintaining the broadcast visual language.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-primary); border: 2px solid var(--outline); padding: 12px 32px; height: 48px; font-family: var(--font-display); font-size: 18px; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; border-radius: var(--radius-default); outline: none;\">IDENT</button>",
      "label": "button-ghost",
      "note": "Ghost button with transparent background and white border, used for secondary actions while maintaining the broadcast visual language."
    }
  ],
  "cards": [
    {
      "name": "card-primary",
      "desc": "Feature card with solid primary blue background, white text and a full-width black band at the bottom containing all-caps text. Mimics the BBC ident text band.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--outline); border-radius: var(--radius-card); padding: 0; display: flex; flex-direction: column; position: relative; width: 400px; height: 300px;\"><div style=\"flex: 1; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 24px; letter-spacing: 0.05em; text-transform: uppercase;\">GLOBE</div><div style=\"background-color: var(--surface); color: var(--on-surface); padding: 16px; text-align: center; font-family: var(--font-display); font-size: 36px; letter-spacing: 0.05em; text-transform: uppercase;\">BBC TWO</div></div>",
      "label": "card-primary",
      "note": "Feature card with solid primary blue background, white text and a full-width black band at the bottom containing all-caps text. Mimics the BBC ident text band."
    },
    {
      "name": "card-secondary",
      "desc": "Dark card with solid black background and white text, representing the lower-third text band as a standalone component. Use for alerts or headlines.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-surface); border: 2px solid var(--outline); border-radius: var(--radius-card); padding: 24px; text-align: center; font-family: var(--font-display); font-size: 36px; letter-spacing: 0.05em; text-transform: uppercase;\">NEWS FLASH</div>",
      "label": "card-secondary",
      "note": "Dark card with solid black background and white text, representing the lower-third text band as a standalone component. Use for alerts or headlines."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input field with black background, white border, and white text. Designed for minimal broadcast overlays.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"color: var(--on-primary); font-family: var(--font-body); font-size: 14px; letter-spacing: 0.025em; text-transform: uppercase;\">IDENT KEY</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"BBC ONE\" style=\"background-color: var(--surface); color: var(--on-surface); border: 2px solid var(--outline); border-radius: var(--radius-input); padding: 16px; height: 48px; font-family: var(--font-body); font-size: 18px; outline: none;\" /></div>",
      "label": "text-input",
      "stateLabel": "Text input field with black background, white border, and white text. Designed for minimal broadcast overlays."
    },
    {
      "name": "select-dropdown",
      "desc": "Select dropdown styled with the broadcast palette: black background, white border, and white text. All caps label.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"color: var(--on-primary); font-family: var(--font-body); font-size: 14px; letter-spacing: 0.025em; text-transform: uppercase;\">CHANNEL</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); color: var(--on-surface); border: 2px solid var(--outline); border-radius: var(--radius-input); padding: 16px; height: 48px; font-family: var(--font-body); font-size: 18px; outline: none; appearance: none; -webkit-appearance: none; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\\x27http://www.w3.org/2000/svg\\x27 fill=\\x27white\\x27 viewBox=\\x270 0 24 24\\x27%3E%3Cpath d=\\x27M7 10l5 5 5-5z\\x27/%3E%3C/svg%3E\"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px;\"><option>BBC ONE</option><option>BBC TWO</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Select dropdown styled with the broadcast palette: black background, white border, and white text. All caps label."
    },
    {
      "name": "checkbox",
      "desc": "Custom checkbox with white border and primary fill on active. Styled to match the broadcast CRT feel.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"cb1-073d\" style=\"-webkit-appearance: none; appearance: none; width: 24px; height: 24px; border: 2px solid var(--outline); border-radius: 0; background-color: var(--surface); cursor: pointer; position: relative;\" /><label for=\"cb1-073d\" style=\"color: var(--on-primary); font-family: var(--font-body); font-size: 18px; letter-spacing: 0.025em; text-transform: uppercase;\">TELETEXT</label></div>",
      "label": "checkbox",
      "stateLabel": "Custom checkbox with white border and primary fill on active. Styled to match the broadcast CRT feel."
    }
  ],
  "extraComponents": [
    {
      "name": "globe-hero",
      "desc": "Centered globe representation: a wireframe-style circle with white border and subtle shadow, rotating slowly. Used as the primary visual anchor.",
      "html": "<div style=\"width: 300px; height: 300px; border-radius: 50%; border: 2px solid var(--outline); background-color: var(--primary); position: relative; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3)); animation: globe-spin 12s linear infinite; margin: 0 auto;\"><div style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: var(--on-primary); font-family: var(--font-display); font-size: 24px; letter-spacing: 0.05em; text-transform: uppercase;\">GLOBE</div></div>"
    },
    {
      "name": "text-band",
      "desc": "Full-width black band at the bottom of the viewport containing centered all-caps white text with tight tracking. The signature identifying element.",
      "html": "<div style=\"background-color: var(--surface); color: var(--on-surface); padding: 16px 48px; text-align: center; font-family: var(--font-display); font-size: 48px; letter-spacing: 0.05em; text-transform: uppercase; border-top: 2px solid var(--outline);\">BBC ONE</div>"
    },
    {
      "name": "bbc-badge",
      "desc": "Compact badge with 'BBC' text in white on black, with a slight halation glow. Use for corner branding or status indicators.",
      "html": "<span style=\"background-color: var(--surface); color: var(--on-surface); padding: 4px 12px; font-family: var(--font-display); font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid var(--outline); border-radius: 0; display: inline-block; filter: drop-shadow(0 0 6px rgba(255,255,255,0.4));\">BBC</span>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — BBC ONE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — THE WORLD TODAY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — NEWS AT TEN</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — This is the BBC from London.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — 12:00 GMT</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners on any element; all corners must be sharp (border-radius: 0).",
      "avoid": {
        "html": "<button style=\"background-color: #003366; color: white; padding: 12px 32px; border-radius: 8px; border: none;\">Rounded Button</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners on any element; all corners must be sharp (border-radius: 0).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use gradient backgrounds. Backgrounds must be solid saturated colours.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #003366, #CC0000); color: white; padding: 24px; text-align: center;\">Gradient Background</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradient backgrounds. Backgrounds must be solid saturated colours.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not overlap the globe and text elements. Keep them in separate zones.",
      "avoid": {
        "html": "<div style=\"position: relative;\"><div style=\"width: 200px; height: 200px; border-radius: 50%; background: #003366; border: 2px solid white;\"></div><span style=\"position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 24px;\">Overlap</span></div>",
        "label": "Avoid"
      },
      "rule": "Do not overlap the globe and text elements. Keep them in separate zones.",
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
    "desc": "Avoid modern UI shadows on text and components (except the globe's drop shadow).",
    "avoid": {
      "html": "<div style=\"background-color: var(--surface); color: var(--on-surface); padding: 16px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-family: var(--font-display);\">Text with drop shadow and box shadow</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#003366",
    "on-primary": "#FFFFFF",
    "secondary": "#CC0000",
    "on-secondary": "#FFFFFF",
    "tertiary": "#DDCC88",
    "on-tertiary": "#003366",
    "neutral": "#000000",
    "on-surface": "#FFFFFF",
    "on-surface-variant": "#FFFFCC",
    "outline": "#FFFFFF",
    "error": "#CC0000",
    "on-error": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "sans-serif",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "sans-serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.2,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "sans-serif",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.3,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "sans-serif",
      "fontSize": "18px",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "letterSpacing": "0.025em"
    },
    "label": {
      "fontFamily": "sans-serif",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.4,
      "letterSpacing": "0.025em",
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
    "component-internal": "16px",
    "section-internal": "32px",
    "page-edge": "48px",
    "gap-component": "32px",
    "gap-section": "64px",
    "height-sm": "32px",
    "height-md": "48px",
    "height-lg": "64px",
    "icon": "32px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "BBC IDENTS",
      "heroHeadline": "GLOBE ARCHIVE",
      "heroSub": "Restoring the rotating globe from 1963 to 1989",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#003366;color:white;border:2px solid white;padding:12px 32px;text-transform:uppercase;font-family:Oswald;letter-spacing:0.05em;border-radius:0;\">BROWSE IDENTS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:black;color:white;border:2px solid white;padding:12px 32px;text-transform:uppercase;font-family:Oswald;letter-spacing:0.05em;border-radius:0;\">TIMELINE</button>",
      "navLinks": [
        "GLOBES",
        "IDENTS",
        "TIMELINE",
        "EFFECTS",
        "ABOUT"
      ],
      "features": [
        {
          "title": "GLOBE VIEWER",
          "desc": "Rotating physical globe model with authentic film grain and scanlines",
          "icon": "🌐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌐 GLOBE VIEWER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Rotating physical globe model with authentic film grain and scanlines</div></div>"
        },
        {
          "title": "TEXT BAND",
          "desc": "Lower third black band with centered all-caps white text",
          "icon": "📺",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📺 TEXT BAND</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Lower third black band with centered all-caps white text</div></div>"
        },
        {
          "title": "ANALOG EFFECTS",
          "desc": "Apply halation, CRT bloom, and tape degradation artifacts",
          "icon": "🎞️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎞️ ANALOG EFFECTS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Apply halation, CRT bloom, and tape degradation artifacts</div></div>"
        },
        {
          "title": "CHRONOLOGY",
          "desc": "Browse idents by era: mechanical globe, wireframe, early computer",
          "icon": "⏳",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏳ CHRONOLOGY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Browse idents by era: mechanical globe, wireframe, early computer</div></div>"
        }
      ],
      "ctaStripHeadline": "EXPLORE THE ARCHIVE",
      "ctaStripHtml": "<p style='color:white;'>Access the full collection of BBC idents from 1963 to 1986.</p>",
      "sidebarBrand": "BBC IDENT ARCHIVE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "BROWSE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "RESTORATIONS",
          "active": false
        }
      ],
      "dashboardTitle": "IDENT DASHBOARD",
      "metrics": [
        {
          "label": "TOTAL IDENTS",
          "value": "1,247",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "RESTORED",
          "value": "312",
          "delta": "+8",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACTIVE",
          "value": "4",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ARCHIVED",
          "value": "931",
          "delta": "+4",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "RESTORATION PROGRESS",
      "panelATitle": "RECENT RESTORATIONS",
      "panelARows": [
        {
          "label": "BBC1 GLOBE 1963",
          "value": "COMPLETE",
          "pct": 0
        },
        {
          "label": "BBC2 WIREFRAME 1985",
          "value": "IN PROGRESS",
          "pct": 0
        },
        {
          "label": "COLOUR TEST CARD",
          "value": "PENDING",
          "pct": 0
        },
        {
          "label": "BBC1 IDENT 1975",
          "value": "COMPLETE",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "IDENT DETAILS",
      "panelBCells": [
        {
          "label": "SOURCE",
          "value": "BBC ARCHIVE",
          "state": "ok"
        },
        {
          "label": "YEAR",
          "value": "1963",
          "state": "warn"
        },
        {
          "label": "CHANNEL",
          "value": "BBC1",
          "state": "err"
        },
        {
          "label": "TYPE",
          "value": "MECHANICAL",
          "state": "ok"
        },
        {
          "label": "DURATION",
          "value": "15s",
          "state": "warn"
        },
        {
          "label": "COLOUR",
          "value": "B&W",
          "state": "err"
        },
        {
          "label": "STATUS",
          "value": "RESTORED",
          "state": "ok"
        },
        {
          "label": "NOTES",
          "value": "ORIGINAL FILM",
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
            20,
            30,
            45,
            50,
            60,
            75,
            75,
            75,
            75,
            75,
            75,
            75
          ],
          "label": "RESTORED",
          "axis": "left",
          "color": "#003366"
        },
        {
          "data": [
            40,
            35,
            30,
            28,
            25,
            20,
            20,
            20,
            20,
            20,
            20,
            20
          ],
          "label": "PENDING",
          "axis": "right-1",
          "color": "#CC0000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;overflow:hidden;background:var(--bg);'; var globe=document.createElement('div'); globe.style.cssText='width:300px;height:300px;border-radius:50%;border:2px solid var(--outline);background:var(--bg);filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3));animation:globeSpin 12s linear infinite;display:flex;align-items:center;justify-content:center;'; globe.innerHTML='<span style=\"color:var(--on-bg);font-family:var(--font-display);font-size:24px;letter-spacing:0.05em;text-transform:uppercase;\">GLOBE</span>'; var band=document.createElement('div'); band.style.cssText='position:absolute;bottom:0;left:0;width:100%;height:30%;background:var(--surface);display:flex;align-items:center;justify-content:center;border-top:2px solid var(--outline);'; var text=document.createElement('span'); text.style.cssText='color:var(--on-surface);font-family:var(--font-display);font-size:48px;letter-spacing:0.05em;text-transform:uppercase;filter:drop-shadow(0 0 6px rgba(255,255,255,0.4));'; text.textContent='BBC ONE'; band.appendChild(text); el.appendChild(globe); el.appendChild(band); var style=document.createElement('style'); style.textContent='@keyframes globeSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }'; el.appendChild(style); }",
    "showcaseRender": "function(el) { el.style.cssText='min-height:80vh;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;background:var(--bg);padding:48px;'; var container=document.createElement('div'); container.style.cssText='width:80%;max-width:800px;aspect-ratio:4/3;position:relative;border:2px solid var(--outline);overflow:hidden;background:var(--bg);'; var globe=document.createElement('div'); globe.style.cssText='position:absolute;top:50%;left:50%;width:200px;height:200px;border-radius:50%;border:2px solid var(--outline);transform:translate(-50%,-50%);animation:globeSpin 12s linear infinite;background:var(--bg);filter:drop-shadow(0 4px 8px rgba(0,0,0,0.3));'; globe.innerHTML='<span style=\"color:var(--on-bg);font-family:var(--font-display);font-size:18px;letter-spacing:0.05em;\">GLOBE</span>'; var band=document.createElement('div'); band.style.cssText='position:absolute;bottom:0;left:0;width:100%;height:30%;background:var(--surface);display:flex;align-items:center;justify-content:center;border-top:2px solid var(--outline);'; var text=document.createElement('span'); text.style.cssText='color:var(--on-surface);font-family:var(--font-display);font-size:36px;letter-spacing:0.05em;text-transform:uppercase;filter:drop-shadow(0 0 6px rgba(255,255,255,0.4));'; text.textContent='BBC TWO'; band.appendChild(text); container.appendChild(globe); container.appendChild(band); el.appendChild(container); var style=document.createElement('style'); style.textContent='@keyframes globeSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }'; el.appendChild(style); }",
    "panelCRender": "function(el) { el.style.cssText='background:var(--surface);color:var(--on-surface);font-family:var(--font-body);padding:24px;border:2px solid var(--outline);'; var title=document.createElement('div'); title.style.cssText='font-family:var(--font-display);font-size:24px;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:16px;border-bottom:2px solid var(--outline);padding-bottom:8px;'; title.textContent='IDENT DETAILS'; el.appendChild(title); var cells=['SOURCE: BBC ARCHIVE','YEAR: 1963','CHANNEL: BBC1','TYPE: MECHANICAL','DURATION: 15s','COLOUR: B&W','STATUS: RESTORED','NOTES: ORIGINAL FILM']; for(var i=0;i<cells.length;i++){ var row=document.createElement('div'); row.style.cssText='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.2);font-size:14px;letter-spacing:0.025em;text-transform:uppercase;'; var parts=cells[i].split(': '); row.innerHTML='<span style=\"color:var(--on-bg-muted);\">'+parts[0]+'</span><span>'+parts[1]+'</span>'; el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='width:100%;height:2px;background:var(--outline);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.05) 2px,rgba(0,0,0,0.05) 4px),radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,0.6) 100%),url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27 opacity=%270.15%27/%3E%3C/svg%3E\");background-blend-mode:multiply,multiply,overlay;filter:drop-shadow(0 0 6px rgba(255,255,255,0.4));'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var d=document.createElement('div'); d.style.cssText='width:200px;height:200px;border-radius:50%;border:2px solid var(--outline);background:var(--primary);filter:drop-shadow(0 0 12px var(--primary));transform:rotate('+(tick%360)+'deg);transition:transform 0s linear;'; d.innerHTML='<span style=\"color:white;font-family:var(--font-display);font-size:16px;display:flex;align-items:center;justify-content:center;height:100%;\">'+tick+'</span>'; return d; }",
  "shadcnTokens": {
    "--color-background": "#003366",
    "--color-popover": "#003366",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#000000",
    "--color-muted": "#000000",
    "--color-muted-foreground": "#FFFFCC",
    "--color-primary": "#003366",
    "--color-ring": "#003366",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#CC0000",
    "--color-accent": "#CC0000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#FFFFFF",
    "--color-input": "#FFFFFF",
    "--color-destructive": "#CC0000"
  },
  "shadcnTokensClassic": {
    "--background": "#003366",
    "--popover": "#003366",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#000000",
    "--muted": "#000000",
    "--muted-foreground": "#FFFFCC",
    "--primary": "#003366",
    "--ring": "#003366",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#CC0000",
    "--accent": "#CC0000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#FFFFFF",
    "--input": "#FFFFFF",
    "--destructive": "#CC0000"
  }
});
