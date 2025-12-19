export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css'],

  fonts: {
    provider: 'fontsource'
  },

  mcp: {
    enabled: false,
  },
})
