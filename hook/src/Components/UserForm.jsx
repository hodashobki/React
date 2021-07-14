import React from 'react';

const UserForm =(props)=>{
    // const [fname ,setFname]=useState("");
    // const [lname ,setLname]=useState("");
    // const [email, setEmail]=useState("");
    // const [password, setPassword]=useState("");
    // const [passwordConfirm, setPasswordConfirm]=useState("");
    const {inputs,setInputs}=props;

    const createUser=(e)=>{
        e.preventDefault();
        setInputs({
     ...inputs,
     [e.target.name]:e.target.value
    });
};

    // const createUser=(e)=>{
    //     e.preventDefault();
    //     const newUser={fname,lname,email,password,passwordConfirm};
    // };
    return(
        <form >
            <div>
                <label>
                  First  Name
                    {/* <input type="text" name="fname" onChange={(e)=>setFname(e.target.value)} value={fname} /> */}
                    <input type="text" name="fname" onChange={createUser} />
                </label>
            </div><br></br>
            <div>
                <label>
                   Last Name
                    {/* <input type="text"  name="lnmae" onChange={(e)=>setLname(e.target.value)} value={lname} /> */}
                    <input type="text"  name="lnmae" onChange={createUser}  />
                </label>
            </div><br></br>
            <div>
                <label>
                    Email:
                    {/* <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={ email} /> */}
                    <input type="email" name="email" onChange={createUser}  />
                </label>
            </div><br></br>
            <div>
                <label>
                    Password :
                    {/* <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={ password }  /> */}
                    <input type="password" name="password" onChange={createUser}   />
                </label>

            </div><br></br>
            <div>
                <label>
                    Password  Confirm:
                    {/* <input type="password" name="passwordConfirm" onChange={(e)=>setPasswordConfirm(e.target.value)} value={ passwordConfirm }  /> */}
                    <input type="password" name="passwordConfirm" onChange={createUser}  />
                </label>

            </div><br></br>
            <input type="submit" value="Create User" />

        </form>
    );

}
export default UserForm;