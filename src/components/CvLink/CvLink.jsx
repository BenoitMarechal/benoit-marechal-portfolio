import React from 'react';
import pdf from '../../assets/documents/CV_BENOIT_MARECHAL.pdf';
import pdfLogo from '../../assets/logos/pdfLogo.png';

const CvLink = () => {
  return (
    <div className='cv__downloadLink'>
      <img
        src={pdfLogo}
        alt='Version pdf du CV'
        className='cv__downloadLink__logo'
      />
      <a
        href={pdf}
        className='cv__downloadLink__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        Accéder au pdf
      </a>
    </div>
  );
};

export default CvLink;
