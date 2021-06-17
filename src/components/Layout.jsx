import React from 'react';

// Components
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
