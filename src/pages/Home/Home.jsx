import React from 'react';
import CvLink from '../../components/CvLink/CvLink';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import portrait from '../../assets/photos/Benoit_Marechal_square_S.jpg';

const Home = () => {
  return (
    <div className='app'>
      <Header></Header>
      <main>
        <div className='cv bg-primary-light-30 color-primary-dark-30'>
          <div className='cv__header'>
            <img
              className='cv__header__portrait'
              src={portrait}
              alt='portrait'
            />
            <div className='cv__header__txt'>
              <div className='cv__header__txt__titles'>
                <h1 className='cv__header__txt__titles__h1'>
                  DEVELOPPEUR FRONT-END
                </h1>
                <h2 className='cv__header__txt__titles__h2'>
                  JavaScript/React
                </h2>
              </div>
              <div className='cv__header__txt__block'>
                <div className='cv__header__txt__block__p'>
                  <p>
                    En reconversion dans le développement web après un parcours
                    de douze ans dans l'Aéronautique.
                  </p>
                  <p>
                    Attiré par le côté créatif, la recherche de solutions à des
                    problèmes complexes, les démarches de conception et de mise
                    au point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CvLink></CvLink>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
