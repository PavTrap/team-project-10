!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired7c6=o),o.register("iE7OH",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("9Di7p",(function(t,e){var n={categoriesList:document.querySelector(".categories__list")};fetch("https://books-backend.p.goit.global/books/category-list").then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){var e=t.list_name;return'<li class = "categories__item"><a href = "#" data-category = "'.concat(e,'" class = "categories__link">').concat(e,"</a></li>")}));return n.categoriesList.insertAdjacentHTML("beforeend",e.join("")),console.log(e),e}))})),o.register("i8Q71",(function(t,e){!function(){var t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};function e(){t.menu.classList.toggle("mobile-is-hidden"),t.body.classList.toggle("no-scroll")}t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e)}()})),o.register("5xh86",(function(e,n){t(e.exports,"nameFoundation",(function(){return r}));var r=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(o("4EKXC"))},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(o("2zism"))},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(o("2HJQ9"))},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(o("8i6Qn"))},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(o("93kTQ"))},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(o("9zSJo"))},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(o("4nzEf"))},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(o("jWNBf"))},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(o("5gJk5"))}]})),o.register("4EKXC",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("clTl7")})),o.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var i={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),i[t]=e),e}})),o.register("2zism",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("ipbLd")})),o.register("2HJQ9",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("bxxb0")})),o.register("8i6Qn",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("BQZ39")})),o.register("93kTQ",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("a5gRF")})),o.register("9zSJo",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("8iBVP")})),o.register("4nzEf",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("bN0o1")})),o.register("jWNBf",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("cNwvV")})),o.register("5gJk5",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("SOdyB")})),o.register("7ghbD",(function(t,e){var n=o("5xh86");document.querySelector(".foundation__list").innerHTML=n.nameFoundation.map((function(t,e){var n=t.title,r=t.url,i=t.img,o=(e+1).toString().padStart(2,"0");return"<li class= 'foundation__item'> \n        <p class = \"foundation__count\"> ".concat(o,' </p>\n        <a href="').concat(r,'" "foundation__link">\n        <img class="foundation__img" src="').concat(i,'" alt="').concat(n,'" width=110 height=33>\n        </a>\n        </li>')})).join("")})),o.register("6mUVg",(function(t,e){var n=document.querySelector(".foundation__btn"),r=document.querySelectorAll(".foundation__item");document.querySelector(".foundation__list");n.addEventListener("click",(function(){if(o)i<2&&(i=1,o=!1);else if(2===(i+=1)&&(n.querySelector(".btnLoadMore__icon").style.transform="rotate(270deg)"),i>2)return i=1,o=!0,void r.forEach((function(t){t.style.transform="translateY(0px)",n.querySelector(".btnLoadMore__icon").style.transform=""}));r.forEach((function(t){t.style.transform="translateY(-".concat(90*i,"px)")}))}));var i=0,o=!1})),o.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}})),o.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=function(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw o;return B()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?g:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",g="completed",d={};function v(){}function m(){}function _(){}var y={};c(y,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==n&&r.call(x,o)&&(y=x);var w=_.prototype=v.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function n(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:B}}function B(){return{value:e,done:!0}}return m.prototype=_,c(w,"constructor",_),c(_,"constructor",m),m.displayName=c(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(P.prototype),c(P.prototype,a,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new P(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("6CkMP",(function(t,n){var r=o("bpxeT"),i=o("2TvXO");o("c01wF");var a=o("1VFfL"),s=document.querySelector("#tui-pagination-container"),c=document.querySelector("#info-block"),u=["643282b1e85766588626a080","643282b1e85766588626a0ba","643282b1e85766588626a085","643282b1e85766588626a0b2","643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a087","643282b1e85766588626a0b6","643282b1e85766588626a081","643282b1e85766588626a0aa","643282b1e85766588626a07a","643282b1e85766588626a0a8","643282b1e85766588626a07b","643282b1e85766588626a0a6","643282b1e85766588626a088","643282b1e85766588626a0b8","643282b1e85766588626a07c","643282b1e85766588626a0a0","643282b1e85766588626a07d","643282b1e85766588626a0a2","643282b1e85766588626a089","643282b1e85766588626a0bc","643282b1e85766588626a08a","643282b2e85766588626a0de","643282b1e85766588626a07f","643282b1e85766588626a0be","643282b1e85766588626a082","643282b1e85766588626a0ac","643282b1e85766588626a083","643282b1e85766588626a0ae","643282b1e85766588626a07e","643282b1e85766588626a0a4","643282b1e85766588626a084","643282b1e85766588626a0b0","643282b1e85766588626a08b","643282b1e85766588626a0da"];if(localStorage.setItem("listID",JSON.stringify(u)),null===localStorage.getItem("listID")){localStorage.setItem("listID",JSON.stringify([]))}var l=localStorage.getItem("listID"),f={totalItems:(u=JSON.parse(l)).length,itemsPerPage:3,visiblePages:Math.ceil(u.length/3-1),centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},p=new(e(a))(s,f);function h(t){if(0===t.length)s.style.display="none",function(){m();var t='<li><p>"This page is empty, add some books and proceed to order."</p><img src="./image/shoppinglist/emptypage.png" alt=""></li>';c.insertAdjacentHTML("afterbegin",t)}();else if(t.length>0){t.length<=3&&(s.style.display="none"),p.hasListener("afterMove")||p.on("afterMove",(o=e(r)(e(i).mark((function t(n){var r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=n.page,localStorage.setItem("currentPage",r),t.next=5,g(r);case 5:v(t.sent),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),function(t){return o.apply(this,arguments)}));var n=localStorage.getItem("currentPage");n?p.movePageTo(Number(n)):p.movePageTo(1)}var o}function g(){return d.apply(this,arguments)}function d(){return d=e(r)(e(i).mark((function t(){var n,o,a,s,c,l,p=arguments;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>0&&void 0!==p[0]?p[0]:1,o=(n-1)*f.itemsPerPage+1,a=o+f.itemsPerPage-1,s=u.slice(o-1,a),c=s.map(function(){var t=e(r)(e(i).mark((function t(n){var r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://books-backend.p.goit.global/books/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=7,Promise.all(c);case 7:return l=t.sent,t.abrupt("return",l);case 9:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function v(t){m();for(var n="",r="",i="",o=[],l=0;l<t.length;l++){for(var g=t[l],d=g.buy_links,v=0;v<d.length;v++)"Amazon"===d[v].name&&(n=d[v].url),"Apple Books"===d[v].name&&(r=d[v].url),"Bookshop"===d[v].name&&(i=d[v].url);o.push('<li class="shopping-carg '.concat(g._id,'" >\n      <img class="shopping-carg-image" src="').concat(g.book_image,'" alt="" />\n      <div class="">\n        <div class="">\n          <div>\n            <h2 class="shopping-carg-book-title">').concat(g.title,'</h2>\n            <p class="shopping-carg-book-categorie">').concat(g.list_name,'</p>\n          </div>\n          <button class="button shopbtn card-delete" data-index="').concat(g._id,'">\n            <img src="./image/shoppinglist/dump.png" alt="" />\n          </button>\n        </div>\n        <p class="shopping-carg-book-description">').concat(g.description,'</p>\n        <div class="footer-card">\n          <p class="shopping-carg-book-author">').concat(g.author,'</p>\n          <ul class="shopping-carg-shops">\n            <li>\n              <a\n                class="shopping-carg-shop"\n                href="').concat(n,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="Іконка Amazon"\n              >\n                <img src="./images/amazon.png" alt="Іконка Amazon" />\n              </a>\n            </li>\n            <li>\n              <a\n                class="book-shop"\n                href="').concat(r,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="Іконка Apple Books"\n              >\n                <img src="./images/openbook.png" alt="Іконка Apple Books" />\n              </a>\n            </li>\n            <li>\n              <a\n                class="book-shop"\n                href="').concat(i,'"\n                target="_blank"\n                rel="noopener noreferrer"\n                aria-label="Іконка Bookshop"\n              >\n                <img src="./images/bookshop.png" alt="Іконка Bookshop" />\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </li>'))}c.insertAdjacentHTML("afterbegin",o.join("")),document.querySelectorAll(".shopbtn").forEach((function(t){t.addEventListener("click",(function(){var n=t.dataset.index,r=u.indexOf(n);-1!==n&&u.splice(r,1),localStorage.setItem("listID",JSON.stringify(u)),p.reset(),f.totalItems=u.length,f.visiblePages=Math.ceil(u.length/3-1),p=new(e(a))(s,f),h(u)}))}))}function m(){c.innerHTML=""}h(u)})),o.register("c01wF",(function(t,e){var n=document.querySelector(".switch__input");console.log(n),"dark"==localStorage.getItem("theme")&&document.body.classList.add("theme-dark"),n.addEventListener("click",(function(){document.body.classList.toggle("theme-dark");var t="light";document.body.classList.contains("theme-dark")&&(t="dark"),localStorage.setItem("theme",t)}))})),o.register("1VFfL",(function(t,e){
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
var n;window,n=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,r,i,o,a=Object.prototype.hasOwnProperty;for(i=1,o=arguments.length;i<o;i+=1)for(r in n=arguments[i])a.call(n,r)&&(t[r]=n[r]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var r=n(2),i=n(17),o=n(6);t.exports=function(t,e,n){r(t)?i(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r;for(r in n=n||null,t)if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))break}},function(t,e,n){"use strict";var r=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&r(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e,n){var i,o;if(n=n||0,!r(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,i=n;n>=0&&i<o;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var r=n(29),i=n(30),o=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=o(t)?t(e):r(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,r=Array.prototype.slice;return t.bind?t.bind.apply(t,r.call(arguments,1)):(n=r.call(arguments,2),function(){return t.apply(e,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var r=n(13),i=n(7),o=n(0),a=n(1),s=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=i({init:function(t,e){this._options=o({},u,e),this._currentPage=0,this._view=new s(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===t;return this._options.centerAlign?r?e-1:e+n:r?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),r=this._getPageIndex(t),i=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=r>1,e.nextMore=r<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,r,i=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(r=Math.floor(o/2),(n=(e=Math.max(t-r,1))+o-1)>i&&(e=Math.max(i-o+1,1),n=i)):(e=(a-1)*o+1,n=a*o,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),t.exports=l},function(t,e,n){"use strict";var r=n(0),i=n(14),o=n(4),a=n(16),s=n(2),c=n(5),u=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){r(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var r=this._safeEvent(t);this._memorizeContext(n),r.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var r=this;o(t)?(t=t.split(l),u(t,(function(t){r._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){r.on(e,t,n)})))},f.prototype.once=function(t,e,n){var r=this;if(a(t))return n=e,void u(t,(function(t,e){r.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),r.off(t,i,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,r=0;if(s(t))for(n=t.length;r<n;r+=1)!0===e(t[r])&&(t.splice(r,1),n-=1,r-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var r=t===n.handler;return r&&e._forgetContext(n.context),r}},f.prototype._matchContext=function(t){var e=this;return function(n){var r=t===n.context;return r&&e._forgetContext(n.context),r}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(r){var i=t===r.handler,o=e===r.context,a=i&&o;return a&&n._forgetContext(r.context),a}},f.prototype._offByEventName=function(t,e){var n=this,r=c(e),i=n._matchHandler(e);t=t.split(l),u(t,(function(t){var e=n._safeEvent(t);r?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,r=this;this._indexOfContext(t)<0?u(t,(function(t,e){r.off(e,t)})):o(e)?(n=this._matchContext(t),r._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){r._spliceMatches(t,n)})))},f.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,r,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),r=0;e[r];){if(!1===(i=e[r]).handler.apply(i.context,n))return!1;r+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var r=n(1),i=n(15);t.exports=function(t){return!r(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var r=0,i=t.length;for(n=n||null;r<i&&!1!==e.call(n,t[r],r,t);r+=1);}},function(t,e,n){"use strict";var r=n(19);t.exports=function(t,e){var n=r(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var r=n(3),i=n(7),o=n(21),a=n(22),s=n(24),c=n(25),u=n(0),l=n(4),f=n(28),p=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],d=["prev","next"],v=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){r(g,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){r(g,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){r(d,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,r=t.leftPageNumber,i=t.rightPageNumber;for(n=r;n<=i;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==r||t.prevMore||c(e,this._firstItemClassName),n!==i||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,r,i=o(e);s(e),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),t(r,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return r(n,(function(n,r){return!p.isContained(t,n)||(e=r,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var r=n(4),i=n(3),o=n(23);function a(t,e,n,r){function a(e){n.call(r||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,r){var a=o(t,e),s=!1;i(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:r})}(t,e,n,a)}t.exports=function(t,e,n,o){r(e)?i(e.split(/\s+/g),(function(e){a(t,e,n,o)})):i(e,(function(e,r){a(t,r,e,n)}))}},function(t,e,n){"use strict";var r="_feEventKey";t.exports=function(t,e){var n,i=t[r];return i||(i=t[r]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var r=n(3),i=n(8),o=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,c=[];s?r(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,(function(t){i(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var r=n(2),i=n(1);t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var r=n(8),i=n(3),o=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,h=/^["']\w+["']$/,g=/"|'/g,d=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var r=function(t,e){var n=[t],r=[],o=0,a=0;return i(e,(function(t,i){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),r.push(e.slice(a,i)),a=i+1)})),r.push(e.slice(a)),{exps:n,sourcesInsideIf:r}}(t,e),o=!1,a="";return i(r.exps,(function(t,e){return(o=b(t,n))&&(a=x(r.sourcesInsideIf[e],n)),!o})),a},each:function(t,e,n){var r=b(t,n),a=o(r)?"@index":"@key",c={},u="";return i(r,(function(t,r){c[a]=r,c["@this"]=t,s(n,c),u+=x(e.slice(),n)})),u},with:function(t,e,n){var i=r("as",t),o=t[i+1],a=b(t.slice(0,i),n),c={};return c[o]=a,x(e,s(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,r,i=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)r=n.index,i.push(t.slice(o,r)),o=r+n[0].length,n=e.exec(t);return i.push(t.slice(o)),i};function _(t,e){var n,r=e[t];return"true"===t?r=!0:"false"===t?r=!1:h.test(t)?r=t.replace(g,""):u.test(t)?r=_((n=t.split(l))[0],e)[_(n[1],e)]:f.test(t)?r=_((n=t.split(p))[0],e)[n[1]]:d.test(t)&&(r=parseFloat(t)),r}function y(t,e,n){for(var r,i,o,s,c=v[t],u=1,l=2,f=e[l];u&&a(f);)0===f.indexOf(t)?u+=1:0===f.indexOf("/"+t)&&(u-=1,r=l),f=e[l+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(i=0,o=r,(s=e.splice(i+1,o-i)).pop(),s),n),e}function b(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var r=[];return i(e,(function(t){r.push(_(t,n))})),t.apply(null,r)}(n,t.slice(1),e):n}function x(t,e){for(var n,r,i,o=1,s=t[o];a(s);)r=(n=s.split(" "))[0],v[r]?(i=y(r,t.splice(o,t.length-o),e),t=t.concat(i)):t[o]=b(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return x(m(t,c),e)}},function(t,e,n){"use strict";var r=n(1),i=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(r(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return r(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},t.exports=n()})),o("iE7OH").register(JSON.parse('{"flyHP":"index.6cc493b6.js","5UbS1":"index.aeced29a.css","clTl7":"Save_children-2x.688b6dc7.png","ipbLd":"project-hope2x.5ac714fa.png","bxxb0":"imc-2x.2c438457.png","BQZ39":"msf-2x.89950815.png","a5gRF":"razom-2x.49347143.png","8iBVP":"AAH-2x.b350b402.png","bN0o1":"united-2x.d41967f5.png","cNwvV":"world-vision-2x.39ac4395.png","SOdyB":"prytula-2x.b3afcdef.png"}'))}();
//# sourceMappingURL=index.6cc493b6.js.map
