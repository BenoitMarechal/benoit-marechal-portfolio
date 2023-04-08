import React from 'react';
import projectLabels from '../../assets/projectLabels.json';
import { Link } from 'react-router-dom';

const ProjectCard = (project) => {
  return (
    // <div className={project.visible === 'true' ? 'projectCard' : 'none'}>
    <div className='projectCard'>
      <Link to={'/project/?name=' + project.name} {...project}>
        <h2 className='projectCard__h2'>{project.name}</h2>
      </Link>

      {project.links
        ? project.links.map((link, index) => (
            <a
              key={project.name + index}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className='projectCard__link'
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
