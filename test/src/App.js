import React from 'react';
import { useState } from 'react';
import  {PersonCard} from './components/PersonCard';
import {Counter} from './components/PersonCard';
import { Userform } from './components/PersonCard';
import Userforms from './components/UserForms';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';
import UserFormm from './components/UserFormm';
import './App.css';
import Example from './components/Example';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  return (
    <div className="App">
      
     {/* <PersonCard lname={"Shobki"} fname={"Ahmad"} age={10} hair={"black"}/>
     <Counter/>
     <Userform/>
     <Userforms/> */}
     {/* <MessageForm onNewMessage={ youveGotMail }/>
     <MessageDisplay message={currentMsg }/>
      */}
      {/* <Example/> */}
      <UserFormm></UserFormm>
    </div>
    
  );
}

export default App;
