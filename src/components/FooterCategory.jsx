import React from 'react';
// Styles
import '../styles/components/FooterCategory.scss';

const FooterCategory = ({ title, links }) => {
  return (
    <div className='FooterCategory'>
      <h1 className='Footer__title'>{title}</h1>
      {links.map((link, index) => (
        <a key={index} className='FooterCategory__item'>
          <h4 className='FooterCategory__item--text'>{link}</h4>
        </a>
      ))}
    </div>
  );
};

export default FooterCategory;
