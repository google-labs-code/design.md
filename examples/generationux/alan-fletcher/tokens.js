registerSystem({
  "meta": {
    "name": "Alan Fletcher",
    "tagline": "Geometric wit and visual economy — bold, flat, asymmetrical.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
  },
  "yamlTokens": {
    "name": "Alan Fletcher",
    "colors": {
      "primary": "#E62020",
      "on-primary": "#FFFFFF",
      "secondary": "#0050A0",
      "on-secondary": "#FFFFFF",
      "tertiary": "#FFD100",
      "on-tertiary": "#000000",
      "neutral": "#000000",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "surface-container": "#F5F5F5",
      "outline": "#000000",
      "error": "#C00000"
    },
    "typography": {
      "display": {
        "fontFamily": "Archivo",
        "fontSize": "60px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Archivo",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Archivo",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Archivo",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em",
        "textTransform": "none"
      },
      "label": {
        "fontFamily": "Archivo",
        "fontSize": "14px",
        "fontWeight": 500,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
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
      "page-edge": "32px",
      "section": "32px",
      "component": "24px",
      "icon": "24px",
      "gap-component": "24px",
      "gap-section": "48px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#E62020",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "12px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#E62020",
        "rounded": "{rounded.button}",
        "padding": "12px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "12px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.input}",
        "padding": "12px"
      },
      "punctuation-graphic": {
        "textColor": "#E62020",
        "size": "64px"
      }
    },
    "version": "alpha",
    "description": "A celebration of geometric wit and visual economy. Pairs flat, bold shapes with asymmetrical tension and a wry sense of humor. Visual economy and surprise are paramount.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "",
      "manual_enrichment_required": false,
      "imagery_count": 9,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.vam.ac.uk",
          "count": 5
        },
        {
          "host": "en.wikipedia.org",
          "count": 2
        },
        {
          "host": "designmuseum.org",
          "count": 1
        },
        {
          "host": "web.archive.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Victoria_and_Albert_Museum",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Alan_Fletcher_(graphic_designer)",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://designmuseum.org/",
          "host": "designmuseum.org",
          "institution": "Design Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://web.archive.org/web/20000301000000*/http://www.alanfletcher.com",
          "host": "web.archive.org",
          "institution": "Internet Archive",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted",
        "no_colour_extracted"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#E62020",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0050A0",
    "--on-secondary": "#FFFFFF",
    "--surface": "#FFFFFF",
    "--on-bg-muted": "#666666",
    "--border": "#000000",
    "--error": "#C00000",
    "--font-display": "Inter, sans-serif",
    "--font-body": "Inter, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#E62020",
    "onPrimary": "#FFFFFF",
    "secondary": "#0050A0",
    "onSecondary": "#FFFFFF",
    "tertiary": "#FFD100",
    "onTertiary": "#000000",
    "error": "#C00000",
    "onError": "#FFFFFF",
    "surface": "#FFFFFF",
    "onSurface": "#000000",
    "outline": "#000000",
    "err": "#C00000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#C00000",
    "deltaFlat": "#666666",
    "live": "#C41E1E",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "backgroundColor": "#FFFFFF",
    "fontFamily": "Inter, sans-serif",
    "colorPalette": [
      "#E62020",
      "#0050A0",
      "#FFD100",
      "#000000"
    ],
    "shape": "flat",
    "border": "2px solid #000000",
    "labelStyle": {
      "textTransform": "uppercase",
      "fontWeight": 700
    },
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#666666"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "none",
    "params": {}
  },
  "interactionModel": {
    "hover": {
      "type": "color-shift",
      "animation": "instant (0ms)",
      "effect": "fill and text color swap"
    },
    "focus": {
      "type": "ring",
      "ringWidth": "2px",
      "ringColor": "#000000",
      "offset": "2px"
    },
    "active": {
      "type": "scale-down",
      "transform": "scale(0.95)",
      "duration": "150ms",
      "easing": "ease-out"
    },
    "transition": {
      "duration": "150ms",
      "easing": "ease-out",
      "property": "transform",
      "exempt": "color-swap (0ms)"
    }
  },
  "spacing": {
    "page-edge": "32px",
    "section": "32px",
    "component": "24px",
    "icon": "24px",
    "gap-component": "24px",
    "gap-section": "48px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "flat": true,
    "levels": {
      "0": {
        "shadow": "none",
        "scale": 1
      },
      "1": {
        "shadow": "none",
        "scale": 1
      }
    }
  },
  "dashboardStyle": {
    "layout": "Asymmetric grid with generous white space (>50%). Primary panel occupies left third, secondary panels stacked on the right.",
    "density": "Minimal — each panel contains at most one chart or key metric with a terse label.",
    "panelTreatment": "Flat white panels with hard black borders, no shadow, no rounded corners. Panels are spaced with large gaps.",
    "dataVizStyle": "Flat bar charts and line graphs using only the four-color palette. No gradients, no smoothened curves. Axes are thick black lines with uppercase labels.",
    "signatureElement": "A large punctuation mark (exclamation or question) in primary red acting as a data anomaly indicator or call-out."
  },
  "landingStyle": {
    "heroApproach": "One bold geometric shape (circle, square, triangle) in primary red offset to the left third of the canvas. A single word in display typography placed near the shape to create a visual pun. White space fills >50% of the screen.",
    "scrollBehavior": "Sections reveal with a hard cut (no fade, no slide). Elements snap instantly into place without animation.",
    "ctaStyle": "Primary button in red with white text, placed asymmetrically below the hero verb. No border-radius, no shadow. Hover instantly inverts colors.",
    "signatureMoment": "The first scroll reveals a cutout/figure-ground reversal where white shapes within a red block form the word(s) of a subsequent message."
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; line-height: 1.625; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
  "globalCss": ".ds-layout-frame { box-sizing: border-box; } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { box-sizing: inherit; } .ds-layout-frame .tension-cut { position: relative; display: inline-flex; align-items: center; gap: 0px; } .ds-layout-frame .tension-cut > * { margin: 0; } .ds-layout-frame .visual-pun-container { display: inline-flex; align-items: flex-end; gap: 0px; } .ds-layout-frame .cutout-figure-ground { position: relative; } .ds-layout-frame .punctuation-graphic { font-size: var(--icon-size, 64px); color: var(--primary); line-height: 1; display: inline-block; } .ds-layout-frame .card, .ds-layout-frame button, .ds-layout-frame input, .ds-layout-frame a { border-radius: var(--radius-default); } .ds-layout-frame img, .ds-layout-frame video { display: block; max-width: 100%; }",
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a { cursor: pointer; transition: none; } .ds-layout-frame button:hover, .ds-layout-frame a:hover { background-color: var(--surface) !important; color: var(--primary) !important; } .ds-layout-frame button:active, .ds-layout-frame a:active { transform: scale(0.95); transition: transform 150ms ease-out; } .ds-layout-frame button:focus-visible, .ds-layout-frame a:focus-visible { outline: 2px solid var(--outline); outline-offset: 2px; }",
  "buttons": [
    {
      "name": "primary",
      "desc": "Bold red fill with white text. On hover, instantly swaps to white fill and red text. No border-radius, no shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; padding: 12px 24px; border: 2px solid var(--primary); border-radius: var(--radius-btn); cursor: pointer;\">DO IT</button>",
      "label": "primary",
      "note": "Bold red fill with white text. On hover, instantly swaps to white fill and red text. No border-radius, no shadow."
    },
    {
      "name": "secondary",
      "desc": "Transparent background with bold black text and black border. Hover inverts to solid black fill with white text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--on-bg); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; padding: 12px 24px; border: 2px solid var(--border); border-radius: var(--radius-btn); cursor: pointer;\">TRY IT</button>",
      "label": "secondary",
      "note": "Transparent background with bold black text and black border. Hover inverts to solid black fill with white text."
    },
    {
      "name": "ghost",
      "desc": "No border, transparent background with primary red text. On hover, instantly fills with primary red and white text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); font-family: var(--font-display); font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; padding: 12px 24px; border: none; border-radius: var(--radius-btn); cursor: pointer;\">GO</button>",
      "label": "ghost",
      "note": "No border, transparent background with primary red text. On hover, instantly fills with primary red and white text."
    }
  ],
  "cards": [
    {
      "name": "flat-card",
      "desc": "Pure white card with a hard black border and no shadow. Content aligned off-center with generous white space.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 32px; width: 300px;\"><div style=\"font-family: var(--font-display); font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; margin-bottom: 16px;\">PUN</div><div style=\"font-family: var(--font-body); font-size: 16px; line-height: 1.625;\">A circle and a word. Minimal shapes, maximum wit.</div></div>",
      "label": "flat-card",
      "note": "Pure white card with a hard black border and no shadow. Content aligned off-center with generous white space."
    },
    {
      "name": "accent-card",
      "desc": "Card with a bold red block at the top acting as a figure-ground reversal. White text on red block, black text below.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); width: 300px;\"><div style=\"background-color: var(--primary); color: var(--on-primary); font-family: var(--font-display); font-size: 24px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; padding: 24px 32px;\">?</div><div style=\"padding: 32px; font-family: var(--font-body); font-size: 16px; line-height: 1.625;\">An oversized punctuation mark sets the tone.</div></div>",
      "label": "accent-card",
      "note": "Card with a bold red block at the top acting as a figure-ground reversal. White text on red block, black text below."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Square input with black border and white fill. Label set in uppercase bold. No placeholder decoration.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 300px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-bg);\">NAME</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 12px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg);\"></div>",
      "label": "text-input",
      "stateLabel": "Square input with black border and white fill. Label set in uppercase bold. No placeholder decoration."
    },
    {
      "name": "select",
      "desc": "Dropdown styled as a square input with a minimal arrow. No rounded corners.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 300px;\"><label style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-bg);\">CHOOSE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-input); padding: 12px; font-family: var(--font-body); font-size: 16px; color: var(--on-bg); appearance: none; background-image: url(\\x27data:image/svg+xml;charset=US-ASCII,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\"><path fill=\"%23000000\" d=\"M6 8L0 0h12z\"/></svg>\\x27); background-repeat: no-repeat; background-position: right 12px center; background-size: 12px 8px;\"><option>Option A</option><option>Option B</option></select></div>",
      "label": "select",
      "stateLabel": "Dropdown styled as a square input with a minimal arrow. No rounded corners."
    },
    {
      "name": "checkbox",
      "desc": "Square checkbox with black border. Checked state shows a red solid square with white check mark.",
      "html": "<div style=\"display: flex; align-items: center; gap: 12px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"c1-e4f8\" style=\"width: 24px; height: 24px; border: 2px solid var(--border); border-radius: 0; accent-color: var(--primary);\"><label for=\"c1-e4f8\" style=\"font-family: var(--font-display); font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: -0.025em; color: var(--on-bg);\">AGREE</label></div>",
      "label": "checkbox",
      "stateLabel": "Square checkbox with black border. Checked state shows a red solid square with white check mark."
    }
  ],
  "extraComponents": [
    {
      "name": "punctuation-graphic",
      "desc": "An oversized red exclamation mark used as a visual device. Stands alone or pairs with text for a pun.",
      "html": "<div style=\"display: flex; align-items: center; justify-content: center; width: 80px; height: 80px;\"><span style=\"font-family: var(--font-display); font-size: 64px; font-weight: 700; color: var(--primary); line-height: 1;\">!</span></div>"
    },
    {
      "name": "visual-pun-container",
      "desc": "A composition of a black circle and red text placed nearly touching, creating a pun (e.g., circle as zero).",
      "html": "<div style=\"display: flex; align-items: flex-end; gap: 4px;\"><div style=\"width: 60px; height: 60px; background-color: var(--border); border-radius: 50%;\"></div><span style=\"font-family: var(--font-display); font-size: 36px; font-weight: 700; text-transform: uppercase; color: var(--primary); letter-spacing: -0.025em;\">O</span></div>"
    },
    {
      "name": "tension-cut",
      "desc": "Two elements (a red square and black rectangle) placed with a thin white gap, creating visual tension.",
      "html": "<div style=\"display: flex; gap: 2px;\"><div style=\"width: 48px; height: 48px; background-color: var(--primary);\"></div><div style=\"width: 100px; height: 24px; background-color: var(--border); margin-top: 12px;\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PUNCHLINE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — GEOMETRIC WIT</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — VISUAL ECONOMY</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — A single circle and one word can constitute a complete composition.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — BUTTON LABEL</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never use rounded corners or border-radius. Every edge must be sharp and hard.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px;\">ROUNDED</button>",
        "label": "Avoid"
      },
      "rule": "Never use rounded corners or border-radius. Every edge must be sharp and hard.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--primary);\"></div>"
      }
    },
    {
      "desc": "Never use gradients, drop shadows, or soft shadows. Only flat solid fills.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(red, black); box-shadow: 0 4px 6px #000;\">BAD</div>",
        "label": "Avoid"
      },
      "rule": "Never use gradients, drop shadows, or soft shadows. Only flat solid fills.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never center content perfectly or use symmetrical layouts. Always off-center.",
      "avoid": {
        "html": "<div style=\"display: flex; justify-content: center; align-items: center; height: 100vh;\">SYMMETRICAL</div>",
        "label": "Avoid"
      },
      "rule": "Never center content perfectly or use symmetrical layouts. Always off-center.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Never add decorative borders, frames, or ornaments. Every element must carry meaning.",
      "avoid": {
        "html": "<div style=\"border: 1px solid #ccc; padding: 10px;\"><span style=\"font-size: 24px; color: #999;\">★</span> DECO</div>",
        "label": "Avoid"
      },
      "rule": "Never add decorative borders, frames, or ornaments. Every element must carry meaning.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "Symmetrical layouts, rounded corners, gradients, shadows, decorative borders, more than four colors per composition, dead-center hero, soft edges, any element without conceptual purpose.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#E62020",
    "on-primary": "#FFFFFF",
    "secondary": "#0050A0",
    "on-secondary": "#FFFFFF",
    "tertiary": "#FFD100",
    "on-tertiary": "#000000",
    "neutral": "#000000",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "surface-container": "#F5F5F5",
    "outline": "#000000",
    "error": "#C00000"
  },
  "typography": {
    "display": {
      "fontFamily": "Inter",
      "fontSize": "60px",
      "fontWeight": 700,
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
      "fontSize": "20px",
      "fontWeight": 700,
      "lineHeight": 1.5,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em",
      "textTransform": "none"
    },
    "label": {
      "fontFamily": "Inter",
      "fontSize": "14px",
      "fontWeight": 500,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "GEOMETRIC WIT",
      "heroHeadline": "ONE SHAPE. ONE WORD. NO WASTE.",
      "heroSub": "Every element must carry meaning. Decoration is forbidden.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">MAKE A PUN</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW COMPOSITIONS</button>",
      "navLinks": [
        "SHAPES",
        "GAPS",
        "PUNS",
        "CUTOUTS"
      ],
      "features": [
        {
          "title": "KISSING TENSION",
          "desc": "Two elements nearly touching, communicating through gap.",
          "icon": "◼️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◼️ KISSING TENSION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Two elements nearly touching, communicating through gap.</div></div>"
        },
        {
          "title": "FIGURE-GROUND REVERSAL",
          "desc": "White shape cuts through solid block, creating surprise.",
          "icon": "◻️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◻️ FIGURE-GROUND REVERSAL</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">White shape cuts through solid block, creating surprise.</div></div>"
        },
        {
          "title": "VISUAL PUN CONTAINER",
          "desc": "Group shapes and words to form a wry joke.",
          "icon": "⚫",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚫ VISUAL PUN CONTAINER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Group shapes and words to form a wry joke.</div></div>"
        },
        {
          "title": "OVERSIZED PUNCTUATION",
          "desc": "Use a single ! or ? as the primary graphic.",
          "icon": "❗",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">❗ OVERSIZED PUNCTUATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Use a single ! or ? as the primary graphic.</div></div>"
        }
      ],
      "ctaStripHeadline": "COMPOSE WITH ECONOMY",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START A COMPOSITION</button>",
      "sidebarBrand": "FLETCHER",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "COMPOSITIONS",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TOKENS",
          "active": false
        }
      ],
      "dashboardTitle": "COMPOSITION OVERVIEW",
      "metrics": [
        {
          "label": "ACTIVE COMPOSITIONS",
          "value": "12",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "SHAPES DEPLOYED",
          "value": "34",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PUN COUNT",
          "value": "8",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "WHITE SPACE RATIO",
          "value": "62%",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "SHAPE FREQUENCY",
      "panelATitle": "RECENT PUNS",
      "panelARows": [
        {
          "label": "CIRCLE / 'O'",
          "value": "PUN #1",
          "pct": 1
        },
        {
          "label": "SQUARE / 'BOX'",
          "value": "PUN #2",
          "pct": 2
        },
        {
          "label": "TRIANGLE / 'A'",
          "value": "PUN #3",
          "pct": 3
        },
        {
          "label": "LINE / 'I'",
          "value": "PUN #4",
          "pct": 4
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "TENSION GAPS",
      "panelBCells": [
        {
          "label": "KISSING GAP",
          "value": "2px",
          "state": "ok"
        },
        {
          "label": "TIGHT GAP",
          "value": "4px",
          "state": "warn"
        },
        {
          "label": "STANDARD GAP",
          "value": "8px",
          "state": "err"
        },
        {
          "label": "LOOSE GAP",
          "value": "16px",
          "state": "ok"
        },
        {
          "label": "SECTION GAP",
          "value": "48px",
          "state": "warn"
        },
        {
          "label": "PAGE EDGE",
          "value": "32px",
          "state": "err"
        },
        {
          "label": "COMPONENT GAP",
          "value": "24px",
          "state": "ok"
        },
        {
          "label": "ICON GAP",
          "value": "24px",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "CIRCLE",
        "SQUARE",
        "TRIANGLE",
        "LINE",
        "DOT",
        "RECTANGLE"
      ],
      "series": [
        {
          "data": [
            5,
            3,
            4,
            2,
            6,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ],
          "label": "RED SHAPES",
          "axis": "left",
          "color": "#C41E1E"
        },
        {
          "data": [
            2,
            4,
            1,
            3,
            5,
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ],
          "label": "BLACK SHAPES",
          "axis": "right-1",
          "color": "#0050A0"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:80vh;display:flex;align-items:flex-end;justify-content:flex-start;padding:64px 32px;background-color:#FFFFFF;'; var container = document.createElement('div'); container.style.cssText = 'display:flex;align-items:flex-end;gap:4px;'; var shape = document.createElement('div'); shape.style.cssText = 'width:80px;height:80px;background-color:#E62020;border-radius:50%;'; var word = document.createElement('span'); word.style.cssText = 'font-family:var(--font-display);font-size:60px;font-weight:700;text-transform:uppercase;color:#000000;letter-spacing:-0.025em;line-height:1;'; word.textContent = 'PUN'; container.appendChild(shape); container.appendChild(word); el.appendChild(container); }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:64px 32px;background:#FFFFFF;display:flex;flex-wrap:wrap;gap:48px;'; var pun = document.createElement('div'); pun.innerHTML = '<div class=\"visual-pun-container\" style=\"display:inline-flex;align-items:flex-end;gap:2px;\"><div style=\"width:60px;height:60px;background:#000000;border-radius:50%;\"></div><span style=\"font-family:var(--font-display);font-size:36px;font-weight:700;text-transform:uppercase;color:#E62020;letter-spacing:-0.025em;line-height:1;\">O</span></div>'; var tension = document.createElement('div'); tension.innerHTML = '<div class=\"tension-cut\" style=\"display:flex;gap:2px;\"><div style=\"width:48px;height:48px;background-color:#E62020;\"></div><div style=\"width:100px;height:24px;background-color:#000000;margin-top:12px;\"></div></div>'; el.appendChild(pun); el.appendChild(tension); }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:32px;border:2px solid var(--border);background:#FFFFFF;'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:-0.025em;color:#E62020;margin-bottom:16px;\">RECENT PUNS</div><div style=\"font-family:var(--font-body);font-size:14px;line-height:1.8;\"><div>CIRCLE / O</div><div>SQUARE / BOX</div><div>TRIANGLE / A</div><div>LINE / I</div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText = 'background:#FFFFFF;'; }",
    "ctaBackground": "function(el) { el.style.cssText = 'background:#FFFFFF;'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:2px;background:#000000;width:100%;margin:48px 0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText = 'background:#FFFFFF;'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;pointer-events:none;background:transparent;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var shapes = ['circle','square','triangle']; var words = ['PUN','BOX','A']; var idx = tick % 3; var d = document.createElement('div'); d.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:0.1;'; var shape = document.createElement('div'); if (idx === 0) { shape.style.cssText = 'width:120px;height:120px;background-color:var(--primary);border-radius:50%;'; } else if (idx === 1) { shape.style.cssText = 'width:120px;height:120px;background-color:var(--primary);'; } else { shape.style.cssText = 'width:0;height:0;border-left:60px solid transparent;border-right:60px solid transparent;border-bottom:104px solid var(--primary);'; } var word = document.createElement('span'); word.style.cssText = 'font-family:var(--font-display);font-size:48px;font-weight:700;text-transform:uppercase;color:var(--primary);margin-left:12px;'; word.textContent = words[idx]; d.appendChild(shape); d.appendChild(word); return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#FFFFFF",
    "--color-muted": "#FFFFFF",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#E62020",
    "--color-ring": "#E62020",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#0050A0",
    "--color-accent": "#0050A0",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#C00000"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#FFFFFF",
    "--muted": "#FFFFFF",
    "--muted-foreground": "#666666",
    "--primary": "#E62020",
    "--ring": "#E62020",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#0050A0",
    "--accent": "#0050A0",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#C00000"
  }
});
