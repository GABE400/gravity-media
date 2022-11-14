import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import HeaderVideo from '../components/Header/HeaderVideo';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeaderVideo />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
