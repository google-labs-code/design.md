registerSystem({
  "meta": {
    "name": "Photocopied Zine",
    "tagline": "Raw, rebellious energy of DIY photocopied zines from the late 20th-century underground",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Space+Mono:wght@400;700&family=Special+Elite&display=swap"
  },
  "yamlTokens": {
    "name": "Photocopied Zine",
    "colors": {
      "primary": "#000000",
      "outline": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "Courier Prime",
        "fontSize": "48px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Courier Prime",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "monospace",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": 1.4,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "monospace",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "monospace",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.4,
        "letterSpacing": "0.08em",
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
      "section-internal": "8px",
      "gap-component": "8px",
      "gap-section": "8px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#000000",
        "textColor": "#F5E6C8",
        "rounded": "{rounded.button}",
        "padding": "0px"
      },
      "card": {
        "backgroundColor": "#F5E6C8",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "#F5E6C8",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "4px"
      },
      "icon": {
        "size": "24px"
      },
      "sticker-chip": {
        "backgroundColor": "#F5E6C8",
        "rounded": "{rounded.chip}",
        "padding": "4px"
      },
      "rubber-stamp": {
        "backgroundColor": "#F5E6C8",
        "rounded": "{rounded.button}",
        "padding": "8px"
      },
      "ransom-note-badge": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px"
      }
    },
    "version": "alpha",
    "description": "This style channels the raw, rebellious energy of DIY photocopied zines from the late 20th‑century underground. Every element looks like it came from a buzzy, slightly broken machine – not a screen. The emotional tone is lo‑fi, confrontational, and tactile.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `photocopied-zine` is ambiguous: it could refer to any zine produced via photocopy, or to a specific zine titled \\\"Photocopied Zine\\\". Without further context, the three providers unanimously interpret it as the generic, emergent visual identity of DIY photocopied zines as produced in North America, Europe, and Australasia from the late 1970s through the 1990s (the peak of the photocopi",
      "manual_enrichment_required": false,
      "imagery_count": 9,
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
          "host": "sanfranciscopubliclibrary.org",
          "count": 1
        },
        {
          "host": "www.lib.uiowa.edu",
          "count": 1
        },
        {
          "host": "www.vam.ac.uk",
          "count": 1
        },
        {
          "host": "www.youtube.com",
          "count": 1
        },
        {
          "host": "www.thamesandhudson.com",
          "count": 1
        },
        {
          "host": "www.gbjones.com",
          "count": 1
        },
        {
          "host": "archive.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://sanfranciscopubliclibrary.org/collections/zine-archive",
          "host": "sanfranciscopubliclibrary.org",
          "institution": "San Francisco Public Library",
          "confidence_original": "high"
        },
        {
          "url": "https://www.lib.uiowa.edu/sc/",
          "host": "www.lib.uiowa.edu",
          "institution": "University of Iowa Special Collections",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.youtube.com/watch?v=example",
          "host": "www.youtube.com",
          "institution": "YouTube",
          "confidence_original": "low"
        },
        {
          "url": "https://www.thamesandhudson.com/",
          "host": "www.thamesandhudson.com",
          "institution": "Thames & Hudson",
          "confidence_original": "low"
        },
        {
          "url": "https://www.gbjones.com/",
          "host": "www.gbjones.com",
          "institution": "Artist website",
          "confidence_original": "medium"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Zine",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Letraset",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://archive.org/search?query=zine+photocopied",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "medium"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Courier",
          "foundry": null,
          "year": null,
          "google_fonts": "Courier Prime",
          "attestation": "conventional"
        },
        {
          "name": "Helvetica Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Futura Extra Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "unverified"
        },
        {
          "name": "Trade Gothic",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo Narrow",
          "attestation": "unverified"
        },
        {
          "name": "Avant Garde Gothic",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "unverified"
        },
        {
          "name": "Compacta",
          "foundry": null,
          "year": null,
          "google_fonts": "Oswald",
          "attestation": "unverified"
        },
        {
          "name": "hand-lettering (marker)",
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
          "\"1. **No single artefact defines the identity.** The slug `photocopied-zine` does not refer to a known individual zine. This record captures a genre, not a single identity. Without a specific title, issue, or creator, the identity lacks a fixed anchor. Resolution": "obtain a named example (e.g., *Cometbus* #58, *Maximum Rocknroll*, *Riot Grrrl*).\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5E6C8",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#F5E6C8",
    "--secondary-col": "#FF1493",
    "--on-secondary": "#000000",
    "--surface": "#F5E6C8",
    "--on-bg-muted": "#191714",
    "--border": "#000000",
    "--error": "#000000",
    "--font-display": "Courier Prime",
    "--font-body": "Space Mono",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#000000",
    "on-primary": "#F5E6C8",
    "secondary": "#FF1493",
    "on-secondary": "#000000",
    "background": "#F5E6C8",
    "text": "#000000",
    "muted": "#1A1A1A",
    "border": "#000000",
    "error": "#000000",
    "success": "#000000",
    "warning": "#000000",
    "err": "#000000",
    "ok": "#000000",
    "warn": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#000000",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Space Mono"
  },
  "chartStyle": {
    "background": "#F5E6C8",
    "lineColor": "#000000",
    "axisColor": "#000000",
    "gridColor": "#000000",
    "dataColors": [
      "#000000",
      "#1A1A1A"
    ],
    "fontFamily": "Space Mono",
    "borderRadius": "0px",
    "thresholdEffect": true,
    "labelColor": "#1A1A1A"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "SVG feTurbulence overlay",
      "baseFrequency": 0.65,
      "numOctaves": 3,
      "blend": "overlay",
      "opacity": 0.12
    },
    "banding": {
      "technique": "repeating-linear-gradient",
      "blend": "multiply",
      "opacity": 0.08
    },
    "halftone": {
      "technique": "CSS radial-gradient",
      "dotSize": "1px",
      "spacing": "5px",
      "blend": "multiply",
      "opacity": 0.3
    },
    "misregistration": {
      "shiftX": "1px",
      "blend": "difference",
      "opacity": 0.2
    },
    "scannerShadow": "{\"technique\":\"linear-gradient\",\"blend\":\"multiply\",\"opacity\":0.06,\"direction\":\"90deg\",\"start\":\"transparent 90%\",\"end\":\"rgba(0,0,0,0.15) 100%\"}"
  },
  "interactionModel": {
    "hover": {
      "cursor": "default",
      "transition": "none",
      "delta": {
        "y": 0,
        "x": 0
      }
    },
    "focus": {
      "outline": "none",
      "boxShadow": "none"
    },
    "active": {
      "transform": "none",
      "transition": "none"
    }
  },
  "spacing": {
    "component-internal": "8px",
    "section-internal": "8px",
    "gap-component": "8px",
    "gap-section": "8px",
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
    "flat": true,
    "levels": {
      "0": {
        "shadow": "none"
      }
    },
    "stackingContext": {
      "base": "0",
      "pasteUp": "10",
      "tapeStaple": "20",
      "cutOutText": "30"
    }
  },
  "dashboardStyle": {
    "background": "#F5E6C8",
    "textColor": "#000000",
    "borderColor": "#000000",
    "fontFamily": "Space Mono",
    "accentColor": "#FF1493",
    "grid": false,
    "shadow": false,
    "borderRadius": "0px",
    "dataTableStyle": "hand-drawn lines"
  },
  "landingStyle": {
    "background": "#F5E6C8",
    "textColor": "#000000",
    "borderColor": "#000000",
    "fontFamily": "Courier Prime",
    "accentColor": "#FF1493",
    "grid": false,
    "shadow": false,
    "borderRadius": "0px",
    "collage": true,
    "grainOverlay": true
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg' style='position:absolute;width:0;height:0;'><defs><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' result='noise'/><feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0' in='noise' result='coloredNoise'/></filter><filter id='high-contrast'><feColorMatrix type='matrix' values='3 0 0 0 0  0 3 0 0 0  0 0 3 0 0  0 0 0 1 0' /><feComponentTransfer><feFuncR type='discrete' tableValues='0 1'/><feFuncG type='discrete' tableValues='0 1'/><feFuncB type='discrete' tableValues='0 1'/></feComponentTransfer></filter><filter id='misregistration'><feOffset dx='1' dy='0' in='SourceGraphic' result='offset1'/><feOffset dx='-1' dy='0' in='SourceGraphic' result='offset2'/><feBlend mode='difference' in='offset1' in2='offset2'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0; line-height: 1.5; -webkit-font-smoothing: none; -moz-osx-font-smoothing: unset;",
  "globalCss": ".ds-layout-frame::after { content: ''; position: absolute; top: 4px; left: 4px; width: 6px; height: 6px; border: 1px solid var(--primary); border-radius: 0; transform: rotate(45deg); }\n.ds-layout-frame::before { ... }",
  "interactionStyles": ".ds-layout-frame a:hover, .ds-layout-frame button:hover { background: var(--primary); color: var(--on-primary); transition: none; }\n.ds-layout-frame a:focus, .ds-layout-frame button:focus { outline: 2px solid var(--secondary-col); outline-offset: 1px; }\n.ds-layout-frame a:active, .ds-layout-frame button:active { transform: translate(1px, 1px); }\n.ds-layout-frame input:focus, .ds-layout-frame textarea:focus { outline: 2px solid var(--primary); }",
  "buttons": [
    {
      "name": "primary",
      "desc": "Solid black button with off-white text, mimicking heavy toner coverage.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); text-transform: uppercase; font-weight: 900; letter-spacing: -0.025em;\">SUBSCRIBE</button>",
      "label": "primary",
      "note": "Solid black button with off-white text, mimicking heavy toner coverage."
    },
    {
      "name": "secondary",
      "desc": "Fluorescent spot color button for urgent call-to-action.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--secondary-col); color: var(--on-secondary); border: 2px solid var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); text-transform: uppercase; font-weight: 900; letter-spacing: -0.025em;\">DONATE</button>",
      "label": "secondary",
      "note": "Fluorescent spot color button for urgent call-to-action."
    },
    {
      "name": "ghost",
      "desc": "Outlined button with dashed border to simulate a cut-out or misregistered line.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: transparent; color: var(--primary); border: 2px dashed var(--border); border-radius: var(--radius-btn); padding: 8px 16px; font-family: var(--font-display); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;\">INFO</button>",
      "label": "ghost",
      "note": "Outlined button with dashed border to simulate a cut-out or misregistered line."
    }
  ],
  "cards": [
    {
      "name": "standard",
      "desc": "Basic card with paper-toned background and heavy black border, no rounding.",
      "html": "<div style=\"background-color: var(--surface); border: 2px solid var(--border); border-radius: var(--radius-card); padding: 8px; font-family: var(--font-body); text-transform: uppercase; color: var(--on-bg);\"><strong>FEATURE</strong><br>PHOTOCOPY ME BEFORE THEY BAN US</div>",
      "label": "standard",
      "note": "Basic card with paper-toned background and heavy black border, no rounding."
    },
    {
      "name": "misregister",
      "desc": "Card with dashed border to simulate photocopier banding and a slightly shifted text block.",
      "html": "<div style=\"background-color: var(--surface); border: 2px dashed var(--border); border-radius: var(--radius-card); padding: 8px; font-family: var(--font-body); text-transform: uppercase; color: var(--on-bg); transform: translateX(1px);\"><strong>COLLAGE</strong><br>CUT HERE · PASTE THERE</div>",
      "label": "misregister",
      "note": "Card with dashed border to simulate photocopier banding and a slightly shifted text block."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Monochrome text input with crisp border, no rounding, no shadow.",
      "html": "<input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 4px; font-family: var(--font-body); text-transform: uppercase;\" placeholder=\"YOUR TEXT HERE\" />",
      "label": "text-input",
      "stateLabel": "Monochrome text input with crisp border, no rounding, no shadow."
    },
    {
      "name": "select",
      "desc": "Custom select dropdown with hacked arrow (no built-in browser decoration).",
      "html": "<select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--bg); color: var(--on-bg); border: 2px solid var(--border); border-radius: var(--radius-default); padding: 4px; font-family: var(--font-body); text-transform: uppercase; appearance: none; -webkit-appearance: none; background-image: url(\"data:image/svg+xml,%3Csvg xmlns=\\x27http://www.w3.org/2000/svg\\x27 width=\\x2710\\x27 height=\\x2710\\x27%3E%3Cpolygon points=\\x270,0 10,0 5,10\\x27 fill=\\x27%23000\\x27/%3E%3C/svg%3E\"); background-repeat: no-repeat; background-position: right 4px center; padding-right: 20px;\"><option>CHOOSE</option><option>OPTION 1</option><option>OPTION 2</option></select>",
      "label": "select",
      "stateLabel": "Custom select dropdown with hacked arrow (no built-in browser decoration)."
    },
    {
      "name": "checkbox",
      "desc": "Custom checkbox as a cut-out box with no rounding and no fill when unchecked.",
      "html": "<label style=\"font-family: var(--font-body); color: var(--on-bg); text-transform: uppercase; display: flex; align-items: center; gap: 4px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border: 2px solid var(--border); border-radius: 0px; background-color: var(--bg); margin: 0;\" /> AGREE</label>",
      "label": "checkbox",
      "stateLabel": "Custom checkbox as a cut-out box with no rounding and no fill when unchecked."
    }
  ],
  "extraComponents": [
    {
      "name": "sticker-chip",
      "desc": "Small pill-shaped chip with solid black fill and off-white text, mimicking a cut-out sticker.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: var(--on-primary); border: 1px solid var(--border); border-radius: var(--radius-chip); padding: 4px 8px; font-family: var(--font-body); text-transform: uppercase; font-size: 12px; letter-spacing: 0.08em;\">NEW</span>"
    },
    {
      "name": "rubber-stamp",
      "desc": "Rubber stamp effect with rotated text and dashed border, as if pressed onto the page.",
      "html": "<div style=\"display: inline-block; background-color: var(--surface); color: var(--on-bg); border: 2px dashed var(--border); border-radius: var(--radius-btn); padding: 8px; font-family: var(--font-display); text-transform: uppercase; text-align: center; transform: rotate(-2deg); font-weight: 700;\">APPROVED</div>"
    },
    {
      "name": "ransom-note-badge",
      "desc": "Badge with skewed text and solid black fill, evoking cut-out ransom letters.",
      "html": "<span style=\"display: inline-block; background-color: var(--primary); color: #FFFFFF; border: 1px solid var(--border); padding: 8px; font-family: var(--font-body); text-transform: uppercase; letter-spacing: 0.08em; transform: skewX(-5deg); font-weight: 700;\">SALE</span>"
    },
    {
      "name": "tape-divider",
      "desc": "Horizontal divider made of alternating black dashes, simulating torn or taped edge.",
      "html": "<div style=\"height: 4px; background: repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 2px, transparent 2px, transparent 4px); margin: 8px 0;\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — ZINE</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — UNDERGROUND PRESS</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — DISTRO CATALOG</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — PHOTOCOPY YOUR IDEAS AND PASS THEM OUT AT THE SHOW.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — VOL. 3 NO. 1</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners – destroys the sharp, cut-paper feel.",
      "avoid": {
        "html": "<div style=\"border-radius: 8px; background-color: var(--surface); padding: 8px;\">ROUNDED</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners – destroys the sharp, cut-paper feel.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Shadows – adds false depth and smoothness.",
      "avoid": {
        "html": "<div style=\"box-shadow: 2px 2px 5px rgba(0,0,0,0.5); background-color: var(--surface);\">SHADOW</div>",
        "label": "Avoid"
      },
      "rule": "Shadows – adds false depth and smoothness.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients – photocopiers cannot reproduce smooth transitions.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(black, white); color: white; padding: 8px;\">GRADIENT</div>",
        "label": "Avoid"
      },
      "rule": "Gradients – photocopiers cannot reproduce smooth transitions.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Smooth serif fonts – not part of the zine typography vocabulary.",
      "avoid": {
        "html": "<span style=\"font-family: Georgia;\">SERIF</span>",
        "label": "Avoid"
      },
      "rule": "Smooth serif fonts – not part of the zine typography vocabulary.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "description": "Avoid any smooth, clean, or polished aesthetics. No rounded corners, no shadows, no gradients, no smooth fonts."
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "secondary": "#FF1493",
    "surface": "#F5E6C8",
    "text": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Courier Prime",
      "fontSize": "48px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Courier Prime",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Space Mono",
      "fontSize": "20px",
      "fontWeight": 500,
      "lineHeight": 1.4,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Space Mono",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Special Elite",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1.4,
      "letterSpacing": "0.08em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "DIY MEDIA FOR THE UNDERGROUND",
      "heroHeadline": "CUT + PASTE YOUR VOICE",
      "heroSub": "EVERY ISSUE IS A ONE-OFF COLLAGE OF TYPEWRITER, MARKER, AND TONER DUST. NO TWO COPIES ALIKE.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000000;color:#F5E6C8;font-family:\\x27Courier Prime\\x27,monospace;font-size:14px;font-weight:700;text-transform:uppercase;padding:8px;border:2px solid #000000;cursor:pointer;\">GET ISSUE #1</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#F5E6C8;color:#000000;font-family:\\x27Courier Prime\\x27,monospace;font-size:14px;font-weight:700;text-transform:uppercase;padding:8px;border:2px solid #000000;cursor:pointer;\">SUBMIT A CUT-UP</button>",
      "navLinks": [
        "MANIFESTO",
        "CUT-UPS",
        "DISTRO",
        "ARCHIVE",
        "MAIL ART"
      ],
      "features": [
        {
          "title": "STAPLE BINDING",
          "desc": "FOLD, STAPLE, TRIM. YOUR ZINE COMES TOGETHER ON A PHOTOCOPIER BED, NOT A PRESS.",
          "icon": "📎",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📎 STAPLE BINDING</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">FOLD, STAPLE, TRIM. YOUR ZINE COMES TOGETHER ON A PHOTOCOPIER BED, NOT A PRESS.</div></div>"
        },
        {
          "title": "RUBBER STAMP",
          "desc": "EACH ISSUE GETS A HAND-STAMPED NUMBER, DATE, AND A RANDOM INK SMUDGE.",
          "icon": "🔴",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔴 RUBBER STAMP</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EACH ISSUE GETS A HAND-STAMPED NUMBER, DATE, AND A RANDOM INK SMUDGE.</div></div>"
        },
        {
          "title": "RANSOM TEXT",
          "desc": "HEADLINES ARE CUT FROM NEWSPAPERS AND TYPED OVER. NO TWO HEADLINES MATCH.",
          "icon": "✂️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">✂️ RANSOM TEXT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HEADLINES ARE CUT FROM NEWSPAPERS AND TYPED OVER. NO TWO HEADLINES MATCH.</div></div>"
        },
        {
          "title": "TAPE DIVIDER",
          "desc": "SECTIONS ARE SEPARATED BY HORIZONTAL STRIPS OF SCOTCH TAPE — VISIBLE FINGERPRINTS INCLUDED.",
          "icon": "🩹",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🩹 TAPE DIVIDER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SECTIONS ARE SEPARATED BY HORIZONTAL STRIPS OF SCOTCH TAPE — VISIBLE FINGERPRINTS INCLUDED.</div></div>"
        },
        {
          "title": "PHOTOCOPIER GLITCH",
          "desc": "DELIBERATE MISREGISTRATION, TONER DUST, AND BANDING ARE PART OF THE DESIGN SYSTEM.",
          "icon": "⚡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ PHOTOCOPIER GLITCH</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">DELIBERATE MISREGISTRATION, TONER DUST, AND BANDING ARE PART OF THE DESIGN SYSTEM.</div></div>"
        }
      ],
      "ctaStripHeadline": "WANT TO CONTRIBUTE? SEND US YOUR CUT-UPS, MANIFESTOS, AND COLLAGES.",
      "ctaStripHtml": "<div style=\"display:flex;gap:8px;align-items:center;\"><input type=\"text\" placeholder=\"YOUR P.O. BOX\" style=\"background:#F5E6C8;color:#000000;font-family:\\x27Space Mono\\x27,monospace;font-size:12px;text-transform:uppercase;padding:4px;border:2px solid #000000;width:180px;\"/><button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#000000;color:#F5E6C8;font-family:\\x27Courier Prime\\x27,monospace;font-size:14px;font-weight:700;text-transform:uppercase;padding:8px;border:2px solid #000000;cursor:pointer;\">MAIL US</button></div>",
      "sidebarBrand": "PHOTOCOPIED ZINE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "ARCHIVE",
          "active": true
        },
        {
          "icon": "◉",
          "label": "TOOLS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CONTACT",
          "active": false
        }
      ],
      "dashboardTitle": "ZINE CONTROL PANEL",
      "metrics": [
        {
          "label": "COPIES PRINTED",
          "value": "847",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PAGES STAPLED",
          "value": "1,234",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ISSUES DROPPED",
          "value": "14",
          "delta": "0%",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "DISTROS REACHED",
          "value": "23",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TONER CARTRIDGES KILLED",
          "value": "7",
          "delta": "+200%",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "PRINT RUN HISTORY (COPIES PER ISSUE)",
      "panelATitle": "RECENT COLLAGES",
      "panelARows": [
        {
          "label": "ISSUE #14 COVER",
          "value": "TYPEWRITER + MARKER",
          "pct": 0
        },
        {
          "label": "ISSUE #12 FOLD-OUT",
          "value": "PHOTOCOPY + HAND-COLOUR",
          "pct": 0
        },
        {
          "label": "ISSUE #11 INSERT",
          "value": "CUT-UP NEWSPAPER + TAPE",
          "pct": 0
        },
        {
          "label": "ISSUE #9 CENTERFOLD",
          "value": "RUBBER STAMP + GEL PEN",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "STASH LOG",
      "panelBCells": [
        {
          "label": "STAPLES LEFT",
          "value": "342",
          "state": "ok"
        },
        {
          "label": "PAPER (REAM)",
          "value": "2.5",
          "state": "warn"
        },
        {
          "label": "TONER (BLACK)",
          "value": "71%",
          "state": "err"
        },
        {
          "label": "RUBBER STAMP INK",
          "value": "RED / 1 OZ",
          "state": "ok"
        },
        {
          "label": "TAPE ROLLS",
          "value": "4",
          "state": "warn"
        },
        {
          "label": "SCISSORS SHARPENING",
          "value": "DUE",
          "state": "err"
        },
        {
          "label": "CUT-UP SUBMISSIONS",
          "value": "12",
          "state": "ok"
        },
        {
          "label": "MAILING LABELS",
          "value": "86",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "ISSUE #9",
        "ISSUE #10",
        "ISSUE #11",
        "ISSUE #12",
        "ISSUE #13",
        "ISSUE #14"
      ],
      "series": [
        {
          "data": [
            320,
            280,
            410,
            380,
            350,
            440,
            440,
            440,
            440,
            440,
            440,
            440
          ],
          "label": "BLACK INK",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            120,
            90,
            160,
            110,
            140,
            180,
            180,
            180,
            180,
            180,
            180,
            180
          ],
          "label": "SPOT COLOR (PINK)",
          "axis": "right-1",
          "color": "#FF1493"
        }
      ]
    },
    "splashRender": "function(el) { el.innerHTML = '<div style=\"display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:16px;border:2px solid var(--primary);background:var(--surface);position:relative;overflow:hidden;\"><div style=\"position:absolute;top:4px;left:4px;width:8px;height:2px;background:var(--primary);box-shadow:0 6px 0 var(--primary), 0 12px 0 var(--primary);\"></div><div style=\"font-family:var(--font-display);font-size:10px;color:var(--primary);letter-spacing:0.15em;transform:rotate(-2deg);\">DIY MEDIA FOR THE UNDERGROUND</div><div style=\"font-family:var(--font-display);font-size:32px;font-weight:900;color:var(--primary);line-height:1.1;text-transform:uppercase;letter-spacing:-0.025em;background:var(--primary);color:var(--on-primary);padding:4px 0;width:100%;\">CUT + PASTE YOUR VOICE</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);line-height:1.5;max-width:80%;\">EVERY ISSUE IS A ONE-OFF COLLAGE OF TYPEWRITER, MARKER, AND TONER DUST. NO TWO COPIES ALIKE.</div><div style=\"display:flex;gap:8px;margin-top:8px;\"><button style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;padding:8px 12px;border:2px solid var(--primary);cursor:default;\">GET ISSUE #1</button><button style=\"background:var(--surface);color:var(--primary);font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;padding:8px 12px;border:2px dashed var(--primary);cursor:default;\">SUBMIT A CUT-UP</button></div><div style=\"position:absolute;bottom:4px;right:4px;width:30px;height:30px;border:1px solid var(--primary);transform:rotate(5deg);\"></div></div>'; }",
    "showcaseRender": "function(el) { el.innerHTML = '<div style=\"display:flex;flex-wrap:wrap;gap:8px;padding:8px;\">' + ['STAPLE BINDING','RUBBER STAMP','RANSOM TEXT','TAPE DIVIDER','PHOTOCOPIER GLITCH'].map(function(t,i){ var s = i % 2 === 0 ? 'translateX(-1px)' : 'translateX(1px)'; return '<div style=\"flex:1 1 calc(50% - 8px);min-width:160px;padding:16px;border:1px solid var(--border);background:var(--surface);transform:'+s+';display:flex;flex-direction:column;gap:8px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;color:var(--primary);letter-spacing:0.1em;\">'+t+'</div><div style=\"font-family:var(--font-body);font-size:12px;color:var(--on-bg-muted);line-height:1.55;\">'+(t==='STAPLE BINDING'?'FOLD, STAPLE, TRIM. YOUR ZINE COMES TOGETHER ON A PHOTOCOPIER BED, NOT A PRESS.':t==='RUBBER STAMP'?'EACH ISSUE GETS A HAND-STAMPED NUMBER, DATE, AND A RANDOM INK SMUDGE.':t==='RANSOM TEXT'?'HEADLINES ARE CUT FROM NEWSPAPERS AND TYPED OVER. NO TWO HEADLINES MATCH.':t==='TAPE DIVIDER'?'SECTIONS ARE SEPARATED BY HORIZONTAL STRIPS OF SCOTCH TAPE — VISIBLE FINGERPRINTS INCLUDED.':'DELIBERATE MISREGISTRATION, TONER DUST, AND BANDING ARE PART OF THE DESIGN SYSTEM.')+'</div></div>'; }).join('') + '</div>'; }",
    "panelCRender": "function(el) { el.innerHTML = '<div style=\"border:2px solid var(--primary);padding:8px;background:var(--surface);font-family:var(--font-body);text-transform:uppercase;color:var(--on-bg);\"><div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;border-bottom:2px dashed var(--primary);padding-bottom:4px;\"><span style=\"font-family:var(--font-display);font-size:11px;font-weight:700;letter-spacing:0.1em;\">RECENT COLLAGES</span><span style=\"font-size:10px;\">ISSUE</span></div>' + ['ISSUE #14 COVER','ISSUE #12 FOLD-OUT','ISSUE #11 INSERT','ISSUE #9 CENTERFOLD'].map(function(l){ return '<div style=\"display:flex;justify-content:space-between;padding:2px 0;border-bottom:1px solid rgba(0,0,0,0.15);\"><span style=\"font-size:11px;\">'+l+'</span><span style=\"font-size:10px;color:var(--on-bg-muted);\">'+(l==='ISSUE #14 COVER'?'TYPEWRITER + MARKER':l==='ISSUE #12 FOLD-OUT'?'PHOTOCOPY + HAND-COLOUR':l==='ISSUE #11 INSERT'?'CUT-UP NEWSPAPER + TAPE':'RUBBER STAMP + GEL PEN')+'</span></div>'; }).join('') + '<div style=\"margin-top:8px;padding:4px;border:1px dashed var(--primary);text-align:center;font-size:10px;transform:rotate(-1deg);\">TOTAL: 23 COLLAGES</div></div>'; }",
    "heroBackground": "function(el) { el.style.cssText = 'background: repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 3px), repeating-linear-gradient(90deg, transparent 0px, transparent 20px, rgba(0,0,0,0.02) 20px, rgba(0,0,0,0.02) 21px);'; }",
    "ctaBackground": "function(el) { el.style.cssText = 'background: repeating-linear-gradient(-45deg, transparent 0px, transparent 3px, rgba(0,0,0,0.05) 3px, rgba(0,0,0,0.05) 4px), linear-gradient(90deg, transparent 0%, transparent 90%, rgba(0,0,0,0.08) 90%, rgba(0,0,0,0.12) 100%);'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;margin:8px 0;background: repeating-linear-gradient(90deg, var(--primary) 0px, var(--primary) 4px, transparent 4px, transparent 8px);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.cssText = 'background: repeating-linear-gradient(0deg, transparent 0px, transparent 24px, rgba(0,0,0,0.04) 24px, rgba(0,0,0,0.04) 25px), repeating-linear-gradient(90deg, transparent 0px, transparent 24px, rgba(0,0,0,0.04) 24px, rgba(0,0,0,0.04) 25px), var(--bg);'; }",
    "surfaceOverlay": "function(el) { var o = document.createElement('div'); o.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:multiply;background: radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px);background-size:5px 5px;'; el.appendChild(o); var m = document.createElement('div'); m.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:difference;opacity:0.12;background: transparent;transform:translateX(1px);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3);'; el.appendChild(m); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5E6C8",
    "--color-popover": "#F5E6C8",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5E6C8",
    "--color-muted": "#F5E6C8",
    "--color-muted-foreground": "#191714",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#F5E6C8",
    "--color-secondary": "#FF1493",
    "--color-accent": "#FF1493",
    "--color-secondary-foreground": "#000000",
    "--color-accent-foreground": "#000000",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#000000"
  },
  "shadcnTokensClassic": {
    "--background": "#F5E6C8",
    "--popover": "#F5E6C8",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5E6C8",
    "--muted": "#F5E6C8",
    "--muted-foreground": "#191714",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#F5E6C8",
    "--secondary": "#FF1493",
    "--accent": "#FF1493",
    "--secondary-foreground": "#000000",
    "--accent-foreground": "#000000",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#000000"
  }
});
