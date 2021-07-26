import './App.css';
import React,{useState} from 'react';
import Form from './Component/Form';
import SearchResult from './Component/SearchResult';
import {Router} from '@reach/router';
function App() {
  const[currentids,setCurrentIds]=useState("");
  const[currentsearch,setCurrentsearch]=useState("people");
  
  const handelsearch=(selctedsearch)=>{
    setCurrentsearch(selctedsearch);
   
  }
  const handelids=(ids)=>{
    setCurrentIds(ids);
  }
  return (
    <div className="App">
     <h1>Star wars</h1>
     <Form  handelids={handelids} handelsearch={handelsearch} currentsearch={currentsearch} ids={currentids} setCurrentsearch={setCurrentsearch} setCurrentIds=
     {setCurrentIds} />
     <Router>
       <SearchResult path="/:currentsearch/:currentids" id={currentids} selected={currentsearch} />     
    </Router>  
     
    </div>
  );
}

export default App;
