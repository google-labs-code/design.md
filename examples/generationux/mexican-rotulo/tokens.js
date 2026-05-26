registerSystem({
  "meta": {
    "name": "Mexican Rótulo",
    "tagline": "Vibrant vernacular hand-painted storefront signage",
    "mode": "light",
    "fontImport": "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Oswald&family=Source+Serif+Pro&family=Caveat&display=swap"
  },
  "yamlTokens": {
    "name": "Mexican Rótulo",
    "colors": {
      "primary": "#DC143C",
      "tertiary": "#FFD700"
    },
    "typography": {
      "display": {
        "fontFamily": "Alfa Slab One",
        "fontSize": "60px",
        "fontWeight": 900,
        "lineHeight": 1.25,
        "letterSpacing": "-0.05em",
        "textTransform": "uppercase"
      },
      "headline": {
        "fontFamily": "Alfa Slab One",
        "fontSize": "36px",
        "fontWeight": 700,
        "lineHeight": 1.375,
        "letterSpacing": "-0.025em",
        "textTransform": "uppercase"
      },
      "title": {
        "fontFamily": "Source Serif Pro",
        "fontSize": "24px",
        "fontWeight": 600,
        "lineHeight": 1.5,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      },
      "body": {
        "fontFamily": "Source Serif Pro",
        "fontSize": "16px",
        "fontWeight": 500,
        "lineHeight": 1.625,
        "letterSpacing": "0em"
      },
      "label": {
        "fontFamily": "Source Serif Pro",
        "fontSize": "14px",
        "fontWeight": 400,
        "lineHeight": 1,
        "letterSpacing": "0em",
        "textTransform": "uppercase"
      }
    },
    "rounded": {
      "default": "0px",
      "card": "2px",
      "button": "2px",
      "input": "0px",
      "chip": "0px"
    },
    "spacing": {
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px"
    },
    "components": {
      "button-primary": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "rounded": "{rounded.button}",
        "padding": "8px",
        "height": "40px"
      },
      "button-primary-hover": {
        "backgroundColor": "#A01028",
        "textColor": "#FFFFFF",
        "padding": "8px",
        "height": "40px"
      },
      "button-primary-disabled": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "padding": "8px",
        "height": "40px"
      },
      "card": {
        "backgroundColor": "#F5F0E1",
        "rounded": "{rounded.card}",
        "padding": "16px"
      },
      "nav-link": {
        "textColor": "{colors.primary}",
        "padding": "8px",
        "height": "40px"
      },
      "nav-link-active": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "padding": "8px",
        "height": "40px"
      },
      "input": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "input-focus": {
        "backgroundColor": "#FFFFFF",
        "rounded": "{rounded.input}",
        "padding": "8px"
      },
      "decorative-frame": {
        "backgroundColor": "#F5F0E1",
        "padding": "8px"
      },
      "ribbon-banner": {
        "backgroundColor": "{colors.primary}",
        "textColor": "#FFFFFF",
        "padding": "8px",
        "height": "40px"
      },
      "year-stamp": {
        "backgroundColor": "#F5F0E1",
        "textColor": "#3E2723",
        "padding": "4px",
        "width": "48px",
        "height": "24px"
      },
      "motif-badge": {
        "backgroundColor": "{colors.tertiary}",
        "textColor": "#3E2723",
        "padding": "4px",
        "width": "24px",
        "height": "24px"
      }
    },
    "version": "alpha",
    "description": "A vibrant, vernacular design system inspired by Mexican hand-painted storefront signage, using saturated enamel colours, fat Tuscan serifs, heavy drop shadows, and weathered textures.",
    "provenance": {
      "coverage_status": "minimal",
      "identity_description": "",
      "manual_enrichment_required": true,
      "imagery_count": 2,
      "prompt_versions": {
        "forensic_capture": "step0-v3",
        "extraction": null,
        "typography_map": "entries:113"
      },
      "sources": [
        {
          "host": "www.youtube.com",
          "count": 1
        },
        {
          "host": "www.mexicancraft.com",
          "count": 1
        }
      ],
      "imagery_urls": [
        {
          "url": "https://www.youtube.com/watch?v=3l9s4f6b_2A",
          "host": "www.youtube.com",
          "institution": "YouTube",
          "confidence_original": "low"
        },
        {
          "url": "https://www.mexicancraft.com/mexican-signs",
          "host": "www.mexicancraft.com",
          "institution": "mexicancraft.com",
          "confidence_original": "low"
        }
      ],
      "typefaces_attested": {},
      "flags": [
        "few_usable_urls",
        "no_typography_extracted",
        "no_colour_extracted",
        "4_robots_disallowed_urls"
      ],
      "honest_gaps": {}
    }
  },
  "colorMode": "light",
  "tokens": {
    "--bg": "#F5F0E1",
    "--on-bg": "#3E2723",
    "--primary": "#DC143C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0047AB",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E1",
    "--on-bg-muted": "#8D6E63",
    "--border": "#4A3728",
    "--error": "#B71C1C",
    "--font-display": "'Alfa Slab One', serif",
    "--font-body": "'Source Serif Pro', serif",
    "--radius-default": "0px",
    "--radius-card": "2px",
    "--radius-btn": "2px",
    "--radius-chip": "0px"
  },
  "semanticColors": {
    "success": "#50C878",
    "warning": "#FFD700",
    "error": "#B71C1C",
    "err": "#B71C1C",
    "ok": "#50C878",
    "warn": "#FFD700",
    "deltaUp": "#50C878",
    "deltaDown": "#B71C1C",
    "deltaFlat": "#8D6E63",
    "live": "#DC143C",
    "chartGrid": "rgba(128,128,128,0.18)",
    "chartLabel": "#8D6E63",
    "chartFont": "Space Grotesk"
  },
  "chartStyle": {
    "backgroundColor": "#F5F0E1",
    "textColor": "#3E2723",
    "gridColor": "#4A3728",
    "fontFamily": "'Source Serif Pro', serif",
    "labelColor": "#8D6E63"
  },
  "surfaceModel": "paper",
  "materialSimulation": {
    "model": "paper",
    "params": {
      "grain": {
        "baseFrequency": "0.6",
        "numOctaves": 3,
        "type": "fractalNoise",
        "blend": "multiply",
        "opacity": 0.2
      }
    }
  },
  "globalFilter": "<svg xmlns='http://www.w3.org/2000/svg' width='0' height='0'><defs><filter id='rotulo-grain' x='0' y='0' width='100%' height='100%'><feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' result='noise'/><feColorMatrix type='saturate' values='0' in='noise' result='gray'/><feBlend mode='multiply' in='SourceGraphic' in2='gray' result='blended'/><feComponentTransfer><feFuncA type='linear' slope='0.15'/></feComponentTransfer></filter></defs></svg>",
  "globalBodyCss": "font-family: var(--font-body); background-color: var(--bg); color: var(--on-bg); margin: 0; padding: 0;",
  "globalCss": ".ds-layout-frame { box-sizing: border-box; } .ds-layout-frame h1, .ds-layout-frame h2, .ds-layout-frame h3, .ds-layout-frame h4, .ds-layout-frame h5, .ds-layout-frame h6, .ds-layout-frame p, .ds-layout-frame a, .ds-layout-frame span, .ds-layout-frame button { -webkit-text-stroke: 2px var(--border); text-stroke: 2px var(--border); text-shadow: 4px 4px 0 var(--on-bg); } .ds-layout-frame .decorative-frame { border: 6px double var(--border); outline: 3px solid var(--border); outline-offset: -12px; } .ds-layout-frame .ribbon-banner { clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%); } .ds-layout-frame .year-stamp { transform: rotate(-15deg); } .ds-layout-frame *, .ds-layout-frame *::before, .ds-layout-frame *::after { transition: none !important; }",
  "interactionModel": {
    "hover": {
      "backgroundColor": "#A01028",
      "transition": "none"
    },
    "focus": {
      "outline": "2px solid var(--primary)",
      "transition": "none"
    },
    "active": {
      "transform": "translate(1px, 1px)",
      "boxShadow": "3px 3px 0 var(--on-bg)",
      "transition": "none"
    }
  },
  "interactionStyles": ".ds-layout-frame button:hover { background-color: #A01028; color: var(--on-primary); } .ds-layout-frame a:hover { color: #A01028; } .ds-layout-frame button:focus { outline: 2px solid var(--primary); outline-offset: 2px; } .ds-layout-frame button:active { transform: translate(1px, 1px); box-shadow: 3px 3px 0 var(--on-bg); }",
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "radius": {
    "default": "0px",
    "card": "2px",
    "button": "2px",
    "input": "0px",
    "chip": "0px"
  },
  "elevation": {
    "shadow-heavy": "5px 5px 0px #3E2723",
    "shadow-medium": "3px 3px 0px #3E2723",
    "shadow-light": "1px 1px 0px #3E2723"
  },
  "dashboardStyle": {
    "layout": "single-column, centered, maximal density",
    "density": "maximal — avoid empty space, use decorative borders and motifs between panels",
    "panelTreatment": "each panel has a decorative double-line border, heavy shadow, and a corner motif badge; the background uses the grain noise filter (rotulo-grain) for a weathered substrate feel.",
    "dataVizStyle": "thick lines, flat fills, no gradients; chart backgrounds use var(--surface) with grain overlay",
    "signatureElement": "a star motif badge in the top-right corner of each panel"
  },
  "landingStyle": {
    "heroApproach": "massive display typography (Tuscan serif) with casquillo outline and heavy drop shadow, centered over grain-textured background",
    "scrollBehavior": "instantaneous sections; distinct decorative rules between sections",
    "ctaStyle": "primary red button with heavy shadow, styled as a ribbon banner",
    "signatureMoment": "a decorative double-line frame with a rotated year stamp (e.g., '1999') and a chili motif badge (clip-path chili shape) placed near the hero headline to evoke hand-painted vendor signs."
  },
  "buttons": [
    {
      "name": "Primary Button",
      "desc": "Standard rotulo primary action button with casquillo outline and heavy drop shadow.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"padding: 8px; height: 40px; background-color: var(--primary); color: var(--on-primary); border: 3px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); text-transform: uppercase; font-size: 16px; font-weight: bold; letter-spacing: 0.02em; box-shadow: 4px 4px 0 var(--on-bg); cursor: pointer;\">ORDENAR AHORA</button>",
      "label": "Primary Button",
      "note": "Standard rotulo primary action button with casquillo outline and heavy drop shadow."
    },
    {
      "name": "Dark Button",
      "desc": "Alternate button using the dark border color for background, suitable for secondary actions.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"padding: 8px; height: 40px; background-color: var(--border); color: var(--on-primary); border: 3px solid var(--border); border-radius: var(--radius-btn); font-family: var(--font-display); text-transform: uppercase; font-size: 14px; font-weight: bold; letter-spacing: 0.02em; box-shadow: 4px 4px 0 var(--on-bg); cursor: pointer;\">VER MÁS</button>",
      "label": "Dark Button",
      "note": "Alternate button using the dark border color for background, suitable for secondary actions."
    },
    {
      "name": "Outline Button",
      "desc": "Ghost button with casquillo outline and no fill, preserving rotulo lettering weight on the text.",
      "html": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"padding: 8px; height: 40px; background-color: transparent; color: var(--primary); border: 3px solid var(--primary); border-radius: var(--radius-btn); font-family: var(--font-display); text-transform: uppercase; font-size: 14px; font-weight: bold; letter-spacing: 0.02em; cursor: pointer;\">CANCELAR</button>",
      "label": "Outline Button",
      "note": "Ghost button with casquillo outline and no fill, preserving rotulo lettering weight on the text."
    }
  ],
  "cards": [
    {
      "name": "Decorative Frame Card",
      "desc": "A card with double-line border (casquillo) and heavy shadow, featuring centered rotulo typography.",
      "html": "<div style=\"background-color: var(--surface); border: 6px solid var(--border); padding: 4px; box-shadow: 4px 4px 0 var(--on-bg);\"><div style=\"border: 2px solid var(--primary); padding: 16px; text-align: center; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase; letter-spacing: -0.02em;\"><h3 style=\"margin: 0; font-size: 24px;\">TIENDA</h3><p style=\"margin: 0; font-family: var(--font-body); font-size: 14px; color: var(--on-bg-muted);\">ARTESANÍAS</p></div></div>",
      "label": "Decorative Frame Card",
      "note": "A card with double-line border (casquillo) and heavy shadow, featuring centered rotulo typography."
    },
    {
      "name": "Card with Year Stamp & Motif Badge",
      "desc": "A card with a rotated year stamp in the top-left and a star motif badge in the bottom-right, both typical rotulo elements.",
      "html": "<div style=\"position: relative; background-color: var(--surface); border: 6px solid var(--border); padding: 16px; box-shadow: 4px 4px 0 var(--on-bg); text-align: center;\"><div style=\"position: absolute; top: -12px; left: 8px; background-color: var(--bg); padding: 4px 8px; border: 2px solid var(--border); transform: rotate(-5deg); font-family: var(--font-body); font-size: 12px; color: var(--on-bg);\">1980</div><div style=\"position: absolute; bottom: -8px; right: 8px; width: 24px; height: 24px; background-color: var(--primary); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\"></div><h3 style=\"margin: 0; font-family: var(--font-display); font-size: 24px; color: var(--primary); text-shadow: 3px 3px 0 var(--on-bg);\">CANTINA</h3><p style=\"margin: 0; font-family: var(--font-body); font-size: 14px; color: var(--on-bg-muted); text-transform: uppercase;\">LA FAVORITA</p></div>",
      "label": "Card with Year Stamp & Motif Badge",
      "note": "A card with a rotated year stamp in the top-left and a star motif badge in the bottom-right, both typical rotulo elements."
    }
  ],
  "forms": [
    {
      "name": "Text Input",
      "desc": "Standard rotulo text input with thick border, no border-radius, and uppercase label.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"display: block; font-family: var(--font-body); text-transform: uppercase; color: var(--on-bg); margin-bottom: 4px;\">Nombre</label><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"text\" style=\"padding: 8px; background-color: white; border: 3px solid var(--border); border-radius: 0; font-family: var(--font-body); font-size: 16px; width: 100%; box-sizing: border-box; color: var(--on-bg);\" placeholder=\"Ingrese su nombre\" /></div>",
      "label": "Text Input",
      "stateLabel": "Standard rotulo text input with thick border, no border-radius, and uppercase label."
    },
    {
      "name": "Select Dropdown",
      "desc": "Custom select with arrow indicator, thick border, and rotulo styling.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"display: block; font-family: var(--font-body); text-transform: uppercase; color: var(--on-bg); margin-bottom: 4px;\">Estado</label><div style=\"position: relative;\"><select onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"padding: 8px; background-color: white; border: 3px solid var(--border); border-radius: 0; font-family: var(--font-body); font-size: 16px; width: 100%; box-sizing: border-box; color: var(--on-bg); appearance: none; -webkit-appearance: none; -moz-appearance: none;\"><option>Seleccione</option><option>Jalisco</option><option>Oaxaca</option></select><span style=\"position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--border);\">▾</span></div></div>",
      "label": "Select Dropdown",
      "stateLabel": "Custom select with arrow indicator, thick border, and rotulo styling."
    },
    {
      "name": "Checkbox",
      "desc": "Custom checkbox with thick border, styled as a rotulo block.",
      "html": "<div style=\"margin-bottom: 16px;\"><label style=\"font-family: var(--font-body); text-transform: uppercase; color: var(--on-bg); display: flex; align-items: center;\"><input onfocus=\"this.dataset.guxBorder=this.style.border||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.border=\\x272px solid var(--secondary-col)\\x27;this.style.boxShadow=\\x270 0 8px var(--secondary-col)\\x27\" onblur=\"this.style.border=this.dataset.guxBorder||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" type=\"checkbox\" style=\"margin-right: 8px; width: 20px; height: 20px; border: 3px solid var(--border); background-color: white; appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer;\" />Recordarme</label></div>",
      "label": "Checkbox",
      "stateLabel": "Custom checkbox with thick border, styled as a rotulo block."
    }
  ],
  "extraComponents": [
    {
      "name": "Decorative Frame",
      "desc": "A double-line border frame with corner motif badges, typical of rotulo composition.",
      "html": "<div style=\"position: relative; background-color: var(--bg); border: 6px solid var(--primary); padding: 16px; box-shadow: 4px 4px 0 var(--on-bg);\"><div style=\"position: absolute; top: -12px; left: -12px; width: 24px; height: 24px; background-color: var(--primary); border: 2px solid var(--border); transform: rotate(45deg);\"></div><div style=\"position: absolute; bottom: -12px; right: -12px; width: 24px; height: 24px; background-color: var(--primary); border: 2px solid var(--border); transform: rotate(45deg);\"></div><p style=\"text-align: center; font-family: var(--font-display); color: var(--on-bg); text-transform: uppercase; margin: 0;\">Marco Decorativo</p></div>"
    },
    {
      "name": "Ribbon Banner",
      "desc": "A ribbon-shaped banner with angled ends (via clip-path) and heavy shadow, using primary red.",
      "html": "<div style=\"background-color: var(--primary); color: var(--on-primary); padding: 8px 16px; font-family: var(--font-display); text-transform: uppercase; font-size: 20px; text-align: center; clip-path: polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%); box-shadow: 4px 4px 0 var(--on-bg);\">OFERTA ESPECIAL</div>"
    },
    {
      "name": "Year Stamp",
      "desc": "A small rotated year stamp with thin outline, mimicking hand-painted vintage numerals.",
      "html": "<div style=\"display: inline-block; background-color: var(--bg); border: 2px solid var(--border); padding: 4px 8px; font-family: var(--font-body); font-size: 14px; color: var(--on-bg-muted); transform: rotate(-10deg); text-transform: uppercase;\">1999</div>"
    },
    {
      "name": "Motif Badge",
      "desc": "A five-point star badge using clip-path, filled with primary color and bordered.",
      "html": "<div style=\"width: 32px; height: 32px; background-color: var(--primary); clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); border: 1px solid var(--border);\"></div>"
    }
  ],
  "typographySpecimen": {
    "render": "function(el){ el.innerHTML = \"<div style=\\\"padding:16px;border:1px solid var(--border);background:var(--surface);\\\"><div style=\\\"font-family:var(--font-display);font-size:32px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Display</span> — TIENDA MEXICANA</div><div style=\\\"font-family:var(--font-display);font-size:24px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Headline</span> — ARTESANÍAS DE MÉXICO</div><div style=\\\"font-family:var(--font-body);font-size:18px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Title</span> — PRODUCTOS LOCALES</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:400;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Body</span> — Hecho a mano con orgullo en talleres familiares de Oaxaca.</div><div style=\\\"font-family:var(--font-body);font-size:13px;font-weight:700;line-height:1.25;color:var(--on-bg);margin-bottom:8px;\\\"><span style=\\\"color:var(--primary);font-size:10px;text-transform:uppercase;letter-spacing:.12em;\\\">Label</span> — NUEVO</div></div>\"; }"
  },
  "doAvoid": [
    {
      "desc": "Clean sans-serif with no shadows and light background — loses all hand-painted weight.",
      "avoid": {
        "html": "<div style=\"background-color: #f0f0f0; padding: 16px; border: 1px solid #ccc; font-family: Arial; color: #333;\">\n  <button style=\"background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; border-radius: 8px; color: white; padding: 8px 16px;\">Submit</button>\n</div>",
        "label": "Avoid"
      },
      "rule": "Clean sans-serif with no shadows and light background — loses all hand-painted weight.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Gradient background on button — rotulo uses only flat, opaque colors.",
      "avoid": {
        "html": "<button style=\"background: linear-gradient(to right, #ff7e5f, #feb47b); border: none; border-radius: 4px; color: white; padding: 8px 16px; box-shadow: 2px 2px 5px rgba(0,0,0,0.3);\">Click</button>",
        "label": "Avoid"
      },
      "rule": "Gradient background on button — rotulo uses only flat, opaque colors.",
      "do": {
        "label": "Do",
        "html": "<div style=\"width:110px;height:68px;background:var(--bg);border:2px solid var(--primary);box-shadow:0 0 14px var(--primary);clip-path:polygon(0 0,88% 0,100% 50%,88% 100%,0 100%);\"></div>"
      }
    },
    {
      "desc": "Left-aligned text with abundant white space — violates maximal density and center-alignment rule.",
      "avoid": {
        "html": "<div style=\"max-width: 600px; margin: 0 auto; padding: 40px; text-align: left;\">\n  <h1 style=\"font-family: 'Helvetica Neue', sans-serif; font-weight: 300; color: #999;\">Welcome</h1>\n  <p style=\"color: #666; line-height: 1.8;\">This is a clean, minimal design with lots of breathing room.</p>\n</div>",
        "label": "Avoid"
      },
      "rule": "Left-aligned text with abundant white space — violates maximal density and center-alignment rule.",
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
  "doAvoidStyle": "Minimalist clean design with gradients, sans-serif fonts, thin borders, blurred shadows, and abundant white space — the opposite of rotulo's maximal, hand-painted, heavy-shaded aesthetic.",
  "effects": [],
  "motion": [],
  "colors": {
    "--bg": "#F5F0E1",
    "--on-bg": "#3E2723",
    "--primary": "#DC143C",
    "--on-primary": "#FFFFFF",
    "--secondary-col": "#0047AB",
    "--on-secondary": "#FFFFFF",
    "--surface": "#F5F0E1",
    "--on-bg-muted": "#8D6E63",
    "--border": "#4A3728",
    "--error": "#B71C1C"
  },
  "typography": {
    "display": {
      "fontFamily": "'Alfa Slab One', serif",
      "fontSize": "60px",
      "fontWeight": 900,
      "lineHeight": 1.25,
      "letterSpacing": "-0.05em",
      "textTransform": "uppercase"
    },
    "headline": {
      "fontFamily": "'Alfa Slab One', serif",
      "fontSize": "36px",
      "fontWeight": 700,
      "lineHeight": 1.375,
      "letterSpacing": "-0.025em",
      "textTransform": "uppercase"
    },
    "title": {
      "fontFamily": "'Source Serif Pro', serif",
      "fontSize": "24px",
      "fontWeight": 600,
      "lineHeight": 1.5,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    },
    "body": {
      "fontFamily": "'Source Serif Pro', serif",
      "fontSize": "16px",
      "fontWeight": 500,
      "lineHeight": 1.625,
      "letterSpacing": "0em"
    },
    "label": {
      "fontFamily": "'Caveat', cursive",
      "fontSize": "14px",
      "fontWeight": 400,
      "lineHeight": 1,
      "letterSpacing": "0em",
      "textTransform": "uppercase"
    }
  },
  "layouts": {
    "copy": {
      "heroKicker": "ARTESANÍA DIGITAL",
      "heroHeadline": "TU RÓTULO, TU VOZ",
      "heroSub": "Diseña tu letrero con esmalte sintético y sombra pesada. Sin degradados, sin perfección.",
      "heroCtaHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:#DC143C;color:#FFF;border:2px solid #3E2723;padding:8px 16px;font-family:\\x27Alfa Slab One\\x27,serif;font-size:18px;text-transform:uppercase;box-shadow:4px 4px 0 #3E2723;\">CREAR RÓTULO</button>",
      "heroCtaSecHtml": "<button onmouseenter=\"this.dataset.guxFilter=this.style.filter||\\x27\\x27;this.dataset.guxBoxShadow=this.style.boxShadow||\\x27\\x27;this.style.filter=(this.dataset.guxFilter?this.dataset.guxFilter+\\x27 \\x27:\\x27\\x27)+\\x27brightness(1.12)\\x27;this.style.boxShadow=\\x270 0 16px var(--primary)\\x27\" onmouseleave=\"this.style.filter=this.dataset.guxFilter||\\x27\\x27;this.style.boxShadow=this.dataset.guxBoxShadow||\\x27\\x27\" style=\"background:transparent;color:#DC143C;border:2px solid #DC143C;padding:8px 16px;font-family:\\x27Source Serif Pro\\x27,serif;font-size:16px;text-transform:uppercase;\">EXPLORAR GALERÍA</button>",
      "navLinks": [
        "ESTUDIO",
        "GALERÍA",
        "ÓRDENES",
        "CONTACTO"
      ],
      "features": [
        {
          "title": "CASQUILLO GRUESO",
          "desc": "Contorno sólido de 4px en marrón oscuro que enmarca cada letra con peso de brocha.",
          "icon": "📐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">📐 CASQUILLO GRUESO</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Contorno sólido de 4px en marrón oscuro que enmarca cada letra con peso de brocha.</div></div>"
        },
        {
          "title": "SOMBRA DURA",
          "desc": "Sombra paralela sin desenfoque, offset 5px abajo y derecha, para el efecto de letrero pintado.",
          "icon": "🖌️",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🖌️ SOMBRA DURA</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Sombra paralela sin desenfoque, offset 5px abajo y derecha, para el efecto de letrero pintado.</div></div>"
        },
        {
          "title": "MÚLTIPLES TIPOGRAFÍAS",
          "desc": "Mezcla letra tuscana gruesa, script de brocha y sans condensada en una misma composición.",
          "icon": "🎨",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">🎨 MÚLTIPLES TIPOGRAFÍAS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Mezcla letra tuscana gruesa, script de brocha y sans condensada en una misma composición.</div></div>"
        },
        {
          "title": "MOTIVOS DECORATIVOS",
          "desc": "Estrella, chile, flor o sol como badge de esquina con relleno amarillo y contorno negro.",
          "icon": "⭐",
          "cardHtml": "<div style=\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\"><div style=\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\">⭐ MOTIVOS DECORATIVOS</div><div style=\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\">Estrella, chile, flor o sol como badge de esquina con relleno amarillo y contorno negro.</div></div>"
        }
      ],
      "ctaStripHeadline": "¿LISTO PARA PINTAR TU HISTORIA?",
      "ctaStripHtml": "<span style=\"background:#FFD700;color:#3E2723;padding:8px 24px;font-family:'Alfa Slab One',serif;font-size:20px;text-transform:uppercase;border:2px solid #3E2723;box-shadow:4px 4px 0 #3E2723;\">SOLICITA TU COTIZACIÓN</span>",
      "sidebarBrand": "RÓTULO STUDIO",
      "sidebarNav": [
        {
          "icon": "◉",
          "label": "ESTUDIO",
          "active": true
        },
        {
          "icon": "◉",
          "label": "GALERÍA",
          "active": false
        },
        {
          "icon": "◉",
          "label": "PEDIDOS",
          "active": false
        }
      ],
      "dashboardTitle": "TALLER DE RÓTULOS",
      "metrics": [
        {
          "label": "RÓTULOS CREADOS",
          "value": "1,234",
          "delta": "+12%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "PINTORES REGISTRADOS",
          "value": "89",
          "delta": "+5%",
          "dir": "up",
          "direction": "up"
        },
        {
          "label": "COLORES DISPONIBLES",
          "value": "24",
          "delta": "0%",
          "dir": "flat",
          "direction": "flat"
        },
        {
          "label": "ESTILOS ÚNICOS",
          "value": "512",
          "delta": "+18%",
          "dir": "up",
          "direction": "up"
        }
      ],
      "chartTitle": "VENTAS POR ESTILO",
      "panelATitle": "ÓRDENES RECIENTES",
      "panelARows": [
        {
          "label": "TAQUERÍA EL CHILE",
          "value": "EN PINTURA",
          "pct": 0
        },
        {
          "label": "FARMACIA GUADALUPE",
          "value": "APROBADO",
          "pct": 0
        },
        {
          "label": "TIENDA LA SONRISA",
          "value": "BOCETO",
          "pct": 0
        },
        {
          "label": "TALLER MECÁNICO",
          "value": "ENTREGADO",
          "pct": 0
        },
        {
          "label": "ROW 5",
          "pct": 50
        }
      ],
      "panelBTitle": "MATERIALES",
      "panelBCells": [
        {
          "label": "ESMALTE ROJO",
          "value": "24 LT",
          "state": "ok"
        },
        {
          "label": "ESMALTE AMARILLO",
          "value": "12 LT",
          "state": "warn"
        },
        {
          "label": "ESMALTE AZUL",
          "value": "8 LT",
          "state": "err"
        },
        {
          "label": "BARNIZ MATE",
          "value": "5 LT",
          "state": "ok"
        },
        {
          "label": "LIJA FINA",
          "value": "30 PZ",
          "state": "warn"
        },
        {
          "label": "PINCEL PLANO",
          "value": "15 PZ",
          "state": "err"
        },
        {
          "label": "PINCEL REDONDO",
          "value": "20 PZ",
          "state": "ok"
        },
        {
          "label": "MADERA DE PINO",
          "value": "40 PZ",
          "state": "warn"
        }
      ]
    },
    "chartData": {
      "labels": [
        "ENE",
        "FEB",
        "MAR",
        "ABR",
        "MAY",
        "JUN"
      ],
      "series": [
        {
          "data": [
            12,
            19,
            15,
            22,
            18,
            25,
            25,
            25,
            25,
            25,
            25,
            25
          ],
          "label": "TUSCANA",
          "axis": "left",
          "color": "#DC143C"
        },
        {
          "data": [
            8,
            12,
            9,
            14,
            11,
            16,
            16,
            16,
            16,
            16,
            16,
            16
          ],
          "label": "BROCHA",
          "axis": "right-1",
          "color": "#0047AB"
        }
      ]
    },
    "splashRender": "function(el) { el.style.cssText = 'min-height:480px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;'; var container = document.createElement('div'); container.style.cssText = 'position:relative; background:var(--surface); border:6px double var(--border); outline:2px solid var(--primary); outline-offset:-12px; box-shadow:5px 5px 0 var(--on-bg); padding:32px; text-align:center; max-width:800px; width:90%;'; container.innerHTML = '<div style=\"position:absolute; top:-12px; left:-12px; width:24px; height:24px; background:var(--primary); border:2px solid var(--border); transform:rotate(45deg);\"></div><div style=\"position:absolute; top:-12px; right:-12px; width:24px; height:24px; background:var(--primary); border:2px solid var(--border); transform:rotate(45deg);\"></div><div style=\"margin-bottom:8px;\"><span style=\"font-family:var(--font-body); font-size:12px; color:var(--on-bg-muted); text-transform:uppercase; letter-spacing:0.2em;\">ARTESANÍA DIGITAL</span></div><h1 style=\"font-family:var(--font-display); font-size:60px; font-weight:900; line-height:1.25; letter-spacing:-0.05em; text-transform:uppercase; color:var(--primary); -webkit-text-stroke:3px var(--border); text-stroke:3px var(--border); text-shadow:6px 6px 0 var(--on-bg); margin:8px 0;\">TU RÓTULO, TU VOZ</h1><p style=\"font-family:var(--font-body); font-size:16px; color:var(--on-bg); line-height:1.625; max-width:600px; margin:16px auto;\">Diseña tu letrero con esmalte sintético y sombra pesada. Sin degradados, sin perfección.</p><div style=\"display:flex; gap:16px; justify-content:center; margin-top:24px; flex-wrap:wrap;\"><button style=\"background:#DC143C; color:#FFF; border:3px solid #3E2723; padding:8px 16px; font-family:var(--font-display); font-size:18px; text-transform:uppercase; box-shadow:4px 4px 0 #3E2723; cursor:pointer;\">CREAR RÓTULO</button><button style=\"background:transparent; color:#DC143C; border:3px solid #DC143C; padding:8px 16px; font-family:var(--font-body); font-size:16px; text-transform:uppercase; cursor:pointer;\">EXPLORAR GALERÍA</button></div><div style=\"position:absolute; bottom:8px; right:8px; width:24px; height:24px; background:var(--primary); clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); border:1px solid var(--border);\"></div><div style=\"position:absolute; bottom:8px; left:8px; background:var(--bg); border:2px solid var(--border); padding:4px 8px; transform:rotate(-10deg); font-family:var(--font-body); font-size:12px; color:var(--on-bg-muted);\">2025</div>'; el.appendChild(container); }",
    "showcaseRender": "function(el) { el.style.cssText = 'padding:24px; display:flex; flex-wrap:wrap; gap:16px; justify-content:center; background:var(--bg);'; var features = [{\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">📐 CASQUILLO GRUESO</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Contorno sólido de 4px en marrón oscuro que enmarca cada letra con peso de brocha.</div></div>\"},{\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🖌️ SOMBRA DURA</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Sombra paralela sin desenfoque, offset 5px abajo y derecha, para el efecto de letrero pintado.</div></div>\"},{\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">🎨 MÚLTIPLES TIPOGRAFÍAS</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Mezcla letra tuscana gruesa, script de brocha y sans condensada en una misma composición.</div></div>\"},{\"cardHtml\":\"<div style=\\\"min-height:160px;padding:24px;border:1px solid var(--border);background:var(--surface);color:var(--on-bg);font-family:var(--font-body);display:flex;flex-direction:column;justify-content:space-between;gap:16px;\\\"><div style=\\\"font-family:var(--font-display);font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--primary);\\\">⭐ MOTIVOS DECORATIVOS</div><div style=\\\"font-size:12px;line-height:1.55;color:var(--on-bg-muted);\\\">Estrella, chile, flor o sol como badge de esquina con relleno amarillo y contorno negro.</div></div>\"}]; for(var i=0;i<features.length;i++){ var card = document.createElement('div'); card.style.cssText = 'flex:1 1 220px; max-width:280px;'; card.innerHTML = features[i].cardHtml; el.appendChild(card); } }",
    "panelCRender": "function(el) { el.style.cssText = 'padding:16px; background:var(--surface); border:4px double var(--border); box-shadow:4px 4px 0 var(--on-bg);'; el.innerHTML = '<div style=\"display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;\"><h3 style=\"font-family:var(--font-display); font-size:18px; color:var(--primary); text-transform:uppercase; margin:0;\">MATERIALES</h3><div style=\"width:20px;height:20px;background:var(--primary); clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);\"></div></div><div><div style=\"display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed var(--border); font-family:var(--font-body); font-size:14px;\"><span>ESMALTE ROJO</span><span style=\"color:var(--success);\">24 LT</span></div><div style=\"display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed var(--border); font-family:var(--font-body); font-size:14px;\"><span>ESMALTE AMARILLO</span><span style=\"color:var(--warning);\">12 LT</span></div><div style=\"display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed var(--border); font-family:var(--font-body); font-size:14px;\"><span>ESMALTE AZUL</span><span style=\"color:var(--error);\">8 LT</span></div><div style=\"display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px dashed var(--border); font-family:var(--font-body); font-size:14px;\"><span>BARNIZ MATE</span><span style=\"color:var(--success);\">5 LT</span></div></div>'; }",
    "heroBackground": "function(el) { el.style.background = 'var(--surface)'; }",
    "ctaBackground": "function(el) { el.style.background = 'var(--primary)'; var stripe = document.createElement('div'); stripe.style.cssText = 'position:absolute;inset:0;background:repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.08) 10px, rgba(0,0,0,0.08) 20px); pointer-events:none;'; el.appendChild(stripe); }",
    "sectionSeparator": "function() { var d = document.createElement('div'); d.style.cssText = 'height:12px; margin:16px 0; border-top:4px double var(--border); border-bottom:2px dashed var(--primary); background:transparent;'; return d; }",
    "dashboardShellBackground": "function(el) { el.style.background = 'var(--bg)'; el.style.backgroundImage = 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)'; }",
    "surfaceOverlay": "function(el) { var ov = document.createElement('div'); ov.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:2;mix-blend-mode:multiply;opacity:0.15;filter:url(#rotulo-grain); background:transparent;'; el.appendChild(ov); }"
  },
  "shadcnTokens": {
    "--color-background": "#F5F0E1",
    "--color-popover": "#F5F0E1",
    "--color-foreground": "#3E2723",
    "--color-card-foreground": "#3E2723",
    "--color-popover-foreground": "#3E2723",
    "--color-card": "#F5F0E1",
    "--color-muted": "#F5F0E1",
    "--color-muted-foreground": "#8D6E63",
    "--color-primary": "#DC143C",
    "--color-ring": "#DC143C",
    "--color-primary-foreground": "#FFFFFF",
    "--color-secondary": "#0047AB",
    "--color-accent": "#0047AB",
    "--color-secondary-foreground": "#FFFFFF",
    "--color-accent-foreground": "#FFFFFF",
    "--color-border": "#4A3728",
    "--color-input": "#4A3728",
    "--color-destructive": "#B71C1C"
  },
  "shadcnTokensClassic": {
    "--background": "#F5F0E1",
    "--popover": "#F5F0E1",
    "--foreground": "#3E2723",
    "--card-foreground": "#3E2723",
    "--popover-foreground": "#3E2723",
    "--card": "#F5F0E1",
    "--muted": "#F5F0E1",
    "--muted-foreground": "#8D6E63",
    "--primary": "#DC143C",
    "--ring": "#DC143C",
    "--primary-foreground": "#FFFFFF",
    "--secondary": "#0047AB",
    "--accent": "#0047AB",
    "--secondary-foreground": "#FFFFFF",
    "--accent-foreground": "#FFFFFF",
    "--border": "#4A3728",
    "--input": "#4A3728",
    "--destructive": "#B71C1C"
  }
});
