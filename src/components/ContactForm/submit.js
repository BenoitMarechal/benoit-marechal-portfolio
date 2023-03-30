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
