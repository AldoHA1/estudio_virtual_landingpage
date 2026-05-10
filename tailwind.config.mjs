/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === Brand palette ===
        "primary": "#492E65",
        "primary-light": "#6B4A8F",
        "primary-bright": "#9A6FCB",
        "secondary": "#6E296C",
        "secondary-light": "#8F3A8C",
        "secondary-bright": "#B05CAE",
        "tertiary": "#D47D18",
        "tertiary-light": "#E89538",
        "tertiary-bright": "#F0A04B",
        "neutral": "#E9BE81",
        "neutral-light": "#F2D3A8",
        "neutral-bright": "#F7E3C4",

        // === On-* foregrounds ===
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "on-neutral": "#2E1D42",

        // === Surfaces (warm off-white driven by neutral family) ===
        "background": "#FAF6F0",
        "surface": "#FAF6F0",
        "surface-bright": "#FFFFFF",
        "surface-dim": "#EDE0CC",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F7F1E8",
        "surface-container": "#F2E8D8",
        "surface-container-high": "#EDE0CC",
        "surface-container-highest": "#E8D8BF",
        "surface-variant": "#F2E8D8",
        "surface-tint": "#492E65",

        "on-surface": "#2E1D42",
        "on-surface-variant": "#5A4A6B",
        "on-background": "#2E1D42",
        "outline": "#8A7A9C",
        "outline-variant": "#C9BFD2",

        // === Containers ===
        "primary-container": "#EADFF5",
        "on-primary-container": "#2E1D42",
        "primary-fixed": "#EADFF5",
        "primary-fixed-dim": "#C9A8E8",
        "on-primary-fixed": "#2E1D42",
        "on-primary-fixed-variant": "#492E65",

        "secondary-container": "#F5DDF3",
        "on-secondary-container": "#2E1D42",
        "secondary-fixed": "#F5DDF3",
        "secondary-fixed-dim": "#E0B5DD",
        "on-secondary-fixed": "#2E1D42",
        "on-secondary-fixed-variant": "#6E296C",

        "tertiary-container": "#FBE3C5",
        "on-tertiary-container": "#4A2A05",
        "tertiary-fixed": "#FBE3C5",
        "tertiary-fixed-dim": "#F0A04B",
        "on-tertiary-fixed": "#4A2A05",
        "on-tertiary-fixed-variant": "#D47D18",

        // === Status ===
        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A",

        // === Inverse ===
        "inverse-surface": "#2E1D42",
        "inverse-on-surface": "#F7F1E8",
        "inverse-primary": "#C9A8E8",

        // === Legacy aliases — remapped to palette so existing classes still resolve ===
        "pink": "#6E296C",
        "amber": "#D47D18",
        "coral": "#E89538",
        "cyan": "#E9BE81",
        "lime": "#D47D18",
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
