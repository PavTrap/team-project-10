(() => {
    const refs = {
    openModalBtn: document.querySelector("button[data-modal-start-open]"),
    closeModalBtn: document.querySelector("button[data-modal-start-close]"),
    modal: document.querySelector("[data-modal-start]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-start");
  }
})();






