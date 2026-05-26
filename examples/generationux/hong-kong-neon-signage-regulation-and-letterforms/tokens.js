registerSystem({
  "meta": {
    "name": "Kowloon Glow",
    "tagline": "Hong Kong Neon Signage — Regulation & Letterforms",
    "mode": "dark",
    "fontImport": "https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Courier+Prime:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
  },
  "yamlTokens": {
    "name": "Hong Kong Neon Signage — Regulation & Letterforms",
    "colors": {},
    "typography": {
      "display": {
        "fontFamily": "Inter",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1,
        "letterSpacing": "-0.025em"
      },
      "headline": {
        "fontFamily": "Barlow Condensed, Archivo Narrow, Inter",
        "fontSize": "30px",
        "fontWeight": 700,
        "lineHeight": 1,
        "letterSpacing": "0.1em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Barlow Condensed",
        "fontSize": "24px",
        "fontWeight": 700,
        "lineHeight": 1.25,
        "letterSpacing": "0em"
      },
      "body": {
        "fontFamily": "Barlow Condensed, Archivo Narrow",
        "fontSize": "16px",
        "fontWeight": 600,
        "lineHeight": 1.5,
        "letterSpacing": "0.05em",
        "textTransform": "uppercase"
      },
      "label": {
        "fontFamily": "Courier Prime, Barlow Condensed, monospace",
        "fontSize": "12px",
        "fontWeight": 300,
        "lineHeight": 1,
        "letterSpacing": "-0.05em",
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
      "page-edge": "16px",
      "gap-component": "0px",
      "gap-section": "8px",
      "height-sm": "48px",
      "height-md": "96px",
      "height-lg": "192px",
      "icon": "24px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "#1a1a2e",
        "textColor": "#FF0033",
        "rounded": "0px",
        "padding": "4px"
      },
      "button-primary-hover": {
        "backgroundColor": "#1a1a2e",
        "textColor": "#FF0033",
        "rounded": "0px",
        "padding": "4px"
      },
      "card": {
        "backgroundColor": "#1a1a2e",
        "rounded": "0px",
        "padding": "8px"
      },
      "input": {
        "backgroundColor": "#1a1a2e",
        "textColor": "#FF0033",
        "rounded": "0px",
        "padding": "4px"
      },
      "input-focus": {
        "backgroundColor": "#1a1a2e",
        "textColor": "#FF0033",
        "rounded": "0px",
        "padding": "4px"
      },
      "badge": {
        "backgroundColor": "#1a1a2e",
        "textColor": "#D0D0FF",
        "rounded": "0px",
        "padding": "4px"
      }
    },
    "version": "alpha",
    "description": "Kowloon Glow translates the dense, regulated beauty of Hong Kong’s neon signage into an interface system that is simultaneously chaotic and ordered, luminous and gritty.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "The slug `hong-kong-neon-signage-regulation-and-letterforms` refers to the vernacular visual identity system formed by the massed neon signage of Hong Kong, predominantly from the 1950s through the 2010s, the regulatory frameworks that shaped its typographic and structural norms, and the specific lettering conventions (both Chinese calligraphic/typographic and Latin alphabetic) used in these signs",
      "manual_enrichment_required": true,
      "imagery_count": 1,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": "merge-extract-v1",
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.lusterpublishing.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.lusterpublishing.com/",
          "host": "www.lusterpublishing.com",
          "institution": "Luster Publishing",
          "confidence_original": "high"
        }
      ],
      "typefaces_attested": [
        {
          "name": "Chinese lettering (custom hand-drawn)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "is_custom": true,
          "attestation": "attested"
        },
        {
          "name": "Fang Song (仿宋体)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "conventional"
        },
        {
          "name": "Li Shu (隶书)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "conventional"
        },
        {
          "name": "Hei (sans-serif generic)",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "conventional"
        },
        {
          "name": "Helvetica",
          "foundry": null,
          "year": null,
          "google_fonts": "Inter",
          "attestation": "inferred"
        },
        {
          "name": "Frankfurter",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "inferred"
        },
        {
          "name": "Arial",
          "foundry": null,
          "year": null,
          "google_fonts": "Arimo",
          "attestation": "inferred"
        },
        {
          "name": "Chinese Hei",
          "foundry": null,
          "year": null,
          "google_fonts": null,
          "attestation": "inferred"
        }
      ],
      "flags": [
        "one_usable_url_only",
        "1_robots_disallowed_urls"
      ],
      "honest_gaps": [
        {
          "\"1. **Colour": "** No verified Munsell/Pantone values for any specific sign; no spectral measurements of gas discharge in Hong Kong signs; no record of phosphor formulations used by local shops. *Resolution needed:* scientific analysis of decommissioned tubes by a conservation lab (e.g., M+ has capability but results not published).\""
        }
      ]
    }
  },
  "colorMode": "dark",
  "tokens": {
    "--bg": "#0a0a14",
    "--on-bg": "#D0D0FF",
    "--primary": "#FF0033",
    "--on-primary": "#171717",
    "--secondary-col": "#00FF66",
    "--on-secondary": "#0a0a14",
    "--surface": "#1a1a2e",
    "--on-bg-muted": "#7A7A9A",
    "--border": "#2a2a3e",
    "--error": "#FF0033",
    "--font-display": "Inter",
    "--font-body": "Barlow Condensed",
    "--radius-default": "0px",
    "--radius-card": "0px",
    "--radius-btn": "0px",
    "--radius-chip": "0px",
    "--tertiary": "#0066FF",
    "--quaternary": "#FFCC00"
  },
  "semanticColors": {
    "success": "#00FF66",
    "warning": "#FFCC00",
    "error": "#FF0033",
    "info": "#0066FF",
    "err": "#FF0033",
    "ok": "#00FF66",
    "warn": "#FFCC00",
    "deltaUp": "#00FF66",
    "deltaDown": "#FF0033",
    "deltaFlat": "#7A7A9A",
    "live": "#FF0033",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#7A7A9A",
    "chartFont": "Barlow Condensed"
  },
  "chartStyle": {
    "backgroundColor": "#0a0a14",
    "borderRadius": "0px",
    "fontFamily": "Courier Prime",
    "colors": [
      "#FF0033",
      "#00FF66",
      "#0066FF",
      "#FFCC00"
    ],
    "gridColor": "#2a2a3e",
    "labelColor": "#7A7A9A"
  },
  "surfaceModel": "collage",
  "materialSimulation": {
    "model": "collage",
    "params": {
      "layers": "neon_signs, backplates, concrete_wall",
      "texture": "urban_grain_8%",
      "lighting": "hard_shadows_45deg"
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg'><defs><filter id='urban-grain'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/><feColorMatrix type='matrix' values='0 0 0 0 1   0 0 0 0 1   0 0 0 0 1   0 0 0 0.05 0'/></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background: var(--bg); color: var(--on-bg); -webkit-font-smoothing: antialiased;",
  "globalCss": ".ds-layout-frame::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; filter: url(#urban-grain); opacity: 0.06; z-index: 9999; } .ds-layout-frame ::selection { background: var(--primary); color: var(--bg); } .ds-layout-frame { scrollbar-width: thin; scrollbar-color: var(--border) var(--bg); }",
  "interactionModel": {
    "hover": {
      "filter": "brightness(1.15)",
      "transform": "translate(1px, -1px)",
      "transition": "none"
    },
    "focus": {
      "boxShadow": "0 0 0 2px var(--primary), 0 0 8px var(--primary)",
      "animation": "glow-pulse 2s step-start infinite"
    },
    "active": {
      "filter": "brightness(1.3)",
      "transform": "scale(1.02)"
    }
  },
  "interactionStyles": ".ds-layout-frame button:focus-visible { box-shadow: 0 0 0 2px var(--primary), 0 0 8px var(--primary); animation: glow-pulse 2s step-start infinite; } .ds-layout-frame button:hover { filter: brightness(1.15); transform: translate(1px, -1px); } .ds-layout-frame button:active { filter: brightness(1.3); transform: scale(1.02); } .ds-layout-frame input:focus { box-shadow: 0 0 0 2px var(--primary); } @keyframes glow-pulse { 0%, 100% { box-shadow: 0 0 0 2px var(--primary), 0 0 8px var(--primary); } 50% { box-shadow: 0 0 0 4px var(--primary), 0 0 12px var(--primary); } }",
  "spacing": {
    "componentInternal": "4px",
    "sectionInternal": "8px",
    "pageEdge": "16px",
    "gapComponent": "0px",
    "gapSection": "8px",
    "heightSm": "48px",
    "heightMd": "96px",
    "heightLg": "192px"
  },
  "radius": {
    "default": "0px",
    "card": "0px",
    "button": "0px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "wallSurface": "z-0",
    "backgroundSign": "z-10",
    "primarySign": "z-20",
    "bracket": "z-22",
    "transformerBox": "z-35",
    "glowBloom": "z-40",
    "topmost": "z-50",
    "shadow": "drop-shadow(4px 4px 0 rgba(0,0,0,0.3))",
    "shadowAngle": "45deg",
    "shadowBlur": "0"
  },
  "dashboardStyle": {
    "layout": "Dense vertical stacking of panel rows, each row representing a sign cluster. Panels touch with 0px gap, simulating a building facade.",
    "density": "High — panels occupy full height with minimal margins. 2-3 panels visible per viewport on tablet.",
    "panelTreatment": "Each panel is a sign backplate (dark surface with border) with stacked Chinese and English labels. Panels may have slight angular offsets via CSS transform rotate.",
    "dataVizStyle": "Tube progress bars for metrics, with neon glow on the filled portion. Hard diagonal shadows behind each bar.",
    "signatureElement": "A flickering neon sign at the top showing the dashboard title, with sequential lighting animation."
  },
  "landingStyle": {
    "heroApproach": "A vertical stack of overlapping neon sign frames, each with Chinese text (70% height) and English text (30% height), on a near-black background with concrete grain.",
    "scrollBehavior": "As user scrolls, signs light up sequentially (Chinese first, then English, then accents) with steps(1) flicker. Off tubes remain dim.",
    "ctaStyle": "A sign-frame button with primary neon color, hard shadow, and a subtle 0.5Hz glow pulse. Text is uppercase condensed grotesque.",
    "signatureMoment": "Upon load, the largest central sign performs a headlight-sweep animation: a diagonal pass of increased brightness that reveals the sign from top-left to bottom-right."
  },
  "buttons": [
    {
      "name": "sign-frame-button-primary",
      "desc": "Primary action button styled as a neon sign frame. Rectangular, flat fill with hard diagonal shadow and soft glow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--primary); color: var(--on-primary); border: none; border-radius: var(--radius-btn); padding: 4px 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); box-shadow: 0 0 4px var(--primary);\">霓虹 ON</button>",
      "label": "sign-frame-button-primary",
      "note": "Primary action button styled as a neon sign frame. Rectangular, flat fill with hard diagonal shadow and soft glow."
    },
    {
      "name": "sign-frame-button-secondary",
      "desc": "Secondary button using surface background and muted text. Maintains rectangular shape and hard shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: var(--surface); color: var(--on-bg); border: 1px solid var(--border); border-radius: var(--radius-btn); padding: 4px 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3));\">SIGN OFF</button>",
      "label": "sign-frame-button-secondary",
      "note": "Secondary button using surface background and muted text. Maintains rectangular shape and hard shadow."
    },
    {
      "name": "sign-frame-button-ghost",
      "desc": "Ghost button with transparent background, neon border color only. For low-emphasis actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; color: var(--primary); border: 1px solid var(--primary); border-radius: var(--radius-btn); padding: 4px 16px; font-family: var(--font-body); font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3));\">GLOW</button>",
      "label": "sign-frame-button-ghost",
      "note": "Ghost button with transparent background, neon border color only. For low-emphasis actions."
    }
  ],
  "cards": [
    {
      "name": "sign-backplate-card",
      "desc": "A card that functions as a sign backplate. Rectangular, dark surface, with bracket-like border and hard shadow. Contains stacked Chinese and English text.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 8px; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); box-shadow: 0 0 4px var(--primary); display: flex; flex-direction: column; min-height: 96px;\"><span style=\"font-family: var(--font-display); font-size: 24px; font-weight: 900; color: var(--primary); line-height: 1;\">霓虹</span><span style=\"font-family: var(--font-body); font-size: 16px; font-weight: 600; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;\">NEON LIGHT</span></div>",
      "label": "sign-backplate-card",
      "note": "A card that functions as a sign backplate. Rectangular, dark surface, with bracket-like border and hard shadow. Contains stacked Chinese and English text."
    },
    {
      "name": "sign-backplate-card-inverse",
      "desc": "Alternate card variant with lighter background and darker text for readability. Still maintains neon glow accents.",
      "html": "<div style=\"background: var(--on-bg); border: 1px solid var(--primary); border-radius: var(--radius-card); padding: 8px; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); box-shadow: 0 0 4px var(--primary); display: flex; flex-direction: column; min-height: 96px;\"><span style=\"font-family: var(--font-display); font-size: 24px; font-weight: 900; color: var(--bg); line-height: 1;\">霓虹</span><span style=\"font-family: var(--font-body); font-size: 16px; font-weight: 600; color: var(--bg); text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;\">NEON LIGHT</span></div>",
      "label": "sign-backplate-card-inverse",
      "note": "Alternate card variant with lighter background and darker text for readability. Still maintains neon glow accents."
    }
  ],
  "forms": [
    {
      "name": "neon-text-input",
      "desc": "Text input styled as a neon sign panel. Dark background, bright neon text, rectangular with hard shadow.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-input); padding: 4px; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); display: inline-block;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" placeholder=\"輸入文字\" style=\"background: transparent; border: none; color: var(--primary); font-family: var(--font-body); font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px; outline: none; width: 200px;\" /></div>",
      "label": "neon-text-input",
      "stateLabel": "Text input styled as a neon sign panel. Dark background, bright neon text, rectangular with hard shadow."
    },
    {
      "name": "neon-select",
      "desc": "Dropdown select styled as a neon sign fixture. Uses flat colors and hard shadow.",
      "html": "<div style=\"background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-input); padding: 4px; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); display: inline-block;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background: transparent; border: none; color: var(--primary); font-family: var(--font-body); font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px; outline: none;\"><option>選擇</option><option>ON</option><option>OFF</option></select></div>",
      "label": "neon-select",
      "stateLabel": "Dropdown select styled as a neon sign fixture. Uses flat colors and hard shadow."
    },
    {
      "name": "neon-checkbox",
      "desc": "Custom checkbox toggles with neon glow. Uses a hidden native checkbox with a styled label.",
      "html": "<label style=\"display: flex; align-items: center; gap: 4px; font-family: var(--font-body); font-size: 16px; font-weight: 600; color: var(--on-bg); text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"appearance: none; width: 24px; height: 24px; background: var(--surface); border: 1px solid var(--border); border-radius: 0px; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3));\" /><span style=\"box-shadow: inset 0 0 0 0 var(--primary);\">霓虹 CHECK</span></label>",
      "label": "neon-checkbox",
      "stateLabel": "Custom checkbox toggles with neon glow. Uses a hidden native checkbox with a styled label."
    }
  ],
  "extraComponents": [
    {
      "name": "certification-badge",
      "desc": "Small badge containing a certificate number, simulating the regulation stamp on a neon sign.",
      "html": "<div style=\"background: var(--surface); color: var(--on-bg-muted); border: 1px solid var(--border); border-radius: 0px; padding: 4px; font-family: var(--font-display); font-size: 12px; font-weight: 300; letter-spacing: -0.05em; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); display: inline-block;\">#NEON-8492</div>"
    },
    {
      "name": "transformer-box",
      "desc": "A small rectangular block simulating a transformer unit attached to the sign frame.",
      "html": "<div style=\"background: var(--border); color: var(--on-bg-muted); border: 1px solid var(--border); border-radius: 0px; padding: 4px 8px; font-family: var(--font-body); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3)); display: inline-block;\">T-MAX</div>"
    },
    {
      "name": "tube-progress-bar",
      "desc": "A progress bar styled as a neon tube. The filled portion glows with the primary neon color against a dark background.",
      "html": "<div style=\"width: 200px; height: 4px; background: var(--border); border-radius: 0px; filter: drop-shadow(4px 4px 0 rgba(0,0,0,0.3));\"><div style=\"height: 100%; width: 65%; background: var(--primary); box-shadow: 0 0 4px var(--primary);\"></div></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — 霓虹 SIGN</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — NEON REGULATION</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — 九龍霓虹</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — THIS IS A NEON SIGN ON A BUILDING FACADE</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — CERT #8442</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Avoid rounded corners on any sign element. Regulation requires rectangular frames.",
      "avoid": {
        "html": "<button style=\"border-radius: 8px; background: var(--primary); color: var(--on-primary);\">ROUNDED</button>",
        "label": "Avoid"
      },
      "rule": "Avoid rounded corners on any sign element. Regulation requires rectangular frames.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid gradients in neon fills. All neon colors must be flat.",
      "avoid": {
        "html": "<div style=\"background: linear-gradient(var(--primary), var(--secondary-col)); color: var(--on-bg);\">GRADIENT</div>",
        "label": "Avoid"
      },
      "rule": "Avoid gradients in neon fills. All neon colors must be flat.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid pure white #FFFFFF text. Use tinted cool-white var(--on-bg) instead.",
      "avoid": {
        "html": "<span style=\"color: #FFFFFF;\">BAD WHITE</span>",
        "label": "Avoid"
      },
      "rule": "Avoid pure white #FFFFFF text. Use tinted cool-white var(--on-bg) instead.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Avoid smooth easing for transitions. Use mechanical steps(1) or no animation.",
      "avoid": {
        "html": "<div style=\"transition: all 0.3s ease;\">SMOOTH</div>",
        "label": "Avoid"
      },
      "rule": "Avoid smooth easing for transitions. Use mechanical steps(1) or no animation.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    }
  ],
  "layouts": {
    "copy": {
      "heroKicker": "KOWLOON GLOW — ALPHA",
      "heroHeadline": "NEON COMPLIANCE · SIGN REGISTRY",
      "heroSub": "DENSE STACK · FLAT GLOW · 45° SHADOW — REGULATED VERTICAL FACADE",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">REGISTER NEW SIGN</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">VIEW INSPECTION SCHEDULE</button>",
      "navLinks": [
        "SIGNS",
        "REGULATIONS",
        "CERTIFICATIONS",
        "INSPECTORS",
        "STUDIO"
      ],
      "features": [
        {
          "title": "VERTICAL STACK SIMULATOR",
          "desc": "Arrange signs on a facade with exact regulation gaps. Chinese top 70%, English bottom 30%.",
          "icon": "🔲",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🔲 VERTICAL STACK SIMULATOR</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Arrange signs on a facade with exact regulation gaps. Chinese top 70%, English bottom 30%.</div></div>"
        },
        {
          "title": "TUBE PROGRESS TRACKER",
          "desc": "Monitor neon tube lifetime — each tube logs hours, flicker cycles, and joint integrity.",
          "icon": "⚡",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⚡ TUBE PROGRESS TRACKER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Monitor neon tube lifetime — each tube logs hours, flicker cycles, and joint integrity.</div></div>"
        },
        {
          "title": "CERTIFICATION BADGE ENGINE",
          "desc": "Auto-generate certificate numbers and compliance badges per sign frame.",
          "icon": "🏷️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🏷️ CERTIFICATION BADGE ENGINE</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Auto-generate certificate numbers and compliance badges per sign frame.</div></div>"
        },
        {
          "title": "TRANSFORMER BOX MANAGER",
          "desc": "Map transformer boxes to sign backplates, track load and replacement dates.",
          "icon": "📦",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📦 TRANSFORMER BOX MANAGER</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Map transformer boxes to sign backplates, track load and replacement dates.</div></div>"
        }
      ],
      "ctaStripHeadline": "45° SHADOW · ZERO BLUR · FLAT NEON",
      "ctaStripHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\">START COMPLIANCE SCAN</button>",
      "sidebarBrand": "KOWLOON GLOW",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "DASHBOARD",
          "active": true
        },
        {
          "icon": "◉",
          "label": "SIGN STACK",
          "active": false
        },
        {
          "icon": "◉",
          "label": "TUBE INVENTORY",
          "active": false
        },
        {
          "icon": "◉",
          "label": "REGULATION MAP",
          "active": false
        }
      ],
      "dashboardTitle": "SIGN REGISTRY — DENSITY OVERVIEW",
      "metrics": [
        {
          "label": "SIGNS REGISTERED",
          "value": "1,247",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PENDING INSPECTION",
          "value": "83",
          "delta": "-4%",
          "dir": "down",
          "direction": "down"
        },
        {
          "label": "TUBES ACTIVE",
          "value": "4,932",
          "delta": "+3%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "CERTIFICATIONS ISSUED",
          "value": "1,102",
          "delta": "+9%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "AVG. TUBE HOURS",
          "value": "14,720h",
          "delta": "+2%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "NEON HUE DISTRIBUTION — LAST 6 QUARTERS",
      "panelATitle": "RECENT SIGN APPLICATIONS",
      "panelARows": [
        {
          "label": "大班冰室 · MONG KOK",
          "value": "APPROVED · CERT #NK-2407",
          "pct": 0
        },
        {
          "label": "鳳凰樓 · WAN CHAI",
          "value": "PENDING INSPECTION · #PH-2412",
          "pct": 0
        },
        {
          "label": "金記冰室 · SHAM SHUI PO",
          "value": "REVISION NEEDED · BRACKET GAP",
          "pct": 0
        },
        {
          "label": "新光酒樓 · JORDAN",
          "value": "APPROVED · CERT #JC-2501",
          "pct": 0
        },
        {
          "label": "龍城電器 · KOWLOON CITY",
          "value": "TUBE REPLACEMENT QUEUED",
          "pct": 0
        }
      ],
      "panelBTitle": "CERTIFICATION BADGE — DETAILS",
      "panelBCells": [
        {
          "label": "CERT NUMBER",
          "value": "HK-NS-2025-0447",
          "state": "ok"
        },
        {
          "label": "ISSUED",
          "value": "2025-02-14",
          "state": "warn"
        },
        {
          "label": "SIGN TYPE",
          "value": "VERTICAL STACK · DUAL LANGUAGE",
          "state": "err"
        },
        {
          "label": "CHINESE TEXT",
          "value": "金記冰室",
          "state": "ok"
        },
        {
          "label": "ENGLISH TEXT",
          "value": "KAM KEE CAFE",
          "state": "warn"
        },
        {
          "label": "TUBE COUNT",
          "value": "23 (ACTIVE 21, OFF 2)",
          "state": "err"
        },
        {
          "label": "TRANSFORMER BOX",
          "value": "TB-4427 · LOAD 68%",
          "state": "ok"
        },
        {
          "label": "NEXT INSPECTION",
          "value": "2025-08-14",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "Q1 2024",
        "Q2 2024",
        "Q3 2024",
        "Q4 2024",
        "Q1 2025",
        "Q2 2025"
      ],
      "series": [
        {
          "data": [
            42,
            55,
            61,
            48,
            53,
            59,
            59,
            59,
            59,
            59,
            59,
            59
          ],
          "label": "#FF0033 (RED)",
          "axis": "left",
          "color": "#FF0033"
        },
        {
          "data": [
            28,
            31,
            27,
            34,
            30,
            29,
            29,
            29,
            29,
            29,
            29,
            29
          ],
          "label": "#00FF66 (GREEN)",
          "axis": "right-1",
          "color": "#00FF66"
        },
        {
          "data": [
            12,
            15,
            18,
            14,
            16,
            20,
            20,
            20,
            20,
            20,
            20,
            20
          ],
          "label": "#0066FF (BLUE)",
          "axis": "right-2",
          "color": "#FF0033"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:var(--bg);padding:16px;gap:0;'; var sign1 = document.createElement('div'); sign1.style.cssText = 'width:280px;height:192px;background:var(--surface);border:1px solid var(--border);filter:drop-shadow(4px 4px 0 rgba(0,0,0,0.3));display:flex;flex-direction:column;align-items:center;justify-content:center;'; sign1.innerHTML = '<div style=\"font-family:var(--font-display);font-size:48px;font-weight:900;color:var(--primary);line-height:1;text-shadow:0 0 4px var(--primary);\">大班</div><div style=\"font-family:var(--font-body);font-size:18px;font-weight:600;color:var(--on-bg);text-transform:uppercase;letter-spacing:0.1em;margin-top:4px;\">DAI BAN</div>'; el.appendChild(sign1); var sign2 = document.createElement('div'); sign2.style.cssText = 'width:200px;height:96px;background:var(--surface);border:1px solid var(--border);filter:drop-shadow(4px 4px 0 rgba(0,0,0,0.3));display:flex;flex-direction:column;align-items:center;justify-content:center;margin-top:8px;'; sign2.innerHTML = '<div style=\"font-family:var(--font-display);font-size:32px;font-weight:900;color:var(--secondary-col);line-height:1;text-shadow:0 0 4px var(--secondary-col);\">OPEN</div><div style=\"font-family:var(--font-body);font-size:14px;font-weight:600;color:var(--on-bg-muted);text-transform:uppercase;letter-spacing:0.1em;margin-top:2px;\">24 HOURS</div>'; el.appendChild(sign2); }",
    "showcaseRender": "function(el) { el.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:0;padding:16px;background:var(--bg);'; var features = ['VERTICAL STACK','TUBE TRACKER','CERT ENGINE','TRANSFORMER']; features.forEach(function(f){ var card=document.createElement('div'); card.style.cssText='background:var(--surface);border:1px solid var(--border);padding:24px;filter:drop-shadow(4px 4px 0 rgba(0,0,0,0.3));display:flex;flex-direction:column;'; card.innerHTML='<div style=\"font-family:var(--font-display);font-size:32px;font-weight:900;color:var(--primary);text-shadow:0 0 4px var(--primary);\">霓</div><div style=\"font-family:var(--font-body);font-size:13px;font-weight:600;color:var(--on-bg);text-transform:uppercase;letter-spacing:0.1em;margin-top:4px;\">'+f+'</div>'; el.appendChild(card); }); }",
    "panelCRender": "function(el) { el.style.cssText='background:var(--surface);border:1px solid var(--border);padding:16px;filter:drop-shadow(4px 4px 0 rgba(0,0,0,0.3));display:flex;flex-direction:column;gap:8px;'; el.innerHTML='<div style=\"font-family:var(--font-display);font-size:24px;font-weight:900;color:var(--primary);line-height:1;text-shadow:0 0 4px var(--primary);\">CERTIFICATION</div><div style=\"font-family:var(--font-body);font-size:14px;font-weight:600;color:var(--on-bg);text-transform:uppercase;letter-spacing:0.05em;\">#HK-NS-2025-0447</div><div style=\"font-family:var(--font-body);font-size:12px;font-weight:300;color:var(--on-bg-muted);text-transform:uppercase;\">ISSUED: 2025-02-14</div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "sectionSeparator": "function() { var d=document.createElement('div'); d.style.cssText='height:4px;background:var(--primary);filter:drop-shadow(4px 4px 0 rgba(0,0,0,0.3));'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; }",
    "surfaceOverlay": "function(el) { var ov=document.createElement('div'); ov.style.cssText='position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 30%, rgba(255,0,51,0.04) 0%, transparent 70%);'; el.appendChild(ov); }"
  },
  "ambientCanvas": "function(el) { el.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;z-index:9998;'; var style=document.createElement('style'); style.textContent='@keyframes neonFlicker{0%,100%{opacity:1;}50%{opacity:0.2;}}'; el.appendChild(style); for(var i=0;i<15;i++){ var tube=document.createElement('div'); tube.style.cssText='position:absolute;width:'+(20+Math.random()*60)+'px;height:4px;background:var(--primary);box-shadow:0 0 6px var(--primary);border-radius:0;animation:neonFlicker '+(1+Math.random())+'s step-start infinite;animation-delay:'+(Math.random()*2)+'s;top:'+(Math.random()*100)+'%;left:'+(Math.random()*100)+'%;transform:rotate('+(Math.random()*360)+'deg);'; el.appendChild(tube); } }",
  "shadcnTokens": {
    "--color-background": "#0a0a14",
    "--color-popover": "#0a0a14",
    "--color-foreground": "#D0D0FF",
    "--color-card-foreground": "#D0D0FF",
    "--color-popover-foreground": "#D0D0FF",
    "--color-card": "#1a1a2e",
    "--color-muted": "#1a1a2e",
    "--color-muted-foreground": "#7A7A9A",
    "--color-primary": "#FF0033",
    "--color-ring": "#FF0033",
    "--color-primary-foreground": "#171717",
    "--color-secondary": "#00FF66",
    "--color-accent": "#00FF66",
    "--color-secondary-foreground": "#0a0a14",
    "--color-accent-foreground": "#0a0a14",
    "--color-border": "#2a2a3e",
    "--color-input": "#2a2a3e",
    "--color-destructive": "#FF0033"
  },
  "shadcnTokensClassic": {
    "--background": "#0a0a14",
    "--popover": "#0a0a14",
    "--foreground": "#D0D0FF",
    "--card-foreground": "#D0D0FF",
    "--popover-foreground": "#D0D0FF",
    "--card": "#1a1a2e",
    "--muted": "#1a1a2e",
    "--muted-foreground": "#7A7A9A",
    "--primary": "#FF0033",
    "--ring": "#FF0033",
    "--primary-foreground": "#171717",
    "--secondary": "#00FF66",
    "--accent": "#00FF66",
    "--secondary-foreground": "#0a0a14",
    "--accent-foreground": "#0a0a14",
    "--border": "#2a2a3e",
    "--input": "#2a2a3e",
    "--destructive": "#FF0033"
  }
});
