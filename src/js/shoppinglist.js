import './theme-switch';
// const infoBlock = document.querySelector('#info-block');
// // задаємо масив ідентифікаторів для використання в пагінації та зберігаємо його в local storage
// let listID = [
//   '643282b1e85766588626a080',
//   '643282b1e85766588626a0ba',
//   '643282b1e85766588626a085',
//   '643282b1e85766588626a0b2',
//   '643282b1e85766588626a086',
//   // '643282b1e85766588626a0b4',
//   // '643282b1e85766588626a087',
//   // '643282b1e85766588626a0b6',
//   // '643282b1e85766588626a081',
//   '643282b1e85766588626a0aa',
//   '643282b1e85766588626a07a',
//   '643282b1e85766588626a0a8',
//   '643282b1e85766588626a07b',
//   '643282b1e85766588626a0a6',
//   '643282b1e85766588626a088',
//   '643282b1e85766588626a0b8',
//   // '643282b1e85766588626a07c',
//   // '643282b1e85766588626a0a0',
//   // '643282b1e85766588626a07d',
//   // '643282b1e85766588626a0a2',
//   // '643282b1e85766588626a089',
//   // '643282b1e85766588626a0bc',
//   // '643282b1e85766588626a08a',
//   // '643282b2e85766588626a0de',
//   // '643282b1e85766588626a07f',
//   // '643282b1e85766588626a0be',
//   // '643282b1e85766588626a082',
//   // '643282b1e85766588626a0ac',
//   // '643282b1e85766588626a083',
//   // '643282b1e85766588626a0ae',
//   // '643282b1e85766588626a07e',
//   // '643282b1e85766588626a0a4',
//   // '643282b1e85766588626a084',
//   // '643282b1e85766588626a0b0',
//   // '643282b1e85766588626a08b',
//   // '643282b1e85766588626a0da',
// ];
// localStorage.setItem('listID', JSON.stringify(listID));

// // Перевірка наявності масиву listID в local storage
// if (localStorage.getItem('listID') === null) {
//   let listID = [];
//   localStorage.setItem('listID', JSON.stringify(listID));
// }

// // Зчитуємо массив з local storage
// const storeArray = localStorage.getItem('listID');
// listID = JSON.parse(storeArray);

// // Перевірка довжини масиву listID і виведення відповідного контенту на сторінку
// checkingShoppingListLenght(listID);

// function checkingShoppingListLenght(listID) {
//   // Якщо listID порожній, то приховуємо пагінацію і створюємо порожню сторінку
//   if (listID.length === 0) {
//     createEmptyPage();
//   } else if (listID.length > 0) {

//     // Якщо listID не порожній

//     const fetchID = async () => {
//       try {
//         const shoppingList = await fetchBooks(listID);

//         createShoppingListPage(shoppingList);
//         console.log(shoppingList);
//       } catch (error) {
//         console.log(error.message);

//       }
//     };

//     fetchID();
//   }
// }
// // Асинхронна функція для отримання книг з серверу
// // Приймає номер сторінки (по замовчуванню 1)
// // Обчислює індекс першої та останньої книги на сторінці
// // Звертається до серверу за даними кожної книги і повертає масив промісів
// // Використовує Promise.all() для очікування результатів всіх промісів та повертає масив книг
// async function fetchBooks(listID) {
//   console.log(listID)
//   const arrayOfPromises = listID.map(async book => {
//     const response = await fetch(
//       `https://books-backend.p.goit.global/books/${book}`
//     );
//     return response.json();
//   });
//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// // Функція для створення списку книжок на сторінці корзини покупок
// function createShoppingListPage(shoppingList) {
//   clearList(); // Очистка списку перед створенням нових елементів

//   let amazonUrl = ''; // Посилання на Amazon
//   let appleUrl = ''; // Посилання на Apple Books
//   let bookshopUrl = ''; // Посилання на Bookshop

//   const arrrr = []; // Масив для збереження HTML-коду кожної книжки зі списку

//   for (let i = 0; i < shoppingList.length; i++) {
//     const shop = shoppingList[i];
//     let buyLinks = shop.buy_links;
//     for (let j = 0; j < buyLinks.length; j++) {
//       if (buyLinks[j].name === 'Amazon') {
//         amazonUrl = buyLinks[j].url;
//       }
//       if (buyLinks[j].name === 'Apple Books') {
//         appleUrl = buyLinks[j].url;
//       }
//       if (buyLinks[j].name === 'Bookshop') {
//         bookshopUrl = buyLinks[j].url;
//       }
//     }

//     // розмітка списку карток
//     arrrr.push(`<li class="shopping-carg ${shop._id}" >
//       <img class="shopping-carg-image" src="${shop.book_image}" alt="" />
//       <div class="">
//         <div class="">
//           <div>
//             <h2 class="shopping-carg-book-title">${shop.title}</h2>
//             <p class="shopping-carg-book-categorie">${shop.list_name}</p>
//           </div>
//           <button class="button card-delete" data-index="${shop._id}">
//             <img src="./image/shoppinglist/dump.png" alt="" />
//           </button>
//         </div>
//         <p class="shopping-carg-book-description">${shop.description}</p>
//         <div class="footer-card">
//           <p class="shopping-carg-book-author">${shop.author}</p>
//           <ul class="shopping-carg-shops">
//             <li>
//               <a
//                 class="shopping-carg-shop"
//                 href="${amazonUrl}"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Іконка Amazon"
//               >
//                 <img src="./images/amazon.png" alt="Іконка Amazon" />
//               </a>
//             </li>
//             <li>
//               <a
//                 class="book-shop"
//                 href="${appleUrl}"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Іконка Apple Books"
//               >
//                 <img src="./images/openbook.png" alt="Іконка Apple Books" />
//               </a>
//             </li>
//             <li>
//               <a
//                 class="book-shop"
//                 href="${bookshopUrl}"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Іконка Bookshop"
//               >
//                 <img src="./images/bookshop.png" alt="Іконка Bookshop" />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </li>`);
//   }
//   // Додавання HTML-коду всіх книжок зі списку до відповідного блоку на стор
//   infoBlock.insertAdjacentHTML('afterbegin', arrrr.join(''));

