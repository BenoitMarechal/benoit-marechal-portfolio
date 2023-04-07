import React from 'react';

const ProjectTag = (props) => {
  return <button className='projectTag'>{'#' + props.tag}</button>;
};

export default ProjectTag;
