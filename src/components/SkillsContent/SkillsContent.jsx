import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import { skills } from '../../assets/skills.js';

const SkillsContent = () => {
  // console.log('props skillscontent');
  // console.log(props[0].title);
  return (
    <div className='section__content cv-skills__section__content'>
      {skills.map((skill, index) => (
        <SkillCard {...skill} key={'Skills' + index} />
      ))}
    </div>
  );
};

export default SkillsContent;
