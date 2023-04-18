(() => {
  const refs = {
    openModalBtnSingUp: document.querySelector(
      'button[data-modal-start-open--sing-up]'
    ),
    closeModalBtnXClose: document.querySelector(
      'button[data-modal-start-close]'
    ),
    formEl: document.querySelector('[data-modal-start]'),
  };

  refs.openModalBtnSingUp.addEventListener('click', toggleModal);
  refs.closeModalBtnXClose.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.formEl.classList.toggle('is-hidden-start');
    refs.formEl.classList.toggle('display');
  }
})();

// Sing Up в мобилке

// (() => {
//     const refs = {
//     openModalBtnSingUpMobile: document.querySelector("button[data-modal-start-open--sing-up-mobile]"),
//     closeModalBtnXClose: document.querySelector("button[data-modal-start-close]"),
//     formEl: document.querySelector("[data-modal-start-mobile]"),
//   };

//   refs.openModalBtnSingUpMobile.addEventListener("click", toggleModal);
//   refs.closeModalBtnXClose.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.formEl.classList.toggle("is-hidden-start-mobile");
//   }

// })();

// refs.openModalBtnSingUpMobile.addEventListener('click', e => {
//   formEl.style.display = "block";
//   formEl.style.zIndex = "5";
// })
