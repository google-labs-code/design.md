registerSystem({
  "meta": {
    "name": "Pantone Swatchbook",
    "tagline": "Clinical, precise, data-driven color swatch interface",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap"
  },
  "yamlTokens": {
    "name": "Pantone Swatchbook",
    "colors": {
      "background": "#f5f4f0",
      "on-surface": "#1a1a1a",
      "outline": "#000000",
      "surface-container-lowest": "#ffffff",
      "outline-variant": "#d4d3cf",
      "watermark": "#b3afab"
    },
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "18px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Inter",
        "fontSize": "24px",
        "fontWeight": 300,
        "lineHeight": 1.375,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Inter",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1.25,
        "letterSpacing": "0.03em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Inter",
        "fontSize": "6px",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "0.02em"
      }
    },
    "rounded": {
      "default": "0px"
    },
    "spacing": {
      "component-internal": "0px",
      "section-internal": "16px",
      "page-edge": "56px",
      "gap-component": "8px",
      "gap-section": "24px",
      "height-sm": "56px",
      "height-md": "56px",
      "height-lg": "96px"
    },
    "components": {
      "swatch-tile": {
        "size": "56px",
        "height": "56px",
        "rounded": "{rounded.default}"
      },
      "swatch-grid": {
        "backgroundColor": "{colors.background}"
      },
      "page-number": {
        "textColor": "{colors.on-surface}"
      },
      "color-family-divider-page": {
        "height": "60px",
        "backgroundColor": "#D42B2B",
        "textColor": "#ffffff"
      },
      "perforation-mark": {
        "backgroundColor": "{colors.outline-variant}"
      }
    },
    "version": "alpha",
    "description": "This style translates the obsessive cataloging of a physical Pantone swatchbook into a digital interface. It is clinical, precise, and data-driven — every color square is a specimen with its own formal identification.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "The slug `pantone-swatchbook` most plausibly refers to the physical product known as the Pantone Color Guide or Pantone Formula Guide — a fan-deck or booklet of standardized colour swatches used in graphic design and printing, published by Pantone LLC (formerly Pantone Inc.). This artefact is the primary reference for the Pantone Matching System (PMS), a proprietary colour space first intr",
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
          "count": 1
        },
        {
          "host": "collection.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "www.computerhistory.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Pantone",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        },
        {
          "url": "https://collection.cooperhewitt.org/objects/18613889/",
          "host": "collection.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://www.computerhistory.org/collections/catalog/102718432",
          "host": "www.computerhistory.org",
          "institution": "Computer History Museum",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Pantone cover logotype",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "conventional"
        },
        {
          "name": "Helvetica Neue Condensed",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unknown"
        },
        {
          "name": "Trade Gothic",
          "foundry": null,
          "year": null,
          "google_fonts": "Archivo Narrow",
          "attestation": "unknown"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "unverified"
        },
        {
          "name": "Arial",
          "foundry": null,
          "year": null,
          "google_fonts": "Arimo",
          "attestation": "unverified"
        }
      ],
      "flags": [
        "sparse_imagery"
      ],
      "honest_gaps": [
        {
          "\"1. **Cover colour specification**": "The exact PMS number (frequently cited as 2768 C) is unverified. The hex value is inferred from low-quality reproductions. Resolution: access to Pantone’s internal archive or a spectrophotometer reading of a factory-fresh specimen.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#f5f4f0",
    "--on-bg": "#1a1a1a",
    "--primary": "#D42B2B",
    "--on-primary": "#ffffff",
    "--secondary-col": "#D42B2B",
    "--on-secondary": "#ffffff",
    "--surface": "#ffffff",
    "--on-bg-muted": "#4a4a4a",
    "--border": "#000000",
    "--error": "#B22222",
    "--font-display": "Inter",
    "--font-body": "Inter",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "err": "#B22222",
    "deltaUp": "#22C55E",
    "deltaDown": "#B22222",
    "deltaFlat": "#4a4a4a",
    "live": "#D42B2B",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#4a4a4a",
    "chartFont": "Inter"
  },
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#4a4a4a",
    "fontFamily": "Inter"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "substrate": "#f5f4f0",
      "noiseOpacity": 0.02
    }
  },
  "globalFilter": "<svg style=\"display:none\"><defs><filter id=\"paper-noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.02 0\" in=\"noise\" result=\"alphaNoise\"/><feBlend mode=\"multiply\" in=\"SourceGraphic\" in2=\"alphaNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); font-weight: 300;",
  "globalCss": ".ds-layout-frame {\n  position: relative;\n  background: var(--bg);\n}\n.ds-layout-frame::before {\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  filter: url(#paper-noise);\n  z-index: 0;\n}\n.ds-layout-frame::after {\n  content: 'PANTONE®';\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n  font-size: 200px;\n  opacity: 0.02;\n  color: var(--watermark);\n  pointer-events: none;\n  font-family: var(--font-display);\n  z-index: 1;\n}\n.ds-layout-frame > * {\n  position: relative;\n  z-index: 2;\n}",
  "interactionModel": {
    "hover": {
      "type": "shadow-lift",
      "innerHighlight": true,
      "outerShadow": "deepen by 1px",
      "noColorShift": true
    },
    "active": {
      "type": "inset-shadow",
      "embossInversion": true
    },
    "focus": {
      "type": "color-border",
      "width": "0.5pt",
      "color": "outline-black",
      "opacity": "30%"
    }
  },
  "interactionStyles": ".ds-layout-frame .swatch-tile:hover {\n  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.2);\n}\n.ds-layout-frame .swatch-tile:active {\n  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.3);\n}\n.ds-layout-frame .swatch-tile:focus-visible {\n  outline: 0.5pt solid var(--border);\n  outline-offset: -1px;\n}",
  "elevation": {
    "default": "none",
    "swatch-card": "inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1)"
  },
  "dashboardStyle": {
    "layout": "Strict grid of equal-sized swatch tiles with white gutters. No panels or cards, just the grid and page number.",
    "density": "Compact, with 4 columns on desktop, 2 on mobile.",
    "panelTreatment": "No panels exist; the entire page is the swatch grid.",
    "dataVizStyle": "Color spectrum arranged in color family groups with divider pages.",
    "signatureElement": "A red color family divider band across the full width, with a thumb-tab protrusion on the left edge."
  },
  "landingStyle": {
    "heroApproach": "A full-page grid of color swatches from a single color family, with a prominent divider band at top.",
    "scrollBehavior": "Smooth scroll between color family sections, with page numbers updating.",
    "ctaStyle": "No explicit call-to-action; the primary action is selecting a swatch by clicking.",
    "signatureMoment": "The first color family divider page scrolls into view, revealing a solid red band with white text and a perforation mark."
  },
  "buttons": [
    {
      "name": "Primary",
      "desc": "Solid red background with white uppercase text, no border radius. Represents a primary action like selecting a color standard.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background-color: var(--primary); color: var(--on-primary); border: 1px solid var(--border); border-radius: var(--radius-default); font-family: var(--font-display); font-weight: 300; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 24px;\">PANTONE 2768 C</button>",
      "label": "Primary",
      "note": "Solid red background with white uppercase text, no border radius. Represents a primary action like selecting a color standard."
    },
    {
      "name": "Secondary",
      "desc": "Outlined button with no fill, using the on-surface color for border and text. Suitable for secondary actions like comparing swatches.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 1px solid var(--on-bg); border-radius: var(--radius-default); font-family: var(--font-display); font-weight: 300; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 24px;\">PANTONE 2768 C</button>",
      "label": "Secondary",
      "note": "Outlined button with no fill, using the on-surface color for border and text. Suitable for secondary actions like comparing swatches."
    },
    {
      "name": "Ghost",
      "desc": "Borderless button with no background, using on-surface color. For subtle actions like expanding details.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: none; border-radius: var(--radius-default); font-family: var(--font-display); font-weight: 300; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 12px 24px;\">PANTONE 2768 C</button>",
      "label": "Ghost",
      "note": "Borderless button with no background, using on-surface color. For subtle actions like expanding details."
    }
  ],
  "cards": [
    {
      "name": "Swatch Tile Card",
      "desc": "A card containing a single color swatch (56×56px solid fill) with its numeric identifier and color name below. Mimics a physical swatch tile from the swatchbook.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--outline-variant); border-radius: var(--radius-default); padding: 8px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1); width: 200px;\"><div style=\"width: 56px; height: 56px; background-color: #D42B2B; margin-bottom: 8px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; text-transform: uppercase; letter-spacing: 0.03em; color: var(--on-bg);\">PANTONE 2768 C</div><div style=\"font-family: var(--font-label); font-size: 6px; font-weight: 300; text-transform: uppercase; letter-spacing: 0.02em; color: var(--on-bg-muted);\">CMYK: 100 80 10 5</div></div>",
      "label": "Swatch Tile Card",
      "note": "A card containing a single color swatch (56×56px solid fill) with its numeric identifier and color name below. Mimics a physical swatch tile from the swatchbook."
    },
    {
      "name": "Specimen Card",
      "desc": "A larger card showing the swatch alongside its full identification: Pantone number, name, and CMYK breakdown. Used for detailed inspection.",
      "html": "<div style=\"background-color: var(--surface); border: 1px solid var(--outline-variant); border-radius: var(--radius-default); padding: 16px; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1); width: 300px;\"><div style=\"display: flex; align-items: center; gap: 16px;\"><div style=\"width: 80px; height: 80px; background-color: #D42B2B; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div><div style=\"font-family: var(--font-display); font-size: 18px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; color: var(--on-bg);\">PANTONE 2768 C</div><div style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.03em; text-transform: uppercase; color: var(--on-bg-muted);\">RED VIOLET</div></div></div><div style=\"margin-top: 16px; font-family: var(--font-label); font-size: 6px; font-weight: 300; letter-spacing: 0.02em; text-transform: uppercase; color: var(--on-bg-muted);\">CMYK: 100 80 10 5 | PANTONE GOE: 150-2-3</div></div>",
      "label": "Specimen Card",
      "note": "A larger card showing the swatch alongside its full identification: Pantone number, name, and CMYK breakdown. Used for detailed inspection."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Single-line text input for entering a Pantone number or color code. Uppercase, thin border, zero radius.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-label); font-size: 6px; font-weight: 300; letter-spacing: 0.02em; text-transform: uppercase; color: var(--on-bg);\">PANTONE NUMBER</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" value=\"2768 C\" style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.03em; text-transform: uppercase; color: var(--on-bg);\" /></div>",
      "label": "Text Input",
      "stateLabel": "Single-line text input for entering a Pantone number or color code. Uppercase, thin border, zero radius."
    },
    {
      "name": "Select Dropdown",
      "desc": "Dropdown menu for selecting a color family. Styled with uppercase text, simple border.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-label); font-size: 6px; font-weight: 300; letter-spacing: 0.02em; text-transform: uppercase; color: var(--on-bg);\">COLOR FAMILY</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 8px; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.03em; text-transform: uppercase; color: var(--on-bg);\"><option>RED VIOLET</option><option>BLUE VIOLET</option><option>GREEN</option></select></div>",
      "label": "Select Dropdown",
      "stateLabel": "Dropdown menu for selecting a color family. Styled with uppercase text, simple border."
    },
    {
      "name": "Checkbox",
      "desc": "Custom checkbox for toggling options like ‘Spot Color’ or ‘Include CMYK’. Square, border-only, uppercase label.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"chk-af5a\" style=\"appearance: none; width: 16px; height: 16px; border: 1px solid var(--border); border-radius: var(--radius-default); background: var(--surface);\" /><label for=\"chk-af5a\" style=\"font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.03em; text-transform: uppercase; color: var(--on-bg);\">SPOT COLOR</label></div>",
      "label": "Checkbox",
      "stateLabel": "Custom checkbox for toggling options like ‘Spot Color’ or ‘Include CMYK’. Square, border-only, uppercase label."
    }
  ],
  "extraComponents": [
    {
      "name": "Color Badge",
      "desc": "A small inline badge showing a Pantone color code. Uses solid primary background, uppercase text.",
      "html": "<span style=\"display: inline-block; background: var(--primary); color: var(--on-primary); font-family: var(--font-label); font-size: 6px; font-weight: 300; letter-spacing: 0.02em; text-transform: uppercase; padding: 2px 4px; border-radius: var(--radius-default);\">PMS 2768 C</span>"
    },
    {
      "name": "Tooltip",
      "desc": "Tooltip on hover that reveals CMYK breakdown. Uses surface background with border, uppercase label text.",
      "html": "<div style=\"position: relative; display: inline-block;\"><span style=\"border-bottom: 1px dotted var(--on-bg); cursor: help; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.03em; text-transform: uppercase; color: var(--on-bg);\">CMYK</span><div style=\"display: none; position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: var(--surface); border: 1px solid var(--border); padding: 4px 8px; font-family: var(--font-label); font-size: 6px; font-weight: 300; letter-spacing: 0.02em; text-transform: uppercase; color: var(--on-bg); white-space: nowrap;\">Cyan 100% Magenta 80% Yellow 10% Black 5%</div></div>"
    },
    {
      "name": "Toast",
      "desc": "A notification toast for confirming an action (e.g., color added to palette). Minimal, uppercase, thin border.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-default); padding: 8px 16px; font-family: var(--font-body); font-size: 12px; font-weight: 300; letter-spacing: 0.03em; text-transform: uppercase; color: var(--on-bg);\"><span style=\"font-weight: 400;\">✓</span> COLOR ADDED TO PALETTE</div>"
    },
    {
      "name": "Perforation Mark",
      "desc": "A horizontal line of alternating dashes simulating the tear-off perforation found in physical swatchbooks.",
      "html": "<div style=\"width: 100%; height: 4px; background: repeating-linear-gradient(90deg, var(--outline-variant) 0px, var(--outline-variant) 2px, transparent 2px, transparent 4px);\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PANTONE 2768 C</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — COLOR FAMILY: RED VIOLET</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — PMS 2768 C</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — PROCESS CYAN 100%</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CMYK: 100 80 10 5</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Gradients inside swatches — this breaks the clinical, data-driven colour representation.",
      "avoid": {
        "html": "<div style=\"width:56px;height:56px;background:linear-gradient(90deg, red, blue);\"></div>",
        "label": "Avoid"
      },
      "rule": "Gradients inside swatches — this breaks the clinical, data-driven colour representation.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:56px;height:56px;background:#D42B2B;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div>"
      }
    },
    {
      "desc": "Non-rectangular swatches — every colour square must be a precise rectangle.",
      "avoid": {
        "html": "<div style=\"width:56px;height:56px;border-radius:50%;background:#D42B2B;\"></div>",
        "label": "Avoid"
      },
      "rule": "Non-rectangular swatches — every colour square must be a precise rectangle.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:56px;height:56px;background:#D42B2B;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div>"
      }
    },
    {
      "desc": "Mixing multiple font families — use only the defined family (Inter).",
      "avoid": {
        "html": "<div style=\"font-family: Georgia, serif;\">PANTONE 2768 C</div>",
        "label": "Avoid"
      },
      "rule": "Mixing multiple font families — use only the defined family (Inter).",
      "do": {
        "label": "Do",
        "html": "<div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;text-transform:uppercase;letter-spacing:0.03em;color:var(--on-bg);\">PANTONE 2768 C</div>"
      }
    },
    {
      "desc": "Glossy or metallic effects — the surface is matte paper, not shiny plastic.",
      "avoid": {
        "html": "<div style=\"width:56px;height:56px;background:#D42B2B;box-shadow: 0 0 10px rgba(0,0,0,0.5);\"></div>",
        "label": "Avoid"
      },
      "rule": "Glossy or metallic effects — the surface is matte paper, not shiny plastic.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:56px;height:56px;background:#D42B2B;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div>"
      }
    }
  ],
  "effects": [],
  "motion": [],
  "colors": {
    "background": "var(--bg)",
    "on-surface": "var(--on-bg)",
    "outline": "var(--border)",
    "surface-container-lowest": "#ffffff",
    "surface": "var(--surface)",
    "primary": "var(--primary)",
    "secondary": "var(--secondary-col)",
    "error": "var(--error)",
    "muted": "var(--on-bg-muted)"
  },
  "typography": {
    "display": {
      "fontFamily": "var(--font-display)",
      "fontSize": "18px",
      "fontWeight": "300",
      "lineHeight": "1.25",
      "letterSpacing": "0.1em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "var(--font-display)",
      "fontSize": "24px",
      "fontWeight": "300",
      "lineHeight": "1.375",
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "var(--font-display)",
      "fontSize": "12px",
      "fontWeight": "300",
      "lineHeight": "1",
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "var(--font-body)",
      "fontSize": "12px",
      "fontWeight": "300",
      "lineHeight": "1.25",
      "letterSpacing": "0.03em",
      "textTransform": "uppercase"
    },
    "label": {
      "fontFamily": "var(--font-body)",
      "fontSize": "6px",
      "fontWeight": "300",
      "lineHeight": "1",
      "letterSpacing": "0.02em",
      "textTransform": "uppercase"
    }
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "chip": "0px"
  },
  "spacing": {
    "component-internal": "0px",
    "section-internal": "16px",
    "page-edge": "56px",
    "gap-component": "8px",
    "gap-section": "24px",
    "height-sm": "56px",
    "height-md": "56px",
    "height-lg": "96px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "PANTONE MATCHING SYSTEM",
      "heroHeadline": "DIGITAL SWATCHBOOK",
      "heroSub": "CLINICAL REFERENCE FOR SPOT COLOUR SPECIFICATION",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">BROWSE FAMILIES</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">EXPORT PACK</button>",
      "navLinks": [
        "SWATCH GRID",
        "FAMILIES",
        "LIBRARY",
        "SPECTRAL DATA"
      ],
      "features": [
        {
          "title": "STRICT GRID",
          "desc": "EVERY SWATCH OCCUPIES A FIXED 56×56 CELL. NO DISTORTION.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 STRICT GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EVERY SWATCH OCCUPIES A FIXED 56×56 CELL. NO DISTORTION.</div></div>"
        },
        {
          "title": "NUMERIC ID",
          "desc": "EACH COLOUR CARRIES A PMS NUMBER AND INK FORMULA.",
          "icon": "🔢",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔢 NUMERIC ID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">EACH COLOUR CARRIES A PMS NUMBER AND INK FORMULA.</div></div>"
        },
        {
          "title": "EMBOSS SIMULATION",
          "desc": "INSET SHADOW MIMICS THE EMBOSS RIDGE OF A PHYSICAL SWATCH.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 EMBOSS SIMULATION</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">INSET SHADOW MIMICS THE EMBOSS RIDGE OF A PHYSICAL SWATCH.</div></div>"
        },
        {
          "title": "PAPER GRAIN",
          "desc": "WARM OFF‑WHITE SUBSTRATE WITH 2% NOISE FOR AUTHENTIC PAPER FEEL.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 PAPER GRAIN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">WARM OFF‑WHITE SUBSTRATE WITH 2% NOISE FOR AUTHENTIC PAPER FEEL.</div></div>"
        }
      ],
      "ctaStripHeadline": "REQUEST PHYSICAL FAN DECK",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">ORDER SAMPLE</button>",
      "sidebarBrand": "PANTONE®",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "FAMILIES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "LIBRARY",
          "active": false
        }
      ],
      "dashboardTitle": "SWATCH LIBRARY",
      "metrics": [
        {
          "label": "SWATCHES",
          "value": "16,384",
          "delta": "+256",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FAMILIES",
          "value": "14",
          "delta": "0",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "INK FORMULAS",
          "value": "2,187",
          "delta": "+12",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CALIBRATED DISPLAYS",
          "value": "47",
          "delta": "-1",
          "dir": "down",
          "direction": "down"
        }
      ],
      "chartTitle": "SPECTRAL DISTRIBUTION BY FAMILY",
      "panelATitle": "COVERAGE ANALYSIS",
      "panelARows": [
        {
          "label": "PMS COVERED",
          "value": "98.2%",
          "pct": 98.2
        },
        {
          "label": "CMYK MAPPING",
          "value": "100%",
          "pct": 100
        },
        {
          "label": "RGB GAMUT",
          "value": "73.5%",
          "pct": 73.5
        },
        {
          "label": "LAB DELTA E",
          "value": "0.89",
          "pct": 0.89
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "RECENT EXPORTS",
      "panelBCells": [
        {
          "label": "PMS 2768 C",
          "value": "EXPORTED",
          "state": "ok"
        },
        {
          "label": "PMS 186 C",
          "value": "EXPORTED",
          "state": "warn"
        },
        {
          "label": "PMS 485 C",
          "value": "EXPORTED",
          "state": "err"
        },
        {
          "label": "PMS 653 C",
          "value": "EXPORTED",
          "state": "ok"
        },
        {
          "label": "PMS 423 C",
          "value": "EXPORTED",
          "state": "warn"
        },
        {
          "label": "PMS 1585 C",
          "value": "EXPORTED",
          "state": "err"
        },
        {
          "label": "PMS 363 C",
          "value": "EXPORTED",
          "state": "ok"
        },
        {
          "label": "PMS 233 C",
          "value": "EXPORTED",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "REDS",
        "ORANGES",
        "YELLOWS",
        "GREENS",
        "BLUES",
        "VIOLETS"
      ],
      "series": [
        {
          "data": [
            95,
            88,
            92,
            84,
            91,
            78,
            78,
            78,
            78,
            78,
            78,
            78
          ],
          "label": "SATURATION",
          "axis": "left",
          "color": "#D42B2B"
        },
        {
          "data": [
            45,
            55,
            70,
            50,
            40,
            35,
            35,
            35,
            35,
            35,
            35,
            35
          ],
          "label": "LIGHTNESS",
          "axis": "right-1",
          "color": "#0047AB"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#f5f4f0;padding:56px;'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:24px;font-weight:300;text-transform:uppercase;letter-spacing:0.1em;color:var(--on-bg);margin-bottom:8px;\">PANTONE MATCHING SYSTEM</div><div style=\"font-family:var(--font-display);font-size:14px;font-weight:300;text-transform:uppercase;letter-spacing:0.025em;color:var(--on-bg-muted);margin-bottom:32px;\">DIGITAL SWATCHBOOK</div><div style=\"display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:600px;\"><div style=\"width:56px;height:56px;background:var(--primary);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div style=\"width:56px;height:56px;background:var(--secondary-col);box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div style=\"width:56px;height:56px;background:#22C55E;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div style=\"width:56px;height:56px;background:#FF8C42;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div style=\"width:56px;height:56px;background:#B22222;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div><div style=\"width:56px;height:56px;background:#0047AB;box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);\"></div></div>'; }",
    "showcaseRender": "function(el) { el.style.cssText='display:flex;flex-wrap:wrap;gap:8px;justify-content:center;padding:24px;'; var colors=['var(--primary)','var(--secondary-col)','#22C55E','#FF8C42','#D42B2B','#0047AB','#B22222','#22C55E']; var names=['PANTONE 2768 C','PANTONE 2945 C','PANTONE 362 C','PANTONE 1495 C','PANTONE 186 C','PANTONE 653 C','PANTONE 484 C','PANTONE 363 C']; for(var i=0;i<colors.length;i++){ var sw=document.createElement('div'); sw.style.cssText='display:flex;flex-direction:column;align-items:center;'; var tile=document.createElement('div'); tile.style.cssText='width:56px;height:56px;background:'+colors[i]+';box-shadow:inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.1);'; sw.appendChild(tile); var label=document.createElement('div'); label.style.cssText='font-family:var(--font-body);font-size:12px;font-weight:300;text-transform:uppercase;letter-spacing:0.03em;color:var(--on-bg);margin-top:4px;'; label.textContent=names[i]; sw.appendChild(label); el.appendChild(sw); } }",
    "panelCRender": "function(el) { var html='<div style=\"padding:16px;font-family:var(--font-body);color:var(--on-bg);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:300;text-transform:uppercase;letter-spacing:0.1em;color:var(--primary);margin-bottom:16px;\">COVERAGE ANALYSIS</div>'; html+='<div style=\"display:flex;flex-direction:column;gap:8px;\">'; var items=[{label:\"PMS COVERED\",value:\"98.2%\"},{label:\"CMYK MAPPING\",value:\"100%\"},{label:\"RGB GAMUT\",value:\"73.5%\"},{label:\"LAB DELTA E\",value:\"0.89\"}]; for(var i=0;i<items.length;i++){ html+='<div style=\"display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--outline-variant);padding:4px 0;font-size:12px;\"><span>'+items[i].label+'</span><span>'+items[i].value+'</span></div>'; } html+='</div></div>'; el.innerHTML=html; }",
    "heroBackground": "function(el) { el.style.background = '#f5f4f0'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:repeating-linear-gradient(90deg, var(--outline-variant) 0px, var(--outline-variant) 2px, transparent 2px, transparent 4px);'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#f5f4f0'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var size = 10; var pos = (tick * 0.5) % size; el.style.backgroundImage = 'radial-gradient(circle, var(--outline-variant) 1px, transparent 1px)'; el.style.backgroundSize = size + 'px ' + size + 'px'; el.style.backgroundPosition = pos + 'px ' + pos + 'px'; }",
  "shadcnTokens": {
    "--color-background": "#f5f4f0",
    "--color-popover": "#f5f4f0",
    "--color-foreground": "#1a1a1a",
    "--color-card-foreground": "#1a1a1a",
    "--color-popover-foreground": "#1a1a1a",
    "--color-card": "#ffffff",
    "--color-muted": "#ffffff",
    "--color-muted-foreground": "#4a4a4a",
    "--color-primary": "#D42B2B",
    "--color-ring": "#D42B2B",
    "--color-primary-foreground": "#ffffff",
    "--color-secondary": "#D42B2B",
    "--color-accent": "#D42B2B",
    "--color-secondary-foreground": "#ffffff",
    "--color-accent-foreground": "#ffffff",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#B22222"
  },
  "shadcnTokensClassic": {
    "--background": "#f5f4f0",
    "--popover": "#f5f4f0",
    "--foreground": "#1a1a1a",
    "--card-foreground": "#1a1a1a",
    "--popover-foreground": "#1a1a1a",
    "--card": "#ffffff",
    "--muted": "#ffffff",
    "--muted-foreground": "#4a4a4a",
    "--primary": "#D42B2B",
    "--ring": "#D42B2B",
    "--primary-foreground": "#ffffff",
    "--secondary": "#D42B2B",
    "--accent": "#D42B2B",
    "--secondary-foreground": "#ffffff",
    "--accent-foreground": "#ffffff",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#B22222"
  }
});
