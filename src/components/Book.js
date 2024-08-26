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
      <div className="book-details">
        <div className="category">{book.category}</div>
        <div className="title-author">
          <h2 className="title">{book.title}</h2>
          <p className="author">{book.author}</p>
        </div>
        <div className="actions">
          <button type="button" className="comments">Comments</button>
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress">
          {/* Placeholder for circular progress UI */}
        </div>
        <div className="progress-details">
          <p>
            {book.progress}
            %
          </p>
          <p>Completed</p>
        </div>
        <div className="update-progress">
          <button type="button">Update Progress</button>
        </div>
      </div>
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
