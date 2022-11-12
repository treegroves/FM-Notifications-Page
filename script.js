const markAllRead = document.querySelector('.mark-read')
const notificationCard = document.querySelectorAll('.notification-card')
const dot = document.querySelector('.dot')
const dots = document.querySelectorAll('.dot')
const allButtons = document.querySelectorAll('.notification-card')
let count = (document.querySelector('.notification-count').innerHTML =
  notificationCard.length)

markAllRead.addEventListener('click', () => {
  for (let readNot of notificationCard) {
    readNot.classList.add('read')
  }
  document.querySelector('.notification-count').innerHTML = 0
  dots.forEach((item) => item.classList.add('dot-read'))
})

//change status individually

for (let i = 0; i < allButtons.length; i += 1) {
  allButtons[i].addEventListener('click', read)
  allButtons[i].addEventListener('click', dotting)
}

function read(e) {
  e.currentTarget.classList.add('read')
  if (count > 0) {
    document.querySelector('.notification-count').innerHTML = count -= 1
  }
}

function dotting() {
  document.querySelector('.dot').innerHTML = ' '
  console.log('dotting')
}
