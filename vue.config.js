const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  lintOnSave: true,
  devServer: {
    port: 8080,
    hot: true
  },
  runtimeCompiler: true
}
