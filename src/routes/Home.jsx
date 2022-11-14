import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';
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
      <Footer />
    </div>
  );
};

export default Home;
