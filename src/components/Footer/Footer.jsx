import React from 'react';
import './Footer.css';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <div>
              <p>Salamma Park.</p>
              <h4>Lusaka, Zambia</h4>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
              +260978690587 | +260965044842
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
              name@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About the company</h4>
          <p>
            A media company that leads with greatness to all welcome to gravity
            media
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#ffffff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
