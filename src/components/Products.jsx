import React from 'react';
// Styles
import '../styles/components/Products.scss';

// Components
import Product from './Product';

const Products = ({ title, products }) => {
  return (
    <div className='Products'>
      <h1 className='Products__title'>{title}</h1>
      <div className='Products__list'>
        {products.map((product) => (
          <Product key={product.id} description={product.description} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
