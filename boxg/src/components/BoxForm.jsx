import React, {useState} from 'react';
const BoxForm=(props)=>{
const [color, setColor]=useState("");
 const handelSubmit=(e)=>{
     e.preventDefault();
     props.handel(color);
     setColor("")
 }
     return(
         <form onSubmit={ handelSubmit}>
          <input type="text"  name="color" onChange={(e)=>{setColor(e.target.value)}} value={color} />
          <button>Add color</button>
         </form>
     );
 }
 export default BoxForm;