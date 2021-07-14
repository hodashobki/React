import './App.css';
import React, {useState} from 'react';
import UserForm from './Components/UserForm';
import Result from './Components/Result';

function App() {
  const [state ,setState]=useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
    passwordConfirm:""
  })
  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
      <Result data={state} />
    </div>
    
  );
}

export default App;
