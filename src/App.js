import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';


function App() {
    return (
        <Router>
            <nav className='header'>
            <h1>Bookstore CMS</h1>
                <Link to="/books">Books</Link>
                <Link to="/categories">Categories</Link>
            </nav>
            <Routes>
                <Route path="/books" element={<BooksPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
