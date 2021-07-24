import React from 'react';
import {useState} from 'react';
const Productivity=(props)=> {
    const [fivminute,setFiveminute]=useState(0);
    const [pomodoro,setPomodoro]=useState(0);
    const [rule,setRule]=useState(0);
    const handlefive=(e)=>{
        setFiveminute(fivminute+1);
    }
    const handlefive2=(e)=>{
        setPomodoro(pomodoro+1);
    }
    const handlefive3=(e)=>{
        setRule(rule+1);
    }
    return (
        <div>
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

export default Productivity
