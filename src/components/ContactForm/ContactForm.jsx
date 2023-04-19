import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ModalBackGround from '../ModalBackGround/ModalBackGround';
import emailjs from '@emailjs/browser';
import ContactInput from '../ContactInput/ContactInput';

const HookForm = () => {
  // DECLARING FOR FORM
  let form = useRef();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Votre nom doit être composé d'au moins 2 caractères")
      .required("Merci d'indiquer votre nom"),
    email: yup
      .string()
      .email("l'adresse email doit être valide")
      .required('Merci de renseigner une adresse email valide'),
    emailConfirm: yup
      .string()
      .email("l'adresse email doit être valide")
      .oneOf(
        [yup.ref('email'), null],
        'Les deux emails doivent être identiques'
      )
      .required('Veuillez confirmer votre adresse email'),
    message: yup
      .string()
      .min(5, "Votre message doit être composé d'au moins 5 caractères")
      .required(),
  });

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
    emailConfirm: '',
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

  const onSubmit = () => {
    emailjs
      .sendForm(
        'service_9nf4118',
        'template_f2zp07c',
        form.current,
        'Xsde_OUyQfujvS6T4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName(getValues('name'));
    setEmail(getValues('email'));
    customToggleModal();
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const inputProps = [
    {
      id: 'name',
      label: 'Nom complet',
      type: 'text',
      placeholder: 'Prénom et NOM',
    },
    {
      id: 'email',
      label: 'E-mail',
      type: 'text',
      placeholder: 'email',
    },
    {
      id: 'emailConfirm',
      label: 'E-mail (confirmation)',
      type: 'text',
      placeholder: 'email',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textArea',
      placeholder: 'Votre message...',
    },
  ];

  // DECLARING FOR MODAL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  let modalProps = {
    //bodyBackGround: 'red',
    headLineText: 'Merci, ' + name + '!',
    messageText: [
      'Votre message a bien été envoyé, je répondrai au plus vite!',
      'Un email de confirmation a été envoyé à ' + email + '.',
      'Merci et à bientôt,',
      'Benoit.',
    ],
    openFunction: customToggleModal,
    closeFunction: customToggleModal,
    afterCloseFunction: resetModal,
    open: open,
  };

  return (
    <form
      id='contact-form'
      className='contactForm bg-primary-dark-20 color-secondary'
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      <h1 className='contactForm__h1'>CONTACT</h1>
      <h2 className='contactForm__h2'>Envoyez-moi un mail!</h2>
      {inputProps.map((input, index) => (
        <ContactInput
          key={'input' + index}
          registerRef={register(input.id)}
          errorContent={errors[input.id]?.message}
          {...input}
        ></ContactInput>
      ))}
      <button
        className='contactForm__submitButton'
        disabled={!isValid && isSubmitted}
      >
        {!isValid && isSubmitted
          ? "Veuillez remplir correctement les champs avant d'envoyer"
          : 'Envoyer'}
      </button>
      {/* <button onClick={customToggleModal}>MODALE</button> */}
      <ModalBackGround {...modalProps}></ModalBackGround>
    </form>
  );
};

export default HookForm;
