
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJhWhdPESzHvW-9dJzTcN8uZU3ros-zf0",
  authDomain: "runaway-c66be.firebaseapp.com",
  projectId: "runaway-c66be",
  storageBucket: "runaway-c66be.appspot.com",
  messagingSenderId: "68448341222",
  appId: "1:68448341222:web:2224f95c2d2cf25c1cff27",
  measurementId: "G-1Q5ZT4WH4R",
  databaseURL:"https://runaway-c66be-default-rtdb.firebaseio.com"
};


export const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export {auth,provider};