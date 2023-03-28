import React from 'react';
import CvHeader from '../../components/CvHeader/CvHeader';
import CvLink from '../../components/CvLink/CvLink';
//import CvSection from '../../components/CvSection/CvSection';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
//import { toolsProps } from '../../assets/toolSectionContent';
import ToolsSectionContent from '../../components/ToolsSectionContent/ToolsSectionContent';

const Home = () => {
  return (
    <div className='app'>
      <Header></Header>
      <main className='cv'>
        <CvHeader></CvHeader>
        <ToolsSectionContent></ToolsSectionContent>
        <CvLink></CvLink>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
