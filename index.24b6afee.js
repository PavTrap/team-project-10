!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("9Di7p"),o("i8Q71");var a=document.querySelector(".modal-start"),c=document.querySelector(".backdrop-start"),l=document.querySelector('label[for="user_person"]');console.log(l);var s=document.querySelector("#user_person");console.log(s);var i=document.querySelector('label[for="user_email"]'),u=document.querySelector("#user_email"),d=document.querySelector('label[for="user_password"]'),p=document.querySelector("#user_password");s.addEventListener("focus",(function(e){return console.log(l.style.top="5%")})),u.addEventListener("focus",(function(e){return console.log(i.style.top="5%")})),p.addEventListener("focus",(function(e){return console.log(d.style.top="5%")})),a.addEventListener("submit",(function(e){e.preventDefault(),function(){var e=!0;return""===s.value.trim()?(s.classList.add("modal-form__field-input--error"),e=!1):s.classList.remove("modal-form__field-input--error"),""!==u.value.trim()&&u.checkValidity()?u.classList.remove("modal-form__field-input--error"):(u.classList.add("modal-form__field-input--error"),e=!1),""===p.value.trim()||p.length<5||p.value.length>12?(p.classList.add("modal-form__field-input--error"),e=!1):p.classList.remove("modal-form__field-input--error"),e}()?(console.log("Form send!"),c.classList.add("is-hidden-start"),c.style.display="none"):console.log("Error!")})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&(a.style.display="none",c.style.display="none")})),function(){var e={openModalBtn:document.querySelector("button[data-modal-start-open--sing-up]"),closeModalBtn:document.querySelector("button[data-modal-start-close]"),modal:document.querySelector("[data-modal-start]")};function t(){e.modal.classList.toggle("is-hidden-start")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),o("5xh86"),o("7ghbD"),o("6mUVg");var f=o("bpxeT"),m=o("2TvXO");function y(e){return cardMarkup="\n      <ul class='bestseller-card'>\n      <div class = 'thumb'>\n         <img class='thumb__image' src='".concat(e.book_image,"' data-id='").concat(e._id,"'/>\n      <div class=\"thumb__overlay\">\n              <p class=\"thumb__overlay-tex\">QUICK VIEW</p>\n            </div> </div>\n      </li>\n      <ul class='bestseller-card__meta'>\n        <li class='bestseller-card__title'>").concat(e.title,"</li>\n        <li class='bestseller-card__author'>").concat(e.author,"</li>\n      </ul\n      \n      </li>\n      </ul>\n    ")}function g(e){return cardMarkup="\n      <ul class='bestseller-card --margin'>\n      <div class = 'thumb'>\n         <img class='thumb__image' src='".concat(e.book_image,"' data-id='").concat(e._id,"'/>\n      <div class=\"thumb__overlay\">\n              <p class=\"thumb__overlay-text\">QUICK VIEW</p>\n            </div> </div>\n      </li>\n      <ul class='bestseller-card__meta'>\n        <li class='bestseller-card__title'>").concat(e.title,"</li>\n        <li class='bestseller-card__author'>").concat(e.author,"</li>\n      </ul\n      \n      </li>\n      </ul>\n    ")}function b(e){return cardMarkup="\n    <button class='button__see-more' type='button' data-category='".concat(e,"'>See more</button>\n  ")}function h(){var e=document.querySelectorAll(".thumb__image"),t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)image=o.value,image.addEventListener("click",(function(e){console.log("dasdsadsa:",e.target.dataset.id),e.target.dataset.id,modal.style.display="block",document.getElementsByClassName("close")[0].onclick=function(){modal.style.display="none"},document.getElementById("bookInfo").insertAdjacentHTML("beforeend","\n\n        <div class='pop_wrapper'>\n        <h2 class=\"pop_name\">\n        ".concat(e.target.dataset.title,'\n        </h2>\n        <p class="pop_author">hello</p>\n        <p class="pop_description">\n        \n        </p>\n        <ul class="pop_shop list"></ul>\n        </div>'))}))}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}window.onclick=function(e){e.target==modal&&(modal.style.display="none")},window.addEventListener("keydown",(function(e){"Escape"===e.key&&(modal.style.display="none")}));var v={allCategoryContainer:document.querySelector(".bestSellers__container"),bestsellerContainer:document.querySelector(".bestSellers"),sectionTitle:document.querySelector(".section-title"),cardsQuantityByCategory:1,tabletWidth:768,pcWidth:1440};function _(e){var t=e.split(" "),n=e.substr(t[0].length);return'<span class="section-title">'.concat(t[0],"</span>\n  <span class='section-title--highlight'>").concat(n,"</span>")}function k(){return!(!localStorage.getItem("selected-category")||"undefined"==localStorage.getItem("selected-category"))}function w(){return document.documentElement.clientWidth}function L(){var e=document.querySelectorAll(".button__see-more"),t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)button=o.value,button.addEventListener("click",(function(e){localStorage.setItem("selected-category",e.target.dataset.category),console.log("Вибрана категорія:",localStorage.getItem("selected-category")),A()}))}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}function S(){var e=document.querySelectorAll(".categories__item"),t=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)link=o.value,link.addEventListener("click",(function(e){console.log(e.target),localStorage.setItem("selected-category",e.target.dataset.category),console.log("Вибрана категорія:",localStorage.getItem("selected-category")),A()}))}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}var C,x,E=(C=e(f)(e(m).mark((function t(){var n,r,o,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k()){e.next=10;break}return e.next=3,fetch("https://books-backend.p.goit.global/books/category?category=".concat(localStorage.getItem("selected-category")));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.next=12,fetch("https://books-backend.p.goit.global/books/top-books");case 12:return o=e.sent,e.next=15,o.json();case 15:return a=e.sent,e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)}))),function(){return C.apply(this,arguments)}),M=function(){var t=e(f)(e(m).mark((function t(){var n,r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(cardsQuantityByCategory=1,w()>=v.tabletWidth&&(v.cardsQuantityByCategory=3),w()>=v.pcWidth&&(v.cardsQuantityByCategory=5),!k()){e.next=10;break}return e.next=6,E().then((function(e){return e.map((function(e){return e}))}));case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.next=12,E().then((function(e){return e.map((function(e){return e.books.filter((function(e){return e.rank<=v.cardsQuantityByCategory}))}))}));case 12:return r=e.sent,e.abrupt("return",r);case 14:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function T(){return q.apply(this,arguments)}function q(){return(q=e(f)(e(m).mark((function t(){var n,r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:for(promise=e.sent,v.sectionTitle.innerHTML="",v.sectionTitle.insertAdjacentHTML("afterbegin",'<span>BestSellers<span><span class="section-title--highlight">Books</span>'),r=0;r<promise.length;r++)categoryContainer=document.createElement("div"),categoryContainer.classList.add("category-container"),promise[r].map((function(e){n=e.list_name,y(e),categoryContainer.insertAdjacentHTML("beforeend",cardMarkup)})),categoryContainer.insertAdjacentHTML("afterbegin",'<h3 class="category-title">'.concat(n,"</h3>")),categoryContainer.insertAdjacentHTML("beforeend",b(n)),v.allCategoryContainer.insertAdjacentElement("beforeend",categoryContainer);L(),h(),S();case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(){return B.apply(this,arguments)}function B(){return(B=e(f)(e(m).mark((function t(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:for(promise=e.sent,categoryContainer=document.createElement("div"),categoryContainer.classList.add("category-container"),n=0;n<promise.length;n++)g(promise[n]),categoryContainer.insertAdjacentHTML("beforeend",cardMarkup);v.allCategoryContainer.insertAdjacentElement("beforeend",categoryContainer),L(),h(),S();case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(){return j.apply(this,arguments)}function j(){return(j=e(f)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.allCategoryContainer.innerHTML="",k()?(v.sectionTitle.innerHTML="",v.sectionTitle.insertAdjacentHTML("afterbegin",_(localStorage.getItem("selected-category"))),I()):T();case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}A(),x=w()<768?375:w()>=768&&w()<1440?768:1440,addEventListener("resize",(function(e){(window.innerWidth>767&&x<768||window.innerWidth>1439&&x<1440||window.innerWidth<1440&&x>1439||window.innerWidth<768&&x>767)&&location.reload()})),o("6CkMP"),o("c01wF")}();
//# sourceMappingURL=index.24b6afee.js.map
