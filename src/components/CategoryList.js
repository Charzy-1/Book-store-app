import React from 'react';
import { useSelector } from 'react-redux';

const CategoryList = ({ value, onChange }) => {
  const categories = useSelector((state) => state.categories);

  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled>Select a category</option>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryList;
