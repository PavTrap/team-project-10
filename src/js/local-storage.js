export const setToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.messege);
  }
};
export const getFromStorage = key => {
  try {
    const BooksState = localStorage.getItem(key);
    return BooksState === null ? undefined : JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.messege);
  }
};

export const localStorageKey = {
  ShoppingList: 'shopping-list',
};
