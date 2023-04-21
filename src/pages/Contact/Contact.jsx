import React, { useRef, useState } from 'react';
// import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className='app'>
      <Header></Header>
      <main className='contact'>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
