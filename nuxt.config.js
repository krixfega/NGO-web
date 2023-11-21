export default {

  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Azino - Nuxt.js Nonprofit Charity Template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicons/favicon-32x32.png'},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
      },
      {rel: "stylesheet", href: "/assets/css/animate.min.css"},
      {rel: "stylesheet", href: "/assets/css/bootstrap.min.css"},
      {rel: "stylesheet", href: "/assets/css/bootstrap-select.min.css"},
      {rel: "stylesheet", href: "/assets/css/fontawesome-all.min.css"},
      {rel: "stylesheet", href: "/assets/css/azino-icons.css"},
      {rel: "stylesheet", href: "/assets/plugins/glightbox/glightbox.min.css"},
      {rel: "stylesheet", href: "/assets/css/main.css"},
    ],

    script: [
      {src: "/assets/plugins/glightbox/glightbox.min.js", body: true},
      {src: "/assets/plugins/accordion/accordion.min.js", body: true},
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#ed4b4b', height: '4px'},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: 'plugins/typed.js', ssr: true},
    {src: 'plugins/owl.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
