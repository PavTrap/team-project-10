import { nameFoundation } from './array_foundation'

const foundationListEl = document.querySelector(".foundation__list");

console.log(1+192929)

 const markupList = arr => {
    return arr.map((item, index) => {
      const { title, url, img } = item;
    const countNumber = (index + 1).toString().padStart(2, '0');
        
        return `<li class= 'foundation__item'> 
        <p class = "foundation__count"> ${countNumber} </p>
        <a href="${url}" "foundation__link">
        <img class="foundation__img" src="${img}" alt="${title}" width=110 height=33>
        </a>
        </li>`
    }).join('');
}

foundationListEl.innerHTML = markupList(nameFoundation);

const sliderBtnEl = document.querySelector('.foundation__btn');
const foundItemsEl = document.querySelectorAll('.foundation__item');


// SLIDER

const supportSlider = function () {
    foundItemsEl.forEach(function (slide) {
        slide.style.transform = `translateY(-${counter * 40}px)`;
    });
}

// BUTTON CLICK
sliderBtnEl.addEventListener('click', movementSlide);

let counter = 0;
let moveDown = false;

 function movementSlide () {
  if (moveDown) {
    counter -= 3;
    if (counter < 0) {
      counter = 0;
      moveDown = false;
      sliderBtnEl.querySelector('.btnLoadMore__icon').style.transform = '';
    }
  } else {
    counter += 3;
      if (counter >= foundItemsEl.length) {
      counter = foundItemsEl.length - 2;
      moveDown = true;
      sliderBtnEl.querySelector('.btnLoadMore__icon').style.transform = 'rotate(270deg)';
    }
     }
    supportSlider();
}


