const initialState = {
    books: [
        { id: 1, title: 'Book 1', author: 'James', category: 'Thriller', progress: 0 },
    ],
    categories: ['Thriller', 'Historical', 'Romance'],
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
                books: state.books.filter(book => book.id !== action.payload),
            };
        default:
            return state;
    }
}

export default rootReducer;

