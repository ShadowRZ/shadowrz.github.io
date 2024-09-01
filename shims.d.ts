import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface HTMLAttributes extends AttributifyAttributes {}
}
