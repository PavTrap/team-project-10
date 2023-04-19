import { openModal } from './modal-window';
export { cardRenderByTop, cardRenderByCat, renderButton, imageButtonsHandler };

//------------------Шаблон рендера карток
function cardRenderByTop(obj) {
  const cardMarkup = `
  <ul class='bestseller-card'>
  <li>
    <div class = 'thumb'>
      <img class='thumb__image' src='${obj.book_image}' data-id='${obj._id}' alt='${obj.title}'/>
        <div class="thumb__overlay">
        <p class="thumb__overlay-text">QUICK VIEW</p>
        </div> 
    </div>
  </li>
  <li>
    <ul class='bestseller-card__meta'>
      <li class='bestseller-card__title'>${obj.title}</li>
      <li class='bestseller-card__author'>${obj.author}</li>
    </ul
  </li>
  </ul>
`;
  return cardMarkup;
}
function cardRenderByCat(obj) {
  const cardMarkup = `
      <ul class='bestseller-card --margin'>
      <li>
        <div class = 'thumb'>
          <img class='thumb__image' src='${obj.book_image}' data-id='${obj._id}' alt='${obj.title}'/>
            <div class="thumb__overlay">
            <p class="thumb__overlay-text">QUICK VIEW</p>
            </div> 
        </div>
      </li>
      <li>
        <ul class='bestseller-card__meta'>
          <li class='bestseller-card__title'>${obj.title}</li>
          <li class='bestseller-card__author'>${obj.author}</li>
        </ul
      </li>
      </ul>
    `;
  return cardMarkup;
}
function renderButton(category) {
  const cardMarkup = `
    <button class='button__see-more' type='button' name='See more' data-category='${category}'>See more</button>
  `;
  return cardMarkup;
}
function imageButtonsHandler() {
  let imageList = document.querySelectorAll('.thumb__image');
  for (const image of imageList) {
    image.addEventListener('click', e => {
      openModal(e.target.dataset.id);
    });
  }
}
