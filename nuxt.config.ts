import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
     baseURL: process.env.NODE_ENV === 'production' ? '/migrate-to-spain/' : '/',
     buildAssetsDir: '_nuxt/'
  },
  nitro: {
    preset: process.env.NODE_ENV === 'production' ? 'github_pages' : 'node-server'
  },
  ssr: process.env.NODE_ENV !== 'production',
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
        files: ['en.json', 'en/the-dream-of-spain.json', 'en/first-research-feasibility.json', 'en/learning-spanish.json', 'en/apartment-search.json', 'en/discovering-spain.json', 'en/region-decision.json', 'en/bureaucracy.json', 'en/property-purchase.json', 'en/gestoria.json', 'en/insurance.json', 'en/first-apartment-stay.json', 'en/final-migration.json', 'en/privacy.json']
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        files: ['de.json', 'de/the-dream-of-spain.json', 'de/first-research-feasibility.json', 'de/learning-spanish.json', 'de/apartment-search.json', 'de/discovering-spain.json', 'de/region-decision.json', 'de/bureaucracy.json', 'de/property-purchase.json', 'de/gestoria.json', 'de/insurance.json', 'de/first-apartment-stay.json', 'de/final-migration.json', 'de/privacy.json']
      },
      {
        code: 'es',
        iso: 'es-ES',
        name: 'Español',
        files: ['es.json', 'es/the-dream-of-spain.json', 'es/first-research-feasibility.json', 'es/learning-spanish.json', 'es/apartment-search.json', 'es/discovering-spain.json', 'es/region-decision.json', 'es/bureaucracy.json', 'es/property-purchase.json', 'es/gestoria.json', 'es/insurance.json', 'es/first-apartment-stay.json', 'es/final-migration.json', 'es/privacy.json']
      }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'no prefix'
    }
  }
})