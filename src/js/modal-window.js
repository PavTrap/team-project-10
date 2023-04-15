
// Функція для відкриття модального вікна та заповнення його даними з API
export function openModal() {
    const modal = document.getElementById("modal");
    const bookInfo = document.getElementById("bookInfo");

    // Очистити попередні дані, якщо такі є
    bookInfo.innerHTML = "";

    // Відобразити модальне вікно
    modal.style.display = "block";

    // Додати обробник події на кнопку закриття модального вікна
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function () {
        modal.style.display = "none";
    };
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
    }
});