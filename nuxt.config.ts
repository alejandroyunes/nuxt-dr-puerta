import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.scss"],
  site: {
    url: 'https://drpuerta.com',
    name: 'Dr. Puerta',
  },
  modules: [    
  '@formkit/nuxt',
  '@pinia/nuxt',
  '@nuxtjs/seo',
  '@nuxt/image',
  '@nuxtjs/i18n',
  '@zadigetvoltaire/nuxt-gtm'
],
app: {
  head: {
    title: 'Dr. Puerta Otorrinolaringología',
    titleTemplate: '%s',
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  },
  rootAttrs: {
    id: 'dr-puerta',
  },
},
image: {
  format: ['webp', 'png'],
  screens: {
    xs: 320,
    md: 1024,
    xl: 1280,
  },
},
i18n: {
  //lazy: true, // true might be not fully supported
  // baseUrl: process.env.BASE_URL || "https://something",
  langDir: "locales/",
  defaultLocale: "es",
  detectBrowserLanguage: false,
  strategy: "prefix_except_default",
  lazy: false,
  baseUrl: "https://drpuerta.com",
  locales: [
    {
      language: "es-CO",
      code: "es",
      file: "es.json",
    },
    {
      language: "en-US",
      code: "en",
      file: "en.json",
    }
  ],
},
gtm: {
  id: 'GTM-WB3N45XT',
  defer: false,
  compatibility: false,
  enabled: true,
  debug: false,
  loadScript: true,
  enableRouterSync: true,
  ignoredViews: ['homepage'],
  trackOnNextTick: false,
  devtools: false,
},
  compatibilityDate: "2024-07-11",
})