import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  // console.log(projects);

  return (
    <div className='app'>
      <Header></Header>
      <main>
        <h1>PROJETS</h1>
        {projects.map((project) => (
          <ProjectCard {...project} key={project.name}></ProjectCard>
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
