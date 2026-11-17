// @ts-check
import { defineConfig } from 'astro/config';

// Preview is served from GitHub Pages at https://engineering-zmorod.github.io/website/
// When the site moves to its own domain, change `site` and remove `base`.
export default defineConfig({
  site: 'https://engineering-zmorod.github.io',
  base: '/website',
});
