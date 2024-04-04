import React, { useEffect,useState } from "react";
import "./../App.css";
import {auth,provider} from "../firebase";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";
function Signin()
{   
    const [value,setValue]=useState("")
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    }

    )
    return(
  <div class="signin-page">
   
    {value?<Home/>:
      
      
      <button onClick={handleClick}>Sign In</button>
    }
  </div>

<<<<<<< Updated upstream
    );
}
export default Signin;
=======
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/Home");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Signin;
>>>>>>> Stashed changes
