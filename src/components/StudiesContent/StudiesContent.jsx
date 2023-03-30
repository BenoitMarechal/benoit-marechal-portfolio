import React from 'react';
import { studies } from '../../assets/studies.js';
import ExperienceCard from '../ExperienceCard/ExperienceCard.jsx';

const StudiesContent = () => {
  //   console.log(studies);
  return (
    <div className='section__content cv__studies__section__content '>
      {studies.map((study, index) => (
        <ExperienceCard {...study} key={'studies-' + index} />
      ))}
    </div>
  );
};

export default StudiesContent;
