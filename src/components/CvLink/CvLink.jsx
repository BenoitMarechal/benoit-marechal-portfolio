import React from 'react';
import pdf from '../../assets/documents/CV_BENOIT_MARECHAL.pdf';

const CvLink = () => {
  return (
    <div>
      <a href={pdf} target='_blank' rel='noopener noreferrer'>
        Accéder au pdf
      </a>
    </div>
  );
};

export default CvLink;
