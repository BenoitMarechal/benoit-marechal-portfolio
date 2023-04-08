import React, { useEffect, useState, useCallback } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectsTagsContainer from '../../components/ProjectsTagsContainer/ProjectsTagsContainer';
import ProjectTag from '../../components/ProjectTag/ProjectTag';
//import ProjectTag from '../../components/ProjectTag/ProjectTag';
const allP = projects.map((item) => {
  //let hop = true;
  //imposisble de passer un boolean???
  return { ...item, visible: 'true' };
});
//console.log(allP);
let result = [];
let allTagStrings = allP.map((project) => {
  let line = project.tags.split(' ');
  for (let i = 0; i < line.length; i++) {
    if (!result.includes(line[i])) {
      result.push(line[i]);
    }
  }
  return undefined;
});
let allTagObjects = result.map((tag) => ({
  tag: tag,
  visible: true,
  active: false,
}));
// console.log('allTagObjects');
// console.log(allTagObjects);
//console.log(full);

const Projects = () => {
  //get All projects
  // adding visible propety to eachproject
  const [allProjects, setAllProjects] = useState(allP);
  /// get All tags
  const [allTags, setAllTags] = useState(allTagObjects);
  ///declare tags toggle function
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
  ///////////////////declare Search value
  const [search, setSearch] = useState();
  ///////////////////get Search value
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

  ///////fonction(s) de recherche

  //recherche d'un string pour afficher le porjet
  function searchString(string) {
    string = string.toLowerCase();
    let matches = [...allProjects];
    allProjects.map((project) => {
      // search in links
      project.links.map((link) => {
        if (link.link.includes(string)) {
          if (matches.includes(project) === false) {
            project.visible = 'true';
          }
        }
        //return undefined;
      });
      // search in all the rest
      for (const [key, value] of Object.entries(project)) {
        if (
          value !== undefined &&
          value.toString().toLowerCase().includes(string)
        ) {
          project.visible = 'true';
        }
      }
      //return undefined;
    });
    //console.log('matches');
    //console.log(matches);
    //return matches;

    //setvisibleProjects(matches);
  }
  //cacher tous les projets
  function hideAllProjects() {
    let result = [...allProjects];
    result.map((project) => {
      project.visible = 'false';
    });
    setAllProjects(result);
  }
  //Afficher tous les projets
  function showAllProjects() {
    let result = [...allProjects];
    result.map((project) => {
      project.visible = 'true';
    });
    setAllProjects(result);
  }
  //chercher tous les strings
  function searchProjects() {
    hideAllProjects();
    console.log('coucou');
    for (let i = 0; i < searchArray.length; i++) {
      if (searchArray[i] !== undefined && searchArray[i].length < 2) {
        console.log('cherche' + searchArray[i]);
        //   searchString(array[i]);
        // }
      }
    }
  }

  //////////lancement de la recherche
  ///simple frappe
  // useEffect(() => {
  //   if (search !== undefined) {
  //     searchString(search);
  //   }
  //   if (search === undefined || search.length < 2) {
  //     showAllProjects();
  //   }
  // }, [search]);

  //recherche multiple
  useEffect(() => {
    // console.log('searchArray');
    // console.log(searchArray);
    hideAllProjects();
    console.log(searchArray.length);
    if (
      searchArray === undefined ||
      (searchArray.length === 1 && searchArray[0] === undefined)
    ) {
      console.log('toutou');
      showAllProjects();
    }
    //if (searchArray !== undefined) {
    for (let i = 0; i < searchArray.length; i++) {
      if (searchArray[i] !== undefined) {
        console.log('cherche');
        console.log(searchArray[i]);
        searchString(searchArray[i]);
      }
      //else {
      // console.log('pas def');
      //  showAllProjects();
      //}
      // }
    }

    //console.log('Array pas undefined');

    //else {showAllProjects()};
  }, [searchArray]);

  ////////////////////////////////CHECKS////////////////////////////////////////////
  // useEffect(() => {
  //   console.log('allProjects');
  //   console.log(allProjects);
  // }, [allProjects]);
  // useEffect(() => {
  //console.log('allTags');
  // console.log(allTags);
  //}, [allTags]);
  // useEffect(() => {
  //    console.log('search');
  //    console.log(search);
  // }, [search]);
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
          {/* <div>
            
            {allProjects.map((project, index) =>
              project.visible === 'true' ? (
                <ProjectCard {...project} key={index} />
              ) : (
                ''
              )
            )}
          </div> */}

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
