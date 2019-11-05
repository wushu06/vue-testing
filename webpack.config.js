// webpack.config.js
const nodeExternals = require('webpack-node-externals')

module.exports = {
    // ...
    externals: [nodeExternals()]
}