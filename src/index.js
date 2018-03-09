function timeUntil(date) {
  const now = new Date()
  const diff = dateDiff(now, date)
  const d = Math.floor(diff / (60 * 60 * 24))
  const h = Math.floor((diff - (d * 60 * 60 * 24)) / (60 * 60))
  const m = Math.floor((diff - (d * 60 * 60 * 24) - (h * 60 * 60)) / 60)
  const s = Math.floor((diff - (d * 60 * 60 * 24) - (h * 60 * 60) - (m * 60)))
  return {d, h, m, s}
}

function dateDiff(a, b) {
  const diffMS = b.getTime() - a.getTime()
  return Math.floor(diffMS / 1000)
}

function updateCountdown() {
  requestAnimationFrame(updateCountdown)
  const $days = document.querySelector('#countdown #days .value')
  const $hours = document.querySelector('#countdown #hours .value')
  const $minutes = document.querySelector('#countdown #minutes .value')
  const $seconds = document.querySelector('#countdown #seconds .value')
  const {d, h, m, s} = timeUntil(targetDate)

  if (Number($days.innerText) !== d) $days.innerText = d
  if (Number($hours.innerText) !== h) $hours.innerText = h
  if (Number($minutes.innerText) !== m) $minutes.innerText = m
  if (Number($seconds.innerText) !== s) $seconds.innerText = s
}

const targetDate = new Date('Thu Mar 28 2018 16:00:00 GMT+0100')
const $eventDate = document.querySelector('#date')
$eventDate.innerText = targetDate.toString().substr(0,21)

updateCountdown()