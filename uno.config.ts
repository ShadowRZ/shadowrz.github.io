import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class'
    }),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'blockquote': {
          'border-left': '4px',
          'border-style': 'dashed'
        },
        ':not(pre) > code::before,:not(pre) > code::after': {
          content: 'none'
        },
      }
    }),
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
    ['bg-underline-large', { 'background-size': '200% 16px'}],
    ['bg-underline-start', { 'background-position': '100% 100%'}],
    ['bg-underline-end', { 'background-position': '0% 100%'}]
  ],
  transformers: [
    transformerDirectives(),
  ],
})
