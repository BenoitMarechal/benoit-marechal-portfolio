import React from 'react';

const SkillCard = (props) => {
  return (
    <div className='section__content__sub cv-skills__section__content__sub'>
      <h3 className='cv-skills__section__content__sub__h3'>{props.title}</h3>
      {props.skills ? (
        <ul className='cv-skills__section__content__sub__ul'>
          {props.skills.map((skill, index) => (
            <li
              className='cv-skills__section__content__sub__ul__li'
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default SkillCard;
