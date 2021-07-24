import React from 'react'
import { useState } from 'react'


const Nnput = (props) => {
    const [input,setInput]=useState("");
    // const[list,setList]=useState([]);
    const handelSubmit=(e)=>{
        e.preventDefault();
        // setList([...list,input]);
        props.handlingInpute(input);
        setInput("");
    }
    return (
        <div>
           <form onSubmit={handelSubmit}>
             <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input} />
             <button type="submit">Add</button>
             </form>  
        </div>
    )
}

export default Nnput
