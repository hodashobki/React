import React from 'react'
import {useState} from 'react';
import { Link,navigate } from '@reach/router';
import {Router} from '@reach/router';
import SearchResult from './SearchResult';
import axios from 'axios';

const Form = (props) => {
    const[ids,setIds]=useState("");
  const searchs=['people','planets'];
  const[selctedsearch,setSelctedSearch]=useState(searchs[0]);

  const handelSubmit=(e)=>{
    e.preventDefault();
    // navigate("/"+ selctedsearch +"/"+ids);
    props.handelids(ids);
    props.handelsearch(selctedsearch);
    setIds("");
    setSelctedSearch(searchs[0]);
    console.log(ids);
    console.log(selctedsearch);
}


// const handelclick=(e)=>{
//     e.preventDefault();
    
//    navigate("/"+ selctedsearch +"/"+ids);
// }

const handelclick=(e)=>{
    axios.get('https://swapi.dev/api/'+selctedsearch+'/'+ids)
    .then(response=>{setSelctedSearch(response.data.results)})
}
    return (
        <div>
         <form onSubmit={handelSubmit}>
       <p>
         Search For :
      
            <select value={selctedsearch} onChange={e=>setSelctedSearch(e.target.value)}>
                 {searchs.map((search,i)=>{
                   return(
                     <option key={i} value={search}>{search}</option>
                   );
                 })}
            </select>
           ID :  <input  value={ids} onChange={(e)=>setIds(e.target.value)}/>
            <button onClick={handelclick}>Add</button>
            {/* <button>ADD</button> */}
       </p>
     </form> 
     {/* <Router>
       <SearchResult path="/selctedsearch/ids"/>     
    </Router>   */}
     {selctedsearch.map((value, index)=>{
            return (<div key={index}>{value.name}</div>)
        })}
        </div>
    )
}

export default Form
