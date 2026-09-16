// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Served from GitHub Pages at https://engineering-zmorod.github.io/website/
export default defineConfig({
  site: 'https://engineering-zmorod.github.io',
  base: '/website',
  vite: {
    plugins: [tailwindcss()],
  },
});
