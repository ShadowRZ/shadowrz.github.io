// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import expressiveCode from "astro-expressive-code";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Change this to your deployed site URL
  site: "https://shadowrz.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    format: "file",
  },
  trailingSlash: "never",

  integrations: [
    expressiveCode({
      themeCssSelector: (theme) => `.${theme.type}`,
      themes: ["catppuccin-mocha", "catppuccin-latte"],
    }),
    mdx(),
    icon(),
    sitemap(),
  ],

  env: {
    schema: {
      UMAMI_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      UMAMI_WEBSITE_ID: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      PUBLIC_ARTALK_SERVER: envField.string({
        context: "server",
        access: "public",
        optional: true,
      }),
      PUBLIC_ARTALK_ENABLED: envField.boolean({
        context: "server",
        access: "public",
        optional: true,
      }),
    },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Outfit",
      cssVariable: "--font-display",
      weights: ["300 700"],
    },
  ],
});
