import './App.css';
import { useState } from 'react';
import { Options } from './Components/Options/Options';
import { Password } from './Components/Password/Password';

function App() {
  const [pass,setPass]= useState("");

  const setPassword = (val) =>{
    setPass(val)
  }

  return (
   <>
   <h1>Password Generator</h1>
   <Password pass={pass}/>
   <Options passFunc={setPassword}/>
   </>
  );
}

export default App;
