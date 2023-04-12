import React, { useEffect, useState } from 'react';
import projectLabels from '../../assets/projectLabels.json';
import { Link } from 'react-router-dom';
import { BsPlusCircleFill } from 'react-icons/bs';
//import logo from '../../../public/projectImages/argentbank/overview.png';

const ProjectCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  function toggleProjectModal() {
    setModalOpen(!modalOpen);
  }
  console.log(props);
  let folderName = props.name.toLowerCase().replace(/\s/g, '');
  let overViewPath = './projectImages/' + folderName + '/overview.png';

  return (
    <div
      className={
        props.visible === 'true' ? 'projectCard ' : ' projectCard  none'
      }
    >
      <div
        className='projectCard__modalContainer'
        onMouseOver={() => setModalOpen(true)}
        onMouseOut={() => setModalOpen(false)}
      >
        <h2 className='projectCard__modalContainer__title'>{props.name}</h2>

        <img
          className='projectCard__modalContainer__overview'
          src={overViewPath}
          alt={'logo'}
        />
        {modalOpen ? (
          <div className='projectCard__modalContainer__modal bg-secondary-dark-30'>
            COUCOU
            <Link
              className='projectCard__modalContainer__modal__link'
              to={'/project/?name=' + props.name}
            >
              {' '}
              <BsPlusCircleFill />
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className='projectCard__linkContainer'>
        {props.links
          ? props.links.map((link, index) =>
              index < 2 ? (
                <a
                  key={props.name + index}
                  href={link.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='projectCard__linkContainer__link'
                  style={{ order: { index } }}
                >
                  {projectLabels[link.type]}
                </a>
              ) : (
                ''
              )
            )
          : ''}
        <Link
          className='projectCard__linkContainer__link projectCard__linkContainer__link__plus'
          to={'/project/?name=' + props.name}
        >
          {' '}
          <BsPlusCircleFill />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
