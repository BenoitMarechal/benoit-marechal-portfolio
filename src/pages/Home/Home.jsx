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
    content: <SkillsContent />,
  };

  return (
    <div className='app'>
      <Header></Header>
      <main className='cv'>
        <CvHeader></CvHeader>
        <FieldSection {...toolsSectionProps}></FieldSection>
        <FieldSection {...studiesSectionProps}></FieldSection>
        <FieldSection {...skillsSectionProps}></FieldSection>
        <CvLink></CvLink>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
