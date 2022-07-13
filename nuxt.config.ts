import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration/
  },
  app: {
    head: {
      meta: [
        { name: 'color-scheme', content: 'light dark' },
      ],
      link: [
        { rel: 'stylesheet', href: '/assets/css/main.css' },
      ],
    }
  }
})
