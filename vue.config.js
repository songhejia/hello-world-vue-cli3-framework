/** vue.config.js */
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: require('./vue.mfc').getPages,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('pages'))
    config.output.set('publicPath', '/')
  }
}