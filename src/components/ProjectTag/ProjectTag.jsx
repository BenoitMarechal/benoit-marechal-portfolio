import React, { useState } from 'react';

const ProjectTag = (props) => {
  //console.log('props du tag');
  // console.log(props);
  // const [active, setActive] = useState(false);
  // function toggleActive() {
  //   setActive(!active);
  // }
  // console.log('props du tag');
  // console.log(props);
  function handleClick() {
    //console.log(props.tag);
    props.activeFunction(props.tag);
    // if (active === false) {
    //   props.onClick(props.tag);
    // }
    //toggleActive();
  }

  return (
    <button
      onClick={handleClick}
      className={
        props.active === 'true' ? 'projectTag tagActive' : 'projectTag'
      }
    >
      {'#' + props.tag}
    </button>
  );
};

export default ProjectTag;
