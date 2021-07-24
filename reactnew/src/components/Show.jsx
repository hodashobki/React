import React from 'react'
import { useState } from 'react';

const Show = (props) => {
    const [doing,setdoing]=useState([]);
    const [done,setDone]=useState([]);

    const startDoing=(e,p)=>{
        const filterdtodo=props.exList.filter((_li,i)=>{
          return p!==i;
        });
       props.setExList(filterdtodo);
        setdoing([...doing,props.exList[p]]);
    }
// Don
const handleDone=(e,o)=>{
// setDone([...done,doing[j]]);
// console.log(done);
const filterDone=doing.filter((_doi,j)=>{
    return o!==j;
});
setdoing(filterDone);
setDone([...done,doing[o]]);
console.log(done);
} 
    return (
        <div style={{display:"flex",margin:"10px", justifyContent:"space-between"}}>
             <div>
                 {props.exList.map((li,i)=>{
                     return(
                         <div key={i}>
                             <span>{li}</span>
                             <button onClick={(e)=>{startDoing(e,i)}}> Start Doing</button>
                         </div>
                     );
                 })}
                 </div>  
                 <div>
                     {doing.map((doi,j)=>{
                         return(
                             <div key={j}>
                                 <span>{doi}</span>
                                 <button onClick={(e)=>{handleDone(e,j)}}> Done</button>
                             </div>
                         );

                     })}
                 </div>
                 <div>
                     {done.map((don,k)=>{return(<li key={k}>{don}</li>);
                         
                     })}
                 </div>
                 </div>
    )
}

export default Show
