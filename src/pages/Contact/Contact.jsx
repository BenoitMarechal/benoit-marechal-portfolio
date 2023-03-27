import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';

const Contact = () => {
  return (
    <div className='app'>
      <Header></Header>
      <main>
        <h1>CONTACT</h1>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
