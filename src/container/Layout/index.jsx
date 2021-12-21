import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function index({ children }) {
  return (
    <div className='container'>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default index;