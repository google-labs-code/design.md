registerSystem({
  "meta": {
    "name": "Saul Bass",
    "tagline": "Mid-century graphic vernacular defined by bold cut-paper geometry, symbolic reduction, and deliberate asymmetry.",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@300;400;500;600;700;800;900&family=Oswald:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Arimo:wght@300;400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Saul Bass",
    "colors": {
      "primary": "#000000",
      "secondary": "#E31E24",
      "surface": "#FFFFFF",
      "surface-alt": "#F5EFE8",
      "on-surface": "#000000",
      "on-primary": "#FFFFFF",
      "on-secondary": "#FFFFFF",
      "outline": "#000000",
      "surface-dark": "#1A1A1A",
      "on-surface-dark": "#FFFFFF",
      "primary-dark": "#FFFFFF",
      "on-primary-dark": "#1A1A1A",
      "outline-dark": "#FFFFFF"
    },
    "typography": {
      "display": {
        "fontFamily": "Bebas Neue",
        "fontSize": "48px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Bebas Neue",
        "fontSize": "36px",
        "fontWeight": 800,
        "lineHeight": 1.25,
        "letterSpacing": "-0.02em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Oswald",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "-0.03em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "\"Inter, Arimo, sans-serif\"",
        "fontSize": "16px",
        "fontWeight": 400,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Oswald",
        "fontSize": "12px",
        "fontWeight": 700,
        "lineHeight": 1,
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
      "page-edge": "24px",
      "gap-component": "24px",
      "gap-section": "48px",
      "icon": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#000000",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "button-secondary": {
        "backgroundColor": "transparent",
        "textColor": "#000000",
        "rounded": "{rounded.button}",
        "padding": "16px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "textColor": "#000000",
        "rounded": "{rounded.input}"
      },
      "input-focus": {
        "textColor": "#000000"
      },
      "cut-out-badge": {
        "backgroundColor": "#000000",
        "size": "32px"
      },
      "silhouette-divider": {
        "height": "24px"
      },
      "misregister-toggle": {
        "rounded": "{rounded.chip}"
      }
    },
    "version": "alpha",
    "description": "Mid-century graphic vernacular defined by bold cut-paper geometry, symbolic reduction, and deliberate asymmetry. Flat, high-contrast interface with spot-color palette, extreme negative space, and offset-printing artifacts.",
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
          "host": "en.wikipedia.org",
          "count": 3
        },
        {
          "host": "www.moma.org",
          "count": 1
        },
        {
          "host": "www.loc.gov",
          "count": 1
        },
        {
          "host": "www.cooperhewitt.org",
          "count": 1
        },
        {
          "host": "www.girlscouts.org",
          "count": 1
        },
        {
          "host": "www.artofthetitle.com",
          "count": 1
        },
        {
          "host": "www.pantone.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.moma.org/collection/works/8249",
          "host": "www.moma.org",
          "institution": "Museum of Modern Art, New York",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Psycho_(1960_film)",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.loc.gov/pictures/item/00651789/",
          "host": "www.loc.gov",
          "institution": "Library of Congress, Prints and Photographs Division",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Saul_Bass",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.cooperhewitt.org/",
          "host": "www.cooperhewitt.org",
          "institution": "Cooper Hewitt, Smithsonian Design Museum",
          "confidence_original": "low"
        },
        {
          "url": "https://en.wikipedia.org/wiki/Saul_Bass",
          "host": "en.wikipedia.org",
          "institution": "Wikipedia",
          "confidence_original": "high"
        },
        {
          "url": "https://www.girlscouts.org/",
          "host": "www.girlscouts.org",
          "institution": "Girl Scouts of the USA Heritage",
          "confidence_original": "low"
        },
        {
          "url": "https://www.artofthetitle.com/title/north-by-northwest/",
          "host": "www.artofthetitle.com",
          "institution": "Art of the Title",
          "confidence_original": "medium"
        },
        {
          "url": "https://www.pantone.com/",
          "host": "www.pantone.com",
          "institution": "Pantone LLC",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "no_typography_extracted",
        "no_colour_extracted",
        "1_rate_limited_urls_pending_retry"
      ],
      "honest_gaps": {}
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
    "--surface": "#F5EFE8",
    "--on-bg-muted": "#333333",
    "--border": "#000000",
    "--error": "#E31E24",
    "--font-display": "Bebas Neue",
    "--font-body": "Inter, Arimo, sans-serif",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "error": "#E31E24",
    "success": "#1A8A7D",
    "warning": "#CC8833",
    "info": "#000000",
    "err": "#E31E24",
    "ok": "#1A8A7D",
    "warn": "#CC8833",
    "deltaUp": "#1A8A7D",
    "deltaDown": "#E31E24",
    "deltaFlat": "#333333",
    "live": "#000000",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#333333",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "backgroundColor": "#FFFFFF",
    "border": "2px solid #000000",
    "borderRadius": 0,
    "fontFamilyDisplay": "var(--font-display)",
    "fontFamilyBody": "var(--font-body)",
    "dataPositiveColor": "#000000",
    "dataNegativeColor": "#E31E24",
    "barColor": "#000000",
    "axisColor": "#000000",
    "gridLines": false,
    "lineWidth": 2,
    "pointStyle": "square",
    "gridColor": "rgba(128,128,128,0.18)",
    "labelColor": "#333333",
    "fontFamily": "Inter, Arimo, sans-serif"
  },
  "dashboardStyle": {
    "layout": "Asymmetric grid with large left panel and narrow right column. Panels have hard borders and sharp cut-outs for headers.",
    "density": "Low density with generous negative space (≥30% empty).",
    "panelTreatment": "White or cream fill with thick black border (2-4px). No rounding. Paper grain subtle overlay. Optional red accent for critical KPIs.",
    "dataVizStyle": "Bar charts with pure black bars, no grid lines. Red accent for negative values. Square point markers on line charts. Hard edges only.",
    "signatureElement": "A large black silhouetted shape (e.g., a bird or hand) in the top-left corner, acting as a framing device."
  },
  "landingStyle": {
    "heroApproach": "One dominant black silhouette (55-65% height) placed in the lower-left, with headline in upper-right. Extreme asymmetry with ≥30% negative space.",
    "scrollBehavior": "Snap-scroll with hard breaks. No parallax or smooth animations. Each section flips like a page.",
    "ctaStyle": "Primary button in black, inverts on hover. Red accent underline on headline. No rounded corners.",
    "signatureMoment": "On first load, a red cut-out badge (32px diamond) appears briefly before the headline slides in from the right."
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "grain": {
      "technique": "feTurbulence",
      "baseFrequency": 0.7,
      "numOctaves": 3,
      "type": "fractalNoise",
      "blend": "overlay",
      "opacity": 0.1
    },
    "misregistration": {
      "shift": "1px",
      "interactionShift": "1.5-2px",
      "accentColor": "#E31E24"
    }
  },
  "interactionModel": {
    "hover": {
      "transform": "\"translateX(var(--misregister-offset, 1.5px))\"",
      "transitionDuration": "0ms",
      "transitionTimingFunction": "none"
    },
    "focus": {
      "outline": "4px solid var(--border)",
      "outlineOffset": 0,
      "boxShadow": "none"
    },
    "active": {
      "backgroundColor": "var(--bg)",
      "color": "var(--on-bg)"
    }
  },
  "spacing": {
    "component-internal": "16px",
    "section-internal": "32px",
    "page-edge": "24px",
    "gap-component": "24px",
    "gap-section": "48px",
    "icon": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "type": "flat",
    "levels": []
  },
  "globalFilter": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper-grain' x='0%25' y='0%25' width='100%25' height='100%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/%3E%3C/filter%3E%3C/svg%3E#paper-grain\")",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg);",
  "globalCss": ".ds-layout-frame { isolation: isolate; } .ds-layout-frame::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9998; background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.7' numOctaves='3' type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E\"); mix-blend-mode: overlay; } .ds-layout-frame ::selection { background: rgba(227,30,36,0.3); color: inherit; } .ds-layout-frame ::-webkit-scrollbar { width: 6px; } .ds-layout-frame ::-webkit-scrollbar-track { background: var(--primary); } .ds-layout-frame ::-webkit-scrollbar-thumb { background: var(--bg); } .ds-layout-frame ::-webkit-scrollbar-thumb:hover { background: var(--secondary-col); } .ds-layout-frame { border-radius: 0; box-shadow: none; }",
  "interactionStyles": ".ds-layout-frame [data-interactive]:hover { --misregister-offset: 1px; transform: translateX(var(--misregister-offset)); } .ds-layout-frame [data-interactive]:focus { outline: 4px solid var(--border); outline-offset: 0; box-shadow: none; } .ds-layout-frame [data-interactive]:active { background: var(--bg); color: var(--on-bg); } .ds-layout-frame button:hover:not([data-variant=secondary]) { background: var(--bg); color: var(--on-bg); } .ds-layout-frame button[data-variant=secondary]:hover { background: var(--primary); color: var(--on-primary); } .ds-layout-frame button { transition-property: background-color, color, transform; transition-duration: 0ms; transition-timing-function: none; }",
  "buttons": [
    {
      "name": "button-primary",
      "desc": "Primary action button with black fill and white text. On hover, inverts colors and shifts 1px right to simulate offset misregistration.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--spacing-component-internal,16px);height:40px;border:2px solid var(--border);border-radius:var(--radius-btn,0);cursor:pointer;transition:none;\" data-interactive=\"true\" onmouseover=\"this.style.background=\\x27var(--on-primary)\\x27;this.style.color=\\x27var(--primary)\\x27;this.style.transform=\\x27translateX(1px)\\x27\" onmouseout=\"this.style.background=\\x27var(--primary)\\x27;this.style.color=\\x27var(--on-primary)\\x27;this.style.transform=\\x27translateX(0)\\x27\">Take Action</button>",
      "label": "button-primary",
      "note": "Primary action button with black fill and white text. On hover, inverts colors and shifts 1px right to simulate offset misregistration."
    },
    {
      "name": "button-secondary",
      "desc": "Secondary button with transparent background and black outline. Hover fills black and inverts text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:var(--primary);font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--spacing-component-internal,16px);height:40px;border:2px solid var(--border);border-radius:var(--radius-btn,0);cursor:pointer;transition:none;\" data-interactive=\"true\" onmouseover=\"this.style.background=\\x27var(--primary)\\x27;this.style.color=\\x27var(--on-primary)\\x27\" onmouseout=\"this.style.background=\\x27transparent\\x27;this.style.color=\\x27var(--primary)\\x27\">Learn More</button>",
      "label": "button-secondary",
      "note": "Secondary button with transparent background and black outline. Hover fills black and inverts text."
    },
    {
      "name": "button-accent",
      "desc": "Accent button using the red secondary color. Maintains high contrast and 0px rounding.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--secondary-col);color:var(--on-secondary);font-family:var(--font-display);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:var(--spacing-component-internal,16px);height:40px;border:2px solid var(--border);border-radius:var(--radius-btn,0);cursor:pointer;transition:none;\" data-interactive=\"true\" onmouseover=\"this.style.background=\\x27var(--on-secondary)\\x27;this.style.color=\\x27var(--secondary-col)\\x27;this.style.transform=\\x27translateX(1px)\\x27\" onmouseout=\"this.style.background=\\x27var(--secondary-col)\\x27;this.style.color=\\x27var(--on-secondary)\\x27;this.style.transform=\\x27translateX(0)\\x27\">Danger</button>",
      "label": "button-accent",
      "note": "Accent button using the red secondary color. Maintains high contrast and 0px rounding."
    }
  ],
  "cards": [
    {
      "name": "card-default",
      "desc": "Standard card with white fill, thick black border, and asymmetric content arrangement. Includes paper grain overlay via CSS variable.",
      "html": "<div style=\"background:var(--surface);border:4px solid var(--border);border-radius:var(--radius-card,0);padding:var(--spacing-component-internal,16px);position:relative;\"><div style=\"font-family:var(--font-display);font-size:var(--font-display-size,48px);font-weight:900;text-transform:uppercase;letter-spacing:-0.05em;line-height:1.25;\">VERTIGO</div><div style=\"font-family:var(--font-body);font-size:14px;margin-top:8px;max-width:60%;\">A masterpiece of symbolic reduction.</div><div style=\"position:absolute;top:8px;right:8px;width:32px;height:32px;background:var(--primary);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\"><div style=\"width:2px;height:16px;background:var(--surface);margin:8px 0 0 15px;\"></div></div></div>",
      "label": "card-default",
      "note": "Standard card with white fill, thick black border, and asymmetric content arrangement. Includes paper grain overlay via CSS variable."
    },
    {
      "name": "card-alt",
      "desc": "Alternate card using cream surface-alt background with a diagonal cut-out silhouette for dramatic asymmetry.",
      "html": "<div style=\"background:var(--surface-alt);border:2px solid var(--border);border-radius:var(--radius-card,0);padding:var(--spacing-component-internal,16px);clip-path:polygon(0 0, 100% 0, 100% 85%, 0 100%);display:flex;flex-direction:column;align-items:flex-start;\"><div style=\"font-family:var(--font-display);font-size:36px;font-weight:800;text-transform:uppercase;letter-spacing:-0.02em;line-height:1.25;color:var(--primary);\">North by Northwest</div><div style=\"width:80px;height:2px;background:var(--secondary-col);margin:12px 0;\"></div><div style=\"font-family:var(--font-body);font-size:16px;line-height:1.625;max-width:70%;\">A classic Hitchcock thriller.</div><button style=\"margin-top:16px;background:var(--primary);color:var(--on-primary);font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding:8px 16px;border:2px solid var(--border);border-radius:0;cursor:pointer;\">Watch</button></div>",
      "label": "card-alt",
      "note": "Alternate card using cream surface-alt background with a diagonal cut-out silhouette for dramatic asymmetry."
    }
  ],
  "forms": [
    {
      "name": "text-input",
      "desc": "Text input with black border, white fill, and 0px rounding. Focus state uses 4px solid black outline and 1px misregister offset.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);\">Name</label><input type=\"text\" style=\"background:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-input,0);padding:12px;font-family:var(--font-body);font-size:16px;outline:none;\" onfocus=\"this.style.borderColor='var(--border)';this.style.outline='4px solid var(--border)';this.style.transform='translateX(1px)'\" onblur=\"this.style.outline='none';this.style.transform='translateX(0)'\" placeholder=\"Enter your name\" /></div>",
      "label": "text-input",
      "stateLabel": "Text input with black border, white fill, and 0px rounding. Focus state uses 4px solid black outline and 1px misregister offset."
    },
    {
      "name": "select-dropdown",
      "desc": "Custom select element mimicking a cut-paper tab. Uses iconic black-on-white with red accent arrow.",
      "html": "<div style=\"display:flex;flex-direction:column;gap:8px;\"><label style=\"font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary);\">Choose a film</label><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:var(--bg);color:var(--on-bg);border:2px solid var(--border);border-radius:var(--radius-input,0);padding:12px;font-family:var(--font-body);font-size:16px;appearance:none;-webkit-appearance:none;background-image:url(\\x27data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><polygon points=\"0,0 12,0 6,12\" fill=\"%23E31E24\"/></svg>\\x27);background-repeat:no-repeat;background-position:right 12px center;background-size:12px;padding-right:36px;cursor:pointer;\"><option>Psycho</option><option>Vertigo</option><option>North by Northwest</option><option>The Man with the Golden Arm</option></select></div>",
      "label": "select-dropdown",
      "stateLabel": "Custom select element mimicking a cut-paper tab. Uses iconic black-on-white with red accent arrow."
    },
    {
      "name": "checkbox-toggle",
      "desc": "Toggle switch using black cut-out circle and red accent for active state. Misregisters on interaction.",
      "html": "<div style=\"display:flex;align-items:center;gap:12px;cursor:pointer;\" data-interactive=\"true\"><div style=\"width:48px;height:24px;border:2px solid var(--border);border-radius:0;background:var(--bg);position:relative;transition:none;\"><div style=\"width:16px;height:16px;background:var(--primary);position:absolute;top:2px;left:2px;transition:none;\"></div></div><span style=\"font-family:var(--font-body);font-size:16px;color:var(--on-bg);\">Subscribe</span></div>",
      "label": "checkbox-toggle",
      "stateLabel": "Toggle switch using black cut-out circle and red accent for active state. Misregisters on interaction."
    }
  ],
  "extraComponents": [
    {
      "name": "cut-out-badge",
      "desc": "Small diamond badge with a white slit revealing background. Used as a focal point or accent.",
      "html": "<div style=\"width:32px;height:32px;background:var(--primary);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);position:relative;\"><div style=\"width:2px;height:16px;background:var(--surface);position:absolute;top:8px;left:15px;\"></div></div>"
    },
    {
      "name": "silhouette-divider",
      "desc": "A horizontal divider consisting of a thick black line with a cut-out shape (repeating silhouette pattern).",
      "html": "<div style=\"height:24px;display:flex;align-items:center;border-top:2px solid var(--border);position:relative;\"><div style=\"width:100%;height:2px;background:var(--border);\"><div style=\"display:flex;justify-content:space-around;width:100%;position:absolute;top:-10px;\"><span style=\"display:inline-block;width:8px;height:8px;background:var(--primary);transform:rotate(45deg);\"></span><span style=\"display:inline-block;width:8px;height:8px;background:var(--secondary-col);border:1px solid var(--border);\"></span><span style=\"display:inline-block;width:8px;height:8px;background:var(--primary);transform:rotate(45deg);\"></span></div></div></div>"
    },
    {
      "name": "misregister-toggle",
      "desc": "A chip/toggle that physically shifts on hover to mimic offset printing plate misregistration. Used for filtering options.",
      "html": "<div style=\"display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border:2px solid var(--border);border-radius:var(--radius-chip,0);background:var(--bg);cursor:pointer;font-family:var(--font-display);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--on-bg);transition:none;\" data-interactive=\"true\" onmouseover=\"this.style.transform='translateX(1.5px)'\" onmouseout=\"this.style.transform='translateX(0)'\"><span style=\"width:12px;height:12px;border:2px solid var(--border);background:var(--bg);display:inline-block;\"></span>Active</div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — PSYCHO</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — VERTIGO</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — NORTH BY NORTHWEST</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — The film is a masterpiece of suspense and visual storytelling.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — NOW SHOWING</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Do not use rounded corners or soft edges – every element must be sharp and cut-paper like.",
      "avoid": {
        "html": "<button style=\"border-radius:8px;background:gray;box-shadow:0 2px 4px rgba(0,0,0,0.2);\">Rounded Button</button>",
        "label": "Avoid"
      },
      "rule": "Do not use rounded corners or soft edges – every element must be sharp and cut-paper like.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use gradients, tints, or multiple colors beyond black, white, and one accent.",
      "avoid": {
        "html": "<div style=\"background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;padding:20px;\">Gradient Card</div>",
        "label": "Avoid"
      },
      "rule": "Do not use gradients, tints, or multiple colors beyond black, white, and one accent.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Do not use centered or perfectly symmetrical layouts – asymmetry is key.",
      "avoid": {
        "html": "<div style=\"text-align:center;margin:0 auto;\"><p>Centered Content</p></div>",
        "label": "Avoid"
      },
      "rule": "Do not use centered or perfectly symmetrical layouts – asymmetry is key.",
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
  "doAvoidStyle": {
    "desc": "General caution against using gradients, shadows, rounded corners, or symmetrical layouts.",
    "avoid": {
      "html": "<div style=\"border-radius:10px;background:white;box-shadow:0 4px 6px rgba(0,0,0,0.1);padding:20px;\">Soft Card</div>"
    }
  },
  "effects": [],
  "motion": [],
  "colors": {
    "primary": "#000000",
    "secondary": "#E31E24",
    "surface": "#FFFFFF",
    "surface-alt": "#F5EFE8",
    "on-surface": "#000000",
    "on-primary": "#FFFFFF",
    "on-secondary": "#FFFFFF",
    "outline": "#000000"
  },
  "typography": {
    "display": {
      "fontFamily": "Bebas Neue",
      "fontSize": "48px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "Bebas Neue",
      "fontSize": "36px",
      "fontWeight": 800,
      "lineHeight": 1.25,
      "letterSpacing": "-0.02em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "Oswald",
      "fontSize": "24px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "-0.03em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "Inter, Arimo, sans-serif",
      "fontSize": "16px",
      "fontWeight": 400,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "Oswald",
      "fontSize": "12px",
      "fontWeight": 700,
      "lineHeight": 1,
      "letterSpacing": "0.05em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "CUT-PAPER DESIGN SYSTEM",
      "heroHeadline": "SILHOUETTE",
      "heroSub": "BOLD ASYMMETRY. HIGH CONTRAST. ONE ACCENT.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#000000;color:#FFFFFF;border:2px solid #000000;padding:16px;font-family:Bebas Neue;font-size:16px;letter-spacing:0.05em;text-transform:uppercase;\\x27>START COMPOSING</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:transparent;color:#000000;border:2px solid #000000;padding:16px;font-family:Bebas Neue;font-size:16px;text-transform:uppercase;\\x27>VIEW GALLERY</button>",
      "navLinks": [
        "CUT",
        "INK",
        "REGISTER",
        "GRAIN"
      ],
      "features": [
        {
          "title": "CUTOUT BADGE",
          "desc": "Create symbolic cut-out badges from abstract silhouettes. One dominant shape per frame.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 CUTOUT BADGE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Create symbolic cut-out badges from abstract silhouettes. One dominant shape per frame.</div></div>"
        },
        {
          "title": "SILHOUETTE DIVIDER",
          "desc": "Generate asymmetric partition lines that split the composition into negative and positive space.",
          "icon": "➗",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">➗ SILHOUETTE DIVIDER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Generate asymmetric partition lines that split the composition into negative and positive space.</div></div>"
        },
        {
          "title": "MISREGISTER TOGGLE",
          "desc": "Introduce controlled offset misregistration on accent elements for a printed artifact feel.",
          "icon": "🔄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔄 MISREGISTER TOGGLE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Introduce controlled offset misregistration on accent elements for a printed artifact feel.</div></div>"
        },
        {
          "title": "PAPER GRAIN",
          "desc": "Apply uncoated paper grain texture at low opacity to simulate offset printing stock.",
          "icon": "📄",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📄 PAPER GRAIN</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Apply uncoated paper grain texture at low opacity to simulate offset printing stock.</div></div>"
        }
      ],
      "ctaStripHeadline": "READY TO COMPOSE?",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\\x27background:#000000;color:#FFFFFF;border:2px solid #000000;padding:16px;font-family:Bebas Neue;font-size:16px;text-transform:uppercase;\\x27>CREATE SYMBOL</button>",
      "sidebarBrand": "SILHOUETTE",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "LIBRARY",
          "active": true
        },
        {
          "icon": "◉",
          "label": "COMPOSITION",
          "active": false
        }
      ],
      "dashboardTitle": "COMPOSITION BOARD",
      "metrics": [
        {
          "label": "CUTOUTS",
          "value": "24",
          "delta": "+3",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "REGISTER SHIFT",
          "value": "1.2px",
          "delta": "-0.3px",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "GRAIN OPACITY",
          "value": "10%",
          "delta": "—",
          "dir": "neutral",
          "direction": "neutral"
        },
        {
          "label": "TENSION INDEX",
          "value": "0.75",
          "delta": "+0.05",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "SYMBOL DENSITY PER FRAME",
      "panelATitle": "RECENT COMPOSITIONS",
      "panelARows": [
        {
          "label": "PSYCHO TRIBUTE",
          "value": "12 CUTOUTS",
          "pct": 12
        },
        {
          "label": "VERTIGO STUDY",
          "value": "8 CUTOUTS",
          "pct": 8
        },
        {
          "label": "NORTH BY NORTHWEST",
          "value": "15 CUTOUTS",
          "pct": 15
        },
        {
          "label": "THE MAN WITH THE GOLDEN ARM",
          "value": "10 CUTOUTS",
          "pct": 10
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "COLOR REGISTER",
      "panelBCells": [
        {
          "label": "BLACK PLATE",
          "value": "0.0px",
          "state": "ok"
        },
        {
          "label": "RED PLATE",
          "value": "1.2px",
          "state": "warn"
        },
        {
          "label": "CUTOUT SHIFT",
          "value": "0.5px",
          "state": "err"
        },
        {
          "label": "GRAIN SEED",
          "value": "742",
          "state": "ok"
        },
        {
          "label": "OPACITY",
          "value": "0.10",
          "state": "warn"
        },
        {
          "label": "BORDER WEIGHT",
          "value": "4px",
          "state": "err"
        },
        {
          "label": "COMPOSITION WEIGHT",
          "value": "LEFT",
          "state": "ok"
        },
        {
          "label": "ACCENT",
          "value": "#E31E24",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "FRAME 1",
        "FRAME 2",
        "FRAME 3",
        "FRAME 4",
        "FRAME 5",
        "FRAME 6"
      ],
      "series": [
        {
          "data": [
            8,
            12,
            5,
            9,
            15,
            7,
            7,
            7,
            7,
            7,
            7,
            7
          ],
          "label": "CUTOUTS",
          "axis": "left",
          "color": "#000000"
        },
        {
          "data": [
            40,
            30,
            55,
            45,
            25,
            60,
            60,
            60,
            60,
            60,
            60,
            60
          ],
          "label": "NEGATIVE SPACE %",
          "axis": "right-1",
          "color": "#E31E24"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText='position:relative;overflow:hidden;min-height:100vh;background:#FFFFFF;'; var shape=document.createElement('div'); shape.style.cssText='position:absolute;bottom:0;left:0;width:55%;height:65%;background:#000000;clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%)'; el.appendChild(shape); var headline=document.createElement('div'); headline.style.cssText='position:absolute;top:10%;right:8%;font-family:var(--font-display);font-size:64px;font-weight:900;letter-spacing:-0.08em;text-transform:uppercase;color:#000000;line-height:1.1;text-align:right;'; headline.textContent='SILHOUETTE'; el.appendChild(headline); var badge=document.createElement('div'); badge.style.cssText='position:absolute;top:10%;left:8%;width:32px;height:32px;background:#000000;clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);'; var slit=document.createElement('div'); slit.style.cssText='width:2px;height:16px;background:#FFFFFF;margin:8px 0 0 15px;'; badge.appendChild(slit); el.appendChild(badge); var cta=document.createElement('button'); cta.style.cssText='position:absolute;bottom:15%;right:8%;background:#000000;color:#FFFFFF;border:2px solid #000000;padding:16px 32px;font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;'; cta.textContent='ENTER'; el.appendChild(cta); }",
    "showcaseRender": "function(el) { el.style.cssText='display:flex;flex-wrap:wrap;gap:24px;padding:48px 24px;background:#FFFFFF;'; var cards=[ {title:'CUTOUT BADGE',desc:'Create symbolic cut-out badges.'}, {title:'MISREGISTER',desc:'Controlled offset misregistration.'}, {title:'PAPER GRAIN',desc:'Uncoated paper texture.'}, {title:'SILHOUETTE',desc:'Dominant shape per frame.'} ]; cards.forEach(function(c,i){ var card=document.createElement('div'); card.style.cssText='flex:1 1 calc(50% - 12px);min-width:240px;border:4px solid #000000;background:#F5EFE8;padding:24px;display:flex;flex-direction:column;gap:16px;position:relative;'; var title=document.createElement('div'); title.style.cssText='font-family:var(--font-display);font-size:20px;font-weight:700;letter-spacing:-0.02em;text-transform:uppercase;color:#000000;'; title.textContent=c.title; card.appendChild(title); var desc=document.createElement('div'); desc.style.cssText='font-family:var(--font-body);font-size:14px;line-height:1.5;color:#333;max-width:80%;'; desc.textContent=c.desc; card.appendChild(desc); if(i===0){ var badge=document.createElement('div'); badge.style.cssText='position:absolute;top:8px;right:8px;width:32px;height:32px;background:#E31E24;clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);'; var slit=document.createElement('div'); slit.style.cssText='width:2px;height:16px;background:#F5EFE8;margin:8px 0 0 15px;'; badge.appendChild(slit); card.appendChild(badge); } el.appendChild(card); }); }",
    "panelCRender": "function(el) { el.style.cssText='background:#FFFFFF;border:4px solid #000000;padding:24px;position:relative;min-height:200px;'; var header=document.createElement('div'); header.style.cssText='font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:-0.03em;text-transform:uppercase;color:#000000;margin-bottom:16px;'; header.textContent='COLOR REGISTER'; el.appendChild(header); var rows=[ ['BLACK PLATE','0.0px'], ['RED PLATE','1.2px'], ['CUTOUT SHIFT','0.5px'], ['GRAIN SEED','742'] ]; rows.forEach(function(r){ var row=document.createElement('div'); row.style.cssText='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #000;'; var label=document.createElement('span'); label.style.cssText='font-family:var(--font-body);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#000;'; label.textContent=r[0]; row.appendChild(label); var value=document.createElement('span'); value.style.cssText='font-family:var(--font-body);font-size:12px;color:#E31E24;'; value.textContent=r[1]; row.appendChild(value); el.appendChild(row); }); var badge=document.createElement('div'); badge.style.cssText='position:absolute;bottom:8px;right:8px;width:32px;height:32px;background:#000000;clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);'; var slit=document.createElement('div'); slit.style.cssText='width:2px;height:16px;background:#FFFFFF;margin:8px 0 0 15px;'; badge.appendChild(slit); el.appendChild(badge); }",
    "heroBackground": "function(el) { el.style.background='#FFFFFF'; var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0.08;mix-blend-mode:overlay;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\'%3E%3Cfilter id=\\'g\\'%3E%3CfeTurbulence baseFrequency=\\'0.7\\' numOctaves=\\'3\\' type=\\'fractalNoise\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23g)\\' opacity=\\'0.1\\'/%3E%3C/svg%3E\");'; el.appendChild(grain); }",
    "ctaBackground": "function(el) { el.style.background='#000000'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:#000000;position:relative;margin:48px 0;'; var diamond=document.createElement('div'); diamond.style.cssText='position:absolute;top:-12px;left:75%;width:20px;height:20px;background:#E31E24;clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);'; d.appendChild(diamond); return d; }",
    "dashboardShellBackground": "function(el) { el.style.background='#F5EFE8'; var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0.08;mix-blend-mode:overlay;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\'%3E%3Cfilter id=\\'d\\'%3E%3CfeTurbulence baseFrequency=\\'0.7\\' numOctaves=\\'3\\' type=\\'fractalNoise\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23d)\\' opacity=\\'0.1\\'/%3E%3C/svg%3E\");'; el.appendChild(grain); }",
    "surfaceOverlay": "function(el) { var grain=document.createElement('div'); grain.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0.08;mix-blend-mode:overlay;z-index:2;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\'%3E%3Cfilter id=\\'f\\'%3E%3CfeTurbulence baseFrequency=\\'0.7\\' numOctaves=\\'3\\' type=\\'fractalNoise\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23f)\\' opacity=\\'0.1\\'/%3E%3C/svg%3E\");'; el.appendChild(grain); }"
  },
  "ambientCanvas": "function(tick) { var d=document.createElement('div'); d.style.cssText='position:absolute;inset:0;pointer-events:none;opacity:0.06;mix-blend-mode:overlay;'; var svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('width','0'); svg.setAttribute('height','0'); var filter=document.createElementNS('http://www.w3.org/2000/svg','filter'); filter.id='ambient-grain'; var feTurb=document.createElementNS('http://www.w3.org/2000/svg','feTurbulence'); feTurb.setAttribute('type','fractalNoise'); feTurb.setAttribute('baseFrequency',(0.5+tick*0.5).toFixed(2)); feTurb.setAttribute('numOctaves','3'); filter.appendChild(feTurb); svg.appendChild(filter); d.appendChild(svg); var overlay=document.createElement('div'); overlay.style.cssText='position:absolute;inset:0;filter:url(#ambient-grain);'; d.appendChild(overlay); return d; }",
  "shadcnTokens": {
    "--color-background": "#FFFFFF",
    "--color-popover": "#FFFFFF",
    "--color-foreground": "#000000",
    "--color-card-foreground": "#000000",
    "--color-popover-foreground": "#000000",
    "--color-card": "#F5EFE8",
    "--color-muted": "#F5EFE8",
    "--color-muted-foreground": "#333333",
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
    "--card": "#F5EFE8",
    "--muted": "#F5EFE8",
    "--muted-foreground": "#333333",
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
