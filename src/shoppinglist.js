import './js/theme-switch';


const infoBlock = document.querySelector('#info-block');

// перевіряємо наявність в local storage масиву книг
// якщо нема то створюємо пустий масив та записуємо його у local storage
if (localStorage.getItem('shoppingList') === null) {
  console.log("5555555")
  let shoppingList = [];
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
} 
// Зчитуємо массив з local storage
const storedArray = localStorage.getItem('shoppingList');
shoppingList = JSON.parse(storedArray);
// ===========================================================================
// Створуємо масив через APi (тимчасово)
localStorage.removeItem('shoppingList');
shoppingList = [];
const fetchArray = fetch('https://books-backend.p.goit.global/books/top-books')
  .then(response => response.json())
  .then(data => {
    data.map(({ books }) => {
      for (let i = 0; i < 2; i++) {
        let book = books[i];
        
        shoppingList.push(book);
      }
    });
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    const storedArray = localStorage.getItem('shoppingList');
    const myArray = JSON.parse(storedArray);
    checkingShoppingListLenght(myArray);
  });
// =================================================

// Перевірка чи не пустий масив
function checkingShoppingListLenght(shoppingList) {
  console.log(shoppingList.length);
  if (shoppingList.length === 0) {
    createEmptyPage();
  } else if (shoppingList.length >= 0) {
    createShoppingListPage(shoppingList);
  }
}
// функція створення пустої сторінки
function createEmptyPage() {
  clearList();
  const emptyPage =
    '<li><p>"This page is empty, add some books and proceed to order."</p><img src="./images/IMG_9606 1.png" alt=""></li>';
  infoBlock.insertAdjacentHTML('afterbegin', emptyPage);
}
// функція створення розмітки списку книг
function createShoppingListPage(shoppingList) {
  clearList();
  let amazonUrl = '';
  let appleUrl = '';
  let bookshopUrl = '';
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
    const listBooks = `<li class="book-card ${shop._id}" >
      <img src="${shop.book_image}" alt="" />
      <div class="info">
        <div class="header-card">
          <div>
            <h2>${shop.title}</h2>
            <p>${shop.list_name}</p>
          </div>
          <button class="button" data-index="${i}">
            <img src="./images/dump.png" alt="" />
          </button>
        </div>
        <p>${shop.description}</p>
        <div class="footer-card">
          <p>${shop.author}</p>
          <ul class="book-shops">
            <li>
              <a
                class="book-shop"
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
    </li>`;
    infoBlock.insertAdjacentHTML('afterbegin', listBooks);
  }
// видалення книг з масиву по кліку на кнопку 
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.dataset.index;
      shoppingList.splice(index, 1);
      localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
      console.log(shoppingList);
      checkingShoppingListLenght(shoppingList);
      });
  });
}
// очистка сторінки
function clearList() {
  infoBlock.innerHTML = '';
}
