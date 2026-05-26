registerSystem({
  "meta": {
    "name": "Television Test Card",
    "tagline": "Rigid, hypnotic utility of analog broadcast test patterns",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Television Test Card",
    "colors": {
      "track": "#1A1A1A",
      "thumb": "#FFFFFF",
      "thumb-hover": "#00FF00",
      "color": "#FFFFFF",
      "on-surface": "#FFFFFF",
      "primary": "#1A1A1A",
      "on-primary": "#FFFFFF",
      "secondary": "#333333",
      "on-secondary": "#FFFFFF",
      "outline": "#FFFFFF",
      "outline-variant": "#666666",
      "error": "#1A1A1A",
      "surface": "#1A1A1A",
      "surface-container": "#333333"
    },
    "typography": {},
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
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.on-surface}",
        "padding": "4px"
      },
      "button-secondary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}"
      }
    },
    "version": "alpha",
    "description": "A design system based on Television Test Card.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `television-test-card` is ambiguous: it could refer to any of dozens of broadcast test patterns used across countries and eras. The most plausible single interpretation, based on cultural prominence and visual distinctiveness, is BBC Test Card F – a broadcast test pattern used by the BBC from 1967 into the 1990s, featuring a photograph of a girl (Carole Hersee, aged 8 in 1967) holding",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.itu.int",
          "count": 1
        },
        {
          "host": "collection.sciencemuseumgroup.org.uk",
          "count": 1
        },
        {
          "host": "www.bbc.co.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.itu.int/rec/R-REC-BT.470-6/en",
          "host": "www.itu.int",
          "institution": "International Telecommunication Union",
          "confidence_original": "high"
        },
        {
          "url": "https://collection.sciencemuseumgroup.org.uk/",
          "host": "collection.sciencemuseumgroup.org.uk",
          "institution": "Science Museum Group / National Science and Media Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.bbc.co.uk/topics/c01yxyz46myt",
          "host": "www.bbc.co.uk",
          "institution": "BBC Archives (general)",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "BBC1/Test Card F custom sans-serif lettering",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unverified"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour values for photographic elements": "** Exact hex/RGB/CIE for the girl’s dress, the clown doll, the chalkboard green, and the background grey are unknown and cannot be verified from any public primary source. All values in circulation are from uncontrolled reproductions.\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#000000",
    "--on-bg": "#FFFFFF",
    "--primary": "#FF0000",
    "--on-primary": "#151515",
    "--secondary-col": "#00FF00",
    "--on-secondary": "#FFFFFF",
    "--surface": "#1A1A1A",
    "--on-bg-muted": "#808080",
    "--border": "#FFFFFF",
    "--error": "#FF00FF",
    "--font-display": "Space Mono",
    "--font-body": "Space Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#FF0000",
    "on-primary": "#FFFFFF",
    "secondary": "#00FF00",
    "on-secondary": "#FFFFFF",
    "tertiary": "#0000FF",
    "on-tertiary": "#FFFFFF",
    "error": "#FF00FF",
    "on-error": "#FFFFFF",
    "warning": "#FFFF00",
    "info": "#00FFFF",
    "outline": "#FFFFFF",
    "outline-variant": "#666666",
    "surface": "#1A1A1A",
    "on-surface": "#FFFFFF",
    "surface-container": "#333333",
    "background": "#1A1A1A",
    "err": "#FF00FF",
    "warn": "#FFFF00",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#FF00FF",
    "deltaFlat": "#808080",
    "live": "#FF0000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#808080",
    "chartFont": "Space Mono"
  },
  "chartStyle": {
    "background": "transparent",
    "colorBarSet": [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#00FFFF",
      "#FF00FF",
      "#FFFF00",
      "#FFFFFF",
      "#000000"
    ],
    "gridLines": "1px solid #FFFFFF",
    "fontFamily": "'Space Mono', monospace",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#808080"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlines": true,
      "vignette": true,
      "phosphor_artifacts": true
    }
  },
  "interactionModel": {
    "hover": {},
    "focus": {
      "border": "2px solid var(--on-bg)"
    },
    "active": {}
  },
  "spacing": {
    "componentInternal": "8px",
    "sectionInternal": "16px",
    "pageEdge": "16px",
    "gapComponent": "8px",
    "gapSection": "16px",
    "heightSm": "32px",
    "heightMd": "40px",
    "heightLg": "48px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "none": "0 0 0 rgba(0,0,0,0)",
    "flat": "0 0 0 rgba(0,0,0,0)"
  },
  "dashboardStyle": {
    "layout": "4:3 fixed grid – orthogonal 1px lines",
    "density": "high",
    "panelTreatment": "flat with scanline overlay and 1px white borders",
    "dataVizStyle": "monochrome line chart with zone plate concentric rings",
    "signatureElement": "crosshair overlay at center of each panel"
  },
  "landingStyle": {
    "heroApproach": "centered circle and crosshair with SMPTE color bar strip at bottom",
    "scrollBehavior": "static – no scrolling",
    "ctaStyle": "outline button with flicker animation",
    "signatureMoment": "initial static flash overlay on page load"
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\"><defs><filter id=\"crt-phosphor\"><feColorMatrix type=\"saturate\" values=\"1.1\"/><feComponentTransfer><feFuncR type=\"linear\" slope=\"1.1\"/><feFuncG type=\"linear\" slope=\"1.1\"/><feFuncB type=\"linear\" slope=\"1.1\"/></feComponentTransfer></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); image-rendering: crisp-edges; text-rendering: optimizeSpeed; -webkit-font-smoothing: none; margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame ::-webkit-scrollbar { width: 6px; }\n.ds-layout-frame ::-webkit-scrollbar-track { background: var(--bg); }\n.ds-layout-frame ::-webkit-scrollbar-thumb { background: var(--on-bg); }\n.ds-layout-frame ::selection { background: rgba(255,255,255,0.25); color: inherit; }\n@keyframes flicker { 0%, 100% { opacity: 1; } 50% { opacity: 0.995; } }\n@keyframes static-flash { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }\n@keyframes zone-plate-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",
  "interactionStyles": ".ds-layout-frame *:focus { outline: none; border: 2px solid var(--on-bg); }\n.ds-layout-frame * { transition: none; }",
  "buttons": [
    {
      "name": "Primary",
      "desc": "Fully saturated red button with white uppercase monospace text. No rounded corners, no hover transition. Focus reveals a white outline.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); text-transform: uppercase; letter-spacing: -0.025em; padding: 8px 16px; height: 40px; cursor: pointer; outline: none; image-rendering: crisp-edges;\">SET CHANNEL</button>",
      "label": "Primary",
      "note": "Fully saturated red button with white uppercase monospace text. No rounded corners, no hover transition. Focus reveals a white outline."
    },
    {
      "name": "Secondary",
      "desc": "Green button for confirming a measurement or lock. Uses the secondary signal green. Flat, 1px border, uppercase monospace.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); text-transform: uppercase; letter-spacing: -0.025em; padding: 8px 16px; height: 40px; cursor: pointer; outline: none; image-rendering: crisp-edges;\">LOCK PHASE</button>",
      "label": "Secondary",
      "note": "Green button for confirming a measurement or lock. Uses the secondary signal green. Flat, 1px border, uppercase monospace."
    },
    {
      "name": "Outline",
      "desc": "Transparent background, white border, white text. Ghost button style for cancellations or secondary actions. No fill, only outline.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); text-transform: uppercase; letter-spacing: -0.025em; padding: 8px 16px; height: 40px; cursor: pointer; outline: none; image-rendering: crisp-edges;\">CANCEL</button>",
      "label": "Outline",
      "note": "Transparent background, white border, white text. Ghost button style for cancellations or secondary actions. No fill, only outline."
    }
  ],
  "cards": [
    {
      "name": "Signal Panel",
      "desc": "A dark card with a single 1px white border. Contains metadata labels in monospace uppercase. No padding rounding, flat surface.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-body); color: var(--on-surface); text-transform: uppercase; letter-spacing: -0.025em; image-rendering: crisp-edges;\"><div style=\"display: flex; justify-content: space-between; margin-bottom: 8px;\"><span>CHANNEL 4</span><span>FREQ 83.25</span></div><div style=\"display: flex; justify-content: space-between;\"><span>GAIN 3.2</span><span>PHASE 0°</span></div></div>",
      "label": "Signal Panel",
      "note": "A dark card with a single 1px white border. Contains metadata labels in monospace uppercase. No padding rounding, flat surface."
    },
    {
      "name": "Grid Overlay Card",
      "desc": "Card with a fine grid pattern overlay (1px white lines) mimicking a test card grid. Background is the standard dark surface. Use for calibration data panels.",
      "html": "<div style=\"background-color: var(--surface); background-image: repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 32px); background-size: 32px 32px; border: 1px solid var(--border); border-radius: var(--radius-card); padding: 16px; font-family: var(--font-body); color: var(--on-surface); text-transform: uppercase; letter-spacing: -0.025em; image-rendering: crisp-edges;\"><div style=\"background-color: var(--surface); padding: 8px; border: 1px solid var(--outline-variant);\">GRID LOCKED</div></div>",
      "label": "Grid Overlay Card",
      "note": "Card with a fine grid pattern overlay (1px white lines) mimicking a test card grid. Background is the standard dark surface. Use for calibration data panels."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "A single-line text input with dark background, white border, monospace uppercase text. Placeholder in uppercase. No rounding.",
      "html": "<input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: var(--surface); color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); text-transform: uppercase; letter-spacing: 0; padding: 4px 8px; height: 32px; width: 200px; outline: none; image-rendering: crisp-edges;\" placeholder=\"CHANNEL FREQ\">",
      "label": "Text Input",
      "stateLabel": "A single-line text input with dark background, white border, monospace uppercase text. Placeholder in uppercase. No rounding."
    },
    {
      "name": "Select Dropdown",
      "desc": "A select element with dark background, white border, monospace uppercase text. Dropdown arrow is native but styled via appearance: none and custom arrow.",
      "html": "<select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); background-image: url(\"data:image/svg+xml;utf8,<svg xmlns=\\x27http://www.w3.org/2000/svg\\x27 width=\\x278\\x27 height=\\x278\\x27><polygon points=\\x270,0 8,0 4,8\\x27 fill=\\x27white\\x27/></svg>\"); background-repeat: no-repeat; background-position: right 8px center; padding-right: 24px; color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); text-transform: uppercase; letter-spacing: 0; padding: 4px 8px; height: 32px; width: 200px; appearance: none; outline: none; image-rendering: crisp-edges;\"><option>NTSC</option><option selected>PAL</option><option>SECAM</option></select>",
      "label": "Select Dropdown",
      "stateLabel": "A select element with dark background, white border, monospace uppercase text. Dropdown arrow is native but styled via appearance: none and custom arrow."
    },
    {
      "name": "Checkbox",
      "desc": "A custom checkbox using a square border and an 'X' indicator for checked state. Label in monospace uppercase.",
      "html": "<label style=\"font-family: var(--font-body); color: var(--on-bg); text-transform: uppercase; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; image-rendering: crisp-edges;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"display: none;\" checked><span style=\"display: inline-block; width: 16px; height: 16px; border: 1px solid var(--border); text-align: center; line-height: 16px; font-size: 12px; color: var(--primary);\">X</span>SIGNAL LOCKED</label>",
      "label": "Checkbox",
      "stateLabel": "A custom checkbox using a square border and an 'X' indicator for checked state. Label in monospace uppercase."
    }
  ],
  "extraComponents": [
    {
      "name": "Badge – Standard Format",
      "desc": "A small badge indicating broadcast standard. Uses red background (primary) for PAL, white text, 1px border. Typically placed on the upper corner of a card.",
      "html": "<span style=\"background-color: var(--primary); color: var(--on-primary); border: 1px solid var(--border); font-family: var(--font-body); text-transform: uppercase; letter-spacing: -0.025em; padding: 2px 6px; font-size: 0.75rem; line-height: 1; white-space: nowrap; image-rendering: crisp-edges;\">PAL</span>"
    },
    {
      "name": "Tooltip – Frequency Info",
      "desc": "A tooltip that appears above a channel label. Shown here as visible for demonstration. Black background, white border, uppercase monospace small text.",
      "html": "<div style=\"position: relative; display: inline-block; border: 1px solid var(--border); padding: 8px; font-family: var(--font-body); color: var(--on-bg); text-transform: uppercase; letter-spacing: -0.025em; image-rendering: crisp-edges;\">CHANNEL 4<div style=\"display: block; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background-color: var(--surface); border: 1px solid var(--border); padding: 4px 8px; font-size: 0.75rem; white-space: nowrap; margin-bottom: 4px;\">FREQ: 83.25 MHz</div></div>"
    },
    {
      "name": "Toast – Signal Loss",
      "desc": "An error notification bar using the magenta error color. White text, 1px white border. Appears at the top of the screen to indicate a critical alert.",
      "html": "<div style=\"background-color: var(--error); color: var(--on-error); font-family: var(--font-body); text-transform: uppercase; letter-spacing: -0.025em; padding: 8px 16px; border: 1px solid var(--border); display: flex; align-items: center; gap: 8px; image-rendering: crisp-edges;\"><span style=\"font-size: 1rem;\">X</span>SIGNAL LOST – CHECK ANTENNA</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — CALIBRATION PATTERN</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SMPTE COLOR BARS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — GRID RESOLUTION 4:3</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — FRAME LOCK ACQUIRED • GAIN 3.2 • PHASE 0°</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CH 4 • 625 LINES • 60 HZ</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners break the hard-edged broadcast aesthetic. Buttons, cards, inputs must have 0 border-radius.",
      "avoid": {
        "html": "<button style=\"background-color: var(--primary); color: var(--on-primary); border-radius: 8px; border: 1px solid var(--border); font-family: var(--font-body); text-transform: uppercase; padding: 8px 16px;\">ROUNDED</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners break the hard-edged broadcast aesthetic. Buttons, cards, inputs must have 0 border-radius.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows create false depth. The test card surface is completely flat. Use no box-shadow.",
      "avoid": {
        "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.5); padding: 16px; font-family: var(--font-body); text-transform: uppercase;\">SHADOWED</div>",
        "label": "Avoid"
      },
      "rule": "Drop shadows create false depth. The test card surface is completely flat. Use no box-shadow.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Lowercase or proportional-serif typography violates the monospace-uppercase rule. All text must be uppercase monospace.",
      "avoid": {
        "html": "<p style=\"font-family: Georgia, serif; font-size: 1rem; color: var(--on-bg); text-transform: none; letter-spacing: normal;\">This is lowercase Georgia text</p>",
        "label": "Avoid"
      },
      "rule": "Lowercase or proportional-serif typography violates the monospace-uppercase rule. All text must be uppercase monospace.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients and pastel colors are not allowed. Use only fully saturated signal colors and solid fills.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, #FF6B6B, #6699CC); color: white; padding: 16px; border: 1px solid var(--border); font-family: var(--font-body); text-transform: uppercase;\">GRADIENT</div>",
        "label": "Avoid"
      },
      "rule": "Gradients and pastel colors are not allowed. Use only fully saturated signal colors and solid fills.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "BROADCAST TEST PATTERN",
      "heroHeadline": "SIGNAL CALIBRATION SUITE",
      "heroSub": "PRECISION GEOMETRY FOR ANALOG ALIGNMENT",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">SMPTE BAR GENERATOR</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ZONE PLATE ANALYZER</button>",
      "navLinks": [
        "CIRCLE CROSSHAIR",
        "COLOR BAR STRIP",
        "GRID OVERLAY",
        "ZONE PLATE",
        "RESOLUTION WEDGE",
        "SCANLINE CONTROL"
      ],
      "features": [
        {
          "title": "COLOR BAR STRIP",
          "desc": "HORIZONTAL SATURATED PRIMARIES AT 100% LEVEL NO BORDERS",
          "icon": "🌈",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌈 COLOR BAR STRIP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HORIZONTAL SATURATED PRIMARIES AT 100% LEVEL NO BORDERS</div></div>"
        },
        {
          "title": "CIRCLE CROSSHAIR",
          "desc": "CONCENTRIC RINGS WITH 1PX STROKE CENTERED AT 50%",
          "icon": "🎯",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎯 CIRCLE CROSSHAIR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CONCENTRIC RINGS WITH 1PX STROKE CENTERED AT 50%</div></div>"
        },
        {
          "title": "GRID OVERLAY",
          "desc": "ORTHOGONAL 1PX LINES AT Z-10 FOR ALIGNMENT REFERENCE",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 GRID OVERLAY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ORTHOGONAL 1PX LINES AT Z-10 FOR ALIGNMENT REFERENCE</div></div>"
        },
        {
          "title": "ZONE PLATE",
          "desc": "CONCENTRIC SINE-WAVE PATTERN FOR RESOLUTION TESTING",
          "icon": "🌀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌀 ZONE PLATE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CONCENTRIC SINE-WAVE PATTERN FOR RESOLUTION TESTING</div></div>"
        }
      ],
      "ctaStripHeadline": "CALIBRATE YOUR DISPLAY WITH BROADCAST PRECISION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">GENERATE TEST CARD</button>",
      "sidebarBrand": "TV TEST CARD",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "SMPTE PATTERNS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "ALIGNMENT TOOLS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "SIGNAL METRICS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "SYSTEM CONFIG",
          "active": false
        }
      ],
      "dashboardTitle": "LIVE SIGNAL ANALYSIS",
      "metrics": [
        {
          "label": "CHROMA PHASE",
          "value": "0.0°",
          "delta": "+0.0°",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SYNC LEVEL",
          "value": "-40.0 dB",
          "delta": "+0.2 dB",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "HUE OFFSET",
          "value": "0.0°",
          "delta": "-0.1°",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "SATURATION",
          "value": "100%",
          "delta": "0.0%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FRAME LOCK",
          "value": "525/60",
          "delta": "NTSC",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "ZONE PLATE FREQUENCY SWEEP",
      "panelATitle": "COLOR BAR STRIP ANALYSIS",
      "panelARows": [
        {
          "label": "RED",
          "value": "#FF0000",
          "pct": 0
        },
        {
          "label": "GREEN",
          "value": "#00FF00",
          "pct": 0
        },
        {
          "label": "BLUE",
          "value": "#0000FF",
          "pct": 0
        },
        {
          "label": "CYAN",
          "value": "#00FFFF",
          "pct": 0
        },
        {
          "label": "MAGENTA",
          "value": "#FF00FF",
          "pct": 0
        },
        {
          "label": "YELLOW",
          "value": "#FFFF00",
          "pct": 0
        },
        {
          "label": "WHITE",
          "value": "#FFFFFF",
          "pct": 0
        },
        {
          "label": "BLACK",
          "value": "#000000",
          "pct": 0
        }
      ],
      "panelBTitle": "RESOLUTION WEDGE DETAIL",
      "panelBCells": [
        {
          "label": "LINE PAIRS",
          "value": "200",
          "state": "ok"
        },
        {
          "label": "FREQUENCY",
          "value": "5.0 MHZ",
          "state": "warn"
        },
        {
          "label": "CONTRAST",
          "value": "100%",
          "state": "err"
        },
        {
          "label": "PHASE",
          "value": "0°",
          "state": "ok"
        },
        {
          "label": "ROTATION",
          "value": "90°",
          "state": "warn"
        },
        {
          "label": "POSITION",
          "value": "TOP LEFT",
          "state": "err"
        },
        {
          "label": "SIZE",
          "value": "32 PX",
          "state": "ok"
        },
        {
          "label": "ANGLE",
          "value": "45°",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0°",
        "45°",
        "90°",
        "135°",
        "180°",
        "225°"
      ],
      "series": [
        {
          "data": [
            100,
            95,
            80,
            60,
            40,
            20,
            20,
            20,
            20,
            20,
            20,
            20
          ],
          "label": "HORIZONTAL RESOLUTION",
          "axis": "left",
          "color": "#FF0000"
        },
        {
          "data": [
            100,
            90,
            70,
            50,
            30,
            10,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "VERTICAL RESOLUTION",
          "axis": "right-1",
          "color": "#00FF00"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'padding:16px; border:1px solid var(--border); background:var(--bg); overflow:hidden;'; el.innerHTML = '<div style=\"position:relative; width:100%; padding-bottom:75%; background:#000; overflow:hidden; border:1px solid var(--border);\">' + '<div style=\"position:absolute; inset:0; background-image:repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 32px),repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 32px); background-size:32px 32px; opacity:0.15; pointer-events:none;\"></div>' + '<div style=\"position:absolute; top:10%; bottom:10%; left:50%; transform:translateX(-50%); aspect-ratio:1; border:1px solid var(--border); border-radius:50%;\"></div>' + '<div style=\"position:absolute; top:10%; bottom:10%; left:50%; border-left:1px solid var(--border);\"></div>' + '<div style=\"position:absolute; left:10%; right:10%; top:50%; border-top:1px solid var(--border);\"></div>' + '<div style=\"position:absolute; bottom:0; left:0; right:0; height:32px; display:flex;\"><div style=\"flex:1; background:#FF0000;\"></div><div style=\"flex:1; background:#00FF00;\"></div><div style=\"flex:1; background:#0000FF;\"></div><div style=\"flex:1; background:#00FFFF;\"></div><div style=\"flex:1; background:#FF00FF;\"></div><div style=\"flex:1; background:#FFFF00;\"></div><div style=\"flex:1; background:#FFFFFF;\"></div><div style=\"flex:1; background:#000000;\"></div></div>' + '<div style=\"position:absolute; top:8px; left:8px; font-family:var(--font-body); font-size:11px; color:var(--on-bg); text-transform:uppercase; letter-spacing:-0.025em;\">SMPTE COLOR BARS</div>' + '<div style=\"position:absolute; top:8px; right:8px; font-family:var(--font-body); font-size:11px; color:var(--on-bg); text-transform:uppercase; letter-spacing:-0.025em;\">CH 4</div>' + '<div style=\"position:absolute; bottom:40px; left:8px; font-family:var(--font-body); font-size:11px; color:var(--on-bg); text-transform:uppercase; letter-spacing:-0.025em;\">625 LINES</div>' + '<div style=\"position:absolute; bottom:40px; right:8px; font-family:var(--font-body); font-size:11px; color:var(--on-bg); text-transform:uppercase; letter-spacing:-0.025em;\">60 HZ</div>' + '</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex; flex-wrap:wrap; gap:16px; justify-content:center; padding:16px; border:1px solid var(--border); background:var(--surface);'; el.innerHTML = '<div style=\"border:1px solid var(--border); padding:16px; width:200px; background:var(--bg);\"><div style=\"font-family:var(--font-body); font-size:12px; color:var(--primary); text-transform:uppercase; letter-spacing:-0.025em; margin-bottom:8px;\">COLOR BAR STRIP</div><div style=\"font-family:var(--font-body); font-size:11px; color:var(--on-bg-muted); text-transform:uppercase;\">HORIZONTAL SATURATED PRIMARIES AT 100% LEVEL NO BORDERS</div></div>' + '<div style=\"border:1px solid var(--border); padding:16px; width:200px; background:var(--bg);\"><div style=\"font-family:var(--font-body); font-size:12px; color:var(--primary); text-transform:uppercase; letter-spacing:-0.025em; margin-bottom:8px;\">CIRCLE CROSSHAIR</div><div style=\"font-family:var(--font-body); font-size:11px; color:var(--on-bg-muted); text-transform:uppercase;\">CONCENTRIC RINGS WITH 1PX STROKE CENTERED AT 50%</div></div>' + '<div style=\"border:1px solid var(--border); padding:16px; width:200px; background:var(--bg);\"><div style=\"font-family:var(--font-body); font-size:12px; color:var(--primary); text-transform:uppercase; letter-spacing:-0.025em; margin-bottom:8px;\">GRID OVERLAY</div><div style=\"font-family:var(--font-body); font-size:11px; color:var(--on-bg-muted); text-transform:uppercase;\">ORTHOGONAL 1PX LINES AT Z-10 FOR ALIGNMENT REFERENCE</div></div>' + '<div style=\"border:1px solid var(--border); padding:16px; width:200px; background:var(--bg);\"><div style=\"font-family:var(--font-body); font-size:12px; color:var(--primary); text-transform:uppercase; letter-spacing:-0.025em; margin-bottom:8px;\">ZONE PLATE</div><div style=\"font-family:var(--font-body); font-size:11px; color:var(--on-bg-muted); text-transform:uppercase;\">CONCENTRIC SINE-WAVE PATTERN FOR RESOLUTION TESTING</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'border:1px solid var(--border); background:var(--surface); padding:16px; font-family:var(--font-body); color:var(--on-surface); text-transform:uppercase; letter-spacing:-0.025em;'; el.innerHTML = '<div style=\"font-size:13px; font-weight:700; color:var(--primary); margin-bottom:12px;\">SIGNAL METRICS</div>' + '<div style=\"display:grid; grid-template-columns:repeat(2,1fr); gap:8px;\"><div><span style=\"color:var(--on-bg-muted);\">CHROMA PHASE</span><br><span>0.0°</span></div><div><span style=\"color:var(--on-bg-muted);\">SYNC LEVEL</span><br><span>-40.0 dB</span></div><div><span style=\"color:var(--on-bg-muted);\">HUE OFFSET</span><br><span>0.0°</span></div><div><span style=\"color:var(--on-bg-muted);\">SATURATION</span><br><span>100%</span></div><div style=\"grid-column:span 2;\"><span style=\"color:var(--on-bg-muted);\">FRAME LOCK</span><br><span>525/60 NTSC</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px; background:var(--border); margin:16px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var s = document.createElement('div'); s.style.cssText = 'position:absolute; inset:0; z-index:2; pointer-events:none; background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.2) 1px, rgba(0,0,0,0.2) 2px); background-size:2px 2px;'; el.appendChild(s); var v = document.createElement('div'); v.style.cssText = 'position:absolute; inset:0; z-index:3; pointer-events:none; background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%);'; el.appendChild(v); }"
  },
  "variations": [
    {
      "name": "CLEAN BROADCAST (NTSC)",
      "tagline": "MINIMAL ARTIFACTS, FLAT VECTOR LINES, 525 LINES"
    },
    {
      "name": "DEGRADED SIGNAL (PAL)",
      "tagline": "HEAVY GHOSTING, NOISE, BEAM BLOOM, 625 LINES"
    }
  ],
  "ambientCanvas": "function(tick) { var a = Math.sin(tick * 0.02) * 0.5 + 0.5; var b = Math.cos(tick * 0.03) * 0.5 + 0.5; return 'radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent ' + (50 + a * 30) + '%), linear-gradient(45deg, transparent ' + (40 + b * 20) + '%, var(--primary) ' + (60 + b * 20) + '%, transparent 100%)'; }",
  "shadcnTokens": {
    "--color-background": "#000000",
    "--color-popover": "#000000",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#1A1A1A",
    "--color-muted": "#1A1A1A",
    "--color-muted-foreground": "#808080",
    "--color-primary": "#FF0000",
    "--color-ring": "#FF0000",
    "--color-primary-foreground": "#151515",
    "--color-secondary": "#00FF00",
    "--color-accent": "#00FF00",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#FFFFFF",
    "--color-input": "#FFFFFF",
    "--color-destructive": "#FF00FF"
  },
  "shadcnTokensClassic": {
    "--background": "#000000",
    "--popover": "#000000",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#1A1A1A",
    "--muted": "#1A1A1A",
    "--muted-foreground": "#808080",
    "--primary": "#FF0000",
    "--ring": "#FF0000",
    "--primary-foreground": "#151515",
    "--secondary": "#00FF00",
    "--accent": "#00FF00",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#FFFFFF",
    "--input": "#FFFFFF",
    "--destructive": "#FF00FF"
  }
});
