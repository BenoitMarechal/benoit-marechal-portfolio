import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectsTagsContainer from '../../components/ProjectsTagsContainer/ProjectsTagsContainer';
import ProjectTag from '../../components/ProjectTag/ProjectTag';

const Projects = () => {
  //text search
  const [search, setSearch] = useState('');
  const [visibleProjects, setvisibleProjects] = useState(projects);
  function onSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }
  function resetSearch() {
    setvisibleProjects(projects);
  }
  useEffect(() => {
    if (search.length > 2) {
      let matches = [];
      projects.map((project) => {
        project.links.map((link) => {
          if (link.link.includes(search)) {
            if (matches.includes(project) === false) {
              matches.push(project);
            }
          }
          return undefined;
        });
        for (const [key, value] of Object.entries(project)) {
          if (
            value !== undefined &&
            value.toString().toLowerCase().includes(search)
          ) {
            if (matches.includes(project) === false) {
              matches.push(project);
            }
          }
        }
        return undefined;
      });
      setvisibleProjects(matches);
    } else {
      resetSearch();
    }
  }, [search]);
  /////////////////////TAGS SEARCH////////////////////////////////////
  console.log('visibleProjects');
  console.log(visibleProjects);
  const [visibleTags, setVisibleTags] = useState([]);

  useEffect(() => {
    let target = [];
    visibleProjects.forEach((project) => {
      let projectTagsArray = project.tags.split(' ');
      projectTagsArray.forEach((tag) => {
        if (!target.includes(tag)) {
          target.push(tag);
        }
      });
    });
    setVisibleTags(target);
  }, [visibleProjects]);

  useEffect(() => {
    console.log('visibleTags');
    console.log(visibleTags);
  }, [visibleTags]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS</h1>
        <div className='projects__main__search'>
          <ProjectSearchBar onSearch={onSearch} />
          <ProjectsTagsContainer />
        </div>
        {visibleProjects.length !== 0 ? (
          visibleProjects.map((project) => (
            <ProjectCard {...project} key={project.name}></ProjectCard>
          ))
        ) : (
          <p className='projects__main__search__empty'>
            Oups! Il n'y a pas de projet correspondant à vos critères de
            recherche
          </p>
        )}
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
