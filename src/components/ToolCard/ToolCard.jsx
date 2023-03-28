import React from 'react';
import './toolCard.scss';
const ToolCard = (prop) => {
  return (
    <div className='toolcard'>
      <a
        href={prop.link}
        className='toolcard__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {prop.logo ? (
          <img
            src={prop.logo}
            alt={prop.name}
            // {img.color?'':''
            className='toolcard__link__logo color-primary bg-tertiary'
          />
        ) : (
          ''
        )}

        {prop.name}
      </a>
    </div>
  );
};

export default ToolCard;
