!function(){document.querySelector(".foudation__list");var e={categoriesList:document.querySelector(".categories__list")};e.categoriesList.style.listStyle="none";fetch("https://books-backend.p.goit.global/books/category-list").then((function(e){return e.json()})).then((function(t){var o=t.map((function(e){var t=e.list_name;return'<li class = "categories__item"><a href = "" class = "categories__link">'.concat(t,"</a></li>")}));return e.categoriesList.insertAdjacentHTML("beforeend",o.join("")),console.log(o),o}))}();
//# sourceMappingURL=index.59f922bb.js.map
