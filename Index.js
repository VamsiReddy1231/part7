import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = async() => {
        try{
            const res = await axios.post("http://localhost:9999/login",
                         {username,password});
            setToken(res.data.token);
            //if you want to store token in localstorage for future purpose, here you can write
        }catch(err){
            console.error("Error occured:" + err);
        }
    }
    return (
        <div>
            <h1>Login Form</h1>
            <input type='text' placeholder='UserName:' value={username} 
                onChange={e => setUsername(e.target.value)} /><br/>
            <input type='password' placeholder='Password:' value={password} 
               onChange={e => setPassword(e.target.value)} /><br/>
            <button onClick={handleLogin}>Login</button>
            {
                token && <p>Your Token is:{token}</p>
            }
        </div>
    )
}