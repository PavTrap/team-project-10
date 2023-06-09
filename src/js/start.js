// элементы разметки
const formEl = document.querySelector('.modal-start');
const backdropEl = document.querySelector('.backdrop-start');
const btnSingUp = document.querySelector('.login-btn');
const btnCloseXEl = document.querySelector('.modal__button-x');
const divDataModalStartEl = document.querySelector('div[data-modal-start]');

const nameLabelEl = document.querySelector('label[for="user_person"]');
const nameInputEl = document.querySelector('#user_person');

const emailLabelEl = document.querySelector('label[for="user_email"]');
const emailInputEl = document.querySelector('#user_email');

const passwordLabelEl = document.querySelector('label[for="user_password"]');
const passwordInputEl = document.querySelector('#user_password');

// Поднимаем label при фокусе на инпут
nameInputEl.addEventListener('focus', e =>
  console.log((nameLabelEl.style.top = '5%'))
);
emailInputEl.addEventListener('focus', e =>
  console.log((emailLabelEl.style.top = '5%'))
);
passwordInputEl.addEventListener('focus', e =>
  console.log((passwordLabelEl.style.top = '5%'))
);

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
  if (
    passwordInputEl.value.trim() === '' ||
    passwordInputEl.length < 5 ||
    passwordInputEl.value.length > 12
  ) {
    passwordInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    passwordInputEl.classList.remove('modal-form__field-input--error');
  }

  return isValid;
}

// Слушаем отправку формы
formEl.addEventListener('submit', handleOnSendForm);

function handleOnSendForm(e) {
  e.preventDefault();

  if (validateForm()) {
    // Действия при успешной валидации
    console.log('Form send!');

    // Закрываем модальное окно
    backdropEl.classList.add('is-hidden-start');
    backdropEl.style.display = 'none';
  } else {
    // Действия при ошибке валидации
    console.log('Error!');
  }
}

// Модальное окно
btnSingUp.addEventListener('click', e => {
  formEl.style.display = 'block';
});

// Закрытие формы при нажатии на х
btnCloseXEl.addEventListener('click', e => {
  formEl.style.display = 'none';
});

// Закрытие формы при нажатии на Esc
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (e.key === 'Escape' && !formEl.contains(document.activeElement)) {
      formEl.classList.add('is-hidden-start');
      backdropEl.classList.add('is-hidden-start');
    }
  }
});

// Закрытие формы при нажатии на backdrop
backdropEl.addEventListener('click', e => {
  if (formEl && e.target === backdropEl) {
    formEl.classList.add('is-hidden-start');
    backdropEl.classList.add('is-hidden-start');
  }
});

// Сбрасываем стиль дисплей none перед повторным открытием модалки с формой
btnSingUp.addEventListener('click', e => {
  if (divDataModalStartEl.style.display === 'none') {
    divDataModalStartEl.removeAttribute('style');
    formEl.removeAttribute('style');
  }
});

// обращаемся к элементам кнопок sing up и sing in
const singUpEl = document.querySelector('button[aria-label="link sing up"]');
const singInEl = document.querySelector('button[aria-label="link sing in"]');

// При открытии модалки sing up активна
singUpEl.classList.add('active');

// Вешаем слушателя на sing up
singUpEl.addEventListener('click', handleOnBtnSingUp);

function handleOnBtnSingUp(e) {
  e.preventDefault();
  formEl.style.height = '516px';
  singUpEl.classList.add('active');
  singInEl.classList.remove('active');
  formEl.classList.remove('sing-in');
  nameLabelEl.style.display = 'block';
  nameInputEl.style.display = 'block';
  nameInputEl.parentElement.parentElement.classList.remove('is-invalid');
  nameInputEl.parentElement.parentElement.classList.add('is-valid');
  formEl.style.height = '516px';
}

// Вешаем слушателя на sing in
singInEl.addEventListener('click', handleOnBtnSingIn);

function handleOnBtnSingIn(e) {
  e.preventDefault();
  singInEl.classList.add('active');
  singUpEl.classList.remove('active');
  formEl.classList.remove('sing-in');

  formEl.style.height = '450px';
  nameLabelEl.style.display = 'none';
  nameInputEl.style.display = 'none';
  nameInputEl.parentElement.parentElement.classList.add('is-invalid');
  nameInputEl.parentElement.parentElement.classList.remove('is-valid');
  validateForm();
}

//   function validateForm() {
//     let isValid = true;

// // Проверяем поле Name
//   if (nameLabelEl.style.display === "none") {
//     isValid = true;
//   }

// // Проверяем поле Email
//   if (emailInputEl.value.trim() === '' || !emailInputEl.checkValidity()) {
//     emailInputEl.classList.add('modal-form__field-input--error');
//     isValid = false;
//   } else {
//     emailInputEl.classList.remove('modal-form__field-input--error');
//     }

//   // Проверяем поле Password
//   if (passwordInputEl.value.trim() === '' || passwordInputEl.length < 5 || passwordInputEl.value.length > 12) {
//     passwordInputEl.classList.add('modal-form__field-input--error');
//     isValid = false;
//   } else {
//     passwordInputEl.classList.remove('modal-form__field-input--error');
//   }

//   return isValid;
// }
