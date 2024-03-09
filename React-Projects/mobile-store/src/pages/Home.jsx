import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const logOutHandle=()=>{
        sessionStorage.clear();
        navigate('/login');
    }
  return (
    <div>
      <center>Welcom User {}</center>
      <button onClick={()=>logOutHandle()}>Log out</button>
    </div>
  )
}

export default Home
