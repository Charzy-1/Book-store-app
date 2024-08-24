import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
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
      <div>
        {book.progress}
        % Completed
      </div>
      <button type="button">Update Progress</button>
      {' '}
      {/* Specify the type attribute */}
      <button type="button">Edit</button>
      {' '}
      {/* Specify the type attribute */}
      <button type="button" onClick={handleRemoveBook}>Remove</button>
      {' '}
      {/* Specify the type attribute */}
    </div>
  );
};

// Define prop-types for the Book component
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
