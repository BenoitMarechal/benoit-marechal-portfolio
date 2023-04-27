import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='footer bg-gradient'>
      <div className='footer__container'>
        <p className='footer__p'>
          {' '}
          Benoit Maréchal, 2023{' '}
          <a
            className='footer__p__a'
            href='https://www.linkedin.com/in/benoit-mar%C3%A9chal-149ab3207/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsLinkedin />
          </a>
        </p>
        <p className='footer__p'>
          Hébergé sur GitHub{' '}
          <a
            className='footer__p__a'
            href='https://github.com/BenoitMarechal/benoit-marechal-portfolio.git'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BsGithub />{' '}
          </a>
        </p>
      </div>
      {/* <div className='footer__container'>
        <p className='footer__p'>Développé sur React</p>

        <p className='footer__p'>Déployé sur Vercel</p>
      </div> */}
    </footer>
  );
};

export default Footer;
