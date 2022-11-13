const markAllRead = document.querySelector('.mark-read')
const notificationCard = document.querySelectorAll('.notification-card')
const allButtons = document.querySelectorAll('.notification-card')
const theme = document.querySelector('#mode')
let count = (document.querySelector('.notification-count').innerHTML =
  notificationCard.length)

markAllRead.addEventListener('click', () => {
  for (let readNot of notificationCard) {
    readNot.classList.replace('unread', 'read')
  }
  document.querySelector('.notification-count').innerHTML = 0
})

for (let i = 0; i < allButtons.length; i += 1) {
  allButtons[i].addEventListener('click', read, { once: true })

  function read(e) {
    e.currentTarget.classList.replace('unread', 'read')
    if (count > 0) {
      document.querySelector('.notification-count').innerHTML = count -= 1
    }
  }
}

// theme.addEventListener('click', darkMode)

// function darkMode(ev) {
//   const element = document.body
//   const container = document.querySelector('.container')
//   const notificationCardTheme = document.querySelectorAll('.notification-card')
//   element.classList.toggle('dark-mode-body')
//   container.classList.toggle('dark-mode-container')

//   for (let cards of notificationCardTheme) {
//     cards.classList.toggle('dark-mode-notification')
//   }
//   allButtons[i].addEventListener('click', read, { once: true })
// }
