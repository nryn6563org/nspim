export default {
  ssr: false,
  head: {
    title: '뉴스핌',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=400px' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
      }
    ],
    script: [
      {
        src: 'https://fastly.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        autoprefixer: {} // 기본 설정 사용
      }
    }
  }
}
