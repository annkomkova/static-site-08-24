import React, { useState, useEffect } from 'react'
import { getPostTeasers } from '../javascripts/search-data.js'
import A_MainMenu from './A_MainMenu.jsx'
import O_SearchBar from './O_SearchBar.jsx'

export default function S_MenuBar({ prerender, homeURL, menu }) {
  const currentURL = !prerender ? window.location.href : ''

  const menuElements = menu.map(({ text, url }, i) => {
    const linkURL = homeURL + url // http://localhost:8080/' + уникальная страница из массива данных
    return (
      <A_MainMenu
        key={i}
        current={linkURL === currentURL}
        text={text}
        url={linkURL}
        type="text"
      />
    )
  })

  return (
    <>
      <A_MainMenu current={false} text="" url={homeURL} type="logo" />

      <div className="C_MainMenu">{menuElements}</div>
    </>
  )
}
