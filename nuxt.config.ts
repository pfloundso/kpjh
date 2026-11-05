import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/apollo',
        '@nuxt/image-edge',
        'vue3-carousel-nuxt',
        '@nuxtjs/critters',
    ],
    components: [
        {
            path: '~/components', // will get any components nested in let's say /components/test too
            pathPrefix: false,
        },
    ],
    apollo: {
        authType: 'Bearer',
        authHeader: 'Authorization',
        tokenStorage: 'cookie',
        clients: {
            default: {
                httpEndpoint:
                    'https://graphql.contentful.com/content/v1/spaces/r7d67u2dckd4/',
                tokenName: 'contentful-token',
                connectToDevTools: true,
            },
        },
    },
    image: {
        domains: ['images.ctfassets.net'],
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        contentfulToken: '',
        contentfulApi: '',
        googleApplicationCredentials: '',
        jwtSecret: '',
        userPw: '',
        groupleaderPw: '',
        public: {
            cartoApiKey: ''
        },
    },
    css: ['@/assets/scss/styles.scss', 'leaflet/dist/leaflet.css'],
    // devServer: {
    //   https: {
    //     key: 'localhost-key.pem',
    //     cert: 'localhost.pem'
    //   }
    // },
    app: {
        head: {
            viewport: 'width=device-width, initial-scale=1',
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
                    body: true,
                },
            ],
        },
    },
})
