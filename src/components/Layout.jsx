import React from 'react';

// Components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
