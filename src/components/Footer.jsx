import React from 'react';
// Styles
import '../styles/components/Footer.scss';

// Components
import FooterCategory from './FooterCategory';
import FooterNewsletter from './FooterNewsletter';

const Footer = () => {
  const data = [
    {
      id: 1,
      title: 'Sobre Nosotros',
      link: ['¿Quienes somos?', 'Nuestra historia', 'Nuestra información'],
    },
    {
      id: 2,
      title: 'Categorias destacadas',
      link: ['Profesionales de la salud', 'Protección e higiene', 'Control y prevención', 'Movilidad', 'Independiencia y cuidado en el hogar', 'Terapia respiratoria', 'Confort'],
    },
    {
      id: 3,
      title: 'Servicio al cliente',
      link: [
        'Politica de entregas',
        'Politica de devoluciones',
        'Politica de garantias',
        'Politica de cancelación',
        'Whatsapp 123 123 3434',
        'PBX 01 8000 123 345',
        'e-Mail: info@impormedical.com',
      ],
    },
  ];

  return (
    <div className='Footer'>
      <div className='Footer--top'>
        {data.map((data) => (
          <FooterCategory key={data.id} title={data.title} links={data.link} />
        ))}
        <FooterNewsletter />
      </div>
      <div className='Footer--bottom'>
        <ul className='Footer__list'>
          <li className='Footer__item'>
            <h5>Desarrolado por</h5>
          </li>
          <li className='Footer__item'>
            <div className='Footer__item--image'>
              <img src='https://digitalepartner.com/wp-content/uploads/2021/06/logo-blanco@4x.png' alt='EPartner logo' />
            </div>
          </li>
          <li className='Footer__item'>
            <div className='Footer__item--image'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/2560px-VTEX_Logo.svg.png' alt='Vtex logo' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
