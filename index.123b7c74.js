var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);const o={categoriesList:document.querySelector(".categories__list")};fetch("https://books-backend.p.goit.global/books/category-list").then((e=>e.json())).then((e=>{const t=e.map((({list_name:e})=>`<li class = "categories__item"><a href = "#" data-category = "${e}" class = "categories__link">${e}</a></li>`));return o.categoriesList.insertAdjacentHTML("beforeend",t.join("")),console.log(t),t}));function r(){modal.style.display="block";document.getElementsByClassName("close")[0].onclick=function(){modal.style.display="none"}}function l(e){return cardMarkup=`\n      <ul class='bestseller-card'>\n      <div class = 'thumb'>\n         <img class='thumb__image' src='${e.book_image}' data-id='${e._id}'/>\n      <div class="thumb__overlay">\n              <p class="thumb__overlay-tex">QUICK VIEW</p>\n            </div> </div>\n      </li>\n      <ul class='bestseller-card__meta'>\n        <li class='bestseller-card__title'>${e.title}</li>\n        <li class='bestseller-card__author'>${e.author}</li>\n      </ul\n      \n      </li>\n      </ul>\n    `}function s(){let e=document.querySelectorAll(".thumb__image");for(image of e)image.addEventListener("click",(e=>{console.log("dasdsadsa:",e.target.dataset.id),r(e.target.dataset.id);document.getElementById("bookInfo").insertAdjacentHTML("beforeend",`\n\n        <div class='pop_wrapper'>\n        <h2 class="pop_name">\n        ${e.target.dataset.title}\n        </h2>\n        <p class="pop_author">hello</p>\n        <p class="pop_description">\n        \n        </p>\n        <ul class="pop_shop list"></ul>\n        </div>`)}))}a("bUb57"),a("ggeWI"),a("arj0A"),a("fF5e9"),a("lsbs5"),a("i9TW1"),window.onclick=function(e){e.target==modal&&(modal.style.display="none")},window.addEventListener("keydown",(e=>{"Escape"===e.key&&(modal.style.display="none")}));const i={allCategoryContainer:document.querySelector(".bestSellers__container"),bestsellerContainer:document.querySelector(".bestSellers"),sectionTitle:document.querySelector(".section-title"),cardsQuantityByCategory:1,tabletWidth:768,pcWidth:1440};function c(){return!(!localStorage.getItem("selected-category")||"undefined"==localStorage.getItem("selected-category"))}function d(){return document.documentElement.clientWidth}function g(){let e=document.querySelectorAll(".button__see-more");for(button of e)button.addEventListener("click",(e=>{localStorage.setItem("selected-category",e.target.dataset.category),console.log("Вибрана категорія:",localStorage.getItem("selected-category")),p()}))}function u(){let e=document.querySelectorAll(".categories__item");for(link of e)link.addEventListener("click",(e=>{console.log(e.target),localStorage.setItem("selected-category",e.target.dataset.category),console.log("Вибрана категорія:",localStorage.getItem("selected-category")),p()}))}const y=async()=>{if(c()){const e=await fetch(`https://books-backend.p.goit.global/books/category?category=${localStorage.getItem("selected-category")}`);return await e.json()}{const e=await fetch("https://books-backend.p.goit.global/books/top-books");return await e.json()}},m=async()=>{if(cardsQuantityByCategory=1,d()>=i.tabletWidth&&(i.cardsQuantityByCategory=3),d()>=i.pcWidth&&(i.cardsQuantityByCategory=5),c()){return await y().then((e=>e.map((e=>e))))}return await y().then((e=>e.map((e=>e.books.filter((e=>e.rank<=i.cardsQuantityByCategory))))))};async function p(){i.allCategoryContainer.innerHTML="",c()?(i.sectionTitle.innerHTML="",i.sectionTitle.insertAdjacentHTML("afterbegin",function(e){let t=e.split(" "),n=e.substr(t[0].length);return`<span class="section-title">${t[0]}</span>\n  <span class='section-title--highlight'>${n}</span>`}(localStorage.getItem("selected-category"))),async function(){promise=await m(),categoryContainer=document.createElement("div"),categoryContainer.classList.add("category-container");for(let t=0;t<promise.length;t++)e=promise[t],cardMarkup=`\n      <ul class='bestseller-card --margin'>\n      <div class = 'thumb'>\n         <img class='thumb__image' src='${e.book_image}' data-id='${e._id}'/>\n      <div class="thumb__overlay">\n              <p class="thumb__overlay-text">QUICK VIEW</p>\n            </div> </div>\n      </li>\n      <ul class='bestseller-card__meta'>\n        <li class='bestseller-card__title'>${e.title}</li>\n        <li class='bestseller-card__author'>${e.author}</li>\n      </ul\n      \n      </li>\n      </ul>\n    `,categoryContainer.insertAdjacentHTML("beforeend",cardMarkup);var e;i.allCategoryContainer.insertAdjacentElement("beforeend",categoryContainer),g(),s(),u()}()):async function(){let e;promise=await m(),i.sectionTitle.innerHTML="",i.sectionTitle.insertAdjacentHTML("afterbegin",'<span>BestSellers<span><span class="section-title--highlight">Books</span>');for(let t=0;t<promise.length;t++)categoryContainer=document.createElement("div"),categoryContainer.classList.add("category-container"),promise[t].map((t=>{e=t.list_name,l(t),categoryContainer.insertAdjacentHTML("beforeend",cardMarkup)})),categoryContainer.insertAdjacentHTML("afterbegin",`<h3 class="category-title">${e}</h3>`),categoryContainer.insertAdjacentHTML("beforeend",cardMarkup=`\n    <button class='button__see-more' type='button' data-category='${e}'>See more</button>\n  `),i.allCategoryContainer.insertAdjacentElement("beforeend",categoryContainer);g(),s(),u()}()}p(),function(){let e;e=d()<768?375:d()>=768&&d()<1440?768:1440,addEventListener("resize",(t=>{(window.innerWidth>767&&e<768||window.innerWidth>1439&&e<1440||window.innerWidth<1440&&e>1439||window.innerWidth<768&&e>767)&&location.reload()}))}(),a("2ix2C"),a("lJ5oQ");
//# sourceMappingURL=index.123b7c74.js.map
