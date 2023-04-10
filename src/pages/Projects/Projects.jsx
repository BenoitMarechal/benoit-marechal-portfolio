import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import projects from '../../assets/projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectSearchBar from '../../components/ProjectSearchBar/ProjectSearchBar';
import ProjectTag from '../../components/ProjectTag/ProjectTag';
import ResetSearchButton from '../../components/ResetSearchButton/ResetSearchButton';
// adding visible property to eachproject
const allP = projects.map((item) => {
  return { ...item, visible: 'true' };
});

// gather every tag wihtout duplicates
function collectTags(array) {
  let result = [];
  array.map((project) => {
    let line = project.tags.split(' ');
    for (let i = 0; i < line.length; i++) {
      if (!result.includes(line[i])) {
        result.push(line[i]);
      }
    }
    return undefined;
  });
  return result;
}

//turn tags strings into object with active and visble proprties
function tagsStringToObj(array) {
  return array.map((tag) => ({
    tag: tag,
    visible: 'true',
    active: 'false',
  }));
}

const Projects = () => {
  //get All projects
  const [allProjects, setAllProjects] = useState(allP);
  /// get All tags
  const [allTags, setAllTags] = useState(tagsStringToObj(collectTags(allP)));
  ///declare tags toggle function
  const toggleActiveTag = (tag) => {
    let target = [...allTags];
    for (let i = 0; i < target.length; i++) {
      if (target[i].tag === tag) {
        console.log(target[i].tag);
        if (target[i].active === 'true') {
          target[i].active = 'false';
        } else {
          target[i].active = 'true';
        }
        //target[i].active = !target[i].active;
      }
    }
    setAllTags(target);
    buildSearchArray();
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
  function buildSearchArray() {
    let activeTags = [];
    for (let i = 0; i < allTags.length; i++) {
      if (allTags[i].active === 'true') {
        activeTags.push(allTags[i].tag);
      }
    }
    setSearchArray([search, ...activeTags]);
  }

  useEffect(() => {
    buildSearchArray();
    //let target = [search];
    // let activeTags = [];
    // for (let i = 0; i < allTags.length; i++) {
    //   if (allTags[i].active === true) {
    //     activeTags.push(allTags[i].tag);
    //   }
    // }
    // setSearchArray([search, ...activeTags]);
  }, [search]);

  ///////fonction(s) de recherche
  //cacher tous les projets
  function hideAllProjects() {
    //console.log('hide All');
    let result = [...allProjects];
    result.map((project) => {
      project.visible = 'false';
      return undefined;
    });
    setAllProjects(result);
  }
  //Afficher tous les projets
  function showAllProjects() {
    // console.log('show all');
    let result = [...allProjects];
    result.map((project) => {
      project.visible = 'true';
      return undefined;
    });
    setAllProjects(result);
  }
  //cacher tous les tags
  function hideAllTags() {
    console.log('hide All tags');
    let result = [...allTags];
    result.map((tag) => {
      tag.visible = 'false';
      return undefined;
    });
    setAllTags(result);
  }
  //Afficher tous les tags
  function showAllTags() {
    console.log('show All tags');
    let result = [...allTags];
    result.map((tag) => {
      tag.visible = 'true';
      return undefined;
    });
    setAllTags(result);
  }
  //chercher tous les strings du tableau searchArray
  function multipleSearch() {
    // console.log('multipleSearch');
    // console.log(searchArray);
    hideAllProjects();
    let target = [...allProjects];
    //loop though projects
    for (let i = 0; i < target.length; i++) {
      let count = 0;
      let goal = searchArray.length;
      //loop throught reasearched words
      for (let a = 0; a < searchArray.length; a++) {
        if (searchArray[a] !== undefined) {
          //console.log('looking for ' + searchArray[a]);
          for (const [key, value] of Object.entries(target[i])) {
            // console.log('in' + value);
            if (
              typeof value === 'string' &&
              value !== 'true' &&
              value !== 'false'
            ) {
              if (value.toLowerCase().includes(searchArray[a].toLowerCase())) {
                //console.log('found');
                count++;

                //exit loop to avoid counting possible multiple matches
                break;
              }
            }
          }
          //loop through links
          for (let b = 0; b < target[i].links.length; b++) {
            //console.log('in ' + target[i].links[b].link);
            if (
              target[i].links[b].link
                .toLowerCase()
                .includes(searchArray[a].toLowerCase())
            ) {
              //console.log('found');
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
    manageTags();
  }, [searchArray]);

  //////////////////////////////hide show tags/////////////////////////////
  function getVisibleProjects() {
    return allProjects.filter((project) => {
      if (project.visible === 'true') {
        return project;
      }
      return undefined;
    });
  }

  function manageTags() {
    let visibleProjects = allProjects.filter((project) => {
      if (project.visible === 'true') {
        return project;
      }
      return undefined;
    });
    //console.log(visibleProjects);
    //gather list of visible tags without duplicates (strings)
    let visibleTags = collectTags(getVisibleProjects());
    let target = [...allTags];
    console.log(visibleTags);
    if (visibleTags.length === allTags.length) {
      showAllTags();
    } else {
      hideAllTags();
      for (let a = 0; a < visibleTags.length; a++) {
        for (let b = 0; b < target.length; b++) {
          if (visibleTags[a] === target[b].tag) {
            console.log(target[b].visible);
            target[b].visible = 'true';
          }
        }
      }
    }
    setAllTags(target);
  }
  ////////reset search
  function resetSearch() {
    setAllProjects(allP);
    setAllTags(tagsStringToObj(collectTags(allP)));
  }
  ////////////////////////////////CHECKS////////////////////////////////////////////
  // useEffect(() => {
  //   console.log('allProjects');
  //   console.log(allProjects);
  // }, [allProjects]);
  // useEffect(() => {
  //   console.log('allTags');
  //   console.log(allTags);
  // }, [allTags]);
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
              tag.visible === 'true' ? (
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
          <ResetSearchButton onClick={resetSearch} />
        </div>

        {/* //////////////////////////////AFFICHAGE DES PROJECTS///////////////////////////////// */}
        {/* prob visible */}
        {getVisibleProjects().length === 0
          ? "Il n'y a pas (encore) de projet correspondant à votre séléction"
          : allProjects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
        {/* {allProjects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))} */}
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
