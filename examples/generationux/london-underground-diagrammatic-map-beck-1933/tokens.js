registerSystem({
  "meta": {
    "name": "London Underground Diagrammatic Map (Beck 1933)",
    "tagline": "An iconic modernist information design system based on Harry Beck's 1933 topological map of the London Underground",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700&display=swap"
  },
  "yamlTokens": {
    "name": "London Underground Diagrammatic Map (Beck 1933)",
    "colors": {
      "line-red": "#DA291C",
      "line-blue": "#003688",
      "line-yellow": "#FFB300",
      "line-green": "#00853E",
      "line-brown": "#716B3B",
      "line-grey": "#9B9B9B",
      "interchange-fill": "#FFFFFF"
    },
    "typography": {
      "title": {
        "fontFamily": "Barlow Condensed",
        "fontSize": "18px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "line-name": {
        "fontFamily": "Barlow Condensed",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "station-label": {
        "fontFamily": "Barlow Condensed",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Barlow Condensed",
        "fontSize": "12px",
        "fontWeight": 400,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "0px",
      "button": "0px",
      "input": "0px",
      "chip": "0px",
      "full": "9999px"
    },
    "spacing": {
      "component-internal": "4px",
      "section-internal": "16px",
      "page-edge": "24px",
      "between-components": "16px",
      "between-sections": "24px"
    },
    "components": {
      "line": {
        "backgroundColor": "{colors.line-red}",
        "height": "2px"
      },
      "station-tick": {
        "backgroundColor": "#000000",
        "width": "2px",
        "height": "10px"
      },
      "interchange-circle": {
        "backgroundColor": "{colors.interchange-fill}",
        "rounded": "{rounded.full}",
        "size": "16px"
      },
      "legend-box": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "8px"
      },
      "line-name-box": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.default}",
        "padding": "4px"
      },
      "roundel-logo": {
        "backgroundColor": "{colors.line-red}",
        "size": "12px"
      }
    },
    "version": "alpha",
    "description": "Harry Beck's 1933 diagrammatic map of the London Underground reduces the network to pure topology governed by an octilinear grid, sacrificing geographic fidelity for connectivity. The style is rational, orderly, and austere, with every element serving legibility.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "This slug refers to the first diagrammatic pocket map of the London Underground rail network, designed by electrical draughtsman Harry Beck (1902–1974) and published in January 1933 by the London Passenger Transport Board (LPTB). The map abandoned geographic accuracy in favour of a topological schematic: lines run only horizontally, vertically, or at 45° diagonals; stations are spaced uniformly; t",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.ltmuseum.co.uk",
          "count": 2
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Harry_Beck",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.ltmuseum.co.uk/collections",
          "host": "www.ltmuseum.co.uk",
          "institution": "London Transport Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.ltmuseum.co.uk/",
          "host": "www.ltmuseum.co.uk",
          "institution": "London Transport Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "sparse_imagery",
        "no_typography_extracted",
        "no_colour_extracted",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#DA291C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#003688",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#DA291C",
    "--font-display": "'Barlow Condensed', sans-serif",
    "--font-body": "'Barlow Condensed', sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "9999px"
  },
  "semanticColors": {
    "line": {
      "red": "#DA291C",
      "blue": "#003688",
      "yellow": "#FFB300",
      "green": "#00853E",
      "brown": "#716B3B",
      "grey": "#9B9B9B"
    },
    "interchange-fill": "#FFFFFF",
    "river-fill": "#8DA9C4",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#DA291C",
    "deltaUp": "#22C55E",
    "deltaDown": "#DA291C",
    "deltaFlat": "#1A1A1A",
    "live": "#DA291C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Space Grotesk"
  },
  "elevation": "none",
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "feTurbulence",
      "parameters": {
        "baseFrequency": "0.65",
        "numOctaves": 2,
        "type": "fractalNoise"
      },
      "opacity": "0.05 to 0.15",
      "blend": "multiply",
      "color": "monochrome"
    },
    "misregistration": {
      "enabled": true,
      "offset": "0.1-0.3px",
      "opacity": 0.2,
      "blend": "multiply",
      "appliedTo": "colored lines"
    },
    "inkGain": {
      "enabled": true,
      "multiplier": 1.5,
      "appliedAt": "junctions"
    }
  },
  "globalFilter": "<svg><defs><filter id='paper-grain'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' /></filter></defs></svg>",
  "globalBodyCss": "background-color: #FFFFFF; color: #000000; font-family: 'Barlow Condensed', sans-serif;",
  "globalCss": ".ds-layout-frame { position: relative; } .ds-layout-frame * { box-sizing: border-box; margin: 0; padding: 0; }",
  "interactionModel": {
    "hover": {
      "property": "opacity",
      "value": 0.8,
      "transition": "opacity 150ms ease-out"
    },
    "active": {
      "property": "stroke-width",
      "value": "4px",
      "or": "color-change"
    },
    "focus": "none",
    "transition": {
      "duration": "150ms",
      "easing": "ease-out"
    }
  },
  "interactionStyles": ".ds-layout-frame .line { transition: opacity 150ms ease-out; } .ds-layout-frame .line:hover { opacity: 0.8; } .ds-layout-frame .line.selected, .ds-layout-frame .interchange-circle.selected { stroke-width: 4px; } .ds-layout-frame .line.disabled { opacity: 0.3; }",
  "chartStyle": {
    "line": {
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "lineJoin": "miter",
      "lineCap": "butt",
      "pointStyle": "circle",
      "pointRadius": 8,
      "pointFill": "#FFFFFF",
      "pointStroke": "#000000",
      "pointStrokeWidth": 2
    },
    "grid": {
      "show": false
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "'Barlow Condensed', sans-serif"
  },
  "dashboardStyle": {
    "layout": "Octilinear grid-based layout with panels aligned to 0°, 45°, or 90°",
    "density": "Moderate, with ample whitespace between panels",
    "panelTreatment": "White panels with 2px solid black borders, no rounding",
    "dataVizStyle": "Flat, monochromatic data visualizations using the line palette, with station ticks for data points",
    "signatureElement": "A miniature Beck diagram in the header"
  },
  "landingStyle": {
    "heroApproach": "A minimalist hero with a horizontal red line and a single station tick, representing the simplicity of the map",
    "scrollBehavior": "Smooth scroll with snap points at each section",
    "ctaStyle": "A primary button with line-red background, uppercase text, no border",
    "signatureMoment": "Upon scroll, the hero line animates to the full diagrammatic map"
  },
  "buttons": [
    {
      "name": "Primary",
      "desc": "Primary action button using the signature line-red as background, uppercase white text, no border-radius.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 12px; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; border: none; padding: 8px 16px; cursor: pointer; border-radius: var(--radius-btn);\">MAIN LINE</button>",
      "label": "Primary",
      "note": "Primary action button using the signature line-red as background, uppercase white text, no border-radius."
    },
    {
      "name": "Secondary",
      "desc": "Secondary action button using line-blue background, uppercase white text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); font-family: var(--font-display); font-size: 12px; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; border: none; padding: 8px 16px; cursor: pointer; border-radius: var(--radius-btn);\">DISTRICT LINE</button>",
      "label": "Secondary",
      "note": "Secondary action button using line-blue background, uppercase white text."
    },
    {
      "name": "Ghost / Outline",
      "desc": "Ghost button with black border and black uppercase text on transparent background.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); font-family: var(--font-display); font-size: 12px; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; border: 2px solid var(--border); padding: 6px 14px; cursor: pointer; border-radius: var(--radius-btn);\">NORTHERN LINE</button>",
      "label": "Ghost / Outline",
      "note": "Ghost button with black border and black uppercase text on transparent background."
    }
  ],
  "cards": [
    {
      "name": "Station Information Card",
      "desc": "A flat card with a 2px black border, white fill, and condensed uppercase text. No shadows or radius.",
      "html": "<div style=\"background: var(--surface); border: 2px solid var(--border); padding: 16px; border-radius: var(--radius-card); font-family: var(--font-display); color: var(--on-bg);\"><div style=\"font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;\">BAKER STREET</div><div style=\"font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;\">METROPOLITAN · HAMMERSMITH & CITY · CIRCLE · BAKERLOO</div></div>",
      "label": "Station Information Card",
      "note": "A flat card with a 2px black border, white fill, and condensed uppercase text. No shadows or radius."
    },
    {
      "name": "Route Card",
      "desc": "A card displaying a single line segment with a colored bar and station tick marks.",
      "html": "<div style=\"background: var(--surface); border: 2px solid var(--border); padding: 8px; border-radius: var(--radius-card);\"><div style=\"display: flex; align-items: center; gap: 8px; padding: 4px 0;\"><div style=\"width: 40px; height: 2px; background: var(--primary);\"></div><div style=\"width: 2px; height: 10px; background: var(--on-bg);\"></div><span style=\"font-family: var(--font-display); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg);\">QUEEN'S PARK</span></div></div>",
      "label": "Route Card",
      "note": "A card displaying a single line segment with a colored bar and station tick marks."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "A text input with no border-radius, black border, uppercase placeholder, and condensed font.",
      "html": "<div style=\"font-family: var(--font-display); color: var(--on-bg);\"><label style=\"display: block; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 4px;\">STATION</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"ENTER STATION\" style=\"background: var(--surface); border: 2px solid var(--border); padding: 8px; width: 100%; font-family: var(--font-display); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg); border-radius: var(--radius-input); outline: none;\"></div>",
      "label": "Text Input",
      "stateLabel": "A text input with no border-radius, black border, uppercase placeholder, and condensed font."
    },
    {
      "name": "Select / Dropdown",
      "desc": "A dropdown select styled with black border, uppercase text, and a custom arrow using a downward triangle.",
      "html": "<div style=\"font-family: var(--font-display); color: var(--on-bg);\"><label style=\"display: block; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 4px;\">LINE</label><div style=\"position: relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"appearance: none; background: var(--surface); border: 2px solid var(--border); padding: 8px; padding-right: 24px; width: 100%; font-family: var(--font-display); font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg); border-radius: var(--radius-input); cursor: pointer;\"><option>PICCADILLY</option><option>VICTORIA</option><option>JUBILEE</option></select><span style=\"position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none;\">▼</span></div></div>",
      "label": "Select / Dropdown",
      "stateLabel": "A dropdown select styled with black border, uppercase text, and a custom arrow using a downward triangle."
    },
    {
      "name": "Checkbox / Toggle",
      "desc": "A checkbox styled as a small square with a station-tick-like mark when checked.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg); cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 16px; height: 16px; border: 2px solid var(--border); border-radius: var(--radius-default); appearance: none; background: var(--surface); position: relative; cursor: pointer;\" onchange=\"this.style.background = this.checked ? \\x27#000\\x27 : \\x27var(--surface)\\x27\"><span>BAKERLOO LINE</span></label>",
      "label": "Checkbox / Toggle",
      "stateLabel": "A checkbox styled as a small square with a station-tick-like mark when checked."
    }
  ],
  "extraComponents": [
    {
      "name": "Station Tick",
      "desc": "A perpendicular tick mark representing a station on a line. Black, 2px wide, 10px tall.",
      "html": "<div style=\"width: 2px; height: 10px; background: var(--on-bg);\"></div>"
    },
    {
      "name": "Interchange Circle",
      "desc": "A hollow circle (16px diameter) with a 2px black stroke and white fill, used at line intersections.",
      "html": "<div style=\"width: 16px; height: 16px; border: 2px solid var(--border); border-radius: var(--radius-chip); background: var(--surface);\"></div>"
    },
    {
      "name": "Line-Name Box",
      "desc": "A small white box with black border containing a line name, rotated to match line angle (here 0°).",
      "html": "<div style=\"display: inline-block; background: var(--surface); border: 2px solid var(--border); padding: 2px 4px; font-family: var(--font-display); font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--on-bg); border-radius: var(--radius-default);\">CIRCLE</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — LONDON UNDERGROUND</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — CIRCLE LINE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — BAKER STREET</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — CHANGES AT OXFORD CIRCUS FOR THE CENTRAL, VICTORIA, AND BAKERLOO LINES</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — INTERCHANGE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "No curved corners — avoid any border-radius greater than 0 (except interchange circles).",
      "avoid": {
        "html": "<div style=\"border-radius: 8px; background: #fff; border: 2px solid #000; padding: 16px;\">WRONG</div>",
        "label": "Avoid"
      },
      "rule": "No curved corners — avoid any border-radius greater than 0 (except interchange circles).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "No lowercase text — all typography must be uppercase.",
      "avoid": {
        "html": "<span style=\"font-family: var(--font-display); text-transform: lowercase;\">wrong text</span>",
        "label": "Avoid"
      },
      "rule": "No lowercase text — all typography must be uppercase.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "No shadows or 3D effects — the surface is a strict 2D plane.",
      "avoid": {
        "html": "<div style=\"box-shadow: 0 4px 6px rgba(0,0,0,0.1); background: #fff; padding: 16px;\">WRONG</div>",
        "label": "Avoid"
      },
      "rule": "No shadows or 3D effects — the surface is a strict 2D plane.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "No serif or decorative fonts — only a condensed geometric sans-serif is allowed.",
      "avoid": {
        "html": "<span style=\"font-family: 'Times New Roman', serif;\">Wrong text</span>",
        "label": "Avoid"
      },
      "rule": "No serif or decorative fonts — only a condensed geometric sans-serif is allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "",
  "effects": [],
  "motion": [],
  "colors": {
    "line-red": "#DA291C",
    "line-blue": "#003688",
    "line-yellow": "#FFB300",
    "line-green": "#00853E",
    "line-brown": "#716B3B",
    "line-grey": "#9B9B9B",
    "interchange-fill": "#FFFFFF",
    "background": "#FFFFFF",
    "on-background": "#000000"
  },
  "typography": {
    "title": {
      "fontFamily": "var(--font-display)",
      "fontSize": "18px",
      "fontWeight": "300",
      "lineHeight": "1.25",
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "line-name": {
      "fontFamily": "var(--font-display)",
      "fontSize": "12px",
      "fontWeight": "400",
      "lineHeight": "1",
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "station-label": {
      "fontFamily": "var(--font-display)",
      "fontSize": "12px",
      "fontWeight": "300",
      "lineHeight": "1",
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-display)",
      "fontSize": "12px",
      "fontWeight": "400",
      "lineHeight": "1.25",
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px",
    "full": "9999px"
  },
  "spacing": {
    "component-internal": "4px",
    "section-internal": "16px",
    "page-edge": "24px",
    "between-components": "16px",
    "between-sections": "24px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "HARRY BECK 1933",
      "heroHeadline": "OCTILINEAR TOPOLOGY",
      "heroSub": "A NETWORK MAPPED BY CONNECTIVITY, NOT GEOGRAPHY. LINES RUN AT 0°, 45°, OR 90°. STATIONS AS PERPENDICULAR TICKS. INTERCHANGES AS HOLLOW CIRCLES. ALL TEXT BLACK, CONDENSED, UPPERCASE.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW LEGEND</button>",
      "navLinks": [
        "GRID",
        "LINES",
        "STATIONS",
        "ROUTES"
      ],
      "features": [
        {
          "title": "OCTILINEAR GRID",
          "desc": "ALL SEGMENTS AT 0°, 45°, OR 90° ONLY. NO CURVES. NO EXCEPTIONS.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 OCTILINEAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ALL SEGMENTS AT 0°, 45°, OR 90° ONLY. NO CURVES. NO EXCEPTIONS.</div></div>"
        },
        {
          "title": "UNIFORM WEIGHT",
          "desc": "2PX STROKE. ONE COLOUR PER LINE. FLAT AND CONSISTENT.",
          "icon": "📏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📏 UNIFORM WEIGHT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">2PX STROKE. ONE COLOUR PER LINE. FLAT AND CONSISTENT.</div></div>"
        },
        {
          "title": "HOLLOW INTERCHANGES",
          "desc": "INTERCHANGE CIRCLES WITH BLACK OUTLINE, WHITE FILL. PURE TOPOLOGY.",
          "icon": "⭕",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⭕ HOLLOW INTERCHANGES</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">INTERCHANGE CIRCLES WITH BLACK OUTLINE, WHITE FILL. PURE TOPOLOGY.</div></div>"
        },
        {
          "title": "CONDENSED TYPE",
          "desc": "ALL LABELS IN CONDENSED GEOMETRIC SANS, UPPERCASE, WIDE TRACKING. BLACK ONLY.",
          "icon": "🔠",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔠 CONDENSED TYPE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">ALL LABELS IN CONDENSED GEOMETRIC SANS, UPPERCASE, WIDE TRACKING. BLACK ONLY.</div></div>"
        }
      ],
      "ctaStripHeadline": "DEPLOY YOUR NETWORK IN PURE TOPOLOGY",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START MAPPING</button>",
      "sidebarBrand": "OCTILINE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID VIEW",
          "active": true
        },
        {
          "icon": "◉",
          "label": "LINE EDITOR",
          "active": false
        }
      ],
      "dashboardTitle": "NETWORK TOPOLOGY DASHBOARD",
      "metrics": [
        {
          "label": "LINES",
          "value": "6",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "STATIONS",
          "value": "287",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "INTERCHANGES",
          "value": "42",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ROUTE LENGTH (KM)",
          "value": "402",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "DAILY RIDERSHIP BY LINE",
      "panelATitle": "STATION TICK METRICS",
      "panelARows": [
        {
          "label": "TICK WIDTH",
          "value": "2PX",
          "pct": 2
        },
        {
          "label": "TICK HEIGHT",
          "value": "10PX",
          "pct": 10
        },
        {
          "label": "TICK SPACING",
          "value": "16PX",
          "pct": 16
        },
        {
          "label": "TICK ROTATION",
          "value": "0° / 90°",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "INTERCHANGE CIRCLE SPECS",
      "panelBCells": [
        {
          "label": "DIAMETER",
          "value": "16PX",
          "state": "ok"
        },
        {
          "label": "STROKE WIDTH",
          "value": "2PX",
          "state": "warn"
        },
        {
          "label": "FILL",
          "value": "#FFFFFF",
          "state": "err"
        },
        {
          "label": "STROKE",
          "value": "#000000",
          "state": "ok"
        },
        {
          "label": "BORDER RADIUS",
          "value": "9999PX",
          "state": "warn"
        },
        {
          "label": "LINE JOIN",
          "value": "MITER",
          "state": "err"
        },
        {
          "label": "LINE CAP",
          "value": "BUTT",
          "state": "ok"
        },
        {
          "label": "Z-INDEX",
          "value": "1 (FLAT)",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "BAKER ST",
        "OXFORD CIRCUS",
        "BANK",
        "LIVERPOOL ST",
        "KING'S CROSS",
        "VICTORIA"
      ],
      "series": [
        {
          "data": [
            340,
            210,
            180,
            290,
            410,
            330,
            330,
            330,
            330,
            330,
            330,
            330
          ],
          "label": "RED LINE",
          "axis": "left",
          "color": "#DA291C"
        },
        {
          "data": [
            200,
            180,
            240,
            190,
            305,
            220,
            220,
            220,
            220,
            220,
            220,
            220
          ],
          "label": "BLUE LINE",
          "axis": "right-1",
          "color": "#003688"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:240px;display:flex;align-items:center;justify-content:center;background:#FFFFFF;'; el.innerHTML='<div style=\"display:flex;align-items:flex-end;gap:32px;\"><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:120px;height:2px;background:#DA291C;\"></div><div style=\"width:2px;height:10px;background:#000;\"></div><span style=\"font-family:var(--font-display);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#000;\">BAKER ST</span></div><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:2px;height:10px;background:#000;\"></div><span style=\"font-family:var(--font-display);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#000;\">OXFORD CIRCUS</span></div><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:2px;height:10px;background:#000;\"></div><span style=\"font-family:var(--font-display);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#000;\">BANK</span></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='position:relative;min-height:200px;background:#FFFFFF;'; el.innerHTML = '<div style=\"position:relative;width:100%;height:200px;\">' + '<div style=\"position:absolute;top:99px;left:0;right:0;height:2px;background:#DA291C;\"></div>' + '<div style=\"position:absolute;top:0;bottom:0;left:99px;width:2px;background:#003688;\"></div>' + '<div style=\"position:absolute;top:90px;left:100px;width:16px;height:16px;border:2px solid #000;border-radius:50%;background:#FFF;transform:translate(-50%,-50%);\"></div>' + '<div style=\"position:absolute;top:90px;left:60px;width:2px;height:10px;background:#000;\"></div><span style=\"position:absolute;top:85px;left:68px;font-family:var(--font-display);font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:#000;white-space:nowrap;\">BAKER ST</span>' + '</div>'; }",
    "panelCRender": "function(el) { el.style.cssText='background:#FFFFFF;border:2px solid #000;padding:16px;font-family:var(--font-display);font-size:12px;letter-spacing:0.05em;text-transform:uppercase;color:#000;'; el.innerHTML = '<div style=\"margin-bottom:12px;font-weight:700;\">LEGEND</div>' + '<div style=\"display:flex;flex-direction:column;gap:8px;\">' + '<div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:20px;height:2px;background:#DA291C;\"></div><span>BAKERLOO</span></div>' + '<div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:20px;height:2px;background:#003688;\"></div><span>PICCADILLY</span></div>' + '<div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:20px;height:2px;background:#FFB300;\"></div><span>CIRCLE</span></div>' + '<div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:20px;height:2px;background:#00853E;\"></div><span>DISTRICT</span></div>' + '</div>'; }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:2px;background:#000;margin:0;padding:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var svg = document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('width','100%'); svg.setAttribute('height','100%'); svg.style.cssText='position:absolute;inset:0;pointer-events:none;mix-blend-mode:multiply;opacity:0.1;'; var defs = document.createElementNS('http://www.w3.org/2000/svg','defs'); var filter = document.createElementNS('http://www.w3.org/2000/svg','filter'); filter.setAttribute('id','paperGrain'); var feTurb = document.createElementNS('http://www.w3.org/2000/svg','feTurbulence'); feTurb.setAttribute('type','fractalNoise'); feTurb.setAttribute('baseFrequency','0.65'); feTurb.setAttribute('numOctaves','2'); filter.appendChild(feTurb); defs.appendChild(filter); svg.appendChild(defs); var rect = document.createElementNS('http://www.w3.org/2000/svg','rect'); rect.setAttribute('width','100%'); rect.setAttribute('height','100%'); rect.setAttribute('filter','url(#paperGrain)'); rect.setAttribute('fill','none'); svg.appendChild(rect); el.appendChild(svg); }"
  },
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#DA291C",
    "--color-ring": "#DA291C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#003688",
    "--color-accent": "#003688",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#DA291C"
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
    "--primary": "#DA291C",
    "--ring": "#DA291C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#003688",
    "--accent": "#003688",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#DA291C"
  }
});
