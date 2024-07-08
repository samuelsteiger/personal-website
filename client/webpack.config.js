const { EnvironmentPlugin } = require('webpack');

module.exports = {
  plugins: [
    new EnvironmentPlugin(['NODE_ENV'])
  ]
}