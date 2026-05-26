registerSystem({
  "meta": {
    "name": "Ordnance Survey Explorer 1:25,000",
    "tagline": "Rugged, authoritative British cartographic aesthetic adapted for UI — simulating a printed topographic map with pale buff land base, magenta contour lines, and paper grain overlay.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  },
  "yamlTokens": {
    "name": "Ordnance Survey Explorer 1:25,000",
    "colors": {
      "land-base": "#F5EBD9",
      "contour-line": "#B36DAE",
      "woodland-fill": "#C3D3A5",
      "water-fill": "#5B7FAE",
      "grid-line": "#E8C3A8",
      "on-surface": "#000000",
      "on-primary": "#FFFFFF",
      "ok": "#C3D3A5",
      "warn": "#E8C3A8",
      "err": "#B36DAE",
      "delta-up": "#C3D3A5",
      "delta-down": "#B36DAE",
      "delta-flat": "#E8C3A8"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "headline": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "24px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "title": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
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
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.land-base}",
        "textColor": "#B36DAE",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.contour-line}",
        "textColor": "{colors.on-primary}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#E68A2E",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.land-base}",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "{colors.land-base}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "{colors.land-base}",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "metric-cell": {
        "backgroundColor": "{colors.land-base}",
        "textColor": "#000000",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "data-table-row": {
        "backgroundColor": "{colors.land-base}",
        "textColor": "#000000",
        "rounded": "{rounded.default}",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "A rugged, authoritative British cartographic aesthetic adapted for UI, simulating a printed topographic map with a pale buff land base, magenta contour lines, and paper grain overlay.",
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
          "host": "www.geograph.org.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.geograph.org.uk/photo/123456",
          "host": "www.geograph.org.uk",
          "institution": "Geograph Britain and Ireland",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "one_usable_url_only",
        "no_typography_extracted",
        "no_colour_extracted",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5EBD9",
    "--on-bg": "#000000",
    "--primary": "#B36DAE",
    "--on-primary": "#1e1e1e",
    "--secondary-col": "#C3D3A5",
    "--on-secondary": "#000000",
    "--surface": "#F5EBD9",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#E8C3A8",
    "--error": "#B36DAE",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#C3D3A5",
    "warn": "#E8C3A8",
    "err": "#B36DAE",
    "delta-up": "#C3D3A5",
    "delta-down": "#B36DAE",
    "delta-flat": "#E8C3A8",
    "deltaUp": "#C3D3A5",
    "deltaDown": "#B36DAE",
    "deltaFlat": "#E8C3A8",
    "live": "#B36DAE",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "chartStyle": {
    "backgroundColor": "#E8DFD0",
    "gridLineColor": "#E8C3A8",
    "gridLineWidth": "1px",
    "axisLabelColor": "#E8C3A8",
    "axisLabelFont": "Inter",
    "axisLabelSize": "0.75rem",
    "lineColor": "#C3D3A5",
    "lineWidth": "1.5px",
    "dotColor": "#C3D3A5",
    "dotRadius": "2.5px",
    "noGlow": true,
    "noShadow": true,
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": {
        "technique": "feTurbulence",
        "baseFrequency": 0.65,
        "numOctaves": 3,
        "opacity": 0.15,
        "blendMode": "overlay",
        "color": "monochrome",
        "pointerEvents": "none"
      },
      "misregistration": {
        "offset": "1px",
        "opacity": "0.1-0.15",
        "blendMode": "multiply",
        "targets": [
          "woodland-fill",
          "water-fill"
        ]
      },
      "halftoneWater": {
        "technique": "repeating-radial-gradient",
        "dotSize": "1px",
        "spacing": "4px",
        "opacity": "0.2-0.3",
        "color": "#5B7FAE",
        "blendMode": "multiply"
      }
    }
  },
  "interactionModel": {
    "hover": {
      "type": "scale",
      "value": 1.1
    },
    "focus": {
      "type": "color-border",
      "value": "var(--primary)",
      "ring": false
    },
    "active": {
      "type": "opacity-dim",
      "value": 0.8
    },
    "transitionDuration": "150ms",
    "transitionEasing": "ease-out"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "icon": "24px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "base-content": "z-0",
    "sticky-elements": "z-20",
    "overlays": "z-40",
    "modals": "z-50",
    "top-layer": "z-[60]"
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0\" in=\"noise\" result=\"coloredNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: 'Inter', sans-serif; background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; filter: url(#paper-grain); mix-blend-mode: overlay; opacity: 0.15; } .ds-layout-frame { box-sizing: border-box; } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { box-sizing: inherit; }",
  "interactionStyles": ".ds-layout-frame button:hover, .ds-layout-frame a:hover, .ds-layout-frame [role='button']:hover { transform: scale(1.1); transition: transform 150ms ease-out; } .ds-layout-frame button:active, .ds-layout-frame a:active, .ds-layout-frame [role='button']:active { opacity: 0.8; } .ds-layout-frame input:focus, .ds-layout-frame textarea:focus, .ds-layout-frame select:focus { border-color: var(--primary); outline: none; } .ds-layout-frame *:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; } .ds-layout-frame * { transition: background-color 150ms ease-out, border-color 150ms ease-out, box-shadow 150ms ease-out; }",
  "dashboardStyle": {
    "layout": "grid with dense metric cells and data tables",
    "density": "high",
    "panelTreatment": "flat with paper grain overlay (global)",
    "dataVizStyle": "minimal, line charts with peachy grid lines and woodland-fill line colour",
    "signatureElement": "1 km orange grid lines (#E8C3A8) as separators"
  },
  "landingStyle": {
    "heroApproach": "full-screen map view with north arrow and scale bar",
    "scrollBehavior": "static, map remains fixed",
    "ctaStyle": "button-primary (buff with magenta text) for 'Start Exploring'",
    "signatureMoment": "Trig point marker (▲) with popup showing spot height in magenta"
  },
  "buttons": [
    {
      "name": "Primary Action",
      "desc": "Solid button with pale buff background and magenta text, mimicking map legend entries. Hover state inverts colors.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--bg, #F5EBD9); color: var(--primary, #B36DAE); border: none; padding: var(--spacing-sm, 8px); border-radius: var(--radius-btn, 0px); font-family: var(--font-body, Inter); font-size: 14px; font-weight: 500; cursor: pointer;\">Explore Map</button>",
      "label": "Primary Action",
      "note": "Solid button with pale buff background and magenta text, mimicking map legend entries. Hover state inverts colors."
    },
    {
      "name": "Secondary Outline",
      "desc": "Transparent button with magenta border and text, used for less prominent actions like 'Reset View'.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary, #B36DAE); border: 1px solid var(--primary, #B36DAE); padding: var(--spacing-sm, 8px); border-radius: var(--radius-btn, 0px); font-family: var(--font-body, Inter); font-size: 14px; font-weight: 500; cursor: pointer;\">Reset View</button>",
      "label": "Secondary Outline",
      "note": "Transparent button with magenta border and text, used for less prominent actions like 'Reset View'."
    },
    {
      "name": "Ghost/Link",
      "desc": "Minimal button with only text, for navigational links like 'View Legend'.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary, #B36DAE); border: none; padding: var(--spacing-xs, 4px); font-family: var(--font-body, Inter); font-size: 14px; font-weight: 500; cursor: pointer; text-decoration: underline;\">View Legend</button>",
      "label": "Ghost/Link",
      "note": "Minimal button with only text, for navigational links like 'View Legend'."
    }
  ],
  "cards": [
    {
      "name": "Basic Information Card",
      "desc": "Standard card with pale buff background and square corners, used for map feature details or data panels.",
      "html": "<div style=\"background: var(--bg, #F5EBD9); color: var(--on-bg, #000000); border: 1px solid var(--border, #E8C3A8); border-radius: var(--radius-card, 0px); padding: var(--spacing-md, 16px); font-family: var(--font-body, Inter);\"><h3 style=\"margin: 0 0 8px; font-family: var(--font-display, Inter); font-size: 18px; font-weight: 700;\">Trig Point</h3><p style=\"margin: 0; font-size: 14px;\">Height: 247m above datum</p></div>",
      "label": "Basic Information Card",
      "note": "Standard card with pale buff background and square corners, used for map feature details or data panels."
    },
    {
      "name": "Woodland Fill Card",
      "desc": "Card with woodland green border and subtle paper grain simulation (applied globally via CSS).",
      "html": "<div style=\"background: var(--bg, #F5EBD9); color: var(--on-bg, #000000); border: 2px solid var(--secondary-col, #C3D3A5); border-radius: var(--radius-card, 0px); padding: var(--spacing-md, 16px); font-family: var(--font-body, Inter);\"><h3 style=\"margin: 0 0 8px; font-family: var(--font-display, Inter); font-size: 18px; font-weight: 700;\">Woodland Area</h3><p style=\"margin: 0; font-size: 14px;\">Deciduous woodland, public access</p></div>",
      "label": "Woodland Fill Card",
      "note": "Card with woodland green border and subtle paper grain simulation (applied globally via CSS)."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Square input field with pale buff background, peachy border, and magenta bottom border on focus.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body, Inter); font-size: 14px; font-weight: 500; color: var(--on-bg, #000000);\">Search location</label><input type=\"text\" placeholder=\"e.g. ST 123 456\" style=\"background: var(--bg, #F5EBD9); border: 1px solid var(--border, #E8C3A8); border-bottom: 2px solid var(--border, #E8C3A8); padding: var(--spacing-sm, 8px); border-radius: var(--radius-input, 0px); font-family: var(--font-body, Inter); font-size: 14px; color: var(--on-bg, #000000); outline: none;\" onfocus=\"this.style.borderBottomColor='var(--primary, #B36DAE)'\"/></div>",
      "label": "Text Input",
      "stateLabel": "Square input field with pale buff background, peachy border, and magenta bottom border on focus."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Dropdown styled with map-like grid border and square corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body, Inter); font-size: 14px; font-weight: 500; color: var(--on-bg, #000000);\">Scale</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--bg, #F5EBD9); border: 1px solid var(--border, #E8C3A8); padding: var(--spacing-sm, 8px); border-radius: var(--radius-input, 0px); font-family: var(--font-body, Inter); font-size: 14px; color: var(--on-bg, #000000);\"><option>1:25,000</option><option>1:50,000</option></select></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Dropdown styled with map-like grid border and square corners."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with peachy border and magenta check mark (using CSS appearance: none).",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body, Inter); font-size: 14px; color: var(--on-bg, #000000);\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 16px; height: 16px; border: 1px solid var(--border, #E8C3A8); border-radius: 0; background: var(--bg, #F5EBD9); cursor: pointer; accent-color: var(--primary, #B36DAE);\" /> Show contour lines</label>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with peachy border and magenta check mark (using CSS appearance: none)."
    }
  ],
  "extraComponents": [
    {
      "name": "Metric Cell",
      "desc": "Data display cell with pale buff background, magenta bottom border, label and value, plus delta indicator.",
      "html": "<div style=\"background: var(--bg, #F5EBD9); border-bottom: 2px solid var(--primary, #B36DAE); padding: var(--spacing-sm, 8px); border-radius: var(--radius-default, 0px); display: flex; flex-direction: column; font-family: var(--font-body, Inter);\"><span style=\"font-size: 12px; font-weight: 500; text-transform: uppercase; color: var(--primary, #B36DAE);\">Elevation Gain</span><span style=\"font-size: 24px; font-weight: 700; color: var(--on-bg, #000000);\">342 m</span><span style=\"font-family: monospace; font-size: 14px; color: var(--ok, #C3D3A5);\">▲ +12 m</span></div>"
    },
    {
      "name": "Status Cell",
      "desc": "Border-only status indicator with text color and border in status colour. Error variant rotated ±1deg.",
      "html": "<div style=\"border: 2px solid var(--err, #B36DAE); border-radius: var(--radius-default, 0px); padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px); display: inline-flex; align-items: center; gap: 4px; transform: rotate(1deg); font-family: var(--font-body, Inter); font-size: 14px; color: var(--err, #B36DAE);\"><span>◆</span> Path blocked</div>"
    },
    {
      "name": "Road Number Badge",
      "desc": "Square badge for road classification. A-road uses peachy grid-line colour; B-road uses white (on-primary).",
      "html": "<div style=\"display: inline-block; background: var(--primary); border: 1px solid var(--on-bg, #000000); border-radius: var(--radius-default, 0px); padding: 2px 6px; font-family: var(--font-body, Inter); font-size: 14px; font-weight: 700; text-transform: uppercase; color: var(--on-bg, #000000);\">A30</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — EXPLORER 1:25,000</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — Trig Point 247 m</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Bridleway</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Footpath follows the contour line to the summit. Rights of way marked with green dashes.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — GRID REF: ST 123 456</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners on any component — breaks the rigid, printed map aesthetic.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background: #F5EBD9; border: 1px solid #B36DAE; padding: 8px;\">Rounded Button</button>",
        "label": "Avoid"
      },
      "rule": "Rounded corners on any component — breaks the rigid, printed map aesthetic.",
      "do": {
        "label": "Do",
        "html": "<button style=\"border-radius: 0; background: #F5EBD9; border: 2px solid #B36DAE; padding: 8px; font-family: Inter; font-weight: 700;\">Square Button</button>"
      }
    },
    {
      "desc": "Pure white backgrounds — map base is always pale buff (#F5EBD9).",
      "avoid": {
        "html": "<div style=\"background: #FFFFFF; padding: 16px;\">White card</div>",
        "label": "Avoid"
      },
      "rule": "Pure white backgrounds — map base is always pale buff (#F5EBD9).",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: #F5EBD9; padding: 16px; border: 1px solid #E8C3A8;\">Buff card</div>"
      }
    },
    {
      "desc": "Serif typography — the map uses sans-serif for clarity and legibility.",
      "avoid": {
        "html": "<p style=\"font-family: 'Georgia', serif; font-size: 16px;\">Serif body text</p>",
        "label": "Avoid"
      },
      "rule": "Serif typography — the map uses sans-serif for clarity and legibility.",
      "do": {
        "label": "Do",
        "html": "<p style=\"font-family: Inter, sans-serif; font-size: 16px;\">Sans-serif body text</p>"
      }
    },
    {
      "rule": "Maintain the system binary: accent-structured specificity, never generic neutral UI.",
      "do": {
        "label": "System-specific cue",
        "html": "<div style=\"background: #F5EBD9; border: 2px solid #B36DAE; padding: 8px; font-family: Inter; font-size: 14px;\">OS Explorer Panel</div>"
      },
      "avoid": {
        "label": "Generic soft card",
        "html": "<div style=\"background: #f4f4f4; border-radius: 14px; box-shadow: 0 8px 24px rgba(0,0,0,.12); padding: 16px;\">Generic card</div>"
      }
    }
  ],
  "doAvoidStyle": {},
  "effects": [],
  "motion": [],
  "colors": {
    "land-base": "#F5EBD9",
    "contour-line": "#B36DAE",
    "woodland-fill": "#C3D3A5",
    "water-fill": "#5B7FAE",
    "grid-line": "#E8C3A8",
    "on-surface": "#000000",
    "on-primary": "#FFFFFF",
    "ok": "#C3D3A5",
    "warn": "#E8C3A8",
    "err": "#B36DAE",
    "delta-up": "#C3D3A5",
    "delta-down": "#B36DAE",
    "delta-flat": "#E8C3A8"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "headline": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "24px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "title": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "18px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "OS EXPLORER 1:25,000",
      "heroHeadline": "Terrain Intelligence Platform",
      "heroSub": "Navigate rugged terrain with authoritative British cartographic precision. Pale buff land base, magenta contour lines, paper grain overlay — every detail from the printed sheet.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#F5EBD9;color:#B36DAE;border:2px solid #B36DAE;border-radius:0;padding:8px;font-family:Inter;font-weight:700;\">EXPLORE SHEET</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#E68A2E;border:2px solid #E68A2E;border-radius:0;padding:8px;font-family:Inter;font-weight:500;\">VIEW LEGEND</button>",
      "navLinks": [
        "GRID",
        "CONTOUR",
        "WAYPOINT",
        "TERRAIN",
        "LEGEND"
      ],
      "features": [
        {
          "title": "Trig Point Markers",
          "desc": "Interactive ▲ symbols with spot-height popups, hover scale 1.1, magenta contour borders.",
          "icon": "⛰️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⛰️ Trig Point Markers</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Interactive ▲ symbols with spot-height popups, hover scale 1.1, magenta contour borders.</div></div>"
        },
        {
          "title": "Scale Bar & Grid",
          "desc": "1 km orange grid (#E8C3A8) and alternating black/white scale bar for distance measurement.",
          "icon": "📏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📏 Scale Bar & Grid</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">1 km orange grid (#E8C3A8) and alternating black/white scale bar for distance measurement.</div></div>"
        },
        {
          "title": "Contour Analysis",
          "desc": "Magenta (#B36DAE) line strokes with metric-cell gauge showing elevation deltas in woodland green.",
          "icon": "〰️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">〰️ Contour Analysis</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Magenta (#B36DAE) line strokes with metric-cell gauge showing elevation deltas in woodland green.</div></div>"
        },
        {
          "title": "Status Cells",
          "desc": "Border-colour status indicators: ok (woodland green), warn (grid-line orange), err (contour magenta) with ±1° rotation on error.",
          "icon": "🟢",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🟢 Status Cells</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Border-colour status indicators: ok (woodland green), warn (grid-line orange), err (contour magenta) with ±1° rotation on error.</div></div>"
        },
        {
          "title": "Road Number Badges",
          "desc": "Rectangular A/B-road badges with bold uppercase lettering, black border, square corners.",
          "icon": "🛣️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🛣️ Road Number Badges</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Rectangular A/B-road badges with bold uppercase lettering, black border, square corners.</div></div>"
        }
      ],
      "ctaStripHeadline": "Order Your Survey Sheet",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#F5EBD9;color:#B36DAE;border:2px solid #B36DAE;border-radius:0;padding:8px;font-family:Inter;font-weight:700;\">REQUEST SHEET</button>",
      "sidebarBrand": "OS EXPLORER 1:25K",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "SHEETS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "GRID REFERENCES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CONTOUR INDEX",
          "active": false
        },
        {
          "icon": "◉",
          "label": "WAYPOINTS",
          "active": false
        }
      ],
      "dashboardTitle": "Survey Control Panel",
      "metrics": [
        {
          "label": "Grid References Locked",
          "value": "1,247",
          "delta": "+18",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "Spot Heights Verified",
          "value": "892",
          "delta": "-3",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "Contour Lines Traced",
          "value": "3,104",
          "delta": "+92",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "Waypoints Active",
          "value": "56",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "Footpath Segments",
          "value": "438",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "Elevation Profile — Ridge A to B",
      "panelATitle": "Active Waypoints",
      "panelARows": [
        {
          "label": "Trig Point ST 234 567",
          "value": "342 m",
          "pct": 100
        },
        {
          "label": "Summit Cairn",
          "value": "489 m",
          "pct": 100
        },
        {
          "label": "Bridleway Junction",
          "value": "276 m",
          "pct": 100
        },
        {
          "label": "Water Tank",
          "value": "201 m",
          "pct": 100
        },
        {
          "label": "Church Tower",
          "value": "318 m",
          "pct": 100
        }
      ],
      "panelBTitle": "Status Cells — Grid Squares",
      "panelBCells": [
        {
          "label": "SU 123 456",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "SU 124 456",
          "value": "WARN",
          "state": "warn"
        },
        {
          "label": "SU 125 456",
          "value": "ERR",
          "state": "err"
        },
        {
          "label": "SU 126 456",
          "value": "OK",
          "state": "ok"
        },
        {
          "label": "SU 127 456",
          "value": "OK",
          "state": "warn"
        },
        {
          "label": "SU 128 456",
          "value": "WARN",
          "state": "err"
        },
        {
          "label": "SU 129 456",
          "value": "ERR",
          "state": "ok"
        },
        {
          "label": "SU 130 456",
          "value": "OK",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0 km",
        "1 km",
        "2 km",
        "3 km",
        "4 km",
        "5 km",
        "6 km"
      ],
      "series": [
        {
          "data": [
            250,
            320,
            410,
            480,
            390,
            310,
            260,
            260,
            260,
            260,
            260,
            260
          ],
          "label": "Elevation (m)",
          "axis": "left",
          "color": "#B36DAE"
        },
        {
          "data": [
            4,
            7,
            9,
            6,
            -8,
            -7,
            -5,
            -5,
            -5,
            -5,
            -5,
            -5
          ],
          "label": "Gradient (%)",
          "axis": "right-1",
          "color": "#C3D3A5"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;width:100%;height:100%;min-height:400px;background:#F5EBD9;font-family:var(--font-body),sans-serif;overflow:hidden;'; el.innerHTML = '<div style=\"position:absolute;inset:0;pointer-events:none;\"><svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><defs><pattern id=\"grid-3d37\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"><rect width=\"40\" height=\"40\" fill=\"none\"/><path d=\"M 40 0 L 0 0 0 40\" fill=\"none\" stroke=\"#E8C3A8\" stroke-width=\"1\" opacity=\"0.4\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(#grid-3d37)\"/><line x1=\"10%\" y1=\"10%\" x2=\"10%\" y2=\"20%\" stroke=\"#000\" stroke-width=\"2\"/><polygon points=\"10%,10% 9%,14% 11%,14%\" fill=\"#000\"/><text x=\"12%\" y=\"16%\" font-family=\"var(--font-body),sans-serif\" font-size=\"12\" fill=\"#000\">N</text><rect x=\"70%\" y=\"90%\" width=\"20%\" height=\"6\" fill=\"#000\"/><rect x=\"70%\" y=\"90%\" width=\"10%\" height=\"6\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"70%\" y=\"88%\" font-family=\"var(--font-body),sans-serif\" font-size=\"10\" fill=\"#B36DAE\">0 1 2 km</text><polygon points=\"50%,40% 49%,42% 51%,42%\" fill=\"#B36DAE\" transform=\"scale(1.5) translate(-16%, -13%)\"/><text x=\"52%\" y=\"45%\" font-family=\"var(--font-body),sans-serif\" font-size=\"14\" fill=\"#B36DAE\">▲ 247 m</text></svg></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;padding:24px;background:#F5EBD9;'; el.innerHTML = '<div style=\"border:1px solid #E8C3A8;padding:16px;background:#F5EBD9;border-radius:0;font-family:var(--font-body),sans-serif;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;margin-bottom:8px;\">⛰️ Trig Point Markers</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">Interactive ▲ symbols with spot-height popups, hover scale 1.1, magenta contour borders.</div></div><div style=\"border:1px solid #E8C3A8;padding:16px;background:#F5EBD9;border-radius:0;font-family:var(--font-body),sans-serif;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;margin-bottom:8px;\">📏 Scale Bar & Grid</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">1 km orange grid (#E8C3A8) and alternating black/white scale bar for distance measurement.</div></div><div style=\"border:1px solid #E8C3A8;padding:16px;background:#F5EBD9;border-radius:0;font-family:var(--font-body),sans-serif;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;margin-bottom:8px;\">〰️ Contour Analysis</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">Magenta (#B36DAE) line strokes with metric-cell gauge showing elevation deltas in woodland green.</div></div><div style=\"border:1px solid #E8C3A8;padding:16px;background:#F5EBD9;border-radius:0;font-family:var(--font-body),sans-serif;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;margin-bottom:8px;\">🟢 Status Cells</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">Border-colour status indicators: ok (woodland green), warn (grid-line orange), err (contour magenta) with ±1° rotation on error.</div></div><div style=\"border:1px solid #E8C3A8;padding:16px;background:#F5EBD9;border-radius:0;font-family:var(--font-body),sans-serif;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;margin-bottom:8px;\">🛣️ Road Number Badges</div><div style=\"font-size:12px;line-height:1.55;color:#000;\">Rectangular A/B-road badges with bold uppercase lettering, black border, square corners.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='background:#F5EBD9;padding:16px;font-family:var(--font-body),sans-serif;border:1px solid #E8C3A8;'; el.innerHTML = '<div style=\"margin-bottom:12px;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;\">Active Waypoints</div><div style=\"display:flex;flex-direction:column;gap:4px;margin-top:8px;\"><div style=\"display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #E8C3A8;font-size:14px;\"><span>Trig Point ST 234 567</span><span>342 m</span></div><div style=\"display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #E8C3A8;font-size:14px;\"><span>Summit Cairn</span><span>489 m</span></div><div style=\"display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #E8C3A8;font-size:14px;\"><span>Bridleway Junction</span><span>276 m</span></div><div style=\"display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #E8C3A8;font-size:14px;\"><span>Water Tank</span><span>201 m</span></div><div style=\"display:flex;justify-content:space-between;padding:4px 0;font-size:14px;\"><span>Church Tower</span><span>318 m</span></div></div></div><div style=\"margin-top:16px;\"><div style=\"font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#B36DAE;\">Grid Square Status</div><div style=\"display:flex;flex-wrap:wrap;gap:4px;margin-top:8px;\"><div style=\"border:2px solid #C3D3A5;padding:4px 8px;font-size:12px;\">SU 123 456 OK</div><div style=\"border:2px solid #E8C3A8;padding:4px 8px;font-size:12px;\">SU 124 456 WARN</div><div style=\"border:2px solid #B36DAE;padding:4px 8px;font-size:12px;transform:rotate(1deg);\">SU 125 456 ERR</div><div style=\"border:2px solid #C3D3A5;padding:4px 8px;font-size:12px;\">SU 126 456 OK</div><div style=\"border:2px solid #E8C3A8;padding:4px 8px;font-size:12px;\">SU 127 456 WARN</div><div style=\"border:2px solid #B36DAE;padding:4px 8px;font-size:12px;transform:rotate(1deg);\">SU 128 456 ERR</div><div style=\"border:2px solid #C3D3A5;padding:4px 8px;font-size:12px;\">SU 129 456 OK</div><div style=\"border:2px solid #E8C3A8;padding:4px 8px;font-size:12px;\">SU 130 456 WARN</div></div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText = 'background:#F5EBD9;background-image:repeating-linear-gradient(0deg, #E8C3A8 0px, #E8C3A8 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #E8C3A8 0px, #E8C3A8 1px, transparent 1px, transparent 40px);background-size:40px 40px;'; }",
    "ctaBackground": "function(el) { el.style.cssText = 'background:#F5EBD9;background-image:repeating-linear-gradient(0deg, #E8C3A8 0px, #E8C3A8 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #E8C3A8 0px, #E8C3A8 1px, transparent 1px, transparent 40px);background-size:40px 40px;'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:#E8C3A8;margin:0;padding:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText='background:#F5EBD9;'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;opacity:0.15;background:repeating-radial-gradient(circle at 2px 2px, #5B7FAE 0px, #5B7FAE 1px, transparent 1px, transparent 4px);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var s = '<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"g\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100%\"><stop offset=\"0\" stop-color=\"#B36DAE\" stop-opacity=\"0.8\"/><stop offset=\"1\" stop-color=\"#B36DAE\" stop-opacity=\"0\"/></linearGradient></defs><rect width=\"100%\" height=\"100%\" fill=\"#F5EBD9\"/><path d=\"M 0,' + (20 + (tick % 60)) + ' L 100%,' + (80 + (tick % 30)) + '\" stroke=\"url(#g)\" stroke-width=\"2\" fill=\"none\" opacity=\"0.3\"/><circle cx=\"' + (20 + (tick % 80)) + '%\" cy=\"' + (30 + (tick % 50)) + '%\" r=\"3\" fill=\"#B36DAE\" opacity=\"0.4\"/></svg>'; el.innerHTML = s; }",
  "shadcnTokens": {
    "--color-background": "#F5EBD9",
    "--color-popover": "#F5EBD9",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5EBD9",
    "--color-muted": "#F5EBD9",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#B36DAE",
    "--color-ring": "#B36DAE",
    "--color-primary-foreground": "#1e1e1e",
    "--color-secondary": "#C3D3A5",
    "--color-accent": "#C3D3A5",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#E8C3A8",
    "--color-input": "#E8C3A8",
    "--color-destructive": "#B36DAE"
  },
  "shadcnTokensClassic": {
    "--background": "#F5EBD9",
    "--popover": "#F5EBD9",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5EBD9",
    "--muted": "#F5EBD9",
    "--muted-foreground": "#1A1A1A",
    "--primary": "#B36DAE",
    "--ring": "#B36DAE",
    "--primary-foreground": "#1e1e1e",
    "--secondary": "#C3D3A5",
    "--accent": "#C3D3A5",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#E8C3A8",
    "--input": "#E8C3A8",
    "--destructive": "#B36DAE"
  }
});
