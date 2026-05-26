registerSystem({
  "meta": {
    "name": "Penguin Cover System (Forensic Synthesis)",
    "tagline": "A restrained modernist interface language translating the iconic mid-century Penguin book cover into digital form",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "Penguin Cover System (Forensic Synthesis)",
    "colors": {},
    "typography": {
      "display": {
        "fontFamily": "Cabin",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Cabin",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Cabin",
        "fontSize": "20px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Cabin",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.5,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Cabin",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1.5,
        "letterSpacing": "0.1em",
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
      "page-edge": "24px",
      "gap-component": "16px",
      "height-sm": "32px",
      "height-md": "48px",
      "height-lg": "64px",
      "icon": "32px"
    },
    "components": {
      "cover-card": {
        "backgroundColor": "#F5F0E6",
        "textColor": "#1A1A1A",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "button-primary": {
        "backgroundColor": "#E86524",
        "textColor": "#F5F0E6",
        "typography": "{typography.label}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E86524",
        "textColor": "#F5F0E6",
        "typography": "{typography.label}",
        "rounded": "{rounded.button}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#F5F0E6",
        "textColor": "#1A1A1A",
        "typography": "{typography.body}",
        "rounded": "{rounded.input}",
        "padding": "16px"
      },
      "icon-silhouette": {
        "textColor": "#1A1A1A",
        "size": "32px"
      }
    },
    "version": "alpha",
    "description": "A restrained modernist interface language translating the iconic mid-century Penguin book cover into digital form, defined by a rigid three-band horizontal grid at 1:3:1 ratio, flat saturated spot colours, Gill Sans uppercase typography with generous tracking, and matte offset-print texture simulation.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `penguin-cover-system` refers to the systematic approach to book cover design developed by Penguin Books from its founding in 1935, codified by Jan Tschichold's \\\"Penguin Composition Rules\\\" (1947–1949). The system governs the typographic layout, colour coding by genre, logo placement, and decorative rules that defined the look of mass-market paperbacks across successive eras (the initial t",
      "manual_enrichment_required": false,
      "imagery_count": 7,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.vam.ac.uk",
          "count": 2
        },
        {
          "host": "www.penguin.co.uk",
          "count": 1
        },
        {
          "host": "www.pentagram.com",
          "count": 1
        },
        {
          "host": "en.wikipedia.org",
          "count": 1
        },
        {
          "host": "archive.org",
          "count": 1
        },
        {
          "host": "www.amazon.co.uk",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.vam.ac.uk/",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum, London",
          "confidence_original": "low"
        },
        {
          "url": "https://www.penguin.co.uk/",
          "host": "www.penguin.co.uk",
          "institution": "Penguin Random House UK",
          "confidence_original": "low"
        },
        {
          "url": "https://www.pentagram.com/",
          "host": "www.pentagram.com",
          "institution": "Pentagram Design, London",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Penguin_Books",
          "host": "en.wikipedia.org",
          "institution": null,
          "confidence_original": "high"
        },
        {
          "url": "https://archive.org/",
          "host": "archive.org",
          "institution": "Internet Archive",
          "confidence_original": "low"
        },
        {
          "url": "https://www.amazon.co.uk/Penguin-Design-Cover-Story-1935-2005/dp/0713998393",
          "host": "www.amazon.co.uk",
          "institution": "Amazon (book listing)",
          "confidence_original": "low"
        },
        {
          "url": "https://www.vam.ac.uk/collections",
          "host": "www.vam.ac.uk",
          "institution": "Victoria and Albert Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Gill Sans",
          "foundry": "Monotype",
          "year": 1928,
          "google_fonts": "Cabin",
          "attestation": "attested"
        },
        {
          "name": "Univers",
          "foundry": null,
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "attested"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "attested"
        },
        {
          "name": "Futura",
          "foundry": null,
          "year": null,
          "google_fonts": "Jost",
          "attestation": "attested"
        }
      ],
      "flags": [
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour hex values**": "No verified hex, Pantone, CMYK, or pigment reference for any genre colour. Providers gave differing inferred values. CONTESTED.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E6",
    "--on-bg": "#1A1A1A",
    "--primary": "#E86524",
    "--on-primary": "#29241a",
    "--secondary-col": "#2E7D32",
    "--on-secondary": "#F5F0E6",
    "--surface": "#F5F0E6",
    "--on-bg-muted": "#3D3D3D",
    "--border": "#1A1A1A",
    "--error": "#1A1A1A",
    "--font-display": "'Cabin', sans-serif",
    "--font-body": "'Cabin', sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "info": "#1565C0",
    "success": "#2E7D32",
    "warning": "#E86524",
    "error": "#1A1A1A",
    "err": "#1A1A1A",
    "ok": "#2E7D32",
    "warn": "#E86524",
    "deltaUp": "#2E7D32",
    "deltaDown": "#1A1A1A",
    "deltaFlat": "#3D3D3D",
    "live": "#E86524",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#3D3D3D",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#3D3D3D",
    "fontFamily": "'Cabin', sans-serif"
  },
  "elevation": {
    "shadow": "none",
    "flat": true
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "SVG feTurbulence",
      "baseFrequency": 0.65,
      "numOctaves": 3,
      "blend": "overlay",
      "opacity": "0.12"
    },
    "inkSpread": {
      "technique": "inset box-shadow",
      "blur": "0.5px",
      "blend": "multiply",
      "opacity": "0.15"
    }
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); filter: sepia(0.03) brightness(0.98);",
  "globalCss": ".ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" result=\"noise\"/></filter><rect width=\"100\" height=\"100\" filter=\"url(%23n)\" opacity=\"0.12\" style=\"mix-blend-mode: overlay;\"/></svg>'); pointer-events: none; z-index: 9998; mix-blend-mode: overlay; opacity: 0.12; } .ds-layout-frame .cover-card, .ds-layout-frame .button-primary, .ds-layout-frame .input { box-shadow: inset 0 0 0.5px rgba(0,0,0,0.15); }",
  "interactionModel": {
    "hover": {
      "effect": "none"
    },
    "focus": {
      "effect": "none"
    },
    "active": {
      "effect": "offset-shift",
      "translateY": "0.5px",
      "transitionDuration": "0ms"
    }
  },
  "interactionStyles": ".ds-layout-frame * { transition-duration: 0ms !important; } .ds-layout-frame .button-primary:active, .ds-layout-frame .input:active, .ds-layout-frame .navigation-tab:active, .ds-layout-frame .registration-mark:active { transform: translateY(0.5px); }",
  "dashboardStyle": {
    "layout": "Single column with cover-card as the primary container. Minimal density, generous whitespace.",
    "density": "Sparse. Each component isolated with 24px section spacing.",
    "panelTreatment": "Flat, no elevation. Panels use solid background with 1:3:1 banding or solid colour as needed.",
    "dataVizStyle": "Line charts with squared steps, no fill areas. Use primary and secondary colours for series.",
    "signatureElement": "A persistent three-band header at the top of the view."
  },
  "landingStyle": {
    "heroApproach": "Single centred cover-card with full-page grain overlay. No carousel, no motion.",
    "scrollBehavior": "Static. No parallax, no animations. Content unrolls in discrete, flat sections.",
    "ctaStyle": "Primary button located directly below the cover-card, centred.",
    "signatureMoment": "The instant the page loads: the cover-card's top and bottom bands are visible immediately, with the grain overlay applying a matte, tactile finish."
  },
  "buttons": [
    {
      "name": "Primary Action",
      "desc": "Flat solid orange button with uppercase label. No rounded corners, no shadow.",
      "html": "<button onmouseenter=\"this.style.filter='brightness(1.12)'\" onmouseleave=\"this.style.filter=''\" style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 16px; border: none; cursor: pointer; border-radius: 0px;\">Browse Catalogue</button>",
      "label": "Primary Action",
      "note": "Flat solid orange button with uppercase label. No rounded corners, no shadow."
    },
    {
      "name": "Secondary Action",
      "desc": "Flat green button, same treatment as primary but using secondary colour.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--secondary-col); color: var(--on-secondary); font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 16px; border: none; cursor: pointer; border-radius: 0px;\">Add to Collection</button>",
      "label": "Secondary Action",
      "note": "Flat green button, same treatment as primary but using secondary colour."
    },
    {
      "name": "Ghost Outline",
      "desc": "Transparent background with black border, squared, for less emphasis.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 16px; border: 2px solid var(--border); cursor: pointer; border-radius: 0px;\">Learn More</button>",
      "label": "Ghost Outline",
      "note": "Transparent background with black border, squared, for less emphasis."
    }
  ],
  "cards": [
    {
      "name": "Cover Card (Three-Band Layout)",
      "desc": "The iconic Penguin cover: 1:3:1 horizontal bands. Top and bottom saturated flat colours, centre band off-white with illustration placeholder and centred text. Squared corners, matte paper feel.",
      "html": "<div style=\"position: relative; width: 245px; height: 400px; background: var(--surface); border-radius: 0px; overflow: hidden; display: flex; flex-direction: column;\"><div style=\"height: 20%; background: var(--primary);\"></div><div style=\"height: 60%; background: var(--surface); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 16px;\"><div style=\"width: 64px; height: 64px; background: var(--on-bg); border-radius: 0px; margin-bottom: 16px;\"></div><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg);\">Title</span><span style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg-muted);\">Author</span></div><div style=\"height: 20%; background: var(--secondary-col);\"></div></div>",
      "label": "Cover Card (Three-Band Layout)",
      "note": "The iconic Penguin cover: 1:3:1 horizontal bands. Top and bottom saturated flat colours, centre band off-white with illustration placeholder and centred text. Squared corners, matte paper feel."
    },
    {
      "name": "Info Card (Solid Surface)",
      "desc": "Simple flat card with off-white background and black border. Used for content blocks or form containers.",
      "html": "<div style=\"background: var(--surface); border: 2px solid var(--border); border-radius: 0px; padding: 16px; width: 245px;\"><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg);\">Card content with squared edges and no shadow.</span></div>",
      "label": "Info Card (Solid Surface)",
      "note": "Simple flat card with off-white background and black border. Used for content blocks or form containers."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Uppercase label above an off-white input field with black border. All caps, squared.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 100%;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg);\">Username</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"\" placeholder=\"ENTER TEXT\" style=\"background: var(--surface); color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 400; letter-spacing: 0.025em; text-transform: uppercase; padding: 16px; border: 2px solid var(--border); border-radius: 0px; outline: none;\"></div>",
      "label": "Text Input",
      "stateLabel": "Uppercase label above an off-white input field with black border. All caps, squared."
    },
    {
      "name": "Dropdown Select",
      "desc": "Styled select mimicking the rigid cover aesthetic. Squared, uppercase.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 8px; width: 100%;\"><label style=\"font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg);\">Genre</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); font-family: var(--font-body); font-size: 14px; font-weight: 400; letter-spacing: 0.025em; text-transform: uppercase; padding: 16px; border: 2px solid var(--border); border-radius: 0px; outline: none; appearance: none;\"><option>Fiction</option><option>Non-Fiction</option><option>Science</option></select></div>",
      "label": "Dropdown Select",
      "stateLabel": "Styled select mimicking the rigid cover aesthetic. Squared, uppercase."
    },
    {
      "name": "Checkbox (Toggle)",
      "desc": "Squared checkbox with primary fill on active.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 20px; height: 20px; border: 2px solid var(--border); border-radius: 0px; background: var(--surface); display: flex; align-items: center; justify-content: center;\"><div style=\"width: 12px; height: 12px; background: var(--primary); border-radius: 0px;\"></div></div><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 400; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg);\">Premium Edition</span></div>",
      "label": "Checkbox (Toggle)",
      "stateLabel": "Squared checkbox with primary fill on active."
    }
  ],
  "extraComponents": [
    {
      "name": "Navigation Tab",
      "desc": "Horizontal row of squared tabs. Active tab has bottom border in primary colour.",
      "html": "<div style=\"display: flex; gap: 0;\"><div style=\"background: var(--surface); color: var(--on-bg); font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 16px; border-bottom: 2px solid var(--primary); cursor: pointer;\">Home</div><div style=\"background: var(--surface); color: var(--on-bg-muted); font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 16px; border-bottom: 2px solid transparent; cursor: pointer;\">Explore</div><div style=\"background: var(--surface); color: var(--on-bg-muted); font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 16px; border-bottom: 2px solid transparent; cursor: pointer;\">About</div></div>"
    },
    {
      "name": "Registration Mark (Corner Bracket)",
      "desc": "Crosshair-style registration mark used on printed covers. Two perpendicular lines meeting at centre.",
      "html": "<div style=\"position: relative; width: 32px; height: 32px;\"><div style=\"position: absolute; top: 50%; left: 0; width: 100%; height: 2px; background: var(--on-bg); transform: translateY(-50%);\"></div><div style=\"position: absolute; top: 0; left: 50%; width: 2px; height: 100%; background: var(--on-bg); transform: translateX(-50%);\"></div><div style=\"position: absolute; top: 50%; left: 50%; width: 8px; height: 8px; background: var(--primary); transform: translate(-50%, -50%);\"></div></div>"
    },
    {
      "name": "Badge (Colour Spot)",
      "desc": "Small squared label with solid colour, used for status or genre indicators.",
      "html": "<span style=\"background: var(--primary); color: var(--on-primary); font-family: var(--font-body); font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 8px; border-radius: 0px; display: inline-block;\">New</span>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PENGUIN BOOKS</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — THE GRID SYSTEM</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — COVER DESIGN RULES</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Three horizontal bands at strict 1:3:1 ratio.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — BUTTON LABEL</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners break the rigid, squared character of the Penguin Cover System. All corners must be 0px.",
      "avoid": {
        "html": "<div style=\"background: var(--bg); border-radius: 8px; padding: 16px;\">Rounded corner example</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners break the rigid, squared character of the Penguin Cover System. All corners must be 0px.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Drop shadows create depth and violate the flat, matte paper aesthetic. No shadows allowed.",
      "avoid": {
        "html": "<div style=\"background: var(--bg); box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 16px;\">Shadow example</div>",
        "label": "Avoid"
      },
      "rule": "Drop shadows create depth and violate the flat, matte paper aesthetic. No shadows allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradients and transparency are forbidden. Use flat, saturated spot colours only.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(135deg, var(--primary), var(--secondary-col)); padding: 16px;\">Gradient example</div>",
        "label": "Avoid"
      },
      "rule": "Gradients and transparency are forbidden. Use flat, saturated spot colours only.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Left- or right-aligned text disrupts the strict vertical centre axis. All text must be centred in the band.",
      "avoid": {
        "html": "<div style=\"text-align: left; padding: 16px;\">Left-aligned text is not allowed.</div>",
        "label": "Avoid"
      },
      "rule": "Left- or right-aligned text disrupts the strict vertical centre axis. All text must be centred in the band.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "FORENSIC SYNTHESIS",
      "heroHeadline": "PENGUIN COVER SYSTEM",
      "heroSub": "A RESTRAINED MODERNIST INTERFACE LANGUAGE TRANSLATING THE ICONIC MID-CENTURY PENGUIN BOOK COVER INTO DIGITAL FORM",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ACCESS THE GRID</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE COLOUR FIELDS</button>",
      "navLinks": [
        "GRID",
        "COLOUR",
        "TYPOGRAPHY",
        "TEXTURE"
      ],
      "features": [
        {
          "title": "THREE-BAND GRID",
          "desc": "RIGID 1:3:1 HORIZONTAL RATIO. ALL CONTENT LIVES IN THE CENTRE BAND.",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ THREE-BAND GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">RIGID 1:3:1 HORIZONTAL RATIO. ALL CONTENT LIVES IN THE CENTRE BAND.</div></div>"
        },
        {
          "title": "FLAT SPOT COLOURS",
          "desc": "LIMITED TO 2–3 SATURATED SOLIDS PLUS WARM OFF-WHITE PAPER.",
          "icon": "■",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">■ FLAT SPOT COLOURS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">LIMITED TO 2–3 SATURATED SOLIDS PLUS WARM OFF-WHITE PAPER.</div></div>"
        },
        {
          "title": "GILL SANS UPPERCASE",
          "desc": "GENEROUS TRACKING. TEXT NEVER EXCEEDS ILLUSTRATION HEIGHT.",
          "icon": "A",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">A GILL SANS UPPERCASE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">GENEROUS TRACKING. TEXT NEVER EXCEEDS ILLUSTRATION HEIGHT.</div></div>"
        },
        {
          "title": "MATTE OFFSET FINISH",
          "desc": "PAPER GRAIN AND INK SPREAD SIMULATION. SQUARED CORNERS ONLY.",
          "icon": "◻",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">◻ MATTE OFFSET FINISH</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PAPER GRAIN AND INK SPREAD SIMULATION. SQUARED CORNERS ONLY.</div></div>"
        }
      ],
      "ctaStripHeadline": "EXPLORE THE SYSTEM",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ACCESS COMPONENT VOCABULARY</button>",
      "sidebarBrand": "PENGUIN COVER SYSTEM",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "GRID",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COLOUR",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TYPOGRAPHY",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TEXTURE",
          "active": false
        },
        {
          "icon": "◉",
          "label": "REGISTER",
          "active": false
        }
      ],
      "dashboardTitle": "COVER STUDIO",
      "metrics": [
        {
          "label": "COLOUR FIELDS",
          "value": "2",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "INK SPREAD",
          "value": "0.5PX",
          "delta": "−0.1PX",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "PAPER GRAIN",
          "value": "0.65F",
          "delta": "SET",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "TRACKING",
          "value": "0.05EM",
          "delta": "WIDE",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "COVER RELEASES BY GENRE",
      "panelATitle": "REGISTER MARKS",
      "panelARows": [
        {
          "label": "TOP BAND OFFSET",
          "value": "+0.02IN",
          "pct": 0.02
        },
        {
          "label": "BOTTOM BAND OFFSET",
          "value": "−0.01IN",
          "pct": 0.01
        },
        {
          "label": "CENTRE BAND GRAIN",
          "value": "0.12 OPACITY",
          "pct": 0.12
        },
        {
          "label": "INK MISREGISTRATION",
          "value": "0.00",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SPOT COLOUR PALETTE",
      "panelBCells": [
        {
          "label": "SURFACE",
          "value": "#F5F0E6",
          "state": "ok"
        },
        {
          "label": "PRIMARY",
          "value": "#E86524",
          "state": "warn"
        },
        {
          "label": "SECONDARY",
          "value": "#2E7D32",
          "state": "err"
        },
        {
          "label": "ACCENT",
          "value": "#1565C0",
          "state": "ok"
        },
        {
          "label": "TEXT",
          "value": "#1A1A1A",
          "state": "warn"
        },
        {
          "label": "ON PRIMARY",
          "value": "#F5F0E6",
          "state": "err"
        },
        {
          "label": "ON SECONDARY",
          "value": "#F5F0E6",
          "state": "ok"
        },
        {
          "label": "BORDER",
          "value": "#1A1A1A",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "CRIME",
        "CLASSICS",
        "FICTION",
        "DRAMA",
        "POETRY",
        "SCIENCE"
      ],
      "series": [
        {
          "data": [
            12,
            9,
            15,
            8,
            6,
            4,
            4,
            4,
            4,
            4,
            4,
            4
          ],
          "label": "1940S",
          "axis": "left",
          "color": "#E86524"
        },
        {
          "data": [
            18,
            14,
            22,
            11,
            9,
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ],
          "label": "1950S",
          "axis": "right-1",
          "color": "#2E7D32"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:400px;padding:24px;background:var(--surface);'; el.innerHTML = '<div style=\"width:245px;height:400px;background:var(--surface);display:flex;flex-direction:column;border:2px solid var(--border);\"><div style=\"height:20%;background:var(--primary);\"></div><div style=\"height:60%;background:var(--surface);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px;gap:12px;\"><div style=\"width:64px;height:64px;background:var(--on-bg);\"></div><span style=\"font-family:var(--font-display);font-size:14px;font-weight:400;letter-spacing:0.025em;text-transform:uppercase;color:var(--on-bg);\">TITLE</span><span style=\"font-family:var(--font-display);font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:var(--on-bg-muted);\">AUTHOR</span></div><div style=\"height:20%;background:var(--secondary-col);\"></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;padding:24px;'; el.innerHTML = '<div style=\"border:1px solid var(--border);padding:24px;background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);\">▬ THREE-BAND GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">RIGID 1:3:1 HORIZONTAL RATIO. ALL CONTENT LIVES IN THE CENTRE BAND.</div></div><div style=\"border:1px solid var(--border);padding:24px;background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);\">■ FLAT SPOT COLOURS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">LIMITED TO 2–3 SATURATED SOLIDS PLUS WARM OFF-WHITE PAPER.</div></div><div style=\"border:1px solid var(--border);padding:24px;background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);\">A GILL SANS UPPERCASE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">GENEROUS TRACKING. TEXT NEVER EXCEEDS ILLUSTRATION HEIGHT.</div></div><div style=\"border:1px solid var(--border);padding:24px;background:var(--surface);display:flex;flex-direction:column;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);\">◻ MATTE OFFSET FINISH</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PAPER GRAIN AND INK SPREAD SIMULATION. SQUARED CORNERS ONLY.</div></div>'; }",
    "panelCRender": "function(el) { el.style.cssText='padding:24px;background:var(--surface);border:1px solid var(--border);'; el.innerHTML = '<div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--primary);margin-bottom:16px;\">SPOT COLOUR PALETTE</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;\"><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:16px;height:16px;background:#F5F0E6;border:1px solid var(--border);\"></div><span style=\"font-size:11px;letter-spacing:.05em;text-transform:uppercase;\">SURFACE #F5F0E6</span></div><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:16px;height:16px;background:#E86524;border:1px solid var(--border);\"></div><span style=\"font-size:11px;letter-spacing:.05em;text-transform:uppercase;\">PRIMARY #E86524</span></div><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:16px;height:16px;background:#2E7D32;border:1px solid var(--border);\"></div><span style=\"font-size:11px;letter-spacing:.05em;text-transform:uppercase;\">SECONDARY #2E7D32</span></div><div style=\"display:flex;align-items:center;gap:8px;\"><div style=\"width:16px;height:16px;background:#1A1A1A;border:1px solid var(--border);\"></div><span style=\"font-size:11px;letter-spacing:.05em;text-transform:uppercase;\">TEXT #1A1A1A</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--secondary-col)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:8px;background:var(--primary);width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;box-shadow:inset 0 0 0.5px rgba(0,0,0,0.15);mix-blend-mode:multiply;background:rgba(245,240,230,0.03);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(tick) { var freq = 0.65 + (tick % 10) * 0.01; return 'background-image: url(\"data:image/svg+xml,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"100\\\" height=\\\"100\\\"><filter id=\\\"n\\\"><feTurbulence type=\\\"fractalNoise\\\" baseFrequency=\\\"'+freq+'\\\" numOctaves=\\\"3\\\" result=\\\"noise\\\"/></filter><rect width=\\\"100\\\" height=\\\"100\\\" fill=\\\"var(--primary)\\\" filter=\\\"url(%23n)\\\" opacity=\\\"0.05\\\" style=\\\"mix-blend-mode: overlay;\\\"/></svg>\")'; }",
  "shadcnTokens": {
    "--color-background": "#F5F0E6",
    "--color-popover": "#F5F0E6",
    "--color-foreground": "#1A1A1A",
    "--color-card-foreground": "#1A1A1A",
    "--color-popover-foreground": "#1A1A1A",
    "--color-card": "#F5F0E6",
    "--color-muted": "#F5F0E6",
    "--color-muted-foreground": "#3D3D3D",
    "--color-primary": "#E86524",
    "--color-ring": "#E86524",
    "--color-primary-foreground": "#29241a",
    "--color-secondary": "#2E7D32",
    "--color-accent": "#2E7D32",
    "--color-secondary-foreground": "#F5F0E6",
    "--color-accent-foreground": "#F5F0E6",
    "--color-border": "#1A1A1A",
    "--color-input": "#1A1A1A",
    "--color-destructive": "#1A1A1A"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E6",
    "--popover": "#F5F0E6",
    "--foreground": "#1A1A1A",
    "--card-foreground": "#1A1A1A",
    "--popover-foreground": "#1A1A1A",
    "--card": "#F5F0E6",
    "--muted": "#F5F0E6",
    "--muted-foreground": "#3D3D3D",
    "--primary": "#E86524",
    "--ring": "#E86524",
    "--primary-foreground": "#29241a",
    "--secondary": "#2E7D32",
    "--accent": "#2E7D32",
    "--secondary-foreground": "#F5F0E6",
    "--accent-foreground": "#F5F0E6",
    "--border": "#1A1A1A",
    "--input": "#1A1A1A",
    "--destructive": "#1A1A1A"
  }
});
