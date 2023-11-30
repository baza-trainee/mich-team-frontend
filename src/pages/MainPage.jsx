import React from 'react';
import slide1 from '../images/1.jpg';
import ProductList from '../components/ProductList/ProductList';

const MainPage = () => {
  return (
    <div>
      <img width="100%" src={slide1} alt="slide1" />
      <ProductList />
    </div>
  );
};

export default MainPage;
