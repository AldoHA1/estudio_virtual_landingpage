/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === Brand palette ===
        "primary": "#D96C81",
        "primary-light": "#E58BA0",
        "primary-bright": "#F092A5",
        "secondary": "#BF2A53",
        "secondary-light": "#D44B72",
        "secondary-bright": "#E25578",
        "tertiary": "#BFB84C",
        "tertiary-light": "#CFCA6B",
        "tertiary-bright": "#DCD572",
        "neutral": "#F5EBCF",
        "neutral-light": "#FAF2DF",
        "neutral-bright": "#FBF5E5",

        // === On-* foregrounds ===
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#3A3812",
        "on-neutral": "#4A1424",

        // === Surfaces (warm cream driven by neutral) ===
        "background": "#FDF8EC",
        "surface": "#FDF8EC",
        "surface-bright": "#FFFFFF",
        "surface-dim": "#F0E4C4",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#FAF2DF",
        "surface-container": "#F5EBCF",
        "surface-container-high": "#EFE2BF",
        "surface-container-highest": "#E9D9AF",
        "surface-variant": "#F5EBCF",
        "surface-tint": "#D96C81",

        "on-surface": "#2A1118",
        "on-surface-variant": "#6B3A48",
        "on-background": "#2A1118",
        "outline": "#9B6E7C",
        "outline-variant": "#D9B8C2",

        // === Containers ===
        "primary-container": "#FADCE3",
        "on-primary-container": "#4A1424",
        "primary-fixed": "#FADCE3",
        "primary-fixed-dim": "#F092A5",
        "on-primary-fixed": "#4A1424",
        "on-primary-fixed-variant": "#D96C81",

        "secondary-container": "#F7D3DE",
        "on-secondary-container": "#4A0A1E",
        "secondary-fixed": "#F7D3DE",
        "secondary-fixed-dim": "#E25578",
        "on-secondary-fixed": "#4A0A1E",
        "on-secondary-fixed-variant": "#BF2A53",

        "tertiary-container": "#EEEABF",
        "on-tertiary-container": "#3A3812",
        "tertiary-fixed": "#EEEABF",
        "tertiary-fixed-dim": "#DCD572",
        "on-tertiary-fixed": "#3A3812",
        "on-tertiary-fixed-variant": "#BFB84C",

        // === Status ===
        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",

        // === Inverse ===
        "inverse-surface": "#2A1118",
        "inverse-on-surface": "#FAF2DF",
        "inverse-primary": "#F092A5",

        // === Legacy aliases — remapped to palette so existing classes still resolve ===
        "pink": "#D96C81",
        "amber": "#BFB84C",
        "coral": "#E25578",
        "cyan": "#F5EBCF",
        "lime": "#BFB84C",
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
