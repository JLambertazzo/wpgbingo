'use strict'
const images = document.querySelectorAll('img.card-img-top');
const lightboxContainer = document.querySelector('.lightbox-shade')

function imageClickHandler(img) {
    const newimg = document.createElement('img')
    newimg.src = img.src
    newimg.className = 'lightbox-img'
    lightboxContainer.innerHTML = ''
    lightboxContainer.appendChild(newimg)
    lightboxContainer.classList.remove('hide')    
}

function lightboxBlurHandler(target) {
    if ([...target.classList].includes('lightbox-img')) {
        return false
    }
    lightboxContainer.classList.add('hide')
    lightboxContainer.innerHTML = ''
}

images.forEach(img => {
    img.addEventListener('click', (e) => imageClickHandler(e.target));
});

lightboxContainer.addEventListener('click', (e) => lightboxBlurHandler(e.target))