!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return r[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("iE7OH",(function(e,r){var n,o;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("i8Q71",(function(t,e){var r={openMenuBtn:document.querySelector("[data-menu-open]"),navBtn:document.querySelector(".nav-list__button"),logOutBtn:document.querySelector(".log-out-btn"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".nav-list")};r.openMenuBtn.addEventListener("click",(function(){r.menu.classList.toggle("mobile-is-hidden"),r.body.classList.toggle("no-scroll"),r.menuList.classList.toggle("nav-hidden"),r.logOutBtn.classList.toggle("nav-hidden")})),r.navBtn.addEventListener("click",(function(){r.logOutBtn.classList.toggle("nav-hidden"),r.menuList.classList.toggle("nav-hidden")})),console.log(r.menuList)})),o.register("5xh86",(function(e,r){t(e.exports,"nameFoundation",(function(){return n}));var n=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(o("4EKXC"))},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(o("2zism"))},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(o("2HJQ9"))},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(o("8i6Qn"))},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(o("93kTQ"))},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(o("9zSJo"))},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(o("4nzEf"))},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(o("jWNBf"))},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(o("5gJk5"))}]})),o.register("4EKXC",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("clTl7")})),o.register("aNJCr",(function(e,r){var n;t(e.exports,"getBundleURL",(function(){return n}),(function(t){return n=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),o.register("2zism",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("ipbLd")})),o.register("2HJQ9",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("bxxb0")})),o.register("8i6Qn",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("BQZ39")})),o.register("93kTQ",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("a5gRF")})),o.register("9zSJo",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("8iBVP")})),o.register("4nzEf",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("bN0o1")})),o.register("jWNBf",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("cNwvV")})),o.register("5gJk5",(function(t,e){t.exports=o("aNJCr").getBundleURL("flyHP")+o("iE7OH").resolve("SOdyB")})),o.register("7ghbD",(function(t,e){var r=o("5xh86");document.querySelector(".foundation__list").innerHTML=r.nameFoundation.map((function(t,e){var r=t.title,n=t.url,o=t.img,i=(e+1).toString().padStart(2,"0");return"<li class= 'foundation__item'> \n        <p class = \"foundation__count\"> ".concat(i,' </p>\n        <a href="').concat(n,'" "foundation__link">\n        <img class="foundation__img" src="').concat(o,'" alt="').concat(r,'" width=110 height=33>\n        </a>\n        </li>')})).join("")})),o.register("6mUVg",(function(t,e){var r=document.querySelector(".foundation__btn"),n=document.querySelectorAll(".foundation__item");document.querySelector(".foundation__list");r.addEventListener("click",(function(){if(i)o<2&&(o=1,i=!1);else if(2===(o+=1)&&(r.querySelector(".btnLoadMore__icon").style.transform="rotate(270deg)"),o>2)return o=1,i=!0,void n.forEach((function(t){t.style.transform="translateY(0px)",r.querySelector(".btnLoadMore__icon").style.transform=""}));n.forEach((function(t){t.style.transform="translateY(-".concat(90*o,"px)")}))}));var o=0,i=!1})),o.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}})),o.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=H(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?g:h,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=g,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",g="completed",p={};function y(){}function v(){}function m(){}var w={};u(w,i,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(k([])));x&&x!==r&&n.call(x,i)&&(w=x);var b=m.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function H(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,H(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return v.prototype=m,u(b,"constructor",m),u(m,"constructor",v),v.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),o.register("c01wF",(function(t,e){var r=document.querySelector(".switch__input");console.log(r),"dark"==localStorage.getItem("theme")&&document.body.classList.add("theme-dark"),r.addEventListener("click",(function(){document.body.classList.toggle("theme-dark");var t="light";document.body.classList.contains("theme-dark")&&(t="dark"),localStorage.setItem("theme",t)}))})),o("iE7OH").register(JSON.parse('{"flyHP":"index.f4b21f6a.js","clTl7":"Save_children-2x.688b6dc7.png","ipbLd":"project-hope2x.5ac714fa.png","bxxb0":"imc-2x.2c438457.png","BQZ39":"msf-2x.89950815.png","a5gRF":"razom-2x.49347143.png","8iBVP":"AAH-2x.b350b402.png","bN0o1":"united-2x.d41967f5.png","cNwvV":"world-vision-2x.39ac4395.png","SOdyB":"prytula-2x.b3afcdef.png"}'))}();
//# sourceMappingURL=index.f4b21f6a.js.map