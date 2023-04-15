//------------------Імпорт пакетів/стилі/шаблонів

//------------------Імпорт пакетів/стилі/шаблонів

//------------------Змінні
const refs = {
  allCategoryContainer: document.querySelector('.bestSellers__container'),
  cardsQuantityByCategory: 1,
  tabletWidth: 768,
  pcWidth: 1440,
};
//------------------Змінні

//------------------Додаткові функції
function checkWindowWidth() {
  return document.documentElement.clientWidth;
}
function reloadPage() {
  let currentRenderWidth = 375;

  addEventListener('resize', event => {
    // if (
    //   (window.innerWidth > 767 && currentRenderWidth < 768) ||
    //   (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
    //   (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
    //   (window.innerWidth < 768 && currentRenderWidth > 767)
    // ) {
    location.reload();
  });
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
  cardsQuantityByCategory = 1;
  if (checkWindowWidth() >= refs.tabletWidth) {
    refs.cardsQuantityByCategory = 3;
  }
  if (checkWindowWidth() >= refs.pcWidth) {
    refs.cardsQuantityByCategory = 5;
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
    <ul class='bestseller-card'>
    <li class='bestseller-card__category'>${obj.list_name}</li>
    <li class='image-block'>
        <img class='image-block__image' src='${obj.book_image}' data-id='${obj._id}'/>
    </li>
    <ul class='bestseller-card__meta'>
      <li class='bestseller-card__title'>${obj.title}</li>
      <li class='bestseller-card__author'>${obj.author}</li>
    </ul
    <li><button class='button' type='button' data-category='${obj.list_name}'>See more</button>
    </li>
    </ul>
  `);
}
function tabletRenderByTop(obj) {
  return (refs.cardMarkup = `
    <ul class='bestseller-card'>
    <li class='image-block'>
    <img class='image-block__image' src='${obj.book_image}' data-id='${obj._id}'/>
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
  return (refs.cardMarkup = `
    <button class='button' type='button' data-category='${category}'>See more</button>
  `);
}
//------------------Шаблон рендера карток

//------------------Фукнція рендера карток
async function renderFetch() {
  promise = await fetchedArrayByTop();
  console.log(promise);
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
reloadPage();
