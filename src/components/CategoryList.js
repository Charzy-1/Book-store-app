import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
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

// Define prop-types for the CategoryList component
CategoryList.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryList;
