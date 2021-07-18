import React from 'react';
import { useState } from 'react';
 export const PersonCard=(props)=>{
const [age,setAge]=useState(0);
const [message,setMessage]=useState("يطول عمرو");

const handelAge=()=>{
    setAge(age+1);
}
 const handelMessage=()=>{
 setMessage("يا هلا");
 }
     return(
         <div>
             <h1>{props.lname}, {props.fname}</h1>
             <p>Age :<button onClick={handelAge}>{age}</button> </p>
             <p>message <button onClick={handelMessage}>click here {message}</button> </p>
             <p>Hair Color :{props.hair}</p>
         </div>
     );
 } 
//  export default PersonCard;
// counter:
export const Counter=(props)=>{
    
const [count,setCount]=useState({counterClick:0});

const handelClick=()=>{
   
    setCount({counterClick:count.counterClick+1});
}
    return(
        <div>
             
            <button onClick={handelClick}>click her to count <strong>{count.counterClick}</strong></button>
        </div>
    );
}
export const Userform=(props)=>{
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [pasw,setPasw]=useState("");
    const [pasc,setpasc]=useState("");
    
    return(
        <div>
            <form>
                <p>
            <label> First Name:
            
                <input type="text" name="fname" onChange={(e)=>setFname(e.target.value)}></input>
            </label>
            </p>
            <p>
            <label>Last Name:
                <input type="text" name="lname" onChange={(e)=>setLname(e.target.value)}></input>
            </label></p>
            <p>
            <label>Email
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}></input>
            </label></p>
            <p>
            <label>Password: 
                <input type="password" name="pasw" onChange={(e)=>setPasw(e.target.value)}></input>
            </label></p>
            <p>
            <label>Password Confirmation:
                <input type="password" name="pasc" onChange={(e)=>setpasc(e.target.value)}></input>
            </label></p>
            <p> First Name:{fname} </p>
            <p>Last Name: {lname}</p>
            <p>Email :{email}</p>
            <p> Password :{pasw}</p>
            <p>password Confirmation {pasc}</p>
            </form>
          
        </div>
    );
}