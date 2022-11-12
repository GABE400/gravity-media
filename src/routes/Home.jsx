import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import HeaderVideo from '../components/Header/HeaderVideo';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderVideo />
      <AboutUs />
    </div>
  );
};

export default Home;
