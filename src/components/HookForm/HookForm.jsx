import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ModalBackGround from '../ModalBackGround/ModalBackGround';
import emailjs from '@emailjs/browser';
import HookInput from '../HookInput/HookInput';

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

  const onSubmit = (e, data) => {
    // e.preventDefault();

    console.log(getValues('name'));
    console.log(data);
    // emailjs
    //   .sendForm(
    //     'service_9nf4118',
    //     'template_f2zp07c',
    //     form.current,
    //     'Xsde_OUyQfujvS6T4'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

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
      label: 'Nom Complet',
      type: 'text',
      placeholder: 'Prénom et nom',
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
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  // DECLARING FOR MODAL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  let modalProps = {
    bodyBackGround: 'red',
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
      className='contactForm'
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      {/* TEST MAP */}
      {inputProps.map((input, index) => (
        <HookInput
          key={'input' + index}
          registerRef={register(input.id)}
          className={'dkfjhkjh'}
          //errorContent={errors.name?.message}
          errorContent={errors[input.id]?.message}
          {...input}
        ></HookInput>
      ))}
      {/* test map */}

      {/* <label htmlFor='name'>Nom complet</label>
      <input
        id='name'
        type='text'
        placeholder='Prénom et nom'
        {...register('name')}
      />
      <p>{errors.name?.message}</p> */}

      {/* <label htmlFor='email'>E-mail</label>
      <input
        id='email'
        type='text'
        placeholder='email'
        {...register('email')}
      />
      <p>{errors.email?.message}</p> */}

      {/* <label htmlFor='emailConfirm'>E-mail (confirmation)</label>
      <input
        id='emailConfirm'
        type='text'
        placeholder='email'
        {...register('emailConfirm')}
      />
      <p>{errors.emailConfirm?.message}</p> */}

      {/* <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        placeholder='Votre message...'
        {...register('message')}
        rows='10'
      ></textarea>
      <p>{errors.message?.message}</p> */}
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
