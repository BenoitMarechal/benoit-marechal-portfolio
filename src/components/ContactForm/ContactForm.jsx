import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  function submitContactForm(e) {
    e.preventDefault();
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
  }
  return (
    <div className='contactForm__container'>
      <form
        ref={form}
        className='contactForm__container__form'
        onSubmit={submitContactForm}
      >
        <input
          type='text'
          placeholder='First Name'
          name='firstName'
          className='contactForm__container__form__input'
        />
        <input
          type='text'
          placeholder='Last Name'
          name='lasstName'
          className='contactForm__container__form__input'
        />
        <input
          type='email'
          placeholder='email'
          name='email'
          className='contactForm__container__form__input'
        />

        <textarea
          // type='text'
          rows='4'
          //cols='20'
          placeholder='Your message'
          name='message'
          className='contactForm__container__form__input message'
        />
        <input
          type='submit'
          value='Send'
          disabled={true}
          className='contactForm__container__form__input sendButton'
        />
      </form>
    </div>
  );
};

export default ContactForm;
