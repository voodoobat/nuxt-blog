// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/index.scss'],
  modules: [
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL || 'http:0.0.0.0/graphql',
      },
    },
  },
})
