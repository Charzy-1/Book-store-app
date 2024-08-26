const initialState = {
  books: [], // Start with an empty array of books
  categories: ['Thriller', 'Historical', 'Romance', 'Fantasy', 'Dystopian', 'Western', 'Horror'],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
