import { presetWind4, presetTypography, defineConfig } from "unocss";
import presetCatppuccin from "@catppuccin/unocss";

export default defineConfig({
  presets: [
    presetWind4({
      dark: "media",
    }),
    presetCatppuccin(),
    presetTypography({
      colorScheme: {
        body: ["inherit", "inherit"],
        headings: ["inherit", "inherit"],
        links: ["inherit", "inherit"],
      },
      cssExtend: {
        a: {
          "font-weight": "inherit",
        },
      },
    }),
  ],

  theme: {
    font: {
      sans: [
        "var(--astro-font-sans)",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ].join(","),
      mono: [
        "var(--astro-font-mono)",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ].join(","),
    },
  },
});
