import React, { useState } from 'react';
import ContactFormInput from './ContactFormInput/ContactFormInput';
// import emailjs from '@emailjs/browser';

const ContactForm = (props) => {
  // console.log(props);
  // function submitContactForm(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'service_9nf4118',
  //       'template_f2zp07c',
  //       form.current,
  //       'Xsde_OUyQfujvS6T4'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      placeholder: 'Prénom',
      errorMessage: "Merci d'entrer au moins deux caractères pour votre prénom",
      pattern: '^[a-zA-Z]{2,}$',
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Nom de famille',
      errorMessage:
        "Merci d'entrer au moins deux caractères pour votre nom de famille",
      pattern: '^[a-zA-Z]{2,}$',
    },
    {
      id: 3,
      name: 'email',
      type: 'text',
      placeholder: 'Adresse e-mail',
      errorMessage: "Merci d'entrer une adresse email valide",
      pattern: '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/',
    },
    {
      id: 4,
      name: 'message',
      type: 'text',
      placeholder: 'message',
      errorMessage: 'Merci de spécifier un message! (5 charactères mini)',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className='contactForm__container bg-tertiary color secondary'>
      <form className='contactForm__container__form' onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <ContactFormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
            required={true}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
