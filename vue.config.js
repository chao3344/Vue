const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('components', path.resolve(__dirname, './src/components'))
      .set('pages', path.resolve(__dirname, './src/pages'))
      .set('assets', path.resolve(__dirname, './src/assets'))
      .set('utils', path.resolve(__dirname, './src/utils'))
  },

  devServer:{
    proxy:{
      '/Service': {
        target:'https://m.mtime.cn',
        changeOrigin:true
      },
      '/ajax':{
        target:'https://m.maoyan.com',
        changeOrigin:true
      },
      '/article':{
        target:'https://content-api-m.mtime.cn',
        changeOrigin:true
      }
    }
  }
}

