import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';
import CategoriesList from './CategoriesList';

const Categories = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(checkStatusAction(messages));
  }, [dispatch]);

  return (
    <div className="container">
      <CategoriesList />
    </div>
  );
};

export default Categories;
