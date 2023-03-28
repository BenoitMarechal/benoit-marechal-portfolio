import React from 'react';
const ToolCard = (prop) => {
  console.log(prop);
  return (
    <div
      className='toolcard bg-tertiary'
      style={prop.color ? { color: prop.color } : { color: 'black' }}
    >
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
            // style={prop.style ? prop.style : {}}
            className='toolcard__link__logo'
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
