import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import CategoryList from '../components/CategoryList';
import { addBook } from '../redux/actions';

const BooksPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Thriller');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(), // using Date.now() as a simple ID
      title,
      author,
      category,
      progress: 0,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <div className="bookform-container">
        <BookList />
        <h3>Add A NEW BOOK</h3>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <CategoryList
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Add book</button>
        </form>
      </div>

      <footer className="footer">
        <p>Charzy global services 2024 CGS copyright</p>
      </footer>
    </div>
  );
};

export default BooksPage;
