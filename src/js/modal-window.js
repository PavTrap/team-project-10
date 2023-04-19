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
const applebooksPic = new URL(
  '../images/shop-icons/applebooks.jpg',
  import.meta.url
);
const bookstore_shopPic = new URL(
  '../images/shop-icons/bookstore.jpg',
  import.meta.url
);

const modalBtnAddRemove = document.querySelector('.pop__btn');
// const modalData = document.getElementById('modal')
const bookInfoURL = document.getElementById('bookInfoUrl');
const bookInfo = document.getElementById('bookInfo');
const bookInform = document.getElementById('bookInform');
const popTextEl = document.querySelector('.pop-text');

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
    bookInform.insertAdjacentHTML(
      'afterbegin',
      `<div>
          <h2 class="modal-card__title">${id.title}</h2>
          <p class="modal-card__author">${id.author}</p>
          <p class="modal-card__description">${
            id.description || 'There is no description'
          }</p>
        </div>`
    );

    // Відобразити модальне вікно
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
    modalBtnAddRemove.removeEventListener('click', buttonHandler, false);
    modal.style.display = 'none';
    bookInfoURL.innerHTML = '';
    bookInfo.innerHTML = '';
    bookInform.innerHTML = '';
    // popTextEl.innerHTML = '';
  };

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modalBtnAddRemove.removeEventListener('click', buttonHandler, false);
      modal.style.display = 'none';
      // modalData.innerHTML = '';
      bookInfoURL.innerHTML = '';
      bookInfo.innerHTML = '';
      bookInform.innerHTML = '';
      // popTextEl.innerHTML = '';
    }
  });

  setHandler();
}

window.onclick = function (event) {
  if (event.target == modal) {
    modalBtnAddRemove.removeEventListener('click', buttonHandler, false);
    modal.style.display = 'none';
    // modalData.innerHTML = '';
    bookInfoURL.innerHTML = '';
    bookInfo.innerHTML = '';
    bookInform.innerHTML = '';
    // popTextEl.innerHTML = '';
  }
};

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modalBtnAddRemove.removeEventListener('click', buttonHandler, false);
    modal.style.display = 'none';
    // modalData.innerHTML = '';
    bookInfoURL.innerHTML = '';
    bookInfo.innerHTML = '';
    bookInform.innerHTML = '';
  }
});
const buttonHandler = function (event) {
  let currentCardId = modalBtnAddRemove.dataset.id;
  let dataFromLocalStorage = localStorage.getItem('User-name');
  let parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);
  let name = parsedDataFromLocalStorage.name;
  let email = parsedDataFromLocalStorage.email;
  console.log('ListId from LocalStorage:', parsedDataFromLocalStorage.listId);
  console.log('CurrentId from Button', currentCardId);
  if (parsedDataFromLocalStorage.listId.indexOf(currentCardId) == -1) {
    parsedDataFromLocalStorage.listId.push(currentCardId);
    localStorage.setItem(
      'User-name',
      JSON.stringify({
        name: name,
        email: email,
        listId: parsedDataFromLocalStorage.listId,
      })
    );
    console.log('Item was added');
    event.target.innerHTML = 'remove from the shopping list';
    popTextEl.innerHTML =
      'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    modalBtnAddRemove.removeEventListener('click', buttonHandler, false);
    modalBtnAddRemove.addEventListener('click', buttonHandler, false);
  } else {
    let filteredArray = parsedDataFromLocalStorage.listId.filter(item => {
      return item != currentCardId;
    });
    localStorage.setItem(
      'User-name',
      JSON.stringify({
        name: name,
        email: email,
        listId: filteredArray,
      })
    );
    console.log('Item was deleted');
    event.target.innerHTML = 'Add to shopping list';
    popTextEl.innerHTML = '';
    modalBtnAddRemove.removeEventListener('click', buttonHandler, false);
    modalBtnAddRemove.addEventListener('click', buttonHandler, false);
  }
};
function setHandler() {
  modalBtnAddRemove.dataset.id = idFromBook;

  if (localStorage.getItem('User-name') == null) {
    localStorage.setItem(
      'User-name',
      JSON.stringify({
        name: 'Not Authorized',
        email: 'Not Authorized',
        listId: [],
      })
    );
  }

  const dataFromLocalStorage = localStorage.getItem('User-name');
  const parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);

  if (parsedDataFromLocalStorage.listId.indexOf(idFromBook) == -1) {
    console.log('ID:', idFromBook, 'not found');
    modalBtnAddRemove.innerHTML = 'Add to shopping list';
    popTextEl.innerHTML = ' ';
  } else {
    console.log('ID:', idFromBook, 'found');
    modalBtnAddRemove.innerHTML = 'remove from the shopping lis';
    popTextEl.innerHTML =
      'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  }

  modalBtnAddRemove.addEventListener('click', buttonHandler, false);
}
