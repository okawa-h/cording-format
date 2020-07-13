'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPluginCombiner = require('html-webpack-plugin-combiner');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const path = require('path');

const PATH_SRC = './src';
const PATH_DEST = 'public';
const DEV_HOST = process.env.HOST || '0.0.0.0';
const DEV_PORT = process.env.PORT || 3000;

const htmlList = new HtmlWebpackPluginCombiner('src/pug/page/').htmlList;

module.exports = {
  entry: {
    'files/js/script': path.resolve(__dirname, `${PATH_SRC}/js/index.js`),
    '/files/css/style.css': path.resolve(__dirname, `${PATH_SRC}/stylus/page/style.styl`),
    '/sub/files/css/style.css': path.resolve(__dirname, `${PATH_SRC}/stylus/page/sub/style.styl`)
  },
  output: {
    path: path.resolve(__dirname, PATH_DEST)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              root: path.resolve(`${PATH_SRC}/pug/`),
              pretty: true,
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [ require('autoprefixer')() ]
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    host: DEV_HOST,
    port: DEV_PORT,
    contentBase: PATH_DEST,
    open: true
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '*'],
    alias: {
      '@': path.join(__dirname, PATH_SRC, 'js'),
    }
  },
  plugins: [
    ...htmlList,
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]'
    })
  ]
};
