import React from 'react'
import {useState} from "react"
import axios from 'axios'
function Login() {
    //we use useState to store input values (email, password)
    const [email,setEmail]=useState("")//email → stores email value,  setEmail → updates email,  "" → initial value (empty)
    const [password,setPassword] = useState("")
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
      
        }catch(error){
            console.error("Login error:", error.response?.data || error.message);
        }
    }
  return (
    <div>
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