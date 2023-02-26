import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
import React from 'react'
import contact from './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import{BsMessenger, BsWhatsapp} from 'react-icons/bs'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sicuo9i', 'template_oyxsmi4', form.current, 'A4r51_dAAmMrKB23n')
    
    e.target.reset()
  };

  return (
    <section id='Contact'><h5> Get In Touch
      </h5>
      <h2> Contact Me
        </h2>
        <div className="container contact_container">
<div className="contact_options">
  <article className="contact_option">
    <MdOutlineEmail className='contact_option_icon'/>
<h4>Email</h4>
<h5>Herbeemlaw@gmail.com</h5>
<a href="mailto:herbeemlaw@gmail.com" target='_blank'>Send a message</a>
  </article>

  <article className="contact_option">
    <BsMessenger className='contact_option_icon'/>
<h4>Messenger</h4>
<h5>Herbeemborlar</h5>
<a href="https://m.me/herbeemborlar" target='_blank'>Send a message</a>
  </article>

  <article className="contact_option" >
    <BsWhatsapp className='contact_option_icon'/>
<h4>WhatsApp</h4>
<h5>+2347060*****</h5>
<a href="https://api.whatsapp.com/send?phone=2347060452262"target='_blank'>Send a message</a>
  </article>
</div>

{/* End of contact options */}

<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='Your Full Name' required />
<input type="email" name='email' placeholder='Your Email' required />
<textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Submit Form</button>
</form>
        </div>
       
        </section>
  )
}

export default Contact