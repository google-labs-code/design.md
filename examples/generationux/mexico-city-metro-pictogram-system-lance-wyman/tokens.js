registerSystem({
  "meta": {
    "name": "Mexico City Metro Pictogram System (Lance Wyman)",
    "tagline": "Maximum recognition with minimum lines",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Mexico City Metro Pictogram System (Lance Wyman)",
    "colors": {
      "primary": "#000000",
      "on-primary": "#FFFFFF",
      "surface": "#FFFFFF",
      "on-surface": "#000000",
      "inverse-surface": "#000000",
      "inverse-on-surface": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Montserrat",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Montserrat",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Montserrat",
        "fontSize": "20px",
        "fontWeight": 500,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Montserrat",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Montserrat",
        "fontSize": "14px",
        "fontWeight": 600,
        "lineHeight": 1.25,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "9999px",
      "button": "0px",
      "input": "0px",
      "chip": "0px"
    },
    "spacing": {
      "component-gap": "16px",
      "section-gap": "32px",
      "page-padding": "24px",
      "icon-to-label-gap": "4px",
      "icon-size": "64px"
    },
    "components": {
      "pictogram-tile": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "size": "64px",
        "width": "64px",
        "height": "64px"
      },
      "pictogram-tile-hover": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "size": "64px",
        "width": "64px",
        "height": "64px"
      },
      "station-name": {
        "textColor": "#000000"
      }
    },
    "version": "alpha",
    "description": "A distilled wayfinding language based on solid silhouette icons in circles, maximum recognition with minimum lines, geometric construction, and black-and-white minimalism with optional single accent for route bar.",
    "provenance": {
      "coverage_status": "complete",
      "identity_description": "The slug `mexico-city-metro-pictogram-system-lance-wyman` refers to the iconic pictogram-based wayfinding and identity system designed for the Sistema de Transporte Colectivo (STC) Metro of Mexico City, led by American graphic designer Lance Wyman with collaborators (including Francisco López and the architectural firm Schaefer, Kromer, Ciento y Asociados). The system was developed c. 1967–1969 an",
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
          "count": 2
        },
        {
          "host": "www.moma.org",
          "count": 1
        },
        {
          "host": "hache.com.mx",
          "count": 1
        },
        {
          "host": "commons.wikimedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Mexico_City_Metro",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.moma.org/collection/works/?",
          "host": "www.moma.org",
          "institution": "Museum of Modern Art, New York",
          "confidence_original": "low"
        },
        {
          "url": "https://hache.com.mx/",
          "host": "hache.com.mx",
          "institution": "Haché (publisher)",
          "confidence_original": "low"
        },
        {
          "url": "https://commons.wikimedia.org/wiki/File:San_Cosme.jpg",
          "host": "commons.wikimedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Lance_Wyman",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Helvetica Medium",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Helvetica Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Univers 65 Bold",
          "foundry": null,
          "year": null,
          "google_fonts": "Manrope",
          "attestation": "unverified"
        },
        {
          "name": "custom/modified sans‑serif",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "unverified"
        },
        {
          "name": "custom 'Metro' wordmark",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        }
      ],
      "flags": {},
      "honest_gaps": [
        "1. **Original colour specification for black and white** – no Pantone, Munsell, or hex attested."
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
    "--on-bg-muted": "#1A1A1A",
    "--border": "#000000",
    "--error": "#E53E3E",
    "--font-display": "Montserrat",
    "--font-body": "Montserrat",
    "--radius-default": "0px",
    "--radius-card": "9999px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#E53E3E",
    "deltaUp": "#22C55E",
    "deltaDown": "#E53E3E",
    "deltaFlat": "#1A1A1A",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#1A1A1A",
    "chartFont": "Montserrat"
  },
  "chartStyle": {
    "type": "monochrome",
    "palette": [
      "#000000",
      "#FFFFFF"
    ],
    "iconography": "pictogram-based, no data visualizations",
    "notes": "If charts were required, they would use solid filled areas and geometric line-art, always monochrome with optional single accent for the route line.",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#1A1A1A",
    "fontFamily": "Montserrat"
  },
  "surfaceModel": "flat",
  "materialSimulation": {
    "model": "screen-print"
  },
  "elevation": {
    "model": "flat",
    "default": "0px",
    "raised": "0px",
    "shadow": "none"
  },
  "globalFilter": null,
  "globalBodyCss": "background-color: #FFFFFF; color: #000000; font-family: 'Montserrat', sans-serif; text-transform: uppercase; letter-spacing: -0.025em;",
  "globalCss": ".ds-layout-frame * { box-sizing: border-box; } .ds-layout-frame img, .ds-layout-frame svg { max-width: 100%; display: block; }",
  "interactionModel": {
    "hover": {
      "delta": "none (transform-scale only)",
      "target": "pictogram-tile",
      "effect": "transform scale(1.1) 200ms ease-out",
      "opacity": false,
      "color": false,
      "shadow": false
    },
    "active": {
      "delta": "color-shift",
      "target": "route-bar",
      "effect": "route bar changes to accent color 200ms ease-out",
      "otherElements": "no change"
    },
    "focus": {
      "style": "none",
      "visualCommunication": "active state (accented route bar)"
    },
    "disabled": {
      "opacity": "40%",
      "other": "icon and route bar remain unaffected in color"
    },
    "transition": {
      "duration": "200ms",
      "easing": "ease-out",
      "properties": [
        "transform",
        "color"
      ],
      "exemptAnimations": [
        "route-bar-draw"
      ]
    }
  },
  "interactionStyles": ".ds-layout-frame .pictogram-tile:hover { transform: scale(1.1); transition: transform 200ms ease-out; } .ds-layout-frame .route-bar:active { background-color: var(--route-accent, #000000); transition: background-color 200ms ease-out; } .ds-layout-frame :focus { outline: none; } .ds-layout-frame :disabled { opacity: 0.4; pointer-events: none; }",
  "dashboardStyle": {
    "layout": "Modular column-based grid with equal-width pictogram tiles. Tiles are placed in rows with a horizontal route line connector between them. Station names appear centered below each tile.",
    "density": "Low (1–2 rows, 4–6 columns typical). Each tile occupies a fixed 64x64px icon area with label below, allowing generous whitespace.",
    "panelTreatment": "No panels; each tile is a standalone circular container on the flat white surface. No borders, no shadows, no backgrounds beyond the tile itself.",
    "dataVizStyle": "Not applicable; the system is wayfinding, not data-driven. If present, data would be represented as pictogram sequences or route line thickness variations, always monochrome.",
    "signatureElement": "The horizontal route bar that cuts through every pictogram tile, connecting them in a continuous line map."
  },
  "landingStyle": {
    "heroApproach": "Single centered pictogram tile (scaled up to ~128px) with a prominent route bar and station name below. No image degradation; the icon is the hero. Background is white.",
    "scrollBehavior": "Smooth fade-in and slide-up (300–400ms) for tiles as they enter viewport. The route bar draws in horizontally (200ms) on tile appearance.",
    "ctaStyle": "Uppercase button with solid black fill and white text (primary button). No rounding, no decoration. Transition: transform scale(1.1) on hover.",
    "signatureMoment": "First tile appears with a quick route-bar-draw animation: the horizontal line expands from the center outward, reinforcing the system’s core visual anchor."
  },
  "buttons": [
    {
      "name": "primary-station-button",
      "desc": "Solid black fill button with white uppercase text. Uses the system's primary surface treatment.",
      "html": "<button onmouseenter=\"this.style.transform='scale(1.1)'\" onmouseleave=\"this.style.transform='scale(1)'\" style=\"background-color: var(--primary); color: var(--on-primary); border: none; padding: 12px 24px; font-family: var(--font-display); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; cursor: pointer; transition: transform 200ms ease-out;\">SALIDA</button>",
      "label": "primary-station-button",
      "note": "Solid black fill button with white uppercase text. Uses the system's primary surface treatment."
    },
    {
      "name": "secondary-route-button",
      "desc": "White background button with black border and black text, echoing the tile container and route bar.",
      "html": "<button onmouseenter=\"this.style.transform='scale(1.1)'\" onmouseleave=\"this.style.transform='scale(1)'\" style=\"background-color: var(--surface); color: var(--on-surface); border: 2px solid var(--primary); padding: 12px 24px; font-family: var(--font-display); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; cursor: pointer; transition: transform 200ms ease-out;\">CAMBIO</button>",
      "label": "secondary-route-button",
      "note": "White background button with black border and black text, echoing the tile container and route bar."
    },
    {
      "name": "ghost-tile-button",
      "desc": "Transparent background, no border, using only black text – minimal and direct like the pictogram labels.",
      "html": "<button onmouseenter=\"this.style.transform='scale(1.1)'\" onmouseleave=\"this.style.transform='scale(1)'\" style=\"background-color: transparent; color: var(--on-surface); border: none; padding: 12px 24px; font-family: var(--font-display); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; cursor: pointer; transition: transform 200ms ease-out;\">SIGUIENTE</button>",
      "label": "ghost-tile-button",
      "note": "Transparent background, no border, using only black text – minimal and direct like the pictogram labels."
    }
  ],
  "cards": [
    {
      "name": "station-pictogram-card",
      "desc": "Circular tile card with internal route bar and uppercase station name below. Mirrors the iconic single-icon composition.",
      "html": "<div style=\"display: inline-flex; flex-direction: column; align-items: center; gap: 4px;\"><div style=\"position: relative; width: 64px; height: 64px; border-radius: 9999px; background-color: var(--surface); overflow: hidden;\"><div style=\"position: absolute; width: 100%; height: 4px; top: 50%; transform: translateY(-50%); background-color: var(--primary);\"></div><div style=\"position: absolute; width: 20px; height: 20px; background-color: var(--primary); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); top: 50%; left: 50%; transform: translate(-50%, -50%);\"></div></div><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; color: var(--on-surface); text-align: center;\">ZÓCALO</span></div>",
      "label": "station-pictogram-card",
      "note": "Circular tile card with internal route bar and uppercase station name below. Mirrors the iconic single-icon composition."
    },
    {
      "name": "route-line-card-series",
      "desc": "Horizontal sequence of pictogram tiles connected by a continuous route line, creating a line map segment.",
      "html": "<div style=\"display: flex; align-items: center; gap: 0;\"><div style=\"display: inline-flex; flex-direction: column; align-items: center; gap: 4px;\"><div style=\"position: relative; width: 64px; height: 64px; border-radius: 9999px; background-color: var(--surface); overflow: hidden;\"><div style=\"position: absolute; width: 100%; height: 4px; top: 50%; transform: translateY(-50%); background-color: var(--primary);\"><div style=\"position: absolute; left: 0; width: 100%; height: 100%; background-color: var(--primary);\"></div></div><div style=\"position: absolute; width: 16px; height: 16px; background-color: var(--primary); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); top: 50%; left: 50%; transform: translate(-50%, -50%);\"></div></div><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; color: var(--on-surface);\">CUAUHTÉMOC</span></div><div style=\"width: 32px; height: 4px; background-color: var(--primary);\"></div><div style=\"display: inline-flex; flex-direction: column; align-items: center; gap: 4px;\"><div style=\"position: relative; width: 64px; height: 64px; border-radius: 9999px; background-color: var(--surface); overflow: hidden;\"><div style=\"position: absolute; width: 100%; height: 4px; top: 50%; transform: translateY(-50%); background-color: var(--primary);\"></div><div style=\"position: absolute; width: 20px; height: 20px; background-color: var(--primary); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); top: 50%; left: 50%; transform: translate(-50%, -50%);\"></div></div><span style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; color: var(--on-surface);\">HIDALGO</span></div></div>",
      "label": "route-line-card-series",
      "note": "Horizontal sequence of pictogram tiles connected by a continuous route line, creating a line map segment."
    }
  ],
  "forms": [
    {
      "name": "text-input-station",
      "desc": "Empty text input with a solid black bottom border, uppercase label placed outside – no rounding, no decoration.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px; width: 240px;\"><label style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; color: var(--on-surface);\">ESTACIÓN</label><input onfocus=\"this.style.border='2px solid var(--primary)'\" onblur=\"this.style.border='none none 2px solid var(--primary) none'\" type=\"text\" placeholder=\"Escriba nombre\" style=\"border: none; border-bottom: 2px solid var(--primary); padding: 8px 0; font-family: var(--font-body); font-size: 16px; font-weight: 500; letter-spacing: 0em; text-transform: uppercase; color: var(--on-surface); background-color: transparent; outline: none;\" /></div>",
      "label": "text-input-station",
      "stateLabel": "Empty text input with a solid black bottom border, uppercase label placed outside – no rounding, no decoration."
    },
    {
      "name": "select-route",
      "desc": "Select dropdown using a hidden native select with a custom styled container – black border, no radius, uppercase.",
      "html": "<div style=\"position: relative; width: 240px;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"appearance: none; width: 100%; padding: 8px 12px; border: 2px solid var(--primary); background-color: var(--surface); font-family: var(--font-body); font-size: 16px; font-weight: 500; letter-spacing: 0em; text-transform: uppercase; color: var(--on-surface); cursor: pointer;\"><option value=\"\">SELECCIONE LÍNEA</option><option value=\"1\">LÍNEA 1</option><option value=\"2\">LÍNEA 2</option></select><span style=\"position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none;\"><svg width=\"10\" height=\"6\" viewBox=\"0 0 10 6\" fill=\"none\"><polygon points=\"0,0 10,0 5,6\" fill=\"var(--primary)\"/></svg></span></div>",
      "label": "select-route",
      "stateLabel": "Select dropdown using a hidden native select with a custom styled container – black border, no radius, uppercase."
    },
    {
      "name": "checkbox-connection",
      "desc": "Square checkbox (no rounding) with black border, filled black when checked; label in uppercase outside.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><div style=\"width: 20px; height: 20px; border: 2px solid var(--primary); background-color: var(--surface); cursor: pointer; display: flex; align-items: center; justify-content: center;\"><div style=\"width: 12px; height: 12px; background-color: var(--primary);\"></div></div><label style=\"font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: -0.025em; text-transform: uppercase; color: var(--on-surface); cursor: pointer;\">CONEXIÓN</label></div>",
      "label": "checkbox-connection",
      "stateLabel": "Square checkbox (no rounding) with black border, filled black when checked; label in uppercase outside."
    }
  ],
  "extraComponents": [
    {
      "name": "pictogram-tile",
      "desc": "The core atomic component: a circular container (rounded-full) holding a solid black geometric silhouette and a horizontal route bar. No label attached; used as a standalone icon tile.",
      "html": "<div style=\"position: relative; width: 64px; height: 64px; border-radius: 9999px; background-color: var(--surface); overflow: hidden;\"><div style=\"position: absolute; width: 100%; height: 4px; top: 50%; transform: translateY(-50%); background-color: var(--primary);\"></div><div style=\"position: absolute; width: 24px; height: 24px; background-color: var(--primary); clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); top: 50%; left: 50%; transform: translate(-50%, -50%);\"></div></div>"
    },
    {
      "name": "route-bar",
      "desc": "A standalone horizontal bar representing the route bar that cuts through pictogram tiles. Height 4px, solid color, no rounding.",
      "html": "<div style=\"width: 100%; height: 4px; background-color: var(--primary);\"></div>"
    },
    {
      "name": "route-line-connector",
      "desc": "Horizontal bar used between tiles in a series to create a continuous line map. Spans the gap between two pictogram tiles.",
      "html": "<div style=\"width: 32px; height: 4px; background-color: var(--primary);\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — METRO</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — SISTEMA DE TRANSPORTE</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — LÍNEA 2 — CUATRO CAMINOS</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — ESTACIÓN ZÓCALO · DIRECCIÓN TASQUEÑA</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SALIDA · CONEXIÓN · SIGUIENTE</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Never place text inside the pictogram container. The system strictly reserves the circular area for the silhouette and route bar only.",
      "avoid": {
        "html": "<div style=\"position: relative; width: 64px; height: 64px; border-radius: 9999px; background-color: var(--surface); display: flex; align-items: center; justify-content: center;\"><span style=\"font-family: var(--font-body); font-size: 10px; text-transform: uppercase; color: var(--on-surface);\">ZÓCALO</span></div>",
        "label": "Avoid"
      },
      "rule": "Never place text inside the pictogram container. The system strictly reserves the circular area for the silhouette and route bar only.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use any form of gradients, drop shadows, or 3D effects. The system is strictly flat with no elevation.",
      "avoid": {
        "html": "<button style=\"background: linear-gradient(to bottom, var(--primary), #333); box-shadow: 2px 2px 4px rgba(0,0,0,0.3); padding: 12px 24px; border: none; color: var(--on-primary); font-family: var(--font-body); text-transform: uppercase;\">GRADIENTE</button>",
        "label": "Avoid"
      },
      "rule": "Do not use any form of gradients, drop shadows, or 3D effects. The system is strictly flat with no elevation.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use more than one accent color per icon. The route bar can be a single bright accent, but nothing else should be colored.",
      "avoid": {
        "html": "<div style=\"display: inline-flex; flex-direction: column; align-items: center; gap: 4px;\"><div style=\"position: relative; width: 64px; height: 64px; border-radius: 9999px; background-color: var(--surface); overflow: hidden;\"><div style=\"position: absolute; width: 100%; height: 4px; top: 50%; transform: translateY(-50%); background-color: red;\"></div><div style=\"position: absolute; width: 20px; height: 20px; background-color: blue; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); top: 50%; left: 50%; transform: translate(-50%, -50%);\"></div></div><span style=\"font-family: var(--font-body); font-size: 14px; text-transform: uppercase; color: var(--on-surface);\">DOBLE COLOR</span></div>",
        "label": "Avoid"
      },
      "rule": "Do not use more than one accent color per icon. The route bar can be a single bright accent, but nothing else should be colored.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use freehand curves or angles not multiples of 45°. All shapes must be built from arcs, circles, and straight lines at 45° or 90°.",
      "avoid": {
        "html": "<div style=\"width: 64px; height: 64px; border-radius: 50%; background-color: var(--surface); display: flex; align-items: center; justify-content: center;\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><path d=\"M10,20 Q20,5 30,20 Q20,35 10,20\" fill=\"var(--primary)\"/></svg></div>",
        "label": "Avoid"
      },
      "rule": "Do not use freehand curves or angles not multiples of 45°. All shapes must be built from arcs, circles, and straight lines at 45° or 90°.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "doAvoidStyle": {
    "desc": "General stylistic mistakes that violate the Mexico City Metro Pictogram System.",
    "avoid": {
      "html": "<div style=\"border-radius: 8px; background-color: #f0f0f0; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\"><span style=\"font-family: Arimo; text-transform: none; color: #333;\">DO NOT</span></div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "on-primary": "#FFFFFF",
    "surface": "#FFFFFF",
    "on-surface": "#000000",
    "inverse-surface": "#000000",
    "inverse-on-surface": "#FFFFFF",
    "accent": "optional — single bright color, not defined hex"
  },
  "typography": {
    "display": {
      "fontFamily": "Montserrat",
      "fontSize": "36px",
      "fontWeight": "700",
      "lineHeight": "1.25",
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Montserrat",
      "fontSize": "24px",
      "fontWeight": "600",
      "lineHeight": "1.25",
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Montserrat",
      "fontSize": "20px",
      "fontWeight": "500",
      "lineHeight": "1.25",
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Montserrat",
      "fontSize": "16px",
      "fontWeight": "500",
      "lineHeight": "1.5",
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "Montserrat",
      "fontSize": "14px",
      "fontWeight": "600",
      "lineHeight": "1.25",
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "9999px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "spacing": {
    "component-gap": "16px",
    "section-gap": "32px",
    "page-padding": "24px",
    "icon-to-label-gap": "4px",
    "icon-size": "64px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "MEXICO CITY METRO / WAYFINDING SYSTEM 1968",
      "heroHeadline": "MAXIMUM RECOGNITION / MINIMUM LINES",
      "heroSub": "LANCE WYMAN — PURE SILHOUETTE — GEOMETRIC CONSTRUCTION",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPLORE PICTOGRAMS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW ROUTE MAP</button>",
      "navLinks": [
        "PICTOGRAMS",
        "LINES",
        "STATIONS",
        "ABOUT"
      ],
      "features": [
        {
          "title": "SOLID SILHOUETTE",
          "desc": "SINGLE-COLOR BLACK SHAPE INSIDE A CIRCULAR CONTAINER. NEGATIVE SPACE CARVED AS HARD-EDGED GEOMETRY.",
          "icon": "⬤",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⬤ SOLID SILHOUETTE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">SINGLE-COLOR BLACK SHAPE INSIDE A CIRCULAR CONTAINER. NEGATIVE SPACE CARVED AS HARD-EDGED GEOMETRY.</div></div>"
        },
        {
          "title": "ROUTE BAR ACCENT",
          "desc": "HORIZONTAL LINE THROUGH THE CENTER. ONE BRIGHT COLOR MAXIMUM PER ICON. CLEAR IDENTITY AT DISTANCE.",
          "icon": "▬",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▬ ROUTE BAR ACCENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">HORIZONTAL LINE THROUGH THE CENTER. ONE BRIGHT COLOR MAXIMUM PER ICON. CLEAR IDENTITY AT DISTANCE.</div></div>"
        },
        {
          "title": "STATION NAME BELOW",
          "desc": "GEOMETRIC SANS-SERIF UPPERCASE TEXT. NEVER INSIDE THE PICTOGRAM. BASELINE ALIGNED WITH TILE BOTTOM.",
          "icon": "A",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">A STATION NAME BELOW</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">GEOMETRIC SANS-SERIF UPPERCASE TEXT. NEVER INSIDE THE PICTOGRAM. BASELINE ALIGNED WITH TILE BOTTOM.</div></div>"
        },
        {
          "title": "MODULAR GRID",
          "desc": "EQUAL-WIDTH TILES IN A COLUMN-BASED LAYOUT. CENTERED ALIGNMENT. LOW DENSITY FOR MAXIMUM LEGIBILITY.",
          "icon": "⊞",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⊞ MODULAR GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EQUAL-WIDTH TILES IN A COLUMN-BASED LAYOUT. CENTERED ALIGNMENT. LOW DENSITY FOR MAXIMUM LEGIBILITY.</div></div>"
        }
      ],
      "ctaStripHeadline": "BUILD YOUR OWN METRO IDENTITY",
      "ctaStripHtml": "<a href=\"#\" class=\"inline-block border-2 border-black px-8 py-3 text-black uppercase tracking-tight font-semibold\">START DESIGNING →</a>",
      "sidebarBrand": "METRO / WYMAN",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "PICTOGRAM LIBRARY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "LINE ASSIGNMENT",
          "active": false
        }
      ],
      "dashboardTitle": "STATION PICTOGRAM OVERVIEW",
      "metrics": [
        {
          "label": "PICTOGRAMS",
          "value": "42",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ROUTE BARS",
          "value": "12",
          "delta": "0",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "STATIONS",
          "value": "195",
          "delta": "+5",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACCENT COLORS",
          "value": "9",
          "delta": "+1",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "LINE FREQUENCY",
      "panelATitle": "PICTOGRAM TILE SETTINGS",
      "panelARows": [
        {
          "label": "SIZE",
          "value": "64PX",
          "pct": 64
        },
        {
          "label": "ROUNDED",
          "value": "9999PX",
          "pct": 100
        },
        {
          "label": "BACKGROUND",
          "value": "#FFFFFF",
          "pct": 0
        },
        {
          "label": "LABEL STYLE",
          "value": "MONTSERRAT UPPERCASE",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "ROUTE BAR CONFIGURATION",
      "panelBCells": [
        {
          "label": "LINE 1",
          "value": "#000000",
          "state": "ok"
        },
        {
          "label": "LINE 2",
          "value": "#FF3B30",
          "state": "warn"
        },
        {
          "label": "LINE 3",
          "value": "#007AFF",
          "state": "err"
        },
        {
          "label": "LINE 4",
          "value": "#000000",
          "state": "ok"
        },
        {
          "label": "LINE 5",
          "value": "#34C759",
          "state": "warn"
        },
        {
          "label": "LINE 6",
          "value": "#FF9500",
          "state": "err"
        },
        {
          "label": "LINE 7",
          "value": "#5856D6",
          "state": "ok"
        },
        {
          "label": "LINE 8",
          "value": "#000000",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "LINE 1",
        "LINE 2",
        "LINE 3",
        "LINE 4",
        "LINE 5",
        "LINE 6"
      ],
      "series": [
        {
          "data": [
            12,
            8,
            15,
            10,
            7,
            14,
            14,
            14,
            14,
            14,
            14,
            14
          ],
          "label": "PICTOGRAMS",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            20,
            22,
            18,
            25,
            16,
            30,
            30,
            30,
            30,
            30,
            30,
            30
          ],
          "label": "STATIONS",
          "axis": "right-1",
          "color": "#000000"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;padding:24px;background:#FFFFFF;'; var outer = document.createElement('div'); outer.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;'; var circle = document.createElement('div'); circle.style.cssText = 'position:relative;width:128px;height:128px;border-radius:9999px;background:#FFFFFF;overflow:hidden;border:2px solid #000000;'; var bar = document.createElement('div'); bar.style.cssText = 'position:absolute;width:100%;height:6px;top:50%;transform:translateY(-50%);background:#000000;'; var icon = document.createElement('div'); icon.style.cssText = 'position:absolute;width:40px;height:40px;background:#000000;clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);top:50%;left:50%;transform:translate(-50%,-50%);'; circle.appendChild(bar); circle.appendChild(icon); outer.appendChild(circle); var label = document.createElement('span'); label.style.cssText = 'font-family:Montserrat;font-size:16px;font-weight:600;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;text-align:center;'; label.textContent = 'ZÓCALO'; outer.appendChild(label); el.appendChild(outer); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:row;align-items:center;justify-content:center;gap:0;padding:32px;background:#FFFFFF;'; var stations = ['CUAUHTÉMOC','HIDALGO','ZÓCALO']; var icons = ['polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)','polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)','polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)']; for(var i=0;i<3;i++){ var tile = document.createElement('div'); tile.style.cssText = 'display:inline-flex;flex-direction:column;align-items:center;gap:4px;'; var circ = document.createElement('div'); circ.style.cssText = 'position:relative;width:64px;height:64px;border-radius:9999px;background:#FFFFFF;overflow:hidden;border:2px solid #000000;'; var bar = document.createElement('div'); bar.style.cssText = 'position:absolute;width:100%;height:4px;top:50%;transform:translateY(-50%);background:#000000;'; var icn = document.createElement('div'); icn.style.cssText = 'position:absolute;width:20px;height:20px;background:#000000;clip-path:' + icons[i] + ';top:50%;left:50%;transform:translate(-50%,-50%);'; circ.appendChild(bar); circ.appendChild(icn); tile.appendChild(circ); var lbl = document.createElement('span'); lbl.style.cssText = 'font-family:Montserrat;font-size:14px;font-weight:600;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;'; lbl.textContent = stations[i]; tile.appendChild(lbl); if(i>0){ var conn = document.createElement('div'); conn.style.cssText = 'width:32px;height:4px;background:#000000;margin:0;'; el.appendChild(conn); } el.appendChild(tile); } }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:24px;background:#FFFFFF;border:1px solid #000000;display:flex;flex-direction:column;gap:16px;'; var header = document.createElement('div'); header.style.cssText = 'font-family:Montserrat;font-size:14px;font-weight:700;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;'; header.textContent = 'PICTOGRAM TILE SETTINGS'; el.appendChild(header); var row1 = document.createElement('div'); row1.style.cssText = 'display:flex;justify-content:space-between;font-family:Montserrat;font-size:12px;font-weight:600;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;'; row1.innerHTML = '<span>SIZE</span><span>64PX</span>'; el.appendChild(row1); var row2 = document.createElement('div'); row2.style.cssText = 'display:flex;justify-content:space-between;font-family:Montserrat;font-size:12px;font-weight:600;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;'; row2.innerHTML = '<span>ROUNDED</span><span>9999PX</span>'; el.appendChild(row2); var row3 = document.createElement('div'); row3.style.cssText = 'display:flex;justify-content:space-between;font-family:Montserrat;font-size:12px;font-weight:600;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;'; row3.innerHTML = '<span>BACKGROUND</span><span>#FFFFFF</span>'; el.appendChild(row3); var row4 = document.createElement('div'); row4.style.cssText = 'display:flex;justify-content:space-between;font-family:Montserrat;font-size:12px;font-weight:600;letter-spacing:-0.025em;text-transform:uppercase;color:#000000;'; row4.innerHTML = '<span>LABEL STYLE</span><span>MONTSERRAT UPPERCASE</span>'; el.appendChild(row4); }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:#000000;width:100%;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;background-image:radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px);background-size:3px 3px;'; el.appendChild(ov); }"
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
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#000000",
    "--color-accent": "#000000",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E53E3E"
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
    "--secondary": "#000000",
    "--accent": "#000000",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E53E3E"
  }
});
