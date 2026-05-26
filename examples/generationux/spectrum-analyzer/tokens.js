registerSystem({
  "meta": {
    "name": "Spectrum Analyzer",
    "tagline": "Retro-futuristic CRT spectrum analyzer with neon-green bars and monospace readouts",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=VT323:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Spectrum Analyzer",
    "colors": {
      "primary": "#39FF14",
      "secondary": "#FFB000",
      "accent": "#FF0040",
      "background": "#000000",
      "surface-container-low": "#0A0A0A",
      "overload-led": "#FF0040",
      "ok": "#39FF14",
      "warn": "#FFB000",
      "err": "#FF0040",
      "delta-up": "#39FF14",
      "delta-down": "#FF0040",
      "delta-flat": "#2D2D2D"
    },
    "typography": {
      "display": {
        "fontFamily": "VT323",
        "fontSize": "36px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase",
        "textDecoration": "none"
      },
      "headline": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "24px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "JetBrains Mono",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "lowercase",
        "textDecoration": "none"
      },
      "label": {
        "fontFamily": "VT323",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "-0.025em",
        "textTransform": "lowercase",
        "textDecoration": "none"
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
      "component-internal": "0px",
      "section-internal": "4px",
      "page-edge": "16px",
      "gap-component": "0px",
      "gap-section": "8px",
      "height-sm": "16px",
      "height-md": "24px",
      "height-lg": "32px",
      "icon": "16px"
    },
    "components": {
      "frequency-bar": {
        "height": "200px",
        "width": "20px",
        "rounded": "{rounded.default}"
      },
      "peak-hold-dot": {
        "width": "12px",
        "height": "12px",
        "backgroundColor": "{colors.secondary}",
        "rounded": "{rounded.default}"
      },
      "power-led": {
        "width": "16px",
        "height": "16px",
        "backgroundColor": "{colors.ok}",
        "rounded": "{rounded.default}"
      },
      "overload-indicator": {
        "width": "16px",
        "height": "16px",
        "backgroundColor": "{colors.overload-led}",
        "rounded": "{rounded.default}"
      }
    },
    "version": "alpha",
    "description": "A retro-futuristic design system inspired by vintage CRT spectrum analyzers, using neon-green bars on pure black with monospace typography and CRT artifacts.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `spectrum-analyzer` is ambiguous. It does not correspond to any single known visual identity, product brand, software application, or artefact in our reference corpus without additional context. It could refer to any number of electronic test instruments (e.g., Hewlett‑Packard, Tektronix, Rohde & Schwarz models), a software spectrum analyzer, or a generic product category. No definitive i",
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
          "count": 1
        },
        {
          "host": "www.keysight.com",
          "count": 1
        },
        {
          "host": "www.tek.com",
          "count": 1
        },
        {
          "host": "www.rohde-schwarz.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Spectrum_analyzer",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "low"
        },
        {
          "url": "https://www.keysight.com/us/en/home.html",
          "host": "www.keysight.com",
          "institution": "Keysight Technologies (successor to HP/Agilent electronic measurement)",
          "confidence_original": "low"
        },
        {
          "url": "https://www.tek.com/en",
          "host": "www.tek.com",
          "institution": "Tektronix",
          "confidence_original": "low"
        },
        {
          "url": "https://www.rohde-schwarz.com/uk/home_48230.html",
          "host": "www.rohde-schwarz.com",
          "institution": "Rohde & Schwarz",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "sparse_imagery",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": [
        "1. **Subject identification** – The slug does not resolve to a unique visual identity. Resolution requires additional context (manufacturer, model, era, or software product)."
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#000000",
    "--on-bg": "#FFFFFF",
    "--primary": "#39FF14",
    "--on-primary": "#000000",
    "--secondary-col": "#FFB000",
    "--on-secondary": "#000000",
    "--surface": "#0A0A0A",
    "--on-bg-muted": "#808080",
    "--border": "#1A1A1A",
    "--error": "#FF0040",
    "--font-display": "VT323",
    "--font-body": "JetBrains Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#39FF14",
    "warn": "#FFB000",
    "err": "#FF0040",
    "delta-up": "#39FF14",
    "delta-down": "#FF0040",
    "delta-flat": "#2D2D2D",
    "deltaUp": "#39FF14",
    "deltaDown": "#FF0040",
    "deltaFlat": "#2D2D2D",
    "live": "#39FF14",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#808080",
    "chartFont": "JetBrains Mono"
  },
  "chartStyle": {
    "type": "bar",
    "orientation": "vertical",
    "barShape": "rectangle",
    "barCap": "sharp",
    "barGradient": "linear-gradient(to top, transparent, var(--primary))",
    "peakHold": true,
    "gridLines": true,
    "gridColor": "#1A1A1A",
    "gridOpacity": 0.2,
    "bezels": true,
    "bezelWidth": 4,
    "bezelColor": "#1A1A1A",
    "labelColor": "#808080",
    "fontFamily": "JetBrains Mono"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "crt-screen",
    "params": {
      "scanlineOpacity": 0.5,
      "scanlineSize": "1px",
      "bloomAmount": 0.3
    }
  },
  "interactionModel": {
    "hover": {
      "change": "glow",
      "duration": "100ms",
      "easing": "ease-out"
    },
    "focus": {
      "change": "glow-ring",
      "duration": "100ms",
      "easing": "ease-out"
    },
    "active": {
      "change": "opacity-dim",
      "duration": "100ms",
      "easing": "ease-out"
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame .crt-button { transition: all 100ms ease-out; } .ds-layout-frame button:hover, .ds-layout-frame .crt-button:hover { box-shadow: 0 0 6px var(--primary); } .ds-layout-frame button:focus-visible, .ds-layout-frame .crt-button:focus-visible { box-shadow: 0 0 8px 2px var(--primary); } .ds-layout-frame button:active, .ds-layout-frame .crt-button:active { opacity: 0.7; }",
  "spacing": {
    "componentInternal": "0px",
    "sectionInternal": "4px",
    "pageEdge": "16px",
    "gapComponent": "0px",
    "gapSection": "8px",
    "heightSm": "16px",
    "heightMd": "24px",
    "heightLg": "32px",
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
    "base": 0,
    "overlay": 40,
    "top": 60
  },
  "dashboardStyle": {
    "layout": "grid of frequency bars, each with label below, bezel surrounding, peak hold dots above bars",
    "density": "high - bars touch edge to edge, data area fills ≥85% canvas",
    "panelTreatment": "flat, no shadows, dark background (#000000), grid lines (#1A1A1A at 0.2 opacity)",
    "dataVizStyle": "vertical neon green bars with gradient to transparent, amber peak hold dots, scanline overlay",
    "signatureElement": "CRT scanlines and phosphor glow on bars"
  },
  "landingStyle": {
    "heroApproach": "centered single frequency bar animation with peak hold, title 'SPECTRUM ANALYZER' above in VT323",
    "scrollBehavior": "no scroll - single screen immersive experience",
    "ctaStyle": "no call-to-action button; ambient data display",
    "signatureMoment": "bars breathe and peak dots decay slowly over 1-2 seconds"
  },
  "globalFilter": "<svg><defs><filter id=\"crt-bloom\"><feGaussianBlur stdDeviation=\"3\" result=\"blur\"/><feMerge><feMergeNode in=\"blur\"/><feMergeNode in=\"SourceGraphic\"/></feMerge></filter><filter id=\"crt-noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\" result=\"noise\"/><feColorMatrix type=\"saturate\" values=\"0\" in=\"noise\" result=\"grayNoise\"/><feBlend mode=\"multiply\" in=\"SourceGraphic\" in2=\"grayNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; background: repeating-linear-gradient(transparent 0 1px, rgba(0,0,0,0.5) 1px 2px); mix-blend-mode: multiply; opacity: 0.5; z-index: 60; } .ds-layout-frame::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; filter: blur(8px); mix-blend-mode: screen; opacity: 0.3; z-index: 40; }",
  "buttons": [
    {
      "name": "Primary (Green)",
      "desc": "Neon green outline button with CRT glow on hover. Sharp corners, monospace label.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: 1px solid var(--primary); color: var(--primary); font-family: var(--font-display); font-size: 14px; text-transform: uppercase; padding: 8px 16px; letter-spacing: 0.05em; cursor: pointer; transition: box-shadow 0.1s ease-out; border-radius: var(--radius-default);\">SPECTRUM RUN</button>",
      "label": "Primary (Green)",
      "note": "Neon green outline button with CRT glow on hover. Sharp corners, monospace label."
    },
    {
      "name": "Secondary (Amber)",
      "desc": "Amber outline button with warm glow. Used for warnings or secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: 1px solid var(--secondary-col); color: var(--secondary-col); font-family: var(--font-display); font-size: 14px; text-transform: uppercase; padding: 8px 16px; letter-spacing: 0.05em; cursor: pointer; transition: box-shadow 0.1s ease-out; border-radius: var(--radius-default);\">HOLD PEAK</button>",
      "label": "Secondary (Amber)",
      "note": "Amber outline button with warm glow. Used for warnings or secondary actions."
    },
    {
      "name": "Ghost (Muted)",
      "desc": "Transparent button with muted text. No border until hover.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: none; color: var(--on-bg-muted); font-family: var(--font-display); font-size: 12px; text-transform: uppercase; padding: 4px 8px; letter-spacing: 0.05em; cursor: pointer; transition: color 0.1s ease-out; border-radius: var(--radius-default);\">RESET</button>",
      "label": "Ghost (Muted)",
      "note": "Transparent button with muted text. No border until hover."
    }
  ],
  "cards": [
    {
      "name": "Frequency Bar Card",
      "desc": "A single frequency bar with peak hold dot, label and value. Dark surface, no padding, bar fills width.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); padding: 0; border-radius: var(--radius-card); display: flex; flex-direction: column; align-items: center; width: 80px;\"><div style=\"position: relative; width: 100%; height: 200px; background: var(--bg);\"><div style=\"position: absolute; bottom: 0; width: 100%; height: 80%; background: linear-gradient(to top, transparent, var(--primary));\"></div><div style=\"position: absolute; bottom: 80%; left: 50%; transform: translateX(-50%); width: 12px; height: 12px; background: var(--secondary-col); border-radius: 0;\"></div></div><span style=\"font-family: var(--font-body); font-size: 10px; color: var(--on-bg); text-transform: uppercase; margin-top: 4px;\">1kHz</span></div>",
      "label": "Frequency Bar Card",
      "note": "A single frequency bar with peak hold dot, label and value. Dark surface, no padding, bar fills width."
    },
    {
      "name": "Control Panel Card",
      "desc": "Dashboard-style card with power LED, overload indicator, and label. Tight spacing, no rounding.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); padding: 8px; border-radius: var(--radius-card); display: grid; grid-template-columns: auto 1fr; gap: 8px; align-items: center; width: 200px;\"><div style=\"width: 16px; height: 16px; background: var(--primary); border: 1px solid var(--border);\"></div><span style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg); text-transform: uppercase;\">POWER</span><div style=\"width: 16px; height: 16px; background: var(--error); border: 1px solid var(--border);\"></div><span style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg); text-transform: uppercase;\">OVERLOAD</span></div>",
      "label": "Control Panel Card",
      "note": "Dashboard-style card with power LED, overload indicator, and label. Tight spacing, no rounding."
    }
  ],
  "forms": [
    {
      "name": "Text Input (Frequency)",
      "desc": "Monospace text input with dark background and green border. No rounding.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; width: 200px;\"><label style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase;\">freq (hz)</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background: var(--bg); border: 1px solid var(--primary); color: var(--primary); font-family: var(--font-body); font-size: 14px; padding: 4px 8px; border-radius: var(--radius-default); caret-color: var(--primary);\" value=\"440\" /></div>",
      "label": "Text Input (Frequency)",
      "stateLabel": "Monospace text input with dark background and green border. No rounding."
    },
    {
      "name": "Select (Bandwidth)",
      "desc": "Monospace select dropdown with dark surface and green arrow. Sharp corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; width: 200px;\"><label style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase;\">bandwidth</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 1px solid var(--border); color: var(--on-bg); font-family: var(--font-body); font-size: 14px; padding: 4px 8px; border-radius: var(--radius-default);\"><option>1KHZ</option><option>10KHZ</option><option>100KHZ</option></select></div>",
      "label": "Select (Bandwidth)",
      "stateLabel": "Monospace select dropdown with dark surface and green arrow. Sharp corners."
    },
    {
      "name": "LED Toggle (Power)",
      "desc": "Checkbox styled as an LED that turns green when checked. No label, just LED.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; align-items: center;\"><label style=\"font-family: var(--font-display); font-size: 12px; color: var(--on-bg-muted); text-transform: uppercase;\">power</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; background: var(--bg); border: 1px solid var(--border); border-radius: 0; appearance: none; cursor: pointer;\" checked /></div>",
      "label": "LED Toggle (Power)",
      "stateLabel": "Checkbox styled as an LED that turns green when checked. No label, just LED."
    }
  ],
  "extraComponents": [
    {
      "name": "Peak Hold Dot",
      "desc": "A small amber dot that lingers at the peak of a frequency bar. Decays slowly.",
      "html": "<div style=\"width: 12px; height: 12px; background: var(--secondary-col); border: 1px solid var(--border);\"></div>"
    },
    {
      "name": "Power LED",
      "desc": "A small green square indicating power status. Light up when active.",
      "html": "<div style=\"width: 16px; height: 16px; background: var(--primary); border: 1px solid var(--border);\"></div>"
    },
    {
      "name": "Overload Indicator",
      "desc": "A red indicator that lights up on signal overload. Same size as power LED.",
      "html": "<div style=\"width: 16px; height: 16px; background: var(--error); border: 1px solid var(--border);\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — SPECTRUM ANALYZER</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SIGNAL AMPLITUDE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — FREQUENCY BANDS</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — current reading: 1.3 kHz</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — peak hold</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners; all components must have zero border-radius.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px;\">ROUNDED</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners; all components must have zero border-radius.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use non-monospace fonts or cursive. All text must be monospace.",
      "avoid": {
        "html": "<span style=\"font-family: Georgia;\">Frequency</span>",
        "label": "Avoid"
      },
      "rule": "Do not use non-monospace fonts or cursive. All text must be monospace.",
      "do": {
        "label": "Do",
        "html": "<span style=\"font-family: var(--font-body); color: var(--on-bg); text-transform: uppercase; font-size: 14px;\">MONOSPACE READOUT</span>"
      }
    },
    {
      "desc": "Do not use pastel colors or gradients that are not green/amber/red on black.",
      "avoid": {
        "html": "<div style=\"background: #FFB6C1; color: #0000FF;\">Pastel</div>",
        "label": "Avoid"
      },
      "rule": "Do not use pastel colors or gradients that are not green/amber/red on black.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not add drop shadows or 3D depth. Keep flat depth plane.",
      "avoid": {
        "html": "<div style=\"box-shadow: 2px 2px 5px rgba(0,0,0,0.5);\">Shadow</div>",
        "label": "Avoid"
      },
      "rule": "Do not add drop shadows or 3D depth. Keep flat depth plane.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "Summary of forbidden moves",
    "avoid": {
      "html": "<div style=\"border-radius: 8px; font-family: 'Courier Prime'; background: #FFB6C1; color: #0000FF; box-shadow: 2px 2px 5px rgba(0,0,0,0.5);\">BAD EXAMPLE</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#39FF14",
    "secondary": "#FFB000",
    "accent": "#FF0040",
    "background": "#000000",
    "surface": "#0A0A0A",
    "border": "#1A1A1A",
    "onBg": "#FFFFFF",
    "onBgMuted": "#808080",
    "error": "#FF0040"
  },
  "typography": {
    "display": "VT323",
    "headline": "VT323",
    "title": "JetBrains Mono",
    "body": "JetBrains Mono",
    "label": "VT323"
  },
  "layouts": {
    "copy": {
      "heroKicker": "CRT SPECTRUM ANALYZER",
      "heroHeadline": "REAL-TIME SIGNAL VISUALIZATION",
      "heroSub": "MONITOR FREQUENCY AMPLITUDE WITH PHOSPHOR PEAK HOLD AND SCANLINE OVERLAY",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INIT SWEEP</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW GRID</button>",
      "navLinks": [
        "SWEEP",
        "BANDS",
        "PEAK HOLD",
        "NOISE FLOOR",
        "CARRIER"
      ],
      "features": [
        {
          "title": "NEON BARS",
          "desc": "GREEN BARS ON BLACK WITH BLOOM GLOW AND CRT SCANLINES",
          "icon": "📊",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📊 NEON BARS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">GREEN BARS ON BLACK WITH BLOOM GLOW AND CRT SCANLINES</div></div>"
        },
        {
          "title": "PEAK HOLD",
          "desc": "AMBER DOTS LINGER AT LOUDEST MOMENT, DECAY OVER 2 SECONDS",
          "icon": "🔶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔶 PEAK HOLD</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">AMBER DOTS LINGER AT LOUDEST MOMENT, DECAY OVER 2 SECONDS</div></div>"
        },
        {
          "title": "FLAT BEZEL",
          "desc": "ZERO ROUNDING, SHARP CORNERS, 4PX THICK BORDER",
          "icon": "⏹️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⏹️ FLAT BEZEL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ZERO ROUNDING, SHARP CORNERS, 4PX THICK BORDER</div></div>"
        },
        {
          "title": "MONOSPACE READOUT",
          "desc": "VT323 AND SHARE TECH MONO FOR ALL LABELS AND VALUES",
          "icon": "🔤",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔤 MONOSPACE READOUT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">VT323 AND SHARE TECH MONO FOR ALL LABELS AND VALUES</div></div>"
        }
      ],
      "ctaStripHeadline": "DEPLOY ON YOUR MONITOR",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START SWEEP</button>",
      "sidebarBrand": "SPECTRUM CRT",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SIGNAL",
          "active": false
        },
        {
          "icon": "◉",
          "label": "DRIFT",
          "active": false
        },
        {
          "icon": "◉",
          "label": "NODES",
          "active": false
        }
      ],
      "dashboardTitle": "LIVE SPECTRUM — BAND 16",
      "metrics": [
        {
          "label": "FREQ SWEEP",
          "value": "20 Hz – 20 kHz",
          "delta": "+0.5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PEAK AMPLITUDE",
          "value": "-3.2 dBm",
          "delta": "+1.2 dB",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "NOISE FLOOR",
          "value": "-85 dBm",
          "delta": "-0.8 dB",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "CARRIER LOCK",
          "value": "LOCKED",
          "delta": "OK",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "AMPLITUDE vs FREQUENCY",
      "panelATitle": "PEAK HOLD LOG",
      "panelARows": [
        {
          "label": "BAND 01",
          "value": "+2.1 dB",
          "pct": 2.1
        },
        {
          "label": "BAND 04",
          "value": "+4.7 dB",
          "pct": 4.7
        },
        {
          "label": "BAND 07",
          "value": "+0.3 dB",
          "pct": 0.3
        },
        {
          "label": "BAND 12",
          "value": "+6.8 dB",
          "pct": 6.8
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "CARRIER METRICS",
      "panelBCells": [
        {
          "label": "FREQUENCY",
          "value": "440 Hz",
          "state": "ok"
        },
        {
          "label": "AMPLITUDE",
          "value": "-12 dBm",
          "state": "warn"
        },
        {
          "label": "SIGNAL-TO-NOISE",
          "value": "68 dB",
          "state": "err"
        },
        {
          "label": "MODULATION INDEX",
          "value": "0.85",
          "state": "ok"
        },
        {
          "label": "PEAK HOLD",
          "value": "-9.1 dBm",
          "state": "warn"
        },
        {
          "label": "SWEEP RATE",
          "value": "50 ms/div",
          "state": "err"
        },
        {
          "label": "BANDWIDTH",
          "value": "200 Hz",
          "state": "ok"
        },
        {
          "label": "OVERLOAD LED",
          "value": "SAFE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "20 Hz",
        "40 Hz",
        "80 Hz",
        "160 Hz",
        "320 Hz",
        "640 Hz"
      ],
      "series": [
        {
          "data": [
            12,
            18,
            24,
            30,
            22,
            15,
            15,
            15,
            15,
            15,
            15,
            15
          ],
          "label": "AMPLITUDE",
          "axis": "left",
          "color": "#39FF14"
        },
        {
          "data": [
            14,
            20,
            27,
            32,
            25,
            17,
            17,
            17,
            17,
            17,
            17,
            17
          ],
          "label": "PEAK HOLD",
          "axis": "right-1",
          "color": "#FFB000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:var(--bg);'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:36px;color:var(--primary);text-transform:uppercase;letter-spacing:0.1em;text-align:center;border:2px solid var(--primary);padding:16px 32px;\">SPECTRUM ANALYZER</div><div style=\"display:flex;gap:4px;margin-top:24px;\"><div style=\"width:20px;height:120px;background:linear-gradient(to top, transparent, var(--primary));position:relative;\"><div style=\"position:absolute;top:0;left:50%;transform:translateX(-50%);width:12px;height:12px;background:var(--secondary-col);\"></div></div><div style=\"width:20px;height:160px;background:linear-gradient(to top, transparent, var(--primary));position:relative;\"><div style=\"position:absolute;top:0;left:50%;transform:translateX(-50%);width:12px;height:12px;background:var(--secondary-col);\"></div></div><div style=\"width:20px;height:100px;background:linear-gradient(to top, transparent, var(--primary));position:relative;\"><div style=\"position:absolute;top:0;left:50%;transform:translateX(-50%);width:12px;height:12px;background:var(--secondary-col);\"></div></div></div><div style=\"font-family:var(--font-body);color:var(--on-bg-muted);font-size:12px;margin-top:16px;text-transform:uppercase;\">MONITOR FREQUENCY AMPLITUDE</div>'; }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;gap:0;align-items:flex-end;height:100%;padding:0;background:var(--bg);'; for(var i=0;i<16;i++){var bar=document.createElement('div');bar.style.cssText='width:20px;height:'+(Math.random()*180+20)+'px;background:linear-gradient(to top, transparent, var(--primary));position:relative;'; var peak=document.createElement('div');peak.style.cssText='position:absolute;top:0;left:50%;transform:translateX(-50%);width:12px;height:12px;background:var(--secondary-col);'; bar.appendChild(peak); el.appendChild(bar);} }",
    "panelCRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:0;padding:8px;background:var(--surface);border:1px solid var(--border);'; var items=[['POWER','var(--primary)','ON'],['OVERLOAD','var(--error)','SAFE'],['PEAK HOLD','var(--secondary-col)','-3.2 dB'],['SWEEP','var(--primary)','50 ms']]; for(var i=0;i<items.length;i++){ var div=document.createElement('div'); div.style.cssText='display:flex;align-items:center;gap:4px;padding:4px;'; var led=document.createElement('div'); led.style.cssText='width:16px;height:16px;background:'+items[i][1]+';border:1px solid var(--border);'; var label=document.createElement('span'); label.style.cssText='font-family:var(--font-body);font-size:12px;color:var(--on-bg);text-transform:uppercase;'; label.textContent=items[i][0]+' '+items[i][2]; div.appendChild(led); div.appendChild(label); el.appendChild(div);} }",
    "heroBackground": "function(el) { el.style.background = '#000000'; }",
    "ctaBackground": "function(el) { el.style.background = '#000000'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:var(--primary);box-shadow:0 0 8px var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#000000'; }",
    "surfaceOverlay": "function(el) { var scan=document.createElement('div'); scan.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:2;background:repeating-linear-gradient(transparent 0 1px, rgba(0,0,0,0.5) 1px 2px);mix-blend-mode:multiply;opacity:0.5;'; el.appendChild(scan); var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:3;background:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%20opacity%3D%220.02%22%2F%3E%3C%2Fsvg%3E\");mix-blend-mode:multiply;opacity:0.01;'; el.appendChild(grain); }"
  },
  "shadcnTokens": {
    "--color-background": "#000000",
    "--color-popover": "#000000",
    "--color-foreground": "#FFFFFF",
    "--color-card-foreground": "#FFFFFF",
    "--color-popover-foreground": "#FFFFFF",
    "--color-card": "#0A0A0A",
    "--color-muted": "#0A0A0A",
    "--color-muted-foreground": "#808080",
    "--color-primary": "#39FF14",
    "--color-ring": "#39FF14",
    "--color-primary-foreground": "#000000",
    "--color-secondary": "#FFB000",
    "--color-accent": "#FFB000",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#1A1A1A",
    "--color-input": "#1A1A1A",
    "--color-destructive": "#FF0040"
  },
  "shadcnTokensClassic": {
    "--background": "#000000",
    "--popover": "#000000",
    "--foreground": "#FFFFFF",
    "--card-foreground": "#FFFFFF",
    "--popover-foreground": "#FFFFFF",
    "--card": "#0A0A0A",
    "--muted": "#0A0A0A",
    "--muted-foreground": "#808080",
    "--primary": "#39FF14",
    "--ring": "#39FF14",
    "--primary-foreground": "#000000",
    "--secondary": "#FFB000",
    "--accent": "#FFB000",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#1A1A1A",
    "--input": "#1A1A1A",
    "--destructive": "#FF0040"
  }
});
