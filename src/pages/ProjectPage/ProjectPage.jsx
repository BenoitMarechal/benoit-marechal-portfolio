import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import projects from '../../assets/projects.json';
import projectLabels from '../../assets/projectLabels.json';

const ProjectPage = () => {
  console.log(projects);
  let projectName = new URLSearchParams(window.location.search).get('name');
  let project = projects.find((elt) => elt.name === projectName);
  console.log(project);

  return (
    <div className='app'>
      <Header></Header>
      <main className='project__main'>
        <h1>{project.name}</h1>
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
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ProjectPage;
