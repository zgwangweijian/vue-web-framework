const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractApp = new ExtractTextPlugin('static/css/[name].[contenthash].css')
const extractCommon = new ExtractTextPlugin('static/css/common.[contenthash].css')
module.exports = { extractApp, extractCommon }
