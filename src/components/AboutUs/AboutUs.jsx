import React from 'react';
import './AboutUs.css';
import { Link } from 'react-scroll';
import {
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import imgVid from '../../assets/Img/1.png';

const AboutUs = () => {
  return (
    <div className='aboutSection' id='about'>
      <div className='container'>
        <div className='title'>
          <h1>About Us</h1>
        </div>
        <div className='aboutContent'>
          <div className='article'>
            <h3>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </h3>
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged yeah.
            </p>
            <div>
              <Link
                className='btn-down'
                to='services'
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                <FaChevronDown size={35} style={{ color: '#c35f13' }} />
              </Link>
            </div>
          </div>
        </div>
        <div className='imgSection'>
          <div className='about_image-bg'></div>
          <div className='about_image-lg'>
            <img src={imgVid} alt='' />
          </div>
          <div className='about_image-sm'>
            <img src={imgVid} alt='' />
          </div>
        </div>
        <div className='socialMedia'>
          <li>
            <Link to='/'>
              <FaFacebook size={30} style={{ color: '#1877f2' }} />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaInstagram size={30} style={{ color: '#c32aa3' }} />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaTwitter size={30} style={{ color: '#1da1f2' }} />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaLinkedin size={30} style={{ color: '#0a66c2' }} />
            </Link>
          </li>
          <li>
            <Link to='/'>
              <FaYoutube size={30} style={{ color: '#ff0000' }} />
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
