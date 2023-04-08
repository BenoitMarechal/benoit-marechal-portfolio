import React from 'react';
import ProjectTag from '../ProjectTag/ProjectTag';

const ProjectsTagsContainer = (props) => {
  // console.log('props du container');
  // console.log(props);
  return (
    <div className='projects__main__search__tagsContainer'>
      {props.tags.map((tag, index) =>
        tag.visible ? (
          <ProjectTag key={index} {...tag} {...props}></ProjectTag>
        ) : (
          ''
        )
      )}
    </div>
  );
};

export default ProjectsTagsContainer;
