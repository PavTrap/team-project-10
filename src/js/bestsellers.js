//------------------Імпорт пакетів/стилі/шаблонів
import {
  cardRenderByTop,
  cardRenderByCat,
  renderButton,
  imageButtonsHandler,
} from './card-books.js';
import { categoriesList } from './categories.js';
//------------------Імпорт пакетів/стилі/шаблонів

//------------------Змінні
const refs = {
  allCategoryContainer: document.querySelector('.bestSellers__container'),
  bestsellerContainer: document.querySelector('.bestSellers'),
  sectionTitle: document.querySelector('.section-title'),
  cardsQuantityByCategory: 1,
  tabletWidth: 768,
  pcWidth: 1440,
};

//------------------Змінні

//------------------Додаткові функції
function changeTitleColors(string) {
  let arrayFromString = string.split(' ');
  let tempString = string.substr(arrayFromString[0].length);
  let result = `<span class="section-title">${arrayFromString[0]}</span>
  <span class='section-title--highlight'>${tempString}</span>`;
  return result;
}

function isCategorySelected() {
  if (
    localStorage.getItem('selected-category') &&
    localStorage.getItem('selected-category') != 'undefined'
  ) {
    return true;
  }
  return false;
}
function checkWindowWidth() {
  return document.documentElement.clientWidth;
}
function reloadPage() {
  let currentRenderWidth;
  if (checkWindowWidth() < 768) {
    currentRenderWidth = 375;
  } else if (checkWindowWidth() >= 768 && checkWindowWidth() < 1440) {
    currentRenderWidth = 768;
  } else {
    currentRenderWidth = 1440;
  }
  addEventListener('resize', event => {
    if (
      (window.innerWidth > 767 && currentRenderWidth < 768) ||
      (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
      (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
      (window.innerWidth < 768 && currentRenderWidth > 767)
    ) {
      location.reload();
    }
  });
}

function seeMoreButtonsHandler() {
  let buttonsList = document.querySelectorAll('.button__see-more');
  for (button of buttonsList) {
    button.addEventListener('click', e => {
      localStorage.setItem('selected-category', e.target.dataset.category);
      renderDOM();
    });
  }
}

function categoriesLinksHandler() {
  let linksList = document.querySelectorAll('.categories__item');
  let linkItem = document.querySelectorAll('.categories__link');
  for (link of linksList) {
    link.addEventListener('click', e => {
      for (item of linkItem) {
        item.classList.remove('category-active');
      }
      e.target.classList.add('category-active');
      if (
        localStorage.getItem('selected-category') === e.target.dataset.category
      ) {
        return;
      }
      localStorage.setItem('selected-category', e.target.dataset.category);
      renderDOM();
    });
  }
}
//------------------Додаткові функції

//------------------Запрос на API
const fetchBook = async () => {
  if (isCategorySelected()) {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${localStorage.getItem(
        'selected-category'
      )}`
    );
    const book = await response.json();
    return book;
  } else {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/top-books`
    );
    const book = await response.json();
    return book;
  }
};
//------------------Запрос на API

//------------------Функція запроса даних по ТОП книгам в категорії
const fetchedArrayByTop = async () => {
  cardsQuantityByCategory = 1;
  if (checkWindowWidth() >= refs.tabletWidth) {
    refs.cardsQuantityByCategory = 3;
  }
  if (checkWindowWidth() >= refs.pcWidth) {
    refs.cardsQuantityByCategory = 5;
  }
  if (isCategorySelected()) {
    const data = await fetchBook().then(item => {
      const result = item.map(value => {
        return value;
      });
      return result;
    });
    return data;
  } else {
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
  }
};
//------------------Функція запроса даних по ТОП книгам в категорії

//------------------Фукнція рендера карток
async function renderFetchByTop() {
  promise = await fetchedArrayByTop();

  let currentCategory;
  refs.sectionTitle.innerHTML = '';
  refs.sectionTitle.insertAdjacentHTML(
    'afterbegin',
    `<span>BestSellers<span>
    <span class="section-title--highlight">Books</span>`
  );
  for (let i = 0; i < promise.length; i++) {
    categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    promise[i].map(obj => {
      currentCategory = obj.list_name;
      cardRenderByTop(obj);
      categoryContainer.insertAdjacentHTML('beforeend', cardMarkup);
    });
    categoryContainer.insertAdjacentHTML(
      'afterbegin',
      `<h3 class="category-title">${currentCategory}</h3>`
    );
    categoryContainer.insertAdjacentHTML(
      'beforeend',
      renderButton(currentCategory)
    );

    refs.allCategoryContainer.insertAdjacentElement(
      'beforeend',
      categoryContainer
    );
  }
  seeMoreButtonsHandler();
  imageButtonsHandler();
  categoriesLinksHandler();
}
async function renderFetchByCat() {
  promise = await fetchedArrayByTop();
  categoryContainer = document.createElement('div');
  categoryContainer.classList.add('category-container');
  for (let i = 0; i < promise.length; i++) {
    cardRenderByCat(promise[i]);
    categoryContainer.insertAdjacentHTML('beforeend', cardMarkup);
  }
  refs.allCategoryContainer.insertAdjacentElement(
    'beforeend',
    categoryContainer
  );
  seeMoreButtonsHandler();
  imageButtonsHandler();
  categoriesLinksHandler();
}
async function renderDOM() {
  refs.allCategoryContainer.innerHTML = '';
  if (isCategorySelected()) {
    refs.sectionTitle.innerHTML = '';
    refs.sectionTitle.insertAdjacentHTML(
      'afterbegin',
      changeTitleColors(localStorage.getItem('selected-category'))
    );
    renderFetchByCat();
  } else {
    renderFetchByTop();
  }
}
//------------------Фукнція рендера карток

renderDOM();
reloadPage();
