import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react'
function Users() {
    const [emails,setEmails]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/user-api/useremails")
        .then((res)=>{setEmails(res.data)})
        .catch((err)=>{console.log("error at fetching frontend side")})
    },[])
  return (
    <div>
        <h1>emails data</h1>
        {
            emails.map((users,index)=>(
                <li key={index}>{users.email}</li>
            ))
        }
    </div>
  )
}

export default Users