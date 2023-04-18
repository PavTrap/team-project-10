import { openModal } from './modal-window';
export { cardRenderByTop, cardRenderByCat, renderButton, imageButtonsHandler };

//------------------Шаблон рендера карток
function cardRenderByTop(obj) {
  return (cardMarkup = `
      <ul class='bestseller-card'>
      <div class = 'thumb'>
         <img class='thumb__image' src='${obj.book_image}' data-id='${obj._id}'/>
      <div class="thumb__overlay">
              <p class="thumb__overlay-tex">QUICK VIEW</p>
            </div> </div>
      </li>
      <ul class='bestseller-card__meta'>
        <li class='bestseller-card__title'>${obj.title}</li>
        <li class='bestseller-card__author'>${obj.author}</li>
      </ul
      
      </li>
      </ul>
    `);
}
function cardRenderByCat(obj) {
  return (cardMarkup = `
      <ul class='bestseller-card --margin'>
      <div class = 'thumb'>
         <img class='thumb__image' src='${obj.book_image}' data-id='${obj._id}'/>
      <div class="thumb__overlay">
              <p class="thumb__overlay-text">QUICK VIEW</p>
            </div> </div>
      </li>
      <ul class='bestseller-card__meta'>
        <li class='bestseller-card__title'>${obj.title}</li>
        <li class='bestseller-card__author'>${obj.author}</li>
      </ul
      
      </li>
      </ul>
    `);
}
function renderButton(category) {
  return (cardMarkup = `
    <button class='button__see-more' type='button' data-category='${category}'>See more</button>
  `);
}
function imageButtonsHandler() {
  let imageList = document.querySelectorAll('.thumb__image');
  for (image of imageList) {
    image.addEventListener('click', e => {
      // localStorage.setItem('selected-id', e.target.dataset.id);
      console.log('dasdsadsa:', e.target.dataset.id);
      //console.log('Вибрана книга з ID:', localStorage.getItem('selected-id'));
      openModal(e.target.dataset.id);
    });
  }
}
