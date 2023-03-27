import React, { useState } from 'react';

const Footer = () => {
  // useState(() => {
  //   console.log('footer');
  // }, []);
  return (
    <footer className='footer bg-gradient'>
      <p> &copy; Benoit Maréchal, 2023</p>
      <p>Développé sur React</p>
      <p>Hébergé sur GitHub </p>
      <p>Déployé sur Vercel</p>
    </footer>
  );
};

export default Footer;
