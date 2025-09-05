import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url)),
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  css: ['~/app/assets/css/main.css', 'flag-icons/css/flag-icons.min.css'],
  
  // Enable auto-imports for components
  components: {
    dirs: ['~/app/components']
  },
  
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        files: ['en.json', 'en/apartment-search.json', 'en/discovering-spain.json', 'en/region-decision.json', 'en/bureaucracy.json']
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        files: ['de.json', 'de/apartment-search.json', 'de/discovering-spain.json', 'de/region-decision.json', 'de/bureaucracy.json']
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        files: ['es.json', 'es/apartment-search.json', 'es/discovering-spain.json', 'es/region-decision.json', 'es/bureaucracy.json']
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})