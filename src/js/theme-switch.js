const slider = document.querySelector('.switch__input');
console.log(slider);
// Выбираем настройки темы из localStorage
const currentTheme = localStorage.getItem('theme');
// Если текущая тема в localStorage равна "dark"…
if (currentTheme == 'dark') {
  // …тогда мы используем класс .dark-theme
  document.body.classList.add('theme-dark');
}

// Отслеживаем щелчок по кнопке
slider.addEventListener('click', function () {
  // Переключаем класс .dark-theme при каждом щелчке
  document.body.classList.toggle('theme-dark');
  // Допустим, тема светлая
  let theme = 'light';
  // Если <body> содержит класс .dark-theme…
  if (document.body.classList.contains('theme-dark')) {
    // …тогда делаем тему тёмной
    theme = 'dark';
  }
  // После чего сохраняем выбор в localStorage
  localStorage.setItem('theme', theme);
});
