import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Signin from './components/SigninPage';
import Chat from './components/Chat';
import { signOut } from 'firebase/auth';
import "./App.css"

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
    <Router>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          {!isAuth ? (
            <Link to="/signin" className="text-white">Login</Link>
          ) : (
            <>
              <Link to="/createpost" className="text-white mr-4">Create Post</Link>
              <Link to="/chat" className="text-white mr-4">Chat</Link>
              <button onClick={signUserOut} className="text-white">Log Out</button>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/signin" element={<Signin setIsAuth={setIsAuth} />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
