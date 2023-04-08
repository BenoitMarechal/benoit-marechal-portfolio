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
  useEffect(() => {
    const all = projects.map((item) => {
      //let hop = true;
      //imposisble de passer un boolean???
      return { ...item, visible: 'true' };
    });
    setAllProjects(all);
  }, [projects]);

  /// get All tags
  const [allTags, setAllTags] = useState([]);
  useEffect(() => {
    let result = [];
    allProjects.map((project) => {
      // console.log(project);
      let line = project.tags.split(' ');
      for (let i = 0; i < line.length; i++) {
        // console.log(line[i]);
        if (!result.includes(line[i])) {
          //  console.log(line[i]);
          result.push(line[i]);
        }
      }
    });
    let full = result.map((tag) => ({
      tag: tag,
      visible: true,
      active: false,
    }));

    setAllTags(full);
  }, [allProjects]);
  ///declare tags togle function
  //toggle tags functions
  const toggleActiveTag = (tag) => {
    let target = [...allTags];
    for (let i = 0; i < target.length; i++) {
      if (target[i].tag === tag) {
        target[i].active = !target[i].active;
      }
    }
    setAllTags(target);
  };
  const toggleVisibleTag = (tag) => {
    let target = [...allTags];
    for (let i = 0; i < target.length; i++) {
      if (target[i].tag === tag) {
        target[i].visible = !target[i].visible;
      }
    }
    setAllTags(target);
  };

  ///////////////////get Search value
  const [search, setSearch] = useState();
  function handleSearch(e) {
    if (e.target.value.length > 2) {
      setSearch(e.target.value);
    } else {
      setSearch(undefined);
    }
  }

  //construction d'un tableau de recherche
  const [searchArray, setSearchArray] = useState([]);
  useEffect(() => {
    //let target = [search];
    let activeTags = [];
    for (let i = 0; i < allTags.length; i++) {
      if (allTags[i].active === true) {
        activeTags.push(allTags[i].tag);
      }
    }
    setSearchArray([search, ...activeTags]);
  }, [search, allTags]);

  ////////////////////////////////CHECKS////////////////////////////////////////////
  useEffect(() => {
    // console.log('allProjects');
    // console.log(allProjects);
  }, [allProjects]);
  useEffect(() => {
    //console.log('allTags');
    // console.log(allTags);
  }, [allTags]);
  useEffect(() => {
    //  console.log('search');
    //  console.log(search);
  }, [search]);
  useEffect(() => {
    console.log('searchArray');
    console.log(searchArray);
  }, [searchArray]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS </h1>
        {/* //////////////////////////////RECHERCHE///////////////////////////////// */}
        <div className='projects__main__search'>
          <ProjectSearchBar onSearch={handleSearch} />
          {/* AFFICHAGE DES TAGS */}
          <div className='projects__main__search__tagsContainer'>
            {allTags.map((tag, index) =>
              tag.visible === true ? (
                <ProjectTag
                  {...tag}
                  activeFunction={toggleActiveTag}
                  visibleFunction={toggleVisibleTag}
                  key={index}
                />
              ) : (
                ''
              )
            )}
          </div>
          <div>
            {/* AFFICHAGE DES PROJETS */}
            {allProjects.map((project, index) =>
              project.visible === 'true' ? (
                <ProjectCard {...project} key={index} />
              ) : (
                ''
              )
            )}
          </div>

          {/* <ProjectsTagsContainer
            tags={allTags}
            activeFunction={toggleActiveTag}
            visibleFunction={toggleVisibleTag}
          /> */}
        </div>

        {/* //////////////////////////////AFFICHAGE DES PROJECTS///////////////////////////////// */}
        {/* prob visible */}
        {allProjects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
        {/* prob visible */}
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
