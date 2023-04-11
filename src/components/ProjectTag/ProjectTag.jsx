import React, { useState } from 'react';

const ProjectTag = (props) => {
  // console.log('props du tag');
  // console.log(props);
  function handleClick() {
    props.activeFunction(props.tag);
  }

  return (
    <button
      onClick={handleClick}
      disabled={props.disabled}
      className={
        props.active === 'true' ? 'projectTag tagActive' : 'projectTag'
      }
    >
      {'#' + props.tag}
    </button>
  );
};

export default ProjectTag;
