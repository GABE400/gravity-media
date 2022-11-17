import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage';
import ImageGallery from '../components/ImageGallery/ImageGallery';

const Gallery = () => {
  return (
    <div className='gallery'>
      <Navbar />
      <HeroImage heading='WHAT WE DO' text='The Photo Gallery.' />
      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
