// import { markup } from './markup-foundation'


const sliderBtnEl = document.querySelector('.foundation__btn');
const foundItemsEl = document.querySelectorAll('.foundation__item');
const foundationListEl = document.querySelector(".foundation__list");

// SLIDER
const downSlider = function () {
  foundItemsEl.forEach(function (slide) {
        slide.style.transform = `translateY(-${counter * 90}px)`;
        // slide.style.transform = `translateY(-${counter * 80}px)`;
  });
}

const upSlider = function () {
  foundItemsEl.forEach(function (slide) {
    slide.style.transform = `translateY(0px)`;
    sliderBtnEl.querySelector('.btnLoadMore__icon').style.transform = '';  });
}


// BUTTON CLICK
sliderBtnEl.addEventListener('click', movementSlide);

let counter = 0;
let down = false;

 function movementSlide () {
  if (down) {
    if (counter < 2) {
      counter = 1;
      down = false;
    }
  } else {
    counter += 1;
    if (counter === 2) {
      sliderBtnEl.querySelector('.btnLoadMore__icon').style.transform = 'rotate(270deg)';
    }
        if (counter > 2) {
        counter = +1;
        down = true;       
        return upSlider();
    }
    
   } 
   downSlider();
}


