// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/index.scss'],
  modules: [
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg-sprite',
  ],
  apollo: {
    clients: {
      default: {
        tokenName: 'jwt',
        httpEndpoint: process.env.GRAPHQL_URL || 'http://localhost/graphql',
      },
    },
  },
  svgSprite: {
    input: '~/assets/icons',
    output: '~/assets/generated/icons',
  },
})
