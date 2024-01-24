import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class'
    }),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: ['Jost Variable'],
        mono: ['Jetbrains Mono', 'JetBrains Mono Variable'],
      },
    })
  ],
  rules: [
    ['bg-underline', { 'background-size': '200% 4px'}],
    ['bg-underline-large', { 'background-size': '200% 8px'}],
    ['bg-underline-start', { 'background-position': '100% 100%'}],
    ['bg-underline-end', { 'background-position': '0% 100%'}]
  ]
})
