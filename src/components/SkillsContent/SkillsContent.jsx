import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import { skills } from '../../assets/skills.js';

const SkillsContent = () => {
  // console.log('props skillscontent');
  // console.log(props[0].title);
  return (
    <>
      {skills.map((skill, index) => (
        <SkillCard {...skill} key={'Skills' + index} />
      ))}
    </>
  );
};

export default SkillsContent;
