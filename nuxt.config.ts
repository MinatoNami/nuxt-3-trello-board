// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  vite: {
    server: {
      cors: true, // Only for dev
    },
  },
  routeRules: {
    "/Home": {
      cors: true,
    },
  },
});
