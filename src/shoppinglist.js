import './js/theme-switch';
// import './js/start';
// import './js/start-open-close';
// import './js/firebase';

// імпортуємо Pagination та стилі з бібліотеки 'tui-pagination'
import Pagination from 'tui-pagination';

import { bookShops } from './js/array_book_shops';
console.log(bookShops);

var shoppingCartBlock = document.querySelector(
  '.shopping-carg-book-description-block'
);
var description = document.querySelector('.shopping-carg-book-description');

// знаходимо контейнер для пагінації та елемент для відображення інформації
const paginationEl = document.querySelector('#tui-pagination-container');
// додаємо прослуховання на картку з іформацією про книгу
const infoBlock = document.querySelector('#info-block');

// Зчитуємо массив з даними userName з local storage
let userName = JSON.parse(localStorage.getItem('User-name'));

// перевіряє наявність User-name в Local storage
// якщо нема, виводимо порожню сторінку

if (userName === null) {
  createEmptyPage();
}

// Отрумуємо масив з списком id книг
let listID = userName.listId;
console.log(listID);

// Налаштування параметрів для бібліотеки Pagination
let options = {
  totalItems: listID.length, // загальна кількість елементів у списку
  itemsPerPage: 3, // кількість елементів, що будуть відображатись на одній сторінці
  visiblePages: 2, // кількість видимих сторінок
  centerAlign: false, // вирівнювання по центру
  firstItemClassName: 'tui-first-child', // клас для першого елементу
  lastItemClassName: 'tui-last-child', // клас для останнього елементу
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>', // шаблон для звичайної сторінки
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>', // шаблон для поточної сторінки
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>', // шаблон для кнопки "перейти на попередню/наступну сторінку"
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}" style="background-color: #111111">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>', // шаблон для вимкненої кнопки "перейти на попередню/наступну сторінку"
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>', // шаблон для кнопки "більше сторінок"
  },
};

// Ініціалізація об'єкту Pagination
let pagination = new Pagination(paginationEl, options); // paginationEl - елемент, в який буде виводитись пагінація

// Перевірка довжини масиву listID і виведення відповідного контенту на сторінку
checkingShoppingListLenght(listID);

