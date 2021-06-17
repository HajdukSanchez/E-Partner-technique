import React from 'react';
// Styles
import '../styles/components/Product.scss';

// Components
import Button from './Button';

const Product = ({ description, image }) => {
  return (
    <div className='Product'>
      <div className='Product-container'>
        <figure className='Product__image'>
          <img src={image} alt='Product' />
        </figure>
        <h4 className='Product__description'>{description}</h4>
      </div>
      <div className='Product__action'>
        <Button text='Añadir al carrito' />
      </div>
    </div>
  );
};

export default Product;
