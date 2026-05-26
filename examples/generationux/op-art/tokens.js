registerSystem({
  "meta": {
    "name": "Op Art",
    "tagline": "High‑contrast geometric op art design system — hypnotic black‑and‑white precision",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Op Art",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "inverse-surface": "#000000",
      "inverse-on-surface": "#FFFFFF",
      "outline": "#000000",
      "outline-inverse": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "16px",
        "fontWeight": 700,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "14px",
        "fontWeight": 800,
        "lineHeight": 2,
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
      "component-internal": "8px",
      "section-internal": "16px",
      "page-edge": "0px",
      "gap-component": "8px",
      "gap-section": "16px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "{colors.on-primary}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "button-primary-hover": {
        "backgroundColor": "{colors.on-primary}",
        "textColor": "{colors.primary}",
        "padding": "8px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "card": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px",
        "height": "48px"
      },
      "input-focus": {
        "backgroundColor": "{colors.surface}",
        "textColor": "{colors.on-surface}",
        "rounded": "{rounded.input}",
        "padding": "8px",
        "height": "48px"
      }
    },
    "version": "alpha",
    "description": "A monochrome, high-contrast geometric design system inspired by 1960s op art, using precise vector patterns, moiré effects, and positive/negative reversals to create hypnotic digital interfaces.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `op-art` refers to the Op Art (Optical Art) movement, an abstract geometric art movement that emerged in the mid‑20th century, most active from the early 1960s through the 1970s. The movement was characterised by the systematic use of precise, hard‑edged geometric patterns — often black‑and‑white, sometimes with saturated complementary colours — to produce optical effects of vibration",
      "manual_enrichment_required": false,
      "imagery_count": 5,
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
          "host": "commons.wikimedia.org",
          "count": 1
        },
        {
          "host": "collections.vam.ac.uk",
          "count": 1
        },
        {
          "host": "books.google.co.uk",
          "count": 1
        },
        {
          "host": "www.fondationvasarely.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Op_art",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/Category:Op_art",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://collections.vam.ac.uk/search/?q=op+art+textile",
          "host": "collections.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://books.google.co.uk/books?id=QkIEAAAAMBAJ&redir_esc=y",
          "host": "books.google.co.uk",
          "institution": "Google Books / Life archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.fondationvasarely.org/",
          "host": "www.fondationvasarely.org",
          "institution": "Fondation Vasarely, Aix-en-Provence",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica",
          "foundry": "Linotype",
          "year": 1957,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Univers",
          "foundry": null,
          "year": 1957,
          "google_fonts": "Manrope",
          "attestation": "unknown"
        },
        {
          "name": "Futura",
          "foundry": null,
          "year": 1927,
          "google_fonts": "Jost",
          "attestation": "unverified"
        },
        {
          "name": "Vasarely signature",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "unknown"
        }
      ],
      "flags": [
        "1_rate_limited_urls_pending_retry"
      ],
      "honest_gaps": [
        {
          "\"1. **No colorimetric data** for any canonical work beyond the Vasarely reference. Hex values in this record are *unverified* approximations from reproductions except where tagged [attested]. Resolved by": "spectrophotometric measurement of original artworks.\""
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
    "--secondary-col": "#000000",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#1a1a1a",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "error": "#000000",
    "on-error": "#FFFFFF",
    "info": "#000000",
    "on-info": "#FFFFFF",
    "success": "#000000",
    "on-success": "#FFFFFF",
    "warning": "#000000",
    "on-warning": "#FFFFFF",
    "err": "#000000",
    "ok": "#000000",
    "warn": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#000000",
    "deltaFlat": "#333333",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#333333",
    "chartFont": "Inter"
  },
  "chartStyle": {
    "background": "var(--bg)",
    "color": "var(--on-bg)",
    "fontFamily": "var(--font-body)",
    "grid": {
      "color": "var(--border)",
      "lineWidth": 1,
      "dashArray": []
    },
    "bar": {
      "borderRadius": 0,
      "fill": "solid",
      "pattern": "checkerboard"
    },
    "line": {
      "strokeWidth": 2,
      "curved": false
    },
    "axis": {
      "ticks": {
        "color": "var(--border)",
        "size": 6
      },
      "label": {
        "fontSize": "14px",
        "textTransform": "uppercase",
        "fontWeight": 700
      }
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#333333"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none",
    "params": {}
  },
  "interactionModel": {
    "hover": {
      "filter": "invert(1)",
      "transition": "0ms"
    },
    "active": {
      "transform": "translate(1px, 1px)"
    },
    "focus": {
      "outline": "2px dashed var(--border)",
      "outlineOffset": "2px"
    },
    "transition": "{\"duration\":\"0ms\",\"easing\":\"none\",\"property\":\"background-color, color, border-color\"}"
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "16px",
    "page-edge": "0px",
    "gap-component": "8px",
    "gap-section": "16px",
    "height-sm": "32px",
    "height-md": "48px",
    "height-lg": "64px",
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
    "1": "none",
    "2": "none",
    "3": "none",
    "4": "none",
    "5": "none"
  },
  "dashboardStyle": {
    "layout": "Full-bleed grid of cards with edge-to-edge patterns.",
    "density": "Compact, high-density — 4px spacing unit.",
    "panelTreatment": "Solid black borders (2px), all-caps headers, checkerboard data point markers.",
    "dataVizStyle": "Monochrome bar charts with checkerboard fill, no axis labels except uppercase ticks.",
    "signatureElement": "Moiré background pattern behind dashboard panels, extending to viewport edges."
  },
  "landingStyle": {
    "heroApproach": "Full-bleed geometric pattern (e.g., concentric rings or stripe grid) with centered all-caps display text.",
    "scrollBehavior": "Static sections separated by wavy line or concentric ring dividers. No parallax or motion effects.",
    "ctaStyle": "Inverted button (white on black) on pattern background, with border only on hover.",
    "signatureMoment": "On load, a checkerboard pattern expands from the center to cover the hero area."
  },
  "globalFilter": null,
  "globalBodyCss": "margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { --bg: #FFFFFF; --on-bg: #000000; --primary: #000000; --on-primary: #FFFFFF; --surface: #FFFFFF; --border: #000000; --moire-opacity: 0.05; font-family: 'Inter', sans-serif; } .ds-layout-frame * { border-radius: 0 !important; } @media (prefers-color-scheme: dark) { .ds-layout-frame { --bg: #000000; --on-bg: #FFFFFF; --primary: #000000; --on-primary: #FFFFFF; --surface: #000000; --border: #FFFFFF; --moire-opacity: 0.1; } }",
  "interactionStyles": ".ds-layout-frame [data-pattern-invert]:hover { filter: invert(1); transition: 0ms; } .ds-layout-frame [data-grid-displace]:active { transform: translate(1px, 1px); } .ds-layout-frame :focus { outline: 2px dashed var(--border); outline-offset: 2px; }",
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Solid black background, white text, all-caps. No radius, no shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||'';this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+' ':'')+'invert(1)'\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||''\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--primary); border-radius: 0px; padding: 8px 16px; font-family: var(--font-display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">ENTER</button>",
      "label": "Primary Button",
      "note": "Solid black background, white text, all-caps. No radius, no shadow."
    },
    {
      "name": "Primary Button Hover",
      "desc": "Inverted state: white background, black text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--on-primary); color: var(--primary); border: 2px solid var(--primary); border-radius: 0px; padding: 8px 16px; font-family: var(--font-display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">ENTER</button>",
      "label": "Primary Button Hover",
      "note": "Inverted state: white background, black text."
    },
    {
      "name": "Secondary Button",
      "desc": "Transparent background, black border and text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 2px solid var(--border); border-radius: 0px; padding: 8px 16px; font-family: var(--font-display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\">ESCAPE</button>",
      "label": "Secondary Button",
      "note": "Transparent background, black border and text."
    }
  ],
  "cards": [
    {
      "name": "Moiré Backdrop Card",
      "desc": "Card with overlapping striped pattern creating a moiré effect, no rounded corners.",
      "html": "<div style=\"background: repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(60deg, var(--border) 0px, var(--border) 2px, transparent 2px, transparent 6px); border: 2px solid var(--border); padding: 16px;\"><span style=\"background: var(--surface); padding: 8px; display: inline-block; font-family: var(--font-body); color: var(--on-bg); font-weight: 700;\">MOIRÉ CARD</span></div>",
      "label": "Moiré Backdrop Card",
      "note": "Card with overlapping striped pattern creating a moiré effect, no rounded corners."
    },
    {
      "name": "Checkerboard Accent Card",
      "desc": "Card with a checkerboard pattern as background, hard edges.",
      "html": "<div style=\"background: linear-gradient(45deg, var(--border) 25%, transparent 25%, transparent 75%, var(--border) 75%), linear-gradient(-45deg, var(--border) 25%, transparent 25%, transparent 75%, var(--border) 75%); background-size: 8px 8px; background-position: 0 0, 4px 4px; background-color: var(--surface); border: 2px solid var(--border); padding: 16px; font-family: var(--font-body); color: var(--on-bg); font-weight: 700;\">CHECKERBOARD</div>",
      "label": "Checkerboard Accent Card",
      "note": "Card with a checkerboard pattern as background, hard edges."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Monochrome input with black border, no radius.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;\">INPUT</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background: var(--surface); color: var(--on-bg); border: 2px solid var(--border); border-radius: 0px; padding: 8px; height: 48px; font-family: var(--font-body); font-size: 16px; font-weight: 700; outline: none;\" placeholder=\"TYPE HERE\"></div>",
      "label": "Text Input",
      "stateLabel": "Monochrome input with black border, no radius."
    },
    {
      "name": "Select / Dropdown",
      "desc": "Styled select with custom arrow, all caps label.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;\">SELECT</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); border: 2px solid var(--border); border-radius: 0px; padding: 8px; height: 48px; font-family: var(--font-body); font-size: 16px; font-weight: 700; -webkit-appearance: none; appearance: none; background-image: url(\\x27data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22><polygon points=%2212,16 6,10 18,10%22 fill=%22%23000000%22/></svg>\\x27); background-repeat: no-repeat; background-position: right 8px center; background-size: 16px;\"><option>OPTION 1</option><option>OPTION 2</option></select></div>",
      "label": "Select / Dropdown",
      "stateLabel": "Styled select with custom arrow, all caps label."
    },
    {
      "name": "Toggle Switch",
      "desc": "Square toggle with black knob, no rounding.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 48px; height: 24px; border: 2px solid var(--border); background: var(--surface); border-radius: 0px; position: relative; cursor: pointer;\"><div style=\"width: 20px; height: 20px; background: var(--border); position: absolute; top: 2px; left: 2px;\"></div></div><span style=\"font-family: var(--font-body); font-size: 16px; font-weight: 700; color: var(--on-bg);\">TOGGLE</span></div>",
      "label": "Toggle Switch",
      "stateLabel": "Square toggle with black knob, no rounding."
    }
  ],
  "extraComponents": [
    {
      "name": "Moiré Backdrop",
      "desc": "Full-width decorative pattern with overlapping grids for optical vibration.",
      "html": "<div style=\"width: 100%; height: 200px; background: repeating-linear-gradient(0deg, var(--border) 0px, var(--border) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(60deg, var(--border) 0px, var(--border) 2px, transparent 2px, transparent 6px);\"></div>"
    },
    {
      "name": "Wavy Line Divider",
      "desc": "Sinusoidal wave divider, no fill, stroke-2 black.",
      "html": "<div style=\"width: 100%; height: 20px; background-image: url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%2220%22><path d=%22M0,10 Q25,0 50,10 T100,10%22 stroke=%22%23000000%22 stroke-width=%222%22 fill=%22none%22/></svg>'); background-repeat: repeat-x;\"></div>"
    },
    {
      "name": "Concentric Ring Divider",
      "desc": "Radial pattern of concentric circles as a section divider.",
      "html": "<div style=\"width: 100%; height: 100px; background: radial-gradient(circle, transparent 0px, transparent 10px, var(--border) 10px, var(--border) 12px, transparent 12px, transparent 20px, var(--border) 20px, var(--border) 22px, transparent 22px, transparent 30px, var(--border) 30px, var(--border) 32px, transparent 32px);\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — HYPNOTIC VISION</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — OPTICAL PRECISION</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — PATTERN RECOGNITION</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — The eye dances across the grid, caught in the vibration of black and white.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — ENTER / ESCAPE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never use rounded corners. All radii must be 0px.",
      "avoid": {
        "html": "<button style=\"background: black; color: white; border-radius: 8px; padding: 8px;\">WRONG</button>",
        "label": "Avoid"
      },
      "rule": "Never use rounded corners. All radii must be 0px.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use drop shadows. All elevations must be none.",
      "avoid": {
        "html": "<div style=\"background: white; border: 1px solid black; box-shadow: 2px 2px 4px rgba(0,0,0,0.5);\">WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Never use drop shadows. All elevations must be none.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use gradients or opacity. Only solid black and white.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(to right, gray, white); color: gray;\">WRONG</div>",
        "label": "Avoid"
      },
      "rule": "Never use gradients or opacity. Only solid black and white.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never use midtones or gray. Only pure black (#000000) and white (#FFFFFF).",
      "avoid": {
        "html": "<span style=\"color: #808080;\">WRONG</span>",
        "label": "Avoid"
      },
      "rule": "Never use midtones or gray. Only pure black (#000000) and white (#FFFFFF).",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "forbiddenCss": "border-radius: 0 !important; box-shadow: none; background-image: none; opacity: 1; color: #000000 or #FFFFFF only;"
  },
  "effects": [
    {
      "name": "pattern-invert",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    },
    {
      "name": "grid-displace",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    },
    {
      "name": "moire-scroll",
      "render": "function(el){ el.style.cssText='width:100%;height:100%;background:var(--surface);position:relative;display:flex;align-items:center;justify-content:center;'; var d=document.createElement('div'); d.style.cssText='width:56px;height:56px;background:var(--primary);box-shadow:0 0 14px var(--primary);'; el.appendChild(d); }"
    }
  ],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "inverse-surface": "#000000",
    "inverse-on-surface": "#FFFFFF",
    "outline": "#000000",
    "outline-inverse": "#FFFFFF"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Inter",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Inter",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 700,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 800,
      "lineHeight": 2,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "PRECISION OPTICAL SYSTEM",
      "heroHeadline": "SEE THE VIBRATION",
      "heroSub": "A monochrome geometric design system for creating hypnotic black-and-white interfaces. Zero gradients. Zero shadows. Pure optical effect.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START PATTERNING</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW SPECTRUM</button>",
      "navLinks": [
        "GRID",
        "PATTERN",
        "MOIRÉ",
        "REVERSAL",
        "BLEED"
      ],
      "features": [
        {
          "title": "CHECKERBOARD ENGINE",
          "desc": "Generate precise alternating tiles with exact mathematical spacing. Every module aligns to a 4px grid.",
          "icon": "⬛",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ CHECKERBOARD ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Generate precise alternating tiles with exact mathematical spacing. Every module aligns to a 4px grid.</div></div>"
        },
        {
          "title": "MOIRÉ SIMULATOR",
          "desc": "Overlap grid layers to produce interference patterns. Adjust rotation and frequency in real time.",
          "icon": "🌀",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌀 MOIRÉ SIMULATOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Overlap grid layers to produce interference patterns. Adjust rotation and frequency in real time.</div></div>"
        },
        {
          "title": "POSITIVE/NEGATIVE REVERSAL",
          "desc": "Flip contrast at focal seams to create afterimage effects. Instant toggle between surface and inverse.",
          "icon": "◐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◐ POSITIVE/NEGATIVE REVERSAL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Flip contrast at focal seams to create afterimage effects. Instant toggle between surface and inverse.</div></div>"
        },
        {
          "title": "BLEED-EDGE EXPORT",
          "desc": "Extend patterns beyond canvas bounds with no margins. True zero-gap composition for hypnotic displays.",
          "icon": "⊞",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⊞ BLEED-EDGE EXPORT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Extend patterns beyond canvas bounds with no margins. True zero-gap composition for hypnotic displays.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR OWN OPTICAL INTERFACE",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">GENERATE NOW</button>",
      "sidebarBrand": "OP ART v1.0",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "PATTERN LIBRARY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COMPOSITION RULES",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CONTRAST METRICS",
          "active": false
        }
      ],
      "dashboardTitle": "OPTICAL CALIBRATION DASH",
      "metrics": [
        {
          "label": "VIBRATION INDEX",
          "value": "87.3",
          "delta": "+2.1%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PATTERN DENSITY",
          "value": "64 PPI",
          "delta": "0.0%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CONTRAST RATIO",
          "value": "21:1",
          "delta": "+0.5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "EDGE BLEED",
          "value": "100%",
          "delta": "0.0%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "AFTERIMAGE DURATION",
          "value": "1.8s",
          "delta": "-0.2s",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "SPATIAL FREQUENCY RESPONSE",
      "panelATitle": "ACTIVE PATTERN LAYERS",
      "panelARows": [
        {
          "label": "BASE CHECKERBOARD",
          "value": "4PX MODULE",
          "pct": 4
        },
        {
          "label": "STRIPE OVERLAY",
          "value": "45° ROTATION",
          "pct": 45
        },
        {
          "label": "CONCENTRIC RING",
          "value": "2PX GAP",
          "pct": 2
        },
        {
          "label": "WAVE DISTORTION",
          "value": "0.5HZ",
          "pct": 0.5
        },
        {
          "label": "REVERSAL SEAM",
          "value": "X=240",
          "pct": 100
        }
      ],
      "panelBTitle": "COMPONENT VIBRATION STATS",
      "panelBCells": [
        {
          "label": "MOIRÉ BACKDROP",
          "value": "ACTIVE",
          "state": "ok"
        },
        {
          "label": "CHECKERBOARD TILE",
          "value": "12 REPEATS",
          "state": "warn"
        },
        {
          "label": "WAVY DIVIDER",
          "value": "STROKE 2",
          "state": "err"
        },
        {
          "label": "CONCENTRIC DIVIDER",
          "value": "RADIUS 60",
          "state": "ok"
        },
        {
          "label": "BLEED PATTERN",
          "value": "OFFSET 0",
          "state": "warn"
        },
        {
          "label": "POS/NEG FLIP",
          "value": "ON",
          "state": "err"
        },
        {
          "label": "BUTTON STYLE",
          "value": "SOLID",
          "state": "ok"
        },
        {
          "label": "INPUT STYLE",
          "value": "OUTLINE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "0°",
        "10°",
        "20°",
        "30°",
        "40°",
        "50°"
      ],
      "series": [
        {
          "data": [
            100,
            95,
            80,
            60,
            45,
            30,
            30,
            30,
            30,
            30,
            30,
            30
          ],
          "label": "CONTRAST",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            0,
            20,
            45,
            70,
            85,
            90,
            90,
            90,
            90,
            90,
            90,
            90
          ],
          "label": "VIBRATION",
          "axis": "right-1",
          "color": "#1A1A1A"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"width:100%;height:100%;background-image:radial-gradient(circle, transparent 0px, transparent 10px, #000 10px, #000 12px, transparent 12px, transparent 20px, #000 20px, #000 22px, transparent 22px, transparent 30px, #000 30px, #000 32px, transparent 32px);background-size:64px 64px;background-position:center;display:flex;align-items:center;justify-content:center;\"><div style=\"font-family:var(--font-display);font-size:60px;font-weight:900;line-height:1.25;letter-spacing:-0.025em;text-transform:uppercase;color:#000;background:#fff;padding:8px 24px;border:2px solid #000;\">SEE THE VIBRATION</div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='width:100%;'; var html='<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:8px;padding:16px 0;\">'; html+='<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬛ CHECKERBOARD ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg);\">Generate precise alternating tiles with exact mathematical spacing. Every module aligns to a 4px grid.</div></div>'; html+='<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🌀 MOIRÉ SIMULATOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg);\">Overlap grid layers to produce interference patterns.</div></div>'; html+='<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◐ REVERSAL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg);\">Flip contrast at focal seams.</div></div>'; html+='<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⊞ BLEED</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg);\">Extend patterns beyond canvas.</div></div>'; html+='</div>'; el.innerHTML=html; }",
    "panelCRender": "function(el) { el.style.cssText='width:100%;'; el.innerHTML='<div style=\"padding:16px;border:2px solid var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:14px;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--primary);margin-bottom:16px;\">VIBRATION INDEX</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div><span style=\"font-family:var(--font-body);font-size:11px;text-transform:uppercase;font-weight:700;color:var(--on-bg-muted);\">CURRENT</span><br><span style=\"font-family:var(--font-display);font-size:36px;font-weight:900;color:var(--on-bg);\">87.3</span></div><div><span style=\"font-family:var(--font-body);font-size:11px;text-transform:uppercase;font-weight:700;color:var(--on-bg-muted);\">DELTA</span><br><span style=\"font-family:var(--font-display);font-size:24px;font-weight:700;color:#000;\">+2.1%</span></div></div><div style=\"margin-top:16px;\"><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;color:var(--on-bg);\"><span>PATTERN DENSITY</span><span>64 PPI</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;color:var(--on-bg);\"><span>CONTRAST RATIO</span><span>21:1</span></div><div style=\"display:flex;justify-content:space-between;font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;color:var(--on-bg);\"><span>EDGE BLEED</span><span>100%</span></div></div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText = 'width:100%;height:100%;background: repeating-linear-gradient(60deg, #000 0px, #000 2px, #fff 2px, #fff 8px);'; }",
    "ctaBackground": "function(el) { el.style.cssText = 'width:100%;height:100%;background: repeating-linear-gradient(0deg, #000 0px, #000 4px, #fff 4px, #fff 8px), repeating-linear-gradient(90deg, #000 0px, #000 4px, #fff 4px, #fff 8px);background-size:16px 16px;background-position:0 0, 8px 8px;'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='width:100%;height:20px;background-image:url(data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%2220%22><path d=%22M0,10 Q25,0 50,10 T100,10%22 stroke=%22%23000000%22 stroke-width=%222%22 fill=%22none%22/></svg>);background-repeat:repeat-x;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText = 'width:100%;height:100%;background: repeating-conic-gradient(#fff 0% 25%, #000 25% 50%, #fff 50% 75%, #000 75% 100%) 0 0 / 32px 32px;'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;background: repeating-linear-gradient(45deg, #000 0px, #000 1px, #fff 1px, #fff 3px);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var shift = (tick * 2) % 32; el.style.cssText = 'width:100%;height:100%;background-image: repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 6px), repeating-linear-gradient(0deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 6px); background-size: 32px 32px; background-position: ' + shift + 'px ' + shift + 'px;'; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#1a1a1a",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#1a1a1a",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
