import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Signin from './components/SigninPage';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import Home2 from './components/Home2';
import "./App.css"
import Logo from "./Assets/RunawayPreview.png"
import Navbar from './Components_home/Navbar';

const App = () => {
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
    <Navbar />
  );
};

export default App;
