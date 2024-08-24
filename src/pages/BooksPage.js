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
            <h2>Bookstore CMS</h2>
            <BookList />
            <h3>Add a new book</h3>
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
            <footer>
                <p>Tiago Lelinski Marin 2022 MIT copyright</p>
            </footer>
        </div>
    );
};

export default BooksPage;
