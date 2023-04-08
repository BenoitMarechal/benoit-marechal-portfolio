import React from 'react';
import projectLabels from '../../assets/projectLabels.json';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  console.log(props);
  return (
    <div
      className={props.visible === 'true' ? 'propsCard ' : ' propsCard  none'}
    >
      {/* <div className='projectCard'> */}
      <Link to={'/project/?name=' + props.name} {...props}>
        <h2 className='projectCard__h2'>{props.name}</h2>
      </Link>

      {props.links
        ? props.links.map((link, index) => (
            <a
              key={props.name + index}
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
