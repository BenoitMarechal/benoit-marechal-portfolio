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
    </div>
  );
};

export default ProjectCard;
