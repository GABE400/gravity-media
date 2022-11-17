import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-form' id='contact'>
      <form>
        <h2>
          Contact <span>Form</span>
        </h2>
        <input type='text' placeholder='Name' name='' />
        <input type='email' placeholder='Email' name='' />
        <input type='text' placeholder='Subject' name='' />
        <textarea placeholder='Type Message' rows='6'></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
