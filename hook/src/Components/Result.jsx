import React from 'react';
import UserForm from './UserForm';
const Result=(props)=>{
    const {fname,lname,email,password,passwordConfirm}=props.data;
    return(
        <div> 
            <h1>Results</h1>
            <p>First Name :{fname}</p>
            <p>Last Name :{lname}</p>
            <p>Email :{email}</p>
            <p>Password :{password}</p>
            <p>Password confirmation :{passwordConfirm}</p>
        </div>
        
    );

}
export default Result;