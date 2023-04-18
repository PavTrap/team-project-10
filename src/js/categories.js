export const categoriesList = document.querySelector('.categories__list');

const fetchArray = fetch(
  'https://books-backend.p.goit.global/books/category-list'
)
  .then(response => response.json())
  .then(data => {
    const array = data
      .sort((a, b) => {
        if (a.list_name < b.list_name) {
          return -1;
        } else if (a.list_name > b.list_name) {
          return 1;
        }
        return 0;
      })
      .map(({ list_name }) => {
        return `<li class = "categories__item"><a href = "#" data-category = "${list_name}" class = "categories__link">${list_name}</a></li>`;
      });
    categoriesList.insertAdjacentHTML('beforeend', array.join(''));
    console.log(array);
    return array;
  });
