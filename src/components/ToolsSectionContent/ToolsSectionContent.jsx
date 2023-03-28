import React from 'react';
import { tools } from '../../assets/toolSectionContent';
import ToolCard from '../ToolCard/ToolCard';

const ToolsSectionContent = () => {
  return (
    <fieldset className='section cv__tools bg-tertiary-light-10 '>
      <legend className='section__legend'>Outils et technologies</legend>
      {tools.map((item, index) => (
        <ToolCard {...item} key={index}></ToolCard>
      ))}
    </fieldset>
  );
};

export default ToolsSectionContent;
