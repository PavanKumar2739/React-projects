import React, { useState } from 'react'
import { useMsal } from '@azure/msal-react';



const App = () => {
  const[data,setData]=useState({
    name:'',
    email:'',
    message:''
  });

  const { instance } = useMsal();

  const[name,email,message]=data;
  onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  sendMail=()=>{
    
  }
  return (
    <div>
      <form onSubmit={sendMail}>
        <input type='text' placeholder='Name' value={name} onChange={onChange}/>
        <input type='email' placeholder='Email'value={email} onChange={onChange}/>
        <input type='text' placeholder='Message' value={message} onChange={onChange}/>
        <input type='submit' name='Submit'/>
      </form>
    </div>
  )
}

export default App
