import React from 'react'

import A_Title from './A_Title.jsx'
import M_Card from './M_Card.jsx'

const workshops = [
  {
    date: '15 апреля 2025',
    title: 'Основы React'
  },
  {
    date: '22 апреля 2025',
    title: 'Программируем модуль поиска'
  },
  {
    date: '29 апреля 2025',
    title: 'Добавляем прелоад'
  }
]

export default class O_Container extends React.Component {
  render() {
    const cards = workshops.map((workshop, i) => {
      return (
        <M_Card key={i} name={workshop.title} description={workshop.date} />
      )
    })

    return (
      <div className="O_Container">
        <A_Title name="Расписание" />
        {cards}
      </div>
    )
  }
}
