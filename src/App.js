import React,{ useRef, useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser';


const App = () => {

const form = useRef();
const [data, setData] = useState({
  name:'',
  email:'',
  message:''
})
const {name,email,message} = data;
const changeHandler = e =>{
  setData({...data,[e.target.name]:[e.target.value]})
}
const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_oqy58jj', 'template_63ujt4f', form.current, 'NkMhsYNgxQJ7hbzI7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

  return (
    <div> 
      <h1>Contact Form</h1>
      <p>You can able to send a message through this contact form to Mr. Nazeer Basha Shaik.</p>
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Enter Name :</label>
          <input type="text"
           name="name" value={name} 
           onChange={changeHandler}
           placeholder="Enter Your Name"
            required/>
          <label>Enter Email :</label>
          <input type="email"
           name="email"
           value={email}
           onChange={changeHandler} 
           placeholder="Enter Your Email"
           required/>
          <label>Write Message :</label>
          <textarea name="message"
           value={message}
           onChange={changeHandler}
           placeholder="Write a Message"
           required />
          <input className='button' type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default App
