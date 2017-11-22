const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

// Extract CSS into a separate file
const extractSass = new ExtractTextPlugin({
  filename: "main.css",
});

// Minify JavaScript
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin();

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../site/static/'),
  },
  module: {
    rules: [
      // Process Sass files
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true,
            }
          }, {
            loader: "postcss-loader",
          }, {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      },

      // Transpile JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // JavaScript linter
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },

      // Process images
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractSass,
    UglifyJsPlugin,
  ]
}
