var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://eshang.imwork.net:6060/HighWay/Handler/handler_ajax.ashx"',
  remote: {
    url: '"http://eshang.imwork.net:6060/HighWay/Handler/handler_ajax.ashx"'
  }
})
