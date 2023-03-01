// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        //head
        head: {
            charset: 'UTF-8',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'My App',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        },
        //project pages & layout transitions
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    //runtime config
    runtimeConfig: {
        // API
        public: {
            API_URL: process.env.API_URL
        }
    },
    //main scss
    css: ["@/assets/scss/main.scss"],
    //vite
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variables.scss" as *;'
                }
            }
        }
    },
    modules: [
        'nuxt-icon',
        '@nuxt/image-edge',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
    ],
    //nuxt image
    image: {
        //external images
        domains: [
          'images.pexels.com'
        ],
        //aliases
        alias: {
            pexels: 'https://images.pexels.com'
        },
        //image sizes
        presets: {
            cover: {
                modifiers: {
                  fit: "cover",
                  format: "jpg",
                  width: 300,
                  height: 300,
                },
            },
        },
        //responsive screens for nuxt images
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
    },
    //color mode
    colorMode: {    
        preference: 'system', // default value of $colorMode.preference    
        fallback: 'light', // fallback value if not system preference found    
        classSuffix: '-mode',
    },
    //pinia config
    pinia: {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})
