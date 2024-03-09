import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useContext, useEffect } from "react";
import {PostList } from "./store/posts-list-store";
import Spinner from "./components/loading/spinner";


const App=()=>{
  const { isSpinner} = useContext(PostList);

  useEffect(()=>{

  },[]);

  return(
    <BrowserRouter>
    {/* {isSpinner&&<Spinner/>} */}
    <Routes>
      <Route path="/" element={<Navigate to='/home' replace={true}/>}/>
      <Route path="/login" element={<LoginRoute><Login/></LoginRoute>}/>
      <Route path="/home" element = {<ProtectedRoute><Home/></ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

const ProtectedRoute = (event)=>{
    return sessionStorage.getItem('isUserLogin')?event.children:<Navigate to ="/login"/>
}
const LoginRoute=(event)=>{
  return sessionStorage.getItem('isUserLogin')? <Navigate to ='/'/>:event.children;
}

export default App;
