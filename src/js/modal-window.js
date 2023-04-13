const btn = document.getElementById("open-modal");

// Функція для отримання даних з API
async function getBookInfo(id) {
    try {
        const response = await fetch(`https://books-backend.p.goit.global/books/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Функція для відкриття модального вікна та заповнення його даними з API
btn.onclick = function openModal(id) {
    const modal = document.getElementById("modal");
    const bookInfo = document.getElementById("bookInfo");

    // Очистити попередні дані, якщо такі є
    bookInfo.innerHTML = "";

    // Отримати дані з API та заповнити їх у модальному вікні
    getBookInfo(id).then((data) => {
        const title = document.createElement("h3");
        title.innerText = data.title;

        const author = document.createElement("p");
        author.innerText = `Автор: ${data.author}`;

        const description = document.createElement("p");
        description.innerText = `Опис: ${data.description}`;

        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(description);
    });

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