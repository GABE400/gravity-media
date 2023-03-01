import React from 'react';
import './Services.css';
import {
  FaVideo,
  FaDigitalTachograph,
  FaPalette,
  FaCameraRetro,
  FaBook,
  FaWaveSquare,
  FaInfoCircle,
  FaPlay,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Services = () => {
  return (
    <div className='servicesSection' id='services'>
      <div className='wrapper'>
        <h1>
          Our <span>Services</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className='content-box'>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaVideo />
            </IconContext.Provider>
            <h2>TV Commercials</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaVideo />
            </IconContext.Provider>
            <h2>Documentaries</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaVideo />
            </IconContext.Provider>
            <h2>TV Shows</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaPlay />
            </IconContext.Provider>
            <h2>Animations</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaInfoCircle />
            </IconContext.Provider>
            <h2>Infographics</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaCameraRetro />
            </IconContext.Provider>
            <h2>Photography</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaWaveSquare />
            </IconContext.Provider>
            <h2>Radio Production</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaBook />
            </IconContext.Provider>
            <h2>Script Writing/ Copy Writing</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaPalette />
            </IconContext.Provider>
            <h2>Graphic Design</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className='card'>
            <IconContext.Provider value={{ className: 'top-react-icons' }}>
              <FaDigitalTachograph />
            </IconContext.Provider>
            <h2>Social Media Digital Content</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
