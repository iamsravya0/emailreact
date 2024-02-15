import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';

function App(){
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs
    .sendForm('service_tazkxp4', 'template_gl89d5d',form.current,{
      publicKey: 'opOWtdPD1tSdLAQ37',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };
  return (
    <center>
      <form ref={form} onSubmit={sendEmail}>  
        
        <label>Name</label><br/>
        <input type="text" name="user_name" /><br/>
        
        <label>Email</label><br/>
        <input type="email" name="user_email"/><br/>
        
        <label>Message</label><br/>
       <textarea name="message"/><br/>
        <input type="submit" value="send"/>

      </form>
    </center>
  );
};

export default App;
