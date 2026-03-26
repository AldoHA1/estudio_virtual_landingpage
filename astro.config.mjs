// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://aldoha1.github.io' : 'http://localhost:4321',
  base: isProd ? '/estudio_virtual_landingpage' : '/',
  integrations: [tailwind()],
});
