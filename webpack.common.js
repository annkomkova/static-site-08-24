const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

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
    searchVanilla: './src/javascripts/search-vanilla.js'
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
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'dices']
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index', 'swiper', 'filterTags']
    }),
    new HtmlWebpackPlugin({
      template: './src/boardgames.html',
      filename: './boardgames.html',
      chunks: ['index']
    }),

    // Публикации в разделе "Статьи" (articles)
    new HtmlWebpackPlugin({
      template: './src/articles/about-games.html',
      filename: './articles/about-games.html',
      chunks: ['index']
    }),

    // Публикации в разделе "Игры" (boardgames)
    new HtmlWebpackPlugin({
      template: './src/boardgames/gloomhaven.html',
      filename: './boardgames/gloomhaven.html',
      chunks: ['index']
    }),

    // Pages
    new HtmlWebpackPlugin({
      template: './src/pages/theory.html',
      filename: './pages/theory.html',
      chunks: ['theory']
    }),

    // ADC Dictionary
    new HtmlWebpackPlugin({
      template: './src/dictionary/dictionary.html',
      filename: './dictionary/dictionary.html',
      chunks: ['dictionary']
    }),

    // Основы js
    new HtmlWebpackPlugin({
      template: './src/js-basic/js-basic.html',
      filename: './js-basic/js-basic.html',
      chunks: ['jsBasic']
    }),

    new HtmlWebpackPlugin({
      template: './src/functions.html',
      filename: './functions.html',
      chunks: ['index', 'functions']
    }),

    // Тесты
    new HtmlWebpackPlugin({
      template: './src/tests/test1.html',
      filename: './tests/test1.html',
      chunks: ['tests']
    }),

    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'searchVanilla']
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/3d'),
          to: path.resolve(__dirname, './dev_build/3d')
        },
        {
          from: path.resolve(__dirname, './src/3d'),
          to: path.resolve(__dirname, './docs/3d')
        }
      ]
    }),

    // Article
    // new HtmlWebpackPlugin({
    //   template: './src/articles/superorganisms/S_Popup.html',
    //   filename: './superorganisms/S_Popup.html'
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footerPartial',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
