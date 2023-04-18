let idFromBook;

const fetchUsers = async id => {
  idFromBook = id;

  const response = await fetch(
    `https://books-backend.p.goit.global/books/${id}`
  );
  const users = await response.json();
  console.log(users);
  return users;
};

const amazonPic = new URL('../images/shop-icons/amazon.jpg', import.meta.url);
const applebooksPic = new URL('../images/shop-icons/applebooks.jpg', import.meta.url);
const bookstore_shopPic = new URL('../images/shop-icons/bookstore.jpg', import.meta.url);

const modalBtnAddRemove = document.querySelector('.pop__btn');
const modalData = document.getElementById('modal')
const bookInfoURL = document.getElementById('bookInfoUrl')
const bookInfo = document.getElementById('bookInfo')
const bookInform = document.getElementById('bookInform')

// Функція для відкриття модального вікна та заповнення його даними з API
export function openModal(id) {

  const bookId = fetchUsers(id);
  bookId.then(id => {
    bookInfo.insertAdjacentHTML(
      'afterbegin',
      `<li ${id._id}" >
        <div class="modal-card__flex">
          <div class="modal-card">
          <img class="modal-card__image" src="${id.book_image}" alt="" />
          
        </div>
        
        </div>
      </li>`
    );
    bookInform.insertAdjacentHTML('afterbegin', `<div>
          <h2 class="modal-card__title">${id.title}</h2>
          <p class="modal-card__author">${id.author}</p>
          <p class="modal-card__description">${id.description || 'There is no description'}</p>
        </div>`)

    id.buy_links.map(el => {
      if (el.name === 'Amazon') {
        bookInfoURL.insertAdjacentHTML(
          'beforeend',
          `<li class="pop_shop-item">
                            <a
                            class="pop_shop__link link"
                            href="${el.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><img
                                class="modal_list-img"
                                src="${amazonPic}" 
                                alt="amazon_shop_icon"/>
                            </a>
                        </li>`
        );
      }
      if (el.name === 'Apple Books') {
        bookInfoURL.insertAdjacentHTML(
          'beforeend',
          `<li class="pop_shop-item">
                    <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                        class="pop_list-img"
                        src="${applebooksPic}" 
                        alt="applebooks_shop_icon"
                    />
                    </a>
                </li>`
        );
      }
      if (el.name === 'Bookshop') {
        bookInfoURL.insertAdjacentHTML(
          'beforeend',
          `<li class="pop_shop-item">
                    <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                        class="pop_list-img"
                        src="${bookstore_shopPic}" 
                        alt="bookstore_shop_icon"
                    />
                    </a>
                    </li>
                    `
        );
      }
    });
  });

  // Відобразити модальне вікно
  modal.style.display = 'block';

  // Додати обробник події на кнопку закриття модального вікна
  const closeButton = document.getElementsByClassName('modal-btn')[0];
  closeButton.onclick = function () {
    modal.style.display = 'none';
    bookInfo.innerHTML = '';
    // bookInfoURL.innerHTML = '';
    bookInform.innerHTML = '';
  };
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    // modalData.innerHTML = '';
    bookInfo.innerHTML = '';
    // bookInfoURL.innerHTML = '';
    bookInform.innerHTML = '';
  }
};

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    // modalData.innerHTML = '';
    bookInfo.innerHTML = '';
    // bookInfoURL.innerHTML = '';
    bookInform.innerHTML = '';
  }
});

modalBtnAddRemove.addEventListener('click', event => {
  const dataFromLocalStorage = localStorage.getItem('User-name');
  const parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);
  console.log(parsedDataFromLocalStorage.listId);
  parsedDataFromLocalStorage.listId.push(idFromBook);
  localStorage.setItem(
    'User-name',
    JSON.stringify({ listId: parsedDataFromLocalStorage.listId })
  );
});
