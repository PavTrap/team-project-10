import { nameFoundation } from './array_foundation'

const foundationListEl = document.querySelector(".foundation__list");

 const markupList = arr => {
    return arr.map((item, index) => {
      const { title, url, img } = item;
    const countNumber = (index + 1).toString().padStart(2, '0');
        
        return `<li class= 'foundation__item'> 
        <p class = "foundation__count"> ${countNumber} </p>
        <a href="${url}" "foundation__link" target="_blank" rel="noopener noreferrer">
        <img class="foundation__img" src="${img}" alt="${title}" width=110 height=33>
        </a>
        </li>`
    }).join('');
}

foundationListEl.innerHTML = markupList(nameFoundation);
