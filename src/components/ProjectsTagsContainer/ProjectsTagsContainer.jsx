import React from 'react';
import ProjectTag from '../ProjectTag/ProjectTag';

const ProjectsTagsContainer = (props) => {
  console.log('props du container');
  console.log(props);
  return (
    <div className='projects__main__search__tagsContainer'>
      {props.tagsList && props.tagsList.length !== 0
        ? props.tagsList.map((tag, index) => (
            <ProjectTag key={index} tag={tag}></ProjectTag>
          ))
        : 'pas de tags'}
    </div>
  );
};

export default ProjectsTagsContainer;
