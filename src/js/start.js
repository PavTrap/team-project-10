'use strict';
// элементы разметки
const formEl = document.querySelector('.modal-start')
const backdropEl = document.querySelector('.backdrop-start');
const btnSingUp = document.querySelector('.login-btn');
const btnCloseXEl = document.querySelector('.modal__button-x')
const divDataModalStartEl = document.querySelector('div[data-modal-start]')

const nameLabelEl = document.querySelector('label[for="user_person"]');
console.log(nameLabelEl);
const nameInputEl = document.querySelector('#user_person');
console.log(nameInputEl);

const emailLabelEl = document.querySelector('label[for="user_email"]');
const emailInputEl = document.querySelector('#user_email')

const passwordLabelEl = document.querySelector('label[for="user_password"]');
const passwordInputEl = document.querySelector('#user_password');

// Поднимаем label при фокусе на инпут
nameInputEl.addEventListener('focus', e => console.log(nameLabelEl.style.top = "5%"));
emailInputEl.addEventListener('focus', e => console.log(emailLabelEl.style.top = "5%"));
passwordInputEl.addEventListener('focus', e => console.log(passwordLabelEl.style.top = "5%"));

// Валидация формы
function validateForm() {
    let isValid = true;
    
// Проверяем поле Name
  if (nameInputEl.value.trim() === '') {
    nameInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    nameInputEl.classList.remove('modal-form__field-input--error');
  }

    
// Проверяем поле Email
  if (emailInputEl.value.trim() === '' || !emailInputEl.checkValidity()) {
    emailInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    emailInputEl.classList.remove('modal-form__field-input--error');
    }
    
  // Проверяем поле Password
  if (passwordInputEl.value.trim() === '' || passwordInputEl.length < 5 || passwordInputEl.value.length > 12) {
    passwordInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    passwordInputEl.classList.remove('modal-form__field-input--error');
  }

  return isValid;
}

// Слушаем отправку формы
formEl.addEventListener('submit', handleOnSendForm)
    
    
function handleOnSendForm(e) {
  e.preventDefault();

  if (validateForm()) {
    // Действия при успешной валидации
    console.log('Form send!');

    // Закрываем модальное окно
    backdropEl.classList.add('is-hidden-start');
    backdropEl.style.display = "none";
  } else {
    // Действия при ошибке валидации
    console.log('Error!');
  }
};

// Модальное окно
btnSingUp.addEventListener('click', e => {
    formEl.style.display = "block";
})
    
// Закрытие формы при нажатии на х
btnCloseXEl.addEventListener('click', e => {
  formEl.style.display = 'none';
})

// // Закрытие формы при нажатии на Esc
// window.addEventListener('keydown', e => {
//     if (e.key === 'Escape') {
//       formEl.style.display = "none";
//       backdropEl.style.display = "none";
//   }
// });

// Закрытие формы при нажатии на backdrop
// backdropEl.addEventListener('click', e => {
//   formEl.style.display = 'none';
//   backdropEl.style.display = "none";
// });

// // Сбрасываем стиль дисплей none перед повторным открытием модалки с формой
// btnSingUp.addEventListener('click', e => {
//   if (divDataModalStartEl.style.display === "none") {
//     divDataModalStartEl.removeAttribute('style');
//     formEl.removeAttribute('style');
//     }
// })

// функция для открытия модального окна
function openModal() {
  // устанавливаем стиль display в block и добавляем класс active
  formEl.style.display = 'block';
  formEl.classList.add('active');
  // добавляем класс active к backdrop
  backdropEl.classList.add('active');
}









