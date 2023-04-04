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
        <ul className='xp__content__bulletPointsUl'>
          {props.bulletPoints.map((point, index) => (
            <li
              className='xp__content__bulletPointsUl__li'
              key={'point' + index}
            >
              {point}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}

      {props.links ? (
        <div className='xp__content__linksContainer'>
          {props.links.map((link, index) =>
            link.type === 'a' ? (
              <a
                className='xp__content__linksContainer__link'
                href={link.link}
                key={'link' + index}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.text}
              </a>
            ) : (
              <Link
                className='xp__content__linksContainer__link'
                key={'link' + index}
                to={link.link}
              >
                {link.text}
              </Link>
            )
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ExperienceCard;
