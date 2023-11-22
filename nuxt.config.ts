// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
        transpile: ['vuetify'],
    },
    modules: ['@pinia/nuxt'],
})
