import React from 'react';
const ToolCard = (props) => {
  return (
    <div
      className='toolcard bg-tertiary'
      style={props.color ? { color: props.color } : { color: 'black' }}
    >
      <a
        href={props.link}
        className='toolcard__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.logo ? (
          <img
            src={props.logo}
            alt={props.name}
            // style={props.style ? props.style : {}}
            className='toolcard__link__logo'
          />
        ) : (
          ''
        )}

        {props.name}
      </a>
    </div>
  );
};

export default ToolCard;
