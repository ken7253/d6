// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    devServer: {
      watch: ['components/**/*', 'layouts/**/*', 'content/**/*'],
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/color-mode'],
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
      htmlAttrs: { lang: 'ja', prefix: 'og: https://ogp.me/ns#' },
      meta: [
        { name: 'color-scheme', content: 'light dark' },
        { name: 'theme-color', content: '#1f214e' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        { rel: 'stylesheet', href: '/css/main.css' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1&display=swap',
        },
        {
          rel: 'icon',
          sizes: '48x48',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/site-icon.jpg',
        },
      ],
    },
  },
  typescript: {
    strict: true,
  },
});
