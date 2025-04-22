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

export default function O_Container() {
  return (
    <div className="O_Container">
      <A_Title name="Расписание" />
      {workshops.map((workshop, i) => (
        <M_Card key={i} name={workshop.title} description={workshop.date} />
      ))}
    </div>
  )
}
