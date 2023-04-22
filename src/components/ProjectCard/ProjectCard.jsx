import React, { useState } from 'react';
import projectLabels from '../../assets/projectLabels.json';

//import logo from '../../../public/projectImages/argentbank/overview.png';

const ProjectCard = (props) => {
  console.log(props);
  const [modalOpen, setModalOpen] = useState(true);
  let tagsList = props.tags.split(' ');
  //console.log(props);
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
          onClick={() => {
            setModalOpen(true);
          }}
        />
        {modalOpen ? (
          <div
            className='projectCard__modalContainer__modal bg-secondary-dark-30'
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <div className='projectCard__modalContainer__modal__abstract'>
              {props.abstract.map((parag, index) => (
                <React.Fragment key={index}>
                  {parag} {<br />}
                </React.Fragment>
              ))}
            </div>
            <div className='projectCard__modalContainer__modal__tagList'>
              Mots-clés:{' '}
              {tagsList.map((tag, index) =>
                index === tagsList.length - 1 ? tag + '.' : tag + ', '
              )}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className='projectCard__linkContainer'>
        {props.links
          ? props.links.map((link, index) => (
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
            ))
          : ''}
      </div>
    </div>
  );
};

export default ProjectCard;
