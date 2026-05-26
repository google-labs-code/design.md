registerSystem({
  "meta": {
    "name": "Lufthansa 1963 Design Manual (Synthesis)",
    "tagline": "A flat, modular interface language derived from Otl Aicher's 1963 corporate manual for Lufthansa, based on a severe rationalist grid, four-colour palette, and a single grotesque sans-serif typeface in two weights, communicating quiet authority and systemic clarity.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Lufthansa 1963 Design Manual (Synthesis)",
    "colors": {
      "on-primary": "#FFFFFF",
      "on-secondary": "#000000",
      "neutral": "#FFFFFF",
      "on-surface": "#000000",
      "outline": "#000000",
      "on-primary-container": "#FFFFFF",
      "err": "#E00000",
      "delta-down": "#E00000",
      "delta-flat": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Archivo, Inter, Manrope",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Archivo, Inter, Manrope",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Archivo, Inter, Manrope",
        "fontSize": "18px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Archivo, Inter, Manrope",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "normal-case"
      },
      "label": {
        "fontFamily": "Archivo, Inter, Manrope",
        "fontSize": "12px",
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
      "component-internal": "16px",
      "section-internal": "24px",
      "page-edge": "32px",
      "gap-component": "24px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#003366",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px 16px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFCC00",
        "textColor": "{colors.on-secondary}",
        "padding": "8px 16px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#003366",
        "rounded": "{rounded.button}",
        "padding": "8px 16px",
        "height": "40px"
      },
      "button-secondary-hover": {
        "backgroundColor": "#003366",
        "textColor": "{colors.on-primary}",
        "padding": "8px 16px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "{colors.neutral}",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.input}",
        "padding": "8px 12px",
        "height": "40px"
      },
      "input-focus": {
        "backgroundColor": "transparent",
        "rounded": "{rounded.input}",
        "padding": "8px 12px",
        "height": "40px"
      },
      "pictogram-frame": {
        "backgroundColor": "{colors.neutral}",
        "size": "48px",
        "rounded": "{rounded.default}"
      },
      "horizontal-rule": {
        "backgroundColor": "{colors.outline}",
        "height": "1px"
      },
      "crane-logo": {
        "backgroundColor": "{colors.neutral}",
        "size": "40px",
        "rounded": "{rounded.default}"
      },
      "metric-cell": {
        "backgroundColor": "{colors.neutral}"
      },
      "signal-bar": {
        "backgroundColor": "#003366",
        "height": "4px"
      },
      "status-cell": {
        "backgroundColor": "transparent"
      },
      "data-table-row": {
        "backgroundColor": "{colors.neutral}"
      }
    },
    "version": "alpha",
    "description": "A flat, modular interface language derived from Otl Aicher's 1963 corporate manual for Lufthansa, based on a severe rationalist grid, four-colour palette (white, blue, yellow, black), and a single grotesque sans-serif typeface in two weights, communicating quiet authority and systemic clarity.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `lufthansa–aesthetic-corporate-design-manual-1963-otl-aicher` refers to the landmark corporate design manual conceived by Otl Aicher (1922–1991) for Deutsche Lufthansa AG, first published in 1963. The manual codified the airline’s visual identity—colour, typography, logotype, layout grids, and applications—and is widely regarded as one of the most influential examples of German modernist ",
      "manual_enrichment_required": false,
      "imagery_count": 5,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "museum-gestaltung.ch",
          "count": 1
        },
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "www.die-neue-sammlung.de",
          "count": 1
        },
        {
          "host": "www.designmadeingermany.de",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Lufthansa_logos",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "medium"
        },
        {
          "url": "https://museum-gestaltung.ch/de",
          "host": "museum-gestaltung.ch",
          "institution": "Museum für Gestaltung Zürich",
          "confidence_original": "low"
        },
        {
          "url": "https://archive.org/details/?search=Lufthansa+timetable+1964",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.die-neue-sammlung.de/",
          "host": "www.die-neue-sammlung.de",
          "institution": "Die Neue Sammlung, Munich",
          "confidence_original": "low"
        },
        {
          "url": "https://www.designmadeingermany.de/",
          "host": "www.designmadeingermany.de",
          "institution": "Design Made in Germany (blog)",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": "Haas Type Foundry / Linotype",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Times New Roman",
          "foundry": null,
          "year": null,
          "google_fonts": "Tinos",
          "attestation": "unverified"
        }
      ],
      "flags": {},
      "honest_gaps": [
        {
          "\"1. **Colour specifications**": "Exact hex, Pantone, RAL, or proprietary references from the manual are not verified. All values are conventional or inferred.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#003366",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#FFCC00",
    "--on-secondary": "#000000",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#E00000",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "ok": "#003366",
    "warn": "#FFCC00",
    "err": "#E00000",
    "delta-up": "#003366",
    "delta-down": "#E00000",
    "delta-flat": "#000000",
    "deltaUp": "#003366",
    "deltaDown": "#E00000",
    "deltaFlat": "#000000",
    "live": "#003366",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Inter"
  },
  "elevation": {
    "level0": {
      "boxShadow": "none"
    }
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none",
    "params": {}
  },
  "globalFilter": null,
  "globalBodyCss": "background-color: #FFFFFF; color: #000000; font-family: Inter, sans-serif; margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { font-family: var(--font-body); color: var(--on-bg); background-color: var(--bg); } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { box-sizing: border-box; }",
  "interactionModel": {
    "hover": {
      "transition": "none"
    },
    "focus": {
      "outline": "2px solid #FFCC00",
      "outlineOffset": "2px"
    },
    "active": {
      "transition": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame a, .ds-layout-frame button, .ds-layout-frame input, .ds-layout-frame select, .ds-layout-frame textarea { transition: none; } .ds-layout-frame a:focus-visible, .ds-layout-frame button:focus-visible, .ds-layout-frame input:focus-visible { outline: 2px solid #FFCC00; outline-offset: 2px; }",
  "chartStyle": {
    "line": {
      "stroke": "#003366",
      "strokeWidth": 2,
      "fill": "none"
    },
    "dot": {
      "fill": "#003366",
      "r": 3,
      "shape": "square"
    },
    "grid": {
      "stroke": "#000000",
      "strokeWidth": 1,
      "horizontal": true,
      "vertical": false,
      "opacity": 1
    },
    "axis": {
      "label": "12px Inter bold uppercase black",
      "tick": "none"
    },
    "bar": {
      "fill": "#003366",
      "borderRadius": 0
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Inter"
  },
  "dashboardStyle": {
    "layout": "12-column grid system with 32px page-edge margins and 24px gap between components. Header row uses metric-cell components aligned to grid.",
    "density": "Low density – generous white space ensures readability. No background fills on content areas except for structural bars.",
    "panelTreatment": "Flat white panels with no borders or shadows. Horizontal rules (1px black) separate sections. All labels uppercase bold 12px.",
    "dataVizStyle": "Line charts with 2px solid blue lines and square markers. Horizontal grid lines only, 1px black. Bar charts with solid blue fills and 0px border-radius. No fill legends – labels placed inline.",
    "signatureElement": "A single yellow accent element (e.g., inline icon or metric) per dashboard to draw attention without violating palette discipline."
  },
  "landingStyle": {
    "heroApproach": "Full-width primary blue navigation bar (48px height) with white uppercase bold navigation links. Below, a large black all-caps display headline (64px) centered on white background. A thin 1px black rule separates headline from body copy. Crane logo circle (40px, blue stroke on white) positioned top-left.",
    "scrollBehavior": "Instantaneous – no scroll animations or parallax. Content snaps to vertical sections separated by horizontal rules.",
    "ctaStyle": "Primary blue button with all-caps label; hover toggles to yellow background. Secondary outline button for less prominent actions.",
    "signatureMoment": "The crane logo framed in a perfect white circle with a 1pt blue stroke, placed at the top-left of the hero, embodying the brand's geometric precision and restraint."
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "24px",
    "page-edge": "32px",
    "gap-component": "24px",
    "gap-section": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "buttons": [
    {
      "name": "Primary",
      "desc": "Solid blue background with white uppercase bold label. Turns yellow on hover.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; padding: 8px 16px; height: 40px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">BOOK FLIGHT</button>",
      "label": "Primary",
      "note": "Solid blue background with white uppercase bold label. Turns yellow on hover."
    },
    {
      "name": "Secondary",
      "desc": "Transparent background with blue text and a thin black border. Turns solid blue on hover.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background-color: transparent; color: var(--primary); border: 1px solid var(--border); padding: 8px 16px; height: 40px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">CHECK IN</button>",
      "label": "Secondary",
      "note": "Transparent background with blue text and a thin black border. Turns solid blue on hover."
    },
    {
      "name": "Accent (Yellow)",
      "desc": "Solid yellow background with black text. Reserved for high-priority actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'brightness(1.12)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: none; padding: 8px 16px; height: 40px; font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">BOARD NOW</button>",
      "label": "Accent (Yellow)",
      "note": "Solid yellow background with black text. Reserved for high-priority actions."
    }
  ],
  "cards": [
    {
      "name": "Standard Card",
      "desc": "White rectangular card with 24px padding, no border, flat surface.",
      "html": "<div style=\"background-color: var(--bg); padding: 24px; border-radius: 0px; box-shadow: none;\"><div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg); margin-bottom: 8px;\">FLIGHT INFO</div><div style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\">Departure 14:30 · Gate A12</div></div>",
      "label": "Standard Card",
      "note": "White rectangular card with 24px padding, no border, flat surface."
    },
    {
      "name": "Metric Card",
      "desc": "Blue background card for displaying key metrics. White all-caps label and large number.",
      "html": "<div style=\"background-color: var(--primary); padding: 24px; border-radius: 0px; box-shadow: none;\"><div style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-primary); margin-bottom: 8px;\">ON TIME PERFORMANCE</div><div style=\"font-family: var(--font-display); font-size: 36px; font-weight: 700; color: var(--on-primary); letter-spacing: 0.05em;\">94.7%</div></div>",
      "label": "Metric Card",
      "note": "Blue background card for displaying key metrics. White all-caps label and large number."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Transparent input with 1px black border, no rounded corners, uppercase label.",
      "html": "<div><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;\">FLIGHT NUMBER</label><input onfocus=\"this.style.outline='2px solid var(--secondary-col)';this.style.outlineOffset='2px'\" onblur=\"this.style.outline='';this.style.outlineOffset=''\" type=\"text\" style=\"background-color: transparent; border: 1px solid var(--border); border-radius: 0px; padding: 8px 12px; height: 40px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); width: 100%;\" placeholder=\"LH400\"></div>",
      "label": "Text Input",
      "stateLabel": "Transparent input with 1px black border, no rounded corners, uppercase label."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Standard select styled with transparent background and black border, no rounded corners.",
      "html": "<div><label style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;\">DESTINATION</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; border: 1px solid var(--border); border-radius: 0px; padding: 8px 12px; height: 40px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); width: 100%; appearance: none;\"><option>FRANKFURT</option><option>MUNICH</option><option>BERLIN</option></select></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Standard select styled with transparent background and black border, no rounded corners."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with no rounded corners, blue fill when checked, black border.",
      "html": "<label style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg); display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 20px; height: 20px; border: 1px solid var(--border); border-radius: 0px; accent-color: var(--primary);\"> I ACCEPT THE TERMS</label>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with no rounded corners, blue fill when checked, black border."
    }
  ],
  "extraComponents": [
    {
      "name": "Metric Cell",
      "desc": "Numeric value with a label, no background fill, used in dashboards.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><span style=\"font-family: var(--font-display); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg);\">DEPARTURES</span><span style=\"font-family: var(--font-display); font-size: 24px; font-weight: 700; color: var(--primary); letter-spacing: 0.05em;\">42</span></div>"
    },
    {
      "name": "Signal Bar",
      "desc": "A horizontal blue bar indicating a metric value, 4px height.",
      "html": "<div style=\"background-color: var(--primary); height: 4px; width: 100%;\"></div>"
    },
    {
      "name": "Status Cell",
      "desc": "A colored dot indicating status: blue for ok, yellow for warn, red for error.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><span style=\"width: 12px; height: 12px; border-radius: 0px; background-color: var(--primary); display: inline-block;\"></span><span style=\"font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\">ON TIME</span></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — LUFTHANSA</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — FLIGHT STATUS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — DEPARTURE GATE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Your flight LH400 is now boarding at Gate B32.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — FINAL CALL</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners break the exact 90° rule of the system.",
      "avoid": {
        "html": "<div style=\"background-color: var(--bg); padding: 24px; border-radius: 8px; box-shadow: none;\">Rounded card</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners break the exact 90° rule of the system.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows introduce depth, violating the flat model.",
      "avoid": {
        "html": "<button style=\"background-color: var(--primary); color: var(--on-primary); box-shadow: 0 2px 4px rgba(0,0,0,0.2);\">Shadow button</button>",
        "label": "Avoid"
      },
      "rule": "Drop shadows introduce depth, violating the flat model.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Using an extra color (e.g., green) outside the four-color palette.",
      "avoid": {
        "html": "<span style=\"color: #00AA00;\">OK</span>",
        "label": "Avoid"
      },
      "rule": "Using an extra color (e.g., green) outside the four-color palette.",
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
  "layouts": {
    "copy": {
      "heroKicker": "LH 1963 DESIGN SYSTEM",
      "heroHeadline": "SYSTEMATIC FLIGHT MANAGEMENT",
      "heroSub": "A MODULAR INTERFACE FOR AIRLINE OPERATIONS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">INITIATE SEQUENCE</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW GRID</button>",
      "navLinks": [
        "FLIGHT OPERATIONS",
        "FLEET STATUS",
        "ROUTE MAP",
        "MAINTENANCE",
        "CARGO LOG"
      ],
      "features": [
        {
          "title": "FLIGHT SCHEDULER",
          "desc": "Plan and assign aircraft to routes within a modular grid.",
          "icon": "CRANE",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">CRANE FLIGHT SCHEDULER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Plan and assign aircraft to routes within a modular grid.</div></div>"
        },
        {
          "title": "CREW ROSTER",
          "desc": "Manage crew assignments via sharp, rational lists.",
          "icon": "PERSON",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">PERSON CREW ROSTER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Manage crew assignments via sharp, rational lists.</div></div>"
        },
        {
          "title": "MAINTENANCE LOG",
          "desc": "Track mechanical checks and defects in real time.",
          "icon": "WRENCH",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">WRENCH MAINTENANCE LOG</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Track mechanical checks and defects in real time.</div></div>"
        },
        {
          "title": "ROUTE ANALYTICS",
          "desc": "View on-time performance and fuel efficiency metrics.",
          "icon": "CHART",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">CHART ROUTE ANALYTICS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">View on-time performance and fuel efficiency metrics.</div></div>"
        },
        {
          "title": "CARGO MANIFEST",
          "desc": "Record and verify shipment weight and destination.",
          "icon": "BOX",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">BOX CARGO MANIFEST</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Record and verify shipment weight and destination.</div></div>"
        }
      ],
      "ctaStripHeadline": "DEPLOY SYSTEM NOW",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ACTIVATE GRID</button>",
      "sidebarBrand": "LH 1963",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "DASHBOARD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "FLEET",
          "active": false
        }
      ],
      "dashboardTitle": "FLIGHT OPERATIONS CENTER",
      "metrics": [
        {
          "label": "DEPARTURES",
          "value": "12",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ARRIVALS",
          "value": "14",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ON-TIME %",
          "value": "94%",
          "delta": "+3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CANCELLATIONS",
          "value": "1",
          "delta": "-2",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "FUEL INDEX",
          "value": "87.2",
          "delta": "0.0",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "FLEET UTILISATION BY HOUR",
      "panelATitle": "CREW ASSIGNMENTS",
      "panelARows": [
        {
          "label": "CAPTAIN MÜLLER",
          "value": "LH402",
          "pct": 100
        },
        {
          "label": "FIRST OFFICER SCHMIDT",
          "value": "LH202",
          "pct": 100
        },
        {
          "label": "PURSER WEBER",
          "value": "LH310",
          "pct": 100
        },
        {
          "label": "FLIGHT ATTENDANT BECKER",
          "value": "LH105",
          "pct": 100
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "AIRCRAFT STATUS",
      "panelBCells": [
        {
          "label": "D-AIBX",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "D-AICD",
          "value": "MAINTENANCE",
          "state": "warn"
        },
        {
          "label": "D-AIFF",
          "value": "IN FLIGHT",
          "state": "err"
        },
        {
          "label": "D-AIGH",
          "value": "STANDBY",
          "state": "ok"
        },
        {
          "label": "D-AIJK",
          "value": "ACTIVE",
          "state": "warn"
        },
        {
          "label": "D-AIKL",
          "value": "MAINTENANCE",
          "state": "err"
        },
        {
          "label": "D-AILM",
          "value": "IN FLIGHT",
          "state": "ok"
        },
        {
          "label": "D-AIMN",
          "value": "STANDBY",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "00:00",
        "04:00",
        "08:00",
        "12:00",
        "16:00",
        "20:00"
      ],
      "series": [
        {
          "data": [
            2,
            3,
            5,
            4,
            6,
            3,
            3,
            3,
            3,
            3,
            3,
            3
          ],
          "label": "A319",
          "axis": "left",
          "color": "#003366"
        },
        {
          "data": [
            4,
            5,
            7,
            6,
            8,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
          "label": "A320",
          "axis": "right-1",
          "color": "#FFCC00"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;min-height:100vh;background:#FFFFFF;font-family:Inter,sans-serif;'; var nav = document.createElement('div'); nav.style.cssText = 'display:flex;align-items:center;height:48px;padding:0 32px;background:#003366;'; var brand = document.createElement('span'); brand.style.cssText = 'font-family:Inter,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#FFFFFF;margin-right:32px;'; brand.textContent = 'LH 1963'; nav.appendChild(brand); var links = ['FLIGHT OPERATIONS','FLEET STATUS','ROUTE MAP','MAINTENANCE','CARGO LOG']; links.forEach(function(l){ var a = document.createElement('a'); a.style.cssText = 'font-family:Inter,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#FFFFFF;margin-right:24px;text-decoration:none;'; a.textContent = l; nav.appendChild(a); }); el.appendChild(nav); var crane = document.createElement('div'); crane.style.cssText = 'position:absolute;top:16px;left:32px;width:40px;height:40px;border:2px solid #003366;border-radius:50%;background:#FFFFFF;display:flex;align-items:center;justify-content:center;'; var c = document.createElement('span'); c.style.cssText = 'color:#FFCC00;font-size:18px;font-weight:700;'; c.textContent = 'C'; crane.appendChild(c); el.appendChild(crane); var hero = document.createElement('div'); hero.style.cssText = 'padding:80px 32px 48px;text-align:center;'; var h1 = document.createElement('h1'); h1.style.cssText = 'font-family:Inter,sans-serif;font-size:64px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#000000;margin:0 0 16px;'; h1.textContent = 'SYSTEMATIC FLIGHT MANAGEMENT'; hero.appendChild(h1); var rule = document.createElement('hr'); rule.style.cssText = 'border:none;border-top:1px solid #000000;margin:24px auto;width:120px;'; hero.appendChild(rule); var sub = document.createElement('p'); sub.style.cssText = 'font-family:Inter,sans-serif;font-size:16px;font-weight:400;color:#000000;margin:0 0 32px;'; sub.textContent = 'A MODULAR INTERFACE FOR AIRLINE OPERATIONS'; hero.appendChild(sub); var btn1 = document.createElement('button'); btn1.style.cssText = 'background-color:#003366;color:#FFFFFF;border:none;padding:8px 16px;height:40px;font-family:Inter,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;margin-right:16px;'; btn1.textContent = 'INITIATE SEQUENCE'; hero.appendChild(btn1); var btn2 = document.createElement('button'); btn2.style.cssText = 'background-color:transparent;color:#003366;border:1px solid #000000;padding:8px 16px;height:40px;font-family:Inter,sans-serif;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;cursor:pointer;'; btn2.textContent = 'VIEW GRID'; hero.appendChild(btn2); el.appendChild(hero); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:24px;padding:32px;background:#FFFFFF;'; var cards = [\"<div style=\\\"padding:24px;border:1px solid #000000;background:#FFFFFF;font-family:Inter,sans-serif;\\\"><div style=\\\"font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#003366;margin-bottom:8px;\\\">CRANE FLIGHT SCHEDULER</div><div style=\\\"font-size:12px;line-height:1.55;color:#000000;\\\">Plan and assign aircraft to routes within a modular grid.</div></div>\",\"<div style=\\\"padding:24px;border:1px solid #000000;background:#FFFFFF;font-family:Inter,sans-serif;\\\"><div style=\\\"font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#003366;margin-bottom:8px;\\\">PERSON CREW ROSTER</div><div style=\\\"font-size:12px;line-height:1.55;color:#000000;\\\">Manage crew assignments via sharp, rational lists.</div></div>\",\"<div style=\\\"padding:24px;border:1px solid #000000;background:#FFFFFF;font-family:Inter,sans-serif;\\\"><div style=\\\"font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#003366;margin-bottom:8px;\\\">WRENCH MAINTENANCE LOG</div><div style=\\\"font-size:12px;line-height:1.55;color:#000000;\\\">Track mechanical checks and defects in real time.</div></div>\",\"<div style=\\\"padding:24px;border:1px solid #000000;background:#FFFFFF;font-family:Inter,sans-serif;\\\"><div style=\\\"font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#003366;margin-bottom:8px;\\\">CHART ROUTE ANALYTICS</div><div style=\\\"font-size:12px;line-height:1.55;color:#000000;\\\">View on-time performance and fuel efficiency metrics.</div></div>\",\"<div style=\\\"padding:24px;border:1px solid #000000;background:#FFFFFF;font-family:Inter,sans-serif;\\\"><div style=\\\"font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#003366;margin-bottom:8px;\\\">BOX CARGO MANIFEST</div><div style=\\\"font-size:12px;line-height:1.55;color:#000000;\\\">Record and verify shipment weight and destination.</div></div>\"]; cards.forEach(function(html){ var div = document.createElement('div'); div.innerHTML = html; el.appendChild(div); }); }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:#FFFFFF;font-family:Inter,sans-serif;'; var title = document.createElement('div'); title.style.cssText = 'font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#000000;margin-bottom:16px;'; title.textContent = 'FUEL INDEX'; el.appendChild(title); var valueDiv = document.createElement('div'); valueDiv.style.cssText = 'font-size:36px;font-weight:700;letter-spacing:0.05em;color:#003366;margin-bottom:8px;'; valueDiv.textContent = '87.2'; el.appendChild(valueDiv); var deltaDiv = document.createElement('div'); deltaDiv.style.cssText = 'font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#000000;margin-bottom:16px;'; deltaDiv.textContent = '0.0 FLAT'; el.appendChild(deltaDiv); var bar = document.createElement('div'); bar.style.cssText = 'background-color:#003366;height:4px;width:87%;'; el.appendChild(bar); var note = document.createElement('div'); note.style.cssText = 'font-size:12px;font-weight:400;color:#000000;margin-top:16px;'; note.textContent = 'Fuel efficiency index relative to baseline'; el.appendChild(note); }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#003366'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:1px;background:#000000;width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background:transparent;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var patternA = 'repeating-linear-gradient(45deg, #003366 0px, #003366 25px, #FFCC00 25px, #FFCC00 50px)'; var patternB = 'repeating-linear-gradient(45deg, #FFCC00 0px, #FFCC00 25px, #003366 25px, #003366 50px)'; el.style.cssText = 'width:100%;height:100%;background-size:50px 50px;'; if (tick % 2 === 0) { el.style.backgroundImage = patternA; } else { el.style.backgroundImage = patternB; } }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1A1A1A",
    "--color-primary": "#003366",
    "--color-ring": "#003366",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#FFCC00",
    "--color-accent": "#FFCC00",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E00000"
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
    "--primary": "#003366",
    "--ring": "#003366",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#FFCC00",
    "--accent": "#FFCC00",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E00000"
  }
});
