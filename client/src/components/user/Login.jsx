import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
function Login() {
    //we use useState to store input values (email, password)
    const [email,setEmail]=useState("")//email → stores email value,  setEmail → updates email,  "" → initial value (empty)
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
   async function handlesubmit(e){
        e.preventDefault();
        try{
       const response = await axios.post(
        "http://localhost:3000/user-api/user",
        {
            email:email,
            password:password
        }

       );
       console.log("login successfull",response.data);
      navigate("/resume")
        }catch(error){
            console.error("Login error:", error.response?.data || error.message);
        }
        
    }
  return (
    <div className='login-card'>
        <h2>Login</h2>
        <form onSubmit={handlesubmit}>
        <input type="email"
         placeholder='Email'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}></input>
         <input type="password"
         placeholder='Password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}></input>
         <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login