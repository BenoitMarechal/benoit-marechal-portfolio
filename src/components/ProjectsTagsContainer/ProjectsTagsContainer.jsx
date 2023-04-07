import React from 'react';
import ProjectTag from '../ProjectTag/ProjectTag';

const ProjectsTagsContainer = (props) => {
  //console.log(props);
  return (
    <div className='projects__main__search__tagsContainer'>
      {props.tagList && props.tagList.length !== 0
        ? props.tagList.map((tag, index) => (
            <ProjectTag key={index} {...tag}></ProjectTag>
          ))
        : 'pas de tags'}
    </div>
  );
};

export default ProjectsTagsContainer;
