import React from 'react';
// Styles
import '../styles/components/MainCategories.scss';

const MainCategories = ({ category }) => {
  return (
    <div className='MainCategory'>
      <figure className='MainCategory__image'>
        <img src={category.image} alt={`Category ${category.title} image`} />
      </figure>
      <h2 className='MainCategory__text'>{category.title}</h2>
    </div>
  );
};

export default MainCategories;
