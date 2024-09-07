// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css','@ionic/core/css/core.css', '@ionic/core/css/normalize.css', '@ionic/core/css/structure.css', '@ionic/core/css/typography.css', '@ionic/core/css/ionic.bundle.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/ionic'],
  runtimeConfig: {
    public: {
      apiEndpoint: process.env.API_ENDPOINT || 'http://127.0.0.1:8000/api/'
    }
  },
  plugins: [
    '~/plugins/api.js'
  ],
  ssr: false
})