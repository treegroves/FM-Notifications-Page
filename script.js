const markAllRead = document.querySelector('.mark-read')
const notificationCard = document.querySelectorAll('.notification-card')
const allButtons = document.querySelectorAll('.notification-card')
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
