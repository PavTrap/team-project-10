const refs = {
  //list: document.querySelector('.container'),
  card: document.createElement('div'),
  categoryField: document.querySelector('.shop-card__category'),
        loadBtn: document.querySelector('load-more'),
        output: document.querySelector(".output"),
        
};
const LOCALSTORAGE_KEY = "selected-category";


function hendelList() {
        let categoriesList = document.querySelectorAll('.categories__item');
        for (item of categoriesList) {
                item.addEventListener('click', e => {
                        localStorage.setItem(LOCALSTORAGE_KEY, e.target.dataset.category);
                });
        }
}

//console.log(LOCALSTORAGE_KEY);
// localStorage.setItem(LOCALSTORAGE_KEY, "Trade Fiction Paperback");
//localStorage.setItem("selected-category", "Series Books");

//------------------Запрос на API
const fetchBook = async () => {       
        const res = await fetch(
                        `https://books-backend.p.goit.global/books/category?category=${localStorage.getItem(
                                LOCALSTORAGE_KEY
                        )}`
                );
        const books = await res.json();
        console.log(books);
        return books;       
};

//fetchBook();
// function updateOutput() {
//         refs.output.textContent = localStorage.getItem(LOCALSTORAGE_KEY);       
// }

function rendeSelectedCategory() {
              
return (refs.card = `  
  <div class='shop-card'>
  <div class='image-block'>
    <img class='image-block__image' src=${data.book_image} />
  </div>
  <div class='shop-card__meta'>
    <div class='shop-card__title'>${data.title}</div>
    <div class='shop-card__author'>${data.author}</div>
  </div
  </div>
  </div>
`);
}
async function renderFetch() {
         //refs.list.innerHTML = '';
//if (localStorage.getItem('selected-category')) {
        let promises = await fetchBook().then(data => {
             console.log(data);
                const result = data.map(value => {
                                console.log(value);
                                return value;
                                
                });
            return result;
             
                });
                //refs.categoryField.innerHTML = refs.category;
        for (data of promises) {
                        refs.output.textContent = localStorage.getItem(LOCALSTORAGE_KEY);  
                        rendeSelectedCategory();
                        refs.categoryField.insertAdjacentHTML('beforeend', refs.card);
                }
      
        hendelList();
  //} 

}
setTimeout(() => renderFetch(), 1000);