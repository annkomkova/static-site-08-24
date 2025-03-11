console.clear()
document.addEventListener('DOMContentLoaded', () => {
  initFilter()
})

function initFilter() {
  const tags = document.querySelectorAll('.A_FilterTag')
  const a = document.querySelector('.all')

  tags.forEach((tag) => {
    tag.addEventListener('click', () => {
      if (tag != a) {
        a.classList.remove('active')
        tag.classList.toggle('active')

        console.log('здесь будет функция фильтрации по тегу')
        filterByTag()
      }

      let b = document.querySelectorAll('.active')
      if (tag == a && !tag.classList.contains('active')) {
        b.forEach((tag) => {
          tag.classList.remove('active')
        })
        tag.classList.add('active')
        console.log('здесь будет функция вывода всех карточек')
        filterAll()
      }
      if (tags.length - 1 == b.length || b.length == 0) {
        b.forEach((tag) => {
          tag.classList.remove('active')
        })
        a.classList.add('active')
        console.log('здесь будет функция вывода всех карточек')
        filterAll()
      }
    })
  })
}

function filterAll() {
  const cards = document.querySelectorAll('.O_ArticleCard')
  const activeTags = document.querySelectorAll('.active')

  activeTags.forEach((tag) => {
    let classList = tag.className.split(' ')
    if (tag.classList.contains('all')) {
      cards.forEach((card) => {
        card.style.cssText = 'display: block;'
      })
    }
  })
}

function filterByTag() {
  const cards = document.querySelectorAll('.O_ArticleCard')
  const activeTags = document.querySelectorAll('.active')
  let tagList = []
  let count

  cards.forEach((card) => {
    card.style.cssText = 'display: none;'
  })

  activeTags.forEach((tag) => {
    let classList = tag.className.split(' ')
    classList = classList.sort()
    count = 1
    if (classList[1] == 'active') {
      count++
    }
    for (let i = count; i < classList.length; i++) {
      tagList.push(classList[i])
    }
  })

  tagList.forEach((tagName) => {
    cards.forEach((card) => {
      if (card.classList.contains(tagName)) {
        card.style.cssText = 'display: block;'
      }
    })
  })
}
