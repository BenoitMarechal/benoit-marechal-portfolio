import React from 'react';
import { tools } from '../../assets/toolSectionContent';
import ToolCard from '../ToolCard/ToolCard';

const ToolsSectionContent = () => {
  return (
    <>
      {tools.map((item, index) => (
        <ToolCard {...item} key={'tools-' + index}></ToolCard>
      ))}
    </>
  );
};

export default ToolsSectionContent;
