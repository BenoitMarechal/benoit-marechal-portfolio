import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceCard = (props) => {
  return (
    <div className='xp__content'>
      <h3 className='xp__content__h3'>
        {props.start ? props.start + '-' : ''} {props.end} : {props.title}
      </h3>
      <div className='xp__content__place'>{props.place}</div>

      {props.bulletPoints ? (
        <ul>
          {props.bulletPoints.map((point, index) => (
            <li key={'point' + index}>{point}</li>
          ))}
        </ul>
      ) : (
        ''
      )}

      {props.links ? (
        <ul>
          {props.links.map((link, index) =>
            link.type === 'a' ? (
              <a
                href={link.link}
                key={'link' + index}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.text}
              </a>
            ) : (
              <Link key={'link' + index} to={link.link}>
                {link.text}
              </Link>
            )
          )}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default ExperienceCard;
