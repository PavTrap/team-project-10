import { nameFoundation } from './array_foundation'

const foundationListEl = document.querySelector(".foundation__list");
const sliderBtn = document.querySelector('.foundation__btn');
const sliderWrapper = document.querySelector('.slider');
const imgSlides = document.querySelectorAll('.foundation__item');


console.log(foundationListEl)
console.log(nameFoundation.length)
    function markupList(arr) {
        return arr.map(({ title, url, img, number }) => {
            return `<li class= 'foundation__item'> 
        <p class = "foundation__count"> 0${number} </p>
        <a href="${url}" "foundation__link">
        <img src="${img}" alt="${title}" width=110 height=33>
        </a>
        </li>`
    })
        .join('');
}

foundationListEl.innerHTML = markupList(nameFoundation);


// let counter = 0;
// let moveDown = false;

// const verticalSlider = function () {
//   imgSlides.forEach(function (slide) {
//     slide.style.transform = `translateY(-${counter * 100}%)`;
//   });
// };

// sliderBtn.addEventListener('click', function () {
//   if (moveDown) {
//     counter -= 2;
//     if (counter < 0) {
//       counter = 0;
//       moveDown = false;
//       sliderBtn.querySelector('.support__icon').style.transform = '';
//     }
//   } else {
//     counter += 2;
//     if (counter >= imgSlides.length) {
//       counter = imgSlides.length - 1;
//       moveDown = true;
//       sliderBtn.querySelector('.support__icon').style.transform = 'rotate(180deg)';
//     }
//     }
    
//     verticalSlider(markupList);
// });


  
