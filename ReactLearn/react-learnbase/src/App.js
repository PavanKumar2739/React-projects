import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, MsalProvider } from '@azure/msal-react';
import { loginRequest } from './authConfig'


const App = () => {
  const form = useRef();
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });//hook

  //we have dispatch and navigate to
  const { instance } = useMsal();
  const { name, email, message } = data;//dest
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const activeAccount = instance.getActiveAccount();

  // const handleRedirect = () => {
  //   instance.loginPopup(
  //     loginRequest)

  //     .catch((error) => console.log(error));

  // }
  const handleRedirect=() => { instance

    .loginRedirect({
    
    ...loginRequest, prompt: 'create', })
    
    .catch((error) => console.log(error));
  }

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s7jvwp7', 'template_uad8myj', form.current, 'VT8hCPOROn9U7Z9_N')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <div>

      {/* <form ref={form} >
        <center>
        <input type='text' placeholder='Name' value={name} name='name' onChange={onChange}/><br/>
        <input type='email' placeholder='Email'value={email} name='email' onChange={onChange}/><br/>
        <input type='text' placeholder='Message' value={message} name='message' onChange={onChange}/><br/>
        <input type='submit' name='Submit'/>
        </center>
      </form> */}
      <AuthenticatedTemplate> {activeAccount ? (<p>

        Authenticated Successfully

      </p>

      ) : null}

      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>

        <button onClick={() => handleRedirect()}>
          Sign up
        </button>

      </UnauthenticatedTemplate>
    </div>
  )
}

export default App
