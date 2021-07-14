import React from 'react';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard lname="Doe" fname="Jane" age={45} hair="Black"/>
      <PersonCard lname="Smith" fname="John" age={88} hair="Brown"/>
      <PersonCard lname="Fillmore" fname="Millard" age={50} hair="Brown"/>
      <PersonCard lname="Smith" fname="Maria" age={62} hair="Brown"/>
        
    </div>
  );
}

export default App;
