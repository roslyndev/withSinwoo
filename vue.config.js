const { defineConfig } = require('@vue/cli-service')
const fs = require('fs')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0], {
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      });
      return definitions;
    });
  }
});

if (process.env.NODE_ENV === 'development') {
  module.exports.devServer = {
    webSocketServer: false,
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync('c:\\certs\\localhost-key.pem'),
        cert: fs.readFileSync('c:\\certs\\localhost.pem'),
      }
    },
  };
}
