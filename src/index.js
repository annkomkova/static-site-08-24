import './index.css'
import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', () => {
  initSwitch()
  switchTheme()
})
const toggleSwitch = document.querySelector('.A_Checkbox')

function initSwitch() {
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      Cookies.set('theme', 'dark')
    } else {
      Cookies.remove('theme')
    }
    switchTheme()
  })
}

function switchTheme() {
  const body = document.querySelector('body')

  if (Cookies.get('theme') == 'dark') {
    body.classList.add('dark')
    toggleSwitch.checked = true
  } else {
    body.classList.remove('dark')
  }
}
