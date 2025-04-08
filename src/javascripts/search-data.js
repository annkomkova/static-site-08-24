import Airtable from 'airtable'

const token =
  'patmkkYcpweemMzIv.3b9eb53c082852c79b470159df4b128389e4f58091954122fb1662e440274858'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appePrphSXY2TX8TD')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            tags: record.fields['Tags'],
            image: record.fields['Image'],
            url: record.fields['Url'],
            class: record.fields['Class']
          })
        })
        resolve(content)
      })
  })
}

export { getPostTeasers }
