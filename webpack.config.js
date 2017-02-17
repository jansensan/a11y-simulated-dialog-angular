const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: {
    contentBase: path.resolve(__dirname, './www')
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'doesnotexist/')
    )
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015']
        }
      },
      // html
      {
        test: /\.html$/,
        loaders: ['html-loader']
      },
      // styles
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: '[name].min.js',
  }
};
