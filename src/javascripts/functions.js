import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', () => {
  initPopUp()
  rotateFlipCard()
  // initSwitch()
})

function initSwitch() {
  const toggleSwitch = document.querySelector('input[type=checkbox]')
  const body = document.querySelector('body')

  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      Cookies.set('theme', 'dark')
    } else {
      Cookies.remove('theme')
    }

    if (Cookies.get('theme') == 'dark') {
      body.classList.add('dark')
      toggleSwitch.checked = true
    } else {
      body.classList.remove('dark')
    }
  })
}

function initPopUp() {
  const button = document.querySelector('.A_PopUpButton')
  const popup = document.querySelector('.O_PopUpContainer')

  button.addEventListener('click', () => {
    popup.classList.add('visible')
  })

  popup.addEventListener('click', () => {
    popup.classList.remove('visible')
  })
}

function rotateFlipCard() {
  const cards = document.querySelectorAll('.W_FlipCard')

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('rotate')
    })
  })
}
