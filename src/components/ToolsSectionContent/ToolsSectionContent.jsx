import React from 'react';
import { tools } from '../../assets/toolSectionContent';
import ToolCard from '../ToolCard/ToolCard';

const ToolsSectionContent = () => {
  return (
    <div className='section__content cv-tools__section__content'>
      {tools.map((item, index) => (
        <ToolCard {...item} key={index}></ToolCard>
      ))}
    </div>
  );
};

export default ToolsSectionContent;
