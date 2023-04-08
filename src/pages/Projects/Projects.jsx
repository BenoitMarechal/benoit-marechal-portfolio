import React, { useEffect, useState, useCallback } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectsTagsContainer from '../../components/ProjectsTagsContainer/ProjectsTagsContainer';
import ProjectTag from '../../components/ProjectTag/ProjectTag';
//import ProjectTag from '../../components/ProjectTag/ProjectTag';

const Projects = () => {
  //get All projects
  // adding visible propety to eachproject

  const [allProjects, setAllProjects] = useState([]);

  const mapProjects = useCallback(() => {
    const all = projects.map((item) => {
      return { ...item, visible: true };
    });
    setAllProjects(all);
  }, []);

  useEffect(() => {
    mapProjects();
  }, [mapProjects]);

  ////////////////////////////////CHECKS////////////////////////////////////////////
  useEffect(() => {
    console.log('allProjects');
    console.log(allProjects);
  }, [allProjects]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS </h1>
        {/* //////////////////////////////RECHERCHE///////////////////////////////// */}
        <div className='projects__main__search'>
          {/* <ProjectSearchBar onSearch={onSearch} /> */}
          <div className='projects__main__search__tagsContainer'>
            coucou
            {/* {allTags.map((tag, index) =>
              tag.visible ? (
                <ProjectTag
                  {...tag}
                  activeFunction={toggleActiveTag}
                  visibleFunction={toggleVisibleTag}
                  key={index}
                />
              ) : (
                ''
              )
            )} */}
          </div>
          {/* <ProjectsTagsContainer
            tags={allTags}
            activeFunction={toggleActiveTag}
            visibleFunction={toggleVisibleTag}
          /> */}
        </div>

        {/* //////////////////////////////AFFICHAGE DES PROJECTS///////////////////////////////// */}
        {allProjects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Projects;

// Projets manquants:
// Billed (back-End)
// SportSee (backend)
//Argent bank (backend)
