export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  /*head: {
    title: 'Marcel Behrmann',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },*/

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  content: {

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [// https://go.nuxtjs.dev/content
  // https://go.nuxtjs.dev/tailwindcss
  '@nuxt/content', // "@nuxtjs/svg",
  '@nuxtjs/tailwindcss', "@nuxt/image", '@nuxt/fonts', '@nuxt/icon'],
  hooks: {
    async 'nitro:config'(cfg) {
      cfg.prerender?.routes?.push('/saufster/manual');
      cfg.prerender?.routes?.push('/saufster/more');
    }
  },
  compatibilityDate: '2024-11-25',
});
