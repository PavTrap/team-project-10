// // const categories = document.querySelector('.categories-list');
// const url = "https://books-backend.p.goit.global/books/category-list";

// const refs = {
// 	categories: document.querySelector('.categories-list'),
// }

// function createCategories(items){
// 	return items.map(({ list_name }) => {
// 		return `<li><a>${list_name}</a></li>`
// 	})
// }


// function fetchCategories() {
// 	return fetch(url).then(responce => {
// 		// console.log(responce.json());
// 		return responce.json()
// 	})
// };
// fetchCategories()
// .then(renderCategories)
// .catch(error => {console.log(error)})

// function renderCategories () {
// 	const markup = createCategories();
// 	refs.categories.innerHTML = markup;
// };







