import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
const Projects = () => {
  return (
    <div className='app'>
      <Header></Header>
      <main>
        <h1>PROJETS</h1>

        <a
          href='https://benoitmarechal.github.io/Livrable2/'
          target='_blank'
          rel='noreferrer'
        >
          RESERVIA
        </a>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Projects;
