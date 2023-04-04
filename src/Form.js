import React, { useState } from 'react'

const axiosConfig = {
    uri: "http://150.230.91.86:3232"
}


const stateInitial = {
    email: "",
    password: ""
}


export const Form = () => {

    const [state, setState] = useState(stateInitial);
    
    const handleChangeEmail = (e) => {
        setState(prev =>{
            return {...prev, email: e.target.value}
        })
    }

    const handleChangePass = (e) => {
        setState(prev =>{
            return {...prev, password: e.target.value}
        })
    }

    const handleLogin = async () => {
        try {
            const response = await fetch("http://150.230.91.86:3232",{method:"GET"});
            const data = await response.json();
            return data;
          } catch (error) {
            return error;
          }

    }



    return (
    <div>
        <label>Email</label>
        <input type="text" value={state.email}  onChange={handleChangeEmail}></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" value={state.password} onChange={handleChangePass}></input>
        <br></br>
        <br></br>
        <button onClick={handleLogin}>Login</button>
      </div>
    )
}