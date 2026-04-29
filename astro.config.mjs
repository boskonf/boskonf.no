import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://boskonf.no",
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: "no",
    locales: ["no", "en"],
  }
});