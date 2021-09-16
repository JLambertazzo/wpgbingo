'use strict'
const images = document.querySelectorAll('img.card-img-top');
const lightboxContainer = document.querySelector('.lightbox-shade')
const cards = [...document.querySelectorAll('.card')].sort((a, b) => {
    return a.getAttribute('key') - b.getAttribute('key')
})
console.log(cards.map(a => a.getAttribute('key')))
const randomMap = {
    0: [1, 2, 3, 4, 5],
    1: [6, 7, 8, 9, 10],
    2: [11, 12, 13, 14, 15],
    3: [16, 17, 18, 19, 20],
    4: [21, 22, 23, 24, 25],
    5: [1, 6, 11, 16, 21],
    6: [2, 7, 12, 17, 22],
    7: [3, 8, 13, 18, 23],
    8: [4, 9, 14, 19, 24],
    9: [5, 10, 15, 20, 25],
    10: [1, 7, 13, 19, 25],
    11: [5, 9, 13, 17, 21],
}
let activeCards = null

function imageClickHandler(img) {
    const newimg = document.createElement('img')
    newimg.src = img.src
    newimg.className = 'lightbox-img'
    lightboxContainer.innerHTML = ''
    lightboxContainer.appendChild(newimg)
    lightboxContainer.classList.remove('hide')    
}

function lightboxBlurHandler(target) {
    if (target && [...target.classList].includes('lightbox-img')) {
        return false
    }
    lightboxContainer.classList.add('hide')
    lightboxContainer.innerHTML = ''
}

function handleRandom() {
    activeCards = randomMap[Math.floor(Math.random()*12)]
    console.log(activeCards)
    cards.forEach((card) => {
        if (activeCards.includes(+card.getAttribute('key'))) {
            card.classList.remove('inactive-card')
            card.classList.add('active-card')
        } else {
            card.classList.remove('active-card')
            card.classList.add('inactive-card')
        }
    })
}

images.forEach(img => {
    img.addEventListener('click', (e) => imageClickHandler(e.target));
});

lightboxContainer.addEventListener('click', (e) => lightboxBlurHandler(e.target))

document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
        lightboxBlurHandler(document.querySelector('.lightbox-img'))
    }
})