//   // видалення книг з масиву по кліку на кнопку
//   const buttons = document.querySelectorAll('.button');
//   buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       const index = button.dataset.index;

//       var indexID = listID.indexOf(index);
//       if (index !== -1) {
//         listID.splice(indexID, 1);
//       }

//       localStorage.setItem('listID', JSON.stringify(listID));
//       // оновлюємо значення для пагінації

//       checkingShoppingListLenght(listID);
//     });
//   });
// }

// // очистка сторінки
// function clearList() {
//   infoBlock.innerHTML = '';
// }

// // функція створення пустої сторінки
// function createEmptyPage() {
//   clearList();
//   const emptyPage =
//     '<li><p>"This page is empty, add some books and proceed to order."</p><img src="./image/shoppinglist/emptypage.png" alt=""></li>';
//   infoBlock.insertAdjacentHTML('afterbegin', emptyPage);
// }


// імпортуємо Pagination та стилі з бібліотеки 'tui-pagination'
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// знаходимо контейнер для пагінації та елемент для відображення інформації
const paginationEl = document.querySelector('#tui-pagination-container');
const infoBlock = document.querySelector('#info-block');
// задаємо масив ідентифікаторів для використання в пагінації та зберігаємо його в local storage
let listID = [
  '643282b1e85766588626a080',
  '643282b1e85766588626a0ba',
  '643282b1e85766588626a085',
  '643282b1e85766588626a0b2',
  '643282b1e85766588626a086',
  '643282b1e85766588626a0b4',
  '643282b1e85766588626a087',
  '643282b1e85766588626a0b6',
  '643282b1e85766588626a081',
  '643282b1e85766588626a0aa',
  '643282b1e85766588626a07a',
  '643282b1e85766588626a0a8',
  '643282b1e85766588626a07b',
  '643282b1e85766588626a0a6',
  '643282b1e85766588626a088',
  '643282b1e85766588626a0b8',
  '643282b1e85766588626a07c',
  '643282b1e85766588626a0a0',
  '643282b1e85766588626a07d',
  '643282b1e85766588626a0a2',
  '643282b1e85766588626a089',
  '643282b1e85766588626a0bc',
  '643282b1e85766588626a08a',
  '643282b2e85766588626a0de',
  '643282b1e85766588626a07f',
  '643282b1e85766588626a0be',
  '643282b1e85766588626a082',
  '643282b1e85766588626a0ac',
  '643282b1e85766588626a083',
  '643282b1e85766588626a0ae',
  '643282b1e85766588626a07e',
  '643282b1e85766588626a0a4',
  '643282b1e85766588626a084',
  '643282b1e85766588626a0b0',
  '643282b1e85766588626a08b',
  '643282b1e85766588626a0da',
];
localStorage.setItem('listID', JSON.stringify(listID));

// Перевірка наявності масиву listID в local storage
if (localStorage.getItem('listID') === null) {
  let listID = [];
  localStorage.setItem('listID', JSON.stringify(listID));
}

// Зчитуємо массив з local storage
const storeArray = localStorage.getItem('listID');
listID = JSON.parse(storeArray);

// Налаштування параметрів для бібліотеки Pagination
let options = {
  totalItems: listID.length, // загальна кількість елементів у списку
  itemsPerPage: 3, // кількість елементів, що будуть відображатись на одній сторінці
  visiblePages: Math.ceil(listID.length / 3 - 1), // кількість видимих сторінок
  centerAlign: true, // вирівнювання по центру
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
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
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

    // розмітка списку карток
    arrrr.push(`<li class="shopping-carg ${shop._id}" >
      <img class="shopping-carg-image" src="${shop.book_image}" alt="" />
      <div class="">
        <div class="">
          <div>
            <h2 class="shopping-carg-book-title">${shop.title}</h2>
            <p class="shopping-carg-book-categorie">${shop.list_name}</p>
          </div>
          <button class="button shopbtn card-delete" data-index="${shop._id}">
            <img src="./image/shoppinglist/dump.png" alt="" />
          </button>
        </div>
        <p class="shopping-carg-book-description">${shop.description}</p>
        <div class="footer-card">
          <p class="shopping-carg-book-author">${shop.author}</p>
          <ul class="shopping-carg-shops">
            <li>
              <a
                class="shopping-carg-shop"
                href="${amazonUrl}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Іконка Amazon"
              >
                <img src="./images/amazon.png" alt="Іконка Amazon" />
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
                <img src="./images/openbook.png" alt="Іконка Apple Books" />
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
                <img src="./images/bookshop.png" alt="Іконка Bookshop" />
              </a>
            </li>
          </ul>
        </div>
      </div>
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

      localStorage.setItem('listID', JSON.stringify(listID));
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
function createEmptyPage() {
  clearList();
  const emptyPage =
    '<li><p>"This page is empty, add some books and proceed to order."</p><img src="./image/shoppinglist/emptypage.png" alt=""></li>';
  infoBlock.insertAdjacentHTML('afterbegin', emptyPage);
}