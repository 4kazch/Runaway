import {getDatabase,ref,set} from "firebase/database"
import {app} from "./firebase";
import './App.css';
import Signin from './components/SigninPage';


function App() {

  return (
    <div className="App">
      <Signin/>
    
    </div>
  );
}

export default App;
