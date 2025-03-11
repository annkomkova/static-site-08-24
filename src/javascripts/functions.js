import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', () => {
  initPopUp()
  rotateFlipCard()
  // initSwitch()
  initMultiselect()
})

function initMultiselect() {
  const label = document.querySelector('.C_Chips')
  const select = document.querySelector('.M_SelectField')
  const text = label.innerHTML

  select.addEventListener('change', function () {
    let selectedOptions = this.selectedOptions
    label.innerHTML = ''

    for (let option of selectedOptions) {
      let button = document.createElement('button')
      button.classList.add('A_Chip')
      button.type = 'button'
      button.textContent = option.value

      button.addEventListener('click', () => {
        option.selected = false
        button.remove()

        if (!select.selectedOptions.length) {
          label.innerHTML = text
        }
      })

      label.appendChild(button)
    }
  })
}

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
