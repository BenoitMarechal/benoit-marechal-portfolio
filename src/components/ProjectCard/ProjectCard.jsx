import React from 'react';
import projectLabels from '../../assets/projectLabels.json';

const ProjectCard = (project) => {
  return (
    <div>
      <h2>{project.name}</h2>

      {project.links
        ? project.links.map((link, index) => (
            <a
              key={project.name + index}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p> </p>
              {projectLabels[link.type]}
            </a>
          ))
        : ''}

      {/* LINK TO repo */}
      {/* {project.repo ? (
        <a href={project.repo} target='_blank' rel='noopener noreferrer'>
          view on Github
        </a>
      ) : (
        ''
      )} */}
      {/* LINK TO PAGE */}
      {/* {project.page ? (
        <a href={project.page} target='_blank' rel='noopener noreferrer'>
          View Website
        </a>
      ) : (
        ''
      )} */}
    </div>
  );
};

export default ProjectCard;
