import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],

  image: {
    // Astro built-in sharp-based optimization
    domains: [],
  },

  vite: {
    build: {
      // Inline small assets to reduce requests
      assetsInlineLimit: 4096,
    },
    preview: {
      allowedHosts: ['jiwondesignlee.up.railway.app', 'jiwondesignlee.com', 'www.jiwondesignlee.com'],
    },
  },
});

