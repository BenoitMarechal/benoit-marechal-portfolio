import React from 'react';
import { tools } from '../../assets/toolSectionContent';
import ToolCard from '../ToolCard/ToolCard';
import './toolsSection.scss';

const ToolsSectionContent = () => {
  return (
    <fieldset className='section cv__tools '>
      <legend className='section__legend'>Outils et technologies</legend>
      {tools.map((item, index) => (
        <ToolCard {...item} key={index}></ToolCard>
      ))}
    </fieldset>
  );
};

export default ToolsSectionContent;
