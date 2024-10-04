import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'mwm-nuxt-module-template-plugin',
  // eslint-disable-next-line unused-imports/no-unused-vars
  setup: (nuxtApp) => {
    console.log('mwm-nuxt-module-template-plugin setup')
  },
  hooks: {
    'app:created'() {
      console.log('mwm-nuxt-module-template-plugin app:created')
    },
  },
})
