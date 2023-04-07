import React, { useState } from 'react';

const ProjectTag = (props) => {
  const [active, setActive] = useState(false);
  function toggleActive() {
    setActive(!active);
  }
  // console.log('props du tag');
  // console.log(props);
  function handleClick(string) {
    if (active === false) {
      props.onClick(props.tag);
    }
    toggleActive();
  }
  return (
    <button
      onClick={handleClick}
      className={active === true ? 'projectTag tagActive' : 'projectTag'}
    >
      {'#' + props.tag}
    </button>
  );
};

export default ProjectTag;
