import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectsTagsContainer from '../../components/ProjectsTagsContainer/ProjectsTagsContainer';
import ProjectTag from '../../components/ProjectTag/ProjectTag';

const Projects = () => {
  const [allTags, setAllTags] = useState([]);
  projects.map((project) => {
    let lineOfTags = project.tags.split(' ');
    for (let i = 0; i < lineOfTags.length; i++) {
      if (allTags.includes(lineOfTags[i]) === false) {
        setAllTags([...allTags, lineOfTags[i]]);
      }
    }
  });
  //console.log(allTags);
  const [currentTags, setCurrentTags] = useState(allTags);
  useEffect(() => {
    setCurrentTags(allTags);
  }, [allTags]);
  //setCurrentTags(allTags);
  console.log(currentTags);
  const [tagSearch, setTagSearch] = useState({});
  //console.log(tagSearch);
  const [search, setSearch] = useState('');
  const [projectList, setProjectList] = useState(projects);
  function onSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }
  useEffect(() => {
    console.log(currentTags);
  }, [currentTags]);

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
      setProjectList(matches);
    } else {
      setProjectList(projects);
    }
  }, [search]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS</h1>
        <div className='projects__main__search'>
          <ProjectSearchBar onSearch={onSearch} />
          <ProjectsTagsContainer {...tagSearch} />
          <ProjectTag />
        </div>
        {projectList.length !== 0 ? (
          projectList.map((project) => (
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
