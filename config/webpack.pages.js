const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlWebpackPluginPages = [
  createPages('./src/index.html', './index.html', ['index', 'dices']),
  createPages('./src/articles.html', './articles.html', [
    'index',
    'swiper',
    'filterTags'
  ]),
  createPages('./src/boardgames.html', './boardgames.html', ['index']),
  createPages(
    './src/articles/about-games.html',
    './articles/about-games.html',
    ['index', 'articleContent']
  ),
  createPages('./src/articles/eclipse.html', './articles/eclipse.html', [
    'index',
    'articleContent'
  ]),
  createPages('./src/articles/era-konana.html', './articles/era-konana.html', [
    'index',
    'articleContent'
  ]),
  createPages(
    './src/boardgames/gloomhaven.html',
    './boardgames/gloomhaven.html',
    ['index']
  ),
  createPages('./src/pages/theory.html', './pages/theory.html', ['theory']),
  createPages(
    './src/dictionary/dictionary.html',
    './dictionary/dictionary.html',
    ['dictionary']
  ),
  createPages('./src/js-basic/js-basic.html', './js-basic/js-basic.html', [
    'jsBasic'
  ]),
  createPages('./src/functions.html', './functions.html', [
    'index',
    'functions'
  ]),
  createPages('./src/tests/test1.html', './tests/test1.html', ['tests']),
  createPages('./src/search.html', './search.html', ['index', 'searchVanilla']),
  createPages('./src/react-basics.html', './react-basics.html', ['reactBasics'])
]

module.exports = htmlWebpackPluginPages
