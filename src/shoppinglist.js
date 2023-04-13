const infoBlock = document.querySelector('#info-block');


// let shoppingList = [];

let shoppingList = [
  {
    _id: "642fd89ac8cf5ee957f12361",
    list_name: "Middle Grade Paperback Monthly",    
    amazon_product_url: "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",    
    author: "Barbara O'Connor",
    description: "When we can and cannot trust our intuitions in making business and personal decisions.",
    book_image: "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",    
     
    title: "WISH",    
    buy_links: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
      },
      {
        name: "Apple Books",
        url: "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
      },      
      {
        name: "Bookshop",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
      },      
    ],    
  },
  {
    _id: "642fd89ac8cf5ee957f122df",
    list_name: "Paperback Nonfiction",    
    amazon_product_url: "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20",    
    author: "David Grann",
    book_image: "https://storage.googleapis.com/du-prd/books/images/9780385534246.jpg",    
    book_review_link: "https://www.nytimes.com/2017/04/28/books/review/killers-of-the-flower-moon-david-grann.html",    
    description: "The story of a murder spree in 1920s Oklahoma that targeted Osage Indians, whose lands contained oil. The fledgling F.B.I. intervened, ineffectively.",
    title: "KILLERS OF THE FLOWER MOON",    
    buy_links: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/Killers-Flower-Moon-Osage-Murders/dp/0385534248?tag=NYTBSREV-20"
      },
      {
        name: "Apple Books",
        url: "https://goto.applebooks.apple/9780307742483?at=10lIEQ"
      },
      {
        name: "Bookshop",
        url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780307742483&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DKILLERS%2BOF%2BTHE%2BFLOWER%2BMOON"
      },
    ]
  }
];

checkingShoppingListLenght(shoppingList);

function checkingShoppingListLenght(shoppingList) {
  console.log(shoppingList.length);
  if (shoppingList.length === 0) {
    createEmptyPage();
  } else if (shoppingList.length >= 0) {
    createShoppingListPage(shoppingList);
  }
}

function createEmptyPage() {
  clearList();
  const emptyPage =
    '<li><p>"This page is empty, add some books and proceed to order."</p><img src="./images/IMG_9606 1.png" alt=""></li>';
  infoBlock.insertAdjacentHTML('afterbegin', emptyPage);
}

function createShoppingListPage(shoppingList) {
  clearList();
  let amazonUrl = ''
  let appleUrl = ''
  let bookshopUrl = ''
  for (let i = 0; i < shoppingList.length; i++) {
    const shop = shoppingList[i];
    let buyLinks = shop.buy_links;
    for (let j = 0; j < buyLinks.length; j++) {
      if (buyLinks[j].name === "Amazon") {
        amazonUrl = buyLinks[j].url;      
      }
      if (buyLinks[j].name === "Apple Books") {
        appleUrl = buyLinks[j].url;      
      }
      if (buyLinks[j].name === "Bookshop") {
        bookshopUrl = buyLinks[j].url;      
      }
    }

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

  const buttons = document.querySelectorAll('.button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = button.dataset.index;
      shoppingList.splice(index, 1);
      console.log(shoppingList)
      checkingShoppingListLenght(shoppingList);
      // createShoppingListPage(shoppingList);
    });
  });
}


function clearList() {
  infoBlock.innerHTML = '';
}