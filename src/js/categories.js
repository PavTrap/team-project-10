const refs = {
	categoriesList: document.querySelector('.categories__list'),
};
refs.categoriesList.style.listStyle = 'none';

const fetchArray = fetch('https://books-backend.p.goit.global/books/category-list')
.then(response => response.json())
.then(data => {
	const array = data.map(({ list_name }) => {
	return `<li class = "categories__item"><a href = "" class = "categories__link">${list_name}</a></li>`
	})
	refs.categoriesList.insertAdjacentHTML('beforeend', array.join(''));
	console.log(array)
	return array;
});

