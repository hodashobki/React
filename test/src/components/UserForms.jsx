import { useState } from "react";
import React from "react";
 const UserForms=(props)=>{
const [fname,setFname]=useState("");
const [lname,setLname]=useState("");
const [email,setEmail]=useState("");
const [pasw,setPasw]=useState("");
const [pasc,setPasc]=useState("");
const[fnameval,setFnameVal]=useState("");
const[lnameval,setlnameVal]=useState(""); 
const [emailval,setEmailVal]=useState("");
const [paswval,setpaswVal]=useState("");
const [pascval,setpascVal]=useState("");
const [pasconf,setpasConf]=useState("");

const createUser=(e)=>{
    e.preventDefault();
    const newUser = { fname,lname, email, pasw,pasc };
};
const fnameValidation=(e)=>{
    if(e.target.value <2 && e.target.value!=0)
    setFnameVal("first name must be more than 2 character")
    else {
        setFnameVal("");
    }
}

const lnameValidation=(e)=>{
    if(e.target.value<2 && e.target.value!=0)
    setlnameVal("last name muat be more than 2 characters")
    else {
        setlnameVal("");
    }
}
const emailValidation=(e)=>
{if(e.target.value<2 && e.target.value!=0)
    setEmailVal("Email must be at least 2 characters")
    else{
        setEmailVal("");
    }
    
}
const paswValidation=(e)=>{
    if (e.target.value<8 && e.target.value!=0)
    setpaswVal("Password must be 8 characters at least")
    else{
        setpaswVal("");
    }
}
const pasconValidation=(e)=>{
    if(e.target.value<8 &&e.target.value!=0)
    setpascVal("Password Confirmation must be 8 characters at least")
    else{
        setpascVal("");
    }
}
const checkpasswordValidation=(e)=>{
    if(e.target.value!=pasw)
    setpasConf("password and password confirmation not matched")
    else{
        setpasConf("");
    }

}

     return(
         <div>
              <form onSubmit={createUser}>
                <p>
                    <p>{fnameval}</p>
            <label> First Name:
                <input type="text" name="fname" onChange={(e)=>{setFname(e.target.value);fnameValidation(e)}} value={fname}></input>
            </label>
            </p>
            <p><p>{lnameval}</p>
            <label>Last Name:
                <input type="text" name="lname" onChange={(e)=>{setLname(e.target.value);lnameValidation(e)}}></input>
            </label></p>
            <p>
                <p>{emailval}</p>
            <label>Email
                <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value);emailValidation(e)}}></input>
            </label></p>
            <p>
                <p>{paswval}</p>
            <label>Password: 
                <input type="password" name="pasw" onChange={(e)=>{setPasw(e.target.value);paswValidation(e)}}></input>
            </label></p>
            <p>
                <p>{pasconf}</p>
                <p>{pascval}</p>
            <label>Password Confirmation:
                <input type="password" name="pasc" onChange={(e)=>{setPasc(e.target.value);pasconValidation(e);checkpasswordValidation(e)}}></input>
            </label></p>
            <input type="submit" value="Create User" />
            </form>
          
         </div>
     );
 }
 export default UserForms;