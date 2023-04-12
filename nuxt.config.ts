// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/index.scss'],
  runtimeConfig: {
    public: { API_URL: process.env.API_URL },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/assets/icons',
    output: '~/assets/generated/icons',
  },
})
