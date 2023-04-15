export const state = {
  currentPage: 1,
    totalPages: 0,
  activeFilm: null,
};
export const resetCurrentPage = () => {
  state.currentPage = 1;
};