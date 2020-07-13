module.exports = {
  pwa: {
    name: 'Pastel de Idéias',
    themeColor: '#E43636',
    msTileColor: '#E43636',
    manifestOptions: {
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png?v=OmKl3nqObJ',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png?v=OmKl3nqObJ',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
