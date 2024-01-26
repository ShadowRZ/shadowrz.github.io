// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['github:ShadowRZ/bitfield-scaffold'],
  app: {
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#9D174D"
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon-16-16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          rel: 'icon',
          href: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ]
    },
  },
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false // XXX
    }
  }
})
