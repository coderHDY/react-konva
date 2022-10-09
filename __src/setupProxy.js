const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // app.use(
  //   proxy.createProxyMiddleware('/api1', {
  //     target: 'https://query.asilu.com/today/list',
  //     changeOrigin: true,
  //     pathRewrite: {'^/api1': ''}
  //   })
  // )
}