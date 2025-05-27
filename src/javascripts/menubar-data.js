const homeURL = 'http://localhost:8080/'
// const homeURL = 'https://hseadc.github.io/NOOB/'

const menu = [
  {
    text: 'Статьи',
    url: 'articles.html'
  },
  {
    text: 'Настолки',
    url: 'boardgames.html'
  },
  {
    text: 'Поиск',
    url: 'search.html'
  },
  {
    text: 'Стайлгайд',
    url: 'styleguide.html'
  }
]

const props = {
  prerender: true,
  homeURL,
  menu
}

export { props }
