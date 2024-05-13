import React from 'react';
import { useSelector } from 'react-redux';

const CategoriesList = () => {
  const categories = useSelector((state) => state.category);

  return (
    <ul className="categoriesList">
      {categories.map((item) => (
        <li key={item.category}>
          <h4 className="messageCategory">
            {item.category}
            {' ('}
            {item.count}
            {') '}
          </h4>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
