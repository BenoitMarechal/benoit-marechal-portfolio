// import React, { useState } from 'react';

// import ContactFormInput from './ContactFormInput/ContactFormInput';
//  import emailjs from '@emailjs/browser';
// const inputs = [
//   {
//     id: 1,
//     name: 'firstName',
//     type: 'text',
//     placeholder: 'Prénom',
//     errorMessage: "Merci d'entrer au moins deux caractères pour votre prénom",
//     pattern: '^[a-zA-Z]{2,}$',
//   },
//   {
//     id: 2,
//     name: 'lastName',
//     type: 'text',
//     placeholder: 'Nom de famille',
//     errorMessage:
//       "Merci d'entrer au moins deux caractères pour votre nom de famille",
//     pattern: '^[a-zA-Z]{2,}$',
//   },
//   {
//     id: 3,
//     name: 'email',
//     type: 'email',
//     placeholder: 'Adresse e-mail',
//     errorMessage: "Merci d'entrer une adresse email valide",
//   },
//   {
//     id: 4,
//     name: 'message',
//     type: 'text',
//     placeholder: 'message',
//     errorMessage: 'Merci de spécifier un message! (5 charactères mini)',
//   },
// ];

// const ContactForm = (props) => {
//   // console.log(props);
// //   function submitContactForm(e) {
// //     e.preventDefault();
// //     emailjs
// //       .sendForm(
// //         'service_9nf4118',
// //         'template_f2zp07c',
// //         form.current,
// //         'Xsde_OUyQfujvS6T4'
// //       )
// //       .then(
// //         (result) => {
// //           console.log(result.text);
// //         },
// //         (error) => {
// //           console.log(error.text);
// //         }
// //       );
// //   }
// //   const [values, setValues] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     message: '',
// //   });

// //   const [globalValidity, setGlobalValidity] = useState(false);
// //   const [count, setCount] = useState(0);
// //   function emptyForm() {
// //     setCount(count + 1);
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(values);
// //     emptyForm();
// //   };

// //   const checkGlobalValidity = () => {
// //     setGlobalValidity(false);
// //     let result = true;
// //     for (let i = 0; i < inputs.length; i++) {
// //       if (document.getElementById(i + 1).checkValidity() === false) {
// //         result = false;
// //       }
// //     }
// //     setGlobalValidity(result);
// //   };

// //   const handleChange = (e) => {
// //     setValues({ ...values, [e.target.name]: e.target.value });
// //     checkGlobalValidity();
// //   };
// //   return (
// //     <div className='contactForm__container bg-tertiary color secondary'>
// //       <form
// //         className='contactForm__container__form kjh'
// //         key={count}
// //         id='form'
// //         onSubmit={handleSubmit}
// //         action='/contact'
// //       >
// //         {inputs.map((input) => (
// //           <ContactFormInput
// //             key={input.id}
// //             {...input}
// //             // value={values[input.name]}
// //             onChange={handleChange}
// //             required={true}
// //           />
// //         ))}
// //         <button onClick={handleSubmit} disabled={!globalValidity}>
// //           ENVOYER
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ContactForm;
