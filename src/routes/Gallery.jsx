import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage';

const Gallery = () => {
  return (
    <div className='gallery'>
      <Navbar />
      <HeroImage heading='GALLERY.' text='Choose your trip' />
      <Footer />
    </div>
  );
};

export default Gallery;
