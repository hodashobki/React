import './App.css';
import React,{useState} from 'react';
import Form from './Component/Form';
import People from './Component/People';
import Planets from './Component/Planets';
import SearchResult from './Component/SearchResult';
import {Router} from '@reach/router';
function App() {
  const[currentids,setCurrentIds]=useState("");
  const[currentsearch,setCurrentsearch]=useState("");
  
  const handelsearch=(selctedsearch)=>{
    setCurrentsearch(selctedsearch);
   
  }

  const handelids=(ids)=>{
    setCurrentIds(ids);
  }
  return (
    <div className="App">
     <h1>Star wars</h1>
     <Form  handelids={handelids} handelsearch={handelsearch} currentsearch={currentsearch} ids={currentids}/>
     <Router>
       <SearchResult path="/{currentsearch}/:{currentids}"/>     
    </Router>  
     
{/*      
     <Router>
      <People path='/:{currentsearch/:{currentids}' id={currentids} selected={currentsearch}/>
      <Planets path='/:currentsearch/:{currentids}' id={currentids} selected={currentsearch}/>
    </Router>
     */}
    </div>
  );
}

export default App;
