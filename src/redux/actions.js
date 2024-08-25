export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const removeBook = (bookId) => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});
