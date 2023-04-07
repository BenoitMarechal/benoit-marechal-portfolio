import React from 'react';

const ProjectTag = (props) => {
  console.log('props du tag');
  console.log(props);
  return <button className='projectTag'>{'#' + props.tag}</button>;
};

export default ProjectTag;
