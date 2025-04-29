const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

const htmlWebpackPluginPages = require('./webpack.pages')
const htmlWebpackPartials = require('./webpack.partials')

module.exports = {
  entry: {
    index: './src/index.js',
    theory: './src/javascripts/theory.js',
    dices: './src/javascripts/dices.js',
    swiper: './src/javascripts/swiper.js',
    dictionary: './src/dictionary/dictionary.js',
    jsBasic: './src/js-basic/js-basic.js',
    tests: './src/tests/test1.js',
    functions: './src/javascripts/functions.js',
    filterTags: './src/javascripts/filterTags.js',
    searchVanilla: './src/javascripts/search-vanilla.js',
    reactBasics: './src/javascripts/react-basics.jsx',
    articleContent: './src/javascripts/articleContent.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    ...htmlWebpackPluginPages,
    ...htmlWebpackPartials,

    new CopyPlugin({
      patterns: [
        {
          from: 'src/3d',
          to: '3d'
        }
      ]
    })
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
