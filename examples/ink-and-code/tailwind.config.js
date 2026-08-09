// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#e8e6e1",
        "secondary": "#a8a29e",
        "tertiary": "#9a3412",
        "surface": "#0c0a09",
        "surface-dim": "#080705",
        "surface-bright": "#1c1917",
        "surface-container-lowest": "#050403",
        "surface-container-low": "#111010",
        "surface-container": "#1c1917",
        "surface-container-high": "#292524",
        "surface-container-highest": "#3a3633",
        "on-surface": "#e8e6e1",
        "on-surface-variant": "#a8a29e",
        "outline": "#57534e",
        "outline-variant": "#292524",
        "background": "#0c0a09",
        "on-background": "#e8e6e1",
        "primary-container": "#1c1917",
        "on-primary-container": "#e8e6e1",
        "tertiary-container": "#431407",
        "on-tertiary-container": "#fdba74",
        "error": "#f87171",
        "on-error": "#450a0a",
        "error-container": "#7f1d1d",
        "on-error-container": "#fecaca",
      },
      fontFamily: {
        "display-lg": "['Geist']",
        "headline-lg": "['Geist']",
        "headline-md": "['Geist']",
        "body-lg": "['Geist']",
        "body-md": "['Geist']",
        "label-mono": "['Geist Mono']",
        "label-sm": "['Geist Mono']",
      },
      fontSize: {
        "display-lg": "['72px', {'lineHeight': '80px', 'letterSpacing': '-0.03em', 'fontWeight': '700'}]",
        "headline-lg": "['36px', {'lineHeight': '44px', 'letterSpacing': '-0.02em', 'fontWeight': '600'}]",
        "headline-md": "['24px', {'lineHeight': '32px', 'letterSpacing': '-0.01em', 'fontWeight': '500'}]",
        "body-lg": "['18px', {'lineHeight': '28px', 'fontWeight': '400'}]",
        "body-md": "['16px', {'lineHeight': '26px', 'fontWeight': '400'}]",
        "label-mono": "['13px', {'lineHeight': '20px', 'letterSpacing': '0.02em', 'fontWeight': '400'}]",
        "label-sm": "['11px', {'lineHeight': '16px', 'letterSpacing': '0.08em', 'fontWeight': '500'}]",
      },
      borderRadius: {
        "sm": "2px",
        "md": "4px",
        "lg": "6px",
        "xl": "8px",
        "full": "9999px",
      },
      spacing: {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "40px",
        "section": "80px",
        "max-width": "1200px",
      },
    },
  },
};