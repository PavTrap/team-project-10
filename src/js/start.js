'use strict';

// элементы разметки
const formEl = document.querySelector('.modal-start')
const backdropEl = document.querySelector('.backdrop');

const nameLabelEl = document.querySelector('label[for="user_person"]');
console.log(nameLabelEl);
const nameInputEl = document.querySelector('#user_person');
console.log(nameInputEl);

const emailLabelEl = document.querySelector('label[for="user_email"]');
const emailInputEl = document.querySelector('#user_email')

const passwordLabelEl = document.querySelector('label[for="user_password"]');
const passwordInputEl = document.querySelector('#user_password');

const signUpBtn = document.querySelector('.modal-form__btn')

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
    backdropEl.classList.add('is-hidden');
  } else {
    // Действия при ошибке валидации
    console.log('Error!');
  }
};

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        formEl.style.display = "none";
        backdropEl.style.display = "none";
        // backdropEl.classList.toggle('is-hidden');
    }
});


// firebase

const firebaseConfig = {
  apiKey: "AIzaSyCPAlxQ2RWBbDKvemdYbKuU8Oz5kWwwzVg",
  authDomain: "project-auth-a38b4.firebaseapp.com",
  databaseURL: "https://project-auth-a38b4-default-rtdb.firebaseio.com",
  projectId: "project-auth-a38b4",
  storageBucket: "project-auth-a38b4.appspot.com",
  messagingSenderId: "958492509119",
  appId: "1:958492509119:web:1ad6921d152768cc92570a"
};

firebase.initializeApp(firebaseConfig);

const AuthFormDB = firebase.database().ref('project-auth');

signUpBtn.addEventListener('click', OnFormClick)

function OnFormClick(e) {

  let name = getElementVal('user_person')
  let email = getElementVal('user_email');
  let password = getElementVal('user_password')

  console.log(name, email, password)
  
  SaveMessages(name,email,password)
}

const SaveMessages = (name, email, password) => {
  const newAuthForm = AuthFormDB.push();
  
  newAuthForm.set({
    name,
    email,
    password
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value
}