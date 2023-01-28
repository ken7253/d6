import { defineConfig } from 'astro/config';

// integrations
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import react from '@astrojs/react';

// https://astro.build/config
import lit from '@astrojs/lit';

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/ja/reference/configuration-reference/
  site: 'https://dairoku-studio.com',
  integrations: [sitemap(), image(), react(), lit()],
  server: {
    host: true,
  },
  vite: {
    server: {
      hmr: true,
    },
  },
});
