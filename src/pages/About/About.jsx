import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import YoutubeVid from '../../components/YoutubeVid/YoutubeVid';

const About = () => {
  let videoProps = {
    url: 'https://www.youtube.com/embed/KJM8kyK9CmM',
    className: 'About',
  };
  return (
    <div className='app'>
      <Header></Header>
      <main>
        <h1>A PROPOS</h1>
        <div className='aboutContainer'>
          <p className='aboutContainer__p'>
            A la suite d’un DUT GMP à Brest puis d’un Master2 en Génie mécanique
            et Matériaux à Lorient, j’ai commencé ma carrière professionnelle en
            tant qu’ingénieur CFAO/composites chez Coriolis Composites à Quéven,
            une entreprise spécialisée dans la conception et la production de
            machines robotisées d’AFP (Automated Fiber Placement), une
            technologie innovante dans le domaine de l’Aéronautique.
          </p>
          <p className='aboutContainer__p'>
            Un aperçu de l’entreprise et de ses technologies ici:
          </p>
          {<YoutubeVid {...videoProps}></YoutubeVid>}
          <p className='aboutContainer__p'>
            Chargé de chiffrer et de mener à bien des études de faisabilité et
            la réalisation de prototypes ou de démonstrateurs, j’ai dû devenir
            expert dans une technologie complexe (logiciel et machine) pour
            laquelle il n’existait pas à proprement parler de formation
            académique.
          </p>
          <p className='aboutContainer__p'>
            Le poste étant à l’interface entre le technique et le commercial,
            j’ai pu développer mon sens du contact client et de la pédagogie, en
            participant aux réunions techniques ou en donnant des formations.
          </p>
          <p className='aboutContainer__p'>
            Travailler au contact des développeurs et développeuses logiciel
            “maison’” pour mettre en place de nouvelles fonctionnalités a
            aiguisé ma curiosité envers le monde du développement informatique.
          </p>
          <p className='aboutContainer__p'>
            De part mes centres d'intérêts personnels, c’est vers le web que je
            me suis tourné pour entamer une reconversion après cette première
            carrière de douze ans.
          </p>
          <p className='aboutContainer__p'>
            Après avoir mené à bien une formation de développeur d’applications
            JavaScript/React chez OpenClassRooms, je suis à la recherche d’un
            premier emploi ou d’un apprentissage, tout en continuant à
            m’autoformer (notamment afin d'acquérir des compétences en Back-End)
            et à travailler sur des side projects.
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default About;
