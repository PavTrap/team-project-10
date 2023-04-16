//------------------Імпорт пакетів/стилі/шаблонів
// import mobileRenderByTop from './cards-books';
// import tabletRenderByTop from './cards-books';
// import renderButton from './cards-books';
//------------------Імпорт пакетів/стилі/шаблонів

//------------------Змінні
const refs = {
  allCategoryContainer: document.querySelector('.bestSellers__container'),
  cardsQuantityByCategory: 1,
  tabletWidth: 768,
};
//------------------Змінні

//------------------Додаткові функції
function checkWindowWidth() {
  return document.documentElement.clientWidth;
}
function seeMoreButtonsHandler() {
  let buttonsList = document.querySelectorAll('.button');
  for (button of buttonsList) {
    button.addEventListener('click', e => {
      localStorage.setItem('selected-category', e.target.dataset.category);
      console.log(
        'Вибрана категорія:',
        localStorage.getItem('selected-category')
      );
    });
  }
}
function imageButtonsHandler() {
  let imageList = document.querySelectorAll('.image-block__image');
  for (image of imageList) {
    image.addEventListener('click', e => {
      localStorage.setItem('selected-id', e.target.dataset.id);
      console.log('Вибрана книга з ID:', localStorage.getItem('selected-id'));
    });
  }
}
//------------------Додаткові функції

//------------------Запрос на API
const fetchBook = async () => {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/top-books`
  );
  const book = await response.json();
  return book;
};
//------------------Запрос на API

//------------------Функція запроса даних по ТОП книгам в категорії
const fetchedArrayByTop = async () => {
  if (checkWindowWidth() >= refs.tabletWidth) {
    refs.cardsQuantityByCategory = 3;
  }
  const data = await fetchBook().then(item => {
    const result = item.map(value => {
      const filteredByRank = value.books.filter(data => {
        return data.rank <= refs.cardsQuantityByCategory;
      });
      return filteredByRank;
    });
    return result;
  });
  return data;
};
//------------------Функція запроса даних по ТОП книгам в категорії

//------------------Шаблон рендера карток
function mobileRenderByTop(obj) {
  return (refs.cardMarkup = `
    <ul class='shop-card'>
    <li class='shop-card__category'>${obj.list_name}</li>
    <li class='image-block'>
        <img class='image-block__image' src='${obj.book_image}' data-id='${obj._id}'/>
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
    <img class='image-block__image' src='${obj.book_image}' data-id='${obj._id}'/>
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
//------------------Шаблон рендера карток

//------------------Фукнція рендера карток
async function renderFetch() {
  promise = await fetchedArrayByTop();
  for (let i = 0; i < promise.length; i++) {
    categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');
    let currentCategory;
    promise[i].map(obj => {
      currentCategory = obj.list_name;
      if (checkWindowWidth() >= refs.tabletWidth) {
        tabletRenderByTop(obj);
        categoryContainer.insertAdjacentHTML('beforeend', refs.cardMarkup);
      } else {
        mobileRenderByTop(obj);
        categoryContainer.insertAdjacentHTML('beforeend', refs.cardMarkup);
      }
    });
    if (checkWindowWidth() >= refs.tabletWidth) {
      categoryContainer.insertAdjacentHTML(
        'afterbegin',
        `<h3 class="category-title">${currentCategory}</h3>`
      );
      categoryContainer.insertAdjacentHTML(
        'beforeend',
        renderButton(currentCategory)
      );
    }
    refs.allCategoryContainer.insertAdjacentElement(
      'beforeend',
      categoryContainer
    );
  }
  seeMoreButtonsHandler();
  imageButtonsHandler();
}
//------------------Фукнція рендера карток

renderFetch();
