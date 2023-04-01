import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setLocale } from 'yup';
import * as yup from 'yup';
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

const HookForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Votre nom doit être composé d'au moins 2 caractères")
      .required(),
    email: yup
      .string()
      .email()
      .required('Merci de renseigner une adresse email valide'),
    message: yup
      .string()
      .min(5, "Votre message doit être composé d'au moins 5 caractères")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  // console.log(isSubmitted);
  console.log('render');

  return (
    <form
      className='contactForm__container__form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor='name'>Nom complet</label>
      <input
        id={'name'}
        type='text'
        placeholder='Prénom et nom'
        {...register('name')}
      />
      {/* <p>Merci de renseigner un message (2 caractères minimum)</p> */}
      <p>{errors.name?.message}</p>

      <label htmlFor='email'>E-mail</label>
      <input
        id={'email'}
        type='text'
        placeholder='email'
        {...register('email')}
      />
      {/* <p>Merci de renseigner une adresse email valide</p> */}
      <p>{errors.email?.message}</p>
      <label htmlFor='message'>Message</label>
      <textarea
        id={'message'}
        placeholder='Votre message...'
        {...register('message')}
        cols='60'
        rows='10'
      ></textarea>
      <p>{errors.message?.message}</p>
      {/* <p>Merci de renseigner un message (5 caractères minimum)</p> */}

      <button disabled={!isValid && isSubmitted}>
        {!isValid && isSubmitted
          ? "Veuillez remplir correctement les champs avant d'envoyer"
          : 'Envoyer'}
      </button>
    </form>
  );
};

export default HookForm;
