// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import UnoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import Icons from "unplugin-icons/vite";
import expressiveCode from "satteri-expressive-code";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";

// https://astro.build/config
export default defineConfig({
  site: "https://shadowrz.github.io",
  build: {
    format: "file",
  },
  trailingSlash: "never",

  markdown: {
    processor: satteri({
      mdastPlugins: [
        expressiveCode({
          themeCssSelector: (theme) => `.${theme.type}`,
          themes: ["catppuccin-mocha", "catppuccin-latte"],
        }),
      ],
      features: { directive: true },
    }),
  },

  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [
      Icons({
        compiler: "astro",
        iconCustomizer(collection, icon, props) {
          props.width = "1em";
          props.height = "1em";
        },
      }),
    ],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fredoka",
      cssVariable: "--astro-font-sans",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Kode Mono",
      cssVariable: "--astro-font-mono",
      weights: [400],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
  ],

  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
