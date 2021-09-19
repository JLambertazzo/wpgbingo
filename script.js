'use strict'
const images = document.querySelectorAll('img.card-img-top');
const lightboxContainer = document.querySelector('.lightbox-shade')
const cards = [...document.querySelectorAll('.card')].sort((a, b) => {
    return a.getAttribute('key') - b.getAttribute('key')
})
const randomMap = {
    0: {
        cards: [1, 2, 3, 4, 5],
        extras: [[6, 11], [10, 25]],
    },
    1: {
        cards: [6, 7, 8, 9, 10],
        extras: [[11, 16], [20, 25]],
    },
    2: {
        cards: [11, 12, 13, 14, 15],
        extras: [[1, 6], [16, 21], [5, 10], [20, 25]],
    },
    3: {
        cards: [16, 17, 18, 19, 20],
        extras: [[6, 11], [10, 15]],
    },
    4: {
        cards: [21, 22, 23, 24, 25],
        extras: [[11, 16], [15, 20]],
    },
    5: {
        cards: [1, 6, 11, 16, 21],
        extras: [[2, 3], [22, 23]],
    },
    6: {
        cards: [2, 7, 12, 17, 22],
        extras: [[3, 4], [23, 24]],
    },
    7: {
        cards: [3, 8, 13, 18, 23],
        extras: [[1, 2], [4, 5], [21, 22], [24, 25]],
    },
    8: {
        cards: [4, 9, 14, 19, 24],
        extras: [[2, 3], [22, 23]],
    },
    9: {
        cards: [5, 10, 15, 20, 25],
        extras: [[3, 4], [23, 24]],
    },
    10: {
        cards: [1, 7, 13, 19, 25],
    },
    11: {
        cards: [5, 9, 13, 17, 21]
    },
}
let activeCards = null

function imageClickHandler(img) {
    const newimg = document.createElement('img')
    newimg.src = img.src
    newimg.className = 'lightbox-img'
    // set proper text for hover event
    const text = document.createElement('h4')
    text.innerText = desc[img.parentElement.getAttribute('key')]
    text.classList.add('lightbox-txt')
    lightboxContainer.innerHTML = ''
    lightboxContainer.appendChild(newimg)
    lightboxContainer.appendChild(text)
    newimg.classList.add('shaded')
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
    activeCards = randomMap[Math.floor(Math.random()*12)].cards
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

function handleRandomSeven() {
    // don't include diagonals
    const r1 = Math.floor(Math.random()*10)
    const selectedObj = randomMap[r1]
    const r2 = Math.floor(Math.random()*(selectedObj.extras.length - 1))
    activeCards = [...selectedObj.cards, ...selectedObj.extras[r2]]
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
