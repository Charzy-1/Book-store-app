// BookList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice'; // Adjust the import path as necessary
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
