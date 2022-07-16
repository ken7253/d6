import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    dataValue: 'theme',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration/
    highlight: {
      theme: 'github-dark-dimmed',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      meta: [
        { name: 'color-scheme', content: 'light dark' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: '/css/main.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1&display=swap'}
      ],
    }
  }
})
