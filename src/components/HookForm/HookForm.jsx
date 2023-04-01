import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
    name: yup.string().min(2).required('name nope'),
    email: yup.string().email().required('emial nope'),
    message: yup.string().min(5).required(' message nope'),
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <p>Merci de renseigner un message (2 caractères minimum)</p>

      <label htmlFor='email'>E-mail</label>
      <input
        id={'email'}
        type='email'
        placeholder='email'
        {...register('email')}
      />
      <p>Merci de renseigner une adresse email valide</p>
      <label htmlFor='message'>Nom complet</label>
      <textarea
        id={'message'}
        placeholder='Votre message...'
        {...register('message')}
      ></textarea>
      <p>Merci de renseigner un message (5 caractères minimum)</p>

      <button disabled={!isValid}>Envoyer</button>
    </form>
  );
};

export default HookForm;
