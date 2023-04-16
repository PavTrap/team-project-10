'use strict';

// элементы разметки
const formEl = document.querySelector('.modal-start')
const backdropEl = document.querySelector('.backdrop-start');

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
    nameInputEl.setCustomValidity("You gotta fill this out, yo!");
    isValid = false;
  } else {
    nameInputEl.classList.remove('modal-form__field-input--error');
  }
    
// Проверяем поле Email
  if (emailInputEl.value.trim() === ''|| !emailInputEl.checkValidity()) {
    passwordInputEl.classList.add('modal-form__field-input--error');
    isValid = false;
  } else {
    emailInputEl.classList.remove('modal-form__field-input--error');
    }
    
  // Проверяем поле Password
  if (passwordInputEl.value.trim() === '' || passwordInputEl.length < 5 || passwordInputEl.value.length > 12) {
    passwordInput.classList.add('modal-form__field-input--error');
    console.log('Please enter your password')
    isValid = false;
  }
  else {
    passwordInputEl.classList.remove('modal-form__field-input--error');
  }

  return isValid;
}


// Слушаем отправку формы
formEl.addEventListener('submit', handleOnSendForm)
    
    
function handleOnSendForm(e) {
  e.preventDefault();

  const { elements: { name, email, password } } = e.target;

  if (validateForm()) {
    // Действия при успешной валидации
    console.log('Form send!');

    // Закрываем модальное окно
    formEl.style.display = "none";
    backdropEl.style.display = "none";
  } else {
    // Действия при ошибке валидации
    console.log('Error!');
  }

  const obj = {
        name: nameInputEl.value,
        email: emailInputEl.value,
        password: passwordInputEl.value,
    }
    
    console.log(obj);
};

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        formEl.style.display = "none";
        backdropEl.style.display = "none"
    }
});
