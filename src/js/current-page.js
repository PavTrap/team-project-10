let currentPage = document.querySelector('body').getAttribute('data-current-page'); 


if (currentPage === "index") {
  document.querySelector('.nav-link[data-href="index"]').classList.add('nav-link-current');  
} else if (currentPage === "shoppinglist") {
  document.querySelector('.nav-link[data-href="shoppinglist"]').classList.add('nav-link-current');  
} 