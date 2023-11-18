/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: Xu Song
 * @Date: 2023-11-10 22:17:35
 * @LastEditors: Xu Song
 * @LastEditTime: 2021-03-16 00:05:46
 */
module.exports = {
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}