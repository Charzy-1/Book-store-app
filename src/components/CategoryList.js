import React from 'react';
import { useSelector } from 'react-redux';

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <select>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryList;
