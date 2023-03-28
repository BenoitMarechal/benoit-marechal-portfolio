import React from 'react';
import { tools } from '../../assets/toolSectionContent';
import ToolCard from '../ToolCard/ToolCard';
import './toolsSection.scss';

const ToolsSectionContent = () => {
  return (
    <fieldset className='cv__section cv__section__tools '>
      <legend className='cv__section__legend'>Outils et technologies</legend>

      {tools.map((item, index) => (
        <ToolCard {...item} key={index}></ToolCard>
      ))}
    </fieldset>
  );
};

export default ToolsSectionContent;
