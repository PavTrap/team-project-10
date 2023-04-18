// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//     body: document.querySelector('body'),
//     // menuList: document.querySelector('.mob-menu-list'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   // refs.menuList.addEventListener('click', removeMenu);

//   function toggleMenu() {

//     refs.menu.classList.toggle('mobile-is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
//   function removeMenu() {
//     refs.menu.classList.add('mobile-is-hidden');

//     refs.body.classList.remove('no-scroll');
//   }
// })();


 const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    // closeMenuBtn: document.querySelector('[data-menu-close]'),
    navBtn: document.querySelector('.nav-list__button'),
    logOutBtn: document.querySelector('.log-out-btn'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.nav-list'),
};
  
refs.openMenuBtn.addEventListener("click", () => {
  refs.menu.classList.toggle('mobile-is-hidden');
  refs.body.classList.toggle("no-scroll");

  refs.menuList.classList.toggle("nav-hidden");
  refs.logOutBtn.classList.toggle("nav-hidden");
})

refs.navBtn.addEventListener('click', () => {
  refs.logOutBtn.classList.toggle("nav-hidden");
  refs.menuList.classList.toggle("nav-hidden")
})

console.log(refs.menuList)

{/* <svg class="modal__item" width="20px" height="20px">
        <use xlink:href="#icon-close"></use>
        <!-- <use href="./images/svg/symbol-defs.svg#icon-close"></use> -->
      </svg> */}