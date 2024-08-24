import React from 'react';
import { useSelector } from 'react-redux';

const CategoryList = () => {
    const categories = useSelector(state => state.categories);
    
    return (
        <select>
            {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>
    );
};

export default CategoryList;
