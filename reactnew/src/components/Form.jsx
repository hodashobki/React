import React from 'react'
import { useState } from 'react';

const Form = (props) => {

    const [input,setInput]=useState("");
    const[list,setList]=useState([]);
    const [doing,setdoing]=useState([]);
    const [done,setDone]=useState([]);
    // counter..

    const [fivminute,setFiveminute]=useState(0);
    const [pomodoro,setPomodoro]=useState(0);
    const [rule,setRule]=useState(0);
    // handel submit
    const handelSubmit=(e)=>{
        e.preventDefault();
        setList([...list,input]);
        console.log(list)
        setInput("");
    }
    const startDoing=(e,p)=>{
        const filterdtodo=list.filter((_li,i)=>{
          return p!==i;
        });
        setList(filterdtodo);
        setdoing([...doing,list[p]]);
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

// const [fivminute,setFiveminute]=useState(0);
//     const [pomodoro,setPomodoro]=useState(0);
//     const [rule,setRule]=useState(0);

const handlefive=(e)=>{
    setFiveminute(fivminute+1);
}
const handlefive2=(e)=>{
    setPomodoro(pomodoro+1);
}
const handlefive3=(e)=>{
    setRule(rule+1);
}
//rendering: 
    return (
        <div>
         <form onSubmit={handelSubmit}>
             <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} />
             <button type="submit">Add</button>
             </form> 
       <div style={{display:"flex",margin:"10px", justifyContent:"space-between"}}>
             <div>
                 {list.map((li,i)=>{
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
                <hr></hr>
                <h1> Tips for productivity</h1>
                <div style={{display:"flex" ,margin:"10px", justifyContent:"space-between"}}>
                    <div>
                      <h3>Five minutes rule </h3>
                      <button onClick={ handlefive}>Like This tip</button>
                      <p>Likes:{fivminute}</p>
                      <p>Description: make a deal with yourself to do at least five minutes of a task</p>
                    </div>
                    {/*  */}
                    <div>
                      <h3>pomodoro technique</h3>
                      <button onClick={ handlefive2}>Like This tip</button>
                      <p>Likes:{pomodoro}</p>
                      <p>Description: make a deal with yourself to do at least five minutes of a task</p>
                    </div>
                    {/*  */}
                    <div>
                      <h3> Rule of rules</h3>
                      <button onClick={ handlefive3}>Like This tip</button>
                      <p>Likes:{rule}</p>
                      <p>Description: make a deal with yourself to do at least five minutes of a task</p>
                    </div>
                </div>
        </div>
    )
}

export default Form
