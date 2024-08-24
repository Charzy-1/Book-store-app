import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/actions';

const Book = ({ book }) => {
    const dispatch = useDispatch();

    const handleRemoveBook = () => {
        dispatch(removeBook(book.id));
    };

    return (
        <div className="book-item">
            <div>{book.category}</div>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.progress}% Completed</div>
            <button>Update Progress</button>
            <button>Edit</button>
            <button onClick={handleRemoveBook}>Remove</button>
        </div>
    );
};

export default Book;
