import React from 'react';
import { Link } from 'react-router-dom';
import camera from '../../assets/Videos/videoCameraShot.mp4';
import './HeaderVideo.css';

const HeaderVideo = () => {
  return (
    <div className='headerVideo'>
      <div className='overlay'></div>
      <video autoPlay loop muted id='video'>
        <source src={camera} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Welcome</h1>
        <p>To Gravity Media Site.</p>

        <div>
          <Link to='/about' className='btn'>
            Get Started
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderVideo;
