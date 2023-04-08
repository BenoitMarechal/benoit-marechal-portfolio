import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectsTagsContainer from '../../components/ProjectsTagsContainer/ProjectsTagsContainer';
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
  function searchProjects(string) {
    string = string.toLowerCase();
    let matches = [];
    projects.map((project) => {
      // search in links
      project.links.map((link) => {
        if (link.link.includes(string)) {
          if (matches.includes(project) === false) {
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
            matches.push(project);
          }
        }
      }
      return undefined;
    });
    setvisibleProjects(matches);
  }

  // useEffect for text search
  useEffect(() => {
    if (search.length > 2) {
      searchProjects(search);
    } else {
      resetSearch();
    }
  }, [search]);

  /////////////////////TAGS SEARCH////////////////////////////////////
  // declare All tags
  const [allTags, setAllTags] = useState([]);
  // get All tags
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
  //check get all tags

  //toggle tags function
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

  // const [visibleTags, setVisibleTags] = useState({
  //   tagsList: [],
  //   other: 'other',
  // });

  // useEffect(() => {
  //   let target = { tagsList: [] };
  //   visibleProjects.forEach((project) => {
  //     let projectTagsArray = project.tags.split(' ');
  //     projectTagsArray.forEach((tag) => {
  //       if (!target.tagsList.includes(tag)) {
  //         target.tagsList.push(tag);
  //       }
  //     });
  //   });
  //   setVisibleTags({
  //     ...visibleTags,
  //     tagsList: target.tagsList,
  //   });
  // }, [visibleProjects]);

  // function test(string) {
  //   console.log(string);
  //   searchProjects(string);
  // }

  ///////////////////////////// ARRAY SEARCH/////////////////////////////////
  const [searchArray, setSearchArray] = useState([]);
  function searchFromArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 2) {
        searchProjects(array[i]);
      } else {
        resetSearch();
      }
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   // let target = visibleTags.map((tag) => {tag});
  //   setSearchArray([search, ...visibleTags.tagsList]);
  // }, [search, visibleTags.tagsList]);

  //monitoring search Array (debug)
  useEffect(() => {
    // console.log('searchArray');
    //  console.log(searchArray);
  }, [searchArray]);

  useEffect(() => {
    console.log('allTags');
    console.log(allTags);
  }, [allTags]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS </h1>
        {/* //////////////////////////////RECHERCHE///////////////////////////////// */}
        <div className='projects__main__search'>
          <ProjectSearchBar onSearch={onSearch} />
          <ProjectsTagsContainer
            tags={allTags}
            activeFunction={toggleActiveTag}
            visibleFunction={toggleVisibleTag}
          />
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
