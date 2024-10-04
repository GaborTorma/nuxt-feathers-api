export default defineNuxtConfig({
  compatibilityDate: '2024-09-14',

  extends: ['@gabortorma/nuxt-eslint-layer'],

  modules: [
    '../src/module',
  ],

  mwmNuxtModuleTemplate: {},

  watch: [
    '../src/module.ts',
  ],

  devtools: { enabled: true },
})
