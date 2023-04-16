import { markup } from './markup-foundation'

const sliderBtnEl = document.querySelector('.foundation__btn');
const foundItemsEl = document.querySelectorAll('.foundation__item');

console.log(1+2+4+1)

const supportSlider = function () {
  foundItemsEl.forEach(function (slide) {
    slide.style.transform = `translateY(-${counter * 50}%)`;
  });
};

// BUTTON CLICK
sliderBtnEl.addEventListener('click', movementSlide);

let counter = 0;
let moveDown = false;

 function movementSlide () {
  if (moveDown) {
    counter -= 2;
    if (counter < 0) {
      counter = 0;
      moveDown = false;
      sliderBtnEl.querySelector('.btnLoadMore__icon').style.transform = '';
    }
  } else {
    counter += 2;
    if (counter >= imgSlides.length) {
      counter = foundItemsEl.length - 1;
      moveDown = true;
      sliderBtnEl.querySelector('.btnLoadMore__icon').style.transform = 'rotate(180deg)';
    }
    }
    supportSlider(markup);
}