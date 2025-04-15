import Airtable from 'airtable'

let content
document.addEventListener('DOMContentLoaded', () => {
  getArticleContent().then((data) => {
    content = data

    // createstroke(content)
    update(content)
  })
})

const token =
  'patGPeZ8jw89QLPLb.1bde4f392fc00654a04394c522fac67bc9896a974935bd09a0c3eb38b83be512'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appvK9hZjGiZ9kW4A')

function getArticleContent() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Table 1')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            text: record.fields['Text'],
            page: record.fields['Page'],
            image: record.fields['Image']
          })
        })
        resolve(content)
      })
  })
}

function update(content) {
  const href = window.location.href.split('/').pop().split('.')[0]

  setTimeout(() => {
    content.forEach((stroke) => {
      if (href === stroke.page) {
        createArticleContent(stroke)
      }
    }, 100)
  })
}

function createArticleContent(stroke) {
  let { title, text, image } = stroke

  const contentItemCover = document.createElement('img')
  contentItemCover.classList.add('A_ContentItemCover')
  contentItemCover.src = image

  const contentItemTitle = document.createElement('h1')
  contentItemTitle.classList.add('A_ContentItemTitle')
  contentItemTitle.innerHTML = title

  const contentItemDescription = document.createElement('div')
  contentItemDescription.classList.add('W_ContentItemDescription')
  contentItemDescription.innerHTML = text

  const contentItem = document.querySelector('.S_ArticleContent')
  contentItem.appendChild(contentItemCover)
  contentItem.appendChild(contentItemTitle)
  contentItem.appendChild(contentItemDescription)
}
