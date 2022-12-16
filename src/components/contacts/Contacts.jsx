import React from 'react'
import './contacts.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_99aroo7', 'template_3n8puv3', form.current, 'eRJM01AY92ZiVLumK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contacts'>
      <h2>Let's Engage</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name'required />
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message"  rows="8" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts