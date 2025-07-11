// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  vite: {
    server: {
      allowedHosts: ['afkhub.ru']
    }
  }
})