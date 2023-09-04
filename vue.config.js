const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8200,
  },
  outputDir: 'docs',
  assetsDir:'./',
  publicPath: './',
  chainWebpack: config => {
    config.module
    .rule('yaml')
      .test(/\.ya?ml?$/)
      .use('js-yaml-loader')  // npm install js-yaml-loader import
        .loader('js-yaml-loader')
  }
  

})
