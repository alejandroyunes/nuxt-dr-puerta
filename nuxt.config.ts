import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
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
    htmlAttrs: { lang: 'es' },
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
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
    xxxl: 2000,
  },
},
i18n: {
  //lazy: true, // true might be not fully supported
  // baseUrl: process.env.BASE_URL || "https://something",
  langDir: "locales/",
  defaultLocale: "es",
  detectBrowserLanguage: false,
  strategy: "no_prefix",
  lazy: false,
  baseUrl: "/",
  locales: [
    {
      iso: "es-CO",
      code: "es",
      file: "es.json",
    },
    {
      iso: "en-US",
      code: "en",
      file: "en.json",
    }
  ],
},
gtm: {
  id: 'GTM-WB3N45XT',
  queryParams: {
    // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
    gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
    gtm_preview: 'env-4',
    gtm_cookies_win: 'x',
  },
  defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
  // nonce: '2726c7f26c', // Will add `nonce` to the script tag
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
  ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
  devtools: true, // (optional)
},
  compatibilityDate: "2024-07-11",
})