import React, {useState} from 'react';

 const UserForm=(props)=>{

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[pasw,setPasw]=useState("");
    const[pasc,setPasc]=useState("");
    const[isSubmited, setisSubmited]=useState(false);
    const [lenghtError,seTitleError]=useState("");
    const [emaillength,seTEmaillength]=useState("");
    const[passww,setPassword]=useState("");

    const createUser=(e)=>{
        e.preventDefault();
        const newUser={fname,lname,email,pasw,pasc};
        setFname("");
        setLname("");
        setEmail("");
        setPasw("");
        setPasc("");
    };

    const message=()=>{
      return isSubmited ?
      "Thank you for submiting":
      "Please Submit the form";
    };
// length validation
    const checkLength=(e)=>{
     if (e.target.value.length <2)
     seTitleError ("It must be more than two charecter");
     else {
        seTitleError("");
     } 
    }
    // email length
    const checkemailLength=(e)=>{
        if(e.target.value.length<8)
        seTEmaillength ("The Email Length must be mor than 8");
        else{
            seTEmaillength("");
        }
    }
   
// Create validations for password and confirm password
const passValidation=(e)=>{

    //  if(e.target.value.pasw !==e.target.value.pasc)
     if (pasc!=pasw)
    setPassword("password and Confirmation did not match");
    else{ 
        setPassword("");
    }
}

     return (
         <div>
              <h3>{message()}</h3>
             <form onSubmit={createUser}>
                 <div>
                    
                     <p >{lenghtError}</p>
                     <label>
                         First Name:
                         <input type="text"  name="fname" onChange={(e)=>{setFname(e.target.value); checkLength(e)}} value={fname}/>
                     </label>
                 </div><br/>
                 <div>
                 <p >{lenghtError}</p>
                     <label>Last Name :
                         <input type="text" name="lname"  onChange={(e)=>{setLname(e.target.value); checkLength(e)}} value={lname}/>
                     </label>
                 </div><br/>
                 <div>
                 <p >{lenghtError}</p>
                     <label>Email :
                         <input type="email" name="email"  onChange={(e)=>{setEmail(e.target.value); checkLength(e)}} value={email}/>
                     </label>
                 </div><br/>
                 <div>
                 <p >{emaillength}</p>
                     <label>Password :
                         <input type="password" name="pasw" onChange={(e)=>{setPasw(e.target.value);checkemailLength(e)}} value={pasw}/>
                     </label>
                 </div><br/>
                 <div>
                      <p >{passww}</p>
                      <p >{emaillength}</p>
                     <label> Confirm Password :
                         <input type="password" name="pasc"  onChange={(e)=>{setPasc(e.target.value);passValidation(e);;checkemailLength(e)}} value={pasc}/>
                     </label>
                 </div><br/>
                 <input type="submit" value="Submit" />

             </form>
         </div>
     );
 }
 export default UserForm;