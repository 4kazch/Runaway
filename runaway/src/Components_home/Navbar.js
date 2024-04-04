

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from '../components/Home';
import CreatePost from '../components/CreatePost';
import Signin from '../components/SigninPage';
import Chat from '../components/Chat'
import { signOut } from 'firebase/auth';
import "../App.css"
import '../App2.css'
import Home2 from '../components/Home2';
import Logo from "../Assets/Runaway Preview.png"

const Navbar= () => {
  const [user] = useAuthState(auth);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
    
<Router>
<nav className="bg-white p-4 flex justify-between items-center">
<div className="nav-logo-container">
        <img src={Logo} alt='' />
      </div>
<div>
<Link to="/Home2" className = "text-black " >Home</Link>
  <Link to="/" className="text-black mr-4">Blog</Link>
  {!isAuth ? (
    <Link to="/signin" className="text-black">Login</Link>
  ) : (
    <>
      <Link to="/createpost" className="text-black mr-4">Create Post</Link>
      <Link to="/chat" className="text-black mr-4">Chat</Link>
      <Link to="/Home" >Blog</Link>
      
      <button onClick={signUserOut} className="text-black">Log Out</button>
    </>
  )}
</div>
</nav>
<Routes>
  <Route path="/" element={<Home isAuth={isAuth} />} />
  <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
  <Route path="/signin" element={<Signin setIsAuth={setIsAuth} />} />
  <Route path="/chat" element={<Chat />} />
  <Route path="/Home" element={<Home/>}/>
</Routes>
</Router>
  );
};

export default Navbar;


