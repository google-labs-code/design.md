registerSystem({
  "meta": {
    "name": "Swiss Grid Precision (Synthesis)",
    "tagline": "Rigorous Swiss typographic system rooted in Müller-Brockmann and the Zurich School",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
  },
  "yamlTokens": {
    "name": "Swiss Grid Precision (Synthesis)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000",
      "ok": "#000000",
      "delta-up": "#000000",
      "accent": "#DA291C"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "60px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "-0.025em"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.5,
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
      "page-edge": "32px",
      "gap-section": "48px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#DA291C",
        "textColor": "#FFFFFF",
        "padding": "16px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "#FFFFFF00",
        "textColor": "#000000",
        "rounded": "0px",
        "padding": "16px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "16px",
        "height": "40px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "padding": "16px"
      }
    },
    "version": "alpha",
    "description": "Rigorous Swiss typographic system rooted in Müller-Brockmann and the Zurich School — modular grids, neo-grotesque type, high-contrast black-and-white photography, a single restrained accent hue, and flat unmodulated surfaces that deliver objective, authoritative clarity.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `josef-muller-brockmann` refers unambiguously to Josef Müller-Brockmann (1914–1996), the Swiss graphic designer, educator, and author who was a central figure in the International Typographic Style (Swiss Style). This record catalogues the visual identity of his body of work — primarily his posters, book designs, and systematic design principles — not a single corporate identity. The ",
      "manual_enrichment_required": false,
      "imagery_count": 4,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.emuseum.ch",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "www.klingspor-museum.de",
          "count": 1
        },
        {
          "host": "www.moma.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.emuseum.ch/objects/13937",
          "host": "www.emuseum.ch",
          "institution": "Museum für Gestaltung Zürich",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia/Wikimedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.klingspor-museum.de/",
          "host": "www.klingspor-museum.de",
          "institution": "Klingspor Museum, Offenbach",
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
          "name": "Akzidenz-Grotesk",
          "foundry": "Berthold",
          "year": 1898,
          "google_fonts": "Archivo",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unknown"
        },
        {
          "name": "Univers",
          "foundry": null,
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "unknown"
        }
      ],
      "flags": [
        "sparse_imagery",
        "2_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour specification**": "No verified CMYK or Pantone values for any artefact. All hex approximations are unverified, inferred from reproductions.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#DA291C",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#D50000",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#000000",
    "warn": "#DA291C",
    "err": "#D50000",
    "delta-up": "#000000",
    "delta-down": "#DA291C",
    "delta-flat": "#00000080",
    "deltaUp": "#000000",
    "deltaDown": "#DA291C",
    "deltaFlat": "#00000080",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "elevation": {
    "default": "0",
    "hover": "0",
    "active": "0",
    "overlay": "0",
    "modal": "0"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grainIntensity": 0.08,
      "grainBlend": "overlay",
      "halftoneFrequency": 85,
      "inkMisregistration": "0.5pt"
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='halftone-contrast'><feColorMatrix type='contrast' values='1.3'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body, Inter); background: var(--bg, #FFFFFF); color: var(--on-bg, #000000); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100' height='100' style='filter:url(%23grain)' opacity='0.08'/%3E%3C/svg%3E\"); pointer-events: none; z-index: 9999; mix-blend-mode: overlay; } .ds-layout-frame img.photograph { filter: url(#halftone-contrast) grayscale(100%) contrast(130%); }",
  "interactionModel": {
    "hover": {
      "colorShift": "to accent red",
      "noMovement": true,
      "noShadowChange": true,
      "noOpacityShift": true
    },
    "focus": {
      "outlineColor": "var(--secondary-col)",
      "outlineWidth": "2px",
      "noGlow": true
    },
    "active": {
      "noVisualChange": true
    }
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame textarea { transition: color 150ms ease-out, background-color 150ms ease-out, border-color 150ms ease-out, outline-color 150ms ease-out; } .ds-layout-frame button:hover, .ds-layout-frame a:hover { color: var(--secondary-col); } .ds-layout-frame input:focus, .ds-layout-frame select:focus, .ds-layout-frame textarea:focus { outline: 2px solid var(--secondary-col); outline-offset: 2px; border-color: transparent; }",
  "chartStyle": {
    "background": "#FFFFFF",
    "gridLine": "1px solid rgba(0,0,0,0.15)",
    "axisLabel": "font-family: Inter; font-size: 12px; font-weight: 700; text-transform: uppercase; color: rgba(0,0,0,0.6);",
    "line": "#000000 stroke-width: 1.5px",
    "dot": "#000000 r: 2.5px",
    "fill": "none",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "4-column asymmetric modular grid with generous margins (2x column width). Top-left grid intersection anchors the primary metric cell.",
    "density": "Variable — from sparse minimalism with large negative space to information-dense panels, always grid-bound.",
    "panelTreatment": "Flat white panels with hairline black borders. No elevation, no transparency. Each panel snaps to grid columns.",
    "dataVizStyle": "Black-and-white line charts with accent red highlights on critical data points. Grid lines at 15% opacity. No filled areas.",
    "signatureElement": "A single red accent shape (circle or square) at a grid intersection that visually anchors the highest-priority metric."
  },
  "landingStyle": {
    "heroApproach": "Asymmetric composition: oversized uppercase headline spanning 2 grid columns, high-contrast grayscale photograph occupying 3 columns, and a single red geometric accent shape (e.g., a 40px square) positioned at a grid intersection.",
    "scrollBehavior": "Static — no parallax, no sticky elements. Content reflows to the grid on window resize. Scroll snapping is forbidden.",
    "ctaStyle": "Black-filled rectangular button with white uppercase label. On hover, fill changes to accent red. No animation on load.",
    "signatureMoment": "Below the hero, a dense information panel with hairline rules separating data cells: metric labels in uppercase, values in bold black, delta indicators in accent red for negative changes."
  },
  "buttons": [
    {
      "name": "Primary",
      "desc": "Black-filled button with white uppercase label, used for primary actions. On hover, background switches to accent red.",
      "html": "<button onmouseenter=\"this.style.background='var(--secondary-col)'\" onmouseleave=\"this.style.background='var(--primary)'\" style=\"background: var(--primary); color: var(--on-primary); border: none; height: 40px; padding: 0 16px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer; transition: background 150ms ease-out;\">Activate System</button>",
      "label": "Primary",
      "note": "Black-filled button with white uppercase label, used for primary actions. On hover, background switches to accent red."
    },
    {
      "name": "Secondary",
      "desc": "Outlined button with black border and transparent background. On hover, border and text shift to accent red.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 1px solid var(--border); height: 40px; padding: 0 16px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer; transition: color 150ms ease-out, border-color 150ms ease-out;\">Cancel</button>",
      "label": "Secondary",
      "note": "Outlined button with black border and transparent background. On hover, border and text shift to accent red."
    },
    {
      "name": "Ghost",
      "desc": "Flat, borderless text button. No fill unless hovered (accent red). Typically used for inline actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: none; height: 40px; padding: 0 16px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; cursor: pointer; transition: color 150ms ease-out;\">Dismiss</button>",
      "label": "Ghost",
      "note": "Flat, borderless text button. No fill unless hovered (accent red). Typically used for inline actions."
    }
  ],
  "cards": [
    {
      "name": "Standard Data Card",
      "desc": "Minimal bordered white card. No elevation, no rounding. Content aligns to an internal modular grid.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); padding: 16px; border-radius: var(--radius-card); font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><div style=\"border-bottom: 2px solid var(--border); padding-bottom: 8px; margin-bottom: 16px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em;\">System Summary</div><div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 16px;\"><div><span style=\"display: block; font-size: 24px; font-weight: 700;\">87%</span><span style=\"font-size: 11px; text-transform: uppercase; color: var(--on-bg-muted);\">Throughput</span></div><div><span style=\"display: block; font-size: 24px; font-weight: 700;\">1.2s</span><span style=\"font-size: 11px; text-transform: uppercase; color: var(--on-bg-muted);\">Latency</span></div></div></div>",
      "label": "Standard Data Card",
      "note": "Minimal bordered white card. No elevation, no rounding. Content aligns to an internal modular grid."
    },
    {
      "name": "Alert Card",
      "desc": "Card with accent red left border to indicate urgent information. Flat treatment otherwise.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-left: 4px solid var(--secondary-col); padding: 16px; border-radius: 0; font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><div style=\"font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; font-size: 12px; margin-bottom: 8px;\">Warning</div><p style=\"margin: 0; line-height: 1.625;\">Memory usage exceeds 90% threshold. Consider scaling resources.</p></div>",
      "label": "Alert Card",
      "note": "Card with accent red left border to indicate urgent information. Flat treatment otherwise."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Rectangular input field with black border, white background, and uppercase label. No rounded corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">Hostname</label><input onfocus=\"this.style.border='2px solid var(--secondary-col)'\" onblur=\"this.style.border='1px solid var(--border)'\" type=\"text\" style=\"background: var(--surface); border: 1px solid var(--border); border-radius: 0; height: 40px; padding: 0 16px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); outline: none; transition: border-color 150ms ease-out;\" placeholder=\"e.g. server-01\" /></div>",
      "label": "Text Input",
      "stateLabel": "Rectangular input field with black border, white background, and uppercase label. No rounded corners."
    },
    {
      "name": "Select Dropdown",
      "desc": "Native select element styled as a flat rectangular dropdown with black border. Arrow is implied by browser default but tolerated.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">Queue</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 1px solid var(--border); border-radius: 0; height: 40px; padding: 0 16px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); outline: none; -webkit-appearance: none; appearance: none; transition: border-color 150ms ease-out;\"><option>Primary</option><option>Secondary</option><option>Backup</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Native select element styled as a flat rectangular dropdown with black border. Arrow is implied by browser default but tolerated."
    },
    {
      "name": "Checkbox",
      "desc": "Terminal-style checkbox: a hollow square with a black border that fills with accent red when checked.",
      "html": "<label style=\"font-family: var(--font-body); font-size: 14px; color: var(--on-bg); display: flex; align-items: center; gap: 8px; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 16px; height: 16px; border: 1px solid var(--border); background: var(--surface); margin: 0; outline: none; transition: background 150ms ease-out; cursor: pointer;\" checked /><span>Enable verbose logging</span></label>",
      "label": "Checkbox",
      "stateLabel": "Terminal-style checkbox: a hollow square with a black border that fills with accent red when checked."
    }
  ],
  "extraComponents": [
    {
      "name": "Status Badge",
      "desc": "Compact uppercase label with black border and padding. Color of text can signal state (e.g., red for warn, black for ok).",
      "html": "<span style=\"display: inline-block; border: 1px solid var(--border); padding: 2px 8px; font-family: var(--font-body); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.025em; color: var(--on-bg);\">Online</span>"
    },
    {
      "name": "Tooltip",
      "desc": "Simple bordered tooltip appearing below the trigger element. No arrow, no shadow, flat.",
      "html": "<div style=\"position: relative; display: inline-block;\"><button style=\"background: transparent; border: none; cursor: pointer; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); text-decoration: underline;\">Hover me</button><div style=\"position: absolute; top: 100%; left: 0; background: var(--surface); border: 1px solid var(--border); padding: 8px; white-space: nowrap; font-family: var(--font-body); font-size: 12px; color: var(--on-bg); z-index: 10;\">System uptime: 98%</div></div>"
    },
    {
      "name": "Toast Notification",
      "desc": "Transient message bar with accent red left border. Flat, no shadow, no rounded corners.",
      "html": "<div style=\"display: flex; align-items: center; padding: 12px 16px; border-left: 4px solid var(--secondary-col); background: var(--surface); border: 1px solid var(--border); font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\">Deployment successful.</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — SYSTEM DIAGNOSTIC</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MODULAR GRID ALIGNMENT</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Throughput Metrics Overview</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — All system indicators remain within nominal ranges. No anomalous patterns detected in the last 24 hours.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — STATUS: OPERATIONAL</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Gradients, shadows, and rounded corners on any surface — these contradict the flat, unmodulated print aesthetic.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(135deg, #000000, #DA291C); border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 16px; color: white; font-family: var(--font-body);\">Broken surface</div>",
        "label": "Avoid"
      },
      "rule": "Gradients, shadows, and rounded corners on any surface — these contradict the flat, unmodulated print aesthetic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); padding: 16px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); border-left: 4px solid var(--secondary-col);\">Flat, unmodulated surface with red accent.</div>"
      }
    },
    {
      "desc": "Multiple accent colours in the same view — only one chromatic hue is permitted per interface.",
      "avoid": {
        "html": "<button style=\"background: #DA291C; border: none; padding: 8px 16px; color: white;\">Red</button><button style=\"background: #0055FF; border: none; padding: 8px 16px; color: white;\">Blue</button>",
        "label": "Avoid"
      },
      "rule": "Multiple accent colours in the same view — only one chromatic hue is permitted per interface.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); padding: 16px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg);\"><span style=\"font-weight: 700; text-transform: uppercase;\">Only one accent hue present (red).</span></div>"
      }
    },
    {
      "desc": "Centered or justified text — all text must be flush left, ragged right.",
      "avoid": {
        "html": "<p style=\"text-align: center; font-family: var(--font-body); font-size: 14px;\">This text is centered, which breaks the modular grid alignment.</p>",
        "label": "Avoid"
      },
      "rule": "Centered or justified text — all text must be flush left, ragged right.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Decorative serif or script typefaces — must use only the designated neo-grotesque font (Inter).",
      "avoid": {
        "html": "<h1 style=\"font-family: Georgia, serif; font-size: 36px; font-weight: normal;\">Serif headline</h1>",
        "label": "Avoid"
      },
      "rule": "Decorative serif or script typefaces — must use only the designated neo-grotesque font (Inter).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": null,
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "accent": "#DA291C",
    "error": "#D50000"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "60px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "-0.025em"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.5,
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
    "page-edge": "32px",
    "gap-section": "48px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "20px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "INTERNATIONAL TYPOGRAPHIC STYLE",
      "heroHeadline": "GRID AS DISCIPLINE",
      "heroSub": "A modular composition system rooted in the Zurich School. Every element snaps to the underlying column grid. No optical centering, no free placement.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW MANIFESTO</button>",
      "navLinks": [
        "GRID",
        "MODULES",
        "GLYPH",
        "RAG",
        "ACCENT"
      ],
      "features": [
        {
          "title": "MODULAR GRID",
          "desc": "Four-column asymmetric grid with generous margins. Every element snaps to column and gutter intersections.",
          "icon": "▦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▦ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Four-column asymmetric grid with generous margins. Every element snaps to column and gutter intersections.</div></div>"
        },
        {
          "title": "NEO-GROTESQUE TYPE",
          "desc": "Single typeface family — Inter. Flush left, ragged right, no hyphenation. Uppercase for display and labels.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 NEO-GROTESQUE TYPE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Single typeface family — Inter. Flush left, ragged right, no hyphenation. Uppercase for display and labels.</div></div>"
        },
        {
          "title": "SINGLE ACCENT",
          "desc": "One chromatic hue per interface — classically red. Applied to a CTA, an underline, and one geometric element.",
          "icon": "⚫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚫ SINGLE ACCENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">One chromatic hue per interface — classically red. Applied to a CTA, an underline, and one geometric element.</div></div>"
        },
        {
          "title": "HALFTONE & GRAIN",
          "desc": "Optional simulation of offset print: 85–133 lpi halftone dot screen and paper grain via SVG feTurbulence.",
          "icon": "📷",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📷 HALFTONE & GRAIN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Optional simulation of offset print: 85–133 lpi halftone dot screen and paper grain via SVG feTurbulence.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD WITH PRECISION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START COMPOSING</button>",
      "sidebarBrand": "SWISS GRID",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "MODULES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "GLYPH",
          "active": false
        },
        {
          "icon": "◉",
          "label": "RAG",
          "active": false
        },
        {
          "icon": "◉",
          "label": "ACCENT",
          "active": false
        }
      ],
      "dashboardTitle": "COMPOSITION OVERVIEW",
      "metrics": [
        {
          "label": "GRID COLUMNS",
          "value": "4",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "MODULES",
          "value": "12",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GLYPH SIZES",
          "value": "6",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ACCENT TOUCHPOINTS",
          "value": "3",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "HALFTONE LPI",
          "value": "85–133",
          "delta": "—",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "GRID OCCUPANCY",
      "panelATitle": "MODULE ALLOCATION",
      "panelARows": [
        {
          "label": "HEADLINE",
          "value": "2/4",
          "pct": 2
        },
        {
          "label": "BODY",
          "value": "1/4",
          "pct": 1
        },
        {
          "label": "IMAGE",
          "value": "3/4",
          "pct": 3
        },
        {
          "label": "CTA",
          "value": "1/4",
          "pct": 1
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "GLYPH SPECIMEN",
      "panelBCells": [
        {
          "label": "WEIGHT",
          "value": "700",
          "state": "ok"
        },
        {
          "label": "SIZE",
          "value": "60PX",
          "state": "warn"
        },
        {
          "label": "LEADING",
          "value": "1.25",
          "state": "err"
        },
        {
          "label": "TRACKING",
          "value": "0.025EM",
          "state": "ok"
        },
        {
          "label": "CASE",
          "value": "UPPER",
          "state": "warn"
        },
        {
          "label": "FAMILY",
          "value": "INTER",
          "state": "err"
        },
        {
          "label": "STYLE",
          "value": "NEO-GROTESK",
          "state": "ok"
        },
        {
          "label": "FORM",
          "value": "RAGGED-RIGHT",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "MODULE A",
        "MODULE B",
        "MODULE C",
        "MODULE D",
        "GUTTER",
        "MARGIN"
      ],
      "series": [
        {
          "data": [
            80,
            60,
            90,
            40,
            20,
            10,
            10,
            10,
            10,
            10,
            10,
            10
          ],
          "label": "OCCUPIED",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            20,
            40,
            10,
            60,
            80,
            90,
            90,
            90,
            90,
            90,
            90,
            90
          ],
          "label": "EMPTY",
          "axis": "right-1",
          "color": "#DA291C"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:480px;background:var(--bg);display:flex;align-items:center;padding:64px 32px;'; el.innerHTML='<div style=\"display:grid;grid-template-columns:2fr 3fr;gap:48px;width:100%;max-width:1200px;margin:0 auto;\"><div style=\"display:flex;flex-direction:column;justify-content:center;\"><div style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--secondary-col);margin-bottom:16px;\">INTERNATIONAL TYPOGRAPHIC STYLE</div><div style=\"font-family:var(--font-display);font-size:60px;font-weight:700;line-height:1.25;letter-spacing:0.025em;text-transform:uppercase;color:var(--primary);margin:0 0 24px 0;\">GRID AS DISCIPLINE</div><div style=\"font-family:var(--font-body);font-size:14px;font-weight:400;line-height:1.625;letter-spacing:-0.025em;color:var(--on-bg-muted);margin-bottom:32px;\">A modular composition system rooted in the Zurich School. Every element snaps to the underlying column grid. No optical centering, no free placement.</div><div style=\"display:flex;gap:16px;\"><button style=\"background:var(--primary);color:var(--on-primary);border:none;height:40px;padding:0 16px;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;cursor:pointer;transition:background 150ms ease-out;\">EXPLORE GRID</button><button style=\"background:transparent;color:var(--primary);border:1px solid var(--border);height:40px;padding:0 16px;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;cursor:pointer;transition:color 150ms ease-out,border-color 150ms ease-out;\">VIEW MANIFESTO</button></div></div><div style=\"position:relative;display:flex;align-items:center;justify-content:center;\"><div style=\"width:100%;height:320px;background:var(--on-bg-muted);filter:grayscale(100%) contrast(130%);\"></div><div style=\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;background:var(--secondary-col);\"></div></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='padding:64px 32px;background:var(--bg);'; el.innerHTML='<div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:2px;max-width:1200px;margin:0 auto;\"><div style=\"height:240px;background:var(--on-bg-muted);filter:grayscale(100%) contrast(130%);border:1px solid var(--border);\"></div><div style=\"height:240px;background:var(--on-bg-muted);filter:grayscale(100%) contrast(130%);border:1px solid var(--border);position:relative;\"><div style=\"position:absolute;top:16px;left:16px;width:20px;height:20px;background:var(--secondary-col);\"></div></div><div style=\"height:240px;background:var(--on-bg-muted);filter:grayscale(100%) contrast(130%);border:1px solid var(--border);\"></div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:32px;background:var(--surface);border:1px solid var(--border);font-family:var(--font-body);'; el.innerHTML='<div style=\"border-bottom:2px solid var(--primary);padding-bottom:8px;margin-bottom:16px;font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.025em;color:var(--primary);\">GRID METRICS</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:16px;\"><div style=\"display:flex;flex-direction:column;gap:4px;border-bottom:1px solid var(--border);padding-bottom:8px;\"><span style=\"font-size:11px;text-transform:uppercase;color:var(--on-bg-muted);\">GRID COLUMNS</span><span style=\"font-size:24px;font-weight:700;color:var(--on-bg);\">4</span></div><div style=\"display:flex;flex-direction:column;gap:4px;border-bottom:1px solid var(--border);padding-bottom:8px;\"><span style=\"font-size:11px;text-transform:uppercase;color:var(--on-bg-muted);\">MODULES</span><span style=\"font-size:24px;font-weight:700;color:var(--on-bg);\">12</span><span style=\"font-size:12px;font-weight:700;color:var(--secondary-col);\">+2</span></div><div style=\"display:flex;flex-direction:column;gap:4px;border-bottom:1px solid var(--border);padding-bottom:8px;\"><span style=\"font-size:11px;text-transform:uppercase;color:var(--on-bg-muted);\">GLYPH SIZES</span><span style=\"font-size:24px;font-weight:700;color:var(--on-bg);\">6</span></div><div style=\"display:flex;flex-direction:column;gap:4px;\"><span style=\"font-size:11px;text-transform:uppercase;color:var(--on-bg-muted);\">ACCENT TOUCHPOINTS</span><span style=\"font-size:24px;font-weight:700;color:var(--on-bg);\">3</span><span style=\"font-size:12px;font-weight:700;color:var(--secondary-col);\">+1</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background='var(--bg)'; var grid=document.createElement('div'); grid.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:1;background-image:repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px), repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.04) 1px, rgba(0,0,0,0.04) 2px);background-size:32px 32px;'; el.appendChild(grid); }",
    "ctaBackground": "function(el) { el.style.background='var(--primary)'; var accent=document.createElement('div'); accent.style.cssText='position:absolute;bottom:32px;right:32px;width:60px;height:60px;background:var(--secondary-col);'; el.appendChild(accent); }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:var(--primary);margin:48px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='var(--bg)'; var grid=document.createElement('div'); grid.style.cssText='position:absolute;inset:0;pointer-events:none;z-index:1;background-image:repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px);background-size:64px 64px;'; el.appendChild(grid); }",
    "surfaceOverlay": "function(el) { var dot=document.createElement('div'); dot.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;opacity:0.12;background-image:radial-gradient(circle, #000 1px, transparent 1px);background-size:4px 4px;'; el.appendChild(dot); }"
  },
  "ambientCanvas": "function(tick) { var c=document.createElement('div'); c.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:10000;opacity:0.03;background-image:radial-gradient(circle at ' + (50 + 10*Math.sin(tick/200)) + '% ' + (50 + 10*Math.cos(tick/200)) + '%, var(--secondary-col) 0%, transparent 30%);'; return c; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#DA291C",
    "--color-accent": "#DA291C",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#D50000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#DA291C",
    "--accent": "#DA291C",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#D50000"
  }
});
