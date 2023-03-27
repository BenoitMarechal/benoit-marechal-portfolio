import React from 'react';
import CvLink from '../../components/CvLink/CvLink';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div className='app'>
      <Header></Header>
      <main>
        <h1>CV</h1>
        <CvLink></CvLink>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;
