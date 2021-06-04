var apiUrl = 'https://api.phamyen.com/';
module.exports = {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Econs',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&display=swap",
            },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css", integrity: "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==", crossorigin: "anonymous" }
        ]
    },
    env: {
        API: process.env.NODE_ENV === "dev" ?
            apiUrl : apiUrl
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~plugins/v-calendar.js', ssr: false },
        { src: '~/plugins/base-services.js' },
        { src: '~/plugins/notifications.js', ssr: false }
    ],

    router: {

    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'token',
                    maxAge: 60 * 60 * 24,
                    type: 'Token'
                },
                user: {
                    property: 'user',
                },
                endpoints: {
                    login: { url: apiUrl + '/auth/login', method: 'post' },
                    logout: { url: apiUrl + '/auth/logout', method: 'post' },
                    user: { url: apiUrl + '/auth/user', method: 'get' }
                }
            },
        },
        redirect: {
            login: '/',
            logout: '/',
            callback: '/',
            home: '/'
        }
    },
    moment: {
        defaultLocale: 'vi',
        locales: ['vi']
    },

    server: {
        port: 8000
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    loading: '~/components/Loading.vue',

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/auth-next',
        "bootstrap-vue/nuxt",
        '@nuxtjs/axios',
        '@nuxtjs/moment',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            compact: true,
        }
    }
}