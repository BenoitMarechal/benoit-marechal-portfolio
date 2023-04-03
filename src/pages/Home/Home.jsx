import React from 'react';
import CvHeader from '../../components/CvHeader/CvHeader';
import CvLink from '../../components/CvLink/CvLink';
import FieldSection from '../../components/FieldSection/FieldSection';
//import CvSection from '../../components/CvSection/CvSection';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
//import { toolsProps } from '../../assets/toolSectionContent';
import ToolsSectionContent from '../../components/ToolsSectionContent/ToolsSectionContent';
import SkillsContent from '../../components/SkillsContent/SkillsContent';
import StudiesContent from '../../components/StudiesContent/StudiesContent';
import JobsContent from '../../components/JobsContent/JobsContent';

const Home = () => {
  let toolsSectionProps = {
    title: 'Outils et technologies',
    class: 'cv-tools',
    content: <ToolsSectionContent />,
  };
  let skillsSectionProps = {
    title: 'Compétences',
    class: 'cv-skills',
    content: <SkillsContent />,
  };
  let studiesSectionProps = {
    title: 'Formation',
    class: 'cv-studies',
    content: <StudiesContent />,
  };
  let jobsSectionProps = {
    title: 'Expériences professionelles',
    class: 'cv-jobs',
    content: <JobsContent />,
  };

  return (
    <div className='app'>
      <Header></Header>
      <main className='cv'>
        <CvHeader></CvHeader>
        <FieldSection {...toolsSectionProps}></FieldSection>
        <FieldSection {...skillsSectionProps}></FieldSection>
        <FieldSection {...studiesSectionProps}></FieldSection>

        {/* <div id='cv-container'>
         
        </div> */}

        {/* <div id='cv-container'>
          <div id='container1'>
            <FieldSection {...skillsSectionProps}></FieldSection>
          </div>
          <div id='container2'>
            
          </div>
        </div> */}
        <FieldSection {...jobsSectionProps}></FieldSection>
        <CvLink></CvLink>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
