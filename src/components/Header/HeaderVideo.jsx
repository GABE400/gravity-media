import React from 'react';
import Camera from '../../assets/Videos/videoCameraShot.mp4';
import './HeaderVideo.css';
import { Link } from 'react-scroll';

const HeaderVideo = () => {
  return (
    <div className='headerVideo'>
      <div className='overlay'></div>
      <video autoPlay loop muted id='video'>
        <source src={Camera} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>
          Gravity <span>Media</span>
        </h1>
        <p>Welcome To Our Site.</p>

        <div>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
            className='btn'
          >
            Get Started
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={1000}
            className='btn btn-light'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderVideo;
