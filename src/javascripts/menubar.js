import { props } from './menubar-data.js'
import React from 'react'
const ReactDOMServer = require('react-dom/server')

const S_MenuBar = require('../components/S_MenuBar.jsx')

const menubar = ReactDOMServer.renderToString(
  React.createElement(S_MenuBar, props)
)

export { menubar }
