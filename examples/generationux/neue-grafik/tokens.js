registerSystem({
  "meta": {
    "name": "Neue Grafik",
    "tagline": "Rational clarity of Swiss Graphic Design translated into digital interfaces.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap"
  },
  "yamlTokens": {
    "name": "Neue Grafik",
    "colors": {
      "ok": "#000000",
      "warn": "#FDD835",
      "delta-up": "#000000",
      "delta-flat": "#999999"
    },
    "typography": {
      "display": {
        "fontFamily": "Archivo",
        "fontSize": "48px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Archivo",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Archivo",
        "fontSize": "20px",
        "fontWeight": 600,
        "lineHeight": 1.375,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Archivo",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Archivo",
        "fontSize": "12px",
        "fontWeight": 500,
        "lineHeight": 1,
        "letterSpacing": "0.025em",
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
      "gap-component": "24px",
      "gap-section": "48px",
      "height-sm": "32px",
      "height-md": "40px",
      "height-lg": "48px",
      "icon": "20px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "12px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#E31E24",
        "textColor": "#FFFFFF",
        "padding": "12px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "12px",
        "height": "40px"
      },
      "button-secondary-hover": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "padding": "12px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "24px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}",
        "padding": "12px"
      },
      "metric-cell": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.card}",
        "padding": "8px"
      },
      "data-table-row": {
        "backgroundColor": "#FFFFFF",
        "padding": "8px"
      }
    },
    "version": "alpha",
    "description": "Neue Grafik translates the rational clarity of mid-20th-century Swiss Graphic Design into digital interfaces. The system trusts that information structure is inherently beautiful: every element earns its place through function, never ornament.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `neue-grafik` refers to Neue Grafik / New Graphic Design / Graphisme actuel, a trilingual Swiss graphic design journal published quarterly from 1958 to 1965 (some sources cite 1959–1965; the exact first issue year is CONTESTED:§0.publication_start_year — providers gave: [1958 / 1959]; no primary source; re-stack required). It was founded and edited by Richard Paul Lohse, Josef Müller‑",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "en.wikipedia.org",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://en.wikipedia.org/wiki/Neue_Grafik",
          "host": "en.wikipedia.org",
          "institution": "Wikimedia Foundation",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Akzidenz-Grotesk",
          "foundry": "Berthold",
          "year": null,
          "google_fonts": "Archivo",
          "attestation": "conventional"
        }
      ],
      "flags": [
        "one_usable_url_only"
      ],
      "honest_gaps": [
        "1. **Accent colour – unverified**. No primary‑source hex, Pantone, or ink specification. Colour‑calibrated survey needed."
      ]
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#FFFFFF",
    "--on-bg": "#000000",
    "--primary": "#000000",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#E31E24",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F5F5",
    "--on-bg-muted": "#666666",
    "--border": "#000000",
    "--error": "#E31E24",
    "--font-display": "Archivo",
    "--font-body": "Archivo",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#000000",
    "warning": "#FDD835",
    "error": "#E31E24",
    "info": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#E31E24",
    "deltaFlat": "#999999",
    "err": "#E31E24",
    "ok": "#000000",
    "warn": "#000000",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#666666",
    "chartFont": "Archivo"
  },
  "elevation": {},
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": {
        "technique": "SVG feTurbulence",
        "blend": "overlay",
        "opacity": 0.05,
        "color": "#F5F2E8"
      },
      "inkGain": {
        "technique": "SVG feTurbulence",
        "blend": "multiply",
        "opacity": 0.15,
        "color": "#000000"
      },
      "offsetMisregister": {
        "technique": "CSS transform shift",
        "shift": "0.5px 0.5px",
        "blend": "multiply",
        "opacity": 1
      }
    }
  },
  "globalFilter": "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\"><defs><filter id=\"neue-grafik-paper-grain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.03\" numOctaves=\"2\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0\" in=\"noise\" result=\"fadedNoise\"/><feBlend mode=\"overlay\" in=\"SourceGraphic\" in2=\"fadedNoise\"/></filter><filter id=\"neue-grafik-ink-gain\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.03\" numOctaves=\"2\" result=\"noise\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.15 0\" in=\"noise\" result=\"alphaNoise\"/><feBlend mode=\"multiply\" in=\"SourceGraphic\" in2=\"alphaNoise\"/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body, Archivo), sans-serif; background: var(--bg, #FFFFFF); color: var(--on-bg, #000000); margin: 0; padding: 0; filter: url(#neue-grafik-paper-grain);",
  "globalCss": ".ds-layout-frame .ds-card, .ds-layout-frame .ds-metric-cell, .ds-layout-frame .ds-data-table-row { background: var(--surface); color: var(--on-bg); border: 2px solid var(--border); } .ds-layout-frame .ds-input { background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); padding: 12px; } .ds-layout-frame .ds-button-primary { background: var(--primary); color: var(--on-primary); border: none; } .ds-layout-frame .ds-button-primary:hover { background: var(--secondary-col); } .ds-layout-frame .ds-button-secondary { background: transparent; color: var(--primary); border: 2px solid var(--primary); } .ds-layout-frame .ds-button-secondary:hover { background: var(--primary); color: var(--on-primary); } .ds-layout-frame .ds-accent-dot { width: 8px; height: 8px; background: var(--secondary-col); border-radius: 50%; } .ds-layout-frame .ds-rule-line { border-top: 2px solid var(--border); } .ds-layout-frame .ds-signal-bar-track { height: 4px; background: var(--border); } .ds-layout-frame .ds-signal-bar-fill { height: 100%; background: var(--secondary-col); } .ds-layout-frame .ds-button-primary, .ds-layout-frame .ds-button-secondary:hover { filter: url(#neue-grafik-ink-gain); }",
  "interactionModel": {
    "hover": {
      "delta": "color-shift",
      "transition": "none"
    },
    "focus": {
      "style": "ring",
      "color": "var(--secondary-col)",
      "width": "2px",
      "offset": "2px"
    },
    "active": {
      "delta": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame .ds-button-primary:hover, .ds-layout-frame .ds-button-secondary:hover, .ds-layout-frame .ds-interactive-card:hover { transition: none; } .ds-layout-frame :focus-visible { outline: none; box-shadow: 0 0 0 2px var(--secondary-col); } .ds-layout-frame .ds-input:focus-visible { border-color: var(--secondary-col); box-shadow: 0 0 0 2px var(--secondary-col); }",
  "chartStyle": {
    "background": "var(--bg)",
    "gridLines": "1px solid var(--border), opacity 0.3",
    "lineColor": "var(--secondary-col)",
    "lineWidth": 2,
    "barFill": "var(--primary)",
    "barWidth": "full",
    "markers": false,
    "axisLabel": "font-family: var(--font-body); font-size: 12px; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg)",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#666666",
    "fontFamily": "Archivo"
  },
  "dashboardStyle": {
    "layout": "strict 2-column grid according to modular system. Left column: KPI panel with stacked metric cells. Right column: data table with minimal borders. Grid snaps to 8px baseline.",
    "density": "low to medium. One dominant element per viewport anchors the layout.",
    "panelTreatment": "uncoated paper with ink gain on black fills. Accent red used exactly once per dashboard.",
    "dataVizStyle": "line charts in accent red on white, thin black grid lines, no markers, no area fill. Simple bars with black fill.",
    "signatureElement": "accent-dot on the primary KPI delta, offset misregister on the accent red line."
  },
  "landingStyle": {
    "heroApproach": "asymmetric 3-column grid. Headline starts at column 2, photo block at column 1. Flush left, ragged right. 40-60% negative space.",
    "scrollBehavior": "instant, no transitions. Exempt animations: type-enter (fade in) and slide-reveal (photo enters from left).",
    "ctaStyle": "solid primary button (black, white text) in column 3, lower third. Hover to accent red.",
    "signatureMoment": "Accent red full-height column with white text and circular photo block, offset misregister on all accent elements."
  },
  "buttons": [
    {
      "name": "Primary",
      "desc": "Filled button with high contrast black-on-white. Hover shifts to accent red (E31E24) with instant transition.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: 2px solid var(--primary); padding: 12px 24px; height: var(--height-md, 40px); font-family: var(--font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; border-radius: var(--radius-btn, 0px); cursor: pointer;\" onmouseover=\"this.style.background=\\x27var(--secondary-col)\\x27; this.style.borderColor=\\x27var(--secondary-col)\\x27\" onmouseout=\"this.style.background=\\x27var(--primary)\\x27; this.style.borderColor=\\x27var(--primary)\\x27\">Primary Action</button>",
      "label": "Primary",
      "note": "Filled button with high contrast black-on-white. Hover shifts to accent red (E31E24) with instant transition."
    },
    {
      "name": "Secondary",
      "desc": "Outlined button, minimal – black border only. Hover fills with solid black, text becomes white.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 2px solid var(--primary); padding: 12px 24px; height: var(--height-md, 40px); font-family: var(--font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; border-radius: var(--radius-btn, 0px); cursor: pointer;\" onmouseover=\"this.style.background=\\x27var(--primary)\\x27; this.style.color=\\x27var(--on-primary)\\x27\" onmouseout=\"this.style.background=\\x27transparent\\x27; this.style.color=\\x27var(--primary)\\x27\">Secondary</button>",
      "label": "Secondary",
      "note": "Outlined button, minimal – black border only. Hover fills with solid black, text becomes white."
    },
    {
      "name": "Ghost",
      "desc": "Borderless, text-only. Hover applies accent red border and color – no fill.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: none; color: var(--primary); border: 2px solid transparent; padding: 12px 24px; height: var(--height-md, 40px); font-family: var(--font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; border-radius: var(--radius-btn, 0px); cursor: pointer;\" onmouseover=\"this.style.borderColor=\\x27var(--secondary-col)\\x27; this.style.color=\\x27var(--secondary-col)\\x27\" onmouseout=\"this.style.borderColor=\\x27transparent\\x27; this.style.color=\\x27var(--primary)\\x27\">Ghost</button>",
      "label": "Ghost",
      "note": "Borderless, text-only. Hover applies accent red border and color – no fill."
    }
  ],
  "cards": [
    {
      "name": "Standard Card",
      "desc": "Plain white card with 2px black border, no rounding, no shadow. Paper grain and ink gain are applied globally via ds-paper-grain class.",
      "html": "<div style=\"background: var(--bg); border: 2px solid var(--border); padding: 24px; border-radius: var(--radius-card, 0px);\"><p style=\"font-family: var(--font-body); font-size: 14px; line-height: 1.625; color: var(--on-bg); margin: 0;\">This card holds content in a strict rectangular container. The paper grain overlay is visible on hover.</p></div>",
      "label": "Standard Card",
      "note": "Plain white card with 2px black border, no rounding, no shadow. Paper grain and ink gain are applied globally via ds-paper-grain class."
    },
    {
      "name": "Metric Card",
      "desc": "Used for KPI panels. Bottom border only, label in uppercase, value in display weight.",
      "html": "<div style=\"border-bottom: 1px solid var(--border); padding: 8px 0; margin-bottom: 16px;\"><span style=\"display: block; font-family: var(--font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg-muted, #666666);\">Metric Label</span><span style=\"display: block; font-family: var(--font-display); font-size: 48px; font-weight: 700; color: var(--on-bg); margin-top: 4px;\">12.34</span></div>",
      "label": "Metric Card",
      "note": "Used for KPI panels. Bottom border only, label in uppercase, value in display weight."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Rectangular input field with black border, white fill. Focus brings accent red border (no ring).",
      "html": "<div><label style=\"display: block; font-family: var(--font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg); margin-bottom: 8px;\">Label</label><input type=\"text\" placeholder=\"Placeholder\" style=\"background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); padding: 12px; width: 100%; height: var(--height-md, 40px); font-family: var(--font-body); font-size: 14px; border-radius: var(--radius-input, 0px); outline: none;\" onfocus=\"this.style.borderColor='var(--secondary-col)'\" onblur=\"this.style.borderColor='var(--border)'\" /></div>",
      "label": "Text Input",
      "stateLabel": "Rectangular input field with black border, white fill. Focus brings accent red border (no ring)."
    },
    {
      "name": "Select",
      "desc": "Custom dropdown mimicking a select. Square, no chevron, uses an inline SVG arrow.",
      "html": "<div><label style=\"display: block; font-family: var(--font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.025em; text-transform: uppercase; color: var(--on-bg); margin-bottom: 8px;\">Select</label><div style=\"position: relative; width: 100%;\"><select style=\"appearance: none; background: var(--bg); color: var(--on-bg); border: 2px solid var(--border); padding: 12px; width: 100%; height: var(--height-md, 40px); font-family: var(--font-body); font-size: 14px; border-radius: var(--radius-input, 0px); outline: none; cursor: pointer;\" onfocus=\"this.style.borderColor='var(--secondary-col)'\" onblur=\"this.style.borderColor='var(--border)'\"><option>Option 1</option><option>Option 2</option></select><span style=\"position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none;\"><svg width=\"10\" height=\"6\" viewBox=\"0 0 10 6\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1L5 5L9 1\" stroke=\"var(--border)\" stroke-width=\"2\"/></svg></span></div></div>",
      "label": "Select",
      "stateLabel": "Custom dropdown mimicking a select. Square, no chevron, uses an inline SVG arrow."
    },
    {
      "name": "Checkbox",
      "desc": "Square checkbox with accent red check on dark background. No rounding, no shadow.",
      "html": "<label style=\"display: flex; align-items: center; gap: 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg); cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"width: 20px; height: 20px; border: 2px solid var(--border); background: var(--bg); appearance: none; border-radius: 0px; cursor: pointer; position: relative;\" /><span style=\"position: relative; top: -1px;\">Checkbox label</span></label>",
      "label": "Checkbox",
      "stateLabel": "Square checkbox with accent red check on dark background. No rounding, no shadow."
    }
  ],
  "extraComponents": [
    {
      "name": "Accent Dot",
      "desc": "Small solid circle in accent red. Used as a status indicator or delta marker. Always exactly one per viewport.",
      "html": "<span style=\"display: inline-block; width: 8px; height: 8px; background: var(--secondary-col); border-radius: 50%;\"></span>"
    },
    {
      "name": "Rule Line",
      "desc": "A thick black horizontal rule used to separate sections or create structural divisions. No rounded ends.",
      "html": "<hr style=\"border: none; height: 4px; background: var(--border); margin: 24px 0;\" />"
    },
    {
      "name": "Signal Bar",
      "desc": "Horizontal track with an accent red fill segment. Used in dashboard widgets to show progress or level.",
      "html": "<div style=\"width: 100%; height: 8px; background: var(--border); position: relative;\"><div style=\"width: 60%; height: 100%; background: var(--secondary-col);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — NEUE GRAFIK</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — MODULAR GRID ASYMMETRY</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — System Architecture</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Rational clarity of Swiss Graphic Design translated into digital interfaces. Every element earns its place through function, never ornament.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — SECTION 01</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Rounded corners and drop shadows are forbidden. This example breaks the Neue Grafik rule of zero rounding and no elevation.",
      "avoid": {
        "html": "<div style=\"background: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 24px;\">Bad card with rounding and shadow.</div>",
        "label": "Avoid"
      },
      "rule": "Rounded corners and drop shadows are forbidden. This example breaks the Neue Grafik rule of zero rounding and no elevation.",
      "do": {
        "label": "Do",
        "html": "<div style=\"background: var(--bg); border: 2px solid var(--border); padding: 24px;\"><span style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;\">Photo Block</span></div>"
      }
    },
    {
      "desc": "Using more than one accent color on the same screen is a violation. Only one accent (vermillion) is allowed.",
      "avoid": {
        "html": "<div><span style=\"color: #E31E24;\">Red</span> and <span style=\"color: #FDD835;\">yellow</span> used together.</div>",
        "label": "Avoid"
      },
      "rule": "Using more than one accent color on the same screen is a violation. Only one accent (vermillion) is allowed.",
      "do": {
        "label": "Do",
        "html": "<div style=\"padding:16px;border:2px solid var(--primary);\"><span style=\"color:var(--secondary-col);\">Single accent dot</span></div>"
      }
    },
    {
      "desc": "Centered alignment and symmetrical balance are not permitted. Content must be flush left, ragged right.",
      "avoid": {
        "html": "<div style=\"text-align: center;\"><h1 style=\"font-family: Archivo; font-size: 30px;\">Centered Headline</h1><p>Body text centered on both sides.</p></div>",
        "label": "Avoid"
      },
      "rule": "Centered alignment and symmetrical balance are not permitted. Content must be flush left, ragged right.",
      "do": {
        "label": "Do",
        "html": "<div style=\"text-align:left;\"><h1 style=\"font-family:var(--font-display);font-size:30px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;\">Flush left headline</h1><p style=\"font-family:var(--font-body);font-size:14px;line-height:1.625;\">Body text aligned left, ragged right.</p></div>"
      }
    },
    {
      "rule": "Maintain the system binary: accent-structured specificity, never generic neutral UI.",
      "do": {
        "label": "System-specific cue",
        "html": "<div style=\"padding:16px;border:2px solid var(--secondary-col);\"><span style=\"font-size:12px;text-transform:uppercase;font-weight:700;\">Accent dot indicator</span></div>"
      },
      "avoid": {
        "label": "Generic soft card",
        "html": "<div style=\"width:110px;height:68px;background:#f4f4f4;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.12);\"></div>"
      }
    }
  ],
  "doAvoidStyle": "Rounded corners, drop shadows, gradients, glossy effects, multiple accent colors, centered alignment, symmetrical balance, decorative flourishes, serifs, italics, underlines (except navigation), transparent layers above 0% opacity, and any digital polish that contradicts uncoated paper simulation.",
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "surface": "#FFFFFF",
    "accent": "#E31E24",
    "neutral": "#F5F5F5",
    "muted": "#666666",
    "warn": "#000000",
    "error": "#E31E24",
    "ok": "#000000",
    "deltaUp": "#000000",
    "deltaDown": "#E31E24",
    "deltaFlat": "#999999"
  },
  "typography": {
    "display": {
      "fontFamily": "Archivo",
      "fontSize": "48px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Archivo",
      "fontSize": "30px",
      "fontWeight": 700,
      "lineHeight": 1.25,
      "letterSpacing": "0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Archivo",
      "fontSize": "20px",
      "fontWeight": 600,
      "lineHeight": 1.375,
      "letterSpacing": "0em"
    },
    "body": {
      "fontFamily": "Archivo",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Archivo",
      "fontSize": "12px",
      "fontWeight": 500,
      "lineHeight": 1,
      "letterSpacing": "0.025em",
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
    "gap-component": "24px",
    "gap-section": "48px",
    "height-sm": "32px",
    "height-md": "40px",
    "height-lg": "48px",
    "icon": "20px"
  },
  "layouts": {
    "copy": {
      "heroKicker": "MODULAR GRID SYSTEM",
      "heroHeadline": "NEUE GRAFIK",
      "heroSub": "Translate mid-20th-century Swiss design into digital interfaces. Every element earns its place through function, never ornament.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">COMPOSE LAYOUT</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW GALLERY</button>",
      "navLinks": [
        "GRID",
        "COLUMNS",
        "ACCENT",
        "TEXTURE",
        "METRICS"
      ],
      "features": [
        {
          "title": "ASYMMETRIC GRID",
          "desc": "Modular 2–4 column grid with dominant viewport anchor.",
          "icon": "▦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">▦ ASYMMETRIC GRID</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Modular 2–4 column grid with dominant viewport anchor.</div></div>"
        },
        {
          "title": "FLUSH LEFT TYPOGRAPHY",
          "desc": "Ragged right, generous leading, Akzidenz-Grotesk only.",
          "icon": "¶",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">¶ FLUSH LEFT TYPOGRAPHY</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Ragged right, generous leading, Akzidenz-Grotesk only.</div></div>"
        },
        {
          "title": "PAPER SURFACE",
          "desc": "Uncoated paper grain, ink gain, offset misregister simulation.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 PAPER SURFACE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Uncoated paper grain, ink gain, offset misregister simulation.</div></div>"
        },
        {
          "title": "SINGLE ACCENT",
          "desc": "Exactly one pure hue per spread—vermillion, cadmium, or ultramarine.",
          "icon": "●",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">● SINGLE ACCENT</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Exactly one pure hue per spread—vermillion, cadmium, or ultramarine.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO COMPOSE YOUR NEXT SPREAD?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START LAYOUT</button>",
      "sidebarBrand": "NEUE GRAFIK",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "DASHBOARD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COMPOSER",
          "active": false
        }
      ],
      "dashboardTitle": "NEUE GRAFIK — LAYOUT COMPOSER",
      "metrics": [
        {
          "label": "GRID CELLS",
          "value": "128",
          "delta": "+24%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "BASELINE",
          "value": "98%",
          "delta": "+1.2%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "WHITESPACE RATIO",
          "value": "48%",
          "delta": "+3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "ACCENT COUNT",
          "value": "1",
          "delta": "0%",
          "dir": "flat",
          "direction": "flat"
        }
      ],
      "chartTitle": "GRID UTILIZATION OVER SPREADS",
      "panelATitle": "RECENT SPREADS",
      "panelARows": [
        {
          "label": "SPREAD 01",
          "value": "3 COL × 8 ROWS",
          "pct": 3
        },
        {
          "label": "SPREAD 02",
          "value": "4 COL × 6 ROWS",
          "pct": 4
        },
        {
          "label": "SPREAD 03",
          "value": "2 COL × 12 ROWS",
          "pct": 2
        },
        {
          "label": "SPREAD 04",
          "value": "3 COL × 10 ROWS",
          "pct": 3
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "COLUMN CONFIGURATION",
      "panelBCells": [
        {
          "label": "COLUMNS",
          "value": "3",
          "state": "ok"
        },
        {
          "label": "GUTTER",
          "value": "24px",
          "state": "warn"
        },
        {
          "label": "MARGIN LEFT",
          "value": "32px",
          "state": "err"
        },
        {
          "label": "MARGIN RIGHT",
          "value": "32px",
          "state": "ok"
        },
        {
          "label": "BASELINE",
          "value": "8px",
          "state": "warn"
        },
        {
          "label": "FONT SIZE",
          "value": "14px",
          "state": "err"
        },
        {
          "label": "LINE HEIGHT",
          "value": "22.75px",
          "state": "ok"
        },
        {
          "label": "ACCENT HUE",
          "value": "#E31E24",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "SPREAD 1",
        "SPREAD 2",
        "SPREAD 3",
        "SPREAD 4",
        "SPREAD 5",
        "SPREAD 6"
      ],
      "series": [
        {
          "data": [
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24,
            24
          ],
          "label": "PLANNED CELLS",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            18,
            20,
            22,
            19,
            21,
            23,
            23,
            23,
            23,
            23,
            23,
            23
          ],
          "label": "OCCUPIED CELLS",
          "axis": "right-1",
          "color": "#E31E24"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:100vh;display:flex;flex-direction:row;align-items:stretch;background:var(--bg);color:var(--on-bg);padding:32px;'; var left = document.createElement('div'); left.style.cssText = 'flex:2;min-height:200px;border:2px solid var(--border);background:var(--neutral);display:flex;align-items:center;justify-content:center;margin-right:32px;'; left.innerHTML = '<span style=\"font-family:var(--font-body);font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg-muted);\">PHOTO BLOCK</span>'; var right = document.createElement('div'); right.style.cssText = 'flex:1;display:flex;flex-direction:column;justify-content:center;'; var kicker = document.createElement('div'); kicker.textContent = 'MODULAR GRID SYSTEM'; kicker.style.cssText = 'font-family:var(--font-display);font-size:12px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--secondary-col);margin-bottom:16px;'; var headline = document.createElement('h1'); headline.textContent = 'NEUE GRAFIK'; headline.style.cssText = 'font-family:var(--font-display);font-size:48px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--on-bg);margin:0 0 16px 0;line-height:1.25;'; var sub = document.createElement('p'); sub.textContent = 'Translate mid-20th-century Swiss design into digital interfaces. Every element earns its place through function, never ornament.'; sub.style.cssText = 'font-family:var(--font-body);font-size:14px;line-height:1.625;color:var(--on-bg-muted);margin:0 0 24px 0;'; var cta = document.createElement('button'); cta.innerHTML = 'COMPOSE LAYOUT'; cta.style.cssText = 'background:var(--primary);color:var(--on-primary);border:2px solid var(--primary);padding:12px 24px;height:40px;font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:0.025em;text-transform:uppercase;border-radius:0px;cursor:pointer;'; right.appendChild(kicker); right.appendChild(headline); right.appendChild(sub); right.appendChild(cta); el.appendChild(left); el.appendChild(right); }",
    "showcaseRender": "function(el) { el.style.cssText = 'display:flex;flex-wrap:wrap;gap:24px;padding:32px;background:var(--bg);'; var features = [{\"title\":\"ASYMMETRIC GRID\",\"desc\":\"Modular 2–4 column grid with dominant viewport anchor.\",\"icon\":\"▦\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">▦ ASYMMETRIC GRID</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Modular 2–4 column grid with dominant viewport anchor.</div></div>\"},{\"title\":\"FLUSH LEFT TYPOGRAPHY\",\"desc\":\"Ragged right, generous leading, Akzidenz-Grotesk only.\",\"icon\":\"¶\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">¶ FLUSH LEFT TYPOGRAPHY</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Ragged right, generous leading, Akzidenz-Grotesk only.</div></div>\"},{\"title\":\"PAPER SURFACE\",\"desc\":\"Uncoated paper grain, ink gain, offset misregister simulation.\",\"icon\":\"📄\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📄 PAPER SURFACE</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Uncoated paper grain, ink gain, offset misregister simulation.</div></div>\"},{\"title\":\"SINGLE ACCENT\",\"desc\":\"Exactly one pure hue per spread—vermillion, cadmium, or ultramarine.\",\"icon\":\"●\",\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">● SINGLE ACCENT</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Exactly one pure hue per spread—vermillion, cadmium, or ultramarine.</div></div>\"}]; for(var i=0;i<features.length;i++){ var card = document.createElement('div'); card.innerHTML = features[i].cardHtml; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:24px;background:var(--bg);'; var cells = {\"label\":\"COLUMN CONFIGURATION\",\"cells\":[{\"label\":\"COLUMNS\",\"value\":\"3\",\"state\":\"ok\"},{\"label\":\"GUTTER\",\"value\":\"24px\",\"state\":\"warn\"},{\"label\":\"MARGIN LEFT\",\"value\":\"32px\",\"state\":\"err\"},{\"label\":\"MARGIN RIGHT\",\"value\":\"32px\",\"state\":\"ok\"},{\"label\":\"BASELINE\",\"value\":\"8px\",\"state\":\"warn\"},{\"label\":\"FONT SIZE\",\"value\":\"14px\",\"state\":\"err\"},{\"label\":\"LINE HEIGHT\",\"value\":\"22.75px\",\"state\":\"ok\"},{\"label\":\"ACCENT HUE\",\"value\":\"#E31E24\",\"state\":\"warn\"}]}; var title = document.createElement('div'); title.textContent = 'COLUMN CONFIGURATION'; title.style.cssText = 'grid-column:1/-1;font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:0.025em;text-transform:uppercase;color:var(--primary);margin-bottom:8px;'; el.appendChild(title); for(var i=0;i<cells.cells.length;i++){ var cell = cells.cells[i]; var div = document.createElement('div'); div.style.cssText = 'border-bottom:1px solid var(--border);padding:8px 0;'; var label = document.createElement('span'); label.textContent = cell.label; label.style.cssText = 'display:block;font-family:var(--font-body);font-size:12px;font-weight:500;letter-spacing:0.025em;text-transform:uppercase;color:var(--on-bg-muted);'; var value = document.createElement('span'); value.textContent = cell.value; value.style.cssText = 'display:block;font-family:var(--font-display);font-size:20px;font-weight:600;color:var(--on-bg);margin-top:4px;'; var dot = document.createElement('span'); dot.style.cssText = 'display:inline-block;width:6px;height:6px;border-radius:50%;margin-left:8px;'; if(cell.state === 'err'){ dot.style.background = 'var(--secondary-col)'; } else { dot.style.background = 'var(--primary)'; } var wrapper = document.createElement('div'); wrapper.style.cssText = 'display:flex;align-items:center;justify-content:space-between;'; wrapper.appendChild(label); wrapper.appendChild(dot); div.appendChild(wrapper); div.appendChild(value); el.appendChild(div); } }",
    "heroBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "ctaBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:4px;background:var(--primary);margin:0;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = '#FFFFFF'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;z-index:2;pointer-events:none;filter:url(#neue-grafik-paper-grain);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el, tick) { var c = document.createElement('canvas'); c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:999;opacity:0.03;'; c.width = window.innerWidth; c.height = window.innerHeight; var ctx = c.getContext('2d'); ctx.strokeStyle = '#000000'; ctx.lineWidth = 1; var gridSize = 16 + (tick % 4); for(var x=0; x<c.width; x+=gridSize){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,c.height); ctx.stroke(); } for(var y=0; y<c.height; y+=gridSize){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(c.width,y); ctx.stroke(); } el.appendChild(c); }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5F5F5",
    "--color-muted": "#F5F5F5",
    "--color-muted-foreground": "#666666",
    "--color-primary": "#000000",
    "--color-ring": "#000000",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#E31E24",
    "--color-accent": "#E31E24",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#000000",
    "--color-input": "#000000",
    "--color-destructive": "#E31E24"
  },
  "shadcnTokensClassic": {
    "--background": "#FFFFFF",
    "--popover": "#FFFFFF",
    "--foreground": "#000000",
    "--card-foreground": "#000000",
    "--popover-foreground": "#000000",
    "--card": "#F5F5F5",
    "--muted": "#F5F5F5",
    "--muted-foreground": "#666666",
    "--primary": "#000000",
    "--ring": "#000000",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#E31E24",
    "--accent": "#E31E24",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#000000",
    "--input": "#000000",
    "--destructive": "#E31E24"
  }
});
