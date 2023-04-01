import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ModalBackGround from '../ModalBackGround/ModalBackGround';

const HookForm = () => {
  // DECLARING FOR FORM
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  function customToggleModal() {
    setOpen(!open);
  }

  function resetModal() {
    setName('');
    setEmail('');
  }

  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isValid, isSubmitted },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(getValues('name'));
    console.log(data);
    setName(getValues('name'));
    setEmail(getValues('email'));
    customToggleModal();
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  // DECLARING FOR MODAL
  let modalProps = {
    bodyBackGround: 'red',
    headLineText: 'Merci ' + name + '!',
    messageText:
      'Votre message a bien été envoyé, je répondrai au plus vite à ' +
      email +
      ', à bientôt!',
    openFunction: customToggleModal,
    closeFunction: customToggleModal,
    afterCloseFunction: resetModal,
    open: open,
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <form
      id='contact-form'
      className='contactForm__container__form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor='name'>Nom complet</label>
      <input
        id='name'
        type='text'
        placeholder='Prénom et nom'
        {...register('name')}
      />
      <p>{errors.name?.message}</p>

      <label htmlFor='email'>E-mail</label>
      <input
        id='email'
        type='text'
        placeholder='email'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>

      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        placeholder='Votre message...'
        {...register('message')}
        rows='10'
      ></textarea>
      <p>{errors.message?.message}</p>

      <button disabled={!isValid && isSubmitted}>
        {!isValid && isSubmitted
          ? "Veuillez remplir correctement les champs avant d'envoyer"
          : 'Envoyer'}
      </button>
      <ModalBackGround {...modalProps}></ModalBackGround>
    </form>
  );
};

export default HookForm;
