!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},r.parcelRequired7c6=a),a.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var a={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)a[e[r]]=t[e[r]]},o=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function a(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return a(t[2])}return"/"}(),o[t]=e),e}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.9eadb105.js","clTl7":"Save_children-2x.688b6dc7.png","ipbLd":"project-hope2x.5ac714fa.png","bxxb0":"imc-2x.2c438457.png","BQZ39":"msf-2x.89950815.png","a5gRF":"razom-2x.49347143.png","8iBVP":"AAH-2x.b350b402.png","bN0o1":"united-2x.d41967f5.png","cNwvV":"world-vision-2x.39ac4395.png","SOdyB":"prytula-2x.b3afcdef.png"}'));var i={categoriesList:document.querySelector(".categories__list")};i.categoriesList.style.listStyle="none";fetch("https://books-backend.p.goit.global/books/category-list").then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){var e=t.list_name;return'<li class = "categories__item"><a href = "" data-category = "'.concat(e,'" class = "categories__link">').concat(e,"</a></li>")}));return i.categoriesList.insertAdjacentHTML("beforeend",e.join("")),console.log(e),e}));var c=document.querySelector(".modal-start"),l=document.querySelector(".backdrop-start"),u=document.querySelector('label[for="user_person"]');console.log(u);var s=document.querySelector("#user_person");console.log(s);var d=document.querySelector('label[for="user_email"]'),f=document.querySelector("#user_email"),h=document.querySelector('label[for="user_password"]'),g=document.querySelector("#user_password");s.addEventListener("focus",(function(t){return console.log(u.style.top="5%")})),f.addEventListener("focus",(function(t){return console.log(d.style.top="5%")})),g.addEventListener("focus",(function(t){return console.log(h.style.top="5%")})),c.addEventListener("submit",(function(t){t.preventDefault(),function(){var t=!0;return""===s.value.trim()?(s.classList.add("modal-form__field-input--error"),t=!1):s.classList.remove("modal-form__field-input--error"),""!==f.value.trim()&&f.checkValidity()?f.classList.remove("modal-form__field-input--error"):(f.classList.add("modal-form__field-input--error"),t=!1),""===g.value.trim()||g.length<5||g.value.length>12?(g.classList.add("modal-form__field-input--error"),t=!1):g.classList.remove("modal-form__field-input--error"),t}()?(console.log("Form send!"),l.classList.add("is-hidden-start"),l.style.display="none"):console.log("Error!")})),window.addEventListener("keydown",(function(t){"Escape"===t.key&&(c.style.display="none",l.style.display="none")})),function(){var t={openModalBtn:document.querySelector("button[data-modal-start-open--sing-up]"),closeModalBtn:document.querySelector("button[data-modal-start-close]"),modal:document.querySelector("[data-modal-start]")};function e(){t.modal.classList.toggle("is-hidden-start")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)}(),function(){var t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};function e(){t.menu.classList.toggle("mobile-is-hidden"),t.body.classList.toggle("no-scroll")}t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e)}();var p;p=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("clTl7");var m;m=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ipbLd");var y;y=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bxxb0");var v;v=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("BQZ39");var b;b=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("a5gRF");var _;_=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8iBVP");var w;w=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("bN0o1");var L;L=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("cNwvV");var E;E=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("SOdyB");var S=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(p)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(m)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(y)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(v)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(b)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(_)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(w)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(L)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(E)}];document.querySelector(".foundation__list").innerHTML=S.map((function(t,e){var r=t.title,n=t.url,o=t.img,a=(e+1).toString().padStart(2,"0");return"<li class= 'foundation__item'> \n        <p class = \"foundation__count\"> ".concat(a,' </p>\n        <a href="').concat(n,'" "foundation__link">\n        <img class="foundation__img" src="').concat(o,'" alt="').concat(r,'" width=110 height=33>\n        </a>\n        </li>')})).join("");var k=document.querySelector(".foundation__btn"),x=document.querySelectorAll(".foundation__item");k.addEventListener("click",(function(){H?(q-=3)<0&&(q=0,H=!1,k.querySelector(".btnLoadMore__icon").style.transform=""):(q+=3)>=x.length&&(q=x.length-2,H=!0,k.querySelector(".btnLoadMore__icon").style.transform="rotate(270deg)");x.forEach((function(t){t.style.transform="translateY(-".concat(40*q,"px)")}))}));var q=0,H=!1;var O={};function R(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}Object.defineProperty(O,"__esModule",{value:!0}),O.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){R(a,n,o,i,c,"next",t)}function c(t){R(a,n,o,i,c,"throw",t)}i(void 0)}))}};var j={},C=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new H(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=s(t,e,r);if("normal"===l.type){if(n=r.done?g:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=g,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",g="completed",p={};function m(){}function y(){}function v(){}var b={};l(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var L=v.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function H(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:R}}function R(){return{value:e,done:!0}}return y.prototype=v,l(L,"constructor",v),l(v,"constructor",y),y.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(S.prototype),l(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),l(L,c,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,H.prototype={constructor:H,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(j);try{regeneratorRuntime=C}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=C:Function("r","regeneratorRuntime = r")(C)}var N={allCategoryContainer:document.querySelector(".bestSellers__container"),cardsQuantityByCategory:1,tabletWidth:768};function M(){return document.documentElement.clientWidth}function B(){var t=document.querySelectorAll(".button"),e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0)button=o.value,button.addEventListener("click",(function(t){localStorage.setItem("selected-category",t.target.dataset.category),console.log("Вибрана категорія:",localStorage.getItem("selected-category"))}))}catch(t){r=!0,n=t}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}}function A(){var t=document.querySelectorAll(".image-block__image"),e=!0,r=!1,n=void 0;try{for(var o,a=t[Symbol.iterator]();!(e=(o=a.next()).done);e=!0)image=o.value,image.addEventListener("click",(function(t){localStorage.setItem("selected-id",t.target.dataset.id),console.log("Вибрана книга з ID:",localStorage.getItem("selected-id"))}))}catch(t){r=!0,n=t}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}}var F,U=(F=e(O)(e(j).mark((function t(){var r,n;return e(j).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://books-backend.p.goit.global/books/top-books");case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)}))),function(){return F.apply(this,arguments)}),I=function(){var t=e(O)(e(j).mark((function t(){var r;return e(j).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return M()>=N.tabletWidth&&(N.cardsQuantityByCategory=3),t.next=3,U().then((function(t){return t.map((function(t){return t.books.filter((function(t){return t.rank<=N.cardsQuantityByCategory}))}))}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function T(t){return N.cardMarkup="\n    <ul class='shop-card'>\n    <li class='shop-card__category'>".concat(t.list_name,"</li>\n    <li class='image-block'>\n        <img class='image-block__image' src='").concat(t.book_image,"' data-id='").concat(t._id,"'/>\n    </li>\n    <ul class='shop-card__meta'>\n      <li class='shop-card__title'>").concat(t.title,"</li>\n      <li class='shop-card__author'>").concat(t.author,"</li>\n    </ul\n    <li><button class='button' type='button' data-category='").concat(t.list_name,"'>See more</button>\n    </li>\n    </ul>\n  ")}function P(t){return N.cardMarkup="\n    <ul class='shop-card'>\n    <li class='image-block'>\n    <img class='image-block__image' src='".concat(t.book_image,"' data-id='").concat(t._id,"'/>\n    </li>\n    <ul class='shop-card__meta'>\n      <li class='shop-card__title'>").concat(t.title,"</li>\n      <li class='shop-card__author'>").concat(t.author,"</li>\n    </ul\n    \n    </li>\n    </ul>\n  ")}function V(t){return N.cardMarkup="\n    <button class='button' type='button' data-category='".concat(t,"'>See more</button>\n  ")}function J(){return(J=e(O)(e(j).mark((function t(){var r,n;return e(j).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I();case 2:for(promise=t.sent,r=0;r<promise.length;r++)categoryContainer=document.createElement("div"),categoryContainer.classList.add("category-container"),promise[r].map((function(t){n=t.list_name,M()>=N.tabletWidth?(P(t),categoryContainer.insertAdjacentHTML("beforeend",N.cardMarkup)):(T(t),categoryContainer.insertAdjacentHTML("beforeend",N.cardMarkup))})),M()>=N.tabletWidth&&(categoryContainer.insertAdjacentHTML("afterbegin",'<h3 class="category-title">'.concat(n,"</h3>")),categoryContainer.insertAdjacentHTML("beforeend",V(n))),N.allCategoryContainer.insertAdjacentElement("beforeend",categoryContainer);B(),A();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){J.apply(this,arguments)}();var D=document.querySelector(".switch__input");console.log(D),"dark"==localStorage.getItem("theme")&&document.body.classList.add("theme-dark"),D.addEventListener("click",(function(){document.body.classList.toggle("theme-dark");var t="light";document.body.classList.contains("theme-dark")&&(t="dark"),localStorage.setItem("theme",t)}));document.querySelector("#tui-pagination-container"),document.querySelector("#info-block");var G=["643282b1e85766588626a080","643282b1e85766588626a0ba","643282b1e85766588626a085","643282b1e85766588626a0b2","643282b1e85766588626a086"];if(localStorage.setItem("listID",JSON.stringify(G)),null===localStorage.getItem("listID")){localStorage.setItem("listID",JSON.stringify([]))}var W=localStorage.getItem("listID");(G=JSON.parse(W)).length,Math.ceil(G.length/3-1)}();
//# sourceMappingURL=index.9eadb105.js.map
