import React, { useEffect, useState, useCallback } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectTag from '../../components/ProjectTag/ProjectTag';
const allP = projects.map((item) => {
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
  //cacher tous les projets
  function hideAllProjects() {
    //console.log('hide All');
    let result = [...allProjects];
    result.map((project) => {
      project.visible = 'false';
    });
    setAllProjects(result);
  }
  //Afficher tous les projets
  function showAllProjects() {
    // console.log('show all');
    let result = [...allProjects];
    result.map((project) => {
      project.visible = 'true';
    });
    setAllProjects(result);
  }
  //chercher tous les strings du tableau searchArray
  function multipleSearch() {
    // console.log('multipleSearch');
    // console.log(searchArray);
    hideAllProjects();
    let target = [...allProjects];
    // target.map((project) => {
    //   project.visible = 'false';
    // });

    //loop though projets
    for (let i = 0; i < target.length; i++) {
      let count = 0;
      let goal = searchArray.length;
      //loop throught reasearched words
      for (let a = 0; a < searchArray.length; a++) {
        if (searchArray[a] !== undefined) {
          for (const [key, value] of Object.entries(target[i])) {
            if (
              typeof value === 'string' &&
              value !== 'true' &&
              value !== 'false'
            ) {
              if (value.includes(searchArray[a])) {
                count++;
                //exit loop to avoid counting possible multiple matches
                break;
              }
            }
          }
          for (let b = 0; b < target[i].links.length; b++) {
            if (target[i].links[b].link.includes(searchArray[a])) {
              count++;
              //exit loop to avoid counting possible multiple matches
              b = target[i].links.length;
            }
          }
        } else {
          //adjust the goal if an item of the array is not searched (empty searchBar)
          goal--;
        }
      }
      if (count === goal) {
        target[i].visible = 'true';
      }
    }
    setAllProjects(target);
  }

  //recherche multiple
  useEffect(() => {
    if (
      searchArray === undefined ||
      searchArray === [] ||
      (searchArray.length < 2 && searchArray[0] === undefined)
    ) {
      showAllProjects();
    } else {
      multipleSearch();
    }
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
  // useEffect(() => {
  //   console.log('searchArray');
  //   console.log(searchArray);
  // }, [searchArray]);

  return (
    <div className='app'>
      <Header></Header>
      <main className='projects__main'>
        <h1 className='projects__main__h1'>PROJETS</h1>
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
