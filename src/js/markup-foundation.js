import { nameFoundation } from './array_foundation';

const foundationListEl = document.querySelector(".foundation__list");

let number = 0;
nameFoundation.map(found => markupList(found.title, found.url, found.img, number +=1))

function markupList(title, url, img, number) {
    const createItem = document.createElement("li");
    const createLink = document.createElement("a");
    const createCount = document.createElement("p");
    const createImg = document.createElement('img');

   
    createItem.classList.add("foundation__item");
    createLink.classList.add("foundation__link");
    createImg.classList.add('foundation__img');
    createCount.classList.add('foundation__count');

    console.log(img)
    createImg.src = new URL(`${img}`, import.meta.url);

    console.log(createImg.src)
    createImg.alt = title;

    createLink.href = url;
    createCount.textContent = '0' + number;
    if (number > 10) {
    createCount.textContent =  number;
    }
    
    createLink.append( createImg)
    createItem.append(createCount, createLink);
    foundationListEl.append(createItem);
}


// if (foundationListEl.children.length > 6) {
    
// }
// console.log(foundationListEl.children.length)