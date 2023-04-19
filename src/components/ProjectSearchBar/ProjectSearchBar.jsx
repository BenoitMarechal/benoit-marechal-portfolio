import React from 'react';
import { BsSearch } from 'react-icons/bs';

const ProjectSearchBar = (props) => {
  return (
    <div className='projects__main__search__searchBar'>
      <label
        className='projects__main__search__searchBar__label'
        htmlFor='projectSearch'
      >
        Rechercher
      </label>
      <input
        className='projects__main__search__searchBar__input'
        type='search'
        ref={props.barRef}
        id='projectSearch'
        placeholder='rechercher parmi les projets...'
        onChange={props.onSearch}
      ></input>
      <div className='projects__main__search__searchBar__iconContainer'>
        <BsSearch className='projects__main__search__searchBar__iconContainer__icon' />
      </div>
    </div>
  );
};

export default ProjectSearchBar;
