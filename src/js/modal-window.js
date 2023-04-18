const fetchUsers = async (id) => {
    const response = await fetch(`https://books-backend.p.goit.global/books/${id}`);
    const users = await response.json();
    console.log(users);
    return users;
};

const amazonPic = new URL(import.meta.url);
const applebooksPic = new URL(import.meta.url);
const bookstore_shopPic = new URL(import.meta.url);


// Функція для відкриття модального вікна та заповнення його даними з API
export function openModal(id) {
    // const bookInfo = document.getElementById('bookInfo')
    const bookId = fetchUsers(id);
    bookId
        .then(id => {
            bookInfo.insertAdjacentHTML('afterbegin',
                `<li class="shopping-carg ${id._id}" >
                    <img class="shopping-carg-image" src="${id.book_image}" alt="" />
                    <div class="">
                        <div class="">
                            <div>
                                <h2 class="shopping-carg-book-title">${id.title}</h2>
                                <p class="shopping-carg-book-author">${id.author}</p>
                                <p class="shopping-carg-book-description">${id.description || 'There is no description'}</p>
                            </div>
                        </div>
                    </div>
                </li>`
            );

            id.buy_links.map(el => {
                if (el.name === 'Amazon') {
                    bookInfo.insertAdjacentHTML('beforeend',
                        `<li class="pop_shop-item">
                            <a
                            class="pop_shop__link link"
                            href="${el.url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><img
                                class="pop_list-img"
                                src="${amazonPic}" 
                                alt="amazon_shop_icon"/>
                            </a>
                        </li>`
                    );
                }
                if (el.name === 'Apple Books') {
                    bookInfo.insertAdjacentHTML(
                        'beforeend',
                        `<li class="pop_shop-item">
                    <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                        class="pop_list-img"
                        src="${applebooksPic}" 
                        alt="applebooks_shop_icon"
                    />
                    </a>
                </li>`
                    );
                }
                if (el.name === 'Bookshop') {
                    bookInfo.insertAdjacentHTML(
                        'beforeend',
                        `<li class="pop_shop-item">
                    <a
                    class="pop_shop__link link"
                    href="${el.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                        class="pop_list-img"
                        src="${bookstore_shopPic}" 
                        alt="bookstore_shop_icon"
                    />
                    </a>
                    </li>
                    `
                    );
                }
            });
        })

    // Відобразити модальне вікно
    modal.style.display = "block";

    // Додати обробник події на кнопку закриття модального вікна
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function () {
        modal.style.display = "none";
        bookInfo.innerHTML = "";
    };
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        bookInfo.innerHTML = "";
    }
}

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modal.style.display = "none";
        bookInfo.innerHTML = "";
    }
});