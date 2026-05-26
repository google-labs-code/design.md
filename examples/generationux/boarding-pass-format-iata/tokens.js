registerSystem({
  "meta": {
    "name": "IATA Boarding Pass",
    "tagline": "A utilitarian, data-dense interface translating the iconic airline paper document into a constrained UI primitive.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
  },
  "yamlTokens": {
    "name": "IATA Boarding Pass",
    "colors": {
      "neutral": "#FAF8F5",
      "on-surface": "#1A2A3A",
      "on-surface-variant": "#999999",
      "on-primary": "#FFFFFF",
      "outline": "#999999",
      "barcode-black": "#000000"
    },
    "typography": {
      "display": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "22px",
        "fontWeight": 700,
        "lineHeight": 1.3,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "19px",
        "fontWeight": 700,
        "lineHeight": 1.3,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "13px",
        "fontWeight": 400,
        "lineHeight": 1.3,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "IBM Plex Mono",
        "fontSize": "7px",
        "fontWeight": 400,
        "lineHeight": 1.3,
        "letterSpacing": "0em",
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
      "component-internal": "4px",
      "section-internal": "8px",
      "page-edge": "4px",
      "gap-component": "8px",
      "height-sm": "24px",
      "height-md": "32px",
      "height-lg": "48px",
      "icon": "16px"
    },
    "components": {
      "card-frame": {
        "backgroundColor": "{colors.neutral}",
        "rounded": "{rounded.card}",
        "padding": "4px"
      },
      "airport-code-triad": {
        "textColor": "{colors.on-surface}"
      },
      "barcode-block": {
        "backgroundColor": "{colors.barcode-black}",
        "rounded": "{rounded.default}",
        "width": "1in",
        "height": "1in"
      }
    },
    "version": "alpha",
    "description": "The IATA Boarding Pass design system translates the iconic airline paper document into a constrained, utilitarian UI primitive. Its emotional register is impersonal yet trustworthy—every pixel serves a transactional purpose.",
    "provenance": {
      "coverage_status": "sparse",
      "identity_description": "This slug refers to the IATA Boarding Pass Standard – the internationally prescribed format for airline boarding passes, governed by IATA Resolution 722 (and its successors). The standard defines the layout, data fields, barcode symbology, and minimum visual requirements for machine-readable boarding passes. The visual identity described here is the generic canonical template as specified ",
      "manual_enrichment_required": false,
      "imagery_count": 4,
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
          "host": "www.icao.int",
          "count": 1
        },
        {
          "host": "www.hugedomains.com",
          "count": 1
        },
        {
          "host": "www.iata.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Boarding_pass",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Commons",
          "confidence_original": "high"
        },
        {
          "url": "https://www.icao.int/",
          "host": "www.icao.int",
          "institution": "International Civil Aviation Organization (ICAO)",
          "confidence_original": "low"
        },
        {
          "url": "https://www.hugedomains.com/domain_profile.cfm?d=azteccode.com",
          "host": "www.hugedomains.com",
          "institution": "Aztec Code promotion site",
          "confidence_original": "low"
        },
        {
          "url": "https://www.iata.org/",
          "host": "www.iata.org",
          "institution": "IATA",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": [
        {
          "name": "OCR-B",
          "foundry": "Monotype",
          "year": 1968,
          "google_fonts": "Roboto Mono",
          "attestation": "conventional"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "sparse_imagery",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **IATA Resolution 722 – full text or graphic appendix**": "Not publicly accessible. Resolved by acquiring a copy from IATA (cost) or locating an archived PDF in a university library.\""
        }
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FAF8F5",
    "--on-bg": "#1A2A3A",
    "--primary": "#0033A0",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#D6E4FF",
    "--on-secondary": "#1A2A3A",
    "--surface": "#FAF8F5",
    "--on-bg-muted": "#909090",
    "--border": "#999999",
    "--error": "#CC0000",
    "--font-display": "'IBM Plex Mono', monospace",
    "--font-body": "'IBM Plex Mono', monospace",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "primary": "#0033A0",
    "onPrimary": "#FFFFFF",
    "secondary": "#D6E4FF",
    "onSecondary": "#1A2A3A",
    "surface": "#FAF8F5",
    "onSurface": "#1A2A3A",
    "background": "#FAF8F5",
    "onBackground": "#1A2A3A",
    "outline": "#999999",
    "error": "#CC0000",
    "barcode": "#000000",
    "err": "#CC0000",
    "warn": "#FF8C42",
    "ok": "#22C55E",
    "deltaUp": "#22C55E",
    "deltaDown": "#CC0000",
    "deltaFlat": "#909090",
    "live": "#0033A0",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#909090",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#909090",
    "fontFamily": "'IBM Plex Mono', monospace"
  },
  "dashboardStyle": {
    "layout": "Single column of boarding pass cards stacked vertically, each card at 480px wide, left-aligned, with full-width dashed dividers between cards. The overall dashboard is tightly packed with no extra whitespace.",
    "density": "Maximum density: 8px gap between components, 4px internal padding. No empty rows or decorative spacing.",
    "panelTreatment": "Each panel is a boarding pass card with the thermal grain overlay. No headers or footers beyond the card's own data. Panels are separated by perforation-style dotted lines.",
    "dataVizStyle": "No charts. Data is represented as monospace text tables with extreme size contrast (22px display vs 7px labels). Only numeric data (flight numbers, times, seat numbers) and airport codes.",
    "signatureElement": "Airport code triad in the top-left of each card, oversized 22px bold monospace with arrow separators."
  },
  "landingStyle": {
    "heroApproach": "A single oversized boarding pass card (600px width) centered on a thermal paper fullscreen background. The hero card displays the user's destination in 48px airport code triad, with smaller data rows below. No distracting hero images.",
    "scrollBehavior": "Smooth scroll but no parallax. As the user scrolls, boarding pass cards feed in from the top with a 300ms ease-out animation (feed-in).",
    "ctaStyle": "Primary 'CHECK-IN' button at the bottom of the hero card. Utilitarian, no hover effects beyond a subtle border highlight. Secondary 'Modify Booking' as a flat underlined text button.",
    "signatureMoment": "Upon page load, the barcode block draws itself (barcode-scan animation) and the airport code types out letter by letter (typewriter animation). The thermal paper grain overlay fades in globally."
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "svg feTurbulence",
      "baseFrequency": 0.65,
      "numOctaves": 3,
      "mixBlendMode": "overlay",
      "opacity": 0.1,
      "color": "monochrome"
    },
    "optionalOverlays": [
      "misregistration",
      "ink fade",
      "crease",
      "paper curl vignette"
    ]
  },
  "globalFilter": null,
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { position: relative; } .ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; mix-blend-mode: overlay; opacity: 0.1; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\"); } .ds-layout-frame * { border-radius: var(--radius-default); box-shadow: none; }",
  "interactionModel": {
    "hover": {},
    "focus": {},
    "active": {},
    "transitionDuration": "300ms",
    "transitionEasing": "ease-out",
    "exemptAnimations": [
      "feed-in",
      "barcode-scan",
      "tear-off",
      "typewriter"
    ]
  },
  "interactionStyles": ".ds-layout-frame button, .ds-layout-frame a, .ds-layout-frame input, .ds-layout-frame select { transition: none; } .ds-layout-frame button:hover { box-shadow: none !important; }",
  "spacing": {
    "component-internal": "4px",
    "section-internal": "8px",
    "page-edge": "4px",
    "gap-component": "8px",
    "height-sm": "24px",
    "height-md": "32px",
    "height-lg": "48px",
    "icon": "16px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "level0": "none",
    "level1": "none",
    "level2": "none",
    "level3": "none"
  },
  "buttons": [
    {
      "name": "Check-in",
      "desc": "Primary action: commence boarding pass issuance. Solid primary background, no corners, all caps monospace.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: none; font-family: var(--font-display); font-size: var(--body-size); font-weight: 700; padding: 12px 24px; cursor: pointer; text-transform: uppercase; letter-spacing: 0.05em;\">CHECK-IN</button>",
      "label": "Check-in",
      "note": "Primary action: commence boarding pass issuance. Solid primary background, no corners, all caps monospace."
    },
    {
      "name": "Cancel",
      "desc": "Secondary action: cancel reservation. Outline style with border matching muted gray.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg); border: 1px solid var(--border); font-family: var(--font-body); font-size: var(--body-size); font-weight: 400; padding: 12px 24px; cursor: pointer; text-transform: uppercase;\">CANCEL</button>",
      "label": "Cancel",
      "note": "Secondary action: cancel reservation. Outline style with border matching muted gray."
    },
    {
      "name": "Change Seat",
      "desc": "Flat action: modify seat assignment. No border, muted text, behaves like a link.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--on-bg-muted); border: none; font-family: var(--font-body); font-size: var(--label-size); font-weight: 400; padding: 8px 16px; cursor: pointer; text-transform: uppercase; text-decoration: underline;\">CHANGE SEAT</button>",
      "label": "Change Seat",
      "note": "Flat action: modify seat assignment. No border, muted text, behaves like a link."
    }
  ],
  "cards": [
    {
      "name": "Boarding Pass",
      "desc": "The full boarding pass card at 203mm × 80mm scale. Thermal paper background, left-aligned grid, extreme size contrast, dashed dividers, unrounded corners.",
      "html": "<div style=\"width: 480px; height: 320px; background: var(--bg); border: 1px dashed var(--border); padding: var(--page-edge); font-family: var(--font-body); display: flex; flex-direction: column; gap: var(--gap-component);\"><div style=\"display: flex; justify-content: space-between;\"><span style=\"font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--on-bg);\">JFK ▸ LHR</span><span style=\"font-family: var(--font-display); font-size: 19px; font-weight: 700; color: var(--on-bg); text-align: right;\">GATE B7<br>10:45</span></div><hr style=\"border: none; border-top: 1px dashed var(--border); width: 100%; margin: 0;\"><div><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">PASSENGER</span><br><span style=\"font-size: 13px; color: var(--on-bg); text-transform: uppercase;\">SMITH/JOHN</span></div><hr style=\"border: none; border-top: 1px dashed var(--border); width: 100%; margin: 0;\"><div><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">SEAT</span><br><div style=\"border: 2px solid var(--primary); background: rgba(0,51,160,0.1); padding: 4px 8px; display: inline-block;\"><span style=\"font-size: 19px; font-weight: 700; color: var(--primary);\">12A</span></div></div><hr style=\"border: none; border-top: 1px dashed var(--border); width: 100%; margin: 0;\"><div style=\"display: flex; gap: 8px;\"><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">FLIGHT</span><span style=\"font-size: 13px; color: var(--on-bg);\">AA 102</span></div><div style=\"display: flex; gap: 8px;\"><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">DATE</span><span style=\"font-size: 13px; color: var(--on-bg);\">15 OCT 2024</span></div><hr style=\"border: none; border-top: 1px dashed var(--border); width: 100%; margin: 0;\"><div style=\"width: 96px; height: 96px; background: var(--barcode); margin-top: auto; align-self: flex-start;\"></div><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase; letter-spacing: 0.1em; margin-top: auto;\">BOARDING PASS</span></div>",
      "label": "Boarding Pass",
      "note": "The full boarding pass card at 203mm × 80mm scale. Thermal paper background, left-aligned grid, extreme size contrast, dashed dividers, unrounded corners."
    },
    {
      "name": "Ticket Stub (Tear-off)",
      "desc": "Boarding pass with a perforation separation line and a stub section, highlighting the tear-off object property.",
      "html": "<div style=\"width: 480px; height: 320px; background: var(--bg); border: 1px dashed var(--border); padding: var(--page-edge); font-family: var(--font-body); display: flex; flex-direction: column; gap: var(--gap-component);\"><div style=\"display: flex; justify-content: space-between;\"><span style=\"font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--on-bg);\">LAX ▸ NRT</span><span style=\"font-family: var(--font-display); font-size: 19px; font-weight: 700; color: var(--on-bg); text-align: right;\">GATE 45<br>23:55</span></div><hr style=\"border: none; border-top: 1px dashed var(--border); width: 100%; margin: 0;\"><div><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">PASSENGER</span><br><span style=\"font-size: 13px; color: var(--on-bg); text-transform: uppercase;\">JONES/EMILY</span></div><hr style=\"border: none; border-top: 1px dashed var(--border); width: 100%; margin: 0;\"><div><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">SEAT</span><br><div style=\"border: 2px solid var(--primary); background: rgba(0,51,160,0.1); padding: 4px 8px; display: inline-block;\"><span style=\"font-size: 19px; font-weight: 700; color: var(--primary);\">14F</span></div></div><hr style=\"border: none; border-top: 2px dotted var(--border); width: 100%; margin: 16px 0;\"><div style=\"display: flex; justify-content: space-between;\"><span style=\"font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">STUB</span><span style=\"font-size: 13px; color: var(--on-bg);\">RETAIN FOR BAGGAGE</span></div></div>",
      "label": "Ticket Stub (Tear-off)",
      "note": "Boarding pass with a perforation separation line and a stub section, highlighting the tear-off object property."
    }
  ],
  "forms": [
    {
      "name": "Flight Number Input",
      "desc": "Text input for flight number. Monospace, no rounded corners, dashed outline, minimal label.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">FLIGHT NUMBER</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"AA 102\" style=\"background: transparent; border: 1px dashed var(--border); font-family: var(--font-body); font-size: 13px; color: var(--on-bg); padding: 8px; outline: none;\" /></div>",
      "label": "Flight Number Input",
      "stateLabel": "Text input for flight number. Monospace, no rounded corners, dashed outline, minimal label."
    },
    {
      "name": "Gate Selector",
      "desc": "Select dropdown for gate selection. Dashed border, monospace, uppercase.",
      "html": "<div style=\"display: flex; flex-direction: column; gap: 4px;\"><label style=\"font-family: var(--font-body); font-size: 7px; color: var(--on-bg-muted); text-transform: uppercase;\">GATE</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: 1px dashed var(--border); font-family: var(--font-body); font-size: 13px; color: var(--on-bg); padding: 8px; text-transform: uppercase; appearance: none;\"><option>A12</option><option>B7</option><option>C3</option></select></div>",
      "label": "Gate Selector",
      "stateLabel": "Select dropdown for gate selection. Dashed border, monospace, uppercase."
    },
    {
      "name": "Priority Boarding Toggle",
      "desc": "Checkbox for optional service. Dashed border for its container, monospace label.",
      "html": "<div style=\"display: flex; align-items: center; gap: 8px; border: 1px dashed var(--border); padding: 8px;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" id=\"priority-5283\" style=\"width: 16px; height: 16px; border: 1px solid var(--border);\" /><label for=\"priority-5283\" style=\"font-family: var(--font-body); font-size: 13px; color: var(--on-bg); text-transform: uppercase;\">PRIORITY BOARDING</label></div>",
      "label": "Priority Boarding Toggle",
      "stateLabel": "Checkbox for optional service. Dashed border for its container, monospace label."
    }
  ],
  "extraComponents": [
    {
      "name": "Barcode Block",
      "desc": "Simulated PDF417 barcode block. Pure black square with white vertical stripes, representing the 2D barcode.",
      "html": "<div style=\"width: 96px; height: 96px; background: var(--barcode); display: flex; flex-wrap: wrap; gap: 2px; padding: 4px;\"><div style=\"width: 4px; height: 100%; background: white;\"></div><div style=\"width: 8px; height: 100%; background: white;\"></div><div style=\"width: 6px; height: 100%; background: white;\"></div><div style=\"width: 10px; height: 100%; background: white;\"></div><div style=\"width: 5px; height: 100%; background: white;\"></div></div>"
    },
    {
      "name": "Seat Callout Box",
      "desc": "Standalone seat identifier with primary accent border and 10% fill. Used to highlight assigned seat.",
      "html": "<div style=\"border: 2px solid var(--primary); background: rgba(0,51,160,0.1); padding: 8px 16px; display: inline-block;\"><span style=\"font-family: var(--font-display); font-size: 19px; font-weight: 700; color: var(--primary); text-transform: uppercase;\">14F</span></div>"
    },
    {
      "name": "Airport Code Triad",
      "desc": "Three-letter airport codes with arrow. The signature visual element, bold monospace.",
      "html": "<div style=\"font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.05em;\">JFK ▸ LHR ▸ NRT</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — JFK ▸ LHR</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — GATE B7</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — SMITH/JOHN</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — FLIGHT AA 102 · 15 OCT 2024</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — PASSENGER · GATE · SEAT · CLASS</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not add rounded corners to any element.",
      "avoid": {
        "html": "<div style=\"width: 480px; height: 320px; background: #FAF8F5; border: 1px solid #999; border-radius: 8px; padding: 16px;\">Rounded corners break the rigid paper feel.</div>",
        "label": "Avoid"
      },
      "rule": "Do not add rounded corners to any element.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:480px;height:320px;background:var(--bg);border:1px dashed var(--border);padding:4px;font-family:var(--font-body);display:flex;flex-direction:column;gap:8px;\"><span style=\"font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--on-bg);\">JFK ▸ LHR</span><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><span style=\"font-size:7px;color:var(--on-bg-muted);\">PASSENGER</span><span style=\"font-size:13px;color:var(--on-bg);\">SMITH/JOHN</span></div>"
      }
    },
    {
      "desc": "Do not use gradients, drop shadows, or photographic backgrounds on the card surface.",
      "avoid": {
        "html": "<div style=\"width: 480px; height: 320px; background: linear-gradient(#FAF8F5, #E0D8D0); box-shadow: 0 4px 12px rgba(0,0,0,0.2); border-radius: 0; padding: 16px;\">Gradients and shadows destroy the thermal paper illusion.</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients, drop shadows, or photographic backgrounds on the card surface.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:480px;height:320px;background:var(--bg);border:1px dashed var(--border);padding:4px;font-family:var(--font-body);display:flex;flex-direction:column;gap:8px;\"><span style=\"font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--on-bg);\">JFK ▸ LHR</span><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><span style=\"font-size:7px;color:var(--on-bg-muted);\">PASSENGER</span><span style=\"font-size:13px;color:var(--on-bg);\">SMITH/JOHN</span></div>"
      }
    },
    {
      "desc": "Do not center-align the layout or use script/italic typefaces.",
      "avoid": {
        "html": "<div style=\"width: 480px; height: 320px; background: #FAF8F5; text-align: center; font-family: 'Georgia', serif; font-style: italic; border: none; padding: 16px;\">Center alignment and italic type violate the utilitarian boarding pass norm.</div>",
        "label": "Avoid"
      },
      "rule": "Do not center-align the layout or use script/italic typefaces.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:480px;height:320px;background:var(--bg);border:1px dashed var(--border);padding:4px;font-family:var(--font-body);display:flex;flex-direction:column;gap:8px;\"><span style=\"font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--on-bg);\">JFK ▸ LHR</span><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><span style=\"font-size:7px;color:var(--on-bg-muted);\">PASSENGER</span><span style=\"font-size:13px;color:var(--on-bg);\">SMITH/JOHN</span></div>"
      }
    },
    {
      "desc": "Do not use generous whitespace or multiple accent colors.",
      "avoid": {
        "html": "<div style=\"width: 480px; height: 320px; background: #FAF8F5; padding: 32px; border: none;\"><div style=\"display: flex; flex-direction: column; gap: 24px;\"><span style=\"color: red; font-size: 24px;\">LAX</span><span style=\"color: blue; font-size: 24px;\">NRT</span></div></div>Generous spacing and multiple accent colors make the pass illegible at a glance.</div>",
        "label": "Avoid"
      },
      "rule": "Do not use generous whitespace or multiple accent colors.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "IATA 722 STANDARD",
      "heroHeadline": "BOARDING PASS GENERATOR",
      "heroSub": "COMPLIANT DOCUMENT PREVIEW FOR FLIGHT 417",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">GENERATE PASS</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">PRINT BATCH</button>",
      "navLinks": [
        "FLIGHTS",
        "GATES",
        "SEATS",
        "PASSENGERS"
      ],
      "features": [
        {
          "title": "AIRPORT CODE TRIAD",
          "desc": "Oversized origin-destination display with strict monospace spacing",
          "icon": "",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">AIRPORT CODE TRIAD</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Oversized origin-destination display with strict monospace spacing</div></div>"
        },
        {
          "title": "BARCODE BLOCK",
          "desc": "PDF417 and Aztec symbology with 1-inch quiet zone and pure black ink",
          "icon": "",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">BARCODE BLOCK</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">PDF417 and Aztec symbology with 1-inch quiet zone and pure black ink</div></div>"
        },
        {
          "title": "SEAT CALLOUT BOX",
          "desc": "Spot-color accent border and 10% fill for seat assignment emphasis",
          "icon": "",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">SEAT CALLOUT BOX</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Spot-color accent border and 10% fill for seat assignment emphasis</div></div>"
        },
        {
          "title": "DATA ROW GRID",
          "desc": "Left-aligned label-value pairs with extreme 22px to 7px size contrast",
          "icon": "",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">DATA ROW GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Left-aligned label-value pairs with extreme 22px to 7px size contrast</div></div>"
        }
      ],
      "ctaStripHeadline": "START GENERATING BOARDING PASSES",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">LAUNCH TERMINAL</button>",
      "sidebarBrand": "IATA BP",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "PASSES",
          "active": true
        },
        {
          "icon": "◉",
          "label": "GATE MAP",
          "active": false
        },
        {
          "icon": "◉",
          "label": "CARRIERS",
          "active": false
        },
        {
          "icon": "◉",
          "label": "SCHEDULE",
          "active": false
        }
      ],
      "dashboardTitle": "GATE CONTROL",
      "metrics": [
        {
          "label": "PASSES PRINTED",
          "value": "1,247",
          "delta": "+8%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "FLIGHTS ACTIVE",
          "value": "14",
          "delta": "+2",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "GATES OCCUPIED",
          "value": "11",
          "delta": "-3",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "SEATS ASSIGNED",
          "value": "2,034",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "LOAD FACTOR TREND",
      "panelATitle": "ACTIVE FLIGHTS",
      "panelARows": [
        {
          "label": "FLT 417",
          "value": "GATE B7",
          "pct": 7
        },
        {
          "label": "FLT 822",
          "value": "GATE C12",
          "pct": 12
        },
        {
          "label": "FLT 190",
          "value": "GATE A3",
          "pct": 3
        },
        {
          "label": "FLT 654",
          "value": "GATE D9",
          "pct": 9
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "SEAT ALLOCATION",
      "panelBCells": [
        {
          "label": "ROW 1A",
          "value": "WINDOW",
          "state": "ok"
        },
        {
          "label": "ROW 1B",
          "value": "MIDDLE",
          "state": "warn"
        },
        {
          "label": "ROW 1C",
          "value": "AISLE",
          "state": "err"
        },
        {
          "label": "ROW 2A",
          "value": "WINDOW",
          "state": "ok"
        },
        {
          "label": "ROW 2B",
          "value": "MIDDLE",
          "state": "warn"
        },
        {
          "label": "ROW 2C",
          "value": "AISLE",
          "state": "err"
        },
        {
          "label": "ROW 3A",
          "value": "WINDOW",
          "state": "ok"
        },
        {
          "label": "ROW 3B",
          "value": "MIDDLE",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00"
      ],
      "series": [
        {
          "data": [
            120,
            230,
            410,
            380,
            290,
            180,
            180,
            180,
            180,
            180,
            180,
            180
          ],
          "label": "PASSES BOARDED",
          "axis": "left",
          "color": "#0033A0"
        },
        {
          "data": [
            140,
            260,
            450,
            410,
            310,
            200,
            200,
            200,
            200,
            200,
            200,
            200
          ],
          "label": "PASSES PRINTED",
          "axis": "right-1",
          "color": "#D6E4FF"
        }
      ]
    },
    "splashRender": "function(el){ el.style.cssText='display:flex;align-items:center;justify-content:center;min-height:100vh;background:var(--bg);'; el.innerHTML='<div style=\"width:600px;height:320px;background:var(--bg);border:1px dashed var(--border);padding:4px;font-family:var(--font-body);display:flex;flex-direction:column;gap:8px;\"><div style=\"display:flex;justify-content:space-between;\"><span style=\"font-family:var(--font-display);font-size:22px;font-weight:700;color:var(--on-bg);\">JFK ▸ LHR</span><span style=\"font-family:var(--font-display);font-size:19px;font-weight:700;color:var(--on-bg);text-align:right;\">GATE B7<br>10:45</span></div><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><div><span style=\"font-size:7px;color:var(--on-bg-muted);text-transform:uppercase;\">PASSENGER</span><br><span style=\"font-size:13px;color:var(--on-bg);text-transform:uppercase;\">SMITH/JOHN</span></div><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><div><span style=\"font-size:7px;color:var(--on-bg-muted);text-transform:uppercase;\">SEAT</span><br><div style=\"border:2px solid var(--primary);background:rgba(0,51,160,0.1);padding:4px 8px;display:inline-block;\"><span style=\"font-size:19px;font-weight:700;color:var(--primary);\">12A</span></div></div><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><div style=\"display:flex;gap:8px;\"><span style=\"font-size:7px;color:var(--on-bg-muted);text-transform:uppercase;\">FLIGHT</span><span style=\"font-size:13px;color:var(--on-bg);\">AA 102</span></div><div style=\"display:flex;gap:8px;\"><span style=\"font-size:7px;color:var(--on-bg-muted);text-transform:uppercase;\">DATE</span><span style=\"font-size:13px;color:var(--on-bg);\">15 OCT 2024</span></div><hr style=\"border:none;border-top:1px dashed var(--border);width:100%;margin:0;\"><div style=\"width:96px;height:96px;background:var(--barcode);margin-top:auto;align-self:flex-start;\"></div><span style=\"font-size:7px;color:var(--on-bg-muted);text-transform:uppercase;letter-spacing:0.1em;margin-top:auto;\">BOARDING PASS</span></div>'; }",
    "showcaseRender": "function(el){ el.style.cssText='display:grid;grid-template-columns:repeat(2,1fr);gap:16px;padding:16px;'; el.innerHTML='<div style=\"padding:16px;border:1px dashed var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">AIRPORT CODE TRIAD</div><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">Oversized origin-destination display with strict monospace spacing</div></div><div style=\"padding:16px;border:1px dashed var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">BARCODE BLOCK</div><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">PDF417 and Aztec symbology with 1-inch quiet zone and pure black ink</div></div><div style=\"padding:16px;border:1px dashed var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">SEAT CALLOUT BOX</div><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">Spot-color accent border and 10% fill for seat assignment emphasis</div></div><div style=\"padding:16px;border:1px dashed var(--border);background:var(--surface);\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">DATA ROW GRID</div><div style=\"font-size:12px;color:var(--on-bg-muted);margin-top:8px;\">Left-aligned label-value pairs with extreme 22px to 7px size contrast</div></div>'; }",
    "panelCRender": "function(el){ el.style.cssText='padding:16px;background:var(--bg);border:1px dashed var(--border);font-family:var(--font-body);'; el.innerHTML='<div style=\"display:flex;justify-content:space-between;\"><span style=\"font-size:19px;font-weight:700;color:var(--on-bg);\">LAX ▸ NRT</span><span style=\"font-size:13px;color:var(--on-bg-muted);\">GATE 45</span></div><hr style=\"border:none;border-top:2px dotted var(--border);margin:16px 0;\"><div><span style=\"font-size:7px;color:var(--on-bg-muted);text-transform:uppercase;\">STUB</span><br><span style=\"font-size:13px;color:var(--on-bg);\">RETAIN FOR BAGGAGE</span></div>'; }",
    "heroBackground": "function(el){ el.style.background='var(--bg)'; }",
    "ctaBackground": "function(el){ el.style.background='var(--bg)'; }",
    "sectionSeparator": "function(){ var d=document.createElement('div'); d.style.cssText='border:none;border-top:1px dashed var(--border);width:100%;margin:8px 0;'; return d; }",
    "dashboardShellBackground": "function(el){ el.style.background='var(--bg)'; }",
    "surfaceOverlay": "function(el){ var svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('width','100%'); svg.setAttribute('height','100%'); svg.style.cssText='position:absolute;inset:0;z-index:2;pointer-events:none;mix-blend-mode:overlay;opacity:0.1;'; var filter=document.createElementNS('http://www.w3.org/2000/svg','filter'); filter.setAttribute('id','grain'); var feTurb=document.createElementNS('http://www.w3.org/2000/svg','feTurbulence'); feTurb.setAttribute('type','fractalNoise'); feTurb.setAttribute('baseFrequency','0.65'); feTurb.setAttribute('numOctaves','3'); filter.appendChild(feTurb); svg.appendChild(filter); var rect=document.createElementNS('http://www.w3.org/2000/svg','rect'); rect.setAttribute('width','100%'); rect.setAttribute('height','100%'); rect.setAttribute('filter','url(#grain)'); rect.setAttribute('opacity','1'); svg.appendChild(rect); el.appendChild(svg); }"
  },
  "ambientCanvas": "function(tick){ var p = Math.round(tick * 100); var q = Math.round((1 - tick) * 100); return '<div style=\"position:absolute;left:0;top:' + p + '%;width:100%;height:2px;background:var(--primary);opacity:0.15;pointer-events:none;\"></div><div style=\"position:absolute;left:' + q + '%;top:0;width:2px;height:100%;background:var(--primary);opacity:0.1;pointer-events:none;\"></div>'; }",
  "shadcnTokens": {
    "--color-background": "#FAF8F5",
    "--color-popover": "#FAF8F5",
    "--color-foreground": "#1A2A3A",
    "--color-card-foreground": "#1A2A3A",
    "--color-popover-foreground": "#1A2A3A",
    "--color-card": "#FAF8F5",
    "--color-muted": "#FAF8F5",
    "--color-muted-foreground": "#909090",
    "--color-primary": "#0033A0",
    "--color-ring": "#0033A0",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#D6E4FF",
    "--color-accent": "#D6E4FF",
    "--color-secondary-foreground": "#1A2A3A",
    "--color-accent-foreground": "#1A2A3A",
    "--color-border": "#999999",
    "--color-input": "#999999",
    "--color-destructive": "#CC0000"
  },
  "shadcnTokensClassic": {
    "--background": "#FAF8F5",
    "--popover": "#FAF8F5",
    "--foreground": "#1A2A3A",
    "--card-foreground": "#1A2A3A",
    "--popover-foreground": "#1A2A3A",
    "--card": "#FAF8F5",
    "--muted": "#FAF8F5",
    "--muted-foreground": "#909090",
    "--primary": "#0033A0",
    "--ring": "#0033A0",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#D6E4FF",
    "--accent": "#D6E4FF",
    "--secondary-foreground": "#1A2A3A",
    "--accent-foreground": "#1A2A3A",
    "--border": "#999999",
    "--input": "#999999",
    "--destructive": "#CC0000"
  }
});
