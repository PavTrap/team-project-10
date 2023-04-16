import { openModal } from './modal-window';
const pushBooks = document.querySelector('.image - block__open');


//------------------Шаблон рендера карток
function mobileRenderByTop(obj) {
  return (refs.cardMarkup = `
    <ul class='shop-card'>
    <li class='shop-card__category'>${obj.list_name}</li>
    <li class='image-block'>
    <div class = 'thumb'>
       <img class='image-block__image' src='${obj.book_image}' data-id='${obj._id}'/>
    <div class="overlay-card">
            <p class="overlay-card-text">QUICK VIEW</p>
          </div> </div>
    </li>
    <ul class='shop-card__meta'>
      <li class='shop-card__title'>${obj.title}</li>
      <li class='shop-card__author'>${obj.author}</li>
    </ul
    <li><button class='button' type='button' data-category='${obj.list_name}'>See more</button>
    </li>
    </ul>
  `);
}
function tabletRenderByTop(obj) {
  return (refs.cardMarkup = `
    <ul class='shop-card'>
    <li class='image-block'>
    <div class = 'thumb'>
       <img class='image-block__image' src='${obj.book_image}' data-id='${obj._id}'/>
    <div class="overlay-card">
            <p class="overlay-card-text">QUICK VIEW</p>
          </div> </div>
    </li>
    <ul class='shop-card__meta'>
      <li class='shop-card__title'>${obj.title}</li>
      <li class='shop-card__author'>${obj.author}</li>
    </ul
    
    </li>
    </ul>
  `);
}
function renderButton(category) {
  return (refs.cardMarkup = `
    <button class='button' type='button' data-category='${category}'>See more</button>
  `);
}

pushBooks.addEventListene('click', openModal);