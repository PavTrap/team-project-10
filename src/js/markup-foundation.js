import { nameFoundation } from './array_foundation'

const foundationListEl = document.querySelector(".foundation__list");
const swiperEl = document.querySelector("swiper-container")
console.log(foundationListEl)
console.log(nameFoundation.length)
    function markupList(arr) {

        // for (let a of arr) {
        //     if(arr.indexOf(a) > 6 )
        //     break
        // } 
        return arr.map(({ title, url, img, number }) => {
            return `<li class= 'foundation__item'> 
        <p class = "foundation__count"> 0${number} </p>
        <a href="${url}" "foundation__link">
        <img src="${img}" alt="${title}" width =100 height=33>
        </a>
        </li>`
    })
        .join('');
}

foundationListEl.innerHTML = markupList(nameFoundation);
