
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
  // generateSourceMaps: ({type}) => ({
  //   devtool: type,
  // })
};
