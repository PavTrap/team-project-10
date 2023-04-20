// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// // import { createEmptyPage } from '../shoppinglist';
// const firebaseConfig = {
//   apiKey: 'AIzaSyBG1nDSn9xur4B_aU6_DBZgADbFPrTaybk',
//   authDomain: 'book-auth-1687f.firebaseapp.com',
//   projectId: 'book-auth-1687f',
//   storageBucket: 'book-auth-1687f.appspot.com',
//   messagingSenderId: '103632860796',
//   appId: '1:103632860796:web:1da7d455909038957d3bf9',
// };

// const STORAGE_KEY = 'User-name';

// const nameInputEl = document.querySelector('#user_person');
// const emailInputEl = document.querySelector('#user_email');
// const passwordInputEl = document.querySelector('#user_password');
// const formEl = document.querySelector('.modal-start');
// const shopListBtn = document.querySelector('.shoppinglist');

// shopListBtn.style.display = 'none';

// formEl.addEventListener('submit', SingUpHandler);

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// function SingUpHandler() {
//   const nameInputElVal = nameInputEl.value;
//   const emailInputElVal = emailInputEl.value;
//   const passwordInputElVal = passwordInputEl.value;

//   createUserWithEmailAndPassword(auth, emailInputElVal, passwordInputElVal)
//     .then(userCredential => {
//       const user = userCredential.user;
//       shopListBtn.style.display = 'inline';
//       localStorage.setItem(STORAGE_KEY, nameInputElVal);
//       document.querySelector('.login-btn').innerHTML =
//         localStorage.getItem(STORAGE_KEY);
//       createEmptyPage();
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// }

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// import { createEmptyPage } from '../shoppinglist';
const firebaseConfig = {
  apiKey: 'AIzaSyBG1nDSn9xur4B_aU6_DBZgADbFPrTaybk',
  authDomain: 'book-auth-1687f.firebaseapp.com',
  projectId: 'book-auth-1687f',
  storageBucket: 'book-auth-1687f.appspot.com',
  messagingSenderId: '103632860796',
  appId: '1:103632860796:web:1da7d455909038957d3bf9',
};

const STORAGE_KEY = 'User-name';

const nameInputEl = document.querySelector('#user_person');
const emailInputEl = document.querySelector('#user_email');
const passwordInputEl = document.querySelector('#user_password');
const formEl = document.querySelector('.modal-start');
const shopListBtn = document.querySelector('.shopBtn');
const signOutBtn = document.querySelector('.sign-out');

formEl.addEventListener('submit', SingUpHandler);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SingUpHandler() {
  const nameInputElVal = nameInputEl.value;
  const emailInputElVal = emailInputEl.value;
  const passwordInputElVal = passwordInputEl.value;

  createUserWithEmailAndPassword(auth, emailInputElVal, passwordInputElVal)
    .then(userCredential => {
      const user = userCredential.user;
      shopListBtn.classList.add('shopBtn--visible');
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          name: nameInputElVal,
          email: emailInputElVal,
          listId: [],
        })
      );
      document.querySelector('.login-btn').innerHTML = nameInputElVal;
      // signOutBtn.style.display = 'block';
      signOutBtn.classList.add('sign-out--visible');
      createEmptyPage();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
//------------------Перехід на сторінку html, коли бачимо що користувач не залогінився
function userIsActive() {
  if (
    !localStorage.getItem(STORAGE_KEY) &&
    window.location.pathname === '/shoppinglist.html'
  ) {
    location.href = '../index.html';
    return false;
  }
  return true;
}
const logout = function () {
  if (userIsActive() == false) {
    clearInterval(logoutInterval);
  }
};
const logoutInterval = setInterval(logout, 1000);
//------------------Перехід на сторінку html, коли бачимо що користувач не залогінився

//------------------Перевірка на наявність даних про користувача в localstorage і активації функціонала
if (localStorage.getItem(STORAGE_KEY)) {
  const dataFromLocalStorage = localStorage.getItem(STORAGE_KEY);
  const parsedDataFromLocalStorage = JSON.parse(dataFromLocalStorage);
  if (parsedDataFromLocalStorage.name !== 'Not Authorized') {
    signOutBtn.classList.add('sign-out--visible');
    shopListBtn.classList.add('shopBtn--visible');
    document.querySelector('.login-btn').innerHTML =
      parsedDataFromLocalStorage.name;

    document.querySelector('.sign-out').addEventListener('click', () => {
      signOut(auth)
        .then(() => {
          shopListBtn.classList.remove('shopBtn--visible');
          localStorage.removeItem(STORAGE_KEY);
          location.href = '../index.html';
        })
        .catch(error => {});
    });
  }
}

//------------------Перевірка на наявність даних про користувача в localstorage і активації функціонала
