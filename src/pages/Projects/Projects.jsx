import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectsTagsContainer from '../../components/ProjectsTagsContainer/ProjectsTagsContainer';
import ProjectTag from '../../components/ProjectTag/ProjectTag';
//import ProjectTag from '../../components/ProjectTag/ProjectTag';

const Projects = () => {
  const [visibleProjects, setvisibleProjects] = useState(projects);
  //////////////////////////////text search///////////////////////////////////////
  const [search, setSearch] = useState('');
  function onSearch(e) {
    setSearch(e.target.value.toLowerCase());
  }
  function resetSearch() {
    setvisibleProjects(projects);
  }

  ////A changer aussi, recherche pour un string
  function searchProjects(string) {
    //setvisibleProjects([]);
    string = string.toLowerCase();
    let matches = [];
    projects.map((project) => {
      // search in links
      project.links.map((link) => {
        if (link.link.includes(string)) {
          if (matches.includes(project) === false) {
            console.log('found in ' + project.name);
            matches.push(project);
          }
        }
        return undefined;
      });
      // search in all the rest
      for (const [key, value] of Object.entries(project)) {
        if (
          value !== undefined &&
          value.toString().toLowerCase().includes(string)
        ) {
          if (matches.includes(project) === false) {
            console.log('found in ' + project.name);
            matches.push(project);
          }
        }
      }
      return undefined;
    });
    //console.log('matches');
    //console.log(matches);
    return matches;

    //setvisibleProjects(matches);
  }

  // useEffect for text search
  // useEffect(() => {
  //   if (search.length > 2) {
  //     searchProjects(search);
  //   } else {
  //     resetSearch();
  //   }
  // }, [search]);

  /////////////////////TAGS SEARCH////////////////////////////////////
  // declare All tags
  const [allTags, setAllTags] = useState([]);
  // get All tags without duplicates
  useEffect(() => {
    let target = [];
    projects.forEach((project) => {
      let projectTagsArray = project.tags.split(' ');
      projectTagsArray.forEach((tag) => {
        if (!target.includes(tag)) {
          target.push(tag);
        }
      });
    });
    setAllTags([
      ...allTags,
      ...target.map((tag) => {
        return { tag: tag, active: false, visible: true };
      }),
    ]);
  }, [projects]);
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

  ///////////////////////////// ARRAY SEARCH/////////////////////////////////
  const [searchArray, setSearchArray] = useState([]);
  //search every string from an array in all projects and updates visible projects)
  function searchFromArray(array) {
    setvisibleProjects([]);
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 2) {
        console.log('searching ' + array[i]);
        result.push(...searchProjects(array[i]));
      }
    }
    console.log('result');
    console.log(result);
    setvisibleProjects(result);
  }

  /////////////////////////////////////////////////////////////////////////////////////
  //update search array
  useEffect(() => {
    let activeTags = [];
    allTags.map((tag) => {
      if (tag.active) {
        activeTags.push(tag.tag);
      }
    });
    setSearchArray([search, ...activeTags]);
  }, [search, allTags]);

  ///search when search array is modified
  useEffect(() => {
    if (searchArray[0] !== '') {
      searchFromArray(searchArray);
    }
  }, [searchArray]);

  ///////udpate visibilty of tags
  //(useState) => {};

  //monitoring search Array (debug)
  //check
  useEffect(() => {
    console.log('searchArray');
    console.log(searchArray);
  }, [searchArray]);
  //monitoring allTags (debug)
  // useEffect(() => {
  //   console.log('allTags');
  //   console.log(allTags);
  // }, [allTags]);
  //monitoring visibleProjects (debug)
  useEffect(() => {
    console.log('visibleProjects');
    console.log(visibleProjects);
  }, [visibleProjects]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS </h1>
        {/* //////////////////////////////RECHERCHE///////////////////////////////// */}
        <div className='projects__main__search'>
          <ProjectSearchBar onSearch={onSearch} />
          <div className='projects__main__search__tagsContainer'>
            {allTags.map((tag, index) =>
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
            )}
          </div>
          {/* <ProjectsTagsContainer
            tags={allTags}
            activeFunction={toggleActiveTag}
            visibleFunction={toggleVisibleTag}
          /> */}
        </div>

        {/* //////////////////////////////AFFICHAGE DES PROJECTS///////////////////////////////// */}
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
