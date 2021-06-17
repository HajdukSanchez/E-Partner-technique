import React from 'react';
// Styles
import '../styles/components/Main.scss';

// Components
import Button from './Button';
import MainCategories from './MainCategories';

const Main = () => {
  // Data for the categories inside the Main
  const dataCategories = [
    {
      id: 1,
      title: 'Seguridad en el baño',
      image: 'https://impormedical.com.co/images/categorias/MOVILIDAD2-1920X580.jpg',
    },
    {
      id: 2,
      title: 'Tapabocas',
      image: 'https://impormedical.com.co/images/virtuemart/category/CONFORT_1920X580.jpg',
    },
    {
      id: 3,
      title: 'Silla de ruedas',
      image: 'https://impormedical.com.co/images/categorias/profesionalesalud.jpg',
    },
    {
      id: 4,
      title: 'Ayudas para la marcha',
      image: 'https://impormedical.com.co/images/categorias/MOVILIDAD2-1920X580.jpg',
    },
  ];

  return (
    <>
      <div className='Main'>
        <div className='Main__container'>
          <h1 className='Main__title'>
            <span>Más</span> de
            <br />
            800 mil
            <br />
            familias
            <br />
            habilitadas
          </h1>
          <Button text={'Ver productos'} />
        </div>
      </div>
      <div className='Main__categories'>
        {dataCategories.map((category) => (
          <MainCategories category={category} key={category.id} />
        ))}
      </div>
    </>
  );
};

export default Main;
