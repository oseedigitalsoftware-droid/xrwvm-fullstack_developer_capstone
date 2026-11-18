const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/djangoapp',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8025',
      changeOrigin: true,
    })
  );
};
