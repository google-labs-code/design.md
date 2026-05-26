registerSystem({
  "meta": {
    "name": "Tektronix 465",
    "tagline": "A 1970s analog CRT oscilloscope aesthetic for dashboards and retro-futuristic interfaces.",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323&display=swap"
  },
  "yamlTokens": {
    "name": "Tektronix 465",
    "colors": {
      "primary": "#00FF41",
      "secondary": "#CCFF00",
      "tertiary": "#FFB000",
      "surface": "#0A0E0A",
      "surface-container": "#0D1B0D",
      "on-surface": "#00FF41",
      "on-surface-variant": "#00CC00"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323",
        "fontSize": "18px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "VT323",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "VT323",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "2px",
      "card": "2px",
      "button": "0px"
    },
    "spacing": {
      "component-internal": "8px",
      "section-internal": "16px",
      "page-edge": "16px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "40px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "32px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.surface-container}",
        "textColor": "{colors.primary}",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "graticule-grid": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.default}"
      },
      "power-led": {
        "backgroundColor": "{colors.tertiary}",
        "size": "8px"
      },
      "waveform-trace": {
        "textColor": "{colors.primary}",
        "height": "2px"
      }
    },
    "version": "alpha",
    "description": "A 1970s analog CRT oscilloscope aesthetic translated into a UI — near-black phosphor screen, green trace palette, graticule grid, scanline textures, and chunky hardware controls for dashboards and retro-futuristic interfaces.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `oscilloscope-tektronix-465` refers to the Tektronix 465, a portable dual-trace analog oscilloscope manufactured by Tektronix, Inc. (Beaverton, Oregon). It was introduced in 1972 (attested in Tektronix catalog documentation, per Provider ZAI) and produced through the early 1980s. The instrument is widely recognised for its ruggedness and 100 MHz bandwidth, and served as a general‑",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "w140.com",
          "count": 1
        },
        {
          "host": "www.ebay.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://w140.com/tekwiki/wiki/465",
          "host": "w140.com",
          "institution": "TekWiki",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.ebay.com/",
          "host": "www.ebay.com",
          "institution": "eBay",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica Medium",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        },
        {
          "name": "custom Tektronix logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        },
        {
          "name": "monoline sans-serif (graticule scale)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unknown"
        }
      ],
      "flags": [
        "few_usable_urls",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        "1. **Primary colour specification** — No attested hex, Pantone, RAL, or Munsell value for the cabinet blue‑grey. Four divergent inferred approximations exist (see §2). Resolution requires spectrophotometric measurement of a known‑original unit or discovery of a Tektronix paint specification."
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#0A0E0A",
    "--on-bg": "#00FF41",
    "--primary": "#00FF41",
    "--on-primary": "#0A0E0A",
    "--secondary-col": "#CCFF00",
    "--on-secondary": "#0A0E0A",
    "--surface": "#0D1B0D",
    "--on-bg-muted": "#00CC00",
    "--border": "#336633",
    "--error": "#FFB000",
    "--font-display": "VT323",
    "--font-body": "VT323",
    "--radius-default": "2px",
    "--radius-card": "2px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "traceGreen": "#00FF41",
    "secondaryTrace": "#CCFF00",
    "amberIndicator": "#FFB000",
    "screenBase": "#0A0E0A",
    "panelCharcoal": "#0D1B0D",
    "dimText": "#00CC00",
    "gridLine": "#336633",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#FFB000",
    "deltaUp": "#22C55E",
    "deltaDown": "#FF3300",
    "deltaFlat": "#00CC00",
    "live": "#00FF41",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#00CC00",
    "chartFont": "VT323"
  },
  "elevation": {
    "flat": true,
    "card": "none",
    "button": "none",
    "modal": "none",
    "drawer": "none"
  },
  "surfaceModel": "glow",
  "materialSimulation": {
    "model": "crt-screen",
    "scanlines": {
      "enabled": true,
      "opacity": 0.15,
      "repeat": "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 3px)"
    },
    "grain": {
      "enabled": true,
      "technique": "feTurbulence",
      "opacity": 0.08,
      "blend": "overlay"
    },
    "vignette": {
      "enabled": true,
      "type": "radial-gradient",
      "stops": "transparent 70%, rgba(0,10,0,0.8) 100%",
      "blend": "multiply"
    }
  },
  "interactionModel": {
    "hover": {
      "effect": "glow",
      "css": "text-shadow: 0 0 8px var(--primary), 0 0 12px var(--primary);"
    },
    "focus": {
      "effect": "glow-ring",
      "css": "outline: 2px solid var(--primary); outline-offset: 2px; box-shadow: 0 0 4px var(--primary);"
    },
    "active": {
      "effect": "offset-shift",
      "css": "transform: translateY(1px); filter: brightness(1.1);"
    },
    "transition": {
      "duration": "150ms",
      "easing": "linear"
    }
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "16px",
    "gap-component": "8px",
    "gap-section": "16px",
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "40px",
    "icon": "16px"
  },
  "radius": {
    "default": "2px",
    "card": "2px",
    "button": "0px"
  },
  "globalFilter": "<svg><defs><filter id='phosphor-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0'/></filter><filter id='bloom'><feGaussianBlur stdDeviation='3' result='blur'/><feMerge><feMergeNode in='SourceGraphic'/><feMergeNode in='blur'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame * { -webkit-font-smoothing: none; -moz-font-smoothing: none; font-smoothing: none; image-rendering: pixelated; text-rendering: optimizeSpeed; } .ds-layout-frame ::selection { background: rgba(0,255,65,0.25); color: inherit; } .ds-layout-frame::-webkit-scrollbar { width: 6px; } .ds-layout-frame::-webkit-scrollbar-track { background: rgba(13,27,13,0.8); } .ds-layout-frame::-webkit-scrollbar-thumb { background: rgba(0,255,65,0.5); } .ds-layout-frame::-webkit-scrollbar-thumb:hover { background: rgba(0,255,65,0.7); } @keyframes waveDraw { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } } .waveform-trace { stroke-dasharray: 1000; animation: waveDraw 3s linear infinite; } @keyframes afterglowDecay { 0% { opacity: 0.6; } 100% { opacity: 0; } } .afterglow { animation: afterglowDecay 2s ease-out; }",
  "interactionStyles": ".ds-layout-frame .tektronix-interactive:hover { text-shadow: 0 0 8px var(--primary), 0 0 12px var(--primary); transition: all 150ms linear; } .ds-layout-frame .tektronix-interactive:active { transform: translateY(1px); filter: brightness(1.1); } .ds-layout-frame .tektronix-interactive:focus { outline: 2px solid var(--primary); outline-offset: 2px; box-shadow: 0 0 4px var(--primary); }",
  "chartStyle": {
    "background": "#0A0F0A",
    "gridLines": {
      "color": "#336633",
      "width": "1px",
      "opacity": 0.3,
      "style": "solid"
    },
    "axisLabels": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "color": "#00CC00",
      "textTransform": "uppercase"
    },
    "line": {
      "color": "#00FF41",
      "width": "2px",
      "style": "rough-polyline",
      "glow": "0 0 6px #00ff41"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#00CC00",
    "fontFamily": "VT323"
  },
  "dashboardStyle": {
    "layout": "screen-dominant with bezel controls – a large CRT area containing graticule grid and waveform traces, surrounded by control panels on bottom and right edges.",
    "density": "compact, grid-aligned (8px grid) with minimal whitespace, mimicking hardware density.",
    "panelTreatment": "dark panel backgrounds (var(--surface)) with green border outlines and monospace labels; controls appear as chunky push-buttons and knobs.",
    "dataVizStyle": "continuous rough-polyline waveform traces (#00FF41) with drop-shadow glow; afterglow ghosts at reduced opacity; no smooth curves or bezier.",
    "signatureElement": "a glowing amber power LED (8px) positioned at the bottom-right of the CRT bezel."
  },
  "landingStyle": {
    "heroApproach": "full-screen CRT face with an 8×8 graticule grid overlay and a single sweeping waveform trace with afterglow ghosts; bright green on near-black.",
    "scrollBehavior": "scanline shimmer overlay persists; waveform trace animates with a slow sweep and decay; graticule grid remains static.",
    "ctaStyle": "a primary push-button with hard green border, uppercase label, and subtle glow hover effect, placed below the CRT screen area.",
    "signatureMoment": "on load, a simulated CRT power-on: vignette fades in, scanlines appear, waveform trace draws from left to right with afterglow, and the power LED blinks amber twice before staying lit."
  },
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary push-button with hard edges and phosphor-green text on a dark panel background. Mimics the chunky hardware controls of the Tektronix 465.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--primary); border: 1px solid var(--primary); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 12px; text-transform: uppercase; padding: 8px; height: 32px; cursor: pointer;\">MEASURE</button>",
      "label": "button-primary",
      "note": "Primary push-button with hard edges and phosphor-green text on a dark panel background. Mimics the chunky hardware controls of the Tektronix 465."
    },
    {
      "name": "button-secondary",
      "desc": "Secondary outline button with secondary green for less critical actions. Uses same hard-edge shape.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--secondary-col); border: 1px solid var(--secondary-col); border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 12px; text-transform: uppercase; padding: 8px; height: 32px; cursor: pointer;\">HOLD</button>",
      "label": "button-secondary",
      "note": "Secondary outline button with secondary green for less critical actions. Uses same hard-edge shape."
    },
    {
      "name": "button-ghost",
      "desc": "Ghost button with text only on transparent background, used for tertiary actions like readout toggles.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg-muted); border: none; border-radius: var(--radius-btn); font-family: var(--font-display); font-size: 12px; text-transform: uppercase; padding: 8px; height: 24px; cursor: pointer;\">RESET</button>",
      "label": "button-ghost",
      "note": "Ghost button with text only on transparent background, used for tertiary actions like readout toggles."
    }
  ],
  "cards": [
    {
      "name": "metric-cell",
      "desc": "A measurement card with dark panel background, green border, and glowing value – reminiscent of oscilloscope readout panels.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--primary); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-display);\"><span style=\"color: var(--on-bg-muted); font-size: 12px; display: block;\">FREQUENCY</span><span style=\"color: var(--primary); font-size: 18px; text-shadow: 0 0 6px var(--primary);\">1.5 kHz</span></div>",
      "label": "metric-cell",
      "note": "A measurement card with dark panel background, green border, and glowing value – reminiscent of oscilloscope readout panels."
    },
    {
      "name": "status-card",
      "desc": "A card displaying system status with amber indicator for warnings, set inside a graticule-like border.",
      "html": "<div style=\"background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-display);\"><span style=\"color: var(--amberIndicator); font-size: 12px;\">TRIGGER MODE</span><span style=\"color: var(--primary); font-size: 14px; display: block;\">NORMAL</span></div>",
      "label": "status-card",
      "note": "A card displaying system status with amber indicator for warnings, set inside a graticule-like border."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "A monospace input field with dark background and green border, resembling a parameter entry field on the oscilloscope.",
      "html": "<div style=\"display: inline-flex; align-items: center;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background: var(--bg); color: var(--primary); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-body); font-size: 12px; text-transform: uppercase; padding: 4px 8px; height: 24px;\" value=\"CH1\" /></div>",
      "label": "text-input",
      "stateLabel": "A monospace input field with dark background and green border, resembling a parameter entry field on the oscilloscope."
    },
    {
      "name": "select",
      "desc": "A dropdown select mimicking a rotary switch panel, with green text and border.",
      "html": "<div style=\"display: inline-flex; align-items: center;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--primary); border: 1px solid var(--primary); border-radius: var(--radius-default); font-family: var(--font-body); font-size: 12px; text-transform: uppercase; padding: 4px 8px; height: 24px;\"><option>VOLTS/DIV</option><option>TIME/DIV</option><option>POSITION</option></select></div>",
      "label": "select",
      "stateLabel": "A dropdown select mimicking a rotary switch panel, with green text and border."
    },
    {
      "name": "checkbox",
      "desc": "A square checkbox toggle, styled as a hardware switch with green fill when active.",
      "html": "<label style=\"display: inline-flex; align-items: center; font-family: var(--font-body); font-size: 12px; color: var(--primary); cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 12px; height: 12px; border: 1px solid var(--primary); background: var(--bg); margin-right: 8px;\" checked />CH 1 COUPLING</label>",
      "label": "checkbox",
      "stateLabel": "A square checkbox toggle, styled as a hardware switch with green fill when active."
    }
  ],
  "extraComponents": [
    {
      "name": "power-led",
      "desc": "Glowing amber power indicator LED, mimicking the front-panel indicator on the Tektronix 465.",
      "html": "<div style=\"width: 8px; height: 8px; background: var(--amberIndicator); border-radius: 50%; box-shadow: 0 0 4px var(--amberIndicator);\"></div>"
    },
    {
      "name": "signal-bar",
      "desc": "A horizontal signal strength bar with a glowing fill, like a channel amplitude indicator.",
      "html": "<div style=\"height: 4px; background: var(--border); border-radius: 0px; width: 100px;\"><div style=\"height: 100%; width: 65%; background: var(--primary); box-shadow: 0 0 4px var(--primary);\"></div></div>"
    },
    {
      "name": "status-cell",
      "desc": "A status indicator cell for operational states – ok, warn, err – with glow and blink effect simulated via style.",
      "html": "<span style=\"color: var(--primary); text-shadow: 0 0 4px var(--primary); font-family: var(--font-body); font-size: 12px; text-transform: uppercase;\">RUNNING</span>"
    }
  ],
  "doAvoid": [
    {
      "desc": "Avoid rounded corners on buttons – the original oscilloscope controls have sharp 0px corners.",
      "avoid": {
        "html": "<button style=\"background: #0D1B0D; color: #00FF41; border: 1px solid #00FF41; border-radius: 8px; padding: 8px;\">WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners on buttons – the original oscilloscope controls have sharp 0px corners.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use antialiased curves or smooth bezier lines – traces must appear rough and pixelated.",
      "avoid": {
        "html": "<svg><path d=\"M10,80 Q52.5,10 95,80\" stroke=\"#00FF41\" stroke-width=\"2\" fill=\"none\" /></svg>",
        "label": "Avoid"
      },
      "rule": "Never use antialiased curves or smooth bezier lines – traces must appear rough and pixelated.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not introduce colors outside the green/amber monochrome palette (e.g. red, blue, purple).",
      "avoid": {
        "html": "<span style=\"color: #FF0000; font-family: VT323; text-transform: uppercase;\">ERROR</span>",
        "label": "Avoid"
      },
      "rule": "Do not introduce colors outside the green/amber monochrome palette (e.g. red, blue, purple).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid modern UI icons such as hamburger menus or magnifying glasses; use text labels instead.",
      "avoid": {
        "html": "<button><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\"><path d=\"M3 6h18M3 12h18M3 18h18\"/></svg></button>",
        "label": "Avoid"
      },
      "rule": "Avoid modern UI icons such as hamburger menus or magnifying glasses; use text labels instead.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": [
    {
      "desc": "Avoid rounded corners on buttons – the original oscilloscope controls have sharp 0px corners.",
      "avoid": {
        "html": "<button style=\"background: #0D1B0D; color: #00FF41; border: 1px solid #00FF41; border-radius: 8px; padding: 8px;\">WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners on buttons – the original oscilloscope controls have sharp 0px corners.",
      "do": {
        "label": "Do",
        "html": "<button style=\"background: #0D1B0D; color: #00FF41; border: 1px solid #00FF41; border-radius: 0px; padding: 8px; text-transform: uppercase; font-family: VT323;\">RIGHT</button>"
      }
    },
    {
      "desc": "Never use antialiased curves or smooth bezier lines – traces must appear rough and pixelated.",
      "avoid": {
        "html": "<svg><path d=\"M10,80 Q52.5,10 95,80\" stroke=\"#00FF41\" stroke-width=\"2\" fill=\"none\" /></svg>",
        "label": "Avoid"
      },
      "rule": "Never use antialiased curves or smooth bezier lines – traces must appear rough and pixelated.",
      "do": {
        "label": "Do",
        "html": "<canvas style=\"width:100px;height:60px;background:#0A0E0A;\"></canvas>"
      }
    },
    {
      "desc": "Do not introduce colors outside the green/amber monochrome palette (e.g. red, blue, purple).",
      "avoid": {
        "html": "<span style=\"color: #FF0000; font-family: VT323; text-transform: uppercase;\">ERROR</span>",
        "label": "Avoid"
      },
      "rule": "Do not introduce colors outside the green/amber monochrome palette (e.g. red, blue, purple).",
      "do": {
        "label": "Do",
        "html": "<span style=\"color: #FFB000; font-family: VT323; text-transform: uppercase;\">ERROR</span>"
      }
    },
    {
      "desc": "Avoid modern UI icons such as hamburger menus or magnifying glasses; use text labels instead.",
      "avoid": {
        "html": "<button><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\"><path d=\"M3 6h18M3 12h18M3 18h18\"/></svg></button>",
        "label": "Avoid"
      },
      "rule": "Avoid modern UI icons such as hamburger menus or magnifying glasses; use text labels instead.",
      "do": {
        "label": "Do",
        "html": "<button style=\"background: transparent; color: #00FF41; border: 1px solid #00FF41; padding: 8px; font-family: VT323; text-transform: uppercase;\">MENU</button>"
      }
    }
  ],
  "effects": [],
  "motion": [
    {
      "name": "trace-sweep",
      "desc": "Animated waveform trace drawing from left to right with afterglow decay.",
      "css": "@keyframes waveDraw { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } } .waveform-trace { stroke-dasharray: 1000; animation: waveDraw 3s linear infinite; } @keyframes afterglowDecay { 0% { opacity: 0.6; } 100% { opacity: 0; } } .afterglow { animation: afterglowDecay 2s ease-out; }",
      "demoStyle": ";width:48px;height:48px;background:var(--primary);border-radius:var(--radius-default,0px);display:flex;align-items:center;justify-content:center;"
    }
  ],
  "colors": {
    "primary": "#00FF41",
    "secondary": "#CCFF00",
    "tertiary": "#FFB000",
    "surface": "#0A0E0A",
    "surface-container": "#0D1B0D",
    "on-surface": "#00FF41",
    "on-surface-variant": "#00CC00"
  },
  "typography": {
    "display": {
      "fontFamily": "VT323",
      "fontSize": "18px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "VT323",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "VT323",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "VT323",
      "fontSize": "12px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ANALOG CRT SIGNAL ANALYZER",
      "heroHeadline": "SCOPE MONITOR 465",
      "heroSub": "WAVEFORM CAPTURE & ANALYSIS WITH PHOSPHOR TRACE FIDELITY",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0D1B0D;color:#00FF41;border:1px solid #00FF41;padding:8px 16px;font-family:VT323;font-size:14px;text-transform:uppercase;cursor:pointer;\">INIT SWEEP</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#00CC00;border:1px solid #336633;padding:8px 16px;font-family:VT323;font-size:14px;text-transform:uppercase;cursor:pointer;\">CALIBRATE</button>",
      "navLinks": [
        "SCOPE",
        "SIGNAL",
        "TRIGGER",
        "MEMORY",
        "SCAN"
      ],
      "features": [
        {
          "title": "DUAL TRACE",
          "desc": "CAPTURE TWO CHANNELS SIMULTANEOUSLY WITH INDEPENDENT VOLTS/DIV SETTINGS",
          "icon": "⚡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ DUAL TRACE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">CAPTURE TWO CHANNELS SIMULTANEOUSLY WITH INDEPENDENT VOLTS/DIV SETTINGS</div></div>"
        },
        {
          "title": "PHOSPHOR PERSISTENCE",
          "desc": "ADJUSTABLE AFTERGLOW TAIL FOR GHOST TRACE ANALYSIS AND GLITCH CATCHING",
          "icon": "📟",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📟 PHOSPHOR PERSISTENCE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ADJUSTABLE AFTERGLOW TAIL FOR GHOST TRACE ANALYSIS AND GLITCH CATCHING</div></div>"
        },
        {
          "title": "GRATICULE OVERLAY",
          "desc": "8X8 GRID SNAPPED TO MONOSPACE TYPOGRAPHY WITH 30% OPACITY FOR PRECISE MEASUREMENT",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 GRATICULE OVERLAY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">8X8 GRID SNAPPED TO MONOSPACE TYPOGRAPHY WITH 30% OPACITY FOR PRECISE MEASUREMENT</div></div>"
        },
        {
          "title": "HARDWARE CONTROLS",
          "desc": "ROTARY KNOBS AND PUSH BUTTONS WITH TACTILE FEEDBACK AND STEP ROTATION",
          "icon": "🎛️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎛️ HARDWARE CONTROLS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ROTARY KNOBS AND PUSH BUTTONS WITH TACTILE FEEDBACK AND STEP ROTATION</div></div>"
        }
      ],
      "ctaStripHeadline": "MONITOR IN REAL-TIME WITH CRT FIDELITY",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0D1B0D;color:#00FF41;border:1px solid #00FF41;padding:8px 16px;font-family:VT323;font-size:14px;text-transform:uppercase;cursor:pointer;\">START ACQUISITION</button>",
      "sidebarBrand": "TEKTRONIX 465",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "SCOPE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SIGNAL",
          "active": false
        },
        {
          "icon": "◉",
          "label": "MEMORY",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CONFIG",
          "active": false
        }
      ],
      "dashboardTitle": "WAVEFORM DASHBOARD",
      "metrics": [
        {
          "label": "VOLTS/DIV CH1",
          "value": "0.5 V",
          "delta": "+0.1 V",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TIME/DIV",
          "value": "1 MS",
          "delta": "0 MS",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "TRIGGER LEVEL",
          "value": "1.2 V",
          "delta": "-0.3 V",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "SWEEP COUNT",
          "value": "4.7 KHZ",
          "delta": "+0.2 KHZ",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "SIGNAL TRACE - CH1",
      "panelATitle": "INPUT CALIBRATION",
      "panelARows": [
        {
          "label": "PROBE ATTEN",
          "value": "10X",
          "pct": 10
        },
        {
          "label": "COUPLING",
          "value": "DC",
          "pct": 0
        },
        {
          "label": "INVERT",
          "value": "OFF",
          "pct": 0
        },
        {
          "label": "BW LIMIT",
          "value": "20 MHZ",
          "pct": 20
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TRIGGER CONTROL",
      "panelBCells": [
        {
          "label": "TRIG SOURCE",
          "value": "CH1",
          "state": "ok"
        },
        {
          "label": "TRIG COUPLING",
          "value": "DC",
          "state": "warn"
        },
        {
          "label": "TRIG SLOPE",
          "value": "RISE",
          "state": "err"
        },
        {
          "label": "TRIG MODE",
          "value": "NORM",
          "state": "ok"
        },
        {
          "label": "HOLDOFF",
          "value": "100 NS",
          "state": "warn"
        },
        {
          "label": "TRIG LEVEL",
          "value": "1.20 V",
          "state": "err"
        },
        {
          "label": "TRIG VIEW",
          "value": "OFF",
          "state": "ok"
        },
        {
          "label": "TRIG OUT",
          "value": "ON",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0 MS",
        "2 MS",
        "4 MS",
        "6 MS",
        "8 MS",
        "10 MS"
      ],
      "series": [
        {
          "data": [
            0,
            2.4,
            3.1,
            1.8,
            -1.2,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "CH1",
          "axis": "left",
          "color": "#00FF41"
        },
        {
          "data": [
            0,
            -0.8,
            1.5,
            2.9,
            0.7,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "CH2",
          "axis": "right-1",
          "color": "#CCFF00"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"position:relative;width:100%;height:100%;min-height:400px;background:var(--bg);overflow:hidden;\"><div style=\"position:absolute;inset:0;background-image:linear-gradient(0deg,transparent 0px,transparent 2px,rgba(0,255,65,0.08) 2px,rgba(0,255,65,0.08) 3px);background-size:100% 3px;\"></div><div style=\"position:absolute;inset:0;\"><svg width=\"100%\" height=\"100%\" viewBox=\"0 0 800 600\" preserveAspectRatio=\"xMidYMid meet\" style=\"opacity:0.3;\"><line x1=\"0\" y1=\"0\" x2=\"800\" y2=\"0\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"75\" x2=\"800\" y2=\"75\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"150\" x2=\"800\" y2=\"150\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"225\" x2=\"800\" y2=\"225\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"300\" x2=\"800\" y2=\"300\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"375\" x2=\"800\" y2=\"375\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"450\" x2=\"800\" y2=\"450\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"525\" x2=\"800\" y2=\"525\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"600\" x2=\"800\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"200\" y1=\"0\" x2=\"200\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"400\" y1=\"0\" x2=\"400\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"500\" y1=\"0\" x2=\"500\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"600\" y1=\"0\" x2=\"600\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"700\" y1=\"0\" x2=\"700\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/><line x1=\"800\" y1=\"0\" x2=\"800\" y2=\"600\" stroke=\"var(--border)\" stroke-width=\"1\"/></svg></div><div style=\"position:absolute;bottom:32px;left:32px;font-family:var(--font-display);font-size:36px;color:var(--primary);text-shadow:0 0 12px var(--primary),0 0 24px var(--primary);text-transform:uppercase;\">SCOPE MONITOR 465</div><div style=\"position:absolute;bottom:8px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--tertiary);box-shadow:0 0 6px var(--tertiary);\"></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;padding:16px;'; el.innerHTML = '<div style=\"border:1px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;color:var(--primary);text-transform:uppercase;\">DUAL TRACE</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">CAPTURE TWO CHANNELS SIMULTANEOUSLY</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;color:var(--primary);text-transform:uppercase;\">PHOSPHOR PERSISTENCE</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">ADJUSTABLE AFTERGLOW FOR GLITCH CATCHING</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;color:var(--primary);text-transform:uppercase;\">GRATICULE OVERLAY</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">8X8 GRID WITH 30% OPACITY</div></div><div style=\"border:1px solid var(--border);background:var(--surface);padding:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;color:var(--primary);text-transform:uppercase;\">HARDWARE CONTROLS</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">ROTARY KNOBS AND PUSH BUTTONS</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText = 'background:var(--surface);border:1px solid var(--primary);padding:16px;font-family:var(--font-display);text-transform:uppercase;'; el.innerHTML = '<div style=\"font-size:14px;color:var(--primary);margin-bottom:12px;\">TRIGGER CONTROL</div><div style=\"display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;\"><div><span style=\"color:var(--on-bg-muted);font-size:10px;\">SOURCE</span><div style=\"color:var(--primary);font-size:12px;\">CH1</div></div><div><span style=\"color:var(--on-bg-muted);font-size:10px;\">COUPLING</span><div style=\"color:var(--secondary-col);font-size:12px;\">DC</div></div><div><span style=\"color:var(--on-bg-muted);font-size:10px;\">SLOPE</span><div style=\"color:var(--error);font-size:12px;\">RISE</div></div><div><span style=\"color:var(--on-bg-muted);font-size:10px;\">MODE</span><div style=\"color:var(--primary);font-size:12px;\">NORM</div></div><div><span style=\"color:var(--on-bg-muted);font-size:10px;\">HOLDOFF</span><div style=\"color:var(--secondary-col);font-size:12px;\">100NS</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText = 'background:radial-gradient(ellipse at 50% 50%, #0D1B0D 0%, #0A0E0A 100%);'; }",
    "ctaBackground": "function(el) { el.style.cssText = 'background:var(--surface);'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--primary);box-shadow:0 0 6px var(--primary);margin:16px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText = 'background:var(--bg);'; }",
    "surfaceOverlay": "function(el) { var scanline = document.createElement('div'); scanline.style.cssText = 'position:absolute;inset:0;pointer-events:none;background-image:repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 3px);z-index:2;'; el.appendChild(scanline); var vignette = document.createElement('div'); vignette.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,10,0,0.8) 100%);mix-blend-mode:multiply;z-index:3;'; el.appendChild(vignette); }"
  },
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — Display — sample</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Headline — sample</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Title — sample</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Body — sample</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Label — sample</div></div>\"; }"
  },
  "ambientCanvas": "function() { var d = document.createElement('div'); var s = document.createElement('style'); s.textContent = '@keyframes ap{0%{opacity:0.2}50%{opacity:0.5}100%{opacity:0.2}}'; d.appendChild(s); d.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 70%);animation:ap 2s ease-in-out infinite;'; return d; }",
  "shadcnTokens": {
    "--color-background": "#0A0E0A",
    "--color-popover": "#0A0E0A",
    "--color-foreground": "#00FF41",
    "--color-card-foreground": "#00FF41",
    "--color-popover-foreground": "#00FF41",
    "--color-card": "#0D1B0D",
    "--color-muted": "#0D1B0D",
    "--color-muted-foreground": "#00CC00",
    "--color-primary": "#00FF41",
    "--color-ring": "#00FF41",
    "--color-primary-foreground": "#0A0E0A",
    "--color-secondary": "#CCFF00",
    "--color-accent": "#CCFF00",
    "--color-secondary-foreground": "#0A0E0A",
    "--color-accent-foreground": "#0A0E0A",
    "--color-border": "#336633",
    "--color-input": "#336633",
    "--color-destructive": "#FFB000"
  },
  "shadcnTokensClassic": {
    "--background": "#0A0E0A",
    "--popover": "#0A0E0A",
    "--foreground": "#00FF41",
    "--card-foreground": "#00FF41",
    "--popover-foreground": "#00FF41",
    "--card": "#0D1B0D",
    "--muted": "#0D1B0D",
    "--muted-foreground": "#00CC00",
    "--primary": "#00FF41",
    "--ring": "#00FF41",
    "--primary-foreground": "#0A0E0A",
    "--secondary": "#CCFF00",
    "--accent": "#CCFF00",
    "--secondary-foreground": "#0A0E0A",
    "--accent-foreground": "#0A0E0A",
    "--border": "#336633",
    "--input": "#336633",
    "--destructive": "#FFB000"
  }
});
