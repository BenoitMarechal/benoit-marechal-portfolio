import React from 'react';
import portrait from '../../assets/photos/Benoit_Marechal_square_S.jpg';

const CvHeader = () => {
  return (
    // <div className='cv bg-primary-light-30 color-primary-dark-30'>
    <section className='cv__header section bg-primary-light-30 color-primary-dark-30'>
      <img className='cv__header__portrait' src={portrait} alt='portrait' />
      <div className='cv__header__txt'>
        <div className='cv__header__txt__titles'>
          <h1 className='cv__header__txt__titles__h1'>DEVELOPPEUR FRONT-END</h1>
          <h2 className='cv__header__txt__titles__h2'>JavaScript/React</h2>
        </div>
        <div className='cv__header__txt__block'>
          <div className='cv__header__txt__block__p'>
            <p>
              En reconversion dans le développement web après un parcours de
              douze ans dans l'Aéronautique.
            </p>
            <p>
              Attiré par le côté créatif, la recherche de solutions à des
              problèmes complexes, les démarches de conception et de mise au
              point.
            </p>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
};

export default CvHeader;
