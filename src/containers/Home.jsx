import React from 'react';
// Styles
import '../styles/containers/Home.scss';

// Components
import Main from '../components/Main';
import Products from '../components/Products';

const Home = () => {
  // List of Products
  const productsList = [
    {
      id: 1,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg',
    },
    {
      id: 2,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg',
    },
    {
      id: 3,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg',
    },
    {
      id: 4,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quasi ipsam accusamus ducimus rem libero illum itaque, perferendis sint ratione?',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91XB8c9CzSL._AC_SX425_.jpg',
    },
  ];

  return (
    <div className='Home'>
      <Main />
      <Products title='Nueva colección' products={productsList} />
    </div>
  );
};

export default Home;
