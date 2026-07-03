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
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark-dimmed",

          langs: [],
        },
      },
    },
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    storage: "localStorage",
    storageKey: "theme",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
  ],
  compatibilityDate: "2026-07-03",
});