function checkingShoppingListLenght(listID) {
  // Якщо listID порожній, то приховуємо пагінацію і створюємо порожню сторінку
  if (listID.length === 0) {
    paginationEl.style.display = 'none';
    createEmptyPage();
  } else if (listID.length > 0) {
    // Якщо listID не порожній
    if (listID.length <= 3) {
      // Якщо кількість елементів в listID менше або дорівнює 3, то приховуємо пагінацію
      paginationEl.style.display = 'none';
    }

    // Додаємо обробник події 'afterMove' до пагінації, щоб отримувати поточну сторінку і виводити список товарів
    if (!pagination.hasListener('afterMove')) {
      pagination.on('afterMove', async event => {
        try {
          const currentPage = event.page;

          localStorage.setItem('currentPage', currentPage);
          const shoppingList = await fetchBooks(currentPage);

          createShoppingListPage(shoppingList);
        } catch (error) {
          console.log(error.message);
        }
      });
    }

    // Переміщуємося на збережену сторінку, якщо така є, інакше на першу сторінку
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      pagination.movePageTo(Number(storedPage));
    } else {
      pagination.movePageTo(1);
    }
  }
}
// Асинхронна функція для отримання книг з серверу
// Приймає номер сторінки (по замовчуванню 1)
// Обчислює індекс першої та останньої книги на сторінці
// Звертається до серверу за даними кожної книги і повертає масив промісів
// Використовує Promise.all() для очікування результатів всіх промісів та повертає масив книг
async function fetchBooks(page = 1) {
  const start = (page - 1) * options.itemsPerPage + 1;
  const end = start + options.itemsPerPage - 1;

  const books = listID.slice(start - 1, end);

  const arrayOfPromises = books.map(async book => {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/${book}`
    );
    return response.json();
  });
  const users = await Promise.all(arrayOfPromises);
  return users;
}

// Функція для створення списку книжок на сторінці корзини покупок
function createShoppingListPage(shoppingList) {
  clearList(); // Очистка списку перед створенням нових елементів

  let amazonUrl = ''; // Посилання на Amazon
  let appleUrl = ''; // Посилання на Apple Books
  let bookshopUrl = ''; // Посилання на Bookshop

  const arrrr = []; // Масив для збереження HTML-коду кожної книжки зі списку

  for (let i = 0; i < shoppingList.length; i++) {
    const shop = shoppingList[i];
    let buyLinks = shop.buy_links;
    for (let j = 0; j < buyLinks.length; j++) {
      if (buyLinks[j].name === 'Amazon') {
        amazonUrl = buyLinks[j].url;
      }
      if (buyLinks[j].name === 'Apple Books') {
        appleUrl = buyLinks[j].url;
      }
      if (buyLinks[j].name === 'Bookshop') {
        bookshopUrl = buyLinks[j].url;
      }
    }
    function makeHTML() {
      if (1 > 2) {
        arrrr.push(renderCard);
      } else {
        arrrr.push(renderCardMobile);
      }
    }

    function renderCard() {
      const cardMarkup = `adsad`;
      return cardMarkup;
    }
    function renderCardMobile() {
      const cardMarkup = `adsad`;
      return cardMarkup;
    }

    // розмітка списку карток
    arrrr.push(`<li class="shopping-carg ${shop._id}" >
    <ul class="card-container">
    <li class="card-container__image">
      <ul>
      <div class="card-container__image-conteiner">
        <li><img src="${shop.book_image}" alt="${shop.title}" /></li>
      </div>
        <li class="card-container__author">${shop.author}</li>
      </ul>
    </li>
    <li class="card-container__book-data">
      <ul class="card-container__meta">
        <li class="meta__title">${shop.title}</li>
        <li class="meta__category">${shop.list_name}</li>
      </ul>
      <ul class="card-container__icons">
        <li>
          <a
            class="shopping-carg-shop"
            href="${amazonUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Іконка Amazon"
          >
            <img src="${bookShops.amazon}" alt="Іконка Amazon" />
          </a>
        </li>
        <li>
          <a
            class="book-shop"
            href="${appleUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Іконка Apple Books"
          >
            <img src="${bookShops.openbook}" alt="Іконка Apple Books" />
          </a>
        </li>
        <li>
          <a
            class="book-shop"
            href="${bookshopUrl}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Іконка Bookshop"
          >
            <img src="${bookShops.bookshop}" alt="Іконка Bookshop" />
          </a>
        </li>
      </ul>
    </li>

    <li class="card-container__desc">${shop.description}</li>
  </ul>
  <ul class="card-container-nm">
  
    <li class="card-container__image-nm">
    <div class="card-container__div_image-nm">
      <img class="margin-img" src="${shop.book_image}" alt="${shop.title}"  height="165"/></li>
    </div>
    </li>
    <li class="card-container__book-data-nm">
      <ul class="card-container__meta-nm">
        <li class="meta__title-nm">${shop.title}</li>
        <li class="meta__category-nm">${shop.list_name}</li>
        <li class="card-container__desc-nm">${shop.description}</li>
        <div class="card-container__futer-nm">
          <p class="card-container__author-nm">${shop.author}</class=>
          <ul class="card-container__icons-nm">
            <li>
              <a
                class="shopping-carg-shop-nm"
                href="${amazonUrl}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Іконка Amazon"
              >
                <img src="${bookShops.amazon}" alt="Іконка Amazon" />
              </a>
            </li>
            <li>
              <a
                class="book-shop"
                href="${appleUrl}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Іконка Apple Books"
              >
                <img src="${bookShops.openbook}" alt="Іконка Apple Books" />
              </a>
            </li>
            <li>
              <a
                class="book-shop"
                href="${bookshopUrl}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Іконка Bookshop"
              >
                <img src="${bookShops.bookshop}" alt="Іконка Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </li>
  </ul>
          <button class="button shopbtn card-delete" data-index="${shop._id}">
            <img src="${bookShops.dump}" alt="" width=26px/>
          </button>
        </li>`);
  }
  // Додавання HTML-коду всіх книжок зі списку до відповідного блоку на стор
  infoBlock.insertAdjacentHTML('afterbegin', arrrr.join(''));

  // видалення книг з масиву по кліку на кнопку
  const buttons = document.querySelectorAll('.shopbtn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.dataset.index;

      var indexID = listID.indexOf(index);
      if (index !== -1) {
        listID.splice(indexID, 1);
      }
      // Оновлюємо значення listId в масиві userName,
      // та перезаписуемо у local storage macuв userName
      userName.listId = listID;

      localStorage.setItem('User-name', JSON.stringify(userName));

      // оновлюємо значення для пагінації

      pagination.reset();
      options.totalItems = listID.length;

      options.visiblePages = Math.ceil(listID.length / 3 - 1);
      pagination = new Pagination(paginationEl, options);
      checkingShoppingListLenght(listID);
    });
  });
}

// очистка сторінки
function clearList() {
  infoBlock.innerHTML = '';
}

// функція створення пустої сторінки
export function createEmptyPage() {
  clearList();
  const emptyPage = `<div class="shopping-emptypage-list">
  <li class="shopping-list-emptypage">
  <p>"This page is empty, add some books and proceed to order."</p>
  <img src="${bookShops.emptypage}" alt="dump button">
  </li>
  </div>`;
  infoBlock.insertAdjacentHTML('afterbegin', emptyPage);
}
