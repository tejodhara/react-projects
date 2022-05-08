import React, { useState } from 'react'

function UserForm(props) {

    const [userData, setuserData] = useState(
        {
            username: "",
            password: "",
        }
    );
    // console.log("userData",userData);
    
    let updateUserData = (event) =>{
        setuserData({
            ...userData,
            [event.target.name] : event.target.value,
        })
    }

    let saveData = () =>{
        // do all the validation
        
        // sending data to parent component
        props.getDataFromForm(userData);

        //clear the form after submit
        setuserData({
            username: "",
            password: "",
        });  
    };

  return (
    <div>
        <h1>Login Form</h1>
        <input name="username" type='email' placeholder='Enter email' value={userData.username} onChange= {(event)=>{updateUserData(event)}}/>
        <input name="password" type='password' placeholder='Enter password' value={userData.password} onChange= {(event)=>{updateUserData(event)}}/>
        <button onClick={saveData}>Submit</button>
    </div>
  )
}

export default UserForm