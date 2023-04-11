import React, { useEffect, useState } from 'react';
import projectLabels from '../../assets/projectLabels.json';
import { Link } from 'react-router-dom';
//import logo from '../../../public/projectImages/argentbank/overview.png';

const ProjectCard = (props) => {
  let folderName = props.name.toLowerCase().replace(/\s/g, '');
  let overViewPath = './projectImages/' + folderName + '/overview.png';

  // useEffect(() => {
  //   const folderName = props.name.toLowerCase().replace(/\s/g, '');
  //   const overViewPath =
  //     '../../assets/photos/projets/' + folderName + '/overview.png';
  //   import(overViewPath)
  //     .then((imageModule) => {
  //       setOverView(imageModule.default);
  //     })
  //     .catch((error) => {
  //       console.error('Failed to load image:', error);
  //     });
  // }, [props.name]);
  return (
    <div
      className={props.visible === 'true' ? 'propsCard ' : ' propsCard  none'}
    >
      {/* <div className='projectCard'> */}
      <Link to={'/project/?name=' + props.name} {...props}>
        <h2 className='projectCard__h2'>{props.name}</h2>
      </Link>
      <img src={overViewPath} alt={'logo'} />

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
