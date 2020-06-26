import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2020 All rights reserved. Audio First, Inc.</p>
      <div className='footer'>
        <a href='http://www.helloaudio.fm/privacy' className='terms'>
          Privacy Policy
        </a>{' '}
        <p className='line'> | </p>{' '}
        <a href='http://www.helloaudio.fm/terms'>Terms of Use</a>
      </div>
    </div>
  );
};

export default Footer;
