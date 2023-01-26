import { defineConfig } from 'astro/config';

// integrations
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/ja/reference/configuration-reference/
  site: 'https://dairoku-studio.com',
  integrations: [sitemap(), image()],
});
