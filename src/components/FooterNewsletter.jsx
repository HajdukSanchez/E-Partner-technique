import React from 'react';
// Styles
import '../styles/components/FooterNewsletter.scss';

const FooterNewsletter = () => {
  const paymentMethods = [
    {
      id: 1,
      image: 'https://seeklogo.com/images/M/mercadopago-logo-FC9BA7420E-seeklogo.com.png',
    },
    {
      id: 2,
      image: 'https://seeklogo.com/images/A/american-express-logo-F365CA38BB-seeklogo.com.png',
    },
    {
      id: 3,
      image: 'https://www.easygameitems.com/egi19wp/wp-content/uploads/2019/09/egi-mp-via-baloto.png',
    },
    {
      id: 4,
      image: 'https://seeklogo.com/images/D/Diners_Club-logo-53DC9C1F56-seeklogo.com.png',
    },
    {
      id: 5,
      image: 'https://www.easygameitems.com/egi19wp/wp-content/uploads/2019/09/egi-mp-efecty.png',
    },
    {
      id: 6,
      image: 'https://seeklogo.com/images/M/mastercard-logo-38C4789CCA-seeklogo.com.png',
    },
    {
      id: 7,
      image: 'https://seeklogo.com/images/V/VISA-logo-16F4F82D13-seeklogo.com.png',
    },
    {
      id: 8,
      image: 'https://logodix.com/logo/1884923.png',
    },
  ];

  return (
    <div className='FooterNewsletter'>
      <h1 className='Footer__title'>Suscríbase a nuestro Newsletter</h1>
      <input className='input input--footer' type='text' />
      <label htmlFor='terms' className='FooterNewsletter__check'>
        <input type='checkbox' name='terms' />
        <h3>Aceptación de términos y condiciones de manejo de datos</h3>
      </label>
      <h3>Nuestros métodos de pago</h3>
      <div className='FooterNewsletter__payment'>
        {paymentMethods.map((item) => (
          <div className='FooterNewsletter__payment--item' key={item.id}>
            <img src={item.image} alt='Payment method' className='FooterNewsletter__payment--image' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNewsletter;
