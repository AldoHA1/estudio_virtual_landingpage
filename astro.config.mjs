// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://aldoha1.github.io',
  base: '/estudio_virtual_landingpage',
  integrations: [tailwind()],
});
