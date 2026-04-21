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
        "surface": "#f9f9ff",
        "surface-dim": "#d3daea",
        "surface-bright": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eefe",
        "surface-container-high": "#e2e8f8",
        "surface-container-highest": "#dce2f3",
        "on-surface": "#151c27",
        "on-surface-variant": "#534434",
        "inverse-surface": "#2a313d",
        "inverse-on-surface": "#ebf1ff",
        "outline": "#867461",
        "outline-variant": "#d8c3ad",
        "surface-tint": "#855300",
        "primary": "#855300",
        "on-primary": "#ffffff",
        "primary-container": "#f59e0b",
        "on-primary-container": "#613b00",
        "inverse-primary": "#ffb95f",
        "secondary": "#0058be",
        "on-secondary": "#ffffff",
        "secondary-container": "#2170e4",
        "on-secondary-container": "#fefcff",
        "tertiary": "#00658b",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#1abdff",
        "on-tertiary-container": "#004966",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#ffddb8",
        "primary-fixed-dim": "#ffb95f",
        "on-primary-fixed": "#2a1700",
        "on-primary-fixed-variant": "#653e00",
        "secondary-fixed": "#d8e2ff",
        "secondary-fixed-dim": "#adc6ff",
        "on-secondary-fixed": "#001a42",
        "on-secondary-fixed-variant": "#004395",
        "tertiary-fixed": "#c5e7ff",
        "tertiary-fixed-dim": "#7fd0ff",
        "on-tertiary-fixed": "#001e2d",
        "on-tertiary-fixed-variant": "#004c6a",
        "background": "#f9f9ff",
        "on-background": "#151c27",
        "surface-variant": "#dce2f3",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "title-lg": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "label-sm": ["Plus Jakarta Sans"],
      },
      fontSize: {
        "display": [
          "44px",
          {
            lineHeight: "52px",
            letterSpacing: "-0.02em",
            fontWeight: "800",
          },
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "headline-md": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "700",
          },
        ],
        "title-lg": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
      },
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px",
      },
      spacing: {
        "base": "8px",
        "xs": "4px",
        "sm": "12px",
        "md": "24px",
        "lg": "40px",
        "xl": "64px",
        "gutter": "16px",
        "margin": "24px",
      },
    },
  },
};
