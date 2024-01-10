const toCardElement = (card, index) => {
  return el(
  'td',
  'bingo-card',
  { id: `card-${index}`},
  el('img', 'card-img', {src: card.img, alt: card.name, width: 125, height: 125}),
  el('h2', 'w-fit text-gray-600 text-left', {}, t(card.name))
)}

const toCardRow = (cards, rowIndex) => el('tr', '', {}, ...cards.map((card, cardIndex) => toCardElement(card, (rowIndex * 5) + cardIndex + 1)))

const appendRow = (selector) => (row) => {
  document.querySelector(selector).appendChild(row)
}

const tap = (tapFunction) => (value) => {
  tapFunction(value)
  return value
}

document.addEventListener('DOMContentLoaded', () => {
  cards.map(toCardRow).forEach(appendRow('#bingo-container'));
  [...document.querySelectorAll('.card-img')].forEach((el) => el.addEventListener('click', imgPopup(el.src)))
})

const getRandomBingoIds = () => routes[Math.floor(Math.random() * routes.length)]

const clearSelectedCards = () =>
  document.querySelectorAll('.bingo-card').forEach((card) => card.classList.remove('bingo-selected-card'))

const applySelectedRoute = ({ids, url, dist}) => {
  ids.forEach((id) => {
      document.querySelector(`#card-${id}`).classList.add('bingo-selected-card')
  })
  document.querySelector('#map-button').onclick = () => window.open(url, '_blank')
  document.querySelector('#distance-txt').innerText = dist
}

const enableMapButton = () => {
  document.querySelector('#map-button').disabled = false
}

const selectRandomBingo = () => {
  clearSelectedCards()
  applySelectedRoute(getRandomBingoIds())
  enableMapButton()
}

const selectHardcoreBingo = () => {
  clearSelectedCards()
  applySelectedRoute(hardcodeRoute)
  enableMapButton()
}

const imgPopup = (src) => () => {
  console.log('sou haida', src)
  const card = cards.flat().find((card) => src.endsWith(card.img))
  Swal.fire({
      imageUrl: card.full_img,
      imageAlt: `${card.name}: ${card.description}}`,
      title: card.name,
      text: card.description,
      confirmButtonText: 'Close'
  })
}
