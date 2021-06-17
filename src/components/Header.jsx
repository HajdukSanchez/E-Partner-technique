import React from 'react';
// Styles
import '../styles/components/Header.scss';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faWheelchair, faHeartbeat, faUserTie, faHandsWash, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__container Header--top'>
        <div className='Header__icon Header__icon--top'>
          <img src='https://impormedical.com.co/images/assests/IM/Logo_Impormedical_Horizontal.png' alt='Impormedical Icon' />
        </div>
        <div className='Header__input-container'>
          <input type='text' className='Header__input-text' placeholder='¿Qué estás buscando? Escríbelo aquí' />
          <div className='Header__input-button'>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <nav className='Header__nav Header__nav--top'>
          <ul className='Header__list'>
            <li className='Header__list-item'>
              <a href='/'>
                <h5>Mis pedidos</h5>
              </a>
            </li>
            <li className='Header__list-item'>
              <h5>
                Hola aliad@
                <br />
                <a href='/'>INGRESA</a>
              </h5>
            </li>
            <li className='Header__list-item Header__list-item--flex'>
              <h3>
                {'0'} <br /> <FontAwesomeIcon icon={faShoppingCart} />
              </h3>
              <h3>Carrito</h3>
            </li>
          </ul>
        </nav>
      </div>
      <div className='Header__container Header--bottom'>
        <div className='Header__icon Header__icon--bottom'>
          <a href='/'>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        <div className='Header__nav Header__nav--bottom'>
          <ul className='Header__list'>
            <li className='Header__list-item Header__list-item--bottom'>
              <a href='/'>
                <FontAwesomeIcon icon={faWheelchair} />
                <h4 className='Header__list-item--text'>MOVILIDAD</h4>
              </a>
            </li>
            <li className='Header__list-item Header__list-item--bottom'>
              <a href='/'>
                <FontAwesomeIcon icon={faHeartbeat} />
                <h4 className='Header__list-item--text'>CUIDADO EN EL HOGAR</h4>
              </a>
            </li>
            <li className='Header__list-item Header__list-item--bottom'>
              <a href='/'>
                <FontAwesomeIcon icon={faUserTie} />
                <h4 className='Header__list-item--text'>PROFESIONALES DE LA SALUD</h4>
              </a>
            </li>
            <li className='Header__list-item Header__list-item--bottom'>
              <a href='/'>
                <FontAwesomeIcon icon={faHandsWash} />
                <h4 className='Header__list-item--text'>TAPABOCAS Y DESINFECCIÓN</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
