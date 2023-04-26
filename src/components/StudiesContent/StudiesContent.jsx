import React from 'react';
import { studies } from '../../assets/studies.js';
import ExperienceCard from '../ExperienceCard/ExperienceCard.jsx';

const StudiesContent = () => {
  //   console.log(studies);
  return (
    <>
      {studies.map((study, index) => (
        <ExperienceCard {...study} key={'studies-' + index} />
      ))}
    </>
  );
};

export default StudiesContent;
