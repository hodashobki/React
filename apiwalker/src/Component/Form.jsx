import React from 'react'
import {useState} from 'react';
import { Link,navigate } from '@reach/router';
import {Router} from '@reach/router';
import SearchResult from './SearchResult';
import axios from 'axios';

const Form = (props) => {

  const searchs=['people','planets'];
  const { ids,  setCurrentIds,setCurrentsearch ,currentsearch, handelids,handelsearch}=props;

  const handelSubmit=(e)=>{
    e.preventDefault();
    handelids(ids);
    handelsearch(currentsearch);
    console.log(ids);
    console.log("******************")
    console.log(currentsearch);
    navigate('/'+currentsearch+'/'+ids)
    // navigate("/"+ selctedsearch +"/"+ids);
}




    return (
        <div>
         <form onSubmit={handelSubmit}>
       <p>
         Search For :
      
            <select value={currentsearch} onChange={(e)=>setCurrentsearch(e.target.value)}>
                 {searchs.map((search,i)=>{
                   return(
                     <option key={i} value={search}>{search}</option>
                   );
                 })}
            </select>
           ID :  <input  value={ids} onChange={(e)=>setCurrentIds(e.target.value)}/>
           <button>S</button>
            
       </p>
     </form> 
        </div>
    )
}

export default Form
