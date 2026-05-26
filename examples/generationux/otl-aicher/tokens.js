registerSystem({
  "meta": {
    "name": "Otl Aicher",
    "tagline": "A functionalist, rational design language with geometric pictograms, flat colour fields, strict modular grid, and Univers typography",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Manrope:wght@300;500;700&display=swap"
  },
  "yamlTokens": {
    "name": "Otl Aicher",
    "colors": {
      "primary": "#0085C7",
      "on-primary": "#FFFFFF",
      "secondary": "#F4C300",
      "tertiary": "#009F3D",
      "on-tertiary": "#FFFFFF",
      "error": "#E2001A",
      "on-error": "#FFFFFF",
      "on-surface": "#1A1A1A"
    },
    "typography": {
      "display": {
        "fontFamily": "Manrope, Inter, Arimo, sans-serif",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Manrope, Inter, Arimo, sans-serif",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Manrope, Inter, Arimo, sans-serif",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Manrope, Inter, Arimo, sans-serif",
        "fontSize": "16px",
        "fontWeight": 300,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Manrope, Inter, Arimo, sans-serif",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.375,
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
      "section-internal": "32px",
      "page-edge": "32px",
      "gap-component": "16px",
      "gap-section": "32px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#0085C7",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#0085C7",
        "textColor": "#FFFFFF",
        "padding": "16px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#0085C7",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "textColor": "#1A1A1A",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "input-focus": {
        "textColor": "#1A1A1A",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "pictogram-module": {
        "size": "120px",
        "rounded": "{rounded.default}",
        "padding": "16px"
      },
      "horizontal-colour-bar": {
        "height": "8px"
      }
    },
    "version": "alpha",
    "description": "A functionalist, rational design language rooted in Otl Aicher's 1972 Munich Olympics work — geometric pictograms, bold flat colour fields, strict modular grid, and Univers typography prioritising information hierarchy over decoration.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `otl-aicher` refers to the German graphic designer, typographer, and design educator Otl Aicher (1922–1991), and specifically to the visual identity systems he created — most famously the comprehensive design programme for the 1972 Summer Olympics in Munich, as well as corporate identities for Lufthansa, Braun, ERCO, and the German national railway (Deutsche Bundesba",
      "manual_enrichment_required": false,
      "imagery_count": 3,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/1972_Summer_Olympics",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://www.vam.ac.uk/search?q=braun+otl+aicher",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Otl_Aicher",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Univers",
          "foundry": "Deberny & Peignot/Haas Type Foundry",
          "year": 1954,
          "google_fonts": "Manrope",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Akkzidenz-Grotesk",
          "foundry": "Berthold",
          "year": 1898,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "Frutiger",
          "foundry": null,
          "year": 1976,
          "google_fonts": "Nunito Sans",
          "attestation": "inferred"
        },
        {
          "name": "OLYMPIA wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Pictogram numerals",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Lufthansa wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        "1. **No verified hex values for any Aicher colour.** All hex codes circulating are from secondary inference; need measurement from original printed swatches or the design manual."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0ED",
    "--on-bg": "#1A1A1A",
    "--primary": "#0085C7",
    "--on-primary": "#151515",
    "--secondary-col": "#F4C300",
    "--on-secondary": "#1A1A1A",
    "--surface": "#F5F0ED",
    "--on-bg-muted": "#666666",
    "--border": "#999999",
    "--error": "#E2001A",
    "--font-display": "Manrope",
    "--font-body": "Manrope",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#0085C7",
    "on-primary": "#FFFFFF",
    "secondary": "#F4C300",
    "on-secondary": "#1A1A1A",
    "tertiary": "#009F3D",
    "on-tertiary": "#FFFFFF",
    "error": "#E2001A",
    "on-error": "#FFFFFF",
    "surface": "#F5F0ED",
    "on-surface": "#1A1A1A",
    "err": "#E2001A",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#E2001A",
    "deltaFlat": "#666666",
    "live": "#0085C7",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Manrope"
  },
  "elevation": null,
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none"
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0;",
  "globalCss": null,
  "interactionModel": {
    "hover": {},
    "focus": {},
    "active": {}
  },
  "interactionStyles": null,
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#666666",
    "fontFamily": "Manrope"
  },
  "dashboardStyle": {
    "layout": "Informational dashboard layout on white surface. A thin blue horizontal bar (h-3, full-width) separates header from data region. Below, a 4-column grid displays metric cells: each cell has a blue label line (Univers medium uppercase text-sm tracking-wider) above a large value (Univers bold text-3xl) in near-black. No background fill on cells. Status indicators as small solid circles (8px diameter): green #009F3D for ok, yellow #F4C300 for warn, red #E2001A for err. Bottom-anchored table with horizontal divider lines only (border-b-2 border-outline), no vertical rules. Column headers in Univers medium uppercase text-sm. Data values in Univers light text-base tabular figures flush-left. No charts or visualisations.",
    "density": "Sparse — each module contains at most one dominant element. Whitespace is as important as filled areas.",
    "panelTreatment": "No background fill on panels. Only horizontal dividers for tables.",
    "dataVizStyle": "None — no charts or visualizations. Data is presented as plain values and status dots.",
    "signatureElement": "Thin horizontal blue bar separating header from data region."
  },
  "landingStyle": {
    "heroApproach": "Single modular composition on white or off-white surface. One large primary colour block (Olympic Blue #0085C7) occupies roughly one-third grid width on the left side. Opposite, a pictogram module in square bounding box (120×120 px) showing a geometric icon (circles + rectangles) in solid blue on white, with a label below in Univers medium uppercase text-sm tracking-wider. All elements align to an 8-column grid.",
    "scrollBehavior": "Static — no parallax, no animation. Content reveals in a strict grid as the page scrolls.",
    "ctaStyle": "Primary button in blue fill with uppercase label, placed below the pictogram module.",
    "signatureMoment": "Asymmetric balance: heavy colour block on the left balanced by compact type and icon on the right. Whitespace dominates."
  },
  "buttons": [
    {
      "name": "primary",
      "desc": "Primary action button — bold blue fill, uppercase label, sharp corners.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding: 16px 32px; border: none; border-radius: var(--radius-btn); cursor: pointer;\">ANMELDEN</button>",
      "label": "primary",
      "note": "Primary action button — bold blue fill, uppercase label, sharp corners."
    },
    {
      "name": "secondary-outline",
      "desc": "Secondary action button — transparent with blue outline, uppercase label.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27\" style=\"background: transparent; color: var(--primary); font-family: var(--font-display); font-size: 16px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding: 16px 32px; border: 1px solid var(--primary); border-radius: var(--radius-btn); cursor: pointer;\">WEITERE</button>",
      "label": "secondary-outline",
      "note": "Secondary action button — transparent with blue outline, uppercase label."
    },
    {
      "name": "ghost",
      "desc": "Ghost button — no background, no border, only text. Used for low-emphasis actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27\" style=\"background: transparent; color: var(--primary); font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 16px; border: none; border-radius: var(--radius-btn); cursor: pointer;\">ABBRECHEN</button>",
      "label": "ghost",
      "note": "Ghost button — no background, no border, only text. Used for low-emphasis actions."
    }
  ],
  "cards": [
    {
      "name": "default",
      "desc": "Standard card with white background, no border, no shadow. Content is separated by generous internal padding.",
      "html": "<div style=\"background: white; border-radius: var(--radius-card); padding: 16px; border: none;\"><p style=\"font-family: var(--font-body); font-size: 16px; font-weight: 300; color: var(--on-bg); margin: 0;\">Nur das Wesentliche. Keine Dekoration. Klares Design.</p></div>",
      "label": "default",
      "note": "Standard card with white background, no border, no shadow. Content is separated by generous internal padding."
    },
    {
      "name": "horizontal-bar-card",
      "desc": "Card with a signature blue horizontal colour bar at the top edge, otherwise white.",
      "html": "<div style=\"background: white; border-radius: var(--radius-card); border: none; padding: 0;\"><div style=\"background: var(--primary); height: 8px; width: 100%;\"></div><div style=\"padding: 16px;\"><p style=\"font-family: var(--font-body); font-size: 16px; font-weight: 300; color: var(--on-bg); margin: 0;\">Systematisch und klar.</p></div></div>",
      "label": "horizontal-bar-card",
      "note": "Card with a signature blue horizontal colour bar at the top edge, otherwise white."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Single-line text input with bottom border only, uppercase label, no border-radius.",
      "html": "<div style=\"font-family: var(--font-body);\"><label style=\"display: block; font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary); margin-bottom: 8px;\">NAME</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"display: block; width: 100%; background: transparent; border: none; border-bottom: 2px solid var(--border); padding: 8px 0; font-family: var(--font-body); font-size: 16px; font-weight: 300; color: var(--on-bg); outline: none;\" placeholder=\"Max Mustermann\" /></div>",
      "label": "text-input",
      "stateLabel": "Single-line text input with bottom border only, uppercase label, no border-radius."
    },
    {
      "name": "select",
      "desc": "Dropdown select with similar styling, no border-radius, custom arrow omitted for simplicity.",
      "html": "<div style=\"font-family: var(--font-body);\"><label style=\"display: block; font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary); margin-bottom: 8px;\">SPORTART</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"display: block; width: 100%; background: transparent; border: none; border-bottom: 2px solid var(--border); padding: 8px 0; font-family: var(--font-body); font-size: 16px; font-weight: 300; color: var(--on-bg); outline: none; appearance: none;\"><option>Leichtathletik</option><option>Schwimmen</option><option>Turnen</option></select></div>",
      "label": "select",
      "stateLabel": "Dropdown select with similar styling, no border-radius, custom arrow omitted for simplicity."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with no border-radius, blue when checked via custom appearance, with uppercase label.",
      "html": "<div style=\"font-family: var(--font-body); display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"agree-886f\" style=\"width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 0; appearance: none; cursor: pointer; background: white; margin: 0;\" /> <label for=\"agree-886f\" style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg);\">ZUSTIMMEN</label></div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with no border-radius, blue when checked via custom appearance, with uppercase label."
    }
  ],
  "extraComponents": [
    {
      "name": "pictogram-module",
      "desc": "A square module (120x120px) containing a geometric pictogram built from circles and rectangles, with an uppercase label below. Encapsulates Aicher's iconic visual system.",
      "html": "<div style=\"display: flex; flex-direction: column; align-items: center; gap: 8px;\"><div style=\"width: 120px; height: 120px; background: white; border: 2px solid var(--primary); display: flex; align-items: center; justify-content: center;\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" style=\"fill: var(--primary);\"><rect x=\"10\" y=\"20\" width=\"60\" height=\"40\" /><circle cx=\"40\" cy=\"40\" r=\"15\" fill=\"white\" /></svg></div><span style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: var(--on-bg);\">LAUFEN</span></div>"
    },
    {
      "name": "horizontal-colour-bar",
      "desc": "Full-width thin horizontal bar in primary blue, used to separate sections.",
      "html": "<div style=\"width: 100%; height: 8px; background: var(--primary);\"></div>"
    },
    {
      "name": "badge",
      "desc": "Small inline badge with background color, uppercase text, no border-radius.",
      "html": "<span style=\"display: inline-block; background: var(--secondary-col); color: var(--on-secondary); font-family: var(--font-display); font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; padding: 2px 8px; border-radius: var(--radius-chip);\">NEU</span>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — MÜNCHEN 1972</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — OLYMPISCHE SPIELE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — Sportarten</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Die Piktogramme sind aus geometrischen Grundformen aufgebaut.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — Piktogramm</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Gradients, shadows, and textures break the flat vector purity. This button uses a gradient background and drop shadow, which are forbidden.",
      "avoid": {
        "html": "<button style=\"background: linear-gradient(135deg, var(--primary), #0066aa); color: white; border: none; border-radius: 4px; padding: 16px 32px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);\">NICHT ERLAUBT</button>",
        "label": "Avoid"
      },
      "rule": "Gradients, shadows, and textures break the flat vector purity. This button uses a gradient background and drop shadow, which are forbidden.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Rounded corners are never used. This card has border-radius applied, violating the sharp 90° rule.",
      "avoid": {
        "html": "<div style=\"background: white; border-radius: 8px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);\"><p>Abgerundete Ecken vermeiden.</p></div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners are never used. This card has border-radius applied, violating the sharp 90° rule.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Italic, centered text, and more than five hues per composition are forbidden. This example combines all three.",
      "avoid": {
        "html": "<div style=\"text-align: center; font-style: italic; color: var(--error); background: linear-gradient(to right, var(--primary), var(--secondary-col)); padding: 20px;\"><p>Falsche Ausrichtung und Farbsättigung.</p></div>",
        "label": "Avoid"
      },
      "rule": "Italic, centered text, and more than five hues per composition are forbidden. This example combines all three.",
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
  "doAvoidStyle": "Never use gradients, shadows, rounded corners, italic, centered text, or more than five hues per composition.",
  "effects": null,
  "motion": [],
  "colors": {
    "primary": "#0085C7",
    "on-primary": "#FFFFFF",
    "secondary": "#F4C300",
    "on-secondary": "#1A1A1A",
    "tertiary": "#009F3D",
    "on-tertiary": "#FFFFFF",
    "error": "#E2001A",
    "on-error": "#FFFFFF",
    "surface": "#F5F0ED",
    "on-surface": "#1A1A1A",
    "outline": "#999999"
  },
  "typography": {
    "display": {
      "fontFamily": "Manrope, Inter, Arimo, sans-serif",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Manrope, Inter, Arimo, sans-serif",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Manrope, Inter, Arimo, sans-serif",
      "fontSize": "20px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "Manrope, Inter, Arimo, sans-serif",
      "fontSize": "16px",
      "fontWeight": 300,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Manrope, Inter, Arimo, sans-serif",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "0.05em",
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
    "gap-component": "16px",
    "gap-section": "32px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "GEOMETRIC / FUNCTIONAL",
      "heroHeadline": "OLYMPIA GRID / VENUE COMMAND",
      "heroSub": "A RATIONAL INTERFACE FOR EVENT LOGISTICS",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0085C7; color:white; padding:16px; border:none; text-transform:uppercase; font-family:Manrope, Inter, Arimo, sans-serif; font-weight:500; font-size:14px; letter-spacing:0.05em;\">ENTER GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent; color:#0085C7; padding:16px; border:2px solid #0085C7; text-transform:uppercase; font-family:Manrope, Inter, Arimo, sans-serif; font-weight:500; font-size:14px; letter-spacing:0.05em;\">VIEW PICTOGRAMS</button>",
      "navLinks": [
        "GRID",
        "PICTOGRAMS",
        "DISCIPLINES",
        "MODULES"
      ],
      "features": [
        {
          "title": "MODULAR GRID",
          "desc": "Every element aligns to an 8-column modular grid. Nothing floats free.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Every element aligns to an 8-column modular grid. Nothing floats free.</div></div>"
        },
        {
          "title": "PICTOGRAM LIBRARY",
          "desc": "Geometric icons built from 2–4 primitive shapes within a consistent bounding box.",
          "icon": "🔵",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔵 PICTOGRAM LIBRARY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Geometric icons built from 2–4 primitive shapes within a consistent bounding box.</div></div>"
        },
        {
          "title": "FLAT COLOR FIELDS",
          "desc": "Pure hues on white — no gradients, no shadows, no texture.",
          "icon": "⬜",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬜ FLAT COLOR FIELDS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Pure hues on white — no gradients, no shadows, no texture.</div></div>"
        },
        {
          "title": "UNIVERS TYPOGRAPHY",
          "desc": "Flush-left, ragged-right, uppercase labels. No italic, no centering.",
          "icon": "📏",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📏 UNIVERS TYPOGRAPHY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Flush-left, ragged-right, uppercase labels. No italic, no centering.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD WITH RATIONAL PRECISION",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#0085C7; color:white; padding:16px; border:none; text-transform:uppercase; font-family:Manrope, Inter, Arimo, sans-serif; font-weight:500; font-size:14px; letter-spacing:0.05em;\">START MODULE</button>",
      "sidebarBrand": "OLYMPIA",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "VENUES",
          "active": false
        }
      ],
      "dashboardTitle": "MUNICH COMMAND",
      "metrics": [
        {
          "label": "EVENTS",
          "value": "36",
          "delta": "+4",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "VENUES",
          "value": "12",
          "delta": "0",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ATHLETES",
          "value": "7 154",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PICTOGRAMS",
          "value": "128",
          "delta": "+16",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "DISCIPLINE ALLOCATION",
      "panelATitle": "EVENT SCHEDULE",
      "panelARows": [
        {
          "label": "OPENING",
          "value": "26 AUG",
          "pct": 26
        },
        {
          "label": "TRACK",
          "value": "48 HEATS",
          "pct": 48
        },
        {
          "label": "FIELD",
          "value": "24 FINALS",
          "pct": 24
        },
        {
          "label": "WATER",
          "value": "16 RACES",
          "pct": 16
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "PICTOGRAM INDEX",
      "panelBCells": [
        {
          "label": "SWIM",
          "value": "M-01",
          "state": "ok"
        },
        {
          "label": "RUN",
          "value": "M-02",
          "state": "warn"
        },
        {
          "label": "JUMP",
          "value": "M-03",
          "state": "err"
        },
        {
          "label": "THROW",
          "value": "M-04",
          "state": "ok"
        },
        {
          "label": "CYCLE",
          "value": "M-05",
          "state": "warn"
        },
        {
          "label": "ROW",
          "value": "M-06",
          "state": "err"
        },
        {
          "label": "FENCE",
          "value": "M-07",
          "state": "ok"
        },
        {
          "label": "SAIL",
          "value": "M-08",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "RUN",
        "THROW",
        "JUMP",
        "SWIM",
        "CYCLE",
        "ROW"
      ],
      "series": [
        {
          "data": [
            12,
            8,
            5,
            10,
            7,
            3,
            3,
            3,
            3,
            3,
            3,
            3
          ],
          "label": "VENUE A",
          "axis": "left",
          "color": "#0085C7"
        },
        {
          "data": [
            9,
            6,
            4,
            8,
            6,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ],
          "label": "VENUE B",
          "axis": "right-1",
          "color": "#F4C300"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;align-items:stretch;min-height:360px;background:var(--bg);'; var left = document.createElement('div'); left.style.cssText = 'flex:0 0 33.333%;background:var(--primary);'; var right = document.createElement('div'); right.style.cssText = 'flex:1;padding:32px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;'; var picto = document.createElement('div'); picto.style.cssText = 'width:120px;height:120px;border:2px solid var(--primary);display:flex;align-items:center;justify-content:center;'; var svg = document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('width','80'); svg.setAttribute('height','80'); svg.setAttribute('viewBox','0 0 80 80'); svg.style.fill = 'var(--primary)'; var rect = document.createElementNS('http://www.w3.org/2000/svg','rect'); rect.setAttribute('x','10'); rect.setAttribute('y','20'); rect.setAttribute('width','60'); rect.setAttribute('height','40'); var circle = document.createElementNS('http://www.w3.org/2000/svg','circle'); circle.setAttribute('cx','40'); circle.setAttribute('cy','40'); circle.setAttribute('r','15'); circle.setAttribute('fill','white'); svg.appendChild(rect); svg.appendChild(circle); picto.appendChild(svg); var label = document.createElement('span'); label.textContent = 'LAUFEN'; label.style.cssText = 'font-family:var(--font-display);font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg);margin-top:8px;'; right.appendChild(picto); right.appendChild(label); el.appendChild(left); el.appendChild(right); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:32px;background:var(--bg);'; var features = [{\"title\":\"MODULAR GRID\",\"desc\":\"Every element aligns to an 8-column modular grid. Nothing floats free.\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📐 MODULAR GRID</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Every element aligns to an 8-column modular grid. Nothing floats free.</div></div>\"},{\"title\":\"PICTOGRAM LIBRARY\",\"desc\":\"Geometric icons built from 2–4 primitive shapes within a consistent bounding box.\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🔵 PICTOGRAM LIBRARY</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Geometric icons built from 2–4 primitive shapes within a consistent bounding box.</div></div>\"},{\"title\":\"FLAT COLOR FIELDS\",\"desc\":\"Pure hues on white — no gradients, no shadows, no texture.\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">⬜ FLAT COLOR FIELDS</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Pure hues on white — no gradients, no shadows, no texture.</div></div>\"},{\"title\":\"UNIVERS TYPOGRAPHY\",\"desc\":\"Flush-left, ragged-right, uppercase labels. No italic, no centering.\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📏 UNIVERS TYPOGRAPHY</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Flush-left, ragged-right, uppercase labels. No italic, no centering.</div></div>\"}]; var html = ''; for (var i = 0; i < features.length; i++) { html += features[i].cardHtml; } el.innerHTML = html; }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px;font-family:var(--font-body);background:var(--bg);'; var title = document.createElement('div'); title.textContent = 'PICTOGRAM INDEX'; title.style.cssText = 'font-family:var(--font-display);font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);margin-bottom:16px;'; el.appendChild(title); var cells = [{\"label\":\"SWIM\",\"value\":\"M-01\",\"state\":\"ok\"},{\"label\":\"RUN\",\"value\":\"M-02\",\"state\":\"warn\"},{\"label\":\"JUMP\",\"value\":\"M-03\",\"state\":\"err\"},{\"label\":\"THROW\",\"value\":\"M-04\",\"state\":\"ok\"},{\"label\":\"CYCLE\",\"value\":\"M-05\",\"state\":\"warn\"},{\"label\":\"ROW\",\"value\":\"M-06\",\"state\":\"err\"},{\"label\":\"FENCE\",\"value\":\"M-07\",\"state\":\"ok\"},{\"label\":\"SAIL\",\"value\":\"M-08\",\"state\":\"warn\"}]; for (var i = 0; i < cells.length; i++) { var row = document.createElement('div'); row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);'; var left = document.createElement('div'); left.style.cssText = 'display:flex;align-items:center;gap:8px;'; var dot = document.createElement('span'); var dotColor = cells[i].state === 'ok' ? '#009F3D' : cells[i].state === 'warn' ? '#F4C300' : '#E2001A'; dot.style.cssText = 'width:8px;height:8px;border-radius:0;background:' + dotColor + ';display:inline-block;'; var label = document.createElement('span'); label.textContent = cells[i].label; label.style.cssText = 'font-family:var(--font-display);font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg);'; left.appendChild(dot); left.appendChild(label); var val = document.createElement('span'); val.textContent = cells[i].value; val.style.cssText = 'font-family:var(--font-body);font-size:14px;font-weight:300;color:var(--on-bg-muted);'; row.appendChild(left); row.appendChild(val); el.appendChild(row); } }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = '#F4C300'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'width:100%;height:8px;background:var(--primary);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;opacity:0;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var c = document.createElement('div'); c.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;'; var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%'); var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); rect.setAttribute('x', ((tick * 0.5) % 90 + 5).toString()); rect.setAttribute('y', ((tick * 0.7) % 90 + 5).toString()); rect.setAttribute('width', '60'); rect.setAttribute('height', '60'); rect.setAttribute('fill', 'var(--primary)'); rect.setAttribute('opacity', '0.12'); svg.appendChild(rect); c.appendChild(svg); return c; }",
  "shadcnTokens": {
    "--color-background": "#F5F0ED",
    "--color-popover": "#F5F0ED",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#F5F0ED",
    "--color-muted": "#F5F0ED",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#0085C7",
    "--color-ring": "#0085C7",
    "--color-primary-foreground": "#151515",
    "--color-secondary": "#F4C300",
    "--color-accent": "#F4C300",
    "--color-secondary-foreground": "#1A1A1A",
    "--color-accent-foreground": "#1A1A1A",
    "--color-border": "#999999",
    "--color-input": "#999999",
    "--color-destructive": "#E2001A"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0ED",
    "--popover": "#F5F0ED",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#F5F0ED",
    "--muted": "#F5F0ED",
    "--muted-foreground": "#666666",
    "--primary": "#0085C7",
    "--ring": "#0085C7",
    "--primary-foreground": "#151515",
    "--secondary": "#F4C300",
    "--accent": "#F4C300",
    "--secondary-foreground": "#1A1A1A",
    "--accent-foreground": "#1A1A1A",
    "--border": "#999999",
    "--input": "#999999",
    "--destructive": "#E2001A"
  }
});
