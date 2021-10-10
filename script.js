'use strict'
const modal = picoModal({
    content: '<p>I understand that cycling in Winnipeg includes areas where cyclists are not separated from traffic, that suggested routes may not reflect current conditions and that I am responsible for planning a route that suits current infrastructure and road conditions as well as my personal health and ability.</p> <button onclick="modal.close()">I accept</button>'
}).show() // show disclaimer modal
const images = document.querySelectorAll('img.card-img-top');
const lightboxContainer = document.querySelector('.lightbox-shade')
const cards = [...document.querySelectorAll('.card')].sort((a, b) => {
    return a.getAttribute('key') - b.getAttribute('key')
})
const randomMap = {
    0: {
        cards: [1, 2, 3, 4, 5],
        extras: [[6, 11], [10, 25]],
        link: 'https://t.ly/pGrv',
    },
    1: {
        cards: [6, 7, 8, 9, 10],
        extras: [[11, 16], [20, 25]],
        link: 'https://t.ly/Uqxh',
    },
    2: {
        cards: [11, 12, 13, 14, 15],
        extras: [[1, 6], [16, 21], [5, 10], [20, 25]],
        link: 'https://t.ly/R2AH7',
    },
    3: {
        cards: [16, 17, 18, 19, 20],
        extras: [[6, 11], [10, 15]],
        link: 'https://t.ly/OQl7',
    },
    4: {
        cards: [21, 22, 23, 24, 25],
        extras: [[11, 16], [15, 20]],
        link: 'https://t.ly/3l1w',
    },
    5: {
        cards: [1, 6, 11, 16, 21],
        extras: [[2, 3], [22, 23]],
        link: 'https://t.ly/5bsF',
    },
    6: {
        cards: [2, 7, 12, 17, 22],
        extras: [[3, 4], [23, 24]],
        link: 'https://t.ly/YgcA',
    },
    7: {
        cards: [3, 8, 13, 18, 23],
        extras: [[1, 2], [4, 5], [21, 22], [24, 25]],
        link: 'https://t.ly/PNBp',
    },
    8: {
        cards: [4, 9, 14, 19, 24],
        extras: [[2, 3], [22, 23]],
        link: 'https://t.ly/4scx',
    },
    9: {
        cards: [5, 10, 15, 20, 25],
        extras: [[3, 4], [23, 24]],
        link: 'https://t.ly/kPbz',
    },
    10: {
        cards: [1, 7, 13, 19, 25],
        link: 'https://t.ly/n0uj',
    },
    11: {
        cards: [5, 9, 13, 17, 21],
        link: 'https://t.ly/yRjz',
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
    const selected = randomMap[Math.floor(Math.random()*12)]
    activeCards = selected.cards
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
    // show map it link
    document.querySelector('.accept').classList.remove('hide');
    const a = document.querySelector('#map-link')
    a.setAttribute('href', selected.link)
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
    document.querySelector('.accept').classList.add('hide');
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
