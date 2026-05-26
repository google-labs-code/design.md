registerSystem({
  "meta": {
    "name": "Admiralty Chart 20C UKHO Standard",
    "tagline": "A vintage nautical chart aesthetic with muted earth and sea tones, fine hachured coastlines, and simulated printed texture.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Tinos:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Admiralty Chart 20C UKHO Standard",
    "colors": {
      "surface": "#F4ECD8",
      "on-surface": "#3A3A3A",
      "primary": "#8C2F4F",
      "on-primary": "#FFFFFF",
      "secondary": "#1F6388",
      "on-secondary": "#FFFFFF",
      "outline": "#3A3A3A",
      "outline-variant": "#6B6B6B",
      "surface-container": "#E8E0D0",
      "error": "#8C2F4F"
    },
    "typography": {
      "display": {
        "fontFamily": "Tinos",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Tinos",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Tinos",
        "fontSize": "18px",
        "fontWeight": 500,
        "lineHeight": 1.625,
        "letterSpacing": "-0.025em",
        "textTransform": "normal-case"
      },
      "body": {
        "fontFamily": "Tinos",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 2,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Inter, Arimo",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "12px",
      "gap-component": "4px",
      "gap-section": "8px",
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "40px",
      "icon": "16px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E8E0D0",
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
      },
      "light-marker": {
        "backgroundColor": "{colors.primary}",
        "size": "12px"
      },
      "compass-rose": {
        "backgroundColor": "{colors.surface}",
        "size": "56px"
      }
    },
    "version": "alpha",
    "description": "A vintage nautical chart aesthetic that recreates the authoritative, aged-paper presence of a mid-20th-century UK Hydrographic Office chart, with muted earth and sea tones, fine hachured coastlines, and simulated printed texture.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.admiralty.co.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.admiralty.co.uk/about-us",
          "host": "www.admiralty.co.uk",
          "institution": "UK Hydrographic Office",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "one_usable_url_only",
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F4ECD8",
    "--on-bg": "#3A3A3A",
    "--primary": "#8C2F4F",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#1F6388",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F4ECD8",
    "--on-bg-muted": "#6B6B6B",
    "--border": "#3A3A3A",
    "--error": "#8C2F4F",
    "--font-display": "Tinos",
    "--font-body": "Tinos",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "--bg": "#F4ECD8",
    "--on-bg": "#3A3A3A",
    "--primary": "#8C2F4F",
    "--on-primary": "#FFFFFF",
    "--secondary": "#1F6388",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F4ECD8",
    "--on-bg-muted": "#6B6B6B",
    "--border": "#3A3A3A",
    "--error": "#8C2F4F",
    "--font-display": "Tinos",
    "--font-body": "Tinos",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#8C2F4F",
    "deltaUp": "#22C55E",
    "deltaDown": "#8C2F4F",
    "deltaFlat": "#6B6B6B",
    "live": "#8C2F4F",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#6B6B6B",
    "chartFont": "Tinos"
  },
  "elevation": {
    "type": "flat",
    "levels": {}
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "substrate": "aged off-white paper stock",
      "grainIntensity": 0.04,
      "inkSpread": "0.3px text-shadow",
      "foxing": true,
      "halftoneLandTint": true
    }
  },
  "interactionModel": {
    "hover": {
      "opacity": 0.7,
      "transition": "none"
    },
    "focus": {
      "outline": "2px solid #8C2F4F",
      "outline-offset": "1px"
    },
    "active": {
      "opacity": 1
    }
  },
  "interactionStyles": ".ds-layout-frame a:hover, .ds-layout-frame button:hover, .ds-layout-frame .interactive:hover { opacity: 0.7; transition: opacity 0s; }\n.ds-layout-frame :focus-visible { outline: 2px solid #8C2F4F; outline-offset: 1px; }\n.ds-layout-frame button:active, .ds-layout-frame a:active { opacity: 1; }",
  "chartStyle": {
    "neatline": {
      "border": "1px solid #3A3A3A",
      "ticks": true,
      "tickInterval": "1°",
      "tickSize": "6px"
    },
    "compassRose": {
      "present": true,
      "type": "8-point star",
      "placement": "upper-right",
      "size": "56px",
      "colors": {
        "body": "#3A3A3A",
        "north": "#8C2F4F"
      }
    },
    "depthContours": {
      "style": "1px dashed #6B6B6B",
      "interval": "5m",
      "label": "italic serif #3A3A3A 11px"
    },
    "soundings": {
      "style": "sans-serif italic #3A3A3A 11px",
      "placement": "dense near shorelines"
    },
    "landTint": "#D4C9A0",
    "seaTint": "none (paper base)",
    "overprints": {
      "magenta": "#8C2F4F for warnings"
    },
    "titlePanel": {
      "location": "bottom-left",
      "border": "ornamental SVG swashes",
      "content": "chart number, scale, edition"
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#6B6B6B",
    "fontFamily": "Tinos"
  },
  "dashboardStyle": {
    "layout": "Dense grid of metric cells, each bounded by a neatline border and containing a label and value separated by a dashed line.",
    "density": "High — cells occupy >80% of available space, with minimal whitespace.",
    "panelTreatment": "Each panel has a 1px solid #3A3A3A border, paper background, and a small compass rose or light marker indicator in the corner.",
    "dataVizStyle": "Depth contours as dashed lines, soundings as small sans-serif italic numbers, wind direction indicated by animated compass rose (opacity pulse 2s).",
    "signatureElement": "A central compass rose with rotating N pointer (CSS animation)."
  },
  "landingStyle": {
    "heroApproach": "Full-width background of a nautical chart top-left section with coastline, depth contours, and soundings; overlaid with paper grain at opacity 0.5.",
    "scrollBehavior": "Smooth but instantaneous — chart elements fade in as they intersect viewport using CSS opacity transition (0ms).",
    "ctaStyle": "Primary button styled as a chart neatline: 1px solid border, uppercase serif text, no rounded corners, hover reduces opacity to 0.7.",
    "signatureMoment": "On page load, the compass rose pulses twice (opacity 1→0.7→1) and the title panel slides in from the bottom-left corner."
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "12px",
    "gap-component": "4px",
    "gap-section": "8px",
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "40px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "chip": "0px"
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"grain-filter\" x=\"0%\" y=\"0%\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"3\" result=\"noise\" /><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0\" in=\"noise\" result=\"coloredNoise\" /><feComposite in=\"SourceGraphic\" in2=\"coloredNoise\" operator=\"in\" /></filter></defs></svg>",
  "globalBodyCss": "font-family: Tinos, serif; background-color: #F4ECD8; color: #3A3A3A; margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { position: relative; overflow: hidden; }\n.ds-layout-frame::before {\n  content: '';\n  position: absolute;\n  top: 0; left: 0; width: 100%; height: 100%;\n  pointer-events: none;\n  filter: url(#grain-filter);\n  mix-blend-mode: multiply;\n  opacity: 0.04;\n  z-index: 0;\n}\n.ds-layout-frame .paper-overlay {\n  position: relative;\n  z-index: 0;\n}\n.ds-layout-frame .foxing {\n  background-image:\n    radial-gradient(circle at 80% 15%, rgba(120,90,60,0.08) 24px, transparent 28px),\n    radial-gradient(circle at 30% 85%, rgba(120,90,60,0.06) 18px, transparent 22px),\n    radial-gradient(circle at 65% 40%, rgba(120,90,60,0.05) 14px, transparent 18px);\n}\n.ds-layout-frame .halftone-land {\n  background-image: repeating-radial-gradient(circle at 25% 25%, #D4C9A0 0.5px, transparent 0.5px, transparent 4px);\n  background-size: 4px 4px;\n  background-blend-mode: multiply;\n  opacity: 0.15;\n}\n.ds-layout-frame .neatline {\n  border: 1px solid var(--border);\n}\n.ds-layout-frame .ink-bleed {\n  text-shadow: 0 0 0.3px currentColor;\n}\n.ds-layout-frame .chart-panel {\n  position: relative;\n  overflow: hidden;\n}",
  "buttons": [
    {
      "name": "primary",
      "desc": "A solid rectangular button with chart-like border and paper-colored background, used for primary actions.",
      "html": "<button onmouseenter=\"this.style.opacity='0.7'\" onmouseleave=\"this.style.opacity='1'\" style=\"background-color: var(--bg); color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 4px 12px; font-family: var(--font-body); font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer;\">SET COURSE</button>",
      "label": "primary",
      "note": "A solid rectangular button with chart-like border and paper-colored background, used for primary actions."
    },
    {
      "name": "secondary",
      "desc": "A button with a dashed border, evoking depth contour lines on a nautical chart.",
      "html": "<button onmouseenter=\"this.style.opacity='0.7'\" onmouseleave=\"this.style.opacity='1'\" style=\"background-color: var(--bg); color: var(--on-bg); border: 1px dashed var(--on-bg-muted); border-radius: var(--radius-default); padding: 4px 12px; font-family: var(--font-body); font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer;\">BEARING</button>",
      "label": "secondary",
      "note": "A button with a dashed border, evoking depth contour lines on a nautical chart."
    },
    {
      "name": "outline",
      "desc": "A transparent button with a solid outline, mimicking a chart boundary.",
      "html": "<button onmouseenter=\"this.style.opacity='0.7'\" onmouseleave=\"this.style.opacity='1'\" style=\"background-color: transparent; color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 4px 12px; font-family: var(--font-body); font-size: 14px; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer;\">DISTANCE</button>",
      "label": "outline",
      "note": "A transparent button with a solid outline, mimicking a chart boundary."
    }
  ],
  "cards": [
    {
      "name": "standard card",
      "desc": "A card with a neatline border (tick marks simulated via gradient) and paper texture, used for displaying chart data.",
      "html": "<div style=\"background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 8px; position: relative; overflow: hidden; background-image: radial-gradient(circle at 20% 80%, rgba(140,110,78,0.15) 20px, transparent 80px);\"><div style=\"border-bottom: 1px dashed var(--on-bg-muted); padding-bottom: 4px; margin-bottom: 4px;\"><span style=\"font-family: var(--font-display); font-size: 18px; text-transform: uppercase; letter-spacing: -0.025em;\">DEPTH 12M</span></div><div style=\"display: flex; gap: 4px; flex-wrap: wrap;\"><span style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\">Soundings: 8.2m, 9.1m</span></div></div>",
      "label": "standard card",
      "note": "A card with a neatline border (tick marks simulated via gradient) and paper texture, used for displaying chart data."
    },
    {
      "name": "title panel card",
      "desc": "An ornamental title panel with decorative swashes and chart metadata, placed at bottom-left corner.",
      "html": "<div style=\"background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 8px; position: relative; overflow: hidden; border-left: 4px solid var(--primary); background-image: radial-gradient(circle at 10% 90%, rgba(140,110,78,0.2) 30px, transparent 100px);\"><div style=\"font-family: var(--font-display); font-size: 24px; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">CHART 1234</div><div style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg-muted); margin-top: 4px;\">SCALE 1:25 000</div><div style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-bg-muted); margin-top: 2px;\">EDITION 2 — 1965</div></div>",
      "label": "title panel card",
      "note": "An ornamental title panel with decorative swashes and chart metadata, placed at bottom-left corner."
    }
  ],
  "forms": [
    {
      "name": "text input",
      "desc": "A single-line text input styled as a chart sounding box, with sharp edges and paper background.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 2px;\"><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); text-transform: uppercase;\">LATITUDE</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"54° 32.4\\x27 N\" style=\"background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 4px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); outline: none;\" /></div>",
      "label": "text input",
      "stateLabel": "A single-line text input styled as a chart sounding box, with sharp edges and paper background."
    },
    {
      "name": "select dropdown",
      "desc": "A dropdown mimicking a chart feature selector, with a downward-pointing arrow formed by a dashed underscore.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 2px;\"><label style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); text-transform: uppercase;\">LIGHT CHARACTERISTIC</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 4px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><option>Fl(2) 15s</option><option>Oc(3) 10s</option><option>Iso 6s</option></select></div>",
      "label": "select dropdown",
      "stateLabel": "A dropdown mimicking a chart feature selector, with a downward-pointing arrow formed by a dashed underscore."
    },
    {
      "name": "checkbox",
      "desc": "A checkbox styled as a chart light marker — a small red square with a cross, checked state fills the square.",
      "html": "<div style=\"display: flex; align-items: center; gap: 4px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"wreck-34d2\" style=\"appearance: none; width: 12px; height: 12px; background-color: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-default); cursor: pointer; position: relative;\" /><label for=\"wreck-34d2\" style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); cursor: pointer;\">Wreck (danger)</label></div>",
      "label": "checkbox",
      "stateLabel": "A checkbox styled as a chart light marker — a small red square with a cross, checked state fills the square."
    }
  ],
  "extraComponents": [
    {
      "name": "compass rose",
      "desc": "An 8-point compass rose star using CSS clip-path, with north marker in red.",
      "html": "<div style=\"width: 56px; height: 56px; background-color: var(--bg); border: 1px solid var(--border); clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%); position: relative;\"><div style=\"position: absolute; top: 0; left: 50%; transform: translateX(-50%); font-family: var(--font-body); font-size: 10px; color: var(--primary); font-weight: 700;\">N</div></div>"
    },
    {
      "name": "light marker",
      "desc": "A small red dot (12px) with a label indicating light characteristics, used for lighthouses.",
      "html": "<div style=\"display: inline-flex; align-items: center; gap: 4px;\"><div style=\"width: 12px; height: 12px; background-color: var(--primary); border-radius: 50%; border: 1px solid var(--border);\"></div><span style=\"font-family: var(--font-body); font-size: 12px; color: var(--on-bg); text-transform: uppercase;\">Fl(2) 15s</span></div>"
    },
    {
      "name": "wreck totem",
      "desc": "A plus sign symbol with a dashed border, used to mark wrecks or hazards on the chart.",
      "html": "<div style=\"display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border: 1px dashed var(--border); position: relative;\"><span style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); line-height: 1;\">+</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — LATITUDE 54° 32&#39; N</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — COASTAL FEATURES</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Depth Contours & Wrecks</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Soundings in fathoms at Mean Low Water Springs. Drying heights in feet above chart datum.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FL(2) 15S — 12M</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Neon or high-saturation colours break the aged paper aesthetic.",
      "avoid": {
        "html": "<button style=\"background-color: #FF00FF; color: #00FF00; border-radius: 10px; padding: 8px 16px; font-family: Arial; font-size: 16px;\">DANGER</button>",
        "label": "Avoid"
      },
      "rule": "Neon or high-saturation colours break the aged paper aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Sans-serif type for headlines or body text destroys the serif authority of the chart.",
      "avoid": {
        "html": "<h1 style=\"font-family: Inter; font-size: 24px; font-weight: 400;\">SAILING DIRECTIONS</h1>",
        "label": "Avoid"
      },
      "rule": "Sans-serif type for headlines or body text destroys the serif authority of the chart.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Rounded corners and glossy shadows are foreign to printed charts.",
      "avoid": {
        "html": "<div style=\"background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); padding: 16px;\"><span style=\"font-family: Arial;\">Data</span></div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners and glossy shadows are foreign to printed charts.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Empty low-density layouts contradict the information-rich nature of charts.",
      "avoid": {
        "html": "<div style=\"width: 400px; height: 300px; background-color: #F4ECD8; border: 1px solid #3A3A3A;\">\n  <\!-- Only one small element, vast empty space -->\n  <span style=\"position: absolute; bottom: 10px; left: 10px;\">Lighthouse</span>\n</div>",
        "label": "Avoid"
      },
      "rule": "Empty low-density layouts contradict the information-rich nature of charts.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "surface": "#F4ECD8",
    "on-surface": "#3A3A3A",
    "primary": "#8C2F4F",
    "on-primary": "#FFFFFF",
    "secondary": "#1F6388",
    "on-secondary": "#FFFFFF",
    "outline": "#3A3A3A",
    "outline-variant": "#6B6B6B",
    "surface-container": "#E8E0D0",
    "error": "#8C2F4F"
  },
  "typography": {
    "display": {
      "fontFamily": "Tinos",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Tinos",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Tinos",
      "fontSize": "18px",
      "fontWeight": 500,
      "lineHeight": 1.625,
      "letterSpacing": "-0.025em",
      "textTransform": "normal-case"
    },
    "body": {
      "fontFamily": "Tinos",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 2,
      "letterSpacing": "0em",
      "textTransform": "normal-case"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 500,
      "lineHeight": 1,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ADMIRALTY CHART 20C — UKHO STANDARD",
      "heroHeadline": "NAVIGATE WITH AUTHORITY. SURVEY WITH PRECISION.",
      "heroSub": "A vintage nautical chart interface for hydrographic monitoring, route planning, and maritime safety. Simulated paper grain, foxing, and ink bleed give every panel the presence of a mid‑20th‑century Admiralty chart.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE CHART</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW LEGEND</button>",
      "navLinks": [
        "CHART",
        "SOUNDINGS",
        "BUOYS",
        "LIGHTS",
        "WRECKS",
        "DEPTHS"
      ],
      "features": [
        {
          "title": "NEATLINE GRATICULE",
          "desc": "Latitude/longitude ticks at 1° intervals with minute marks for precise positioning along a 1px solid border.",
          "icon": "🧭",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧭 NEATLINE GRATICULE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Latitude/longitude ticks at 1° intervals with minute marks for precise positioning along a 1px solid border.</div></div>"
        },
        {
          "title": "DEPTH CONTOUR DASH",
          "desc": "Dashed isobaths at standard intervals (5m, 10m, 20m) with italic serif labels following the contour line.",
          "icon": "〰️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">〰️ DEPTH CONTOUR DASH</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Dashed isobaths at standard intervals (5m, 10m, 20m) with italic serif labels following the contour line.</div></div>"
        },
        {
          "title": "LIGHT MARKER",
          "desc": "12px red dot with light characteristic label (e.g. Fl(2) 15s) marking hazards and aids to navigation.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 LIGHT MARKER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">12px red dot with light characteristic label (e.g. Fl(2) 15s) marking hazards and aids to navigation.</div></div>"
        },
        {
          "title": "WRECK TOTEM",
          "desc": "Plus sign symbol with dashed border indicating submerged obstructions and dangers to shipping.",
          "icon": "➕",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➕ WRECK TOTEM</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Plus sign symbol with dashed border indicating submerged obstructions and dangers to shipping.</div></div>"
        },
        {
          "title": "COMPASS ROSE",
          "desc": "8‑point star with magnetic variation note, interactive rotation for bearing verification.",
          "icon": "🧭",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🧭 COMPASS ROSE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">8‑point star with magnetic variation note, interactive rotation for bearing verification.</div></div>"
        }
      ],
      "ctaStripHeadline": "PLOT YOUR COURSE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REQUEST CHART UPDATE</button>",
      "sidebarBrand": "UKHO CHART 20C",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "SURVEY DATA",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TIDAL INFO",
          "active": false
        },
        {
          "icon": "◉",
          "label": "NOTICES TO MARINERS",
          "active": false
        }
      ],
      "dashboardTitle": "CHART MONITOR — ENTRY 42°N 12°W",
      "metrics": [
        {
          "label": "SOUNDINGS",
          "value": "1,247",
          "delta": "+23",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "DEPTH RANGE",
          "value": "5m–42m",
          "delta": "–2m",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "BUOY STATUS",
          "value": "17 OF 19 OK",
          "delta": "–1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "LIGHT VIG. RATE",
          "value": "98%",
          "delta": "+1%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "DEPTH PROFILE — TRANSECT AB",
      "panelATitle": "SOUNDING LOG",
      "panelARows": [
        {
          "label": "POSITION",
          "value": "42°15.3'N 12°40.1'W",
          "pct": 42
        },
        {
          "label": "DEPTH",
          "value": "28.4m",
          "pct": 28.4
        },
        {
          "label": "SUBSTRATE",
          "value": "SAND & GRAVEL",
          "pct": 0
        },
        {
          "label": "LAST SURVEY",
          "value": "2024-09-11",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "BUOY NETWORK",
      "panelBCells": [
        {
          "label": "BUOY 01",
          "value": "FL(2) 10s",
          "state": "ok"
        },
        {
          "label": "BUOY 02",
          "value": "FL(3) 15s",
          "state": "warn"
        },
        {
          "label": "BUOY 03",
          "value": "OCC(2) 12s",
          "state": "err"
        },
        {
          "label": "BUOY 04",
          "value": "FL R 4s",
          "state": "ok"
        },
        {
          "label": "BUOY 05",
          "value": "ISO 6s",
          "state": "warn"
        },
        {
          "label": "BUOY 06",
          "value": "FL(1) 5s",
          "state": "err"
        },
        {
          "label": "BUOY 07",
          "value": "Q(9) 15s",
          "state": "ok"
        },
        {
          "label": "BUOY 08",
          "value": "FL(4) 20s",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "1km",
        "2km",
        "3km",
        "4km",
        "5km",
        "6km"
      ],
      "series": [
        {
          "data": [
            12,
            18,
            25,
            30,
            28,
            20,
            20,
            20,
            20,
            20,
            20,
            20
          ],
          "label": "DEPTH (m)",
          "axis": "left",
          "color": "#8C2F4F"
        },
        {
          "data": [
            45,
            60,
            72,
            85,
            90,
            78,
            78,
            78,
            78,
            78,
            78,
            78
          ],
          "label": "SOUNDING COUNT",
          "axis": "right-1",
          "color": "#1F6388"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='position:relative;min-height:400px;overflow:hidden;'; el.innerHTML='<div style=\"position:absolute;top:0;left:0;right:0;bottom:0;border:1px solid var(--border);margin:12px;\"><div style=\"position:absolute;top:20px;right:20px;width:56px;height:56px;background-color:var(--bg);border:1px solid var(--border);clip-path:polygon(50% 0%,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0% 50%,40% 40%);text-align:center;\"><span style=\"position:absolute;top:0;left:50%;transform:translateX(-50%);font-family:var(--font-display);font-size:10px;color:var(--primary);font-weight:700;\">N</span></div><div style=\"position:absolute;bottom:20px;left:20px;border-left:4px solid var(--primary);padding-left:8px;\"><div style=\"font-family:var(--font-display);font-size:24px;text-transform:uppercase;letter-spacing:0.025em;color:var(--on-bg);\">CHART 1234</div><div style=\"font-family:var(--font-body);font-size:14px;color:var(--on-bg-muted);\">SCALE 1:25 000</div></div><div style=\"position:absolute;top:120px;left:200px;font-family:var(--font-body);font-size:11px;font-style:italic;color:var(--on-bg);\">12.4m</div><div style=\"position:absolute;top:140px;left:220px;font-family:var(--font-body);font-size:11px;font-style:italic;color:var(--on-bg);\">8.7m</div><div style=\"position:absolute;bottom:80px;right:100px;display:flex;align-items:center;gap:4px;\"><div style=\"width:12px;height:12px;background-color:var(--primary);border-radius:50%;border:1px solid var(--border);\"></div><span style=\"font-family:var(--font-body);font-size:9px;color:var(--on-bg);text-transform:uppercase;\">Fl(2) 15s</span></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:8px;'; el.innerHTML='<div style=\"border:1px solid var(--border);padding:8px;text-align:center;\"><div style=\"width:40px;height:40px;margin:0 auto;background-color:var(--bg);border:1px solid var(--border);clip-path:polygon(50% 0%,60% 40%,100% 50%,60% 60%,50% 100%,40% 60%,0% 50%,40% 40%);\"><span style=\"display:block;text-align:center;font-size:8px;color:var(--primary);\">N</span></div><div style=\"font-family:var(--font-display);font-size:12px;text-transform:uppercase;margin-top:4px;\">Compass Rose</div></div><div style=\"border:1px solid var(--border);padding:8px;text-align:center;\"><div style=\"width:12px;height:12px;margin:0 auto;background-color:var(--primary);border-radius:50%;border:1px solid var(--border);\"></div><div style=\"font-family:var(--font-display);font-size:12px;text-transform:uppercase;margin-top:4px;\">Light Marker</div></div><div style=\"border:1px solid var(--border);padding:8px;text-align:center;\"><div style=\"width:16px;height:16px;margin:0 auto;border:1px dashed var(--border);display:flex;align-items:center;justify-content:center;\"><span style=\"font-size:14px;color:var(--on-bg);\">+</span></div><div style=\"font-family:var(--font-display);font-size:12px;text-transform:uppercase;margin-top:4px;\">Wreck Totem</div></div><div style=\"border:1px solid var(--border);padding:8px;text-align:center;\"><div style=\"height:20px;border-bottom:1px dashed var(--on-bg-muted);margin-bottom:4px;\"></div><div style=\"font-family:var(--font-display);font-size:12px;text-transform:uppercase;\">Depth Contour</div></div><div style=\"border:1px solid var(--border);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-body);font-size:14px;font-style:italic;\">12.4m</div><div style=\"font-family:var(--font-display);font-size:12px;text-transform:uppercase;\">Sounding</div></div><div style=\"border:1px solid var(--border);padding:8px;text-align:center;\"><div style=\"font-family:var(--font-display);font-size:14px;text-transform:uppercase;\">CHART 1234</div><div style=\"font-family:var(--font-body);font-size:12px;\">Scale 1:25k</div><div style=\"font-family:var(--font-display);font-size:12px;text-transform:uppercase;\">Title Panel</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='border:1px solid var(--border);padding:8px;position:relative;min-height:200px;'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:14px;text-transform:uppercase;letter-spacing:0.025em;color:var(--on-bg);margin-bottom:8px;border-bottom:1px dashed var(--on-bg-muted);padding-bottom:4px;\">DEPTH PROFILE</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);\">Transect AB</div><div style=\"margin-top:8px;display:flex;justify-content:space-between;font-family:var(--font-body);font-size:11px;font-style:italic;color:var(--on-bg);\"><span>5m</span><span>10m</span><span>15m</span><span>20m</span><span>25m</span></div><div style=\"border-top:1px dashed var(--primary);margin-top:4px;height:20px;background:repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 6px);background-size:8px 100%;\"></div><div style=\"font-family:var(--font-body);font-size:10px;color:var(--on-bg-muted);text-align:right;\">Depth Contour</div>'; }",
    "heroBackground": "function(el) { el.style.background='linear-gradient(135deg, var(--bg) 0%, var(--surface-container) 100%)'; el.style.backgroundImage='repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(107,107,107,0.1) 19px, rgba(107,107,107,0.1) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(107,107,107,0.1) 19px, rgba(107,107,107,0.1) 20px)'; el.style.backgroundBlendMode='multiply'; }",
    "ctaBackground": "function(el) { el.style.background='linear-gradient(180deg, var(--bg) 0%, var(--surface-container) 100%)'; el.style.backgroundImage='repeating-linear-gradient(45deg, transparent, transparent 10px, var(--on-bg-muted) 10px, var(--on-bg-muted) 11px)'; el.style.backgroundSize='20px 20px'; el.style.backgroundBlendMode='multiply'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 2px, transparent 2px, transparent 8px);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='var(--bg)'; el.style.backgroundImage='repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(107,107,107,0.05) 49px, rgba(107,107,107,0.05) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(107,107,107,0.05) 49px, rgba(107,107,107,0.05) 50px)'; el.style.backgroundSize='50px 50px'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;opacity:0.4;background:radial-gradient(circle at 20% 30%, rgba(120,90,60,0.15) 10px, transparent 20px), radial-gradient(circle at 80% 70%, rgba(120,90,60,0.1) 15px, transparent 25px), radial-gradient(circle at 50% 10%, rgba(120,90,60,0.08) 8px, transparent 16px);'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F4ECD8",
    "--color-popover": "#F4ECD8",
    "--color-foreground": "#3A3A3A",
    "--color-card-foreground": "#3A3A3A",
    "--color-popover-foreground": "#3A3A3A",
    "--color-card": "#F4ECD8",
    "--color-muted": "#F4ECD8",
    "--color-muted-foreground": "#6B6B6B",
    "--color-primary": "#8C2F4F",
    "--color-ring": "#8C2F4F",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#1F6388",
    "--color-accent": "#1F6388",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#3A3A3A",
    "--color-input": "#3A3A3A",
    "--color-destructive": "#8C2F4F"
  },
  "shadcnTokensClassic": {
    "--background": "#F4ECD8",
    "--popover": "#F4ECD8",
    "--foreground": "#3A3A3A",
    "--card-foreground": "#3A3A3A",
    "--popover-foreground": "#3A3A3A",
    "--card": "#F4ECD8",
    "--muted": "#F4ECD8",
    "--muted-foreground": "#6B6B6B",
    "--primary": "#8C2F4F",
    "--ring": "#8C2F4F",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#1F6388",
    "--accent": "#1F6388",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#3A3A3A",
    "--input": "#3A3A3A",
    "--destructive": "#8C2F4F"
  }
});
